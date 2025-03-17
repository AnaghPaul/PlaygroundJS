function getNumber() {
  return new Promise((resolve) => setTimeout(() => resolve(42), 1000));
}

// console.log('before function call')
// const num = await getNumber();

// console.log(num);

async function main() {
  console.log("before function call");
  const num = await getNumber();
  console.log(num);
}

main();
