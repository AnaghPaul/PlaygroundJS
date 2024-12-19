const isPositive = function (num) {
  return num > 0;
}

const isEven = function (num) {
  return num % 2 === 0;
}

// ["abc","def","ghi"] => "cfi"
// You are given an array of strings. Write a function to return a single string that is the concatenation of the last character of every string in the array.
const combineLastChars = function (lastChars, string) {
  return lastChars + string.at(-1);
}

const allLastChars = function (arrayOfStrings) {
  return arrayOfStrings.reduce(combineLastChars, '');
}

// [[-1,-2],[3,4],[5,-6]] => [[3,4]]
// Write a function to return a new array containing only those lists that contain at least one positive number.
const doesArrayHavePositive = function(array) {
  return array.some(isPositive);
}

const listsWithPositiveNumbers = function (listOfLists) {
  return listOfLists.filter(doesArrayHavePositive);
}

// [0,-1,-2,3,4] => 12
// Write a function to calculate the product of all the positive numbers in the array. 0 is not positive.
const multiply = function (number, multiplier) {
  return number * multiplier;
}

const productOfPositives = function (numbers) {
  return numbers.filter(isPositive).reduce(multiply, 1);
}

// ["educate", "there", "animation"] => "educate"
// Write a function to return the longest string that contains the letter "e". 
const doesStringHaveE = function (string) {
  return string.includes('e');
}

const bigger = function (str1, str2) {
  return str1.length > str2.length ? str1 : str2;
}

const longestEWord = function (strings) {
  return strings.filter(doesStringHaveE).reduce(bigger, '');
}

// [[2, 4, 6], [1, 3, 5], [8, 10]] => false
// [[2,4],[6,8]] => true
// Write a function to check if all lists contain only even numbers. Return `true` if they do, and `false` otherwise.
const areAllElementsEven = function (list) {
  return list.every(isEven);
}

const areAllListsEven = function (listOfLists) {
  return listOfLists.every(areAllElementsEven);
}

// [1,2,3,4] => 10 (sqr(1) + sqr(3))
// [1,2,3,4,5] => 35 (sqr(1) + sqr(3) + sqr(5))
// Write a function to calculate the sum of the squares of all the odd numbers in the array
const sumOfSquaresOfOdds = function (numbers) {
  const oddNumbers = numbers.filter((number) => number % 2 === 1);

  const squareOfOdds = oddNumbers.map((number) => number * number);

  return squareOfOdds.reduce((op1, op2) => op1 + op2, 0);
}

// ["abc","def"] => true
// ["abc","de"] => false
// Write a function to check if all strings have the same length. Return `true` if they do, and `false` otherwise. 
const areAllOfSameLength = function (listOfStrings) {
  const lengthOfStrings = listOfStrings.map((string) => string.length);

  return lengthOfStrings.every((length) => length === listOfStrings[0].length);
}

// [1,2,3,4,1,2] => [1,2,3,4]
// Write a function to return a new array with all duplicate values removed.  
const addUniqueElements = function (list, element) {
  if (!list.includes(element)) {
    list.push(element);
  }
  return list;
}

const removeDuplicates = function (numbers) {
  return  numbers.reduce(addUniqueElements,[]);
}

// ["ant", "eye", "id"] => true
// ["ant","bat"] => false
// Write a function to check if all the strings in the array start with a vowel. Return `true` if they do, and `false` otherwise.  
const isFirstLetterVowel = function (word) {
  const vowels = 'aeiouAEIOU';
  return vowels.includes(word[0]);
}

const allStartWithAVowel = function (words) {
  return words.every(isFirstLetterVowel);
}

// [1,2,3,4] => [1,3,6,10]
// [1,1,4,5] => [1,2,6,11]
// Build an array where each element is the running sum of the elements up to that index.
const addTotals = function(array, number) {
  array.push(array.at(-1) + number);
  return array;
}

const  runningTotal = function ([firstElement, ...numbers]) {
  return numbers.reduce(addTotals, [firstElement]);
}

// [] => [[]]
// [1] => [[1]]
// [1,2] => [[1,2]]
// [1,2,3] => [[1,2],[3]]
// [1,2,3,4] => [[1,2],[3,4]]
// Write a function to pair up elements of a list. 
const addInPairs = function (array, element) {
  if (array.at(-1).length >= 2) {
    array.push([]);
  }

  array.at(-1).push(element);

  return array;
}

const pairs = function (list) {
  return list.reduce(addInPairs, [[]]);
}

// ========================= TESTING SECTION ===================================

function showResult(failed) {
  if (failed.length === 0) {
    // console.log('\nAll tests passed for', functionName, '!!!!!');
    console.log('\nAll tests passed !!!!!');
    return;
  }
  
  // console.log('\n' + functionName);
  console.table(failed);
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function testFunction([functionRef, args, expected, failed]) {
  console.log(functionRef, args, expected);
  const actual = functionRef(...args);

  if (actual !== expected && !areEqual(expected, actual)) {
    failed.push([functionRef, ...args, expected, actual]);
  }
}

const testAllLastChars = function (testCases, failed) {
  testCases.push([allLastChars, [["abc","def","ghi"]], 'cfi', failed]);
  testCases.push([allLastChars, [["abcw","deq","gh"]], 'wqh', failed]);

  
}

const testListsWithPositiveNumbers = function (testCases, failed) {
  testCases.push([listsWithPositiveNumbers, [[[-1,-2],[3,4],[5,-6]]], [[3,4],[5,-6]], failed]);
  testCases.push([listsWithPositiveNumbers, [[[-1,-2],[3,4],[-5,-6]]], [[3,4]], failed]);

}

function testAll() {
  const failed = [];

  const testCases = [];

  // testCases.push([addFive, [10], 15, failed]);
  // testCases.push([addTwoNumbers, [10, 3], 13, failed]);
  // testCases.push([subtract, [10, 3], 7, failed]);

  testAllLastChars(testCases, failed);
  
  testListsWithPositiveNumbers(testCases, failed);
  
  testCases.map(testFunction);

  showResult(failed);
}

testAll();


// console.log('\nallLastChars', allLastChars(["abc","def","ghi"]));

// console.log('\nlistsWithPositiveNumbers', listsWithPositiveNumbers([[-1,-2],[3,4],[5,-6]]));

// console.log('\nproductOfPositives', productOfPositives([0,-1,-2,3,4]));

// console.log('\nlongestEWord', longestEWord(["educate", "there", "animation"]));

// console.log('\nareAllListsEven', areAllListsEven([[2, 4, 6], [1, 3, 5], [8, 10]]));
// console.log('areAllListsEven', areAllListsEven([[2,4],[6,8]]));
// // console.log('areAllListsEven', areAllListsEven([]));

// console.log('\nsumOfSquaresOfOdds', sumOfSquaresOfOdds([1,2,3,4]));
// console.log('sumOfSquaresOfOdds', sumOfSquaresOfOdds([1,2,3,4,5]));

// console.log('\nareAllOfSameLength', areAllOfSameLength(['abc','def']));
// console.log('areAllOfSameLength', areAllOfSameLength(['abc','df']));

// console.log('\nallStartWithAVowel', allStartWithAVowel(['ant', 'eye', 'id']));
// console.log('allStartWithAVowel', allStartWithAVowel(['ant', 'eye', 'bid']));

// console.log('\npairs', pairs([]));
// console.log('pairs', pairs([1]));
// console.log('pairs', pairs([1, 2]));
// console.log('pairs', pairs([1, 2, 3]));
// console.log('pairs', pairs([1, 2, 3, 4]));
// console.log('pairs', pairs([1, 2, 3, 4, 5]));

// console.log('\nremoveDuplicates', removeDuplicates([1,2,3,4,1,2,5,5]));

// console.log('\nrunningTotal', runningTotal([1, 2, 3, 4]));
// console.log('runningTotal', runningTotal([1, 1, 4, 5]));
