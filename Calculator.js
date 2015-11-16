alert('hello');

var firstNumber = 0;
var secondNumber = 0;
var operator = "";
var result = "";
var content = "";

var ops = ['addition','subtract','multiply','divide'];
var nums = ['num0','num1','num2','num3','num4','num5','num6','num7','num8','num9'];

//Get element where we want to display the results of operations
function display(content) {
	document.getElementById('screen').innerHTML = content;
}

//add an onclick event to all the number keys by using a loop and display the keys pressed
for (i=0;i<nums.length;i++) {
	document.getElementById(nums[i]).onclick = function() {
		content += this.textContent;
		firstNumber = content;
		display(content);
		//console.log(content);
	}
}

//concatenate operator to firstNumber and save it in firstNumber 
for (i=0;i<ops.length;i++) {
	document.getElementById(ops[i]).onclick = function() {
		content += this.textContent;
		display(content);
		secondNumber = firstNumber;
		firstNumber = 0;
	}
}

//after the loops have been run as many times as needed for the complete expression, evaluate it and display it
document.getElementById('equals').onclick = function() {
	result = eval(firstNumber);
	display(result);
}

//if clear button is pressed then reset eveything
document.getElementById('clear').onclick = function() {
	content = "";
	display(content);
	firstNumber = 0;
	secondNumber = 0;
	operator = "";
}


