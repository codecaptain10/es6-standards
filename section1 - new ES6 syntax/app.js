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


/* --------------------------------------- Rest Parameters --------------------------------------- */


/* --------------------------------------- Spread Operator --------------------------------------- */


/* --------------------------------------- Destructuring --------------------------------------- */


/* --------------------------------------- for ... of loop --------------------------------------- */


/* --------------------------------------- Octal and Binary literals --------------------------------------- */