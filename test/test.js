'use strict';

var test = require('tape');
var date2osmdiffs = require('../');

test('Minute timestamp: 1453943167', function(t) {
  var timestamp = 1453943167;
  var result = date2osmdiffs(timestamp, 'minute');
  t.equal(result.sequenceNumber, 1766587, 'The result should be 1766587');
  t.end();
});

test('Minute date :2016-01-28T01:06:07', function(t) {
  var date = '2016-01-28T01:06:07';
  var result = date2osmdiffs(date, 'minute');
  t.equal(result.sequenceNumber, 1766587, 'The result should be 1766587');
  t.end();
});

//HOUR
test('Hour timestamp: 1453943167', function(t) {
  var timestamp = 1453943167;
  var result = date2osmdiffs(timestamp, 'hour');
  t.equal(result.sequenceNumber, 29586, 'The result should be 29587');
  t.end();
});

test('Hour date: 2016-01-28T01:06:07', function(t) {
  var date = '2016-01-28T01:06:07';
  var result = date2osmdiffs(date, 'hour');
  t.equal(result.sequenceNumber, 29586, 'The result should be 29587');
  t.end();
});

//DAY
test('Day timestamp: 1453943167', function(t) {
  var timestamp = 1453943167;
  var result = date2osmdiffs(timestamp, 'day');
  t.equal(result.sequenceNumber, 1233, 'The result should be 1233');
  t.end();
});

test('Day date: 2016-01-28T01:06:07', function(t) {
  var date = '2016-01-28T01:06:07';
  var result = date2osmdiffs(date, 'day');
  t.equal(result.sequenceNumber, 1233, 'The result should be 1233');
  t.end();
});