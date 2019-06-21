function reverseString(message){
	// wirte your code here
	let ans = message.split("");
	for (let i = 0;i < message.length; i++) {
		ans[i] = message.charAt(message.length - 1 - i);
	}
	return ans.join("");
}
console.log(reverseString('hello')); // should return 'olleh'