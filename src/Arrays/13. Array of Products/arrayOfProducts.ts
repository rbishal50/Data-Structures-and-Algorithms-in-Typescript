// O(N) space for storing each square
// O(N) time for going through each item (N + N => N in big O)

export function arrayOfProducts(array: number[]): number[] {
  // Create a new array to store products same length as input array
  const product = new Array(array.length).fill(1);

  // We will calculate only left product first
  let leftRunningProduct = 1;

  // Loop through the array and populate the product array where each item is the product of all of its leftmost item
  for (let i = 0; i < array.length; i++) {
    product[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  // We will calculate right product now
  let rightRunningProduct = 1;

  // Loop through the array and populate the product array where each item is the product of all of its rightmost item
  for (let i = array.length - 1; i >= 0; i--) {
    product[i] *= rightRunningProduct;
    rightRunningProduct *= array[i];
  }

  // Return the products
  return product;
}
