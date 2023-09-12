// O(C) space
// O(N + M) time
// where:
// C is the no. of unique characters in the character string
// N is the length of the characters
// M is the length of the document

export function generateDocument(
  characters: string,
  document: string
): boolean {
  // Use a map to count char in characters
  const charCounts: Map<string, number> = new Map();

  // Loop through characters and increment count
  for (const char of characters) {
    charCounts.set(char, (charCounts.get(char) ?? 0) + 1);
  }
  // Loop through document
  for (const char of document) {
    // Check if charCounts has same no. of char count
    const charCount = charCounts.get(char);

    // If not, then false
    if (!charCount) return false;

    // Else decrement count (cancel out common character)
    charCounts.set(char, charCount - 1);
  }

  return true;
}
