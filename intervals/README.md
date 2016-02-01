##### Get the intervals when the date of replication file are not in sequence.

e.g:

Start Date : 2016-02-01T00:29 (1454286540)
End Date : 2016-02-01T00:59:00 (1454288340)

Get teh minute data.

`./run.sh 1454288340 1454288340 > times.json`

Check in that time there were no replication files.

`node getIntervals.js --file times.json > output.json`

The result should be pasted in the last part of this [file](https://github.com/Rub21/date2osmdiffs/blob/master/util/fixMinutes.js), under the array.
