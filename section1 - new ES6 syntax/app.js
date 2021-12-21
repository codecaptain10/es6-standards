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


/* --------------------------------------- Template literals --------------------------------------- */


/* --------------------------------------- Object Literal Syntax Extensions --------------------------------------- */


/* --------------------------------------- Default Parameters --------------------------------------- */


/* --------------------------------------- Rest Parameters --------------------------------------- */


/* --------------------------------------- Spread Operator --------------------------------------- */


/* --------------------------------------- Destructuring --------------------------------------- */


/* --------------------------------------- for ... of loop --------------------------------------- */


/* --------------------------------------- Octal and Binary literals --------------------------------------- */