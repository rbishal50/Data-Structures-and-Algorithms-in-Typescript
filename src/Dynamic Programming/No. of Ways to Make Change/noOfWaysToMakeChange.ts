// O(N) space
// O(ND) time, where N is the target amount & D is the no. of coin denominations (denoms)

export function noOfWaysToMakeChange(n: number, denoms: number[]): number {
  // No of ways to make change from 0 to n (0 to n index being the amount)
  const ways = new Array(n + 1).fill(0);

  // Only one way to make 0 (no change)
  ways[0] = 1;

  // For each denom
  for (const denom of denoms) {
    // Check if we can make change for the amount
    for (let amount = 1; amount < ways.length; amount++) {
      // If denom is already greater, we can not make change
      if (denom > amount) continue;

      // Else add the no. of ways we can make the change
      ways[amount] += ways[amount - denom];
    }
  }

  // The last item will be the no of ways we can make the change for the given amount
  return ways[n];
}
