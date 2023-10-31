// O(1) space
// O(N) time, where N is the array length

export function hasSingleCycle(array: number[]) {
  let numOfElementsVisited = 0;
  let currentIndex = 0;

  while (numOfElementsVisited < array.length) {
    // If before completing the array, we are at start index, there's a cycle
    if (numOfElementsVisited > 0 && currentIndex === 0) return false;
    // Else, increment num visited and calculate next index
    numOfElementsVisited++;
    currentIndex = getNextIndex(currentIndex, array);
  }
  // To have a single cycle, we have to be at start index at the end of the iteration
  return currentIndex === 0;
}

// Get next index helper
function getNextIndex(currentIndex: number, array: number[]) {
  // Move forward by jump steps
  const jump = array[currentIndex];
  // Next index (for cyclic array mod by length)
  const nextIndex = (currentIndex + jump) % array.length;
  // Handle negative index
  return nextIndex >= 0 ? nextIndex : nextIndex + array.length;
}
