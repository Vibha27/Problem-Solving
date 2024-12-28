/* 
 * Currying is defined as changing a function having multiple arguments 
 * into a sequence of functions with a single argument.
 * functions that translate a function from callable as add(1, 2, 3) into callable as add(1)(2)(3)
*/
function sum (num1) {
    return (num2) => {
        return (num3) => {
            return num1+num2+num3
        }
    }
}

console.log(sum(2)(4)(5))
console.log(sum(2)(4)(5))

function add (a) {
    return function (b) {
        return a+b
    }
}

console.log(add(2)(5))

function evaluate (operation) {
    return function (a) {
        return function (b) {
            if (operation === "mul") return a*b;
            else if (operation === "add") return a+b;
            else if (operation === "sub") return a-b;
            else if (operation === "divide") return a/b;
            else return "Invalid"
        }
    }
}

console.log(evaluate("add")(5)(6))

// infinite currying addInfinite(2)(3)(6)() => cars24 question

function addInfinite (a) {
    return function (b) {
        if (b) return addInfinite(a+b)
        return a
    }
}
console.log(addInfinite(2)(3)(6)())

// partial application
function partialAdd (a) {
    return function (b,c) {
        return a+b+c
    }
}
console.log(partialAdd(4)(8,9))

// convert normal function to curried function
function curry(func) {

}
const addFunction = (a,b,c,d) => a+b+c+d
const curriedFunc = curry(addFunction)

// currying function accept any no. of args with different combination => Myntra question
function curry(fn) {
    // your code here
    const recursiveFn = (...args) => {
      if (args.length >= fn.length) return fn(...args)
    //   return recursiveFn.bind(this, ...args)
      return (...args2) => recursiveFn(...args, ...args2)
    }
    return recursiveFn
  }
  
  const join = (a, b, c) => {
     return `${a}_${b}_${c}`
  }
  const curriedJoin = curry(join)
  console.log(curriedJoin(1, 2, 3)) // '1_2_3'
  console.log(curriedJoin(1)(2, 3)) // '1_2_3'
  console.log(curriedJoin(1, 2)(3)) // '1_2_3'
  
