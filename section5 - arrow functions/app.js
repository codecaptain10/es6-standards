// S E C T I O N 5 : Arrow functions
/*------------------------------------ Arrow functions -------------------------------*/
/*
ES6 arrow functions provide you with an alternative way to write a shorter syntax compared to the function expression.
 */
//Example 1
let add1 = (x, y) => x + y;

console.log(add(10, 20)); // 30;

//Example 2
let add2 = (x, y) => {
    return x + y;
};

//JavaScript arrow functions with multiple parameters
//Example: sort() take arrow function as a parameter
let numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);
console.log(numbers); // [6,4,2]


//JavaScript arrow functions with a single parameter
//Example: example uses an arrow function as an argument of the map() method that transforms an array of strings into an array of the string’s lengths.
let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);

console.log(lengths); //[4,3,5]

//JavaScript arrow functions with no parameter
let logDoc = () => console.log(window.document);
logDoc();


//ARROW FUNCTION  vs. REGULAR FUNCTION
/*
There are two main differences between an arrow function and a regular function.

1. First, in the arrow function, the this, arguments, super, new.target are lexical. It means that the arrow function uses these variables (or constructs) from the enclosing lexical scope.
2. Second, an arrow function cannot be used as a function constructor. If you use the new keyword to create a new object from an arrow function, you will get an error.
 */

//JavaScript arrow functions and this value
/*
In JavaScript, a new function defines its own this value. However, it is not the case for the arrow function. 
Unlike an anonymous function, an arrow function captures the this value of the enclosing context instead of creating its own this context. 
 */
function Car() {
    this.speed = 0;

    this.speedUp = function(speed) {
        this.speed = speed;
        setTimeout(
            () => console.log(this.speed),
            1000);

    };
}

let car = new Car();
car.speedUp(50); // 50;


//JavaScript arrow functions and the arguments object
//An arrow function doesn’t have the arguments object. 
function show() {
    return x => x + arguments[0];
}

let display = show(10, 20);
let result = display(5);
console.log(result); // 15


/*--------------------------- Arrow functions: when you should not use ------------------------*/
// --- 1. Events handlers
//No!
const greeting = document.querySelector('#greeting');
const username = document.querySelector('#username');
username.addEventListener('keyup', () => {
    greeting.textContent = 'Hello ' + this.value;
});
//Yes!
username.addEventListener('keyup', function() {
    input.textContent = 'Hello ' + this.value;
});

// --- 2. Object methods
//No!
const counter = {
    count: 0,
    next: () => ++this.count,
    current: () => this.count
};
//Yes!
const counter1 = {
    count: 0,
    next() {
        return ++this.count;
    },
    current() {
        return this.count;
    }
};
// --- 3. Prototype methods
//No!
function Counter() {
    this.count = 0;
}

Counter.prototype.next = () => {
    return this.count;
};

Counter.prototype.current = () => {
        return ++this.next;
    }
    //Yes!
function Counter() {
    this.count = 0;
}

Counter.prototype.next = function() {
    return this.count;
};

Counter.prototype.current = function() {
    return ++this.next;
}

// --- 4. Functions that use the arguments object
//No!
const concat = (separator) => {
        let args = Array.prototype.slice.call(arguments, 1);
        return args.join(separator);
    }
    //Yes!
function concat(separator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}