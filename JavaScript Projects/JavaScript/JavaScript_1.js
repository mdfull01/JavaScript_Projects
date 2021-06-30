function animal_function() { //declare animal_function
    var animal_output; //declare animal_output
    var animal = document.getElementById("animal_input").value; //declare animal, set value to user input animal_input 
    var animal_string = " are the best animals!"; //declare animal string, value as end of output sentence
    switch(animal) { //switch statement using the animal variable value
        case "Dog": //cases for each input option
            animal_output = "Dogs" + animal_string; //gives value for animal_output for each input option and animal_string
        break; //exit the switch statement if condition has been met
        case "Cat":
            animal_output = "Cats" + animal_string;
        break;
        case "Cow":
            animal_output = "Cows" + animal_string;
        break;
        case "Lion":
            animal_output = "Lions" + animal_string;
        break;
        case "Bear":
            animal_output = "Bears" + animal_string;
        break;
        default: //if no case conditions are met set this string as animal output
            animal_output = "Please enter an animal exactly as it is written on the list above.";
    }
    document.getElementById("output").innerHTML = animal_output; //find element id = output and replace contents with animal_output value
}

function change_function() { //declare change_function
    var A = document.getElementsByClassName("click"); //declare A initiate the value as element class name click (becomes an array with all elements in class click)
    A[0].innerHTML = "The text has changed!"; //find element in A index 0 and replace contents with string
}

var c = document.getElementById("canvas1"); //declare c set value to element id = canvas1
var ctx = c.getContext("2d"); //declare ctx set value to c value calls method getContext argument 2d to return 2d drawing context on the canvas canvas1
ctx.font = "30px Arial"; //create ctx font attribute, set its value as 30px Arial
ctx.strokeText("I am a canvas", 150, 125); //calls strokeText method from canvas 2D API (ctx value contains call for getContex(2d) method already) designates string for strokeText and starting x,y coordinates

var grd = ctx.createLinearGradient(0, 0, 170, 0); //declare grd value is createLinearGradient method run on ctx, parameters control start and end points of gradient x,y
grd.addColorStop(0, "red"); //use addColorStop method to set color and position
grd.addColorStop(1, "white"); 

ctx.fillStyle = grd; //set ctx fillStyle property with grd variable values 
ctx.fillRect(0, 0, 150, 100); //use fillRect method to draw rectangle that is filled according to the fill style, parameters are x(start), y(start), width, height 