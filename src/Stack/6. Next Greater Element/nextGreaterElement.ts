// O(N) space
// O(N) time where N is the length of the array

export function nextGreaterElement(array: number[]): number[] {
  const result = new Array(array.length).fill(-1);
  const stack: number[] = [];

  // For circular array loop the array twice
  for (let i = 0; i < 2 * array.length; i++) {
    // Index
    const circularIndex = i % array.length;

    // If current item is > stack top, pop and add the greater element
    while (
      stack.length > 0 &&
      array[stack[stack.length - 1]] < array[circularIndex]
    ) {
      const top = stack.pop()!;
      result[top] = array[circularIndex];
    }
    // Push current index to the stack
    stack.push(circularIndex);
  }

  return result;
}
