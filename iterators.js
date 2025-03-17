const myIterable = {
  [Symbol.iterator]() {
    let value = 0;
    
    return {
      next: () => {
        return { value: value++, done: false };
      },
    };
  },
};

for (let item of myIterable) {
  console.log(item);
}
