// S E C T I O N 8 : Promises
/*------------------------------------------- Promises ------------------------------------------------*/
/*
In JavaScript, a promise is an object that returns a value which you hope to receive in the future, but not now.

Because the value will be returned by the promise in the future, the promise is very well-suited for handling asynchronous operations.

It’ll be easier to understand the concept of JavaScript promises through an analogy.

Suppose that you promise to complete learning JavaScript by next month.

You don’t know if you will spend your time and effort to learn JavaScript until next month. You can either be completing learning JavaScript or not.

A promise has three states:

Pending: you don’t know if you will complete learning JavaScript by the next month.
Fulfilled: you complete learning JavaScript by the next month.
Rejected: you don’t learn JavaScript at all.
A promise starts in the pending state which indicates that the promise hasn’t completed. It ends with either fulfilled (successful) or rejected (failed) state.
 */
let completed = true;

let learnJS = new Promise(function(resolve, reject) {
    if (completed) {
        resolve("I have completed learning JS.");
    } else {
        reject("I haven't completed learning JS yet.");
    }
});
/*
The Promise constructor accepts a function as an argument. This function is called the executor.

The executor accepts two functions with the names, by convention, resolve() and reject(). 

When you call the new Promise(executor), the executor is called automatically. 

Inside the executor, you manually call the resolve() function if the executor is completed successfully and invoke the reject() function in case of an error occurs.

If you embed the above JavaScript code in an HTML document and check the console window, you will see that the promise is resolved because the completed variable is set to true.
 */
let completed = true;

let learnJS = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (completed) {
            resolve("I have completed learning JS.");
        } else {
            reject("I haven't completed learning JS yet.");
        }
    }, 3 * 1000);
});

//then()
/*The then() method is used to schedule a callback to be executed when the promise is successfully resolved. */
function makePromise(completed) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (completed) {
                resolve("I have completed learning JS.");
            } else {
                reject("I haven't completed learning JS yet.");
            }
        }, 3 * 1000);
    });
}

let learnJS = makePromise(true);

learnJS.then(
    success => console.log(success),
    reason => console.log(reason)
);

//catch()
/*If you want to schedule a callback to be executed when the promise is rejected, you can use the catch() method of the Promise object */
learnJS.catch(
    reason => console.log(reason)
);

//finally()
/*Sometimes, you want to execute the same piece of code whether the promise is fulfilled or rejected. */
learnJS
    .then(success => console.log(success))
    .catch(reason => console.log(reason))
    .finally(() => createApp());


//SUMMARY
/*
- A promise is an object that returns a value in the future.
- A promise starts in the pending state and ends in either fulfilled state or rejected state.
- Use then() method to schedule a callback to be executed when the promise is fullfiled, and catch() method to schedule a callback to be invoked when the promise is rejected.
- Place the code that you want to execute in the finally() method whether the promise is fulfilled or rejected.
 */


/*------------------------------------------- Promises chaining -------------------------------------------*/
/*------------------------------------------- Promises composition -----------------------------------------------*/
/*------------------------------------------- Promise error handling -----------------------------------------------*/