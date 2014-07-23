/**
 * Test the entire index of the application to show that the workflow and
 * injection all happen correctly.
 **/

var assert = require('assert'),
    component = require('../component');
    
describe('component', function() {
    it('should instantiate', function() {
        assert.doesNotThrow(function() {
            new component('test', []);
        });
    });
    
    it('should allow method chaining', function() {
        assert.doesNotThrow(function() {
            new component('test', []).config([function() {
            }]).run([function() {
            }]).register('test', [function() {
            }]);
        }) 
    });
    
    describe('#config', function() {
        it ('should add a configuration method to the module', function() {
            var testComponent = new component('test', []).config([function() {
                return null;
            }])
            
            assert.equal(testComponent.$config.length, 1);
        });
        
        it ('should allow injectables', function() {
            var testComponent = new component('test', []).config(['service1', function(service1) {
                return null;
            }])
            
            assert.equal(testComponent.$config.length, 1);
            assert.equal(testComponent.$config[0].$inject[0], 'service1');
        });
        
        it('should allow multiple calls', function() {
            var testComponent = new component('teste', []).config(['service1', function(service1) {
            }]).config(['service2', function(service2) {
            }]);
            assert.equal(testComponent.$config.length, 2);
        });
    });
    
    describe('#run', function() {
        it ('should add a run method to the module', function() {
            var testComponent = new component('test', []).run([function() {
                return null;
            }])
            
            assert.equal(testComponent.$run.length, 1);
        });
        
        it ('should allow injectables', function() {
            var testComponent = new component('test', []).run(['service1', function(service1) {
                return null;
            }])
            
            assert.equal(testComponent.$run.length, 1);
            assert.equal(testComponent.$run[0].$inject[0], 'service1');
        });
        
        it('should allow multiple calls', function() {
            var testComponent = new component('teste', []).run(['service1', function(service1) {
            }]).run(['service2', function(service2) {
            }]);
            assert.equal(testComponent.$run.length, 2);
        });
    });
    
    describe('#register', function() {
        it('should register a service with the module', function() {
            var testComponent = new component('test', [])
                .register('testComponent', [function() {
                    return null;
                }]);
            assert.equal(testComponent.$services.length, 1);
        })
    })    
});