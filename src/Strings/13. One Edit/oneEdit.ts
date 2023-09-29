// O(1) space
// O(N) time, where N is the length of the shorter string

export function oneEdit(stringOne: string, stringTwo: string): boolean {
  // If string requires more than 1 edits
  if (Math.abs(stringOne.length - stringTwo.length) > 1) return false;

  // Flag to check if we have already edited once
  let isEdited = false;

  // Larger and smaller strings
  const largerString =
    stringOne.length > stringTwo.length ? stringOne : stringTwo;
  const smallerString =
    stringOne.length <= stringTwo.length ? stringOne : stringTwo;

  // Indices
  let largerStringIndex = 0;
  let smallerStringIndex = 0;

  while (
    largerStringIndex < largerString.length &&
    smallerStringIndex < smallerString.length
  ) {
    // No edits required
    if (largerString[largerStringIndex] === smallerString[smallerStringIndex]) {
      largerStringIndex++;
      smallerStringIndex++;
      continue;
    }

    // Already edited once and we need one more edit, so return false
    if (isEdited) return false;

    // We are going to edit one time, so set isEdited to true
    isEdited = true;

    // If length is same, increment both indices (replace case)
    if (largerString.length === smallerString.length) {
      largerStringIndex++;
      smallerStringIndex++;
      continue;
    }

    // Else increment larger string index (add / remove case)
    largerStringIndex++;
  }

  // If we are pass the while loop, we have made atmost one edit
  return true;
}
