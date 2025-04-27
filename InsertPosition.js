/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = nums.findIndex(num => num === target);
    if (index < 0) {
        let len = nums.length;
        if (target >= nums[len-1]) index = len
        else {
            for (let i=0; i<len; i++) {
                if (nums[i] >= target) {
                    index = i;
                    break;
                }
            }
        }
    }
    return index
};

const nums = [1,3,5,6];
const target = 7;

console.log(searchInsert(nums, target))