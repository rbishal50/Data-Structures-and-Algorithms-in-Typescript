## Find kth node from the end

### Description

Create a function that removes the kth node from the end of a Singly Linked List. The function takes the head of the Linked List and an integer k as inputs. The removal should be done in place, meaning the original Linked List should not be modified. Additionally, even if the head node is the one to be removed, the function should simply update its value and next pointer to maintain the head of the Linked List.

**Note**: The input Linked List will always have at least two nodes, and there will be at least k nodes in the list.

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

function removeKthNodeFromEnd(head: LinkedList, k: number): void;
```
