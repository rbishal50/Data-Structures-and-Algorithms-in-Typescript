// O(logN) space in all cases
// O(NLogN) time for average and best case (array sorted randomly or array sorted in ascending order)
// O(N^2) time for worst case (array sorted in descending order)

// Sorter class
export class Sorter {
  // Shorthand initialization for private elements
  constructor(private data: number[] = []) {}

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

  quickSort(leftPointer: number, rightPointer: number): void {
    // Base case for one or no elements
    if (rightPointer - leftPointer <= 0) return;

    // The pivot index
    const pivotPointer = this.partition(leftPointer, rightPointer);

    // Recursive quick sort in the left array and right array of the pivot
    this.quickSort(leftPointer, pivotPointer - 1);
    this.quickSort(pivotPointer + 1, rightPointer);
  }

  get sortedData() {
    return this.data;
  }
}
