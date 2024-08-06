/**
 * move all zero to end of array by using two pointers. 
 * if start elements is zero than swap with end element and decrement end index
 */
function moveAllZerosToEnd() {
    let arr = [1,0,2,3,2,0,0,4,5,1];

    if (arr.length <= 1) {
        return arr
    } else {
        let j = arr.length-1;
        for(let i=0; i<=j; i++) {
            if(arr[i] === 0) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                j--;
            }
        }
    }
    return arr

}

console.log(moveAllZerosToEnd())