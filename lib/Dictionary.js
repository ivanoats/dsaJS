'use strict';
var _ = require('underscore');

var Dictionary = function() {
  this.dataStore = {};
};

Dictionary.prototype.add = function(key, value) {
  this.dataStore[key] = value;
};

Dictionary.prototype.find = function(key) {
  return this.dataStore[key];
};

Dictionary.prototype.count = function() {
  return _.size(this.dataStore);
};

module.exports = Dictionary;
