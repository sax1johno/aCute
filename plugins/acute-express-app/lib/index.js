/**
 * Creates and returns a new express app.  The app returned will be used throughout the
 * application and will be listened to as part of the server.
 **/

/**
 * @options is the hash of options the user passes in when creating an instance
 * of the plugin.
 * @imports is a hash of all services this plugin consumes.
 * @register is the callback to be called when the plugin is done initializing.
 */
module.exports = function setup(options, imports, register) {
    var express = require('express'),
        app = express(),          // The main running app
        subapp = express,         // A constructor for subapps
        router = express.Router,  // A constructor / factory for new routers.
        defaultConfig = require('../config'), // contains all possible configuration options
        userConfig = options.configFileLocation || (__dirname + '../../config.js'),
        finalConfig = {},
        async = require('async'),
        _ = require("underscore");
        
    console.log("config = ", defaultConfig);
    console.log("userConfig = ", userConfig);
    async.each(_.keys(defaultConfig), function(configItem, cb) {
      if (userConfig.hasOwnProperty(configItem)) {
        finalConfig.configItem = userConfig.configItem;
      } else {
        finalConfig.configItem = defaultConfig.configItem;
      }
      cb();
    }, function(err) {
      if (err) {
        register(err);
      } else {
        register(null, {
          // "app" is the service this plugin provides
          app: {
            app: app,
            router: router,
            subapp: subapp
          }
        });
      }
    });
//   var db = imports.database;

};

