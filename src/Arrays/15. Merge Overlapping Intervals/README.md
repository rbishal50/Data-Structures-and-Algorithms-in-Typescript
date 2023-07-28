## Merge Overlapping Intervals

Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order. Each interval is represented as an array of two integers, with interval[0] as the start of the interval and interval[1] as the end of the interval.

**Note**: Back-to-back intervals aren't considered to be overlapping. For example, [1, 5] and [6, 7] aren't overlapping; however, [1, 6] and [6, 7] are overlapping. The start of any particular interval will always be less than or equal to the end of that interval.

### Signature

```typescript
function mergeOverlappingIntervals(array: number[][]): number[][];
```
