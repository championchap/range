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
