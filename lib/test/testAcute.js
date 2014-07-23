var assert = require('assert'),
    acute = require('../acute'),
    config = require('./config');

describe('acute', function() {
    describe('#createApp', function() {
        it ('should create a new app with test config', function(done) {
            assert.doesNotThrow(function() {
                var newApp = acute.createApp(config, function(err, app) {
                    if (!err) {
                        done();
                    } else {
                        done(err);
                    }
                })
            })
        })
    })
});