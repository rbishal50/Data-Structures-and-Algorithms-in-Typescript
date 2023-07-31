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
// O(N + M) time where N & M are the no. of nodes in each linked list

export function intersectionNodeInLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList
): LinkedList | null {
  // Find the length of 2 linked lists
  let linkedListOneLength = 0;
  let linkedListTwoLength = 0;

  let currentNodeOne: LinkedList | null = linkedListOne;
  let currentNodeTwo: LinkedList | null = linkedListTwo;

  while (currentNodeOne) {
    currentNodeOne = currentNodeOne.next;
    linkedListOneLength++;
  }

  while (currentNodeTwo) {
    currentNodeTwo = currentNodeTwo.next;
    linkedListTwoLength++;
  }

  // Calc the difference
  const difference = Math.abs(linkedListOneLength - linkedListTwoLength);

  // The larger linked list
  let largerLinkedList: LinkedList | null =
    linkedListOneLength > linkedListTwoLength ? linkedListOne : linkedListTwo;

  // The smaller linked list
  let smallerLinkedList: LinkedList | null =
    linkedListOneLength > linkedListTwoLength ? linkedListTwo : linkedListOne;

  // Move larger list difference step forwards
  for (let i = 0; i < difference; i++) {
    largerLinkedList = largerLinkedList?.next ?? null;
  }

  // Check for intersection until the end
  while (largerLinkedList !== smallerLinkedList) {
    largerLinkedList = largerLinkedList?.next ?? null;
    smallerLinkedList = smallerLinkedList?.next ?? null;
  }

  // Return the intersection
  return smallerLinkedList;
}
