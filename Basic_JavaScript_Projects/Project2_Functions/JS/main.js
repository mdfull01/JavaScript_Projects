


function updateName() { //declare function
var firstName="Matt ", lastName="Fuller"; //declare variables
firstName += lastName; //concantenate both variables containing strings
document.getElementById("area").innerHTML=firstName; //find element with id=area and replace its content with the results of updateName
}
updateName();