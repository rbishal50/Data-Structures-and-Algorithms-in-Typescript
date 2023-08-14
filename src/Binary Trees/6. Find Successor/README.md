## Find Successor

Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node) as well as a node contained in that tree and returns the given node's successor.
A node's successor is the next node to be visited (immediately after the given node) when traversing its tree using the in-order tree- traversal technique. A node has no successor if it's the last node to be visited in the in-order traversal.
If a node has no successor, your function should return null.
Each BinaryTree node has an integer value, a parent node, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or null.

### Signature

```typescript
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree: BinaryTree, node: BinaryTree): BinaryTree | null;
```
