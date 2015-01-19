/**
 * This file runs the application bootstrap, and can be used to run other
 * arbitrary code and configurations.
 **/
var architect = require('architect'),
    $config = require('./config');


/**
 * Finally, let's boot up this app and get it running.  Once the application
 * is booted, you can use any mechanism you want to listen on any port
 * you'd like and the application configures the port.
 **/
 architect.createApp($config, function(err, arch) {
    if (!err) {
        /**
         * Listen on the configured port.
         **/
         var app = arch.getService("app");
         app.server.listen();
        // app.server.listen(); // The app config contains a parameter 'port'.
        console.log("Now listeneing to acute app on port ", app.config.port);
    } else {
        // If the boot promise is rejected, then display the errors.
        console.error("Unable to boot application: ", err);
    }
});