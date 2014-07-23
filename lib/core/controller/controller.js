module.exports = function setup(options, imports, register) {
    var app = imports.app,
        routes = imports.routes;
    
    var ControllerService = function() {
        this.controllers = [];
    };
    
    register(null, {
        controller: {
            registerController: function(verb, route, fn, middleware) {
                
            }
        } 
        }
    );
};