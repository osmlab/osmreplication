module.exports = function(dates, done) {
  var result = [];
  var i = 1;
  while (i < dates.length) {
    if (dates[i].end - dates[i - 1].end > 60) {
      result.push(dates[i ]);
    }
    i++;
  }
  done(result);
};

function timeConverter(UNIX_timestamp) {
  var timestamp = UNIX_timestamp;
  var date = new Date(timestamp * 1000);
  return date.toISOString();
}