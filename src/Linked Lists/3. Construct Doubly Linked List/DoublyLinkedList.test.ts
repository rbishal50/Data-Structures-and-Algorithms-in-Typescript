import { DoublyLinkedList, Node } from "./DoublyLinkedList";

describe("DoublyLinkedList", () => {
  let linkedList = new DoublyLinkedList();

  beforeEach(() => {
    linkedList = new DoublyLinkedList();
  });

  describe("setHead", () => {
    test("should set the provided node as the new head", () => {
      const node1 = new Node(1);
      linkedList.setHead(node1);
      expect(linkedList.head).toBe(node1);
    });
  });

  describe("setTail", () => {
    test("should set the provided node as the new tail", () => {
      const node1 = new Node(1);
      linkedList.setTail(node1);
      expect(linkedList.tail).toBe(node1);
    });
  });

  describe("insertBefore", () => {
    test("should insert the nodeToInsert before the given node", () => {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);

      linkedList.setHead(node1);
      linkedList.setTail(node3);

      linkedList.insertBefore(node3, node2);

      expect(linkedList.head).toBe(node1);
      expect(linkedList.head!.next).toBe(node2);
      expect(node2.prev).toBe(linkedList.head);
      expect(node2.next).toBe(node3);
      expect(node3.prev).toBe(node2);
    });
  });

  describe("insertAfter", () => {
    test("should insert the nodeToInsert after the given node", () => {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);

      linkedList.setHead(node1);
      linkedList.setTail(node3);

      linkedList.insertAfter(node1, node2);

      expect(linkedList.head).toBe(node1);
      expect(linkedList.head!.next).toBe(node2);
      expect(node2.prev).toBe(linkedList.head);
      expect(node2.next).toBe(node3);
      expect(node3.prev).toBe(node2);
    });
  });

  describe("remove", () => {
    test("should remove the given node from the linked list", () => {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);

      linkedList.setHead(node1);
      linkedList.setTail(node3);

      linkedList.insertBefore(node3, node2);

      expect(linkedList.head).toBe(node1);
      expect(linkedList.head!.next).toBe(node2);
      expect(node2.prev).toBe(linkedList.head);
      expect(node2.next).toBe(node3);
      expect(node3.prev).toBe(node2);

      linkedList.remove(node2);

      expect(linkedList.head).toBe(node1);
      expect(linkedList.head!.next).toBe(node3);
      expect(node3.prev).toBe(linkedList.head);
      expect(node3.next).toBe(null);
    });
  });

  describe("insertAtPosition", () => {
    test("should insert the nodeToInsert at the given position", () => {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);

      linkedList.setHead(node1);
      linkedList.setTail(node3);

      linkedList.insertAtPosition(2, node2);

      expect(linkedList.head).toBe(node1);
      expect(linkedList.head!.next).toBe(node2);
      expect(node2.prev).toBe(linkedList.head);
      expect(node2.next).toBe(node3);
      expect(node3.prev).toBe(node2);
    });
  });

  describe("removeNodesWithValue", () => {
    test("should remove all nodes with the given value from the linked list", () => {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(2);
      const node4 = new Node(3);

      linkedList.setHead(node1);
      linkedList.setTail(node4);

      linkedList.insertBefore(node4, node3);
      linkedList.insertBefore(node3, node2);

      expect(linkedList.head).toBe(node1);
      expect(linkedList.head!.next).toBe(node2);
      expect(node2.prev).toBe(linkedList.head);
      expect(node2.next).toBe(node3);
      expect(node3.prev).toBe(node2);
      expect(node3.next).toBe(node4);
      expect(node4.prev).toBe(node3);

      linkedList.removeNodesWithValue(2);

      expect(linkedList.head).toBe(node1);
      expect(linkedList.head!.next).toBe(node4);
      expect(node4.prev).toBe(linkedList.head);
      expect(node4.next).toBe(null);
    });
  });

  describe("containsNodeWithValue", () => {
    test("should return true if a node with the given value is present in the linked list", () => {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);

      linkedList.setHead(node1);
      linkedList.setTail(node3);

      expect(linkedList.containsNodeWithValue(2)).toBe(false);

      linkedList.insertBefore(node3, node2);

      expect(linkedList.containsNodeWithValue(2)).toBe(true);
    });
  });
});
