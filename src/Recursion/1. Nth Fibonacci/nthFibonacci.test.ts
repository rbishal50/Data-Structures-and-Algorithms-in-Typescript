import { nthFibonacci } from "./nthFibonacci";

test("nthFibonacci should return the correct Fibonacci number for valid inputs", () => {
  expect(nthFibonacci(1)).toBe(0);
  expect(nthFibonacci(2)).toBe(1);
  expect(nthFibonacci(3)).toBe(1);
  expect(nthFibonacci(4)).toBe(2);
  expect(nthFibonacci(5)).toBe(3);
  expect(nthFibonacci(6)).toBe(5);
  expect(nthFibonacci(7)).toBe(8);
  expect(nthFibonacci(8)).toBe(13);
  expect(nthFibonacci(9)).toBe(21);
  expect(nthFibonacci(10)).toBe(34);
  expect(nthFibonacci(20)).toBe(4181);
  expect(nthFibonacci(30)).toBe(514229);
  expect(nthFibonacci(40)).toBe(63245986);
});
