/**
 * The memoize function creates a cache object and returns an anonymous function that acts as 
 the memoized version of the original function. Inside the anonymous function, 
 we first generate a unique key by stringifying the input arguments using JSON.stringify. 
 We then check if the result for the given key exists in the cache. 
 If it does, we return the cached result. Otherwise, we invoke the 
original function using func.apply(this, args) to preserve the correct context and pass the arguments. 
We store the result in the cache and return it.
 *  */
function memoizeFn(fn) {
  let cacheData = {};
  return (...args) => {
    let key = JSON.stringify(args);

    if (key in cacheData) {
      return cacheData[key];
    } else {
      cacheData[key] = fn.apply(this, args);
      return cacheData[key];
    }
  };
}

function add(num1, num2) {
  return num1 + num2;
}

const result = memoizeFn(add);
console.log(result(2, 3));
console.log(result(2, 3));


// with resolver function that accepts function to be run on args to specify how key should be created
function memo(func, resolver = (...args) => args.join("_")) {
  // your code here
  let cache = {};

  return function (...args) {
    let str_args = resolver(...args);
    if (str_args in cache) {
      return cache[str_args];
    } else {
      cache[str_args] = func.apply(this, args);
      return cache[str_args];
    }
  };
}

const func = (arg1, arg2) => {
  return arg1 + arg2;
};
const memoed = memo(func);
console.log(memoed(1, 2));
// 3, func is called
console.log(memoed(1, 2));
// 3 is returned right away without calling func
console.log(memoed(1, 3));
// 4, new arguments, so func is called
