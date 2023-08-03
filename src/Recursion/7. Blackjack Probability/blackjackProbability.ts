type Memo = { [hand: number]: number };

// O(T - S) space
// O(T - S) time, where T and S are target and starting hand respectively

export function blackjackProbability(
  target: number,
  hand: number,
  memo: Memo = {}
): number {
  // Probability of hand already calculated
  if (hand in memo) return memo[hand];

  // If hand is greater than target, busted
  if (hand > target) return 1;

  // If hand is greater than or equal to target - 4, stand
  if (hand >= target - 4) return 0;

  let totalProbability = 0;

  // Calculate probability for next card we draw
  for (let i = 1; i <= 10; i++) {
    // One card draw will be 1/10(0.1) probability
    totalProbability += 0.1 * blackjackProbability(target, hand + i, memo);
  }

  memo[hand] = parseFloat(totalProbability.toFixed(3));

  return memo[hand];
}
