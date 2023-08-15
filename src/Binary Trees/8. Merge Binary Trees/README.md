## Merge Binary Trees

Given two binary trees, merge them and return the resulting tree. If two nodes overlap during the merger then sum the values, otherwise use the existing node.
Note that your solution can either mutate the existing trees or return a new tree.

### Signature

```typescript
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function mergeBinaryTrees(
  tree1: BinaryTree | null,
  tree2: BinaryTree | null
): BinaryTree | null;
```
