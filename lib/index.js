/**
 * The Acute framework is a modern web framework for node.js.  It has features like dependency
 * injection, separation of concerns, and other cool stuff.
 **/
 
 /*
  * First, load up all of the objects that make this thing work.
  */
var Injector = require('./injector'),
    Module = require('./module'),
    Provider = require('./provider'),
    Utils = require('./utils'),
    async = require('async'),
    _ = require('underscore'),
    q = require('q');

var acute = {};

var loadedModules = {};

acute.module = function() {
    // The 2-argument version is a constructor.
    if (arguments.length == 2) {
        Module.define(arguments.unshift, arguments);
    } 
    // The one-argument version is a getter.
    else if (arguments.length == 1) {
        return 
    }
}

// Could pass the injector in here and add the services / etc methods OR
// Can just iterate through them later.  which is better?
var loadModule = function(mod, injector, fn) {
    // First, iterate through all of the dependencies and see if they've
    // already been loaded.
    if (_.has(loadedModules, mod.$name)) {
        if (loadedModules[mod.$name] == 'INSTANTIATING') {
            var err = {
                message: "Unable to load modules:",
                reason: new Error('circular dependency detected: ' + mod.$name)
            }
            fn(err);
        } else {
            fn(null, loadedModules[mod.$name]);
        }
    } else {
        // Start loading this module.  Checking for instantiating is a good
        // way of preventing circular dependencies.
        loadedModules[mod.$name] = 'INSTANTIATING';
        // Load dependencies first
        async.each(mod.$dependencies, function(dep, eachCb) {
             loadModule(dep, injector, eachCb);
        }, function(err) {
            if (err) {
                fn(err);
            } else {
                // results: { controllers: [], providers: [], services: [] }
                loadedModules[mod.$name] = mod;
                
            }
        });
    }
};

/**
 * Bootstrap is how an acute application is started up.  The bootstrap runs
 * through each step of the boot process in series and returns a promise that
 * resolves with the injector when boot is complete or rejects if boot fails.
 **/
acute.bootstap = function(seedModule) {
    var bootDefer = q.defer();
    // Run through the boot process methods in series and return a promise.
    // Waterfall will let the arguments flow into each other.
    async.waterfall([
        function(callback){
            // Step 1: load all of the modules in the dependencies list.
            var injector = new Injector();
            
            loadModule(seedModule, injector, function(err) {
                callback(err);
            });
            // callback(null, 'one');
        },
        function(callback){
            // Step 2: Run the configuration step for each module.
            
            // callback(null, 'two');
        }
    ],
    // optional callback
    function(err, injector){
        if (err) {
            bootDefer.reject(err);
        } else {
            bootDefer.resolve(injector)
        }
    });
    
    return bootDefer.promise;
};

module.exports = acute;