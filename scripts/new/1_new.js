/** 
 * Note how we are putting class props and method
 * inside and not polluting global space. 
*/

class Son {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        return this.name;
    }
}

const son = new Son('Prakash') 
console.log(son.sayName());

// Under the hood we are still using proto type
console.log(son.sayName === Son.prototype.sayName)