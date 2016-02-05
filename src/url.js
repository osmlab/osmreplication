module.exports = function(number, type) {
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
};

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
};