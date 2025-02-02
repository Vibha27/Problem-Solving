// Output below
// 5 4 3 2 1 
// 5 4 3 2 
// 5 4 3 
// 5 4 
// 5 

for (let i=0; i<5; i++) {
	let row = '';
	for (let j=5; j>i; j--) {
		row += j + " ";
	}
	console.log(row)
}

