function full_Sentence() { //declare function full_Sentence
    var A = "This is "; //declare variable A and set value
    var B = "a complete "; //declare variable B and set value
    var C = "sentence."; //declare variable C and set value
    var whole = A.concat(B, C); //declare variable whole and give it a value of A, B, and C values concatenated using concat method
    document.getElementById("sentence").innerHTML = whole; //find element id "sentence" and replace its contents with the value of variable "whole"
}

function slice_Method() { //declare function slice_Method
    var sentence = "This is a complete sentence."; //declare sentence and give value
    var section = sentence.slice(10,18); //declare section and give it a value that is a part of the value stored in "sentence" using the slice method
    document.getElementById("slice").innerHTML = section; //find element id "slice" and replace its contents with the value of "section"
}

function upper() { //declare function upper
    var str = document.getElementById("upper").innerHTML; //declare str and give it a string value taken from the contents of element id = upper
    var str1 = str.toUpperCase(); //delcare str1 and set its value as the returned value of the str variable after running the toUpperCase method
    document.getElementById("upper").innerHTML = str1; //find element = upper and replace its contents with the value of str1
}

function search_Function() { //declare search_Function
    var str2 = document.getElementById("demo").innerHTML;  //set value of str2 to the content inside the element id = demo
    var ans = str2.search(document.getElementById("search").value); //set value of ans to the result of search method being run on str2 with the input from element id = search 
    if (ans == -1) { //if search method returns -1 set ans to value of "No results found."
        ans = "No results found.";
    }
    document.getElementById("results").innerHTML = ans; //find element id = results and replace its contents with current value of ans
}

function string_Method() { //declare string method
    var x = 154; //assign x value of 154
    document.getElementById("Numbers_to_string").innerHTML = x.toString(); //find element id = Numbers_to_string and replace its contents with the result of x after the toString method
}

function precision_Method() { //declare precision_Method
    var x = 1523.123345436; //assign x value of 1523.123345436
    document.getElementById("Precision").innerHTML = x.toPrecision(6); //find element id = Numbers_to_string and replace its contents with the result of x after the toPrecision method
}

function rounding_Function() { //declare rounding_Function
    var num = 321.321654; //declare num and assing value
    var n = num.toFixed(3); //declare n and assign value of the result of num after toFixed method to 3 decimal points
    document.getElementById("n").innerHTML = n; //find element = n and replace its contents with n
}

function value_Function() { //declare value_Function
    var str = "Primitive value"; //declare str and assign value
    var val = str.valueOf(); //declare val and assign value of the result of str after valueOf method
    document.getElementById("value").innerHTML = val; //find element = value and replace its contents with value of val
}