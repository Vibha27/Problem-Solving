{/**
    Input: rungs = [1,3,5,10], dist = 2
Output: 2
Explanation:
You currently cannot reach the last rung.
Add rungs at heights 7 and 8 to climb this ladder. 
The ladder will now have rungs at [1,3,5,7,8,10].
 */}
 
var addRungs = function (rungs, dist) {
    let rungsLen = rungs.length;
    let minRungs = 0;

    if (rungsLen) {
        if (rungs[0] > dist) {
            minRungs += Math.floor((rungs[0] - 1) / dist)
        }
        for (let i = 1; i < rungsLen; i++) {
            let twoLadder = rungs[i] - rungs[i - 1];
            if (twoLadder > dist) {
                minRungs += Math.floor((twoLadder - 1) / dist)
            }
        }

    }

    return minRungs
};

const arr = [1,3,5,10];
console.log(addRungs(arr,2))