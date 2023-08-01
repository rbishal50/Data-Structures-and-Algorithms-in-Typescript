## Search in a sorted matrix

### Description

You are given a two-dimensional array (a matrix) of distinct integers and a target integer. Each row in the matrix is sorted, and each column is also sorted. The matrix doesn't necessarily have the same height and width. Write a function that returns an array of the row and column indices of the target integer if it's contained in the matrix, otherwise [-1, -1].

## Signature

```typescript
type Range = [number, number];

function searchInSortedMatrix(matrix: number[][], target: number): Range;
```
