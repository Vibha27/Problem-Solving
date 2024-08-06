// 1) using inbuilt method concat and sort
function mergeSortedArray1 (arr1, arr2) {
    let mergedArr = arr1.concat(arr2);

    return mergedArr.sort((num1,num2) => num1 - num2)
}

// 2) using merge sort algorithm
function mergeSortedArray2 (arr1, arr2) {
    let mergedArr = [];
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    let i = 0 , j = 0;

    // loop until i & j are less then arr1Len & arr2Len
    while (i < arr1Len && j < arr2Len) { // 1 < 3 && 0 < 3
        if (arr1[i] < arr2[j]) { // 5 < 6
            mergedArr.push(arr1[i]) // [1,2,3,4,5]
            i++; // i = 3
        } else { // 4 > 3
            mergedArr.push(arr2[j]) // [1,2,3]
            j++; // j = 2
        }
    }

    while (i < arr1Len) { // copying remaining element from arr1
        mergedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2Len) { // copying remaining element from arr2
        mergedArr.push(arr2[j]);
        j++;
    }
    
    return mergedArr
}

const arr2 = [1,4,5]
const arr1 = [2,3,6,7,8,9]

console.log(mergeSortedArray1(arr1, arr2))
console.log(mergeSortedArray2(arr1, arr2))