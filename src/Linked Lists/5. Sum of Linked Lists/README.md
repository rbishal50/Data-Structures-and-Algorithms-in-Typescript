## Sum of linked lists

### Description

You are given two Linked Lists that represent non-negative integers. Each node in the Linked List is a digit of the integer, and the first node in each Linked List represents the least significant digit of the integer. You need to write a function that returns the head of a new Linked List that represents the sum of the integers represented by the two input Linked Lists. Each LinkedList node has an integer value in the range of 0 - 9, and it also has a next node pointing to the next node in the list or to None / null if it's the tail of the list.

Your function must create and return a new Linked List to represent the sum, and it is not allowed to modify either of the input Linked Lists.

## Signature

```typescript
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList
): LinkedList;
```
