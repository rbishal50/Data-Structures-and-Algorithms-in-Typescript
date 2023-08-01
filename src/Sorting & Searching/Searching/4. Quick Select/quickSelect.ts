// O(1) space in all cases
// O(N) time for average and best case (pivot comes up roughly in the middle,
// and we don't have to loop up one half of the array each time )
// O(N^2) time for worst case (pivot is the last item in most cases)

// Select class
export class Select {
  data: number[];
  constructor(data: number[]) {
    this.data = data;
  }

  // Partition method
  partition(leftPointer: number, rightPointer: number): number {
    // Set last element as the pivot
    const pivotIndex = rightPointer;
    const pivot = this.data[pivotIndex];
    rightPointer--;

    while (true) {
      // Every left element of pivot should be less than the pivot
      while (this.data[leftPointer] < pivot) {
        leftPointer++;
      }

      // Every right element of pivot should be greater than the pivot
      while (this.data[rightPointer] > pivot) {
        rightPointer--;
      }

      // If leftPointer has reached rightPointer we break out of the loop
      if (leftPointer >= rightPointer) break;

      // Else we swap the two values
      [this.data[leftPointer], this.data[rightPointer]] = [
        this.data[rightPointer],
        this.data[leftPointer],
      ];

      // Increment the left pointer
      leftPointer++;
    }

    // Swap the values for pivotIndex and leftPointer
    // The pivot now is in the correct position
    [this.data[leftPointer], this.data[pivotIndex]] = [
      this.data[pivotIndex],
      this.data[leftPointer],
    ];

    // Return the pivot index / left pointer index
    return leftPointer;
  }

  quickSelectHelper(
    leftPointer: number,
    rightPointer: number,
    k: number
  ): number {
    // Base case for one or no elements
    if (rightPointer - leftPointer <= 0) return this.data[leftPointer];

    // The pivot index
    const pivotPointer = this.partition(leftPointer, rightPointer);

    // Recursive quick select in the left array of the pivot
    if (pivotPointer > k) {
      return this.quickSelectHelper(leftPointer, pivotPointer - 1, k);
    }

    // Recursive quick select in the  right array of the pivot
    if (pivotPointer < k) {
      return this.quickSelectHelper(pivotPointer + 1, rightPointer, k);
    }

    // If pivotPointer === k
    return this.data[pivotPointer];
  }

  quickSelect(k: number): number {
    // k will start from 1, but first item will be 0 (our partition method also takes in 0 index)
    // So, we decrement k by 1 to get the desired value
    return this.quickSelectHelper(0, this.data.length - 1, k - 1);
  }
}
