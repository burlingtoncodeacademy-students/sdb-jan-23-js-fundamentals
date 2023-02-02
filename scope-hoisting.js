// ? Scope & Hoisting

/* 
    Scope is used to determine how information in different blocks of code can be accessed.

    Five types of scope:
    * Global/window
    * Block
    * Function
    * Module
    * Lexical

*/

// ? Global Scope

/* 
    * outermost scope
    * window object when in client
    * js file when in node
    * accessible from every other scope
*/

let globalScopeVar = "This is a global scope variable"

// ? Function Scope

/* 
    * accessible only insde of the function
*/

function scope() {
    let fxsv = "This is a fx scope variable"
    console.log(fxsv)
    console.log(globalScopeVar)
}

scope()

// console.log(fxsv) // Reference Error
// Cannot access fx scope from global scope

// ? Block Scope

/* 
    * Can be anywhere there are { }
    * Can be put anywhere
*/

{
    let bsv = "Block scope variable."
    console.log(bsv)
}

// console.log(bsv) // Reference Error

// ? Lexical Scope

/* 
    * variables are accessible by their nested position
    * inner fx scope can access outer fx scope
*/

function outerFx() {
    // outer scope
    let ofxv = "Outer fx scope variable"

    function innerFx() {
        // inner scope
        let ifxv = "Inner fx scope variable"
        console.log(ofxv)
        return ifxv
    }

    return innerFx()
}

console.log(outerFx())

// ? Module Scope

/* 
    * encapsulates objects nested inside of other modules or files
    * allows the use in other files.
*/

const states = require("./states")
console.log(states)

let indiana = states[0]
console.log(indiana)

// ? Hoisting

/* 
    * JS' parsing engine reads top to bottom, left to right
    * JS' interpreter runs the code twice.
        * First, it looks for VARiables and fx declarations & hoists them
        * It allocates memory space to those declarations
        * Then it executes the code line-by-line
*/

// console.log(myName) // Reference Error: cannot access before initilization
let myName = "Paul Niemczyk"
console.log(myName)

console.log(isTeacher) // Returns undefined
var isTeacher = true
// console.log(isTeacher)

// ? Function Declarations ARE hoisted

displayName("Paul")

function displayName(str) {
    console.log(`Hello, ${str}`)
}

displayName("John")

console.log(returnName("paul"))

function returnName(name) {
    return capitalize(name)
}

function capitalize(str) {
    return str.toUpperCase()
}

// ? Function Expressions are NOT hoisted

// console.log(returnNameExpression("Tyler")) // Reference Error

let returnNameExpression = function(name) {
    return capitalizeExpression(name)
}

// console.log(returnNameExpression("Paul")) // Reference Error

let capitalizeExpression = function(str) {
    return str.toUpperCase()
}

console.log(returnNameExpression("Paul"))

function run() {
    var foo = "foo"
    let bar = "bar"
    var tyler = "Hey Tyler!"
    console.log(foo, bar)
    {
        var moo = "moo"
        let baz = "baz"
        console.log(moo, baz)
    }
    console.log(moo) // Works: scoped to immediate function
    // console.log(baz) // Reference Error: scoped to block
}

run()

// console.log(tyler) // Reference Error: scoped to run function

{
    {
        var something = "This is something"
    }
}

console.log(something) // Runs because global scope is a function

// ! THIS IS BAD! Don't use hoisting to your "benefit"!

/* 
    JS Objects NOT hoisted
    * let
    * const
    * fx expressions
    * all classes (both declaration and expression)
*/


