// O(C) space
// O(N * M) time
// where:
// C is the no. of unique characters across all strings
// N is the length of the strings[]
// M is the length of the longest string in the strings[]

export function commonCharacters(strings: string[]) {
  // Use a Map to count each unique character
  const characterCount: Map<string, number> = new Map();

  // Loop through each strings
  for (const string of strings) {
    // Unique string, remove repeated characters
    const uniqueStringCharacters = new Set(string);

    // For each character, increment te count
    for (const char of uniqueStringCharacters) {
      characterCount.set(char, (characterCount.get(char) ?? 0) + 1);
    }
  }

  // Unique characters
  const uniqueCharacters: string[] = [];

  // Unique characters are the same length as input string
  for (const [character, count] of characterCount.entries()) {
    if (count === strings.length) uniqueCharacters.push(character);
  }

  return uniqueCharacters;
}
