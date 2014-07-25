var assert = require('assert'),
    acute = require('../acute'),
    config = require('./config'),
    architect = require('architect'),
    path = require('path');
    
describe('acute', function() {
    describe('#createApp', function() {
        it ('should create a new app with test config', function(done) {
            this.timeout(5000);
            assert.doesNotThrow(function() {
                var configPath = path.join(__dirname, "config.js");
                var config = architect.loadConfig(configPath);
                console.log("Config is ", config);
                var newApp = acute.createApp(config, function(err, app) {
                    if (!err) {
                        console.log("App = ", app);
                        done();
                    } else {
                        done(err);
                    }
                })
            })
        })
    })
});