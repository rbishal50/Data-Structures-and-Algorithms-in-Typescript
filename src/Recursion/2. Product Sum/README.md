## Product Sum

Write a function that takes in a "special" array and calculates its product sum. A "special" array is a non-empty array that can contain either integers or other "special" arrays. The product sum of a "special" array is calculated as follows:

1. Sum all the elements of the array.
2. For any inner "special" arrays found, calculate their sum as well, but multiply the sum by their level of depth. The depth of a "special" array is determined by how far nested it is within other "special" arrays.

For example:

- The product sum of `[x, y]` is simply `x + y`.
- The product sum of `[x, [y, z]]` is calculated as `x + 2 * (y + z)`, where the inner array `[y, z]` has depth 2.
- The product sum of `[x, [y, [z]]]` is calculated as `x + 2 * (y + 3z)`, where the innermost array `[z]` has depth 3.

Your task is to implement the function that can compute the product sum of any given "special" array.

### Signature

```typescript
type SpecialArray = Array<number | SpecialArray>;

function productSum(array: SpecialArray, multiplier: number): number;
```
