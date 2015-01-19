# aCute resource bundle hooks

The hooks folder contains scripts that are executed during certain application
lifecycle events.  Events include installation, service creation, plugin creation,
and app ready completion.

Hooks are implemented as c9 architect events.  The hooks are run during app creation, and
are passed the current instance of the c9 arhitect object.  The method signature
for hooks looks like the following:
```javascript
module.exports = {
    hookName: function(architectObject) {
        architect.on('service', function(serviceName, service) {
            // Do something here if the serviceName matches what you want to 
            // hook into.
        });
        
        architect.on('plugin', function(plugin) {
            // Do something here if the plugin name matches what you want to
            // hook into.
        });
        
        architect.on('ready', function(app) {
            // This is the hook used by the application bootstrap process
            // to determine when all of the plugins / services have been loaded
            // and registered.  This event is used to listen to the server
            // on the specified port.
        });
    }
}
'''

Hooks are used here to execute tasks that need to happen, such as compiling
resources, running jslint / csshint, converting scss / less to css, and converting resources 
into bundles among other things.