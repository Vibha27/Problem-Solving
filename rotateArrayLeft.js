function rotateArrayLeft(a, d) {
    let end = a.length;
    
    while (d) {
      let first = a[0];
      for (let i=1; i<end-1; i++) {
        [a[i-1], a[i]] = [a[i], a[i+1]]
      }
      a[end-1] = first;
      d--;
    }

    return a
}

const arr = [1,2,3,4,5]
console.log(rotateArrayLeft(arr, 4))