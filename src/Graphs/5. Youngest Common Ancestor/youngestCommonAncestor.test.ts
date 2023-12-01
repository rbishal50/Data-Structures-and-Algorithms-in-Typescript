import {
  getYoungestCommonAncestor,
  AncestralTree,
} from "./youngestCommonAncestor";

const topAncestor = new AncestralTree("A");
const descendantB = new AncestralTree("B");
const descendantC = new AncestralTree("C");
const descendantD = new AncestralTree("D");
const descendantE = new AncestralTree("E");
const descendantF = new AncestralTree("F");
const descendantG = new AncestralTree("G");
const descendantH = new AncestralTree("H");
const descendantI = new AncestralTree("I");
const descendantJ = new AncestralTree("J");
const descendantK = new AncestralTree("K");

descendantB.ancestor = topAncestor;
descendantC.ancestor = topAncestor;
descendantD.ancestor = topAncestor;
descendantE.ancestor = descendantB;
descendantF.ancestor = descendantB;
descendantG.ancestor = descendantB;
descendantH.ancestor = descendantE;
descendantI.ancestor = descendantE;
descendantJ.ancestor = descendantF;
descendantK.ancestor = descendantJ;

describe("getYoungestCommonAncestor", () => {
  test("Cases with same level descendant", () => {
    expect(
      getYoungestCommonAncestor(topAncestor, descendantB, descendantC)
    ).toBe(topAncestor);

    expect(
      getYoungestCommonAncestor(topAncestor, descendantE, descendantG)
    ).toBe(descendantB);

    expect(
      getYoungestCommonAncestor(topAncestor, descendantI, descendantJ)
    ).toBe(descendantB);
  });

  test("Cases with descendant as the ancestor", () => {
    expect(
      getYoungestCommonAncestor(topAncestor, descendantB, descendantE)
    ).toBe(descendantB);

    expect(
      getYoungestCommonAncestor(topAncestor, descendantC, topAncestor)
    ).toBe(topAncestor);

    expect(
      getYoungestCommonAncestor(topAncestor, descendantK, descendantJ)
    ).toBe(descendantJ);
  });

  test("Cases with different level descendant", () => {
    expect(
      getYoungestCommonAncestor(topAncestor, descendantE, descendantJ)
    ).toBe(descendantB);

    expect(
      getYoungestCommonAncestor(topAncestor, descendantD, descendantK)
    ).toBe(topAncestor);

    expect(
      getYoungestCommonAncestor(topAncestor, descendantG, descendantK)
    ).toBe(descendantB);
  });
});
