/**
 * Controllers contain code that respond to requests that are sent in via
 * the web application infrastructure.  Controllers can define what routes
 * they respond to and what middleware need to be passed before the route
 * will respond.
 * 
 * A controller object is defined by an array with the following conditions:
 * 1. Returns an object with the following signature:
 *      {
 *          $name: 'NameOfThisController',
 *          $routes: [
 *              {
 *                  url: '/',                       // the URL the route responds to
 *                  verb: 'PUT|POST|GET|DEL|ALL',   // the HTTP verb to which it responds, or ALL for all of them.
 *                  method: fn(req, res, next) {},  // the responding code
 *                  middleware: []                  // The middleware that the responds goes through before the method responds.
 *              }, ...
 *          ],
 *          $inject: ['svc1', 'svc2', ...] // An array of annotated services to inject into the controller methods
 *      }
 * 2. When a controller is defined, services from the $inject array are injected
 *      into the controller when it is created / instantiated.
 * 
 *  ex:
 *      var TestController = function(svc1, svc2, etc) {
 *          var testRoute = function(req, res, next) {
 *              // use svc1, svc2, etc here.
 *              res.send({success: 'yes'});
 *          }
 *          return {
 *              $name: 'TestController',
 *              $routes: [
 *                  {
 *                      url: '/',                       // the URL the route responds to
 *                      verb: 'ALL',   // the HTTP verb to which it responds, or ALL for all of them.
 *                      method: testRoute,  // the responding code
 *                      middleware: []                  // The middleware that the responds goes through before the method responds.
 *                  },
 *              ],
 *              $inject = ['svc1', 'svc2', ...]
 *          }
 *      }
 *      
 *      module.exports = TestController;
 * 
 * Helper does this: 
 * $acute['controller'] = function(injectables) {
 *  
 * }
 * 
 **/
 
 var component = require('../component'),
    acute = require('../acute');
    
component.controllers = [];

component.$$bootControllers = function(container) {
    var controllerContainer = container.create();
    async.each(this.controllers) {
        
    }
}