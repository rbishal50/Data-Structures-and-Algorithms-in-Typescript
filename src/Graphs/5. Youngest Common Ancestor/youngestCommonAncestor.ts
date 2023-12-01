export class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

// O(1) space
// O(D) time, where D is the depth of the ancestral tree

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
) {
  // Get the depth of 2 decendendents
  const depthOne = getDepthOfDescendant(descendantOne, topAncestor);
  const depthTwo = getDepthOfDescendant(descendantTwo, topAncestor);

  // Calculate yongest ancestor if depthOne is greater
  if (depthOne > depthTwo) {
    return calculateYongestAncestor(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  }
  // Else if depthTwo is greater or maybe equal
  return calculateYongestAncestor(
    descendantTwo,
    descendantOne,
    depthTwo - depthOne
  );
}

// Depth calculator
function getDepthOfDescendant(
  descendant: AncestralTree,
  topAncestor: AncestralTree
) {
  let depth = 0;
  while (descendant !== topAncestor) {
    depth++;
    descendant = descendant.ancestor!;
  }
  return depth;
}

// Youngest ancestor calculator
function calculateYongestAncestor(
  lowerDescendant: AncestralTree,
  higherDescendant: AncestralTree,
  difference: number
): AncestralTree {
  // Move lower to to same level as higher
  while (difference > 0) {
    lowerDescendant = lowerDescendant.ancestor!;
    difference--;
  }

  // Calculate the youngest ancestor moving up
  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor!;
    higherDescendant = higherDescendant.ancestor!;
  }

  return lowerDescendant;
}
