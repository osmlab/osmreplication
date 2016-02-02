'use strict';

var fixminutes = require('./util/fixMinutes');
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
  return getURL(number, type);
};

function getURL(number, type) {
  var sequence = number;
  sequence = sequence.pad(9);
  var dir1 = sequence.toString().substr(0, 3);
  var dir2 = sequence.toString().substr(3, 3);
  var file = sequence.toString().substr(6, 3);
  var url = 'http://planet.openstreetmap.org/replication/' + type + '/' + dir1 + '/' + dir2 + '/' + file;
  return {
    sequenceNumber: number,
    url_data: url + '.osc.gz',
    url_state: url + '.state.txt'
  };
}

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
};

function date2timestamp(date) {
  if (typeof date == 'number') {
    return date;
  } else {
    return (new Date(date)) / 1000;
  }
}

module.exports = date2osmdiffs;