var _ = require('underscore');
var fs = require('fs');
var storedIntervals = require('./../util/minutes.js').minutes;
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
      console.log(result.length);
      analyze(result, function(intervals) {
        fs.writeFile('result.js', JSON.stringify(result), function(err) {});
        fs.writeFile('storedIntervals.js', JSON.stringify(storedIntervals), function(err) {});
        storedIntervals = storedIntervals.concat(intervals);
        fs.writeFile('storedIntervals-result.js', JSON.stringify(storedIntervals), function(err) {});
        console.log(intervals);
      });
    }
  });
}
var lastUpdate = _.last(storedIntervals);
var numPage = (lastUpdate.num - lastUpdate.num % 1000) / 1000;
init(numPage);