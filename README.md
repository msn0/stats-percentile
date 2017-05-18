# Percentile [![Build Status](https://travis-ci.org/msn0/stats-percentile.svg?branch=master)](http://travis-ci.org/msn0/stats-percentile)

> Calculate n-th percentile

## Installation

```sh
npm install stats-percentile
```

## Example

```js
import percentile from 'stats-percentile';

const data = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];

// calculate p75
percentile(data, 75); // → 15
```

## More info

See [Nearest Rank Method](http://en.wikipedia.org/wiki/Percentile#The_Nearest_Rank_method)

## License

MIT &copy; [Michał Jezierski](https://pl.linkedin.com/in/jezierskimichal)
