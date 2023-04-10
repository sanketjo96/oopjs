// Crete class FATHER with name, empid parameter and getSal as method
// Crete class SON with name parameter and play as method

class Father {
    constructor(name, id, sal) {
        this.name = name;
        this.id = id;
        this.sal = sal;
    }

    getSal() {
        return this.sal;
    }
}

class Son extends Father {
    constructor(name, rank) {
        super(name);
        this.rank = rank;
    }

    getSal() {
        return 'i am not earing';
    }

    play() {
        return "I am playing";
    }
}

const son = new Son('sanket', 1);

console.log(son);
console.log(son.getSal())
