import { removeKthNodeFromEnd, LinkedList } from "./removeKthNodeFromEnd";

describe("removeKthNodeFromEnd", () => {
  // Helper function to create a linked list from an array of values
  const createLinkedList = (values: number[]): LinkedList => {
    const head = new LinkedList(values[0]);
    let current = head;

    for (let i = 1; i < values.length; i++) {
      current.next = new LinkedList(values[i]);
      current = current.next;
    }

    return head;
  };

  test("should remove kth node from end when k is greater than 0", () => {
    const linkedList = createLinkedList([1, 2, 3, 4, 5]);
    removeKthNodeFromEnd(linkedList, 2);
    expect(linkedList).toEqual(createLinkedList([1, 2, 3, 5]));
  });

  test("should remove kth node from end when k is equal to the list length", () => {
    const linkedList = createLinkedList([1, 2, 3, 4, 5]);
    removeKthNodeFromEnd(linkedList, 5);
    expect(linkedList).toEqual(createLinkedList([2, 3, 4, 5]));
  });

  test("should remove head node when k is equal to 1", () => {
    const linkedList = createLinkedList([1, 2, 3, 4, 5]);
    removeKthNodeFromEnd(linkedList, 1);
    expect(linkedList).toEqual(createLinkedList([1, 2, 3, 4]));
  });

  test("should remove kth node from end when k is in the middle", () => {
    const linkedList = createLinkedList([1, 2, 3, 4, 5]);
    removeKthNodeFromEnd(linkedList, 3);
    expect(linkedList).toEqual(createLinkedList([1, 2, 4, 5]));
  });

  test("should remove kth node from end when k is in the middle and list length is large", () => {
    const linkedList = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    removeKthNodeFromEnd(linkedList, 5);
    expect(linkedList).toEqual(createLinkedList([1, 2, 3, 4, 5, 7, 8, 9, 10]));
  });
});
