## Longest Peak Length

Write a function that takes in an array of integers and returns the length of the longest peak in the array. A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which point they become strictly decreasing.

**Note**: - At least three integers are required to form a peak. The function should return 0 if there are no peaks in the array.

### Signature

```typescript
function longestPeakLength(array: number[]): number;
```
