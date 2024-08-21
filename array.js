let simpleArray = [ "indra", "prerna", "raj"]

console.log(simpleArray);

// pushing a simple element   
simpleArray.push("Hsi")
console.log(simpleArray);

// pushing multiple element
simpleArray.push("netra", "shanghi")
console.log(simpleArray);

// popping element
poppedElement = simpleArray.pop();
console.log(simpleArray);
console.log("popped element is", poppedElement);

// hifting element
const shiftedElement = simpleArray.shift();
console. log(simpleArray);
console.log("shifted element is", shiftedElement);

// Unshifting element
simpleArray.unshift("Johnny", "Doe");
console.log(simpleArray);

// Includes - return true or false
const doesIncludeJohnny = simpleArray.includes("Johnny");
console.log("includes Johnny?, doesIncludeJohnny");

const doesIncludePapa = simpleArray.includes("Papa");
console.log("includes Johnny?, doesIncludeJohnny");

// callback function
function callsYouBack(shephere) {
    const a = "hello";
    shephere("hello");
    shephere("world ")
    shephere("sidhai")
}

function callbackedFunction(a) {
    console.log(a)
}

callsYouBack(callbackedFunction);

console.log(".........................");

// forEach method
simpleArray.forEach(function (x) {
    console.log(x);
});

let nayaString = "";
simpleArray.forEach(function(x, i) {  // x is the element, i is the index
    nayaString = nayaString + x +i;
});
console.log(nayaString);

// sort method
const nayaArray = ["b", "a", "d", "z", "i"]
nayaArray.sort();
console.log(nayaArray);
// sort method sorts is ascending order. How to sort in descending order? using sort method only

// map method
const numberArray = [1, 2, 3, 4, 5];
const mapped = numberArray.map((x) => {
    return x * x;
});
console.log(mapped); // prints the square of every number

// reduce method
const sumOfArray = numberArray.reduce((a, b) => {   //a is the previous value, b is the currentValue
    return a + b;
}, 0); //0 is the initial value
console.log(sumOfArray);
/**
 * iteration 1: 0, 1 (initial value and first element)
 * iteration 2: 1, 2 (result of last return value and next element)
 * iteration 3: 3, 3 (result of last return value and next element)
 * iteration 4: 6, 4
 * iteration 5: 10, 5
 */

// filter method
const f = numberArray.filter((a)=> { 
    return a % 2 == 0;
});
console.log(f); //prints all the multiples of 2

// find method 
const found = numberArray.find((a)=> {
    return a % 2 == 0;
})
console.log(found)

// forEach with array of object 
const books = [
    { 
        name: "kitaab",
        price: 1000
    },
    {
        name: "it ends with us",
        price: 200
    },
];
books.forEach((book)=> {
    console.log(book.name);
    book.name = "it starts with us"
});
console.log(books);

/**
 * Create a program that takes array of book objects 
 * and return a new array booknames using .map().
 */

const bookNames = books.map((x) => {
    return x;
});
console.log(bookNames);

/**
 * create a program that takes an array of book objects 
 * and adds an new property 'pages' using .map() or .forEach
 */
const bookNamesWithPages = books.map((book) => {
    return {
        name: book.name,
        price: book.price,
        pages: 400,
    }
});
console.log(bookNamesWithPages);

// using .forEach()
books.forEach((book)=>{
    book.pages = 400;
});
console.log(books);
