// function multiplier(factor) {
//     return number => number * factor;
// }

// console.log(multiplier(3)(3))

// let twice = multiplier(2);
// console.log(twice(5));

// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) ||
//                 find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, "1");
// }

// console.log(findSolution(222));

// function printFarmInventory(cows, chickens) {
//     let cowString = String(cows);
//     while (cowString.length < 3) {
//         cowString = "0" + cowString;
//     }
//     console.log(`${cowString} Cows`);
//     let chickenString = String(chickens);
//     while (chickenString.length < 3) {
//         chickenString = "0" + chickenString;
//     }
//     console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(7, 11);

// The previous chapter introduced the standard function Math.min 
// that returns its smallest argument. We can build something like 
// that now. Write a function min that takes two arguments 
// and returns their minimum.

// const min = (a, b) => a < b ? a : b

// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10

// const isEven = (num) => {
//     if (num === 0) {
//         return true
//     } else if (num === 1) {
//         return false
//     } else {
//         return num < 0 ? isEven(num + 2) : isEven(num - 2)
//     }
// }


// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));

const countBs = (str) => {
    let bCount = 0
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === "B") {
            bCount += 1
        }
    }
    return bCount
}

const countChar = (str, num) => {
    let bCount = 0
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === num) {
            bCount += 1
        }
    }
    return bCount
}

const countBChar = (str) => countChar(str, "B")

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));

console.log(countBChar("BBC"));