'use strict';

module.exports = {
  minute: function(sequenceNumber) {
    var sequence = sequenceNumber;
    sequence = sequence.pad(9);
    var dir1 = sequence.toString().substr(0, 3);
    var dir2 = sequence.toString().substr(3, 3);
    var file = sequence.toString().substr(6, 3);
    var url = 'http://planet.openstreetmap.org/replication/minute/';
    var url_data = url + dir1 + '/' + dir2 + '/' + file + '.osc.gz';
    var url_state = url + dir1 + '/' + dir2 + '/' + file + '.state.txt';
    return {
      sequenceNumber: sequenceNumber,
      url_data: url_data,
      url_state: url_state
    };
  },
  hour: function(sequenceNumber) {
    var sequence = sequenceNumber;
    sequence = sequence.pad(9);
    var dir1 = sequence.toString().substr(0, 3);
    var dir2 = sequence.toString().substr(3, 3);
    var file = sequence.toString().substr(6, 3);
    var url = 'http://planet.openstreetmap.org/replication/hour/';
    var url_data = url + dir1 + '/' + dir2 + '/' + file + '.osc.gz';
    var url_state = url + dir1 + '/' + dir2 + '/' + file + '.state.txt';
    return {
      sequenceNumber: sequenceNumber,
      url_data: url_data,
      url_state: url_state
    };
  },
  day: function(sequenceNumber) {
    var sequence = sequenceNumber;
    sequence = sequence.pad(9);
    var dir1 = sequence.toString().substr(0, 3);
    var dir2 = sequence.toString().substr(3, 3);
    var file = sequence.toString().substr(6, 3);
    var url = 'http://planet.openstreetmap.org/replication/day/';
    var url_data = url + dir1 + '/' + dir2 + '/' + file + '.osc.gz';
    var url_state = url + dir1 + '/' + dir2 + '/' + file + '.state.txt';
    return {
      sequenceNumber: sequenceNumber,
      url_data: url_data,
      url_state: url_state
    };
  }
};
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
};