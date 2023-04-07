/** 
 * Note how we are putting class props and method
 * inside and not polluting global space. 
*/
function Son(name) {
    this.name = name;
    this.sayName = function() {
        return this.name;
    }
}

const son = new Son('Prakash') 
console.log(son.sayName());