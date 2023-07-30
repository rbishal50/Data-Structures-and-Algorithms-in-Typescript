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

export function middleNode(linkedList: LinkedList): LinkedList | null {
  let length = 0;
  let currentNode: LinkedList | null = linkedList;

  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }

  let middleNode: LinkedList | null = linkedList;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    middleNode = middleNode?.next ?? null;
  }

  return middleNode;
}
