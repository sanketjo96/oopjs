/**
 * 1. What if I have proto as well as instance member with same name ?
 * 
 */

function Person(name) {
    this.name = name
    this.sayName = function() {
        return this.name + 'from instance'; 
    }
}

Person.prototype.sayName = function () {
    return this.name;
}

const e2 = new Person('Suresh')

// Lets check the reality. 
console.log(e2.sayName());


// @@Look at memChart