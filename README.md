# Percentile [![Build Status](https://travis-ci.org/msn0/stats-percentile.svg?branch=master)](http://travis-ci.org/msn0/stats-percentile)
Calculate n-tn percentile of data using [Nearest Rank Method](http://en.wikipedia.org/wiki/Percentile#The_Nearest_Rank_method)

## Installation

```
npm install stats-percentile
```

## Usage

```js
var percentile = require('stats-percentile');

var data = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];

percentile.calc(data, 75); // → 15
```
