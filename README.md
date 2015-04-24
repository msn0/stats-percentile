# Percentile [![Build Status](https://travis-ci.org/msn0/stats-percentile.svg?branch=master)](http://travis-ci.org/msn0/stats-percentile)

> Calculate n-th percentile of data using [Nearest Rank Method](http://en.wikipedia.org/wiki/Percentile#The_Nearest_Rank_method).

## Installation

```sh
npm install stats-percentile
```

## Usage

```js
var percentile = require('stats-percentile');

var data = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];

percentile.calc(data, 75); // → 15
```

### API

#### calc(data, n)

##### data

Type: `array`

The data to be analysed; an array of numbers.

##### n

Type: `number`

n-th percentile to calculate; a number between 0 and 100. 

## License
MIT &copy; [Michał Jezierski](https://pl.linkedin.com/in/jezierskimichal)
