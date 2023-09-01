export interface MinMaxItem {
  min: number;
  max: number;
}

export class MinMaxStack {
  // Use a stack for inserting values
  // Use a min-max stack for inserting min-max item for each item inserted in the stack
  private stack: number[];
  private minMaxItemStack: MinMaxItem[];

  constructor() {
    this.stack = [];
    this.minMaxItemStack = [];
  }

  // Return the last item in the stack
  peek(): number | undefined {
    return this.stack[this.stack.length - 1];
  }

  // Remove and return the last item in the stack
  // Also remove the last min-max item
  pop(): number | undefined {
    this.minMaxItemStack.pop();
    return this.stack.pop();
  }

  // Check if empty
  isEmpty(): boolean {
    return this.minMaxItemStack.length === 0;
  }

  // Push item into stack
  push(number: number) {
    const currentMinMaxItem: MinMaxItem = { min: number, max: number };

    // Update min max based on item inserted
    if (!this.isEmpty()) {
      const prevMinMax = this.minMaxItemStack[this.minMaxItemStack.length - 1];
      const { min, max } = prevMinMax;
      currentMinMaxItem.min = Math.min(min, number);
      currentMinMaxItem.max = Math.max(max, number);
    }

    this.stack.push(number);
    this.minMaxItemStack.push(currentMinMaxItem);
  }

  // Min item
  getMin(): number | undefined {
    return this.minMaxItemStack[this.minMaxItemStack.length - 1]?.min;
  }

  // Max item
  getMax(): number | undefined {
    return this.minMaxItemStack[this.minMaxItemStack.length - 1]?.max;
  }
}
