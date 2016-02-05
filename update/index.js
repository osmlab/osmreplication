var fs = require('fs');
var _ = require('underscore');
var intervals = require('./../util/minutes.js').minutes;
var scraping = require('./src/scraping');
var result = [];

function init(npage) {

  scraping(npage, function(status, pageResult) {
    if (status) {
      result = result.concat(pageResult);
      numPage++;
      init(numPage);
    } else {
      console.log(result);
      console.log('error');
    }
  });
}

var lastUpdate = _.last(intervals);
// console.log(lastUpdate)
var numPage = (lastUpdate.num - lastUpdate.num % 1000) / 1000;
console.log(numPage);
init(numPage);