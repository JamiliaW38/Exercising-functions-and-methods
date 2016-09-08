var Colors = ["blue", "green", "purple", "red"];
function newBox() {
	var box = {
		length: Math.floor(Math.random() * 10) + 1,
		width: Math.floor(Math.random() * 20) + 1,
		height: Math.floor(Math.random() * 5) + 1,
		color: Colors[Math.floor(Math.random() * Colors.length)],
		grams: Math.floor(Math.random() * 40) + 1,
		contents: [],

		//YOUR METHODS BELOW

	paint : function (){ 
		paint.Colors='paint'

	}, 

	getVolume: function (){

		var cube = box.height * box.length * box.width
		return cube;

	},   
	
	
}
return box;	
	
}

	
		
var boxOne = newBox();
console.log(boxOne);
boxOne.getVolume(3,3,3);
var boxTwo = newBox();
newBox()
 // return box
var compareVolume = function (bx1, bx2){
	if (boxOne.getVolume > boxTwo.getVolume) {
		console.log ("boxOne is bigger")
	
		}else{ 
		console.log("boxTwo is bigger");
		}
}
compareVolume(boxOne,boxTwo);

