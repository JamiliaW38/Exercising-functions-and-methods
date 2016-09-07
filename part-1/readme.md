#Functions & Methods Exercises Part 1

## EXERCISES
"methodSyntax" and "maxSpeed" are given to you as examples on how to properly create methods. 

a method called "maxSpeed" returns a number: the gear multiplied by 15.
````
//given that myRide.gear = 1
myRide.maxSpeed(); // returns 15
````
-

* [ x] create a method called "howFast" which prints out the current gear value and the maxSpeed

````
//given that myRide.gear = 3 and maxSpeed functions properly.
myRide.howFast(); //"I am on gear 3 and I can go 45 miles per hour."
````

* [ x] create a method called "shiftUp" which increases the gear by 1, and prints out myCar's current gear

````
//given that myRide.gear = 1;
myRide.shiftUp(); //"Gear now at 2";
````

* [ x] create a method called "shiftDown" which decreases the gear by 1, and prints out myCar's current gear

````
//given that myRide.gear = 5;

myRide.shiftDown(); //"Gear now at 4"
````

* [ ] create a method called "carRemote" that changes myCar's "locked" value, and prints out if the car is locked or not.
	if locked is TRUE, change it to FALSE
	if locked is FALSE, change it to TRUE

````
//given that myRide.locked = true;

myRide.carRemote(); //"Car is unlocked"
myRide.carRemote(); //"Car is locked"
````

-

## EXTRA CREDIT :
modify the methods "shiftUp" and "shiftDown" to log "can't shift" if either is invoked and the gear value goes below 1 (for shiftDown) or above 6 (for shiftUp). These values are inclusive, and the modified method should not change the gear value.

Example:

````
myRide.gear = 1;
myRide.shiftDown(); // "Can't shift. Gear is still 1".

myRide.gear = 6;
myRide.shiftUp(); // "Can't shift. Gear is still 6".
````
