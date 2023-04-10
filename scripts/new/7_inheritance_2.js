/**
 * 1. Note how we are using class, extends and super to link the chain
 * 2. Method overriding is possible.
 * 3. No need of do stuff manually and maintain constructor identity.
 * 
 */

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    toString() {
        return "I m Rectangle"
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length)
    }

    toString() {
        return "I m Square"
    }
}

const rect = new Rectangle(5, 10);
const squ = new Square(6)

console.log(rect.getArea())
console.log(rect.toString())

console.log(squ.getArea())
console.log(squ.toString())

// console.log(squ instanceof Square)
// console.log(squ.constructor === Square)
// console.log(Square.prototype.__proto__ === Rectangle.prototype)