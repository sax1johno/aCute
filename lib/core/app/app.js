var _ = require('underscore');

/**
 * The main app service allows the user to set up an express app.
 * The interface returns the express app and a 'listen' function to make
 * listening to the server easier
 **/
module.exports = function setup(options, imports, register) {
    var express = require('express'),
        app = express();

    /** 
     * Run through the options and 
     **/
    var environment = process.env.NODE_ENV;
    if (_.isUndefined(environment) || _.isNull(environment)) {
        environment = options.environment;
    }
    
    if (options.appSettings.logger !== null && options.appSettings.logger !== undefined) {
        app.use(express.logger(options.logger));
    }
    
    if (options.appSettings.uploadDir !== null && options.appSettings.uploadDir !== undefined) {
    app.use(express.bodyParser({uploadDir: __dirname + options.uploadDir}));
    }
    
    if (options.appSettings.sessionSecretSalt !== null && options.appSettings.sessionSecretSalt !== undefined) {
        app.use(express.session({ secret: options.appSettings.sessionSecretSalt }));
    }
    
    if (options.appSettings.viewsDir !== null && options.appSettings.viewsDir !== undefined) {
        app.set('views', __dirname + options.appSettings.viewsDir); 
    }
    
    if (options.appSettings.viewEngine !== null && options.appSettings.viewEngine !== undefined) {
        app.set('view engine', options.appSettings.viewEngine);
    }
    
    register(null, {
            app: app,
            listen: app.listen(options.port)
        }
    );
};