/*
* Create and export configuration variables
*
*/


// Container for  all the environments
enviroments = {};

// Staging (default) environment
enviroments.staging = {
  'port' : 3000,
  'envName' : 'staging'
};

enviroments.production = {
    'port' : 5000,
    'envName' : 'production'
};

// Determine which environment was passed as a command-line argument
var currentEvnvironment = typeof(process.evn.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not, default to staging
var environmentToExport = typeof(environments[currentEvnvironment]) == 'object' ? enviroments[currentEvnvironment] : enviroments.staging;

// Export the module
module.exports = environmentToExport;