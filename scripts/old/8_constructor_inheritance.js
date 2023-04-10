/**
 * 1. Note how we are chaining prototype and setup inheritance
 * 
 */

function Rectangle(length, width) {
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
// Square.prototype.constructor = Square;
Square.prototype.toString = function () {
    return "I am Square"
}

const rect = new Rectangle(5, 10);
const squ = new Square(6)

console.log(rect.getArea())
console.log(rect.toString())

console.log(squ.getArea())
console.log(squ.toString())


// What will be output here ?
console.log(squ instanceof Square)
// console.log(squ.constructor === Rectangle)