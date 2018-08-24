// Javascript Homework
// Due Monday COB
// Put all homework in:
// github classroom created for you
// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------

// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.
fibonacci = (n) => {
	let a = 1,
		b = 0,
		c;

	while (n >= 0) {
		c = a;
		a = a + b;
		b = c;
		n--;
	}
	return b;
};

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
let numArray = [100, 45, 2, 30, 87, 22];
bubbleSort = (numArray) => {
	let i, j, lim;
	lim = numArray.length;
	while (lim--) {
		for (i = 0, j = 1; i < lim; i++, j++) {
			if (numArray[i] > numArray[j]) {
				temp = numArray[i];
				numArray[i] = numArray[j];
				numArray[j] = temp;
			}
		}
	}
	return numArray;
};
console.log(bubbleSort(numArray));
// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
reverseString = (str) => {
	return str
		.split('')
		.reverse()
		.join('');
};

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
factorial = (someNum) => {
	if (someNum === 0) {
		return 1;
	}
	return someNum * factorial(someNum - 1);
};
// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

isEven = (someNum) => {
	let test = Math.floor(someNum / 2);
	if (someNum === test * 2) {
		return true;
	} else {
		return false;
	}
};

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
isPalindrome = (someStr) => {
	if (
		someStr
			.split('')
			.reverse()
			.join('') === someStr
	) {
		return true;
	} else {
		return false;
	}
};

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
let someObj = {
	beer: 'Yuengling',
	abv: 4.5,
	desc: 'lager'
};
traverseObject = (someObj) => {
	Object.keys(someObj).forEach((key) => {
		console.log(key, someObj[key]);
	});
};

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
spliceElement = (someArr) => {
	someArr = ['Coke', 'Sprite', 'Water', 'Root Beer', 'Dr. Pepper'];
	console.log(someArr.length);
	delete someArr[3];
	console.log(someArr.length);
};
console.log(spliceElement());

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
spliceElement = (someArr) => {
	someArr = ['Coke', 'Sprite', 'Water', 'Root Beer', 'Dr. Pepper'];
	let spliced = someArr.splice(2, 1);
	console.log(someArr.length);
	console.log(spliced.length);
	console.log(someArr);
};
console.log(spliceElement());

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
function Person(name, age) {
	this.name = name;
	this.age = age;
}
let john = new Person('John', 30);
console.log(john);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
getPerson = (name, age) => {
	return { name: name, age: age };
};
let john = getPerson('John', 30);
// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// // 1. USA
// // Define function getUSA()
// // Find the html element that contains "USA".
// // Print that element's contents.
// function getUSA() {
// 	let usa = document.getElementsByTagName('span');
// 	usa.innerHtml
// }
// // 2. Sales
// // Define function getPeopleInSales()
// // Print the names of all the people in the sales department.
// function getPeopleInSales() {
// 	let salesPeople =
// }
// // 3. Click Here
// // Define function getAnchorChildren()
// // Find all anchor elements with a <span> child.
// // Print the contents of <span>
// function getAnchorChildren() {
// 	let anchor = document.getElementsByTagName('a')
// 	console.log(anchor.outerText)
// }
// // 4. Hobbies
// // Define function getHobbies()
// // Find all checked options in the 'skills' select element.
// // Print the value and the contents.
// function getHobbies() {

// }
// // 5. Custom Attribute
// // Define function getCustomAttribute()
// // Find all elements with "data-customAttr" attribute
// // Print the value of the attribute.
// // Print the element that has the attribute.

// // 6. Sum Event
// // NOTE: Write unobtrusive Javascript
// // Regarding these elements:
// // 	<input id="num1" class="nums" type="text"/>
// // 	<input id="num2" class="nums" type="text"/>
// // 	<h3>Sum: <span id="sum"></span></h3>

// // Define onchange event handler.
// // Add <input> element values.
// // Put the sum in the <span> element.
// // If values cannot be added, put "Cannot add" in the <span> element

// // 7. Skills Event
// // NOTE: Write unobtrusive Javascript
// // When user selects a skill, create an alert with a message similar to:
// // 	"Are you sure CSS is one of your skills?"
// // NOTE: no alert should appear when user deselects a skill.

// // 8. Favorite Color Event
// // NOTE: Write unobtrusive Javascript
// // NOTE: This is regarding the favoriteColor radio buttons.
// // When a user selects a color, create an alert with a message similar to:
// // 	"So you like green more than blue now?"
// // In this example, green is the new value and blue is the old value.
// // Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

// // 9. Show/Hide Event
// // NOTE: Write unobtrusive Javascript
// // When user hovers over an employees name:
// // 	Hide the name if shown.
// // 	Show the name if hidden.

// // 10. Current Time
// // Regarding this element:
// // 	<h5 id="currentTime"></h5>
// // Show the current time in this element in this format: 9:05:23 AM
// // The time should be accurate to the second without having to reload the page.

// // 11. Delay
// // Regarding this element:
// // 	<p id="helloWorld">Hello, World!</p>
// // Three seconds after a user clicks on this element, change the text to a random color.
// function randomColor() {
// 	setTimeout(function(){
// 		document.getElementById('helloWorld').style.color = randomColors();
// 	 }, 3000);
// }

// function randomColors() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }
// // 12. Walk the DOM
// // Define function walkTheDOM(node, func)
// // This function should traverse every node in the DOM. Use recursion.
// // On each node, call func(node).
