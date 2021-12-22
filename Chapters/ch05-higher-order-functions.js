let arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(arrays.reduce((acc, cur) => acc.concat(cur)))
// → [1, 2, 3, 4, 5, 6]



const loop = (value, testFunction, bodyFunction, updateFunction) => {
    if (testFunction(value)) {
        updateFunction(value)
        bodyFunction(value)
        loop(bodyFunction(value), testFunction, bodyFunction, updateFunction)
    }

}

// loop(3, n => n > 0, n => n - 1, console.log);

const every = (array, test) => array.every(test)

const everyLoop = (array, test) => {

    for (let i = 0; i <= array.length - 1; i++) {
        if (test(array[i]) === false) {
            return false
        }
    }
    return true
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true
