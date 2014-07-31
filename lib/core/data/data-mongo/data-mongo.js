/**
 * The controller service allows for the creation and registration of application
 * controllers.  Controllers are pieces of application functionality that execute
 * when a route is called.
 **/

var _ = require('underscore');

module.exports = function setup(options, imports, register) {
    var data = imports.data;

    register(null, {
        'data-mongo': {
            /**
             * RegisterController allows for the registration of a controller
             * method on the controller registry.
             **/
            setUp: function() {
                
            }
        } 
    });
};