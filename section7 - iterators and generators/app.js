//S E C T I O N 7 : Iterators & Generators
/*------------------------------------- Iterators ------------------------------------------- */
//Bevor ES6: iterator for loop
let ranks = ['A', 'B', 'C'];

for (let i = 0; i < ranks.length; i++) {
    console.log(ranks[i]);
}
//ES6: for...of
/*
ES6 introduced a new loop construct called for...of to eliminate the standard loop’s complexity and avoid the errors caused by keeping track of loop indexes.
The for...of is far more elegant than the for loop because it shows the true intent of the code – iterate over an array to access each element in the sequence.
On top of this, the for...of loop has the ability to create a loop over any iterable object, not just an array.
To iterate over the elements of the ranks array, you use the following for...of construct:
 */
for (let rank of ranks) {
    console.log(rank);
}

//Iterator protocol
/*An object is an iterator when it implements an interface (or API) that answers two questions:

Is there any element left?
If there is, what is the element?
Technically speaking, an object is qualified as an iterator when it has a next() method that returns an object with two properties:

 done: a boolean value indicating whether or not  there are any more elements that could be iterated upon.
 value: the current element.
 {
    value: 'next value',
    done: false
}
 */


//Iterators
/*
Since ES6 provides built-in iterators for the collection types  Array, Set, and Map, you don’t have to create iterators for these objects.

If you have a custom type and want to make it iterable so that you can use the for...of loop construct, you need to implement the iteration protocols.

The following code creates a Sequence object that returns a list of numbers in the range of ( start, end) with an interval between subsequent numbers.
 */
class Sequence {
    constructor(start = 0, end = Infinity, interval = 1) {
            this.start = start;
            this.end = end;
            this.interval = interval;
        }
        [Symbol.iterator]() {
            let counter = 0;
            let nextIndex = this.start;
            return {
                next: () => {
                    if (nextIndex <= this.end) {
                        let result = {
                            value: nextIndex,
                            done: false
                        }
                        nextIndex += this.interval;
                        counter++;
                        return result;
                    }
                    return {
                        value: counter,
                        done: true
                    };
                }
            }
        }
};
/*------------------------------------- Generators ------------------------------------------- */
/*------------------------------------- yield ------------------------------------------- */