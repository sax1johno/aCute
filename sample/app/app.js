/**
 * This file runs the application bootstrap, and can be used to run other
 * arbitrary code and configurations.
 **/
var $acute = require('../../lib/acute'),
    $config = require('./config');


/**
 * Finally, let's boot up this app and get it running.  Once the application
 * is booted, you can use any mechanism you want to listen on any port
 * you'd like and the application configures the port.
 **/
$acute.createApp($config, function(err, app) {
    if (!err) {
        /**
         * Listen on the configured port.
         **/
        app.server.listen(); // The app config contains a parameter 'port'.
        console.log("Now listeneing to acute app on port ", app.config.port);
    } else {
        // If the boot promise is rejected, then display the errors.
        console.error("Unable to boot application: ", err);
    }
});