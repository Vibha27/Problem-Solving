function shuffle(arr) {
  // modify the arr inline to change the order randomly
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const arr = [1, 2, 3, 4];
shuffle(arr);
