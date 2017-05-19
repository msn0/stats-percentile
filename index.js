function swap(data, i, j) {
    if (i === j) {
        return;
    }
    const tmp = data[j];
    data[j] = data[i];
    data[i] = tmp;
}

function partition(data, start, end) {
    let i, j;
    for (i = start + 1, j = start; i < end; i++) {
        if (data[i] < data[start]) {
            swap(data, i, ++j);
        }
    }
    swap(data, start, j);
    return j;
}

function findK(data, start, end, k) {
    while (start < end) {
        let pos = partition(data, start, end);
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

// Calculate n-th percentile of 'data' using Nearest Rank Method
// http://en.wikipedia.org/wiki/Percentile#The_Nearest_Rank_method
export default function (data, n) {
    return findK(data.concat(), 0, data.length, Math.ceil(data.length * n / 100) - 1);
};
