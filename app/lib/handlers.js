/*
* Request handlers
*/

// Dependencies

// Define all the handlers
var handlers = {};

// Users
handlers.users = function (data, callback) {
  var acceptableMethods = ['post', 'get', 'put', 'delete'];
  if(acceptableMethods.indexOf(data.method) > -1){
      handlers._users[data.method](data,callback);
  } else {
      callback(405);
  }
};

// Ping handler
handlers.ping = function (data, callback) {
    callback(200);
};

// Not found handler
handlers.notFound = function (data, callback) {
    callback(404);
};

// Export the module
module.exports = handlers;