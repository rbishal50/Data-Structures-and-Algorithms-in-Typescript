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

class TreeInfo {
  isBalanced: boolean;
  height: number;

  constructor(isBalanced: boolean, height: number) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}

// O(H) space
// O(N) time, where N is the no. of nodes & H is the height of the tree

export function heightBalancedBinaryTree(tree: BinaryTree): boolean {
  const treeInfo = getTreeInfo(tree);
  return treeInfo.isBalanced;
}

function getTreeInfo(node: BinaryTree | null): TreeInfo {
  if (node === null) return new TreeInfo(true, -1);

  const leftTreeInfo = getTreeInfo(node.left);
  const rightTreeInfo = getTreeInfo(node.right);

  const isBalanced =
    leftTreeInfo.isBalanced &&
    rightTreeInfo.isBalanced &&
    Math.abs(leftTreeInfo.height - rightTreeInfo.height) <= 1;

  const height = Math.max(leftTreeInfo.height, rightTreeInfo.height) + 1;

  return new TreeInfo(isBalanced, height);
}
