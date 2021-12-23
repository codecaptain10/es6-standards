// S E C T I O N 1 : New ES6 Syntax
/* --------------------------------------- JavaScript let --------------------------------------- */
/*
1) Variables are declared using the let keyword are block-scoped, are not initialized to any value, 
and are not attached to the global object.
2) Redeclaring a variable using the let keyword will cause an error.
3) A temporal dead zone of a variable declared using the let keyword starts from the block until the initialization is evaluated.
*/

let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script


/* --------------------------------------- var vs let --------------------------------------- */
//#1 Scope
//var - acces from block scope
for (var i = 0; i < 5; i++) {
    console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

//let - don't access from block scope
for (let i = 0; i < 5; i++) {
    console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

//#2 - creating global properties
//var is added as global propertie
var counter = 0;
console.log(window.counter); //  0

//let is not added as global property
let counter = 0;
console.log(window.counter); // undefined

//#3 - Redeclaration
//var can be redeclareted
var counter = 10;
var counter;
console.log(counter); // 10

//let can not be redelcareted
let counter = 10;
let counter; //error

//#4 - Temporal Dead Zone
//var
/*
 - In the creation phase, the JavaScript engine assigns storage spaces to var variables and immediately initializes them to undefined.
- In the execution phase, the JavaScript engine assigns the var variables the values specified by the assignments if there are ones. Otherwise, the var variables remain undefined.
 */

//let
/*
- In the creation phase, the JavaScript engine assigns storage spaces to the let variables but does not initialize the variables. 
- Referencing uninitialized variables will cause a ReferenceError.
The let variables have the same execution phase as the var variables.
*/

/* --------------------------------------- JavaScript const --------------------------------------- */
//Intro
/*
- Like the let keyword, the const keyword declares blocked-scope variables. However, the block-scoped variables declared by the const keyword can’t be reassigned.
- Variables created by the const keyword are “immutable”. In other words, you can’t reassign them to different values.
    const RATE = 0.1;
    RATE = 0.2; // TypeError
- Unlike the let keyword, you need to initialize the value to the variable declared by the const keyword.
 */
//const and Objects 
/*
- The const keyword ensures that the variable it creates is read-only. However, it doesn’t mean that the actual value to which the const variable reference is immutable. 
    const person = { age: 20 };
    person.age = 30; // OK
    console.log(person.age); // 30
    person = { age: 40 }; // TypeError

- If you want the value of the person object to be immutable, you have to freeze it by using the Object.freeze() method:
    const person = Object.freeze({age: 20});
    person.age = 30; // TypeError

- Note that Object.freeze() is shallow, meaning that it can freeze the properties of the object, not the objects referenced by the properties.

    const company = Object.freeze({
        name: 'ABC corp',
        address: {
            street: 'North 1st street',
            city: 'San Jose',
            state: 'CA',
            zipcode: 95134
        }
    });

    company.address.country = 'USA'; // OK
*/

//const and arrays
/*
    const colors = ['red'];
    colors.push('green');
    console.log(colors); // ["red", "green"]

    colors.pop();
    colors.pop();
    console.log(colors); // []

    colors = []; // TypeError
*/

//const and for loop
/*
    let scores = [75, 80, 95];
    for (const score of scores) {
        console.log(score);
    }

    for (const i = 0; i < scores.length; i++) { // TypeError
    console.log(scores[i]);
}
*/


/* --------------------------------------- Template literals --------------------------------------- */
//Intro
/*
- A multiline string: a string that can span multiple lines.
- String formatting: the ability to substitute part of the string for the values of variables or expressions. This feature is also called string interpolation.
- HTML escaping: the ability to transform a string so that it is safe to include in HTML.
*/
let simple = `This is a template literal`;

//Basic syntax
let str = `Template literal in ES6`;

console.log(str); // Template literal in ES6
console.log(str.length); // 23
console.log(typeof str); // string

let {
    title,
    excerpt,
    body,
    tags
} = post;

let postHtml = `<article>
<header>
    <h1>${title}</h1>
</header>
<section>
    <div>${excerpt}</div>
    <div>${body}</div>
</section>
<footer>
    <ul>
      ${tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
    </ul>
</footer>`;

//Variable and expression substitutions
let firstName = 'John';
let lastName = 'Doe';

let greeting = `Hi ${firstName}, ${lastName}`;
console.log(greeting); // Hi John, Doe

//tagged templates
function format(literals, ...substitutions) {
  let result = '';

  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }
  // add the last literal
  result += literals[literals.length - 1];
  return result;
}

let quantity = 9,
  priceEach = 8.99,
  result = format `${quantity} items cost $${(quantity * priceEach).toFixed(2)}.`;

console.log(result); // 9 items cost $80.91.


/* --------------------------------------- Object Literal Syntax Extensions --------------------------------------- */
//Object property initializer shorthand
/*ES6 allows you to eliminate the duplication when a property of an object is the same as the local variable name by including the name without a colon and value.*/
function createMachine(name, status) {
  return {
    name,
    status
  };
}

//Computed property name
/*In ES6, the computed property name is a part of the object literal syntax, and it uses the square bracket notation. */
let prefix = 'machine';
let machine = {
  [prefix + ' name']: 'server',
  [prefix + ' hours']: 10000
};

console.log(machine['machine name']); // server
console.log(machine['machine hours']); // 10000

//Concise method syntax
/*ES6 makes the syntax for making a method of the object literal more succinct by removing the colon (:) and the function keyword. */
let server = {
  name: 'Server',
  restart() {
    console.log("The " + this.name + " is restarting...");
  },
  'starting up'() {
    console.log("The " + this.name + " is starting up!");
  }
};

server['starting up']();


/* --------------------------------------- Default Parameters --------------------------------------- */
/*In JavaScript, default function parameters allow you to initialize named parameters with default values if no values or undefined are passed into the function. */
//Example 1
function say(message = 'Hi') {
  console.log(message);
}

say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); // 'Hello'

//Example 2 
function put(toy, toyBox = []) {
  toyBox.push(toy);
  return toyBox;
}

console.log(put('Toy Car'));
// -> ['Toy Car']
console.log(put('Teddy Bear'));
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']


/* --------------------------------------- Rest Parameters --------------------------------------- */
/*
ES6 provides a new kind of parameter so-called rest parameter that has a prefix of three dots (...). A rest parameter allows you to represent an indefinite number of arguments as an array.
*/
//Syntax
function fn(a, b, ...args) {
  //...
}

//Example 1
function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

sum(1, 2, 3);

//Example 2
const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + " " + curr;
  });
};
let message = combine("JavaScript", "Rest", "Parameters"); // =>
console.log(message); // JavaScript Rest Parameters


/* --------------------------------------- Spread Operator --------------------------------------- */
/*
ES6 provides a new operator called spread operator that consists of three dots (...). The spread operator allows you to spread out elements of an iterable object such as an array,a  map, or a set.
 */
const odd = [1, 3, 5];
const combined = [2, 4, 6, ...odd];
console.log(combined); //[ 2, 4, 6, 1, 3, 5 ]

/*So the three dots ( ...) represent both the spread operator and the rest parameter.

Here are the main differences:
  1) The spread operator unpacks elements.
  2) The rest parameter packs elements into an array.
  
The rest parameters must be the last arguments of a function.  */

const odd = [1, 3, 5];
const combined = [...odd, 2, 4, 6];
console.log(combined); // [ 1, 3, 5, 2, 4, 6 ]

const odd = [1, 3, 5];
const combined = [2, ...odd, 4, 6];
console.log(combined); //[ 2, 1, 3, 5, 4, 6 ]


/* --------------------------------------- Destructuring --------------------------------------- */
/*ES6 provides a new feature called destructing assignment that allows you to destructure properties of an object or elements of an array into individual variables. */

//Arrays
function getScores() {
  return [70, 80, 90, 100];
}

let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

//Array and rest parameter
let [x, y, ...args] = getScores();
console.log(x); // 70
console.log(y); // 80
console.log(args); // [90, 100]


/* --------------------------------------- for ... of loop --------------------------------------- */
/*
ES6 introduced a new construct for...of that creates a loop that iterates over iterable objects such as:
  - Built-in Array, String, Map, Set, …
  - Array-like objects such as arguments or NodeList
  - User-defined objects that implement the iterator protocol.

1) variable
In each iteration, a property of the iterable object is assigned to the variable. You can use var, let, or const to declare the variable.

2)iterable
The iterable is an object whose iterable properties are iterated.
 */

//Syntax
for (variable of iterable) {
  // statements 
}

//Example 1: Iterating over arrays
let scores = [80, 90, 70];

for (let score of scores) {
  score = score + 5;
  console.log(score);
}

//Example 2: Iterating over arrays
let colors = ['Red', 'Green', 'Blue'];

for (const [index, color] of colors.entries()) {
  console.log(`${color} is at index ${index}`);
}

//Example 3: In-place object destructuring with for..of 
const ratings = [{
    user: 'John',
    score: 3
  },
  {
    user: 'Jane',
    score: 4
  },
  {
    user: 'David',
    score: 5
  },
  {
    user: 'Peter',
    score: 2
  },
];

let sum = 0;
for (const {
    score
  } of ratings) {
  sum += score;
}

console.log(`Total scores: ${sum}`); // 14

//Example 4: Array
let str = 'abc';
for (let c of str) {
  console.log(c);
}


/* --------------------------------------- Octal and Binary literals --------------------------------------- */