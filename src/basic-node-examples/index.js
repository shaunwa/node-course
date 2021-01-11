import * as stuff from './fibonacci.js';

const person = {
    name: {
        first: 'John',
        last: 'Doe',
    }
}

const first = person?.name?.first;

stuff.sayHello();
console.log(stuff.generateFibonacci(10));