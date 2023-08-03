## Staircase Traversal

Write a function that calculates the number of ways to climb a given staircase, considering that you can take a maximum of `maxSteps` steps at a time. The function should take two positive integers as input: `height` representing the total number of steps in the staircase and `maxSteps` representing the maximum number of steps you can take in a single move.

To find the number of ways to climb the staircase, you need to explore all possible combinations of steps, making sure not to exceed the given height. For example, if the height is 3 and the maxSteps is 2, there are three ways to climb the staircase: (1, 1, 1), (1, 2), and (2, 1).

To implement the function, you can use recursive backtracking, dynamic programming, or memoization to efficiently compute the result. Ensure that `maxSteps` is always less than or equal to the `height`.

The function should return the total number of ways to climb the given staircase considering the given `maxSteps`.

### Signature

```typescript
type Memo = { [height: number]: number };

function staircaseTraversal(
  height: number,
  maxSteps: number,
  memo: Memo
): number;
```
