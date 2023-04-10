// Crete class TASK and pass id as only parameter to it
// Create 2 instances of above class and observe memory diag

class Task {
    delta = function (data) {
        return data * 100;
    };

    constructor(id) {
        this.id = this.delta(id);
    }

    getId() {
        return this.id;
    }
}

const t1 = new Task(123);
const t2 = new Task(456);

console.log(t1);

console.log(t2);