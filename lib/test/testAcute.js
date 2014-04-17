/**
 * Test the entire index of the application to show that the workflow and
 * injection all happen correctly.
 **/

var assert = require('assert'),
    acute = require('../index'),
    component = require('../component');
    
describe('acute', function() {
    describe('#loadComponent', function() {
        it('should load a well formed module', function(done) {
            var goodModule = new component('test', []);
            assert.doesNotThrow(function() {
                
            })
        })
        it('should load cause error with a poorly-formed module', function(done) {
            
        })
    })
});