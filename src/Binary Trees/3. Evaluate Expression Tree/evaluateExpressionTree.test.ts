import { BinaryTree, evaluateExpressionTree } from "./evaluateExpressionTree";

describe("evaluateExpressionTree", () => {
  test("Case 1", () => {
    const tree: BinaryTree = {
      value: -1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    };

    expect(evaluateExpressionTree(tree)).toEqual(5);
  });

  test("Case 2  ", () => {
    const tree: BinaryTree = {
      value: -3,
      left: {
        value: 9,
        left: null,
        right: null,
      },
      right: {
        value: -2,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 6,
          left: null,
          right: null,
        },
      },
    };

    expect(evaluateExpressionTree(tree)).toEqual(-4);
  });

  test("Case 3", () => {
    const tree: BinaryTree = {
      value: -4,
      left: {
        value: -4,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
      right: {
        value: -4,
        left: {
          value: 7,
          left: null,
          right: null,
        },
        right: {
          value: -4,
          left: {
            value: 8,
            left: null,
            right: null,
          },
          right: {
            value: 2,
            left: null,
            right: null,
          },
        },
      },
    };

    expect(evaluateExpressionTree(tree)).toEqual(224);
  });
});
