// O(1) space
// O(NLogN) time for sorting and going through the array

export function minimumAmountOfChange(coins: number[]): number {
  // Sort the coins
  coins.sort((a, b) => a - b);

  // Calculate the running sum
  let sum = 0;
  for (const coin of coins) {
    // If at any point current coin is greater than sum + 1, we have found the minimum change required
    if (coin > sum + 1) break;
    sum += coin;
  }

  // The min change
  return sum + 1;
}
