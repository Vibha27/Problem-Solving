/**
 * 2nd array should contain square of 1st elements array with same frequency.
 * map1, map2 stores arr1, arr2 value as key with its frequency count as value.
 * Loop through map1 and check if square of map1 key is present in map2 ?
 * OR if present then map1's key's value is not same as map2 key's value (basically we are checking frequency here)
 * then return false else true
 */
function arraySquaredValue(arr1, arr2) {
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;

    let map1 = {};
    let map2 = {}

    if(arr1Length !== arr2Length) return false

    for(let i of arr1) {
        map1[i] = (map1[i] || 0) + 1
    }

    for(let i of arr2) {
        map2[i] = (map2[i] || 0) + 1
    }

    for(let i in map1) {
        if(!map2[i*i] || (map1[i] !== map2[i*i])) return false
    }

    return true
}

console.log("[1,2,3],[1,4,9] =>",arraySquaredValue([1,2,3],[1,4,9]))
console.log("[1,2,3],[1,4,8] =>",arraySquaredValue([1,2,3],[1,4,8]))
console.log("[1,2,3],[1,4,4] =>",arraySquaredValue([1,2,3],[1,4,4]))