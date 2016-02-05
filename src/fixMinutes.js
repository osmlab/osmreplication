'use strict';
var intervals = require('./minutes.js').minutes;

module.exports = function(timestamp) {
  var result = {};
  var num = 0;
  for (var i = 0; i < intervals.length; i++) {
    if (timestamp >= intervals[i].end) {
      result.startDateMinute = intervals[i].end;
      result.startNumberMinute = intervals[i].num;
    }
  }
  return result;
};
