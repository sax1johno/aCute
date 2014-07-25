var express = require('express');

// Return the initial application configuration method.
module.exports = [
    { 
        packagePath: "../core/app",
        appSettings: {
            uploadDir: "/public/files",
            publicdir: "/public",
            sessionSecretSalt: "keyboardcat",
            viewsDir: "/views",
            viewEngine: "jade"
        }
    },
    { 
        packagePath: "../core/controller"
    }
];