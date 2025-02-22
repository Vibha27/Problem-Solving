
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesLen = apples.length;
    let orangesLen = oranges.length;
    
    let appleCount = 0;
    let orangeCount = 0;
    
    for (let i=0; i<applesLen; i++) {
        let distance = apples[i] + a
        if (distance >= s && distance <= t) {
            appleCount += 1;
        }
    }
    for (let i=0; i<orangesLen; i++) {
        let distance = oranges[i] + b;
        if (distance >= s && distance <= t) {
            orangeCount += 1;
        }
    }
    
    console.log(appleCount);
    console.log(orangeCount);
    
}

countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4])