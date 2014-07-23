/**
 * The 'configurable' interface is used to define something that can be
 * configured and run during the configuration step of the application
 * bootstrap process.
 **/
var Configurable = {
    /**
     * A method used to configure instances of this injectable.
     **/
    $configure: function() {}
};

module.exports = Configurable;