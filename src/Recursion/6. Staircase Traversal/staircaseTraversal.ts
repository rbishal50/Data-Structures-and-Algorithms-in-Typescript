// { height: noOfSteps }
type Memo = { [height: number]: number };

// O(N) space
// O(K * N) time, where N is the height and K is the no. of allowed steps (max steps)
// ** If not using memo, time compLexity would be O(K^N) **

export function staircaseTraversal(
  height: number,
  maxSteps: number,
  memo: Memo = { 0: 1, 1: 1 }
): number {
  // Base case if steps is already calculated
  if (height in memo) return memo[height];

  // Recursive case
  let steps = 0;
  for (let i = 1; i <= Math.min(height, maxSteps); i++) {
    steps += staircaseTraversal(height - i, maxSteps, memo);
  }

  // Set height in memo
  memo[height] = steps;

  // Return steps
  return steps;
}
