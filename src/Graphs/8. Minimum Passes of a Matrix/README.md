## Minimum Passes of a Matrix

### Description

Write a function that takes in an integer matrix of potentially unequal height and width and returns the minimum number of passes required to convert all negative integers in the matrix to positive integers.

A negative integer in the matrix can only be converted to a positive integer if one or more of its adjacent elements is positive. An adjacent element is an element that is to the left, to the right, above, or below the current element in the matrix.

Converting a negative to a positive simply involves multiplying it by -1.

Note that the valu `0` is neither positive nor negative, meaning that a `0` can't convert an adjacent negative to a positive.

### Signature

```typescript
export function minimumPassesOfMatrix(matrix: number[][]): number;
```
