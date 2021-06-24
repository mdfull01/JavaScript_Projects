function countdown() { //declare countdown function
    var seconds = document.getElementById("seconds").value; //declare variable "seconds" give it a value from the user input at element id = seconds

    function tick() { //declare function tick
        seconds = seconds -1; //decriment seconds value by 1
        timer.innerHTML = seconds; //display current value of seconds at element with id = timer
        setTimeout(tick, 1000); //pause function tick for 1 second (1000 ms)
    if (seconds == -1) { //if statement checking the value of variable seconds against -1
        alert("Time's up!"); //alert that will display if seconds = -1 
    }
    }
    tick(); //invokes tick function
}

//-----------------Begin Slide show script ------------------------------------------

var slideIndex = 1; //declare sideIndex and set its value to 1
showSlides(slideIndex); //calls showSlides and uses current slideIndex value as argument

function plusSlides(n) { //declares plusSlides and gives it the parameter n (n will come from onclick events)
    showSlides(slideIndex += n); //calls showSlides and gives it the arguments slideIndex value += n
}

function currentSlide(n) { //declares currentSlide and gives it an argument of n (n will come from onclick events)
    showSlides(slideIndex = n); //calls showSlides and gives it the arguments slideIndes vale = n
}

function showSlides(n) { //declares showSlides 
    var i; //declares i but gives it no value
    var slides = document.getElementsByClassName("mySlides"); //declares slides and gives it values from the HTML class mySlides
    var dots = document.getElementsByClassName("dot"); //declares dots and gives it values from the HTML class dot
    if (n > slides.length) {slideIndex = 1} //if statement if n is higher than total number of slides reset slideIndex to 1
    if (n < 1) {slideIndex = slides.length} //if statement if n is less than 1 reset slideIndex to the total number of slides (display the last slide in the class)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //for loop that prevents all but 1 slide from being displayed
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //for loop that makes only one dot part of the active class
    }
    slides[slideIndex-1].style.display = "block"; //the slide object in the slide array at index location slideIndex -1 will be displayed
    dots[slideIndex-1].className += " active"; //same as above but for dots and the active class
          
}