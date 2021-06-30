function validateFunction() { //declare validateFunction 
    let x = document.forms["contactForm"]["fname"].value; //declare x give value of fname input
    if (x == "") { //if statement if x is blank
      alert("First name must be filled out"); //send alert with string
      return false; //dont submit the form
    }

    let y = document.forms["contactForm"]["lname"].value;
    if (y == "") {
      alert("Last name must be filled out");
      return false;
    }

    let z = document.forms["contactForm"]["email"].value;
    if (z == "") {
      alert("Email must be filled out");
      return false;
    }
  }
