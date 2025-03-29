// Decode string by following below steps
// Get str mid position
// First half chars will be placed at odd index and remaining at even index
// Return decoded new string 

function decodeString (str) {
    let strArr = str.split("");
    let mid = Math.ceil(strArr.length/2)
    let firstHalf = strArr.slice(0,mid);
    let secondHalf = strArr.slice(mid);
    let firstIndex=0, secondIndex=0; 

    for (let i=0; i<strArr.length; i++) {
        if ((i+1)%2 === 0) {
            strArr[i] = secondHalf[secondIndex++]
        } else {
            strArr[i] = firstHalf[firstIndex++]
        }
    }
    
    return strArr.join("")
}

console.log(decodeString("dslcoeet"))