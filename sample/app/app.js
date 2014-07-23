/**
 * This file runs the application bootstrap, and can be used to run other
 * arbitrary code and configurations.
 **/
var $acute = require('../lib/acute'),
    $config = require('./config'),
    core = require('../../lib/core')

/**
 * First, we'll create a new root component for this application from the 
 * acute component factory.  Make sure the component has a unique name
 * and specifies its external dependencies
 **/
var myApp = $acute.component('myApp', [core]);

/**
 * Adding app-wide configuration to the seed module from the config.js file.
 **/
myApp.config($config);

/**
 * Add any runtime code you'd like to see for the app here.
 * This is run immediately upon booting the application, and any services
 * desired can be injected into here.
 **/
myApp.run([myApp.container.config, function(config) {
    console.log("We're now in the run step.");
    // config data injected here as an example.
}]);

/**
 * Finally, let's boot up this app and get it running.  Once the application
 * is booted, you can use any mechanism you want to listen on any port
 * you'd like and the application configures the port.
 **/
$acute.boot(myApp, function(err, container) {
    if (!err) {
        // If the boot process is successful, it goes to the 'resolve' portion of the promise.
        var app = container.get('app');
        /**
         * This gets the configuration for the new application, which contains
         * any configuration done after the application has been booted.
         **/
        var config = container.get('config');
        
        /**
         * Listen on the configured port.
         **/
        app.listen(config.port); // The app config contains a parameter 'port'.
        console.log("Now listeneing to acute app on port ", config.port);
    } else {
        // If the boot promise is rejected, then display the errors.
        console.error("Unable to boot application: ", err);
    }
});