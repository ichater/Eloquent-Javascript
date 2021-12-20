// let hash = "#"


// while (hash.length < 7) {
//     console.log(hash)
//     hash = hash + "#"
// }


// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log("FizzBuzz")
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("buzz")
//     }
//     else {
//         console.log(i)
//     }
// }

let string = ""
let height = 8
let width = 8

for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
        string.length % 2 === 0 ? string += "#" : string += " "
    }
    string += "\n"
}

console.log(string)