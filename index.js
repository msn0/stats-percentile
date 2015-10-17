"use strict";

function swap(data, i, j) {
  var tmp = data[j];
  data[j] = data[i];
  data[i] = tmp;
}

function partition(data, start, end) {
  var pivot = data[start];
  var i, j, tmp;
  for (i = start + 1, j = start; i < end; i++) {
    if (data[i] < pivot) {
      swap(data, i, ++j);
    }
  }
  swap(data, start, j);
  return j;
}

function findK(data, start, end, k) {
  while (start < end) {
    var pos = partition(data, start, end);
    if (pos === k) {
      return data[k];
    } else if (pos > k) {
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
