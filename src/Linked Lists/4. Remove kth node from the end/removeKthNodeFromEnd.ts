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

export function removeKthNodeFromEnd(head: LinkedList, k: number): void {
  // Use 2 pointers
  let firstNode: LinkedList = head;
  let secondNode: LinkedList | null = head;

  let counter = 1;

  // Move second pointer k steps ahead first pointer
  while (counter <= k) {
    secondNode = secondNode?.next ?? null;
    counter++;
  }

  // If no second node, then head is to be removed
  if (!secondNode) {
    head.value = head.next!.value;
    head.next = head.next!.next!;
    return;
  }

  // If there is second node, then move until last
  // When second pointer is at last node, first node's next is the node to be removed
  while (secondNode.next) {
    secondNode = secondNode.next;
    firstNode = firstNode.next!;
  }

  firstNode.next = firstNode.next!.next!;
}
