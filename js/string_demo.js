
var s = "Hello"
console.log(s.length)
// for(let i = 0; i < s.length; i ++) {
//    console.log(s[i]);
//    console.log(s.charCodeAt(i));
// }


console.log(s.includes('lo'))

console.log("abc,xyz,pqr".split(","))

for(let c of s) 
  console.log(c)

console.log("A..X...".replace(/\./g,"*"))