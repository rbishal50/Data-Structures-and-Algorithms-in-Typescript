// O(1) space
// O(N) time where N is the nth fibonacci number we want to find

export function nthFibonacciAlternative(n: number): number {
  // The last two fibonacci numbers
  const lastTwoNumbers = [0, 1];
  let [first, second] = lastTwoNumbers;

  // The next initial fibonacci index
  let nthFibonacci = 3;

  // Calculate the nth fibonacci no. based on loop
  while (nthFibonacci <= n) {
    // The next fibonacci number
    const nextFibonacciNumber = first + second;

    // Change values
    first = second;
    second = nextFibonacciNumber;
    nthFibonacci++;
  }

  // Return first if n === 1, otherwise second
  return n === 1 ? first : second;
}
