class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class TreeInfo {
  diameter: number;
  height: number;

  constructor(diameter: number = 0, height: number = 0) {
    this.diameter = diameter;
    this.height = height;
  }
}

// O(H) space and O(N) time on average
// O(N) space and O(N) time on average
// where N is the so. of nodes and H is the height of the tree

export function binaryTreeDiameter(tree: BinaryTree): number {
  return getDiameter(tree).diameter;
}

function getDiameter(tree: BinaryTree | null): TreeInfo {
  if (!tree) return new TreeInfo();

  // Get the diameter of the left and right sub trees
  const leftTreeInfo = getDiameter(tree.left);
  const rightTreeInfo = getDiameter(tree.right);

  // Update current diameter as max between the values
  const currentDiameter = Math.max(
    leftTreeInfo.diameter,
    rightTreeInfo.diameter,
    leftTreeInfo.height + rightTreeInfo.height
  );

  // Update current diameter as max between the values + 1 for the root
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentDiameter, currentHeight);
}
