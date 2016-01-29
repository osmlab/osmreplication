'use strict';

var test = require('tape');
var date2osmdiffs = require('../');

test('Minute timestamp: 1453943167', function(t) {
  var timestamp = 1453943167;
  var numFile = date2osmdiffs.minute(timestamp);
  t.equal(numFile, 1766587, 'The result should be 1766587');
  t.end();
});

test('Minute date :2016-01-28T01:06:07', function(t) {
  var date = '2016-01-28T01:06:07';
  var numFile = date2osmdiffs.minute(date);
  t.equal(numFile, 1766587, 'The result should be 1766587');
  t.end();
});

test('Hour timestamp: 1453946520', function(t) {
  var timestamp = 1453946520;
  var result = date2osmdiffs.hour(timestamp);
  t.equal(result.sequenceNumber, 29587, 'The result should be 29587');
  t.end();
});

test('Hour date: 2016-01-28T02:02:43', function(t) {
  var date = '2016-01-28T02:02:43';
  var result = date2osmdiffs.hour(date);
  t.equal(result.sequenceNumber, 29587, 'The result should be 29587');
  t.end();
});