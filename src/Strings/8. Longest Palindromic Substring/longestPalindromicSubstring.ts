// O(N) space as we are using slice and slice creates a new string
// O(N ^ 2) time, where N is the string length

export function longestPalindromicSubstring(string: string): string {
  // First character in the string, 0 index included, 1 index excluded
  let longestPalindromicIndex = [0, 1];

  // Loop from the second character
  for (let i = 1; i < string.length; i++) {
    // Get the current longest palindrome from current char
    // Can be an odd length or an even length palindrome,  so check both cases
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);

    // Current iteration longest palindrome
    const currentLongestPalindromicIndex =
      odd[1] - odd[0] > even[1] - even[0] ? odd : even;

    // Update longest palindrome
    longestPalindromicIndex =
      longestPalindromicIndex[1] - longestPalindromicIndex[0] >
      currentLongestPalindromicIndex[1] - currentLongestPalindromicIndex[0]
        ? longestPalindromicIndex
        : currentLongestPalindromicIndex;
  }

  // Return longest palindrome string
  return string.slice(longestPalindromicIndex[0], longestPalindromicIndex[1]);
}

function getLongestPalindromeFrom(string: string, start: number, end: number) {
  // Check palindrome
  while (start >= 0 && end < string.length) {
    if (string[start] !== string[end]) break;
    start--;
    end++;
  }
  // Increment start by 1 as we are pass one character from palindromic string
  // DON'T increment end as we will slice the string in longestPalindromicSubstring func,
  // and slice does not include end index
  return [start + 1, end];
}
