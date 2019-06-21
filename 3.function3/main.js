function alphabetSort(message){
	// wirte your code here
	let ans = message.split("");
	return ans.sort().join("");
}
console.log(alphabetSort('hello')); // should return 'ehllo'