/**
 * This objects contains the module API and creates the functionality for adding
 * modules.
 **/
 
var q = require('q'),
    async = require('async');

/**
 * The Acute Module is an independent unit of functionality in an acute app.
 * @param name the name of this module.
 * @param dependencies an array of dependent modules.
 * @param container the root container object.
 **/
var AcuteModule = function(name, dependencies) {
    this.$name = name;
    this.$dependencies = dependencies;
    
    // Config functions are run before the controllers, services, views, and models
    // are instantiated.
    this.$config = [];
    
    // Run functions are run after the controllers, services, views, and models
    // are instantiated.
    this.$run = [];
    
    // Services are injectable pieces that can be accessed by other components
    // in the application.
    this.$services = [];
    
};

AcuteModule.$get = function(container, callback) {
    // A container for storing all of the contructor functions for this
    // module.
    async.each(this.$services, function(item, cb) {
        container.register(item.$name, item.$fn)
    }, function(err) {
        callback(err, container);
    });
};

/**
 * Add a configuration function to this module.
 **/
AcuteModule.prototype.config = function(injectables) {
        var fn = injectables.pop();
        fn.$inject = injectables;
        this.$config.push(fn);
        
        return this;
}

/**
 * Add a run function to this module.
 **/
AcuteModule.prototype.run = function(injectables) {
    var fn = injectables.pop();
    fn.$inject = injectables;
    this.$run.push(fn);
    
    return this;
}; 

/**
 * The register method contains pieces of code that can be instantiated to provide logic
 * to an application.  They are functions and can be instanted by appending
 * a "Factory" suffix during the "get" call.
 **/
AcuteModule.prototype.register = function(name, injectables) {
    var service = injectables.pop();
    service.$inject = injectables;
    
    // Register the service with this module's nested container.
    this.$services.push({
        $name: name,
        $fn: service
    });
    return this; // for method chaining.
};

module.exports = AcuteModule;