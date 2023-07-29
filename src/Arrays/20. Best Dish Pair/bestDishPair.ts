// O(N) space for storing sweet and savoring dishes separately
// O(NLogN) time where N is the no. of items

export function bestDishPair(dishes: number[], target: number): number[] {
  // Separate and sort sweet and savory dishes
  const sweetDishes = dishes.filter((dish) => dish < 0).sort((a, b) => b - a);
  const savoryDishes = dishes.filter((dish) => dish > 0).sort((a, b) => a - b);

  // Initialize variables to find the best pair
  let bestDifference = Infinity;
  let bestPair = [0, 0];
  let sweetIndex = 0;
  let savoryIndex = 0;

  // Loop until both arrays have items
  while (sweetIndex < sweetDishes.length && savoryIndex < savoryDishes.length) {
    // Current flavor combined
    const currentSum = sweetDishes[sweetIndex] + savoryDishes[savoryIndex];

    // For perfect flavor
    if (currentSum === target) {
      return [sweetDishes[sweetIndex], savoryDishes[savoryIndex]];
    }

    // If greater it is not valid, continue to next
    // To lower the sum, we increment sweet index, as it is sorted in descending order
    if (currentSum > target) {
      sweetIndex++;
      continue;
    }

    // Update the difference and best pair accordingly
    const currentDifference = target - currentSum;
    if (currentDifference < bestDifference) {
      bestDifference = currentDifference;
      bestPair = [sweetDishes[sweetIndex], savoryDishes[savoryIndex]];
    }

    // Increment savory index for next iteration
    savoryIndex++;
  }

  // Return the best pair
  return bestPair;
}
