export enum Direction {
  East = "EAST",
  West = "WEST",
}

// O(N) space
// O(N) time where N is the length of the array

export function sunsetViewsAlternative(
  buildings: number[],
  direction: Direction
) {
  // Array to store candidate buildings
  const candidateBuildings: number[] = [];

  // For looping from either 1st or last items (1st for west & last for east)
  const startIndex = direction === Direction.West ? 0 : buildings.length - 1;
  const step = direction === Direction.West ? 1 : -1;

  // Keep track of the maximum height
  let runningMaxHeight = 0;

  let idx = startIndex;

  while (idx >= 0 && idx < buildings.length) {
    const currentBuildingHeight = buildings[idx];

    // Update running max height and push to the array
    if (currentBuildingHeight > runningMaxHeight) {
      candidateBuildings.push(idx);
      runningMaxHeight = currentBuildingHeight;
    }
    idx += step;
  }

  if (direction === Direction.East) candidateBuildings.reverse();

  return candidateBuildings;
}
