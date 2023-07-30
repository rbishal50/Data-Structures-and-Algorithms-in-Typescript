// Node Class
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(1) space
// O(N) time where N is the no. of nodes

export function removeDuplicatesFromLinkedList(
  linkedList: LinkedList
): LinkedList | null {
  // Current node is the head of the linked list
  let currentNode: LinkedList | null = linkedList;

  // Loop until we have current node
  while (currentNode) {
    // The next node
    let nextNode: LinkedList | null = currentNode?.next ?? null;

    // Loop until the values are same and change the next node
    while (currentNode.value === nextNode?.value) {
      nextNode = nextNode.next;
    }

    // Update the next of current node once duplicates are skipped
    currentNode.next = nextNode;

    // For next iteration
    currentNode = nextNode;
  }

  // Return updated linked list
  return linkedList;
}
