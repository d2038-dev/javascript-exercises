const sumAll = function (start, end) {
  let sum = 0;

  if (start > end) {
    [start, end] = [end, start];
  }

  if (start < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  }

  for (let index = start; index <= end; index++) {
    sum += index;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
