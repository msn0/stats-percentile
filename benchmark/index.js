var Suite = require('benchmark').Suite;
var percentileFindK = require('../');
var percentileSort = require('./sort.js');

var data1 = [35, 20, 15, 50, 40];
var data2 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
var data3 = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
var data4 = [
  10, 13, 15, 16, 20, 3, 6, 7, 7, 15, 19, 23, 33, 8, 19, 35, 22, 17, 19, 29,
  13, 13, 15, 16, 22, 3, 8, 7, 1, 14, 19, 23, 33, 8, 19, 35, 21, 17, 19, 29,
  17, 13, 19, 16, 20, 3, 9, 7, 25, 15, 18, 13, 23, 7, 11, 35, 22, 1, 9, 9,
  13, 12, 15, 14, 21, 5, 6, 5, 7, 16, 16, 23, 47, 8, 19, 35, 29, 17, 19, 29,
  15, 13, 15, 8, 20, 3, 6, 7, 7, 17, 19, 23, 43, 8, 19, 35, 22, 17, 19, 9,
  10, 19, 14, 16, 26, 9, 5, 7, 17, 18, 12, 25, 63, 8, 19, 35, 22, 17, 15, 16
];
var data5 = [3];

function run(percentileFn) {
  [data1, data2, data3, data4, data5].forEach(function (data) {
    [0, 25, 50, 75, 100].forEach(function (n) {
      percentileFn(data, n);
    });
  });
};

var suite = new Suite();
// add tests
suite.add('percentile#findK', function () {
  run(percentileFindK.calc);
})
.add('percentile#sort', function () {
  run(percentileSort.calc);
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run();
