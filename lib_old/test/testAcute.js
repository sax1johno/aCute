/**
 * Test the entire index of the application to show that the workflow and
 * injection all happen correctly.
 **/

var assert = require('assert'),
    acute = require('../acute'),
    component = require('../component'),
    sutil = require('util');
    
describe('acute', function() {
    describe('#bootstrap', function() {
        it('should bootstrap from a well-formed module', function(done) {
            // First, create a module and then bootstrap it.
            var goodModule = new component('test', []);
            assert.doesNotThrow(function() {
                acute.bootstrap(goodModule).then(function() {
                    done();
                }, function(err) {
                    assert.fail(err, null, 'The error condition should not have been triggered.')
                    done();
                })    
            })
        })
        it('should cause error with a poorly-formed module', function(done) {
            var badModule = {};
            assert.doesNotThrow(function() {
                acute.bootstrap(badModule).then(function(container) {
                    assert.fail(container, null, 'The error condition should not have been triggered.')
                    done();
                }, function(err) {
                    console.log('Error during bootstrap: ' + err);
                    done();
                })    
            })
        })
        it('should load component and dependencies', function(done) {
            this.timeout(5000);
            var component1 = new component('test', []).register('testService', [function() {
                var name = function(nme) {
                    console.log(nme);
                }
                return name;
            }]);
            var component2 = new component('test2', [component1]);
            assert.doesNotThrow(function() {
                    acute.bootstrap(component2).then(function(container) {
                        var tf = container.get('testService');
                        console.log(tf);
                        done();
                }, function(err) {
                    assert.fail(err, null, 'The error condition should not have been triggered.')
                    done();
                })    
            })
        })
    })
});