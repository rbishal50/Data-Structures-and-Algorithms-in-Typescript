export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) space and O(1) time
  remove(node: Node): void {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }

  // O(1) space and O(1) time
  removeNodeBindings(node: Node): void {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
  }

  // O(1) space and O(1) time
  insertBefore(node: Node, nodeToInsert: Node): void {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);

    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }

    node.prev = nodeToInsert;
  }

  // O(1) space and O(1) time
  insertAfter(node: Node, nodeToInsert: Node): void {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);

    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;

    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }

    node.next = nodeToInsert;
  }

  // O(1) space and O(1) time
  setHead(node: Node): void {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.insertBefore(this.head, node);
  }

  // O(1) space and O(1) time
  setTail(node: Node): void {
    if (!this.tail) {
      this.setHead(node);
      return;
    }

    this.insertAfter(this.tail, node);
  }

  // O(1) space and O(P) time where P is the position
  insertAtPosition(position: number, nodeToInsert: Node): void {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let currentNode = this.head;
    let currentPosition = 1;

    while (!!currentNode && currentPosition !== position) {
      currentNode = currentNode.next;
      currentPosition++;
    }

    if (currentNode) {
      this.insertBefore(currentNode, nodeToInsert);
      return;
    }

    this.setTail(nodeToInsert);
  }

  // O(1) space and O(N) time where N is the no. of nodes
  containsNodeWithValue(value: number): boolean {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  // O(1) space and O(N) time where N is the no. of nodes
  removeNodesWithValue(value: number): void {
    let currentNode = this.head;

    while (currentNode) {
      const nodeToRemove = currentNode;
      currentNode = currentNode.next;

      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }
}
