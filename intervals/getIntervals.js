var fs = require('fs');
var readline = require('readline');
var argv = require('optimist').argv;
var date2osmdiffs = require('./../');
var util = require('./../util');
var _ = require('underscore');
var rd = readline.createInterface({
  input: fs.createReadStream(argv.file),
  output: process.stdout,
  terminal: false
});
var output = {};
var resp_date = [];
rd.on('line', function(line) {
  if (line.toString() !== 'No found url') {
    var obj = JSON.parse(line);
    var time = date2timestamp(obj.date_resp);
    time = time - time % 10;
    resp_date.push(time);
    output[time] = obj.sequenceNumber_resp;
  }
}).on('close', function() {
  var result = [];
  for (var i = 0; i < resp_date.length ; i++) {
    if ((resp_date[i + 1] - resp_date[i]) > 60) {
      var r = {};
      // r.start = resp_date[i];
      r.end = resp_date[i + 1];
      r.num = output[resp_date[i + 1]];
      result.push(r);
    }
  }
  console.log(JSON.stringify(result));
});

function date2timestamp(date) {
  if (typeof date == 'number') {
    return date;
  } else {
    return (new Date(date)) / 1000;
  }
}
function timeConverter(UNIX_timestamp) {
  var timestamp = UNIX_timestamp;
  var date = new Date(timestamp * 1000);
  return date.toISOString();
}