function add(){
    const d = 1 + 2;
    console.log(d);

}
add();
add();


function add (x, y) {
    const d = x+y;
    return d;
}

function add (x, y) {
    const a = x+y;
    return a;
}

function add (x, y) {
    return x+y;
   }


const subtract = (x, y) => {
    return x - y;
    
}
const divide = (x, y) => x / y;
const addOne = x => x +1;


const e = add(1, 1);
const f = add (1,2);
console.log(e);
console.log(f);


const g = subtract(5, 1);
console.log(g);

const h = divide(4,2);
console.log(h);

const i = addOne(2);
console.log(i);

const addValue = (a, b = 10) => {
    return a + b;
}

console.log(addValue(10)) // print 20
console.log(addValue(10, 20)) // print 30

console.log(addValue("20", undefined)); // prints
console.log(addValue("20", null)) // prints 20null

//... params

const printsArgs = (...arguments) => {
    console.log(arguments);
    
}
printsArgs("Hi");
printsArgs("hi", "bonjour");
printsArgs("hi", "bonjour", "nihau");



