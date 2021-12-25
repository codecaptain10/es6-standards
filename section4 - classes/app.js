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
//Java, C++
class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}
/*Use the get and set keywords to define the JavaScript getters and setters for a class or an object.
  - The get keyword binds an object property to a method that will be invoked when that property is looked up.
  - The set keyword binds an object property to a method that will be invoked when that property is assigned. */
//ES6 JavaScript
class Person {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}
/*-------------------------------------------- Class Expression -------------------------------------------*/
/*
- Similar to functions, classes have expression forms. A class expression provides you with an alternative way to define a new class.
- A class expression doesn’t require an identifier after the class keyword. And you can use a class expression in a variable declaration and pass it into a function as an argument.
 */
let Person = class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

//First-class citizen
/*
JavaScript classes are first-class citizens. It means that you can pass a class into a function, return it from a function, and assign it to a variable.
 */
function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {
    sayHi() {
        console.log('Hi');
    }
});

greeting.sayHi(); // 'Hi'


//Singleton
/*
- Singleton is a design pattern that limits the instantiation of a class to a single instance. It ensures that only one instance of a class can be created throughout the system.
- Class expressions can be used to create a singleton by calling the class constructor immediately. 
*/
let app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App');

app.start(); // Starting the Awesome App...
/*-------------------------------------------- Static methods -------------------------------------------*/
/*
- JavaScript static methods are shared among instances of a class. Thus, they are associated with the class, not any particular instance of that class.
- The static methods are called via the class name, not the instances of the class.
- Use the className.staticMethodName() or this.constructor.staticMethodName() to call a static method in a class constructor or an instance method.
 */
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static createAnonymous(gender) {
        let name = gender == "male" ? "John Doe" : "Jane Doe";
        return new Person(name);
    }
}
/*-------------------------------------------- Static Properties -------------------------------------------*/
/*
Like a static method, a static property is shared by all instances of a class. To define static property, you use the static keyword followed by the property name like this:
 */
class Item {
    static count = 0;
    static getCount() {
        return Item.count;
    }
}
console.log(Item.getCount()); // 0


/*
- A static property of a class is shared by all instances of that class.
- Use the static keyword to define a static property.
- Use the className.staticPropertyName to access the static property in a static method.
- Use the this.constructor.staticPropertyName or className.staticPropertyName to access the static property in a constructor.

 */
//Example
class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.constructor.count++;
    }
    static count = 0;
    static getCount() {
        return Item.count++;
    }
}

let pen = new Item("Pen", 5);
let notebook = new Item("notebook", 10);

console.log(Item.getCount()); // 2


/*-------------------------------------------- Computed property -------------------------------------------*/
/*-------------------------------------------- Inheritance -------------------------------------------*/
/*-------------------------------------------- new.target -------------------------------------------*/