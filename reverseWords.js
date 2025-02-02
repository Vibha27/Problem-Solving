function reverseWordsUsingBuiltIn (sentence='') {
    return sentence.split(" ").reverse().join(" ")
}

function reverseWords (sentence='') {
    let reversedSent = '';
    let word = '';

    for (let char of sentence) {
        if (char !== " ") {
            word += char
        } else {
            reversedSent = word + " " + reversedSent;
            word = ''
        }
    }

    reversedSent = word + " " + reversedSent;

    return reversedSent
}

const str = "Vibha is Software Engineer"
console.log(reverseWordsUsingBuiltIn(str))
console.log(reverseWords(str))