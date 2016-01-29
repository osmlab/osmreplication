var date2osmdiffs = require('../');
var request = require('request');
var argv = require('optimist').argv;
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
};

var obj = date2osmdiffs.minute(argv.date);
request(obj.url_state, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var v = body.split('\n');
    var obj = {};
    obj.timestamp_req = argv.date;
    obj.date_req = timeConverter(argv.date);
    obj.sequenceNumber_resp = parseInt(v[1].split('=')[1]);
    obj.date_resp = v[4].split('=')[1].replace(/[\\\\/]+/g, '');
    console.log(JSON.stringify(obj));
  } else {
    console.log('No found url');
  }
});

function timeConverter(UNIX_timestamp) {
  var timestamp = UNIX_timestamp;
  var date = new Date(timestamp * 1000);
  return date.toISOString();
}

// var base = 1347441960;
// var arr = [];
// for (var i = 0; i < 109; i++) {
//   arr.push(1347443160 + (i * 1000000));
// }
// for (var i = 0; i < arr.length; i++) {
//   console.log('nohup ./run.sh ' + arr[i] + ' ' + arr[i + 1] + '  > r' + i + '.json 2>&1 &');
// }