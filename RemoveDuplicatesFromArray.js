// 1) using set object which will remove duplicates
function removeDuplicates1(arr) {
  return [...new Set(arr)];
}

// 2) using for loop and unique array variable
function removeDuplicates2(arr) {
  let uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) uniqueArr.push(arr[i]) 
  }

  return uniqueArr
}

const arr = [2, 2, 4, 6];
console.log(removeDuplicates1(arr));
console.log(removeDuplicates2(arr));
