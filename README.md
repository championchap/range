# range.js

Generate an array of integers, inclusive of start and end values.

Be aware that this does not work with floats, and is rather slow.


## Instructions

Install

```sh
yarn install @erikwatson/range
```

Use it like this

```javascript
const range = require('@erikwatson/range')

range(start, end, step) // specify everything
range(start, end)       // same as range(start, end, 1)
range(end)              // same as range(0, end, 1)
```

If you specify only one argument, the function assumes that you want to start
from 0, and the first argument is then treated as an "end" instead of a
"start".

```javascript
range(5)        // [0, 1, 2, 3, 4, 5]
range(1, 5)     // [1, 2, 3, 4, 5]
range(-2, 2)    // [-2, -1, 0, 1, 2]
range(2, -2)    // [2, 1, 0, -1, -2]
range(0, 10, 2) // [0, 2, 4, 6, 8, 10]
range(0, 10, 3) // [0, 3, 6, 9]
range(10, 10)   // [10]
```

## Tests

We use Jest for testing, it's installed locally but we have a test and watch command set up.

```sh
yarn test
yarn watch
```

## Who wrote it

  + [Erik Watson](http://erikwatson.me)
