// O(N) space
// O(N) time where N is the length of the string

export function bestDigits(number: string, numDigits: number): string {
  const stack: string[] = [];

  // Loop through each digit
  for (const digit of number) {
    // Pop the item from stack if certain conditions matched
    while (
      stack.length > 0 &&
      digit > stack[stack.length - 1] &&
      numDigits > 0
    ) {
      stack.pop();
      numDigits--;
    }

    // Push current item to the stack
    stack.push(digit);
  }

  // If numDigits is still > 0, pop from stack
  while (numDigits > 0) {
    stack.pop();
    numDigits--;
  }

  // Return best digit string
  return stack.join("");
}
