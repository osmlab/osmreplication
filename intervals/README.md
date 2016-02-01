##### Get the intervals when the date of replication file are not in sequence.

Start Date : 2016-02-01T00:29 (1454286540)
End Date : 2016-02-01T00:59:00 (1454288340)

```
./run.sh 1454288340 1454288340 > times.json
node getIntervals.js --file times.json > output.json

```



