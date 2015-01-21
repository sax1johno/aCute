// Return the initial application configuration method.
module.exports = [
    {
        packagePath: "../plugins/acute-express-app",
        port: process.env.PORT || 8080,
        appSettings: {
            uploadDir: "/public/files",
            publicdir: "/public",
            sessionSecretSalt: "keyboardcat",
            viewsDir: "/views",
            viewEngine: "jade"
        }
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
    "../plugins/acute-express-controllers",
    "../plugins/acute-express-controllers",
    "../plugins/acute-"
    // "./core/acute-express-mvc"
];