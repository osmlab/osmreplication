var fs = require('fs');
var _ = require('underscore');
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
      fs.writeFile('result.js', JSON.stringify(result), function(err) {});
      analyze(result, function(intervals) {
        console.log(intervals);
      });
    }
  });
}
var lastUpdate = _.last(storedIntervals);
var numPage = (lastUpdate.num - lastUpdate.num % 1000) / 1000;
init(numPage);