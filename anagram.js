function isAnagram(str1 = "", str2 = "") {
  if (str1.length !== str2.length) return false;
  // return str1.split('').sort().join() === str2.split("").sort().join() => approach 1

  //   approach 2 using obj
  let result = {};

  for (let i of str1) {
    if (Object.hasOwn(result, i)) {
      result[i] += 1;
    } else {
      result[i] = 1;
    }
  }

  for (let i of str2) {
    if (Object.hasOwn(result, i)) {
      result[i] -= 1;
      if (result[i] === 0) delete result[i];
    } else {
      return false;
    }
  }

  return Object.keys(result).length === 0;
}

const str1 = "vibha";
const str2 = "abhiv";
console.log(isAnagram(str1, str2));
