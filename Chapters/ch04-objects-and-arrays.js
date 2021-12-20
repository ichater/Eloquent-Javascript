import { JOURNAL } from "./data/ch04-data.js"

// console.log(
//     JOURNAL.filter(j => j.events.filter(
//         j => j.includes("pudding")) && !j.squirrel))


// const uniqueEventsArr = arr => arr.map(j => j.events)
//     .reduce((acc, cur) => cur.concat(acc))
//     .filter((e, i, self) => self.indexOf(e) === i)

// // console.log(uniqueEventsArr(JOURNAL))

// const range = (start, end) => {
//     const arr = []
//     for (let i = start; i <= end; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// // console.log(range(1, 10))

// // const sum = arr => arr.reduce((acc, cur) => acc + cur)

// // // console.log(sum(range(1, 10)));

// const rangeStep = (start, end, step) => {
//     const arr = []
//     const positiveLoop = () => {
//         for (let i = start; i <= end; step ? i += step : i++) {
//             arr.push(i)
//         }
//     }
//     const negativeLoop = () => {
//         for (let i = start; i >= end; step ? i += step : i--) {
//             arr.push(i)
//         }
//     }

//     start < end ? positiveLoop() : negativeLoop()

//     return arr
// }

// console.log(rangeStep(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(rangeStep(1, 10, 2))

// console.log(rangeStep(5, -112, -2));
// → [5, 4, 3, 2]
// console.log(sum(rangeStep(1, 10)));
// → 55

// const fn = (one, two) => two ? `${two}` : `${two}`

// console.log(fn("hello"))

// const reverseArray = (arr) => new Array(arr.reverse())

// console.log(reverseArray(["A", "B", "C"]));

// const reverseArrayInPlace = (arr) => arr.reverse()

// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

// let list = {
//     value: 1,
//     rest: {
//         value: 2,
//         rest: {
//             value: 3,
//             rest: null
//         }
//     }
// };


const arrayToList = (arr) => {
    const [value, ...rest] = arr
    return rest.length ? { value, rest: arrayToList(rest) } : { value, rest: null }
}

const listToArray = (list) => {
    const { value, ...rest } = list
    return rest.rest ? [value, ...listToArray(rest.rest)] : [value]
}

const prepend = (e, list) => (
    list !== null ? { value: e, rest: { ...list } } : { value: e, rest: { rest: null } }
)

const nth = (arr, index) => listToArray(arr)[index]



// console.log(arrayToList([10, 20, 30, 40]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30, 40])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // // → 20

function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (
            areObjects && !deepEqual(val1, val2) ||
            !areObjects && val1 !== val2
        ) {
            return false;
        }
    }
    return true;
}
const isObject = (object) => object != null && typeof object === 'object';



let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true