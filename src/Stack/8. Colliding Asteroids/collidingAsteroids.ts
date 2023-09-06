// O(N) space
// O(N) time where N is the length of the array

export function collidingAsteroids(asteroids: number[]) {
  const stack: number[] = [];

  // Loop through each asteroid
  for (const asteroid of asteroids) {
    // Push to stack if moving towards right
    if (asteroid > 0) {
      stack.push(asteroid);
      continue;
    }

    // For left moving asteroids
    while (true) {
      // Asteroid on top of the stack
      const top = stack[stack.length - 1];

      // Empty stack or top also is moving left
      if (stack.length === 0 || top < 0) {
        stack.push(asteroid);
        break;
      }

      // Asteroid size
      const asteroidSize = Math.abs(asteroid);

      // If top > size, current asteroid is destroyed
      if (top > asteroidSize) break;

      // If top === size, both asteroids are destroyed
      if (top === asteroidSize) {
        stack.pop();
        break;
      }

      // If top < size, top asteroid is destroyed
      stack.pop();
    }
  }

  return stack;
}
