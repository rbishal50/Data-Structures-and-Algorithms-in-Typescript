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

export function middleNodeAlternative(
  linkedList: LinkedList
): LinkedList | null {
  let slowNode: LinkedList | null = linkedList;
  let fastNode: LinkedList | null = linkedList;

  // fast moves twice as fast as slow
  // So when fast reaches the end, slow will be pointing at the middle node
  while (fastNode?.next) {
    slowNode = slowNode?.next ?? null;
    fastNode = fastNode?.next?.next ?? null;
  }

  return slowNode;
}
