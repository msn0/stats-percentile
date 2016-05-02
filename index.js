"use strict";

function swap(data, i, j) {
  var tmp;
  if (i === j) {
    return;
  }
  tmp = data[j];
  data[j] = data[i];
  data[i] = tmp;
}

function partition(data, start, end) {
  var pivot = data[start];
  var i, j;
  for (i = start + 1, j = start; i < end; i++) {
    if (data[i] < pivot) {
      swap(data, i, ++j);
    }
  }
  swap(data, start, j);
  return j;
}

function findK(data, start, end, k) {
  var pos;
  while (start < end) {
    pos = partition(data, start, end);
    if (pos === k) {
      return data[k];
    }
    if (pos > k) {
      end = pos;
    } else {
      start = pos + 1;
    }
  }
}

module.exports = {
  // Calculate n-th percentile of 'data' using Nearest Rank Method
  // http://en.wikipedia.org/wiki/Percentile#The_Nearest_Rank_method
  calc: function (data, n) {
    return findK(data.concat(), 0, data.length, Math.ceil(data.length * n / 100) - 1);
  }
};
