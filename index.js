'use strict';

var resolve = require('resolve')
  , path = require('path')

/**
 * Requires file relative to @see root or process.cwd() if root is not supplied.
 * 
 * @name requireModule
 * @function
 * @param {String} file name of an installed module or path to a file to be required.
 * @param {String=} root defaults to current working directory 
 * @return {Object} the result of requiring the file
 */
module.exports = function requireModule(file, root) {
  root = root || process.cwd(); 
  return (/^[.\/]/).test(file)
    ? require(path.resolve(root, file))
    : require(resolve.sync(file, { basedir: root }));
}
