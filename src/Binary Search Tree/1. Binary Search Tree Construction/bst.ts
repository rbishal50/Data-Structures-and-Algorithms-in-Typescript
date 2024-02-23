export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // O(1) space & O(logN) time in average
  // O(1) space & O(N) time in worst
  // where N is the no. of nodes in the binary search tree
  insert(value: number): BST {
    // Let this be the current node
    let currentNode: BST = this;

    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  // O(1) space & O(logN) time in average
  // O(1) space & O(N) time in worst
  // where N is the no. of nodes in the binary search tree
  contains(value: number) {
    let currentNode: BST | null = this;

    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // O(1) space & O(logN) time in average
  // O(1) space & O(N) time in worst
  // where N is the no. of nodes in the binary search tree
  remove(value: number, parentNode: BST | null = null): BST {
    let currentNode: BST | null = this;
    while (currentNode !== null) {
      // Find the node to remove
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // If node found
        // First check if it has both left and right children
        // If it has, then get the minimum value from the right children and change the value and remove the node
        if (currentNode.left !== null && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
        }
        // Else check root node is to be removed with only one chidren
        else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // single node case
          }
        }
        // Else check remove the node with one or no chidlren
        else if (parentNode.left === currentNode) {
          parentNode.left =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if (parentNode.right === currentNode) {
          parentNode.right =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  // Get minimum value helper
  getMinValue(): number {
    let currentNode: BST = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}
