interface CharacteFrequencies {
  [character: string]: number;
}

// O(C) space
// O(N * L) time, where

// N = no. of words
// L = length of longest word
// C = no. of unique chars across words
// Space can hava an upper bound of O(N * L) if all words have unique characters like ["ds", "algo", "ch"]

export function minimumCharactersForWords(words: string[]): string[] {
  const maxFrequencies: CharacteFrequencies = {};
  const result: string[] = [];

  // For each word, count current frequency in the word and update the max frequencies accordingly
  for (const word of words) {
    const currentFrequency = countCharFrequency(word);
    updateMaxFrequencies(currentFrequency, maxFrequencies);
  }

  // Loop through the max frequencies and add to the results array
  for (const char in maxFrequencies) {
    for (let i = 0; i < maxFrequencies[char]; i++) {
      result.push(char);
    }
  }
  return result;
}

// Count characters in a word helper
function countCharFrequency(word: string): CharacteFrequencies {
  const charFrequencies: CharacteFrequencies = {};

  for (const char of word) {
    charFrequencies[char] = (charFrequencies[char] ?? 0) + 1;
  }
  return charFrequencies;
}

// Update max frequencies helper
function updateMaxFrequencies(
  current: CharacteFrequencies,
  max: CharacteFrequencies
) {
  for (const char in current) {
    if (char in max) {
      max[char] = Math.max(current[char], max[char]);
      continue;
    }
    max[char] = current[char];
  }
}
