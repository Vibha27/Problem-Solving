/**
 * A video player plays a game in which the character competes in a hurdle race. 
 * Hurdles are of varying heights, and the characters have a maximum height they can jump. 
 * There is a magic potion they can take that will increase their maximum jump height by  unit for each dose. 
 * How many doses of the potion must the character take to be able to jump all of the hurdles. 
 * If the character can already clear all of the hurdles, return .
 * Example: The character can jump  unit high initially and must take  doses of potion to be able to jump all of the hurdles.
 * @param {*} k integer
 * @param {*} height array
 * @returns 
 */
function hurdleRace(k, height) {
    // Write your code here
    let potion = 0

    height.sort((a,b) => b-a)

    if (height[0] > k) {
        potion = Math.abs(height[0] - k)
    }
    
    return potion

}

const k = 4
const height = [1,6,3,5,2]
console.log(hurdleRace(k, height))