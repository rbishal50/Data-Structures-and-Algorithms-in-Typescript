type Memo = { [key: number]: number };

// O(N) space
// O(N) time where N is the nth fibonacci number we want to find
// **If we don't use memo, it would take O(2^N) time which would be extremely slow**

export function nthFibonacci(n: number, memo: Memo = { 1: 0, 2: 1 }): number {
  // Base case, check if fibonacci no. is already computed
  if (memo[n] !== undefined) return memo[n];

  // Recursive case, get the fibonacci no. based on prev two numbers
  memo[n] = nthFibonacci(n - 1, memo) + nthFibonacci(n - 2, memo);

  // Return the fibonacci no.
  return memo[n];
}
