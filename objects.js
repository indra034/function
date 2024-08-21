// All about objects - just another datatype

const myName = "Indra";
const myAge = 40;
const myProfession = "Teacher";


// This is an object
const aboutMe = {
    name: "Indra",
    age: 40,
    myProfession: "Teacher",
    hair: {
        color: "black and red",
        straight: false,
    }
    isFree:(time) => {
        if (time > 10) {
            return true;
        } else {
                return false;
            }
        
    }
}

// accessing a value of a property 
console.log(aboutMe.name); // returns Indra
console.log(aboutMe.age); // return 40

// accessing nested value
console.log(aboutMe.hair.color); // return " black and white and brown"
//calling function
console.log(aboutMe.isFree(11)); // return true

// Mutation
// aboutMe cannot be reassigned, but its properties can be
aboutMe.age = "40";
console.log(aboutMe);

// adding a new property
aboutMe.hobbies = [ "gaming" ];
console.log(aboutMe.hobbies);

// deleting a property
console.log(aboutMe.hair); // return " black and white and brown"
delete aboutMe.hair;
console.log(aboutMe.hair); // return undifined


