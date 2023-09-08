// O(N) space
// O(N) time where N is the length of the string

export function runLengthEncoding(string: string): string {
  let encodedCharacters: string[] = [];
  // Since we will have at least one char in the string
  let currentRunLength = 1;

  // Loop from the second char
  for (let i = 1; i < string.length; i++) {
    const currentChar = string[i];
    const prevChar = string[i - 1];

    // Push to the array
    if (currentChar !== prevChar || currentRunLength === 9) {
      encodedCharacters = [
        ...encodedCharacters,
        currentRunLength.toString(),
        prevChar,
      ];

      currentRunLength = 0;
    }

    // Increment run length
    currentRunLength++;
  }

  // For last character
  encodedCharacters = [
    ...encodedCharacters,
    currentRunLength.toString(),
    string[string.length - 1],
  ];

  return encodedCharacters.join("");
}
