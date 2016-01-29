#!/bin/bash
num=$1; 
while [  $num -lt $2 ]; do  
  node index.js --date $num
  let num=num+60; 
done
