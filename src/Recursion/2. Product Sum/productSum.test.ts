import { productSum, SpecialArray } from "./productSum";

test("Test Case 1", () => {
  const specialArray = [1, 2, 3, 4, 5];
  expect(productSum(specialArray)).toBe(15);
});

test("Test Case 2", () => {
  const specialArray = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
  expect(productSum(specialArray)).toBe(12);
});

test("Test Case 3", () => {
  const specialArray = [1, 2, [3], 4, 5];
  expect(productSum(specialArray)).toBe(18);
});

test("Test Case 4", () => {
  const specialArray = [[[[[5]]]]];
  expect(productSum(specialArray)).toBe(600);
});

test("Test Case 5", () => {
  const specialArray: SpecialArray = [];
  expect(productSum(specialArray)).toBe(0);
});
