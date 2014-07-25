var assert = require('assert'),
    acute = require('../acute'),
    config = require('./config'),
    architect = require('architect'),
    path = require('path');
    
describe('acute-controller', function() {
    describe('#registerController', function() {
        it ('should register a new controller with the controller registry', function(done) {
            this.timeout(5000);
            assert.doesNotThrow(function() {
                var configPath = path.join(__dirname, "config.js");
                var config = architect.loadConfig(configPath);
                console.log("Config is ", config);
                var newApp = acute.createApp(config, function(err, acuteApp) {
                    if (!err) {
                        var controllerService = acuteApp.app.services.controller;
                        controllerService.registerController(
                            'get', 
                            '/', 
                            function(req, res, next) {
                            },
                            [], 
                            function(err) {
                                assert.equal(err, null, 'Error should have been null');
                            })
                        done();
                    } else {
                        done(err);
                    }
                })
            })
        })
    })
});