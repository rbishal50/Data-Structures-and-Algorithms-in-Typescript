import { BinaryTree, sumOfNodeDepths } from "./sumOfNodeDepths";

describe("sumOfNodeDepths", () => {
  test("Get sum of node depths of a binary tree", () => {
    const tree: BinaryTree = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: {
            value: 8,
            left: null,
            right: null,
          },
          right: {
            value: 9,
            left: null,
            right: null,
          },
        },
        right: {
          value: 5,
          left: null,
          right: null,
        },
      },
      right: {
        value: 3,
        left: {
          value: 6,
          left: null,
          right: null,
        },
        right: {
          value: 7,
          left: null,
          right: null,
        },
      },
    };

    expect(sumOfNodeDepths(tree)).toEqual(16);
  });

  test("Get sum of node depths of a binary tree with one node", () => {
    const tree: BinaryTree = {
      value: 1,
      left: null,
      right: null,
    };

    expect(sumOfNodeDepths(tree)).toEqual(0);
  });

  test("Get sum of node depths of a binary tree with one one sub tree", () => {
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

    expect(sumOfNodeDepths(tree)).toEqual(3);
  });
});
