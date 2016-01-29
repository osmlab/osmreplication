'use strict';
var util = require('./util');
var date2osmdiffs = {
  minute: function(date) {
    var startDateMinute = 1453907940; //01/27/2016 @ 3:19pm
    var startNumberMinute = 1766000; //minute/001/766/000.osc.gz
    var intervalMinute = 60;
    var timestamp = date2timestamp(date);
    timestamp = timestamp - timestamp % 10;
    var diffDate = timestamp - startDateMinute;
    var number = diffDate / intervalMinute;
    return parseInt(startNumberMinute + number);
  },
  hour: function(date) {
    var startDateHour = 1351033200;
    var startNumberHour = 1000;
    var intervalHour = 3600;
    var timestamp = date2timestamp(date);
    timestamp = timestamp - timestamp % 100;
    var diffDate = timestamp - startDateHour;
    var number = parseInt(diffDate / intervalHour) + startNumberHour;
    return util.hour(number);
  }
};

function date2timestamp(date) {
  if (typeof date == 'number') {
    return date;
  } else {
    return (new Date(date)) / 1000;
  }
}
module.exports = date2osmdiffs;