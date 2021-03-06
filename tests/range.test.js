const range = require('../lib/range')

test('should default to a step size of 1 if none is provided', () => {
  expect(range(0, 5)).toEqual([0, 1, 2, 3, 4, 5])
})

test('should respect the step size', () => {
  expect(range(0, 10, 1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10])
  expect(range(0, 10, 3)).toEqual([0, 3, 6, 9])
  expect(range(0, 10, 4)).toEqual([0, 4, 8])
  expect(range(0, 10, 5)).toEqual([0, 5, 10])
  expect(range(0, 10, 6)).toEqual([0, 6])
  expect(range(0, 10, 7)).toEqual([0, 7])
  expect(range(0, 10, 8)).toEqual([0, 8])
  expect(range(0, 10, 9)).toEqual([0, 9])
  expect(range(0, 10, 10)).toEqual([0, 10])
})

test('should end in the end number, if possible', () => {
  expect(range(0, 5)).toEqual([0, 1, 2, 3, 4, 5])
})

test('should not spill over if the step is too high', () => {
  expect(range(0, 5, 6)).toEqual([0])
})

test('should handle negative ranges', () => {
  expect(range(-10, -1, 1)).toEqual([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1])
  expect(range(-10, -1, 2)).toEqual([-10, -8, -6, -4, -2])
  expect(range(-10, -1, 3)).toEqual([-10, -7, -4, -1])
  expect(range(-10, -1, 4)).toEqual([-10, -6, -2])
  expect(range(-10, -1, 5)).toEqual([-10, -5])
  expect(range(-10, -1, 6)).toEqual([-10, -4])
  expect(range(-10, -1, 7)).toEqual([-10, -3])
  expect(range(-10, -1, 8)).toEqual([-10, -2])
  expect(range(-10, -1, 9)).toEqual([-10, -1])
  expect(range(-10, -1, 10)).toEqual([-10])
})

test('should handle ranges from negative to positive', () => {
  expect(range(-2, 2)).toEqual([-2, -1, 0, 1, 2])
})

test('should handle ranges from positive to negative', () => {
  expect(range(2, -2)).toEqual([2, 1, 0, -1, -2])
})

test('should return the value if start and end match', () => {
  expect(range(0, 0)).toEqual([0])
  expect(range(0, 0, 2)).toEqual([0])
  expect(range(0, 0, 3)).toEqual([0])
  expect(range(10, 10)).toEqual([10])
  expect(range(10, 10, 2)).toEqual([10])
  expect(range(10, 10, 3)).toEqual([10])
})

test('should assume a start of 0 if only one arg is passed', () => {
  expect(range(5)).toEqual([0, 1, 2, 3, 4, 5])
  expect(range(-5)).toEqual([0, -1, -2, -3, -4, -5])
  expect(range(0)).toEqual([0])
})
