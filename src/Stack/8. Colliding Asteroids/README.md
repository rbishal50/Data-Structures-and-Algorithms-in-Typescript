## Colliding Asteroids

### Description

You're given an array of integers asteroids, where each integer represents the size of an asteroid. The sign of the integer represents the direction the asteroid is moving (positive = right, negative = left). All asteroids move at the same speed, meaning that two asteroids moving in the same direction can never collide.
For example, the integer 4 represents an asteroid of size 4 moving to the right. Similarly, -7 represents an asteroid of size 7 moving to the left.
If two asteroids collide, the smaller asteroid (based on absolute value) explodes. If two colliding asteroids are the same size, they both explode.
Write a function that takes in this array of asteroids and returns an array of integers representing the asteroids after all collisions occur.

## Signature

```typescript
function collidingAsteroids(asteroids: number[]): number[];
```
