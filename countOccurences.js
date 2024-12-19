const string = 'mallika hajra';

const array = [...string];

// [ "m", "a", "l", "l", "i", "k", "a", " ", "j", "a", "j", "r", "a" ] 

const incrementTargetCount = function(element) {
  const target = element;
  
  return function (count, element) {
    return target === element ? count + 1 : count;
  }
}

const countOccurences = function (target, array) {
  return array.reduce(incrementTargetCount(target), 0);
}

console.log(countOccurences('a', array));

