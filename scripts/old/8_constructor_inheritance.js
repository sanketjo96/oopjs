/**
 * 1. Note how we are chaining prototype and setup inheritance
 * 
 */

function Rectangle() {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.width;
}

Rectangle.prototype.toString = function () {
    return "I am Rectangle"
}


function Square(side) {
    this.length = side;
    this.width = side;
}

Square.prototype = new Rectangle();

Square.prototype.toString = function () {
    return "I am Square"
}

const rect = new Rectangle(5, 10);
const squ = new Square(6)

console.log(rect)
console.log(squ)

// What will be output here ?
console.log(squ instanceof Square)