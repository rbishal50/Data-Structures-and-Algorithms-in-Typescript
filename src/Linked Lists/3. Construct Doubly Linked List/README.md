## Construct Doubly Linked List

### Description

### Properties

- `head`: Points to the head node of the linked list.
- `tail`: Points to the tail node of the linked list.

### Methods

#### setHead(node: Node): void

Sets the provided node as the new head of the linked list.

#### setTail(node: Node): void

Sets the provided node as the new tail of the linked list.

#### insertBefore(node: Node, nodeToInsert: Node): void

Inserts the `nodeToInsert` before the `node` in the linked list.

#### insertAfter(node: Node, nodeToInsert: Node): void

Inserts the `nodeToInsert` after the `node` in the linked list.

#### insertAtPosition(position: number, nodeToInsert: Node): void

Inserts the `nodeToInsert` at the given position in the linked list. The position of the head node is 1.

#### remove(node: Node): void

Removes the provided `node` from the linked list.

#### removeNodesWithValue(value: number): void

Removes all nodes with the given `value` from the linked list.

#### containsNodeWithValue(value: number): boolean

Searches for a node with the given `value` in the linked list and returns `true` if found, `false` otherwise.

### Node Class

Each Node has the following properties:

- `value`: The integer value of the node.
- `prev`: Points to the previous node in the linked list.
- `next`: Points to the next node in the linked list, or `None / null` if it's the tail node.

## Signature

```typescript
export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {}
```
