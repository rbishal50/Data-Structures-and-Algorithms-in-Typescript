import { nthFibonacciAlternative } from "./nthFibonacciAlternative";

test("nthFibonacciAlternative should return the correct Fibonacci number for valid inputs", () => {
  expect(nthFibonacciAlternative(1)).toBe(0);
  expect(nthFibonacciAlternative(2)).toBe(1);
  expect(nthFibonacciAlternative(3)).toBe(1);
  expect(nthFibonacciAlternative(4)).toBe(2);
  expect(nthFibonacciAlternative(5)).toBe(3);
  expect(nthFibonacciAlternative(6)).toBe(5);
  expect(nthFibonacciAlternative(7)).toBe(8);
  expect(nthFibonacciAlternative(8)).toBe(13);
  expect(nthFibonacciAlternative(9)).toBe(21);
  expect(nthFibonacciAlternative(10)).toBe(34);
  expect(nthFibonacciAlternative(20)).toBe(4181);
  expect(nthFibonacciAlternative(30)).toBe(514229);
  expect(nthFibonacciAlternative(40)).toBe(63245986);
});
