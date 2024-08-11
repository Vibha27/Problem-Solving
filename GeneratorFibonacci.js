// 0 1 1 2 3 5...
function* fibonacci () {
    let curr = 0;
    let next = 1;

    while (true) {
        yield curr;
        [curr, next] = [next, curr+next]
    }
}

const generateFibonacci = fibonacci()

for (let i = 0; i < 10; i++) {
    console.log(generateFibonacci.next().value)
}