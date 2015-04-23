"use strict";

function sortNumbers(n, m) {
  return n < m ? -1 : 1;
}

module.exports = {
  // Calculate n-th percentile of 'data' using Nearest Rank Method
  // http://en.wikipedia.org/wiki/Percentile#The_Nearest_Rank_method
  calc: function (data, n) {
    data.sort(sortNumbers);
    return data[Math.ceil(data.length * n / 100) - 1];
  }
};
