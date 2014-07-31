/**
 * The data service allows the application to connect to various data sources.
 * The data storage engine that the application uses is configurable, and the
 * default provides several common ones.
 **/

var _ = require('underscore');

module.exports = function setup(options, imports, register) {
    var app = imports.app,
        config = options.data;

    // if (!_.isUndefined(config.data) && !_.isNull(config.data)) {
    //     if (config.data.provider === 'mongodb') {
    //         var mongoose = require('mongoose');
    //         var connectionString = "mongodb://";
    //         if (config.data.host && config.data.database) {
    //             if (config.data.username && config.data.password) {
    //                 connectionString += config.data.username + ":" + config.data.password + "@"
    //             }
    //             connectionString += config.data.host + "/" + config.data.database;
    //             mongoose.connect(connectionString);
    //             console.log("database = " + connectionString);
    //             completeFn();
    //         } else {
    //             completeFn();                
    //         }
    //     } else {
    //         // console.log("Provider " + config.data.provider + " not supported");
    //         completeFn();
    //     }
    // } else {
    //     completeFn();
    // }


    register(null, {
        data: {
            /**
             * Boots the data providers into the application from the configuration file.
             **/
            getDataForEnvironment: function(environment, provider) {
                if (!_.isUndefined(provider) && !_.isNull(provider)) {
                    return config[environment].data[provider];
                };
                return config[environment].data;
            }
        }
    });
};