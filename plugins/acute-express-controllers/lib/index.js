/**
 * acute-express-controllers walks the specified folder / file system for  all
 * of the application controllers.  Controllers return Routes and use the folder
 * names to determine the default route structure.  The folder-name convention
 * can be overridden by exporting a "mountPath" option from the controller.
 * 
 **/
var async = require('async'),
    path = require('path'),
    config,  // Default configuration
    acuteUtils,
    app,
    _ = require("underscore"),
    sutil = require('util');

var add = function(mountPath, router, fn) {
  try {
    if (!mountPath) {
      mountPath = "/";
    }
    app.app.use(mountPath, router);
    fn(null);
  } catch (e) {
    fn(e);
  }
};

var load = function(fn) {
    // TODO: walk through the controllers directory structure and load up each
    // controller.
    console.log("config = ", sutil.inspect(config));
    acuteUtils.walkFs(path.join(config.controller_basedir, config.controller_dirname), function(err, files) {
        if (err) {
          fn(err);
            // completeFn();
        } else {
          async.each(files, function(file, cb) {
            file = file.substr(0, file.lastIndexOf('.'));
            var controller = require(file)(app.Router());
            if (_.isUndefined(controller.mountPath)) {
              var relPath = path.relative(path.join(config.controller_basedir, config.controller_dirname), file);
              var p = relPath.split(path.sep)
              p.pop();
              if (!_.isEmpty(p)) {
                controller.mountPath = path.sep + p.join(path.sep);
              } else {
                controller.mountPath = "/";
              }
              console.log(controller.mountPath);
            }
            add(controller.mountPath, controller.router, function(err) {
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
    
    // console.log("Inside of setup, router = ", app.router);
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