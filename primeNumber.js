function isPrimeNumber (num) {
    if (num <= 1) return false 

    let sqrt = Math.floor(Math.sqrt(num));

    for ( let i = 2; i <= sqrt; i++) { // 0 1 are not prime number hence start from 2 and loop till its sqrt only
        if (num % i === 0) { // if num is divisible by any of the i then it is not a prime number
            return false
        }
    }

    return true;

}

function primeNumberInRange (start, end) {
    let primeNumbers = []

    if (start > end) return primeNumbers // if end is greater then it is not a valid range

    for ( let i = start; i <= end; i++) { // loop till end range number
        
        let sqrt = Math.floor(Math.sqrt(i)); // loop inner loop till sqrt of i
        let isPrime = i === 0 || i === 1 ? false : true; // 0 and 1 are not prime number

        for ( let j = 2; j <= sqrt; j++ ) { // start loop from 2 and go till i sqrt
            if (i % j === 0) { // if i is divivsible be any j then set flag as false and break loop
                isPrime = false;
                break;
            }
        }

        if (isPrime) { // if flag is not updated then append i in arr
            primeNumbers.push(i)
        }

    }

    return primeNumbers;

}

console.log(isPrimeNumber(19))
console.log(primeNumberInRange(1,10))