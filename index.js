'use strict';

var date2osmdiffs = {
  minute: function(date) {
    var startTimeMinute = 1453907940; //01/27/2016 @ 3:19pm
    var startNumberMinute = 1766000; //minute/001/766/000.osc.gz
    var intervalMinute = 60;
    var valueTimestamp = timestamp(date);

    valueTimestamp = valueTimestamp - valueTimestamp % 10;
    var diffTime = valueTimestamp - startTimeMinute;
    var number = diffTime / intervalMinute;
    return parseInt(startNumberMinute + number);
  },
  hour: function(date) {
    var startTimeHour = 1451833200; //01/03/2016 @ 3:00pm
    var startNumberHour = 29000; //hour/000/029/000.osc.gz
    var intervalHour = 3600;
    var valueTimestamp = timestamp(date);

    valueTimestamp = valueTimestamp - valueTimestamp % 100;
    var diffTime = valueTimestamp - startTimeHour;
    var number = diffTime / intervalHour;
    return parseInt(startNumberHour + number);
  }
};

function timestamp(date) {
  if (typeof date == 'number') {
    return date;
  } else {
    return (new Date(date)) / 1000;
  }
}

module.exports = date2osmdiffs;