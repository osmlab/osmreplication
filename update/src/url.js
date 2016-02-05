module.exports = function(number, type) {
  var sequence = number;
  sequence = sequence.pad(6);
  var dir1 = sequence.toString().substr(0, 3);
  var dir2 = sequence.toString().substr(3, 3);
  return 'http://planet.openstreetmap.org/replication/' + type + '/' + dir1 + '/' + dir2 + '/';
};
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
};