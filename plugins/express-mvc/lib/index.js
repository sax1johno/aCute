/**
 * Express-mvc uses the different express-* app composure services, bootstraps them 
 * and adds them to the app.
 **/

/**
 * @options is the hash of options the user passes in when creating an instance
 * of the plugin.
 * @imports is a hash of all services this plugin consumes.
 * @register is the callback to be called when the plugin is done initializing.
 */
module.exports = function setup(options, imports, register) {
  
    var async = require('async');
    
    var app = imports.app,
        config = imports.config,
        data = imports.data,
        controllers = imports.controllers,
        models = imports.models,
        views = imports.views;
        
    // async.series([
    //   function(cb) {
    //     controllers.registerControllers(app);
    //   },
    // ], function(err, results) {
      
    // })
  
//   var db = imports.database;

  register(null, {
    mvc: {
      // Services that MVC provides will go here.
    }
  });
};