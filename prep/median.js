function calculateMedian(list) {
  list.sort((a, b) => a - b); // Sort the list in ascending order
  const middleIndex = Math.floor(list.length / 2);

  if (list.length % 2 !== 0) {
    // Odd length: return the middle element
    return list[middleIndex];
  } else {
    // Even length: return the average of the two middle elements
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  }
}

// Test case for even-length array
const evenList = [10, 20, 30, 40];
console.log(calculateMedian(evenList)); // Expected output: 25
