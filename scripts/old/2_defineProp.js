/** 
 * Another way for setting up class infrastructure.
 * 
 * Note how we can provide controlled access to data
*/
function Son(name) {
    Object.defineProperties(this, "name", {
        get: function() {
            return name;
        },
        set: function(newName) {
            name = newName
        }
    })
}

const son = new Son('Prakash') 
console.log(son.name);
son.name = 'SomeOtherName';
console.log(son.name);