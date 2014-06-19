'use strict';

var WeeklyTemps = function() {
  return {
    weeks: []
  };
};

WeeklyTemps.prototype.addTemp = function(week, temp) {
  this.weeks[week].push(temp);
};

WeeklyTemps.prototype.addWeek = function() {
  WeeklyTemps.weeks.push([]);
};

WeeklyTemps.prototype.monthlyAverage = function() {

};

WeeklyTemps.prototype.weekAverage = function(week) {

};

WeeklyTemps.prototype.allWeeksAverages = function() {

};

module.exports.WeeklyTemps = WeeklyTemps;
