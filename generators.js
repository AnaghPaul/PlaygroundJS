function* infiniteNumbers() {
  let num = 1;
  while (true) {
    yield num++;
  }
}

const infiniteIterator = infiniteNumbers();

console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());

console.log(infiniteIterator.throw());

console.log(infiniteIterator.next());