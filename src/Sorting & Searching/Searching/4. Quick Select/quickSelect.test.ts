import { Select } from "./quickSelect";

describe("Select", () => {
  test("should return the kth smallest element in the array", () => {
    const select = new Select([1, 2, 8, 6, 5, 4, 7, 3, 9, 10]);
    expect(select.quickSelect(1)).toBe(1);
    expect(select.quickSelect(2)).toBe(2);
    expect(select.quickSelect(3)).toBe(3);
    expect(select.quickSelect(4)).toBe(4);
    expect(select.quickSelect(5)).toBe(5);
    expect(select.quickSelect(6)).toBe(6);
    expect(select.quickSelect(7)).toBe(7);
    expect(select.quickSelect(8)).toBe(8);
  });
});
