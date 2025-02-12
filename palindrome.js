function isPalindrome (string) {
    let end = string.length-1;
    for (let start = 0; start <= end; start++) {
        if (string[start] == string[end]) end --
        else return false
    }
    return true
}

const str = "malayalam"
console.log(isPalindrome(str))

function isPalindrome1 (string) {
    return string.split("").reverse().join("") === string
}

const str1 = "malayalam"
console.log(isPalindrome(str1))
