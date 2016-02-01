var date2osmdiffs = require('../');
var request = require('request');
var argv = require('optimist').argv;
var obj = date2osmdiffs.day(argv.date);
request(obj.url_state, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var v = body.split('\n');
    console.log(obj);
    console.log(v);
  } else {
    console.log('No found url');
  }
});

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
};