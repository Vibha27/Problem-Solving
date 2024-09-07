/*
 * Complete the 'maxCost' function below.
 * Return max cost from each day cost of laptop manufacturing 
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. STRING_ARRAY labels
 *  3. INTEGER dailyCount
 */

function maxCost(cost, labels, dailyCount) {
    // Write your code here
    let maxValue = 0;
    let legalCount = 0;
    let sum = 0;
    
    for (let i = 0; i < cost.length; i++) {
        sum += cost[i]
        if (labels[i] === "legal") {
            legalCount += 1
        }
        if (legalCount === dailyCount && sum >= maxValue) {
            maxValue = sum
            sum = 0;
            legalCount = 0;
        }
    }
    return maxValue;

}

const cost = [0,3,2,3,4]
const labels = ["legal","legal","illegal","legal","legal"]
const dailyCount = 1

console.log(maxCost(cost, labels, dailyCount))
