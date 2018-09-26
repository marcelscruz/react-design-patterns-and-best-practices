// HoF
const add = (x, y) => x + y

const log = func => (...args) => {
  console.log(...args)
  return func(...args)
}

const logAdd = log(add)

logAdd(2 + 3)

// ------------------------------ //
// Immutability

const add3 = arr => arr.push(3)
const myArr = [1, 2]
add3(myArr) // [1, 2, 3]
add3(myArr) // [1, 2, 3, 3]

// ------------------------------ //
// Currying

// const add = (x, y) => x + y
const add = x => y => x + y

const add1 = add(1)
add1(2) // 3
add1(3) // 4

// ------------------------------ //
// Composition

const add = (x, y) => x + y
const square = x => x * x

const addAndSquare = (x, y) => square(add(x, y))
