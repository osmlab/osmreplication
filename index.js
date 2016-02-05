'use strict';

var fixminutes = require('./src/fixMinutes');
var getUrl = require('./src/url');

var date2osmdiffs = function(date, type) {
  var startDate;
  var startNumber;
  var interval;
  var rest = 100;
  var timestamp = date2timestamp(date);
  if (type == 'minute') {
    var status = fixminutes(timestamp);
    startDate = status.startDateMinute;
    startNumber = status.startNumberMinute;
    interval = 60;
    rest = 10;
  } else if (type == 'hour') {
    startDate = 1351033200;
    startNumber = 1000;
    interval = 3600;
  } else if (type == 'day') {
    startDate = 1347494400;
    startNumber = 1;
    interval = 86400;
  } else {
    return 'Not found type :' + type;
  }
  timestamp = timestamp - timestamp % rest;
  var diffDate = timestamp - startDate;
  var number = parseInt(diffDate / interval) + startNumber;
  return getUrl(number, type);
};

function date2timestamp(date) {
  if (typeof date == 'number') {
    return date;
  } else {
    return (new Date(date)) / 1000;
  }
}

module.exports = date2osmdiffs;