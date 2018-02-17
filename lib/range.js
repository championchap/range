/**
 * Generates an array of integers from start to end, with an optional step
 * count.
 *
 * Example, for a range between 0 and 10:
 *   A step count of 2 would give us: [0, 2, 4, 6, 8, 10]
 *   A step count of 3 would give us: [0, 3, 6, 9]
 *
 * @param  {[int]} start - The number to start our range at.
 * @param  {[int]} end   - The number to end our range at.
 * @param  {[int]} step  - The step count
 * @return {[array]}     - An array of integers between start and end.
 */
const range = (start, end, step) =>
  [...Array(Math.max(start, end) - Math.min(start, end) + 1).keys()]
    .map(x => (start > end)
      ? Math.max(start, end) - x
      : Math.min(start, end) + x)
    .filter(x => Number.isInteger((x - start) / step))

module.exports = (start, end, step = 1) =>
  (end)
    ? range(start, end, step)
    : range(0, start, step)
