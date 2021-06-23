function Vehicle(Make, Model, Year, Color) { //Defining function Vehicle() to use as a constructor for objects in the Vehicle class to be defined later
    this.Vehicle_Make = Make;   //Assigning Make, Model, Year, and Color, attributes when creating a new object in the Vehicle class
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Creating a new object in the class Vehicle and assigning its attributes using the function Vehicle()
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}