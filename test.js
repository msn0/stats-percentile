import test from 'ava';
import percentile from './dist/';

test('should return expected values', t => {

    const data1 = [35, 20, 15, 50, 40];
    const data2 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
    const data3 = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
    const data4 = [
        10, 13, 15, 16, 20, 3, 6, 7, 7, 15, 19, 23, 33, 8, 19, 35, 22, 17, 19, 29,
        13, 13, 15, 16, 22, 3, 8, 7, 1, 14, 19, 23, 33, 8, 19, 35, 21, 17, 19, 29,
        17, 13, 19, 16, 20, 3, 9, 7, 25, 15, 18, 13, 23, 7, 11, 35, 22, 1, 9, 9,
        13, 12, 15, 14, 21, 5, 6, 5, 7, 16, 16, 23, 47, 8, 19, 35, 29, 17, 19, 29,
        15, 13, 15, 8, 20, 3, 6, 7, 7, 17, 19, 23, 43, 8, 19, 35, 22, 17, 19, 9,
        10, 19, 14, 16, 26, 9, 5, 7, 17, 18, 12, 25, 63, 8, 19, 35, 22, 17, 15, 16
    ];
    const data5 = [3];
    const data6 = [
        10, 13, 15, 16, 20, 3, 6, 7, 7, 15, 19, 13,
        13, 8, 19, 35, 22, 17, 19, 19, 12, 21, 9, 9, 12
    ];

    t.is(percentile(data1, 30), 20);
    t.is(percentile(data1, 40), 20);
    t.is(percentile(data1, 50), 35);
    t.is(percentile(data1, 100), 50);

    t.is(percentile(data2, 25), 7);
    t.is(percentile(data2, 50), 8);
    t.is(percentile(data2, 75), 15);
    t.is(percentile(data2, 100), 20);

    t.is(percentile(data3, 25), 7);
    t.is(percentile(data3, 50), 9);
    t.is(percentile(data3, 75), 15);
    t.is(percentile(data3, 100), 20);

    t.is(percentile(data4, 10), 6);
    t.is(percentile(data4, 30), 11);
    t.is(percentile(data4, 40), 14);
    t.is(percentile(data4, 95), 35);
    t.is(percentile(data4, 99), 47);
    t.is(percentile(data4, 100), 63);

    t.is(percentile(data5, 25), 3);
    t.is(percentile(data5, 50), 3);
    t.is(percentile(data5, 75), 3);
    t.is(percentile(data5, 100), 3);

    t.is(percentile(data6, 95), 22);
});
