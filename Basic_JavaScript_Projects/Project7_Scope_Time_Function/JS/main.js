var x = 10

function add_Numbers_1() {
    var y = 100;
    document.write(y + 50);
}

function add_Numbers_2() {
    document.write(x + 152);
}

function add_Numbers_3() {
    console.log(y + 47);
}

add_Numbers_1();
add_Numbers_2();
add_Numbers_3();

function get_Date() { //Declare get_Date function
    
    var Time = new Date().getHours(); //Declare "Time" variable, set its value as the current time in hours by using the date and get hours functions
    var Reply; //Declare "Reply variable" for later use
    
    if (Time < 12 == Time > 0) { //If statement for a time between 0 and 12 hours, gives "Reply" a value of "It is morning time!"
        Reply = "It is mornning time!";
    }
    else if (Time >= 12 == Time < 18){ //Else if statement for a time between 12 and 18 hours, gives "Reply" a value of "It is afternoon."
        Reply = "It is afternoon.";
    }
    else { //Else statement for any other time input, gives "Reply" a value of "It is evening time."
        Reply = "It is evening time.";
    }
    document.getElementById("time").innerHTML = Reply; //Locate the element with id "time" and replaces its contents with the value of the Reply variable
}

function check_Age() { //Declare check_Age function
    var age = document.getElementById("age").value; //declare age variable and set its value to the user input entered into the html element with id = age
    var answer; //declare variable answer for later use
    if (age < 12) { //If statement evaluating age input from user 
        answer = "You are not currently eligible for any covid 19 vaccine. Contact your local health department for information regarding vaccine trials in your area."; //Sets the value of the answer variable to the desired text output
    }
    else if (age >= 12 == age < 16) { //Else if statement evaluating age input from user
        answer = "You are currently eligible for the Pfizer vaccine."; //Sets the value of the answer variable to the desired text output
    }
    else { //Else statement evaluating age input from user
        answer = "You are currently eligible for any covid 19 vaccine."; //Sets the value of the answer variable to the desired text output
    }
    document.getElementById("results").innerHTML = answer; //Locate the element with id = results and replace its contents with the value of the variable answer 
}