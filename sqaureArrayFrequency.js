// Create a function which will accepts two arrays arr1 and
// arr2. The function should return true if every value in arr1
// has its corresponding value squared in array2. The
// frequency of values must be same.(Effecient)

// Inputs and outputs:
// =============
// [1,2,3],[4,19] =
// [1,2,3],[19] ==
// [1,2,1],[4,4,1] ===> false (must be same frequency)

function sqaureArrayFrequency (arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let freq1 = {};
    let freq2 = {};

    for (let i of arr1) {
        freq1[i] = (freq1[i] + 1) || 1
    }

    for (let i of arr2) {
        freq2[i] = (freq2[i] + 1) || 1
    }

    console.log(freq1, freq2)

    for(let i of arr1) {
        if (freq1[i] !== freq2[i*i]) return false
        if (!Object.hasOwn(freq2, i*i)) return false
    }

    return true

}

const arr1 = [1,2, 2,3,4]
const arr2 = [1,4,4,9,16]
console.log(sqaureArrayFrequency(arr1, arr2))