import {
  LinkedList,
  removeDuplicatesFromLinkedList,
} from "./removeDuplicatesFromLinkedList";

describe("removeDuplicatesFromLinkedList", () => {
  test("should remove duplicate nodes from a sorted linked list", () => {
    // Input: 1 -> 2 -> 2 -> 3 -> 4 -> 4 -> 4 -> null
    const head1 = new LinkedList(1);
    head1.next = new LinkedList(2);
    head1.next.next = new LinkedList(2);
    head1.next.next.next = new LinkedList(3);
    head1.next.next.next.next = new LinkedList(4);
    head1.next.next.next.next.next = new LinkedList(4);
    head1.next.next.next.next.next.next = new LinkedList(4);

    // Expected Output: 1 -> 2 -> 3 -> 4 -> null
    const expectedHead1 = new LinkedList(1);
    expectedHead1.next = new LinkedList(2);
    expectedHead1.next.next = new LinkedList(3);
    expectedHead1.next.next.next = new LinkedList(4);

    expect(removeDuplicatesFromLinkedList(head1)).toEqual(expectedHead1);

    // Input: -2 -> -2 -> 0 -> 1 -> 1 -> 1 -> null
    const head2 = new LinkedList(-2);
    head2.next = new LinkedList(-2);
    head2.next.next = new LinkedList(0);
    head2.next.next.next = new LinkedList(1);
    head2.next.next.next.next = new LinkedList(1);
    head2.next.next.next.next.next = new LinkedList(1);

    // Expected Output: -2 -> 0 -> 1 -> null
    const expectedHead2 = new LinkedList(-2);
    expectedHead2.next = new LinkedList(0);
    expectedHead2.next.next = new LinkedList(1);

    expect(removeDuplicatesFromLinkedList(head2)).toEqual(expectedHead2);
  });

  test("should handle a linked list with no duplicates", () => {
    // Input: 1 -> 2 -> 3 -> 4 -> null
    const head3 = new LinkedList(1);
    head3.next = new LinkedList(2);
    head3.next.next = new LinkedList(3);
    head3.next.next.next = new LinkedList(4);

    // Since there are no duplicates, the linked list should remain the same
    expect(removeDuplicatesFromLinkedList(head3)).toEqual(head3);
  });
});
