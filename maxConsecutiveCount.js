const array = [0, 1, 1, 1, 1, 0, 1, 1, 0, 1];

const all1s = array.join("").split("0");

console.log(all1s);

const maxConsCount = all1s.reduce(
  (str1len, str2) => Math.max(str1len, str2.length),
  0
);

console.log(maxConsCount);
