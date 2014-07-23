/**
 * Services contain chunks of code that can be injected into another part
 * of the application and use throughout.  Services are specifically
 * NON-BLOCKING.  For blocking chunks of code, see 'utilities'.
 * 
 * Service methods can have any signature, but must return a promise
 * that resolves when the service call is completed successfully and
 * rejects when the service call contains errors.
 * 
 * Services can also be injected into other services.
 * 
 * Example service is found below:
 *      var TestService = function(svc1, svc2, etc) {
 *          var testMethod = function(any, params, I, want) {
 *              var testMethodDefer = defer();      // q.defer is automagically added to 'this' of service methods
 *              // do something with any, params, i, and want.
 *              return testMethodDefer.promise;
 *          },
 *          var testMethod2 = function(any, params, I, want) {
 *              // do something with any, params, i, and want.
 *              var testMethod2Defer = defer();      // q.defer is automagically added to 'this' of service methods
 *              // do something with any, params, i, and want.
 *              return testMethod2Defer.promise;
 *          }
 * 
 *          return {
 *              $name: 'TestService',               // special, reserved.
 *              $inject = ['svc1', 'svc2', ...]     // special, reserved.
 *              testMethod: testMethod,             // All other methods can be accessed after injection.
 *              aDifferentName: testMethod2
 *          }
 *      }
 *      module.exports = TestService;
 **/
