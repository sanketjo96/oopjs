/** 
 * Another way for setting up class infrastructure.
 * 
 * Note how we can provide controlled access to data
*/
function Son(name) {
    Object.defineProperty(this, "name", {
        get: function() {
            // verify user
            console.log('get: lets check user') 
            return name;
        },
        set: function(newName) {
            console.log('set: lets check user') 
            // verify user 
            name = newName
        }
    })
}

const son = new Son('Prakash') 
console.log(son.name);
son.name = 'SomeOtherName';
console.log(son.name);