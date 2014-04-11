/**
 * This objects contains the module API and creates the functionality for adding
 * modules.
 **/
 
var q = require('Q');

/**
 * The Acute Module is an independent unit of functionality in an aCute app.
 **/
var AcuteModule = function(name, dependencies) {
    this.$name = name;
    this.$dependencies = dependencies;
    this.$services = {};
    this.$controllers = {};
    this.$config = [];
    this.$run = [];
};

/**
 * Creates and registers a new controller.
 **/
AcuteModule.prototype.controller = function(name, injectables) {
    // Following the pattern from angular.js, the last method in the
    // 'injectables' array is the controller function definition itself.
    var fn = injectables.pop(); // The function on the back defines the actual service function itself.
    fn.$inject = injectables; // The rest are an array of dependencies, so annotate the service with $inject.
    this.$controllers[name] = fn;
    
    // Allow method chaining.
    return this;
};
    
/**
 * Creates and registers a new service.
 **/
AcuteModule.prototype.service = function(name, injectables) {
    var fn = injectables.pop(); // The function on the back defines the actual service function itself.
    fn.$inject = injectables; // The rest are an array of dependencies, so annotate the service with $inject.
    this.$services[name] = fn;  
    
    // Allows methods chaining.
    return this;
};

/**
 * Add a configuration function to this module.
 **/
AcuteModule.prototype.config = function(injectables) {
    var fn = injectables.pop();
    fn.$inject = injectables;
    this.$config.push(fn);
    
    return this;
};

/**
 * Add a run function to this module.
 **/
AcuteModule.prototype.run = function(injectables) {
    var fn = injectables.pop();
    fn.$inject = injectables;
    this.$run.push(fn);
    
    return this;
}; 

var acuteModuleFactory = {
    define: function(name, dependenciesList) {
        return new AcuteModule(name, dependenciesList);
    }
}

module.exports = new acuteModuleFactory();