## Unique Paths

Let’s say you have a grid of rows and columns. Write a function that accepts a number of rows
and a number of columns and a memo (optional), and calculates the number of possible “shortest”
paths from the upper-leftmost square to the lower-rightmost square. Below is a 3X3 matrix. Find the total unique no. of paths from the start to the end. Each move you take must either go down or right. In other words, you can never move up or left in the graph.

| Start   | ------- | ------- |
| ------- | ------- | ------- |
| ------- | ------- | ------- |
| ------- | ------- | End     |

### Signature

```typescript
// [row, column]: path
type Memo = Map<[number, number], number>;

function uniquePaths(rows: number, columns: number, memo: Memo): number;
```
