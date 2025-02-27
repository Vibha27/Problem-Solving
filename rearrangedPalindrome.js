// A palindrome reads the same forward and backward.
// If the length of the string is even, all characters must appear an even number of times.
// If the length is odd, at most one character can appear an odd number of times.

function rearrangedPalindrome (str) {
    let counts = new Map();

    for (let char of str) {
        counts.set(char, (counts.get(char) || 0) + 1)
    }

    let oddCount = 0;

    for (let count of counts.values()) {
        if (count % 2 !== 0) oddCount += 1
        if (oddCount > 1) return false
    }

    return true
}

const str = "ddammaaa";
console.log(rearrangedPalindrome(str))