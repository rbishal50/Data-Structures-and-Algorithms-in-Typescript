// Node Class
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(max(M, N)) space
// O(max(M, N)) time where M & N are the no. of nodes in each linked list

export function sumOfLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList
): LinkedList {
  // Assume summed linked list head with value 0
  const newLinkedListHead: LinkedList = new LinkedList(0);

  // Set it as the current node
  let currentNode = newLinkedListHead;

  // The 2 nodes to add up
  let nodeOne: LinkedList | null = linkedListOne;
  let nodeTwo: LinkedList | null = linkedListTwo;

  // Initially carry is 0
  let carry = 0;

  // Loop
  while (nodeOne || nodeTwo || carry > 0) {
    // Sum based on two node values
    const valueOne = nodeOne?.value ?? 0;
    const valueTwo = nodeTwo?.value ?? 0;
    const sum = valueOne + valueTwo + carry;

    // Value of the summed node
    const value = sum % 10;

    // Carry
    carry = Math.floor(sum / 10);

    // New node with the added value
    const newNode = new LinkedList(value);

    // Current node's next node
    currentNode.next = newNode;

    // For next iteration
    currentNode = newNode;
    nodeOne = nodeOne?.next ?? null;
    nodeTwo = nodeTwo?.next ?? null;
  }

  // We have 0 as the head, so head.next would be the original head of our summed linked list
  return newLinkedListHead.next!;
}
