/**
 * Generators are used by the "acute generate <plugin_name> <param1> <param2> <param...>" command to 
 * generate application code.
 * 
 * Generators allow developers to get up and running quickly by generating boilerplate
 * for that plugin
 **/
 
var program = require('commander')
  , pkg = require('../package.json')
  , version = pkg.version;

program
  .version(version);

/**
 * Run generators for the specified plugin with the specified params.
 **/
 program
   .command('[params...]')
   .description('Runs the generator for the specified plugin and ')
   .action(function(params) {
     console.log("Params = ", params);
    //  if (params) {
    //   params.forEach(function (oDir) {
    //      console.log('dir "%s"', oDir);
    //   });
    //  }
   });