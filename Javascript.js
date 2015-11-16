/**var x = 3;
var y = 2;
var total = x + y;
document.write("The result of your addition is " + total + "<br>");

var x2 = parseInt(prompt("Enter a number"));
var y2 = parseInt(prompt("Enter a second number"));
var total2 = x2+y2;
document.write(x2 + " plus " + y2 + " equals " + total2);

var a = [1,2,3,4,5,6,7,8,9];
document.write("<br>" + "the returned value is: " + a.splice(4) + "<br>");
document.write("the new array is: " + a + "<br>");
document.write("the returned value is: " + a.splice(1,2) + "<br>");
document.write("the new array is: " + a + "<br>");
document.write("the returned value is: " + a.splice(4) + "<br>");
document.write("the new array is: " + a + "<br>");

var colors = ['blue', 'green', 'orange', 'red'];
var colorsList = colors.length;
var counter = 0;
while (counter < colorsList) {
	document.write(colors[counter] + "<br>");
	counter++;
}

document.getElementById("text").innerHTML = colorsList;

var task = new Object();
task.name= "go to the bitch";
task.priority="important";
task.description="Have fun";**/

function Task (name, priority, description){
	//add properties
	this.name=name;
	this.priority=priority;
	this.description=description;

	//add functions
	this.showit=function(){
		msg="TASK NAME: " + this.name + "<br>";
		msg+= "TASK PRIORITY: " + this.priority + "<br>";
		msg+= "TASK DESCRIPTION: " + this.description + "<br>";
		document.getElementById("task-list").innerHTML += msg;
	}
}

var tasks=new Array();
tasks.push(new Task('go shopping', 'Medium', 'need to buy groceries and office supplies'));
tasks.push(new Task('do homework', 'High', 'work on css positioning'));
tasks.push(new Task('have fun', 'High', 'play videogames'));

console.log(tasks[1]);
console.log(tasks);
console.log(tasks.length);


for (i = 0; i < tasks.length; i++){
	tasks[i].showit();
}