/**
 * 1. Smart usage of proto type is avoid duplication
 * 
 */

function Person(name) {
    this.name = name
}

Person.prototype.sayName = function () {
    return this.name;
}

const e1 = new Person('Nicholas')
const e2 = new Person('Greg')

// Lets check the reality. 
console.log(e1);
console.log(e2);

console.log(e1 instanceof Person)
console.log(e1.constructor === Person)


// @@Look at memChart