import { BinaryTree, branchSums } from "./branchSums";

describe("branchSums", () => {
  test("Get branch sums of a balanced binary tree", () => {
    const tree: BinaryTree = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: { value: 8, left: null, right: null },
          right: { value: 9, left: null, right: null },
        },
        right: {
          value: 5,
          left: { value: 10, left: null, right: null },
          right: null,
        },
      },
      right: {
        value: 3,
        left: { value: 6, left: null, right: null },
        right: { value: 7, left: null, right: null },
      },
    };

    expect(branchSums(tree)).toEqual([15, 16, 18, 10, 11]);
  });

  test("Get branch sums of a binary tree with one node", () => {
    const tree: BinaryTree = {
      value: 1,
      left: null,
      right: null,
    };

    expect(branchSums(tree)).toEqual([1]);
  });

  test("Get branch sums of a binary tree with only one sub tree", () => {
    const tree: BinaryTree = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: null,
      },
      right: null,
    };

    expect(branchSums(tree)).toEqual([5]);
  });
});
