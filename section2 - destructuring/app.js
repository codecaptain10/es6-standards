// S E C T I O N 2 : Destructuring
/* --------------------------- Array Detructuring ------------------------- */
/*
ES6 provides a new feature called destructing assignment that allows you to destructure properties of an object or elements of an array into individual variables.
*/
//Example 1
function getScores() {
    return [70, 80, 90, 100];
}

let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

//Example 2
let [x, y, ...args] = getScores();
console.log(x); // 70
console.log(y); // 80
console.log(args); // [90, 100]


/* --------------------------- Object Destructuring ----------------------- */
/*
Object destructuring assigns the properties of an object to variables with the same names by default.
 */
//Syntax
let {
    property1: variable1,
    property2: variable2
} = object;


//Bevor ES6
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let firstName = person.firstName;
let lastName = person.lastName;

//ES6
let {
    firstName: fname,
    lastName: lname
} = person;

//Example: default parameters
let person = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'C.',
    currentAge: 28
};

let {
    firstName,
    lastName,
    middleName = '',
    currentAge: age = 18
} = person;

console.log(middleName); // 'C.'
console.log(age); // 28