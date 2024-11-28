test("calculates the mean of a list of numbers", () => {
  const list = [3, 50, 7];
  const currentOutput = calculateMean(list);
  const targetOutput = 20;

  expect(currentOutput).toBe(targetOutput); // 20 is (3 + 50 + 7) / 3
});
