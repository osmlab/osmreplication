# osmreplication

Easy way to convert date to number of [Planet.osm/diffs](http://wiki.openstreetmap.org/wiki/Planet.osm/diffs), the app support `timestamp` and `date(YYYY-MM-DDThh:mm:ss)` parameters.

## Installation

`npm install osmreplication`

## Usage

```js
var osmreplication = require('osmreplication');
var timestamp = 1453943167;
var date = '2016-01-28T01:06:07';
```
## Replication files per minute

**File:**

```js
osmreplication.file(timestamp,'minute');
//or 
osmreplication.file(date,'minute');
```
*Output:*

```
{
  url_data: 'http://planet.openstreetmap.org/replication/minute/001/766/587.osc.gz',
  sequenceNumber: 1766587,
  date: '2016-01-27T01:06'
}
```

**Range:**

```js
var dateStart = '2012-09-13T02:01';
var dateEnd = '2012-09-13T02:03';
var result = osmreplication.range(dateStart, dateEnd, 'minute');
```
*Output:*

```
[{
  url_data: 'http://planet.openstreetmap.org/replication/minute/000/000/996.osc.gz',
  sequenceNumber: 996,
  date: '2012-09-12T02:01'
}, {
  url_data: 'http://planet.openstreetmap.org/replication/minute/000/000/997.osc.gz',
  sequenceNumber: 997,
  date: '2012-09-12T02:02'
}, {
  url_data: 'http://planet.openstreetmap.org/replication/minute/000/000/998.osc.gz',
  sequenceNumber: 998,
  date: '2012-09-12T02:03'
}]
```

## Replication files per hour

**File:**

```js
osmreplication.file(timestamp,'hour');
//or 
osmreplication.file(date,'hour');
```
*Output:*

```
{
  url_data: 'http://planet.openstreetmap.org/replication/hour/000/029/586.osc.gz',
  sequenceNumber: 29586,
  date: '2016-01-27T01:05'
}
```

**Range:**

```js
var dateStart = '2016-02-05T16:02';
var dateEnd = '2016-02-05T18:02';
var result = osmreplication.range(dateStart, dateEnd, 'hour');

```
*Output:*

```
[{
  url_data: 'http://planet.openstreetmap.org/replication/hour/000/029/793.osc.gz',
  sequenceNumber: 29793,
  date: '2016-02-05T16:01'
}, {
  url_data: 'http://planet.openstreetmap.org/replication/hour/000/029/794.osc.gz',
  sequenceNumber: 29794,
  date: '2016-02-05T17:01'
}, {
  url_data: 'http://planet.openstreetmap.org/replication/hour/000/029/795.osc.gz',
  sequenceNumber: 29795,
  date: '2016-02-05T18:01'
}]

```

## Replication files per day

**File:**

```js
osmreplication.file(timestamp,'day');
//or 
osmreplication.file(date,'day');
```
*Output:*

```
{
  url_data: 'http://planet.openstreetmap.org/replication/day/000/001/233.osc.gz',
  sequenceNumber: 1233,
  date: '2016-01-27T01:05'
}
```

**Range:**

```js
  var dateStart = '2016-02-27T00:06';
  var dateEnd = '2016-02-29T00:06';
  var result = osmreplication.range(dateStart, dateEnd, 'day');
```
*Output:*

```
[{
  url_data: 'http://planet.openstreetmap.org/replication/day/000/001/263.osc.gz',
  sequenceNumber: 1263,
  date: '2016-02-26T00:05'
}, {
  url_data: 'http://planet.openstreetmap.org/replication/day/000/001/264.osc.gz',
  sequenceNumber: 1264,
  date: '2016-02-27T00:05'
}, {
  url_data: 'http://planet.openstreetmap.org/replication/day/000/001/265.osc.gz',
  sequenceNumber: 1265,
  date: '2016-02-28T00:05'
}]

```

## Test

```sh
npm install & npm test

```

##### Similar applications
https://osm.mazdermind.de/replicate-sequences/
