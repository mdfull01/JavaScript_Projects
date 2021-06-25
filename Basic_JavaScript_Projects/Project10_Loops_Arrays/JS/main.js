function Call_Loop() { //declare Call_Loop
    var Digit = ""; //declare Digit set its value as a string
    var x = 1; //declare x set its value as 1
    while (x < 11) { //while loop as long as x < 11
        Digit += "<br>" + x; //add <br> and the current value of x to the current value of Digit  
        x++; //incriment value of x
    }
    document.getElementById("Loop").innerHTML = Digit; //find element id = Loop and replace its contents with value of Digit
}

var str = document.getElementById("str1").innerHTML //delcare str and set its value as the contents of element id = srt1
var n = str.length; //declare n set its value at the length of str
document.getElementById("count").innerHTML = "String length = " + n; //find element id = count and replace its contents with "String length = " + n

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //declare Instruments array and give it string values
var Content = ""; //declare Content and give it a string value
var Y; //delcare Y no value

function for_Loop() { //declare for_Loop
    for (Y = 0; Y < Instruments.length; Y++) { //for statement, set Y to 0, if Y < Instruments (array) length then incriment Y value
        Content += Instruments[Y] + "<br>"; //add value of Instrument element from index of Y current value + line break to Content value
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //find element id = Lists_of_Instruments and replace its contents with the value of Content
}

function array_Function() { //declare array_Function
    var feelings = []; //declare feelings make it an array
    feelings[0] = "refreshed"; //give feelings index and values
    feelings[1] = "happy";
    feelings[2] = "excited";
    feelings[3] = "grumpy";
    document.getElementById("Array").innerHTML = "Today I am feeling " + feelings[1] + "."; //find element and replace contents
}

function constant_function() {
    const IPA = {type:"American IPA", abv:"7%", ibu:"85"};
    IPA.abv = "6.5%";
    IPA.price = "$7";
    document.getElementById("Constant").innerHTML = "The cost of the " + IPA.type + " is " + IPA.price;
}


    
    const plus = (function () { //Declare variable "plus" and an anonymous function so it will immediately self invoke
        let counter = 0; //Self invoking function setting the counter to zero, only runs once
        return function () {counter += 1; return counter;} //Anonymous inner function that has access to to the variable counter from the outer function   
    }()); //Counter can only be changed using "plus" (which now acts as a function) because of the local scope 
    
    function counter_Function (){ //Create counter_function 
    document.getElementById("test").innerHTML = plus(); //Replace element with Id "Counter" with current value of "plus"  
    }

    let plane = { //plane object
        make: "Boeing", //plane object attributes
        model: "737-800",
        year: "2010",
        seats: "160",
        description: function() { //function combining other attributes into a string
            return "The plane is a " + this.year + this.make + this.model + "with " + this.seats + " seats."
        }
    };
    function plane_Function() { //plane function triggered by onclick
    document.getElementById("plane_Object").innerHTML = plane.description();
    }

    let text = "" //text = string
    for (let i = 0; i < 10; i++) { //for loop sets i = 0 if i <10 incriment i
        if (i === 3) {break;} //if statement if i = 3 break out of the loop
        text += "The number is " + i + "<br>"; //sets text value using i
    }
   function break_function(){ //break function triggered onclick
        document.getElementById("break").innerHTML = text;
    }

    let text1 = "" //text1 = string
    for (let i = 0; i < 10; i++) { //for loop sets i = 0 if i <10 incriment i
        if (i === 3) {continue;} //if statement if i = 3 break out of the loop
        text1 += "The number is " + i + "<br>"; //sets text value using i
    }
   function continue_function(){ //break function triggered onclick
        document.getElementById("continue").innerHTML = text1;
    }