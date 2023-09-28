// O(N) space
// O(N) time, where N is the length of the string

export function reverseWordsInString(string: string): string {
  // Starting index and output array
  let startIndex = 0;
  const words: string[] = [];

  // Loop from the second character
  for (let i = 1; i < string.length; i++) {
    const currentChar = string[i];
    // If current char is a space, we can push to the words array a substring before the space
    // Else if start character is a space, we can push space to the words array directly
    // And increment the startIndex for next iteration
    if (currentChar === " ") {
      words.push(string.substring(startIndex, i));
      startIndex = i;
    } else if (string[startIndex] === " ") {
      words.push(" ");
      startIndex = i;
    }
  }

  // Push the remaining string
  words.push(string.substring(startIndex));

  // Reverse and join the words array
  return reverseArray(words).join("");
}

// Custom reverse array helper
function reverseArray(array: string[]) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }

  return array;
}
