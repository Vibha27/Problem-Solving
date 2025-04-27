// closure concept
// asked in microsoft, google, meta, phonepe - by namaste dev
function makeCounter(initialValue = 0) {
    
  let count = initialValue;
  
  const increment = () => {
    return ++count
  }

  const decrement = () => {
    return --count
  }

  const reset = () => {
    count = initialValue;
    return count
  }

  return {
    increment,
    decrement,
    reset
  }
}

const counter = makeCounter(5);
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())