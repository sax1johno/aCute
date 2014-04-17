/**
 * The Acute framework is a modern web framework for node.js.  It has features like dependency
 * injection, separation of concerns, and other cool stuff.
 **/
 
 /*
  * First, load up all of the objects that make this thing work.
  */
var Module = require('./module'),
    utils = require('./utils'),
    async = require('async'),
    _ = require('underscore'),
    q = require('q'),
    intravenous = require('intravenous');

/**
 * loadModule is a helper function that loads a module into the application.
 **/
//  var loadModule = utils.noop;
var configFns = [];
var runFns = [];

 /**
  * Loading components is a recursive process.  First, the module to load
  * is checked for dependencies.  If those dependencies exist, those modules
  * are loaded as well.
  * Once the module load is complete, it will return a DI container that 
  * consists of all of the dependent injectables)
  * @param component the module object to be loaded.
  * @param container a parent container from which a nested contianer can be created.
  * @param cb a callback that's called with (err, nestedContainer) which returns
  *         the nested container with all of the sub-dependencies fulfilled.
  **/
var loadComponent = function(component, outerContainer, cb) {
    if (_.isUndefined(outerContainer)) {
        outerContainer = intravenous.create();
    }
    if (_.isUndefined(component)) {
        cb('Unable to find component for name ' + name);
    } else {
        console.log('Loading component ' + component.$name);
        if (!_.isEmpty(component.$dependencies)) {
            async.eachSeries(component.$dependencies, function(dep, callback) {
                loadComponent(dep, outerContainer, function(err, innerContainer) {
                    outerContainer = innerContainer;
                    callback(err);
                });
            }, function(err) {
                if (err) {
                    cb(err);
                } else {
                    load();
                }
            });
        } else {
            load();
        }
    }
    
    var load = function() {
        configFns.concat(component.$config);
        runFns.concat(component.$run);
        component.$get(cb);
    };
 };

/**
 * Bootstrap is how an acute application is started up.  The bootstrap runs
 * through each step of the boot process in series and returns a promise that
 * resolves with the injector when boot is complete or rejects if boot fails.
 **/
exports.bootstrap = function(seedModule) {
    var bootDefer = q.defer();

    var mainContainer = intravenous.create();
    
    // Run through the boot process methods in series and return a promise.
    // Waterfall will let the arguments flow into each other.
    async.parallel([
        function(callback){
            // Step 1: create the global container context.
            loadComponent('app', seedModule, mainContainer, function(err, container) {
                mainContainer = container;
                callback(err);
            });
        },
        function(callback){
            // Step 2: Run the configuration step for each module.
            
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