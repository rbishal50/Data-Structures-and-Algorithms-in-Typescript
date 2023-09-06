import { collidingAsteroids } from "./collidingAsteroids";

describe("collidingAsteroids", () => {
  it("should handle an empty array", () => {
    expect(collidingAsteroids([])).toEqual([]);
  });

  it("should handle a single asteroid", () => {
    expect(collidingAsteroids([5])).toEqual([5]);
    expect(collidingAsteroids([-5])).toEqual([-5]);
  });

  it("should handle asteroids that do not collide", () => {
    expect(collidingAsteroids([5, 6, 7, 8])).toEqual([5, 6, 7, 8]);
    expect(collidingAsteroids([-5, -3, -2, -1])).toEqual([-5, -3, -2, -1]);
  });

  it("should handle colliding asteroids", () => {
    expect(collidingAsteroids([5, -5])).toEqual([]);
    expect(collidingAsteroids([10, -10, 5, -5])).toEqual([]);
    expect(collidingAsteroids([5, 10, -5, -10])).toEqual([5]);
    expect(collidingAsteroids([-3, 7, -8, 6, 7, -5, -7])).toEqual([-3, -8, 6]);
    expect(collidingAsteroids([-70, 100, 23, 42, -50, -75, 1, -2, -3])).toEqual(
      [-70, 100]
    );
  });
});
