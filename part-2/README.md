#Functions & Methods Exercises Part 2

##Coding Boxes

Two "box" object variables have been instantiated for you, creatively named, `boxOne` and `boxTwo`. 

**The objects were created to have random properties.**
Outside of creating methods for these box objects, do not change any of the properties assigned to it. 

Note : Methods are function properties of objects.

Function : 
````
var myObj = {
	greeting : "Hello",
}

function greet (){
	console.log(myObj.greeting);
}
````

Method :
````
var myObj = {
	greeting : "Hello",

	greet : function(){
		console.log(greeting);
	}
}
````
###Creating methods

* [ ] Create a method "paint" that takes a string argument and assigns it to the color property 

* [ ] Create a method "getVolume" that calculates and returns the volume of an object. Not sure how to calculate the volume of a box (cube)? Look it up here : http://bit.ly/2cgU690

###Creating Functions

* [ ] create a function "compareVolumes" that takes two box objects as arguments, and logs the larger box.

* [ ] create a function "heavierBox" that takes two box objects as arguments, and returns the heavier box. If they weigh the same, `return` the string "They weigh the same".

* [ ] create a function named "addItem" that takes a string argument, adds it to the box's "contents" array, and logs the updated contents of the box.

##EXTRA CREDIT
*[ ] create a function named "dump" that takes two box objects as arguments, and transfers all the contents of the box with less contents into the other box's contents.

*[ ] create a function named "smash" that takes a box object as an argument, and reduces its length, width, height, and mass by a valid random amount (a dimension cannot be < 0). 
 