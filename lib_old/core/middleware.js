/**
 * Middleware are chunks of code / functions that can be directly inserted 
 * into a control flow. Middleware has the following signature:
 * 
 * function(req, res, next)
 * 
 * where req is the current request, res is a response object repsonding to the
 * request, and next is a function that is called when the flow should forward
 * to the next available middleware.
 **/