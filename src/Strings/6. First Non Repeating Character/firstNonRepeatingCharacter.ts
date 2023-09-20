// O(1) space
// O(N) time, where N is the string length
// Space is O(1) because characterFrequencies will have at-most 26 entries (26 alphabets)

export function firstNonRepeatingCharacter(string: string): number {
  // For counting each characters in the input string
  const characterFrequencies: { [char: string]: number } = {};

  // Add counts
  for (const char of string) {
    characterFrequencies[char] = (characterFrequencies[char] ?? 0) + 1;
  }

  // Check each character, if found cont 1, it ts the first non-repeating character
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (characterFrequencies[char] === 1) return i;
  }

  // Else return -1
  return -1;
}
