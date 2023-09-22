// O(1) space as we are not using slice method
// O(N ^ 2) time, where N is the string length

export function longestPalindromicSubstringAlternative(string: string): string {
  // Start and end indices
  let start = 0;
  let end = 0;

  for (let i = 0; i < string.length; i++) {
    // For odd length palindrome
    const [left1, right1] = expandAroundCenter(string, i, i);

    // For even length palindrome
    const [left2, right2] = expandAroundCenter(string, i, i + 1);

    // Update accordingly
    if (right1 - left1 > end - start) {
      start = left1;
      end = right1;
    }

    if (right2 - left2 > end - start) {
      start = left2;
      end = right2;
    }
  }

  return string.substring(start, end);
}

function expandAroundCenter(
  string: string,
  left: number,
  right: number
): [number, number] {
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    left--;
    right++;
  }
  return [left + 1, right];
}
