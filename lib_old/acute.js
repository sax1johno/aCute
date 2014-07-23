/**
 * The Acute framework is a modern web framework for node.js.  It has features like dependency
 * injection, separation of concerns, and other cool stuff.
 **/
 
 
 /**
  * NOTE TO SELF: This is doing too much.  Make the components much more simple.
  * Intravenous does so much for you, so use it as much as you can.  Get rid of
  * configFn's and runFn's until you have the container stuff completely handled.
  **/
  
  
  
  
 /*
  * First, load up all of the objects that make this thing work.
  */
var Component = require('./component'),
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
var loadComponent = function(thisComponent, outerContainer, cb) {
    var load = function() {
        thisComponent.$config.$name = thisComponent.$name + "$config";
        configFns.concat(thisComponent.$config);
        thisComponent.$run.$name = thisComponent.$name + "$run";
        runFns.concat(thisComponent.$run);
        thisComponent.$get(outerContainer, cb);
    };
    
    if (_.isUndefined(outerContainer)) {
        outerContainer = intravenous.create();
    }
    if (_.isUndefined(thisComponent)) {
        cb('Unable to find component for name ' + name);
    } else if (Object.getPrototypeOf(thisComponent) !== Component.prototype) {
        cb('Attempted to load non-component object', null);
    } else {
        if (!_.isEmpty(thisComponent.$dependencies)) {
            async.eachSeries(thisComponent.$dependencies, function(dep, callback) {
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
    
 };

/**
 * Bootstrap is how an acute application is started up.  The bootstrap runs
 * through each step of the boot process in series and returns a promise that
 * resolves with the injector when boot is complete or rejects if boot fails.
 * @param seed the seed or component for this application.
 **/
exports.boot = function(seed) {
    var bootDefer = q.defer();

    var mainContainer = intravenous.create();

    var that = this;
    
    /**
     * Run through the boot process methods in series and return a promise.
     * Waterfall will let the arguments flow into each other.
     * The steps to the boot process are as follows:
     * 1) Load each component
     * 2) Execute config functions of each loaded component in the order it was loaded.
     * 3) Execute all Run functions of each loaded component in the order it was loaded.
     **/
    async.parallel([
        function(callback){
            /**
             * Step 1: load each component in the order they are requested / defined.
             * Module dependencies are also loaded in-order.
             **/
            loadComponent(seed, mainContainer, function(err, container) {
                if (!err) {
                    mainContainer = container;  
                }
                callback(err);
            });
        },
        function(callback){
            /**
             * Step 2: Execute the configuration functions and load them into the 'config' injectable.
             * "$config" is a special service name that is used to inject the application's configuration
             * into various places.
             **/
            var configSvc = {};
            var configReturn = {};
            async.eachSeries(configFns, function(config, cb) {
                configReturn = config.apply(that, []);
                _.extend(configSvc, configReturn);
                cb();
            }, function(err) {
                if (!err) {
                    mainContainer.register('$config', configSvc);
                    callback(configSvc);
                } else {
                    callback(err);
                }
            })
        }, function(callback) {
            /**
             * Step 3: Execute the run functions for each component.
             **/
            async.eachSeries(runFns, function(run, cb) {
                try {
                    mainContainer.register(run.$name, run);
                    mainContainer.get(run.$name)();
                } catch (e) {
                    cb(e);
                }
                cb();
            }, function(err) {
                if (!err) {
                    callback();
                } else {
                    callback(err);
                }
            })
        }, function(callback) {
            /**
             * TODO:
             * Step 4: Finally, create the app context and run it.
             **/
        }
    ],
    // optional callback
    function(err){
        if (err) {
            bootDefer.reject(err);
        } else {
            bootDefer.resolve(mainContainer);
        }
    });
    
    return bootDefer.promise;
};

/**
 * Inject all possible injectables into the function and execute that 
 * function.
 * @param fn the function to run.
 * @throws an error if the function encounters an exception.
 **/
var inject = exports.inject = function(fn) {
    
}

/**
 * A component factory that allows the user to create new components.
 **/
exports.component = function(name, dependencies) {
    return new Component(name, dependencies);
}