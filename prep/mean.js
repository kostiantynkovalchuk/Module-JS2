function calculateMean(list) {
  let total = 0;
  for (const item of list) {
    total += item;
  }
  return total / list.length;
}

function calculateMedian(list) {
  const sortedList = list.slice().sort((a, b) => a - b); // Copy and sort
  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 !== 0) {
    return sortedList[middleIndex];
  } else {
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  }
}

const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);

console.log(salaries, "<--- salaries input before we call calculateMean");
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);
console.log(calculateMean(salaries));

test("doesn't modify the input", () => {
  const list = [1, 2, 3];
  calculateMedian(list);

  expect(list).toEqual([1, 2, 3]); // Note that the toEqual matcher checks the values inside arrays when comparing them - it doesn't use `===` on the arrays, we know that would always evaluate to false.
});
