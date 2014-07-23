 /**
 * A configuration method can be attached to any service.  Config methods
 * return a key:value pair of values that can be accessed via injection.
 * 
 * Config objects cannot be injected into, but they can access other singleton
 * instances of objects before they are instantiated.
 * 
 * In this way, config objects can be used to configure what service providers,
 * 3rd party libraries, and etc will be used in the application.
 **/
var acute = require('../index'),
    component = require('../component');
    
component.config = [];

/**
 * Add a configuration function to this module.
 **/
component.prototype.config = function(injectables) {
        var fn = injectables.pop();
        fn.$inject = injectables;
        this.$config.push(fn);
        
        return this;
};