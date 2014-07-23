/**
 * The core component contains all of the core functionality for an aCute
 * app.
 **/
 
var $acute = require('../acute'),
    component = require('../component'),
    sutil = require('util'),
    appService = require('./app'),
    controllerService = require('./controller'),
    modelService = require('./model'),
    viewService = require('./view'),
    middlewareService = require('./middleware'),
    utilityService = require('./utility'),
    serviceService = require('../service');
    

exports = function(container) {
    var CoreComponent = $acute.component('core', [], container);
    
    CoreComponent.register('controller', controllerService);
    CoreComponent.register('model', modelService);
    CoreComponent.register('view', viewService);
    CoreComponent.register('middleware', middlewareService);
    CoreComponent.register('utility', utilityService);
    CoreComponent.register('service', serviceService);
    
    CoreComponent.config([
        function() {
            // Right now, config function doesn't do anything.
        }
    ]);
    
    CoreComponent.run(['controller', 'model', 'view', 'middleware', 'utility', 'service',
        function(controller, model, view, middleware, utility, service) {
            // Do whatever you need to when the core is loaded.
        }
    ]);
    
    return CoreComponent;
};