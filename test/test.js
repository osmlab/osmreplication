'use strict';

var test = require('tape');
var osmreplication = require('../');

test('Minute timestamp: 1453943167', function(t) {
  var timestamp = 1453943167;
  var result = osmreplication.file(timestamp, 'minute');
  t.equal(result.sequenceNumber, 1766587, 'The result should be 1766587');
  t.end();
});

test('Minute date :2016-01-28T01:06:07', function(t) {
  var date = '2016-01-28T01:06:07';
  var result = osmreplication.file(date, 'minute');
  t.equal(result.sequenceNumber, 1766587, 'The result should be 1766587');
  t.end();
});

//HOUR
test('Hour timestamp: 1453943167', function(t) {
  var timestamp = 1453943167;
  var result = osmreplication.file(timestamp, 'hour');
  t.equal(result.sequenceNumber, 29586, 'The result should be 29587');

  t.end();
});

test('Hour date: 2016-01-28T01:06:07', function(t) {
  var date = '2016-01-28T01:06:07';
  var result = osmreplication.file(date, 'hour');
  t.equal(result.sequenceNumber, 29586, 'The result should be 29587');
  t.end();
});

//DAY
test('Day timestamp: 1453943167', function(t) {
  var timestamp = 1453943167;
  var result = osmreplication.file(timestamp, 'day');
  t.equal(result.sequenceNumber, 1233, 'The result should be 1233');
  
  t.end();
});

test('Day date: 2016-01-28T01:06:07', function(t) {
  var date = '2016-01-28T01:06:07';
  var result = osmreplication.file(date, 'day');
  t.equal(result.sequenceNumber, 1233, 'The result should be 1233');
  t.end();
});

//Range Of date.
test('Range minute: from 2012-09-13T02:01 to 2012-09-13T02:03', function(t) {
  var dateStart = '2012-09-13T02:01';
  var dateEnd = '2012-09-13T02:03';
  var result = osmreplication.range(dateStart, dateEnd, 'minute');
  t.equal(result.length, 3, 'The result length 3');
  t.end();
});

test('Range hour: from 2016-02-05T16:02 to 2016-02-05T18:02', function(t) {
  var dateStart = '2016-02-05T16:02';
  var dateEnd = '2016-02-05T18:02';
  var result = osmreplication.range(dateStart, dateEnd, 'hour');
  t.equal(result.length, 3, 'The result length 3');
  t.end();
});

test('Range day: from 2016-02-27T00:06 to 2016-02-29T00:06', function(t) {
  var dateStart = '2016-02-27T00:06';
  var dateEnd = '2016-02-29T00:06';
  var result = osmreplication.range(dateStart, dateEnd, 'day');
  t.equal(result.length, 3, 'The result length 3');
  t.end();
});