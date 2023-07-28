// O(1) space
// O(N) time where N is the no. of seats

const EMPTY_SEAT = 0;

export function bestSeat(seats: number[]): number {
  // We haven't found the best seat yet
  let bestSeatIndex = -1;
  let maxSpace = 0;
  let leftPointer = 0;

  // Loop from the left
  while (leftPointer < seats.length) {
    // Check how may seats are empty to the right
    let rightPointer = leftPointer + 1;
    while (rightPointer < seats.length && seats[rightPointer] === EMPTY_SEAT) {
      rightPointer += 1;
    }

    // Check how many seats are available and update accrdingly
    const currentSpace = rightPointer - leftPointer - 1;
    if (currentSpace > maxSpace) {
      maxSpace = currentSpace;
      bestSeatIndex = Math.floor((leftPointer + rightPointer) / 2);
    }

    // Update left pointer
    leftPointer = rightPointer;
  }

  // Return the best seat
  return bestSeatIndex;
}
