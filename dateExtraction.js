const date1 = "2024-11-01";
const date2 = "2024-12-01";

const getDay = function (date) {
  return date.slice(8, 10);
}

const getMonth = function (date) {
  return date.slice(5, 7);
}

const getYear = function (date) {
  return date.slice(0, 4);
}

const daysAgo = function (currentDate) {
  return function(date) {
    const days = getDay(currentDate) - getDay(date);
    // console.log(days);

    const months = getMonth(currentDate) - getMonth(date);
    // console.log(months);

    const years = getYear(currentDate) - getYear(date);
    // console.log(years);

    return days + (months * 30) + (years * 365);
  }
}

console.log(daysAgo('2024-12-22')(date1));
console.log(daysAgo('2024-12-22')(date2));