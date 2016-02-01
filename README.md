# date2osmdiffs

Easy way to convert date to number of [Planet.osm/diffs](http://wiki.openstreetmap.org/wiki/Planet.osm/diffs), the app support `timestamp` and `date(YYYY-MM-DDThh:mm:ss)` parameters.

## Installation

`npm install date2osmdiffs`

## Usage

```js
var date2osmdiffs = require('date2osmdiffs');
var timestamp = 1453943167;
var date = '2016-01-28T01:06:07';
```
#### For replication files per minute

```
date2osmdiffs.minute(timestamp);
//or 
date2osmdiffs.minute(date);
```
*Result:*

```
{ sequenceNumber: 1766587,
  url_data: 'http://planet.openstreetmap.org/replication/minute/001/766/587.osc.gz',
  url_state: 'http://planet.openstreetmap.org/replication/minute/001/766/587.state.txt' 
}
```

#### For replication files per hour

```
date2osmdiffs.hour(timestamp);
//or 
date2osmdiffs.hour(date);
```
*Result:*

```
{ sequenceNumber: 29586,
  url_data: 'http://planet.openstreetmap.org/replication/hour/000/029/586.osc.gz',
  url_state: 'http://planet.openstreetmap.org/replication/hour/000/029/586.state.txt' }

```

#### For replication files per day

```
date2osmdiffs.day(timestamp);
//or 
date2osmdiffs.day(date);
```
*Result:*

```
{ sequenceNumber: 1233,
  url_data: 'http://planet.openstreetmap.org/replication/day/000/001/233.osc.gz',
  url_state: 'http://planet.openstreetmap.org/replication/day/000/001/233.state.txt' }
  
```


## Test

```sh
npm install & npm test

```

##### Similar applications
https://osm.mazdermind.de/replicate-sequences/