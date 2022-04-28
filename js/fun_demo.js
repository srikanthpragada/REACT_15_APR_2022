
function add(a, b) {
    return a + b
}

function multiply(a, b = 2) {
    console.log(a)
    return  a * b
}

console.log(add(10, 20))
console.log(multiply(10, 20))
console.log(multiply(20))
console.log(multiply())