class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(H) space & O(H + K) time
// where H is the height of the binary search tree and K is the input number

class TreeInfo {
  noOfNodesVisited: number;
  latestVisitedNodeValue: number;

  constructor(noOfNodesVisited: number, latestVisitedNodeValue: number) {
    this.noOfNodesVisited = noOfNodesVisited;
    this.latestVisitedNodeValue = latestVisitedNodeValue;
  }
}

export function findKthLargestValueInBst(tree: BST, k: number) {
  const treeInfo = new TreeInfo(0, -1);
  reverseInorderTraversal(tree, treeInfo, k);
  return treeInfo.latestVisitedNodeValue;
}

function reverseInorderTraversal(
  node: BST | null,
  treeInfo: TreeInfo,
  k: number
) {
  if (node === null || treeInfo.noOfNodesVisited >= k) return;

  // Reverse in order traversal, but returns early ifvalue found
  reverseInorderTraversal(node.right, treeInfo, k);
  if (treeInfo.noOfNodesVisited >= k) return;

  treeInfo.noOfNodesVisited++;
  treeInfo.latestVisitedNodeValue = node.value;
  reverseInorderTraversal(node.left, treeInfo, k);
}
