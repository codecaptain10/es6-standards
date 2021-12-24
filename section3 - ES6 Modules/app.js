// S E C T I O N 3 : ES Modules
//Example 1
import {
    message
} from './message.js'

const h1 = document.createElement('h1');
h1.textContent = message

document.body.appendChild(h1)

//Example 2
import {
    message,
    setMessage
} from './greeting.js';
console.log(message); // 'Hi'

setMessage('Hello');
console.log(message); // 'Hello'

//Example 3
import {
    foo
} from './foo.js';
console.log(foo); // 10;