'use strict';

var fixminutes = require('./src/fixMinutes');
var getUrl = require('./src/url');

var file = function(date, type) {
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

var range = function(dateStart, dateEnd, type) {
  var interval;
  if (type == 'minute') {
    interval = 60;
  } else if (type == 'hour') {
    interval = 3600;
  } else if (type == 'day') {
    interval = 86400;
  } else {
    return 'Not found type :' + type;
  }
  var timeStart = date2timestamp(dateStart);
  var timeEnd = date2timestamp(dateEnd);
  var result = [];
  var i = timeStart;
  while (i <= timeEnd) {
    result.push(file(i, type));
    i += interval;
  }
  return result;
};

function date2timestamp(date) {
  if (typeof date == 'number') {
    return date;
  } else {
    return (new Date(date)) / 1000;
  }
}

var date2osmdiffs = {};
date2osmdiffs.file = file;
date2osmdiffs.range = range;
module.exports = date2osmdiffs;