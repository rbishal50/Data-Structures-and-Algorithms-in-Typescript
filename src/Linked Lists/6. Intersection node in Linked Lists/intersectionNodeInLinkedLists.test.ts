import {
  LinkedList,
  intersectionNodeInLinkedLists,
} from "./intersectionNodeInLinkedLists";

describe("Find Intersection Node in Linked Lists", () => {
  test("No intersection", () => {
    const listA = new LinkedList(1);
    listA.next = new LinkedList(2);
    listA.next.next = new LinkedList(3);

    const listB = new LinkedList(4);
    listB.next = new LinkedList(5);
    listB.next.next = new LinkedList(6);

    expect(intersectionNodeInLinkedLists(listA, listB)).toBeNull();
  });

  test("Intersection at node with value 4", () => {
    const commonNode = new LinkedList(4);

    const listA = new LinkedList(1);
    listA.next = new LinkedList(2);
    listA.next.next = commonNode;

    const listB = new LinkedList(3);
    listB.next = commonNode;

    expect(intersectionNodeInLinkedLists(listA, listB)).toBe(commonNode);
  });

  test("Intersection at node with value 8", () => {
    const commonNode = new LinkedList(8);

    const listA = new LinkedList(1);
    listA.next = commonNode;

    const listB = new LinkedList(2);
    listB.next = new LinkedList(3);
    listB.next.next = commonNode;

    expect(intersectionNodeInLinkedLists(listA, listB)).toBe(commonNode);
  });
});
