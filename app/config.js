var express = require('express'),
    bodyparser = require('body-parser'),
    session = require('express-session');

module.exports = [
    {
        packagePath: "../plugins/acute-express-app",
        port: process.env.PORT || 8080,
        appConfig: function(app, fn) {
            // app.set('uploadDir', "/public/files");
            app.use(express.static(__dirname + '/app/public'));
            app.use(session({ secret: "keyboardcat" }));
            app.set('views', __dirname + "/views");
            app.set('view engine', "jade");
        },
    },
    {
        packagePath: "../plugins/acute-express-data",
        environments: {
            production: {
                data: {
                    provider: "mongodb",
                    host: "localhost:1337",
                    database: "test",
                    username: "test",
                    password: "test"
                },
                different_data: {
                    provider: "redis",
                    host: "localhost:7331",
                    database: "test",
                    username: "test",
                    password: "test"
                }
            },
            development: {
                data: {
                    provider: "mongodb",
                    host: "devserver:3737",
                    database: "dev",
                    username: "test",
                    password: "test"
                }
            }
        }
    },
    "../plugins/acute-express-controllers",
    "../plugins/acute-express-utils",
    "../plugins/acute-mongoose-models",
    "../plugins/acute-data-mongodb"
    // "./core/acute-express-mvc"
];