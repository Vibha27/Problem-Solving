/**
 * A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. 
 * Given price lists for keyboards and USB drives and a budget, find the cost to buy them. 
 * If it is not possible to buy both items, return -1.
 * Example
 * The person can buy a , or a . Choose the latter as the more expensive option and return.
 * @param {*} keyboards array
 * @param {*} drives array
 * @param {*} b integer
 * @returns 
 */
function getMoneySpent(keyboards, drives, b) {
    let maxAmt = -1;
    let sum = 0;
    let i = 0, j = 0;
    
    keyboards.sort((a,b) => a-b) // O(n log n)
    drives.sort((a,b) => b-a) // O(m log m)
    
    while (i < keyboards.length && j < drives.length) { // O(m+n)
        
        sum = keyboards[i] + drives[j];
        
        if (sum <= b) {
            maxAmt = Math.max(sum,maxAmt);
            i++; // keyboard pointer is incremented to try a expensive keyboard from the sorted list.
        } else {
            j++; // drive pointer is incremented to try a cheaper drive from the sorted list.
        }
        
    }
    
    return maxAmt

}

const keyboards = [3,1];
const drives = [5,2,8];
const b = 10;
console.log(getMoneySpent(keyboards, drives, b)) // O(n log n + m log m)