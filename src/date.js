'use strict';

module.exports = {
  date2timestamp: function(date) {
    if (typeof date == 'number') {
      return date;
    } else {
      return (new Date(date)) / 1000;
    }
  },
  timestamp2date: function(timestamp) {
    var d = new Date(timestamp * 1000);
    var yyyy = d.getFullYear();
    var mm = ('0' + (d.getMonth() + 1)).slice(-2);
    var dd = ('0' + d.getDate()).slice(-2);
    var hh = ('0' + d.getUTCHours()).slice(-2);
    var min = ('0' + d.getUTCMinutes()).slice(-2);
    var time = yyyy + '-' + mm + '-' + dd + 'T' + hh + ':' + min;
    return time;
  }
};