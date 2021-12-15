let hash = "#"


while (hash.length < 7) {
    console.log(hash)
    hash = hash + "#"
}


for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    }
    else {
        console.log(i)
    }
}

let string = ""
let height = 8
let width = 8

for (let height = 1; height <= 8; height++) {
    for (let width = 1; width <= 8; width++) {
        string.length % 2 === 0 ? string += "#" : string += " "
    }
    string += "\n"
}

console.log(string)