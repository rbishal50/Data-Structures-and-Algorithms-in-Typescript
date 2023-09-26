// O(1) space
// O(1) time, as the input string is at most 12 charcters in length

export function validIPAddresses(string: string): string[] {
  const validIPS: string[] = [];

  // Loop through the string
  for (let i = 1; i < Math.min(string.length, 4); i++) {
    // Store 4 parts of a valid IP
    const currentIPAddress = ["", "", "", ""];

    // First part
    currentIPAddress[0] = string.slice(0, i);
    if (!isValid(currentIPAddress[0])) continue;

    // Second part
    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      currentIPAddress[1] = string.slice(i, j);
      if (!isValid(currentIPAddress[1])) continue;

      // Third part
      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentIPAddress[2] = string.slice(j, k);
        currentIPAddress[3] = string.slice(k);

        if (isValid(currentIPAddress[2]) && isValid(currentIPAddress[3])) {
          validIPS.push(currentIPAddress.join("."));
        }
      }
    }
  }

  return validIPS;
}

function isValid(string: string) {
  const stringAsInt = parseInt(string);
  if (stringAsInt > 255) return false;

  // Check leading 0s, 001 to string is 1, 001 is not valid IP String
  return string.length === stringAsInt.toString().length;
}
