// O(N) space
// O(N) time where N is the length of the string

export function balancedBrackets(string: string): boolean {
  // Key value pairs for opening closing brackets
  const brackets: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack: string[] = [];

  // Loop through the string
  for (const char of string) {
    // For opening brackets, push into stack
    if (Object.keys(brackets).includes(char)) {
      stack.push(char);
      continue;
    }

    // For closing brackets, pop and verify
    if (Object.values(brackets).includes(char)) {
      const lastBracket = stack.pop();
      if (!lastBracket || (lastBracket && char !== brackets[lastBracket]))
        return false;
    }
  }

  // Stack needs to be empty at the end of the loop
  return stack.length === 0;
}
