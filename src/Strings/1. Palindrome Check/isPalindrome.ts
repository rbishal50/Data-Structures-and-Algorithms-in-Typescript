// O(1) space
// O(N) time where N is the length of the string

export function isPalindrome(string: string) {
  string = string.toLowerCase();
  let startIndex = 0;
  let endIndex = string.length - 1;

  while (startIndex < endIndex) {
    // short hand => indexes increment after this line executes
    if (string[startIndex++] !== string[endIndex--]) return false;
  }

  return true;
}
