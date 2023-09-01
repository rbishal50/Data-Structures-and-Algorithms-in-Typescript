import { MinMaxStack } from "./minMaxStack";

describe("MinMaxStack", () => {
  let stack = new MinMaxStack();

  beforeEach(() => {
    stack = new MinMaxStack();
  });

  it("should push and pop values correctly", () => {
    stack.push(5);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBeUndefined();
  });

  it("should return the top item with peek", () => {
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
  });

  it("should return the minimum and maximum values correctly", () => {
    stack.push(5);
    expect(stack.getMin()).toBe(5);
    expect(stack.getMax()).toBe(5);

    stack.push(10);
    expect(stack.getMin()).toBe(5);
    expect(stack.getMax()).toBe(10);

    stack.push(2);
    expect(stack.getMin()).toBe(2);
    expect(stack.getMax()).toBe(10);

    stack.pop();
    expect(stack.getMin()).toBe(5);
    expect(stack.getMax()).toBe(10);

    stack.pop();
    expect(stack.getMin()).toBe(5);
    expect(stack.getMax()).toBe(5);
  });

  it("should handle an empty stack", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(5);
    expect(stack.isEmpty()).toBe(false);
  });
});
