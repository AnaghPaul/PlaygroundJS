// const array = [12, 54, 324, 6, 7, 1];

// array.sort(function (a, b) {
//   console.log(a,b);
//   if (a > b){
//     return 1;
//   }
//   if (a === b) {
//     return 0;
//   }
//   return -1;
// });

// // =============================================================================

// const stringArray = ['nbabq', 'ewed', 'wddxs','anwd', 'Anwd'];

// stringArray.sort(function(a, b) {
//   if (a.includes('a')) {
//     return -1;
//   }

//   return 1;
// });

// =============================================================================

const isEven = (number) => number % 2 === 0;

const areBothEvenOrOdd = function (num1, num2) {
  
}

const evenOdd = [3, 1, 6, 2, 4, 5, 21, 34];

evenOdd.sort((a, b) => a - b);

console.log('acsending sort:', evenOdd);

evenOdd.sort(function(a, b) {
  if ((b - a) % 2 === 0) {
    return 0;
  }

  if (a % 2 === 0) {
    return -1;
  }

  return 1;
});

console.log('Ascending Even/Odd Sort', evenOdd);
