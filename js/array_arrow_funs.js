
let marks = [60, 55, 34, 23, 80]

let selectedMarks = marks.filter(m => m >= 50)

console.log(selectedMarks)

let results = marks.map( m =>  m >= 50 ? 'Pass' : 'Fail')

console.log(results)

console.log( marks.find( v => v % 2 == 1) )