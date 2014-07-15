'use strict';
require('underscore');

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
  return _size(this.dataStore);
};

var englishToSpanish = new Dictionary();
englishToSpanish.add("today", "hoy");
englishToSpanish.add("tomorrow", "mañana");
console.log(englishToSpanish.find("today"));

