/**
 * acute-express-controllers walks the specified folder / file system for  all
 * of the application controllers.  Controllers return Routes and use the folder
 * names to determine the default route structure.
 **/
var async = require('async'),
    path = require('path'),
    config,  // Default configuration
    acuteUtils,
    app;


var add = function(controller, fn) {
  try {
    app.use(controller);
    fn(null);
  } catch (e) {
    fn(e);
  }
};

var load = function(fn) {
    // TODO: walk through the controllers directory structure and load up each
    // controller.
    acuteUtils.walkFs(path.join(config.controller_basedir, config.controller_dirname), function(err, files) {
        if (err) {
          fn(err);
            // completeFn();
        } else {
          console.log("files in controller directory are ", files);
          async.each(files, function(file, cb) {
            var controller = require(file);
            add(controller, function(err) {
              if(!err) {
                cb();
              } else {
                cb(err);
              }
            });
          }, function(err) {
            if (err) {
              fn(err);
            } else {
              fn();
            }
          });
        }
    });
};

/**
 * @options is the hash of options the user passes in when creating an instance
 * of the plugin.
 * @imports is a hash of all services this plugin consumes.
 * @register is the callback to be called when the plugin is done initializing.
 */
module.exports = function setup(options, imports, register) {
    config = require('../config'),  // Default configuration
    acuteUtils = imports.utils,
    app = imports.app;
        
    if (options.controller_basedir) {
      config.controller_basedir = options.controller_basedir;
    }
    if (options.controller_dirname) {
      config.controller_dirname = options.controller_dirname;
    }
    
  register(null, {
    controllers: {
      load: load,
      add: add,
      Router: app.Router
    }
  });
};