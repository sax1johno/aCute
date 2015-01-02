// Return the initial application configuration method.
module.exports = [
    { 
        packagePath: "./acute",
        environment: "production",
    },
    {
        packagePath: "./core/app",
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
        packagePath: "./core/data",
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
    "./core/controller",
    "./core/acute-express-app",
    "./core/acute-express-data",
    "./core/acute-express-mvc"
];