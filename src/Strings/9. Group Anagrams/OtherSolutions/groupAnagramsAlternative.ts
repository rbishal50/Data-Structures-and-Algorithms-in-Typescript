// O(WN) space
// O(W * N * LOGN + N * W * LOGW) time, where W is the no. of words and N is the length of longest word

export function groupAnagramsAlternative(words: string[]) {
  if (words.length === 0) return [];

  // Sort the input words
  const sortedWords = words.map((word) => word.split("").sort().join(""));

  // Create an array of indices of each word
  const indices = [...Array(words.length).keys()];
  indices.sort((a, b) => {
    if (sortedWords[a] < sortedWords[b]) return -1;
    if (sortedWords[a] > sortedWords[b]) return 1;
    return 0;
  });

  // Output grouped anagrams
  const groupedAnagrams: string[][] = [];

  // Current iterating anagram grouped
  let currentAnagramGroup: string[] = [];

  // Current anagram
  let currentAnagram = sortedWords[indices[0]];

  // Loop through the indices and update
  for (const index of indices) {
    const word = words[index];
    const sortedWord = sortedWords[index];

    if (currentAnagram === sortedWord) {
      currentAnagramGroup.push(word);
      continue;
    }

    groupedAnagrams.push(currentAnagramGroup);
    currentAnagramGroup = [word];
    currentAnagram = sortedWord;
  }

  groupedAnagrams.push(currentAnagramGroup);

  return groupedAnagrams;
}
