/**
 * The 'injectable' interface is used to define something that can be
 * injected by the Acute injector.
 **/
var Injectable = {
    /**
     * The name of this injectable.  Must be unique in the injector.
     **/
    $name: '',
    /**
     * An array of injectable annotations of the names of dependencies.
     **/
    $inject: []
};

module.exports = Injectable;