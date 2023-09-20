// O(N * M) space
// O(N * M) time, where N is the no. of words & M is the length of the largest word

export function semordnilap(words: string[]): string[][] {
  // Use a set as sets have O(1) lookups
  const wordsSet = new Set(words);

  // Output pairs
  const semordnilapPairs: string[][] = [];

  // Loop through each word
  for (const word of words) {
    // Reverse of the word
    const reverse = word.split("").reverse().join("");
    // Check if our set has the reverse
    if (wordsSet.has(reverse) && reverse !== word) {
      // If yes, push to pairs array
      semordnilapPairs.push([word, reverse]);
      // Delete them from the set
      wordsSet.delete(word);
      wordsSet.delete(reverse);
    }
  }

  return semordnilapPairs;
}
