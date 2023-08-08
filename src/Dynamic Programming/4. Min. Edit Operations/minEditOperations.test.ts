import { minEditOperations } from "./minEditOperations";

test("Test Case 1", () => {
  expect(minEditOperations("abc", "def")).toBe(3);
});

test("Test Case 2", () => {
  expect(minEditOperations("kitten", "sitting")).toBe(3);
});

test("Test Case 3", () => {
  expect(minEditOperations("abcdef", "azced")).toBe(3);
});

test("Test Case 4", () => {
  expect(minEditOperations("", "abc")).toBe(3);
});

test("Test Case 5", () => {
  expect(minEditOperations("abcdefghij", "1234567890")).toBe(10);
});

test("Test Case 6", () => {
  expect(minEditOperations("abcdefghij", "a234567890")).toBe(9);
});

test("Test Case 7", () => {
  expect(minEditOperations("abcd", "abcd")).toBe(0);
});
