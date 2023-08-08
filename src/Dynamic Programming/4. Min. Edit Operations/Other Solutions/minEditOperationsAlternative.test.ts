import { minEditOperationsAlternative } from "./minEditOperationsAlternative";

test("Test Case 1", () => {
  expect(minEditOperationsAlternative("abc", "def")).toBe(3);
});

test("Test Case 2", () => {
  expect(minEditOperationsAlternative("kitten", "sitting")).toBe(3);
});

test("Test Case 3", () => {
  expect(minEditOperationsAlternative("abcdef", "azced")).toBe(3);
});

test("Test Case 4", () => {
  expect(minEditOperationsAlternative("", "abc")).toBe(3);
});

test("Test Case 5", () => {
  expect(minEditOperationsAlternative("abcdefghij", "1234567890")).toBe(10);
});

test("Test Case 6", () => {
  expect(minEditOperationsAlternative("abcdefghij", "a234567890")).toBe(9);
});

test("Test Case 7", () => {
  expect(minEditOperationsAlternative("abcd", "abcd")).toBe(0);
});
