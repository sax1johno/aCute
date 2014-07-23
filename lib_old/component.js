/**
 * This objects contains the module API and creates the functionality for adding
 * modules.
 **/
 
var q = require('q'),
    async = require('async'),
    intravenous = require('intravenous');

/**
 * The Acute Module is an independent unit of functionality in an acute app.
 * @param name the name of this module.
 * @param dependencies an array of dependent modules.
 **/
var AcuteComponent = function(name, dependencies, container) {
    this.$name = name;
    this.$dependencies = dependencies;
    
    // Config functions are run before the controllers, services, views, and models
    // are instantiated.
    this.$config = [];
    
    // Run functions are run after the controllers, services, views, and models
    // are instantiated.
    this.$run = [];
    
    this.container = typeof container == 'undefined' ? intravenous.create() : container;
    
};

AcuteComponent.prototype.register = function(name, clazz) {
    this.container.register(name, clazz);    
    return this; // for chaining.
};

AcuteComponent.prototype.boot = function(container, callback) {
    async.series([
        function(cb) {
            /**
             * First, execute all of the config functions and register
             * their results.
             **/
            async.eachSeries(this.$config, function(configFn, configCb) {
                this.register()
            }, function(err) {
                configCb(err);
            });
           
        }
    ], function(err) {
        
    })
    // A container for storing all of the contructor functions for this
    // module.
    // async.each(this.$services, function(item, cb) {
    //     container.register(item.$name, item.$fn);
    //     cb(null, container);
    // }, function(err) {
    //     callback(err, container);
    // });
    
};


/**
 * Add a run function to this module.
 **/
AcuteComponent.prototype.run = function(injectables) {
    var fn = injectables.pop();
    fn.$inject = injectables;
    this.$run.push(fn);
    
    return this;
}; 

module.exports = AcuteComponent;