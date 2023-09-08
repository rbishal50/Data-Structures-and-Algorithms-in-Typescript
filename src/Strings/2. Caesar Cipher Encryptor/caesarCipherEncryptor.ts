// O(N) space
// O(N) time where N is the length of the string

export function caesarCipherEncryptor(string: string, key: number): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";

  // Loop through each letter
  for (const letter of string) {
    // New letter index
    // % 26 as we have to get the new index in circular order (eg for z => start from a)
    const newLetterIndex = (alphabet.indexOf(letter) + key) % 26;

    // New letter
    newString += alphabet[newLetterIndex];
  }

  return newString;
}
