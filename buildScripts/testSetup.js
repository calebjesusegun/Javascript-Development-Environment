// Register Babel to transpile our tests
require('babel-register')();

//Disable webpack features
require.extensions['.css'] = function () { };
