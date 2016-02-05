'use strict';

var request = require("request");
var cheerio = require("cheerio");
var getUrl = require('./url');
module.exports = function(npage, done) {
  var url = getUrl(npage, 'minute');
  console.log(url);
  var result = [];
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(body);
      var links = $("a");
      links.each(function(i, link) {
        var date = $(link).toArray()[0].next.data;
        var file = $(link).text();
        file = file.replace(/(\r\n|\n|\r)/gm, "").trim();
        if (file.substring(file.length - 7) === '.osc.gz') {
          var repliFile = {};
          //repliFile.date = date.replace(/(\r\n|\n|\r)/gm, "").trim().substr(0, 16);
          repliFile.end = Date.parse(date.replace(/(\r\n|\n|\r)/gm, "").trim().substr(0, 16)) / 1000;
          repliFile.num = parseInt(npage + file.substring(0, 3));
          result.push(repliFile);
        }
      });
      done(true, result);
    } else {
      done(false, []);
    }
  });
};