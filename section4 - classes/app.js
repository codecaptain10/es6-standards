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
/*
- Use the extends keyword to implement the inheritance in ES6. The class to be extended is called a base class or parent class. The class that extends the base class or parent class is called the derived class or child class.
- Call the super(arguments) in the child class’s constructor to invoke the parent class’s constructor.
- Use super keyword to call methods of the parent class in the methods of the child class.
 */
/*
ES6 allows you to use an expression in brackets []. It’ll then use the result of the expression as the property name of an object.
*/
//Example 1
/*In this example, the [propName] is a computed property of the rank object. The property name is derived from the value of the propName variable.
When you access c property of the rank object, JavaScript evaluates the propName and returns the property’s value. */
let propName = "c";
const rank = {
    a: 1,
    b: 2,
    [propName]: 3,
};

console.log(rank.c); // 3

//Example 2
let name = 'fullName';

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get[name]() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('John', 'Doe');
console.log(person.fullName); // John Doe
/*-------------------------------------------- Inheritance -------------------------------------------*/
/*
- Prior to ES6, implementing a proper inheritance required multiple steps. One of the most commonly used strategies is the prototypal inheritance. 
- ES6 simplified these steps by using the extends and super keywords.
 */
//Example 1
/*
- The following example defines the Animal and Bird classes and establishes the inheritance through the extends and super keywords.
- JavaScript requires the child class to call super() if it has a constructor. As you can see in the Bird class, the super(legs) is equivalent to the following statement in ES5
 */
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}


let bird = new Bird(2);

bird.walk();
bird.fly();

//Shadowing methods - Methods with the same name
/*
ES6 allows the child class and parent class to have methods with the same name. In this case, when you call the method of an object of the child class, the method in the child class will shadow the method in the parent class.
 */
class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        super.walk();
        console.log(`go walking`);
    }
}

let bingo = new Dog();
bingo.walk();
// walking on 4 legs
// go walking


//Inheriting static members
/*
Besides the properties and methods, the child class also inherits all static properties and methods of the parent class.
 */
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
    static helloWorld() {
        console.log('Hello World');
    }
}

class Bird extends Animal {
    fly() {
        console.log('flying');
    }
}


//Inheriting from built-in types
/*
JavaScript allows you to extend a built-in type such as Array, String, Map, and Set through inheritance.
*/
class Queue extends Array {
    enqueue(e) {
        super.push(e);
    }
    dequeue() {
        return super.shift();
    }
    peek() {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}

var customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');

while (!customers.empty()) {
    console.log(customers.dequeue());
}



/*-------------------------------------------- new.target -------------------------------------------*/