/**
 * The controller service allows for the creation and registration of application
 * controllers.  Controllers are pieces of application functionality that execute
 * when a route is called.
 **/

var _ = require('underscore');

module.exports = function setup(options, imports, register) {
    var app = imports.app;

    register(null, {
        controller: {
            /**
             * RegisterController allows for the registration of a controller
             * method on the controller registry.
             **/
            registerController: function(verb, route, method, middleware, cb) {
                // Supply a default callback so we don't get a null exception if they forget.
                cb = cb || function() {};
                if (_.isUndefined(route) || _.isNull(route)) {
                    cb('Unable to register controller: route is a required parameter');
                } else {
                    switch(verb) {
                        case 'get':
                            if (middleware) {
                                app.get(route, middleware, method);
                            } else {
                                app.get(route, method);
                            }
                            break;
                        case 'put':
                            if (middleware) {
                                app.put(route, middleware, method);
                            } else {
                                app.put(route, method);
                            }
                            break;
                        case 'post':
                            if (middleware) {
                                app.post(route, middleware, method);
                            } else {
                                app.post(route, method);
                            }
                            break;
                        case 'del':
                            if (middleware) {
                                app.del(route, middleware, method);
                            } else {
                                app.del(route, method);
                            }
                            break;
                        case 'all':
                            if (middleware) {
                                app.all(route, middleware, method);
                            } else {
                                app.all(route, method);
                            }
                            break;
                        default:
                            // The case where no verb has been defined.
                            if (middleware) {
                                // Augment the current middleware with your middleware.
                                app.use(route, middleware);
                            }
                    }
                    cb();
                }
            }
        } 
    });
};