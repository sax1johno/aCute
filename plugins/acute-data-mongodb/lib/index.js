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
      var async = require('async');
      
      /**
       * This searches through the current environment configurations and uses the
       * config info for data from there only.
       * Providers can be added by installing the "acute-data-*" npm package, where
       * "*" is the name of the provider.
       **/
        register(null, {
          mongodb: {
            connect: function(config, fn) {
                  var mongoose = require('mongoose');
                  var connectionString = "mongodb://";
                  if (config.host && config.database) {
                      if (config.username && config.password) {
                          connectionString += config.username + ":" + config.password + "@";
                      }
                      connectionString += config.host + "/" + config.database;
                      var connection = mongoose.connect(connectionString);
                      console.log("database = " + connectionString);
                      fn(null, connection);
                  } else {
                      fn("Unable to get database connection");      
                  }
            }
          }
        });
//   var db = imports.database;
  }
};