const next = function (list) {
  let index = -1;
  return function () {
    if (index >= list.length - 1) {
      index = -1;
    }

    index++;

    return list[index];
  };
};

const fruits = [ "apple", "mango", "jackfruit", "litchi" ];
const people = ["Jack", "John", "Jones", "Jim", "Joe" , 'Joshua', 'Joseph'];
const rooms = ['A1', 'A2', 'A3'];
const habitablePlanets = ['Earth'];

const distribute = function (nextElement1, nextElement2) {
  return function () {
    return nextElement1() + ' -> ' + nextElement2();
  };
};

const distributeFruits = distribute(next(people), next(fruits));

const assignRooms = distribute(next(people), next(rooms));

const assignPlanets = distribute(next(people), next(habitablePlanets));

const fruitDistributionChart = people.map(distributeFruits);
const roomAllotmentChart = people.map(assignRooms);
const planetAllotmentChart = people.map(assignPlanets);

console.log('\n' + fruitDistributionChart.join('\n'));
console.log('\n' + roomAllotmentChart.join('\n'));
console.log('\n' + planetAllotmentChart.join('\n'));