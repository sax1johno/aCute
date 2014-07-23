var architect = require('architect');

module.exports = {
    createApp: function(config, callback) {
        architect.createApp(config, function(err, app) {
            return {
                app: app,
                server: app.services.app
            };
        });
    } 
};