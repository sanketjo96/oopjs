// What if you want to add up utility logic which 
// is related to class

class Task {
    static cacheTimeOut = 100;

    constructor(id) {
        this.id = id
    }

    getId() {
        return this.id;
    }

    static getClone(object) {
        // Its not possible to access instance member here
        // but static variables can be used.

        // console.log(Task.cacheTimeOut)
        // console.log(this.id)

        return new Task(
            object.id
        );
    }
}

const t1 = new Task(12);
const t2 = Task.getClone(t1)
console.log(t2)

// You cant invoke static methods using instance
// console.log(t2.getId())
// console.log(t2.getClone())