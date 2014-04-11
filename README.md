aCute
=====

aCute is a MEAN stack web framework that brings the benefits of Angular to the server.  It uses dependency injection and a modular design that encourages highly testable and reusable component-based applications. 

Below is a dump of some of the ways you'd use the acute framework to create an application.

-------------------------------------------------
// app.js (bootstrap run by node)

var acute = require('acute'),
    moduleA = require(<<moduleA>>),
    moduleB = require(<<moduleB>>);
    // require the rest of your modules here.
    
/**
 /* Define an ACUTE module by declaring the name and its dependencies.
 /**/
acute.module('myApp', [moduleA, moduleB, moduleC, etc])
    .config(['provider1', 'provider2', function(provider1, provider2) {
        // Configuration stuff goes here.
    })
    .run(function(['serviceA', 'serviceB', function(serviceA, serviceB) {
        // Run stuff goes here.
    });

/**
 /* Bootstrap is a special method that starts an acute app using the named module
 /* method as the seed.
 /**/
acute.bootstrap('myApp').then(
    function(injector) {
        // Boot was successful.  Do something.
    }, function(err) {
        // There was an error - do something for errors.
    });

---------------------------------------------------
// ModuleA.js
exports = acute.module('ModuleA', [])
.config(['provider1', provider2', function(provider1, provider2) {
    // Configuration stuff goes here.
    // Can inject controller into here.
    
})
.service('serviceA', ['x', 'y', 'z', function(x, y, z) {

}])
.controller('ControllerName', ['a', 'b', 'c', function(a, b, c) {
    // View service is accessed from here.
    // Route service can also be accessed from here.
    
    // controller API must return an array of objects with the following
    // structure:
    // {
    //  methodName: function() {
    //      // Do whatever you want in your controller.
    //      The app provider will determine what the function signature of 
    //      a controller is.  This will return a method.
    //  }
    // }
    //
    
}])

To do routes in the controller, the controller needs to run 
