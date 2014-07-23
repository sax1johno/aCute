/**
 * Providers are used to provide common interfaces to 3rd party libraries.
 * 
 * A provider defines it's own methods and is passed through directly to
 * another library.
 * 
 * A good example is the appProvider, which delegates the methods for creating an
 * app to another 3rd party app framework (such as express, connect, etc).  There
 * is an implementation of the provider interface for each type the developer wishes
 * to support:
 * 
 * ie: AppProviders exist for Express.  Others can be added.
 * The developer can easily switch providers by pointing to a different provider
 * that implements the same Xprovider interface.
 * 
 **/