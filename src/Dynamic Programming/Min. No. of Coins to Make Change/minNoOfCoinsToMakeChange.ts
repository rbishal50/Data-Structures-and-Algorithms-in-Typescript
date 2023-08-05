// O(N) space
// O(ND) time, where N is the target amount & D is the no. of coin denominations (denoms)

export function minNoOfCoinsToMakeChange(n: number, denoms: number[]): number {
  // Min no. of coins to make amount 0 - n
  const numOfCoins = new Array(n + 1).fill(Infinity);

  // Min. no. of coin to make 0 is 0
  numOfCoins[0] = 0;

  // Loop through each denom
  for (const denom of denoms) {
    // For each denom, calculate the min no. of coins fro amount 1 to n
    for (let amount = 1; amount < numOfCoins.length; amount++) {
      // We cannot get min coins for denom greater than amount
      if (denom > amount) continue;

      // Else we take the minimum of current no. of coins or 1 + min no. of coins need for the remaining amount
      numOfCoins[amount] = Math.min(
        numOfCoins[amount],
        1 + numOfCoins[amount - denom]
      );
    }
  }

  // Return -1 if we cannot make min no. of coins for change
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}
