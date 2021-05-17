function addition_Function() { //function for adding 
    var addition=5+2;
    document.getElementById("addition").innerHTML="5+2="+addition; //finds paragraph element with the id "addition" and replaces its contents with the equation and returned value of the variable addition
}

function subtraction_Function() { //function for subtracting
    var subtraction=7-4;
    document.getElementById("subtraction").innerHTML="7-4="+subtraction //finds paragraph element with the id "subtraction" and replaces its contents with the equation and returned value of the variable subtraction
}

function multiplication_Function() { //function for multiplication
    var multiplication=5*4;
    document.getElementById("multiplication").innerHTML="5*4="+multiplication //finds paragraph element with the id "multiplication" and replaces its contents with the equation and returned value of the variable multiplication
}

function division_Function() { //function for division
    var division=40/4;
    document.getElementById("division").innerHTML="40/4="+division //finds paragraph element with the id "division" and replaces its contents with the equation and returned value of the variable division
}

function multi_Function() { //function for multiplication
    var multi=10*10/25+4;
    document.getElementById("multi").innerHTML="10*10/25+4="+multi //finds paragraph element with the id "multi" and replaces its contents with the equation and returned value of the variable multi
}

function modulus_Function() { //function for using the modulus operator to return a remainder
    var modulus=30%7;
    document.getElementById("modulus").innerHTML="When you divide 30 by 7 you have a remainder of "+modulus //finds paragraph element with the id "modulus" and replaces its contents with a string and returned value of the variable modulus
}

function negation_Function() { //function for negation
    var x=10;
    document.getElementById("negation").innerHTML=-x; ////finds paragraph element with the id "negation" and replaces its contents with a negative vaule for the variable x
}

var a=5; //creates variable a and gives a value of 5
a++ //incriments the value of variable a by 1 
document.write(a); //writes the new value of variable a in index.html

var b=6; //creates variable b and gives a value of 6
b-- //decriments the value of variable b by 1
document.write(b); //writes the new value of variable b in index.html

window.alert(Math.random()*50); //creates a pop up widow that displays a random number between 0 and 50

function ceil_Function(){ //creates a function that rounds a number up
    document.getElementById("math").innerHTML=Math.ceil(4.3); //finds paragraph element with the id "math" and replaces its contents with the number returned by rounding 4.2 up using the ceil method
}
