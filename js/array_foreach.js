
function print_name(name) {
    console.log(name)
    console.log(name.length)
}

let names = ["Java", "TypeScript", "Python"]

// names.forEach(print_name)

// Anonymous function 
names.forEach( 
    function(name) { 
        console.log(name)
    }
)

// Arrow function 
names.forEach( name => console.log(name.toUpperCase()))
    
