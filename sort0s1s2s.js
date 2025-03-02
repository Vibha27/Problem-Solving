// Approach 1 - two pass
// 1. keep count of each number in seperate varibales
// 2. then iterate on arr till each count becomes 0 and add 0,1,2 respectively in consecutive manner.
function sort0s1s2s (arr) {
    let count0 = 0, count1=0, count2=0;
    let index=0;

    for (let i of arr) {
        if (i === 0) count0 += 1;
        else if (i===1) count1 += 1;
        else count2 += 1;
    }

    while (count0 > 0) {
        arr[index++] = 0;
        count0--;
    }

    while (count1 > 0) {
        arr[index++] = 1;
        count1--;
    }

    while (count2 > 0) {
        arr[index++] = 2;
        count2--;
    }

    return arr
}

const arr = [2,1,1,0,2,0];
console.log(sort0s1s2s(arr))
