class Vec {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    plus(newVector) {
        return new Vec(this.x + newVector.x, this.y + newVector.y)
    }
    minus(newVector) {
        return new Vec(this.x - newVector.x, this.y - newVector.y)
    }
    get length() {
        const squared = (this.x * this.x + this.y * this.y)
        return Math.sqrt(squared)
    }
}



// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5

class Group {
    constructor() { this.arr = [] }

    add(value) {
        this.arr = [value, ...this.arr]
        return this.arr
    }

    delete(value) {
        this.arr = this.arr.filter(e => e !== value)
        return this.arr
    }

    has(value) { return this.arr.includes(value) }

    static from(iterable) {
        let group = new Group();
        for (let element of iterable) {
            group.add(element);
        }
        return group;
    }

    [Symbol.iterator]() {
        // Makes Group class iterable and thus, can be utilized in for/of loops.
        return new GroupIterator(this);
    }
}

class GroupIterator {

    constructor(group) {
        this.currentIndex = 0;
        this.group = group;
    }

    next() {
        // next() returns an object containing two properties: `value` (Any type) & `done` (boolean).

        if (this.currentIndex == this.group.arr.length) {
            return { done: true };  // Equivalent to {value: undefined, done: true}
        }
        else {
            let value = this.group.arr[this.currentIndex];
            this.currentIndex += 1;

            return { value, done: false };
        }
    }
}


// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
// }
// console.log(group.has(10))
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// console.log(group)
// group.delete(10);
// console.log(group)
// console.log(group.has(10));
// // → false
// console.log(group.has(20));

let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call
// console.log(Object.hasOwnProperty.call(map, " "));
// → true
