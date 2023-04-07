/**
 * Note another way to assign object to prototype.
 * 
 */

function Person(name) {
    this.name = name
}

Person.prototype = {
    getName: function () {
        return this.name;
    }
}

const e1 = new Person('Nicholas')
const e2 = new Person('Greg')

// Lets check the reality. 
console.log(e1);
console.log(e2);

console.log(e1 instanceof Person)
console.log(e1.constructor === Person)

// The problem ??
// How to fix this ??
