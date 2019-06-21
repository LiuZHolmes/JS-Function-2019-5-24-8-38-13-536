function reverseString(message){
	// wirte your code here
	let ans = message.split("");
	for (let i = 0;i < message.length; i++) {
		ans[i] = message.charAt(message.length - 1 - i);
	}
	return ans.join("");
}
function palindrome(message){
	// wirte your code here
	if (reverseString(message) == message) {
		return true;
	}
	else return false;
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true