// Frequency Count: Count the frequency of elements in an array or characters in a string.

function frequencyCount (data) {
    if (data) {
        let countOfData = {};
    
        for (let i of data) {
            if (Object.hasOwn(countOfData, i)) {
                countOfData[i] += 1
            } else {
                countOfData[i] = 1
            }
        }
        return countOfData
    }
    return new Error("Please provide string or array to count its frequency!")
    
}

const arr = [1,2,2,3,3]
console.log(frequencyCount(arr))
console.log(frequencyCount("testest"))