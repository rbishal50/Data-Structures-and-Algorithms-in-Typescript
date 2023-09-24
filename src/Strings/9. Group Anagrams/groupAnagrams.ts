// O(WN) space
// O(W * N * LOGN) time, where W is the no. of words and N is the length of longest word

export function groupAnagrams(words: string[]): string[][] {
  // Group anagrams with sorted word as the key
  const anagrams: Map<string, string[]> = new Map();

  for (const word of words) {
    // Key is the sorted word
    const key: string = word.split("").sort().join("");

    // If anagrams has the key, add the word to it
    if (anagrams.has(key)) {
      anagrams.set(key, [...anagrams.get(key)!, word]);
      continue;
    }

    // Else add new key
    anagrams.set(key, [word]);
  }

  // Return values of the map as an array
  return Array.from(anagrams.values());
}
