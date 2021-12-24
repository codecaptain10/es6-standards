// S E C T I O N 4 : ES6 Classes
/*-------------------------------------------- Class -------------------------------------------*/
/*
A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.

Unlike other programming languages such as Java and C#, JavaScript classes are syntactic sugar over the prototypal inheritance. In other words, ES6 classes are just special functions.
 */
//Bevor ES6: prototypes
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
};

var john = new Person("John Doe");
console.log(john.getName());

//ES6 Classes
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
/*-------------------------------------------- Getters and Setters -------------------------------------------*/
/*-------------------------------------------- Class Expression -------------------------------------------*/
/*-------------------------------------------- Static methods -------------------------------------------*/
/*-------------------------------------------- Static Properties -------------------------------------------*/
/*-------------------------------------------- Computed property -------------------------------------------*/
/*-------------------------------------------- Inheritance -------------------------------------------*/
/*-------------------------------------------- new.target -------------------------------------------*/