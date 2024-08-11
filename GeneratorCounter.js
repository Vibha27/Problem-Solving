// Explain generators and write a Counter that generates 100 numbers when calling the .next method
/**
 * A generator function is defined using the function* syntax. When called, it doesn't execute its code immediately. 
 * Instead, it returns a generator object, which can be used to control the execution of the function.
 * Normal function computes all at once and storing them in memory.
 * Normal function returns a single value or nothing. 
 * Generator function returns an iterator object that produces a series of values when iterated over.
 * generator functions use yield to produce values one at a time. 
 * Each yield pauses the function and returns the yielded value to the caller.
 * generator functions offer more control over the execution flow, 
 * which can be beneficial in situations involving large datasets, asynchronous operations, or complex state management.
 */
function* counter() {
    let num = 1;

    while (true) { // run infinately means generator can keep producing values forever if needed.
        yield num++; // return num and increment num
    }

}

const generateCount = counter();
for (let i = 0; i < 100; i++) {
    console.log(generateCount.next().value)
}