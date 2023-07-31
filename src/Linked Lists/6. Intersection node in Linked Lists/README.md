## Intersection node in linked lists

### Description

You have two linked lists that may or may not intersect at a common node. Write a function that finds and returns the intersection node if it exists, or returns null if there is no intersection. Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to null if it's the tail of the list.

**Note**: Please note that your function should only return an existing node and should not modify either of the linked lists. Additionally, it should not create any new linked lists.

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

function intersectionNodeInLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList
): LinkedList | null;
```
