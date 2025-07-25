## River Sizes

### Description

You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only `0`s and `1`s. Each `0` represents land, and each `1` represents part of a river. A river consists of any number of `1`s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent `1`s forming a river determine its size.

Note that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped or T-shaped.
Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes don't need to be in any particular order.

### Signature

```typescript
function riverSizes(matrix: number[][]): number[];
```
