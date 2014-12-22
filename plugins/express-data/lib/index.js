/**
 * Reads and stores information about different database configurations based on the current
 * environment.  Gets the environment from the app.settings.env variable, which itself reads
 * the NODE_ENV environment variable and defaults to "development" if none is present.
 **/

/**
 * @options is the hash of options the user passes in when creating an instance
 * of the plugin.
 * @imports is a hash of all services this plugin consumes.
 * @register is the callback to be called when the plugin is done initializing.
 */
module.exports = function setup(options, imports, register) {
  if (!options.environments) {
    register("No environments were found");
  } else {
      var app = imports.app,
          async = require('async');
      
      /**
       * This searches through the current environment configurations and uses the
       * config info for data from there only.
       * Providers can be added by installing the "acute-data-*" npm package, where
       * "*" is the name of the provider.
       **/
      async.each(options.environments[app.settings.env].keys(), function(dataConfig, cb) {
        var configObject = options.environments[app.settings.env][dataConfig];
        if (!configObject.hasOwnProperty("provider")) {
          cb("Provider is a required field");
        } else {
          var provider = imports["acute-data-" + configObject.provider];
          if (provider === undefined || provider === null) {
            cb("Unable to require / find a registered handler for " + configObject.provider);
          } else {
            var currentData;
            if (app.get("data") !== undefined && app.get("data") !== null) {
              currentData = app.get("data");
            } else {
              currentData = {};
            }
            // Providers all implement a "connect" method that returns
            // some form of database connector.
            provider.connect(configObject.provider, function(err, connection) {
              if (!err) {
                currentData[dataConfig] = connection;
                app.set("data", currentData);
                cb();
              } else {
                cb(err);
              }
            });
          }
        }
      }, function(err) {
        if (err) {
          register(err);
        } else {
          register(null, {
            data: app.get("data")
          });
        }
      });
//   var db = imports.database;
  }
};