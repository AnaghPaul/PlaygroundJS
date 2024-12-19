const counter = function(start, step) {
  let counter = start;
  return function() {
    const oldCounter = counter;
    counter += step;

    return oldCounter;
  }
}

const counter1ToInfinity = counter(1, 1);
const counterOdd = counter(1, 2);
const counterEven = counter(0, 2);

const multipleOf3 = counter(0, 3);