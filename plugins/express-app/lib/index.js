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
        app = express(),
        defaultConfig = require('../config'), // contains all possible configuration options
        userConfig = options.configFileLocation || (__dirname + '../../config.js'),
        finalConfig = {},
        async = require('async');
        
    async.each(defaultConfig.keys(), function(configItem, cb) {
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
          config: finalConfig
        });
      }
    });
//   var db = imports.database;

};