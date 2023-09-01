export enum Direction {
  East = "EAST",
  West = "WEST",
}

// O(N) space
// O(N) time where N is the length of the array

export function sunsetViews(buildings: number[], direction: Direction) {
  // Stack to store candidate buildings
  const candidateBuildings: number[] = [];

  // For looping from either 1st or last items (1st for east & last for west)
  const startIndex = direction === Direction.East ? 0 : buildings.length - 1;
  const step = direction === Direction.East ? 1 : -1;
  let idx = startIndex;

  while (idx >= 0 && idx < buildings.length) {
    const currentBuildingHeight = buildings[idx];

    // Pop top item from the stack if current building blocks the sunset
    while (
      candidateBuildings.length > 0 &&
      buildings[candidateBuildings[candidateBuildings.length - 1]] <=
        currentBuildingHeight
    ) {
      candidateBuildings.pop();
    }

    // Insert to stack assuming this building can see the sunset
    candidateBuildings.push(idx);

    // Increment building index
    idx += step;
  }

  if (direction === Direction.West) candidateBuildings.reverse();

  return candidateBuildings;
}
