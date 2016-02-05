module.exports = function(dates, done) {
  var result = [];
  for (var i = 0; i < dates.length - 1; i++) {

    if ((dates[i + 1].end - dates[i].end) > 80) {
      console.log(timeConverter(dates[i + 1].end) + ' - ' + timeConverter(dates[i].end));
      console.log(dates[i + 1].end + ' - ' + dates[i].end);

      result.push(dates[i + 1]);
    }
  }
  done(result);
};

function timeConverter(UNIX_timestamp) {
  var timestamp = UNIX_timestamp;
  var date = new Date(timestamp * 1000);
  return date.toISOString();
}