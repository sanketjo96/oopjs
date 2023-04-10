/**
 * Method with same name in child class overrides the one in base class
 * however its possible to call method of base class if required.
 * 
 */

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
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
        return `${super.toString()} and specifically I m Square`;
    }
}

const rect = new Rectangle(5, 10);
const squ = new Square(6)

console.log(rect.toString())
console.log(squ.toString())
