'use strict';

module.exports = function(dates, done) {
  var result = [];
  var i = 1;
  while (i < dates.length) {
    if (dates[i].end - dates[i - 1].end > 60) {
      result.push(dates[i]);
    } else if ((dates[i].end - dates[i - 1].end) === 0) {
      result.push(dates[i]);
    }
    i++;
  }
  done(result);
};