import { LinkedList, sumOfLinkedLists } from "./sumOfLinkedLists";

describe("sumOfLinkedLists", () => {
  test("should return the sum of two single-digit numbers", () => {
    const list1 = new LinkedList(5);
    const list2 = new LinkedList(7);

    const result = sumOfLinkedLists(list1, list2);

    // 5 + 7 = 12
    // 2 -> 1
    expect(result?.value).toEqual(2);
    expect(result?.next?.value).toEqual(1);
  });

  test("should return the sum of two multi-digit numbers", () => {
    const list1 = new LinkedList(2);
    list1.next = new LinkedList(4);
    list1.next.next = new LinkedList(3); // 342

    const list2 = new LinkedList(5);
    list2.next = new LinkedList(6);
    list2.next.next = new LinkedList(4); // 465

    const result = sumOfLinkedLists(list1, list2);

    // 2 -> 4 -> 3
    // 5 -> 6 -> 4
    // 342 + 465 = 807
    expect(result?.value).toEqual(7);
    expect(result?.next?.value).toEqual(0);
    expect(result?.next?.next?.value).toEqual(8);
  });

  test("should handle carry-over digits", () => {
    const list1 = new LinkedList(9);
    list1.next = new LinkedList(9); // 99

    const list2 = new LinkedList(1);
    list2.next = new LinkedList(9); // 91

    const result = sumOfLinkedLists(list1, list2);

    // 9 -> 9
    // 1 -> 9
    // 99 + 91 = 190
    expect(result?.value).toEqual(0);
    expect(result?.next?.value).toEqual(9);
    expect(result?.next?.next?.value).toEqual(1);
  });
});
