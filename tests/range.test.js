const range = require('../src/range')

// it ('should default to a step size of 1 if none is provided', () => {
//   range(0, 5).should.deep.equal([0, 1, 2, 3, 4, 5])
// })
test('should default to a step size of 1 if none is provided', () => {

})

// it ('should respect the step size', () => {
//   range(0, 10, 1).should.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//   range(0, 10, 2).should.deep.equal([0, 2, 4, 6, 8, 10])
//   range(0, 10, 3).should.deep.equal([0, 3, 6, 9])
//   range(0, 10, 4).should.deep.equal([0, 4, 8])
//   range(0, 10, 5).should.deep.equal([0, 5, 10])
//   range(0, 10, 6).should.deep.equal([0, 6])
//   range(0, 10, 7).should.deep.equal([0, 7])
//   range(0, 10, 8).should.deep.equal([0, 8])
//   range(0, 10, 9).should.deep.equal([0, 9])
//   range(0, 10, 10).should.deep.equal([0, 10])
// })
test('should respect the step size', () => {

})

// it ('should end in the end number, if possible', () => {
//   range(0, 5).should.deep.equal([0, 1, 2, 3, 4, 5])
// })
test('should end in the end number, if possible', () => {

})

// it ('should not spill over if the step is too high', () => {
//   range(0, 5, 6).should.deep.equal([0])
// })
test('should not spill over if the step is too high', () => {

})

// it ('should handle negative ranges', () => {
//   range(-10, -1, 1).should.deep.equal([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1])
//   range(-10, -1, 2).should.deep.equal([-10, -8, -6, -4, -2])
//   range(-10, -1, 3).should.deep.equal([-10, -7, -4, -1])
//   range(-10, -1, 4).should.deep.equal([-10, -6, -2])
//   range(-10, -1, 5).should.deep.equal([-10, -5])
//   range(-10, -1, 6).should.deep.equal([-10, -4])
//   range(-10, -1, 7).should.deep.equal([-10, -3])
//   range(-10, -1, 8).should.deep.equal([-10, -2])
//   range(-10, -1, 9).should.deep.equal([-10, -1])
//   range(-10, -1, 10).should.deep.equal([-10])
// })
test('should handle negative ranges', () => {

})

// it ('should handle ranges from negative to positive', () => {
//   range(-2, 2).should.deep.equal([-2, -1, 0, 1, 2])
// })
test('should handle ranges from negative to positive', () => {
  expect(range(-2, 2)).toEqual([-2, -1, 0, 1, 2])
})

// it ('should handle ranges from positive to negative', () => {
//   range(2, -2).should.deep.equal([2, 1, 0, -1, -2])
// })
test('should handle ranges from positive to negative', () => {

})

// it ('should return the value if start and end match', () => {
//   range(0, 0).should.deep.equal([0])
//   range(0, 0, 2).should.deep.equal([0])
//   range(0, 0, 3).should.deep.equal([0])
//   range(10, 10).should.deep.equal([10])
//   range(10, 10, 2).should.deep.equal([10])
//   range(10, 10, 3).should.deep.equal([10])
// })
test('should return the value if start and end match', () => {

})

// it ('should assume a start of 0 if only one arg is passed', () => {
//   range(5).should.deep.equal([0, 1, 2, 3, 4, 5])
//   range(-5).should.deep.equal([0, -1, -2, -3, -4, -5])
//   range(0).should.deep.equal([0])
// })
test('should assume a start of 0 if only one arg is passed', () => {

})
