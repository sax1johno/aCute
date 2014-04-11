/**
 * The injector is an object that allows services to be added to the application,
 * injected into the application, and creates the inversion of control layer.
 * 
 * Api has the following stuff:
 * - get: Gets a service
 * - annotate: Gets the annotations for a service function
 * - invoke: Invokes a service and a method
 **/
var _ = require("underscore"),
    utils = require('./utils'),
    _ = require('underscore');

var Injector = function() {
    /**
     * Services contains an instance of the available services.
     * Modules contains the function that defines a module.
     **/
     
    // ex: 'test': testFn
    var services = {};
    
    /** Controllers are scoped to a module, so it would look
     * something like the following:
     * controllers: { 'module': { 'testController' : testControllerFn } };
     **/
    var controllers = {};
    var instanceCache = {};
    var configFunctions = [];
    var runFunctions = [];

    /**
     * Get services from the injector.
     **/
    this.get = function(name) {
        if (!_.isUndefined(instanceCache[name])) {
            return instanceCache[name];
        } else if (!_.isUndefined(services[name])) {
            return this.instantiate(services[name]);
        } else {
            return utils.noop();
        }
    };
    
    this.getController = function(moduleName, name) {
        
    }
    
    /**
     * @private Adds a controller to the injector.
     * @param name the name of the controller and module.
     * @param fn the controller function.
     **/
    this.addController = function(moduleName, name, fn) {
        if (!_.isUndefined(controllers[moduleName][name])) {
            throw new Error ("Controller " + moduleName + "." + name + " already exists");   
        } else {
            controllers[moduleName][name] = fn;
        }
    }
    
    /**
     * @private add a service to this injector.
     * @param name the name of the service to add.
     * @param fn the service function.
     **/
    this.addService = function(name, fn) {
        if (!_.isUndefined(this.services(name))) {
            services[name] = fn;
        } else {
            throw new Error("Unable to add service " + name + " because it already exists.");
        }
    }
    
    /**
     * @private Add a configuration function.
     * @param fn the configuration function.
     **/
    this.addConfig = function(fn) {
        configFunctions.push(fn);
    }
    
    /**
     * @private Add a run function
     * @param moduleName the name of the module that this run function came from.
     * @param fn the configuration function.
     **/
    this.addRun = function(fn) {
        runFunctions.push(fn);
    }
    
    /**
     * Instantiate a method in the injector and, if that method has already been
     * instantiated, return the cached version of that instance.
     * @param injectName the name where the function to be instantiated is located.
     **/
    this.instantiate = function(injectName) {
        
    }
    

    /**
     * Determine whether the injector contains a service by the specificed name.
     * @param name the name of the service to search for.
     * @return true if the service exists, false otherwise.
     **/
    this.has = function(name) {
        return !_.isUndefined(services[name]);
    };
    
    /**
     * Returns the injectable service names for this function.
     * @param name the injectable services for the specified function.
     **/
    this.annotate = function(name) {
        if (!_.isUndefined(services[name]) && !_.isNull(services[name])) {
            return services[name].$inject;
        } else {
            return [];
        }
    };
};

module.exports = Injector;