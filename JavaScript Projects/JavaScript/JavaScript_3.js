function displayType(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert(animalType + " is a cool " + animal.innerHTML + " breed.");
}