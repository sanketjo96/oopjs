/**
 * 1. Prototype is spacial object which every object links to.
 * 
 * 2. You can think of a prototype as a recipe for an object.
 * 
 * 3. Instance keeps track of prototype with internal property [[__proto__]]
 * 
 */

var book = {
    title: "Object-Oriented JavaScript",
    getPrice: function() {
        return 100;
    }
};

console.log(book.title)

// Lets check the reality with hasOwnProperty
console.log(book.hasOwnProperty("title"));
console.log(book.hasOwnProperty("getPrice"));

console.log(book.hasOwnProperty("hasOwnProperty"));
console.log(book.hasOwnProperty("toString"));

console.log(book.toString())