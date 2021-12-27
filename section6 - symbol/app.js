//S E C T I O N 6 : Symbol
/* ------------------------------------- Symbol ---------------------------------------------- */
/*
ES6 added Symbol as a new primitive type. Unlike other primitive types such as number, boolean, null, undefined, and string, the symbol type doesn’t have a literal form.
*/
let s = Symbol('foo');
let firstName = Symbol('first name'),
    lastName = Symbol('last name');

//Sharing symbols
/*ES6 provides you with the global symbol registry that allows you to share symbols globally. If you want to create a symbol that will be shared, you use the Symbol.for() method instead of calling the Symbol() function. */
let ssn = Symbol.for('ssn');
let citizenID = Symbol.for('ssn');
console.log(ssn === citizenID); // true


//Symbole usages
//1)  Using symbols as unique values
/*
Whenever you use a string or a number in your code, you should use symbols instead. For example, you have to manage the status in the task management application. Before ES6, you would use strings such as open, in progress, completed, canceled, and on hold to represent different statuses of a task.
 */
let statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On hold'),
    CANCELED: Symbol('Canceled')
};
// complete a task
task.setStatus(statuses.COMPLETED);

//2) Using symbol as the computed property name of an object
//You can use symbols as computed property names. 
let status = Symbol('status');
let task = {
    [status]: statuses.OPEN,
    description: 'Learn ES6 Symbol'
};
console.log(task);