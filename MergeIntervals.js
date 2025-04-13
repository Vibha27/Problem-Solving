/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    if (intervals.length <= 1) return intervals

    intervals.sort((a,b) => a[0] - b[0]);

    let firstInterval = intervals[0];
    let results = [];

    for (let i=1; i<intervals.length; i++) {
        if (firstInterval[1] >= intervals[i][0]) {
            firstInterval[1] = Math.max(firstInterval[1], intervals[i][1]);
        } else {
            results.push(firstInterval);
            firstInterval = intervals[i];
        }
    }
    
    if (firstInterval) results.push(firstInterval);


    return results
    
};

const intervals = [[1,3],[2,6],[8,10],[15,18]];
// const intervals = [[1,4],[4,5]]
console.log(merge(intervals))