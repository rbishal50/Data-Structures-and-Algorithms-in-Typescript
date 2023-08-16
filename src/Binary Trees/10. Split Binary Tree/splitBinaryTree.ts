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

// sum, canBeSplit
export type Split = [number, boolean];

// O(H) space
// O(N) time, where N is the no. of nodes & H is the height of the tree

export function splitBinaryTree(tree: BinaryTree): number {
  // We need to find the sum to get the required split
  const desiredSum = getSum(tree) / 2;
  const canBeSplit = trySubTrees(tree, desiredSum)[1];
  return canBeSplit ? desiredSum : 0;
}

function trySubTrees(tree: BinaryTree | null, desiredSum: number): Split {
  // Base case
  if (!tree) return [0, false];

  // Calc for left and right sub trees
  const [leftTreeSum, canLeftTreeBeSplit] = trySubTrees(tree.left, desiredSum);
  const [rightTreeSum, canRightTreeBeSplit] = trySubTrees(
    tree.right,
    desiredSum
  );

  // Calc curr sum and if can be split
  const currentSum = tree.value + leftTreeSum + rightTreeSum;
  const canBeSplit =
    canLeftTreeBeSplit || canRightTreeBeSplit || currentSum === desiredSum;

  return [currentSum, canBeSplit];
}

// Binary tree sum helper
function getSum(tree: BinaryTree | null): number {
  if (!tree) return 0;

  return tree.value + getSum(tree.left) + getSum(tree.right);
}
