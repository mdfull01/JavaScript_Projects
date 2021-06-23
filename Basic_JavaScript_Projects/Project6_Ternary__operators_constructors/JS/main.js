function Rider(Name, Height) { //Create class Rider function is an object constructor to set 
    this.Rider_Name = document.getElementById("Name").value; //Sets Rider_Name to the value from input "Name"
    this.Rider_Height = document.getElementById("Height").value; //Sets Rider_Height to the value from input "Height"
}

function ride_Function() { //Create a function to receive user input and determine if user is tall enoug to ride
    
    var A = new Rider;
    var Height, Can_ride; //Declare variables Height, and Can_ride
    Height = A.Rider_Height; //Set variable Height to value of variable A height attribute
    Can_ride = (Height < 52) ? " is too short":" is tall enough"; //Set value of variable Can_ride to the expression of a Ternary operator evaluating the Height variable in relation to the minimum height requirement 
    document.getElementById("New_and_This").innerHTML = A.Rider_Name + Can_ride + " to ride."; //Replace element with Id "New_and_This" with Variable A Name attribute, the expression of Can_ride, and the string " to ride."
}

//This code creates a counter function to show how many times the ride_Function has been called using nested anonymous functions

function counter_Function (){ //Create counter_function 
    
const plus = (function () { //Declare variable "plus" and an anonymous function so it will immediately self invoke
    let counter = 0; //Self invoking function setting the counter to zero, only runs once
    return function () {counter += 1; return counter;} //Anonymous inner function that has access to to the variable counter from the outer function   
}()); //Counter can only be changed using "plus" (which now acts as a function) because of the local scope 


document.getElementById("test").innerHTML = plus(); //Replace element with Id "Counter" with current value of "plus"  
}