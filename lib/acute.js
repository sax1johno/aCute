var architect = require('architect');

module.exports = {
    createApp: function(config, callback) {
        console.log("Inside of acute.createApp: ", config);
        architect.createApp(config, function(err, app) {
            if (!err) {
                var appValues = {
                    app: app,
                    server: app.services.app
                };
                callback(null, appValues);
            } else {
                callback(err);
            }
        });
    }
};