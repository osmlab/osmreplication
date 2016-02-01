'use strict';

var util = require('./util');
var fixminutes = require('./util/fixMinutes');

var date2osmdiffs = {
  minute: function(date) {
    var intervalMinute = 60;
    var timestamp = date2timestamp(date);
    var status = fixminutes(timestamp);
    var startDateMinute = status.startDateMinute;
    var startNumberMinute = status.startNumberMinute;
    timestamp = timestamp - timestamp % 10;
    var diffDate = timestamp - startDateMinute;
    var number = parseInt(diffDate / intervalMinute) + startNumberMinute;
    return util.minute(number);
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
  },
  day: function(date) {
    var startDateDay = 1347494400;
    var startNumberDay = 1;
    var intervalDay = 86400;
    var timestamp = date2timestamp(date);
    timestamp = timestamp - timestamp % 100;
    var diffDate = timestamp - startDateDay;
    var number = parseInt(diffDate / intervalDay) + startNumberDay;
    return util.day(number);
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