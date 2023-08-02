// O(4^(N * N)) space
// O(4^(N * N)) time where N is the no. of digits in the input phone number

const NUMBER_LETTERS: { [key: number]: string[] } = {
  0: ["0"],
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

export function phoneNumberMnemonics(phoneNumber: string): string[] {
  // Base case for empty phone number
  if (phoneNumber.length === 0) return [];

  // Base case for phone number with length 1
  if (phoneNumber.length === 1) return NUMBER_LETTERS[Number(phoneNumber)];

  // Get the mnemonics of substring
  // If 9745 is the no., get the mnemonics of 974
  const phoneNumberMnemonicsOfSubstring = phoneNumberMnemonics(
    phoneNumber.slice(0, -1)
  );

  // Last digit to add
  const lastDigit = Number(phoneNumber[phoneNumber.length - 1]);
  const result: string[] = [];

  // Equivalent characters of the last digit
  const stringsToAdd: string[] = NUMBER_LETTERS[Number(lastDigit)];

  // Add the character equivalent of lastDigit to every string of the subString
  phoneNumberMnemonicsOfSubstring.forEach((string) => {
    for (let i = 0; i < stringsToAdd.length; i++) {
      result.push(string + stringsToAdd[i]);
    }
  });

  return result;
}
