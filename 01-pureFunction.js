let value = 0

// impure function
const impureInc = () => ++value

// pure function with closure
const pureFunction = num => () => ++num
// function pureFunction (num) {
//   return function () {
//     debugger
//     return ++num
//   }
// }


const inc = pureFunction(value)
inc()