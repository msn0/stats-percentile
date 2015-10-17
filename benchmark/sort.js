module.exports = {
  calc: function (data, n) {
    data = data.sort(function (x, y) {
      return x - y;
    });
    return data[Math.ceil(data.length * n / 100) - 1];
  }
};
