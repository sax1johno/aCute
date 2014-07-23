var express = require('express');

// Return the initial application configuration method.
module.exports = function() {
    return {
        "appProvider": express,
        "port": process.env.PORT,
    };
};