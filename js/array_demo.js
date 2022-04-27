// Array Methods Demo 

let names = ["Java", "TypeScript", "Python"]
console.log(names.length)
console.log(names.includes("Python"))
console.log(names.indexOf("Python"))

names.push("JavaScript")
names.splice(1,1)  // remove element from 1st pos

// Print each value
for (var n of names)
    console.log(n)

names[2] = "C++"

console.log(names)


