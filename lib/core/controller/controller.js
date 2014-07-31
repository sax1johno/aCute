/**
 * The controller service allows for the creation and registration of application
 * controllers.  Controllers are pieces of application functionality that execute
 * when a route is called.
 **/

var _ = require('underscore'),
    fs = require('fs');

module.exports = function setup(options, imports, register) {
    /**
     * The available app service is used to register the routes 
     * with the backing app.  The app service is assumed to conform
     * to the express.js API.
     **/
    var app = imports.app;

    /**
     * Allow us to call the route action in the application context.
     **/
    var routeAction = function(route, fn) {
        return function(req, res, next) {
            fn.apply(this, arguments);
        };
    }

    /**
     * A helper method that makes reading a controller file easiser
     * @param file the controller file name (including the basedir).
     * @param completeFn a callback that's called when the file loaded'
     **/
    var bootController = function(file, completeFn) {
          var actions = require(file);
          if (!_.has(actions, 'routes')) {
              console.log("No routes found");
              completeFn();
              return;
          }
          Object.keys(actions).map(function(action){
            if (action == 'routes') {
                // add some routes from the routes part.
                //actions[action] = routes array.
                var actionsIndex = actions[action].length;
                if (actionsIndex <= 0) {
                    completeFn();
                }
                actions[action].forEach(function(route) {
                    actionsIndex--;
                    registerController(route.verb, route.route, route.method, route.middleware, function(err) {
                        if (!err) {
                            // console.log('adding route ' + routepath);
                            if (actionsIndex <= 0) {
                                // console.log("Actions index = 0");
                                completeFn();
                            }
                        } else {
                            completeFn(err);
                        }
                    });
                });
            }
          });
        
    };
    
    var registerController = function(verb, route, method, middleware, cb) {
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
        };
    
    
    register(null, {
        controller: {
            /**
             * Consumes a directory of controllers (basedir), reads the 'routes' 
             * object in each controller, and registers the routes with the 
             * controller service.
             * @param basedir the base directory of the controllers.
             * @completeFn a callback that's fired when the controllers are loaded. 
             **/
            bootControllers: function(basedir, completeFn) {
                var controllerDir = basedir + '/controllers';
                  fs.readdir(controllerDir, function(err, files){
                        if (err) {
                            completeFn(err);
                        } else {
                            if (!_.isNull(files) && !_.isUndefined(files)) {
                                if (files.length <= 0) {
                                    completeFn();
                                    console.log("no files found");
                                } else {
                                    var filesIndex = files.length;
                                    files.forEach(function(file){
                                        filesIndex--;
                                        bootController(file, function() {
                                            if (filesIndex <= 0) {
                                                completeFn();
                                            }
                                        });
                                    });
                                }
                            };        
                        }
                    });
            },
            /**
             * RegisterController allows for the registration of a controller object
             * and adds the routes to the available app service.
             **/
            registerController: registerController
        } 
    });
};