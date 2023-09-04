// O(N) space
// O(N^2) time where N is the length of the stack

export function sortStack(stack: number[]) {
  // Base case
  if (stack.length === 0) return stack;

  // Remove top element
  const top = stack.pop()!;

  // Sort the remaining elements in the stack
  sortStack(stack);

  // Insert the popped element in order
  insertInOrder(stack, top);

  // Return the stack
  return stack;
}

function insertInOrder(stack: number[], value: number) {
  // Base case
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }

  // Remove top element and insert in order
  const top = stack.pop()!;
  insertInOrder(stack, value);
  stack.push(top);
}
