var A=3; //declaring variable A and assigning it the value of 3
document.write(typeof A+3); //displaying the type of variable A and the number 3

function my_Function_A() { //function for displaying NaN
    document.getElementById("A").innerHTML=0/0;
}

function my_Function_B() { //function for evaluating if input is NaN
    document.getElementById("B").innerHTML= isNaN("String");
}

function my_Function_C() { //function for evaluating if input is NaN
    document.getElementById("C").innerHTML= isNaN(10);
}

document.write(2E315); //display infinity
document.write(-2E315); //display negative infinity
document.write(10>5); //use greater than boolean to display true
document.write(5>10); //use less than boolean to display false

console.log(2+3); //add 5 to the console log
console.log(3<2); //display false in console log

document.write(10==10); //use double equal boolean to display true
document.write(10==15); //use double equal boolean to display false

var D=10;
var E=10;
var F="five";
var G=5;

// using triple equal signs to evaluate if value and data type both match and displaying true or false
document.write(D===E); //true for type and value = true
document.write(E===F); //false for value and type = flase
document.write(F===G); //true for value false for type = false
document.write(E===G); //false for value but true for type = false

//using the And operator
document.write(10>5 && 10>8); //both values are true = true
document.write(10>5 && 10>15); //only one value is true = false

//using the Or operator
document.write(10>5 || 10<5); //one value is true = true
document.write(10>15 || 15<10); //both values are false = false

//not operator
function not_Function() { //function for evaluating if input is not true
    document.getElementById("Not").innerHTML= !(15>10); //display result of function in element with id = Not
}

function not_Function_False() { //function for evaluating if input it not true
    document.getElementById("Not False").innerHTML= !(15>100); //display result of function in element with id = Not False
}
