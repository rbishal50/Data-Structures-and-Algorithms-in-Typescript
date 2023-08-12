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

// O(N) space (N/2 rounded to N in big O)
// O(N) time, where N is the no. of nodes in the binary tree
// N/2 (space) because in worst case, we can have all the nodes at a certain level

export function invertBinaryTree(tree: BinaryTree | null): void {
  // Use a queue to store nodes
  const queue: Array<BinaryTree | null> = [tree];

  // While queue is not empty
  while (queue.length > 0) {
    // Check 1st node in the queue (FIFO)
    const current = queue.shift();

    // can be null as we are inserting leaf nodes children as well
    // (Some nodes can have only left or right child, so we insert all for easiness in our code)
    if (!current) continue;

    // Swap left and right nodes
    swapNodes(current);

    // Push the left and right nodes to the queue
    queue.push(current.left);
    queue.push(current.right);
  }
}

// Swap nodes helper
function swapNodes(tree: BinaryTree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}
