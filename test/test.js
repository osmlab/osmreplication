'use strict';

var test = require('tape');
var date2osmdiffs = require('../');

test('Minute timestamp: 1347566280', function(t) {
  var timestamp = 1347566280;
  var result = date2osmdiffs.minute(timestamp);
  t.equal(result.sequenceNumber, 2069, 'The result should be 1766587');
  t.end();
});

test('Minute date :2016-01-28T01:06:07', function(t) {
  var date = '2016-01-28T01:06:07';
  var result = date2osmdiffs.minute(date);
  t.equal(result.sequenceNumber, 2069, 'The result should be 1766587');
  t.end();
});

//HOUR
test('Hour timestamp: 1453943167', function(t) {
  var timestamp = 1453943167;
  var result = date2osmdiffs.hour(timestamp);
  t.equal(result.sequenceNumber, 29586, 'The result should be 29587');
  t.end();
});

test('Hour date: 2016-01-28T01:06:07', function(t) {
  var date = '2016-01-28T01:06:07';
  var result = date2osmdiffs.hour(date);
  t.equal(result.sequenceNumber, 29586, 'The result should be 29587');
  t.end();
});

//DAY
test('Day timestamp: 1453943167', function(t) {
  var timestamp = 1453943167;
  var result = date2osmdiffs.day(timestamp);
  t.equal(result.sequenceNumber, 1233, 'The result should be 1233');
  t.end();
});

test('Day date: 2016-01-28T01:06:07', function(t) {
  var date = '2016-01-28T01:06:07';
  var result = date2osmdiffs.day(date);
  t.equal(result.sequenceNumber, 1233, 'The result should be 1233');
  t.end();
});