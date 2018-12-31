let number = 1532;
function digitReverse(d) {
	// coerse digit to string
	var strD = d.toString();
	//split string
	var arrStr = strD.split("");
	//reverse an array
	var revArrStr = arrStr.reverse();
	//Concat an array to string
	joinArr = revArrStr.join("");
	// string to number
	return parseInt(joinArr);

};

console.log(digitReverse(number));

function reverseNumber(n) {
	return parseInt(n.toString().split("").reverse().join(""))
};

console.log(reverseNumber(number));