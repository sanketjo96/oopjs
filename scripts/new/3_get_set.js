class Son {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }
}

const son = new Son('Prakash')
console.log(name);
son.name = 'Arjun';
console.log(son.name);