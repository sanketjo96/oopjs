/**
 * 1. Prototype is spacial object which every object links to.
 * 
 * 2. You can think of a prototype as a recipe for an object.
 * 
 * 3. Instance keeps track of prototype with internal property [[prototype]]
 * 
 */

var book = {
    title: "Object-Oriented JavaScript"
};

console.log(book.title)

// Lets check the reality with hasOwnProperty
console.log(book.hasOwnProperty("title"));
console.log(book.hasOwnProperty("hasOwnProperty"));