function longestWord (str='') {
    let longest = '';
    let wordsArr = str.split(" ");

    for (let word of wordsArr) {
        if (longest.length < word.length) 
            longest = word
    }

    return longest

}

const str = "Vibha Singh is a Software Engineer!";

console.log(longestWord(str))