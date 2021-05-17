function my_Dictionary() { //create a function to hold my dictionary
    var golfer= { //create variable golfer that will become a dictionary
        name:"Matt", //create KVPs
        age:31,
        gender:"Male",
        handicap:20,
    };
    delete golfer.age; //delete KVP "age"
    document.getElementById("dictionary").innerHTML=golfer.age; //find the element with the id "dictionary" in index.html and replace its contents with the value of age from the dictionary golfer
}
