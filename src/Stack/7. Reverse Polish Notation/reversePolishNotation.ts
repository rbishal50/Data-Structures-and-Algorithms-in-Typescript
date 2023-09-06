// O(N) space
// O(N) time where N is the length of the array

export function reversePolishNotation(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    switch (token) {
      case "+": {
        stack.push(stack.pop()! + stack.pop()!);
        break;
      }
      case "-": {
        const firstNum = stack.pop()!;
        stack.push(stack.pop()! - firstNum);
        break;
      }
      case "*": {
        stack.push(stack.pop()! * stack.pop()!);
        break;
      }
      case "/": {
        const firstNum = stack.pop()!;
        stack.push(Math.trunc(stack.pop()! / firstNum));
        break;
      }
      default:
        stack.push(parseInt(token));
    }
  }

  return stack.pop()!;
}
