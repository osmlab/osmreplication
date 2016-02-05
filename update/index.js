var _ = require('underscore');
var fs = require('fs');
var storedIntervals = require('./../src/minutes.js').minutes;
var scraping = require('./src/scraping');
var analyze = require('./src/analyze');
var result = [];

function init(npage) {
  scraping(npage, function(status, pageResult) {
    if (status) {
      result = result.concat(pageResult);
      numPage++;
      init(numPage);
    } else {
      result.reverse();
      analyze(result, function(intervals) {
        intervals.reverse();
        storedIntervals = storedIntervals.concat(intervals);
        storedIntervals = _.sortBy(storedIntervals, function(obj) {
          return obj.end;
        });
        var minuteFile = 'module.exports = { minutes:' + JSON.stringify(storedIntervals) + '}';
        fs.writeFile('../src/minutes.js', minuteFile, function(err) {});
      });
    }
  });
}
var lastUpdate = _.last(storedIntervals);
var numPage = (lastUpdate.num - lastUpdate.num % 1000) / 1000;
init(numPage);