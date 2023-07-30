## Middle Node

### Description

You're given a Linked List with at least one node. Write a function that returns the middle node of the Linked List. If there are two middle nodes (i.e., an even-length list), your function should return the second of these nodes.

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

export function middleNode(linkedList: LinkedList): LinkedList | null;
```
