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


/* --------------------------------------- Object Literal Syntax Extensions --------------------------------------- */


/* --------------------------------------- Default Parameters --------------------------------------- */


/* --------------------------------------- Rest Parameters --------------------------------------- */


/* --------------------------------------- Spread Operator --------------------------------------- */


/* --------------------------------------- Destructuring --------------------------------------- */


/* --------------------------------------- for ... of loop --------------------------------------- */


/* --------------------------------------- Octal and Binary literals --------------------------------------- */