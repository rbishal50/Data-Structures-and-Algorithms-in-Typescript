import { LinkedList, middleNodeAlternative } from "./middleNodeAlternative";

describe("middleNodeAlternative", () => {
  test("should return the middle node of a linked list with odd length", () => {
    // Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
    const head1 = new LinkedList(1);
    head1.next = new LinkedList(2);
    head1.next.next = new LinkedList(3);
    head1.next.next.next = new LinkedList(4);
    head1.next.next.next.next = new LinkedList(5);

    // Expected Output: 3 -> 4 -> 5 -> null
    const expectedMiddle1 = new LinkedList(3);
    expectedMiddle1.next = new LinkedList(4);
    expectedMiddle1.next.next = new LinkedList(5);

    expect(middleNodeAlternative(head1)).toEqual(expectedMiddle1);
  });

  test("should return the second middle node of a linked list with even length", () => {
    // Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
    const head2 = new LinkedList(1);
    head2.next = new LinkedList(2);
    head2.next.next = new LinkedList(3);
    head2.next.next.next = new LinkedList(4);
    head2.next.next.next.next = new LinkedList(5);
    head2.next.next.next.next.next = new LinkedList(6);

    // Expected Output: 4 -> 5 -> 6 -> null
    const expectedMiddle2 = new LinkedList(4);
    expectedMiddle2.next = new LinkedList(5);
    expectedMiddle2.next.next = new LinkedList(6);

    expect(middleNodeAlternative(head2)).toEqual(expectedMiddle2);
  });

  test("should handle a linked list with only one node", () => {
    // Input: 1 -> null
    const head3 = new LinkedList(1);

    // Since there's only one node, it should be considered as the middle node
    expect(middleNodeAlternative(head3)).toEqual(head3);
  });

  test("should handle a linked list with two nodes", () => {
    // Input: 1 -> 2 -> null
    const head4 = new LinkedList(1);
    head4.next = new LinkedList(2);

    // Since there are two nodes, the second node should be considered as the middle node
    expect(middleNodeAlternative(head4)).toEqual(head4.next);
  });
});
