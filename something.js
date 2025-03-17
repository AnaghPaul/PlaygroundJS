function someClosure() {
  let times = 0;
  return {
    increment() {
      times += 1;
      return times;
    },
    decrement() {
      times -= 1;
      return times;
    }
  }
}

const akshay = someClosure();
akshay.increment();