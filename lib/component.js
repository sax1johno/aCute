/**
 * This objects contains the module API and creates the functionality for adding
 * modules.
 **/
 
var q = require('q'),
    async = require('async'),
    intravenous = require('intravenous'),
    _ = require('underscore');

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
    
    // Container is the service IOC container.
    this.container = typeof container == 'undefined' ? intravenous.create() : container();
    this.tempContainer = this.container.create();
};

AcuteComponent.prototype.register = function(name, clazz) {
    this.container.register(name, clazz);    
    return this; // for chaining.
};

AcuteComponent.prototype.boot = function(container, callback) {
    var configObject = {};
    var self = this;
    async.series(
        [
            // First, execute all of the config functions attached to this component.
            function(seriesCb) {
                async.eachSeries(this.$config, function(configFn, eachCb) {
                    try {
                        var result = configFn.call(this);
                        configObject = _.extends(configObject, result);
                        eachCb(null);
                    } catch (e) {
                        eachCb(e);
                    }
                }, function(err) {
                    try {
                        self.register('config', configObject);
                    } catch (e) {
                        seriesCb(e);
                    }
                })
            }, 
            // Then, execute all of the 'run' functions for this component.
            function(seriesCb) {
                async.eachSeries(this.$run, function(runFn, eachCb) {
                    try {
                        self.tempContainer.register('run', runFn);
                        self.tempContainer.get('run').call(this);
                        eachCb();
                    } catch (e) {
                        eachCb(e);   
                    }
                }, function(err) {
                    if (!err) {
                        self.tempContainer.dispose();
                        seriesCb();
                    } else {
                        seriesCb(err);
                    }
                })
            }
        ]
        , function(err, results) {
            // When it's over, 
            callback(err, self.container);    
        });
};


AcuteComponent.prototype.config = function(injectables) {
    var fn = injectables.pop();
    fn.$inject = injectables;
    this.$config.push(fn);
    
    return this;
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