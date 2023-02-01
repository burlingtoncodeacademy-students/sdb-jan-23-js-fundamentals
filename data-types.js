// ? JavaScript

/*
    JS was founded in 1996 by Brandon Eich
    * client-side language (runs in the browser)
    * interpreted language, not compiled
    * first-class-function - functions are treated like any other variable
    * functional language
    * object-oriented language
    * prototype-based
    * imperative
    * ECMAScript - organization setting language standards
*/

// ? Comments

/* 
    * Blocks of code that are not being interpreted
    * Denoted by // for single-line
    * Denoted by /* for multi-line
    * Comments are read but not executed
    * As students, it helps us with note taking
    * As devs, it documents our code making it more maintainable
*/

// ? Console object

/* 
    * Gives us access ot the browser or node's debugging console.
    * Allows developer to view output from their program
*/

2 + 2 // runs but doesn't show in the console
console.log(2 + 2) // shows in the console

// ? Data Types

/* 
    ? JS Data Types:
        Primitive
            * string
            * number
            * boolean
            * null
            * undefined
            * Not a Number (NaN)
        Reference
            * array
            * object
*/

// Strings

/* 
    * Primitive data type representing characters (text)
    * Enclosed ' ', " ", or ` `
    
    Examples:
*/

console.log("This is a text")
console.log('This is also a text')
console.log(`Text using string interpolation backticks`)

// This is also a string representation of a number
console.log("2023")

// We can add (concatenate) strings
console.log("I'm Paul" + " and I'm 26 years old.")

// Strings are indexed starting from zero (0)
// index_value goes between [ ]
// ! Strings are immutable
console.log("Porschedoppelkupplungsgetriebe"[5])


/* 
    ? String Interpolation (` `)
    * A process of including space for an expression
    Syntax:
    ` String ${ expression } string ` 
*/

console.log(`My name is Paul and I am ${ 20 + 6 } years old`)

/* 
    ? String Methods
    .length
    .slice()
    .toUpperCase()
    .toLowerCase()
*/

console.log("----------------------")
console.log("Niemczyk".length)
console.log("Niemczyk".toUpperCase())
console.log("Paul Niemczyk".slice(0, 4))

/* 
    ? Checking data types using typeof operator
*/

console.log(typeof "1990") // returns string

// Multi-line strings
// Done using escape character "\n"

console.log("Paul Niemczyk \n 123 Main St \n 312 555 0808")

// ? Numbers

/* 
    Any integer or decimal
*/

console.log(25)
console.log(3.14)
console.log(typeof 1776)
console.log(0.2 + 0.1) // returns 0.300...04

// Booleans

/* 
    * Binary Value
    * Either true (on) or false (off)
    * Examples of falsey values:
        * 0
        * undefined
        * null
        * NaN
*/

console.log(true)
console.log(false)
console.log(2 == 2) // returns true
console.log(2 == 5) // returns false

// Boolean() interface returns whether value is truthy or falsey
console.log(Boolean(1)) // returns true
console.log(Boolean(0)) // returns false
console.log(Boolean(null)) // returns false
console.log(Boolean(undefined)) // returns false
console.log(Boolean("")) // returns false

// ? Type Coercion

/* 
    * JavaScript is a weakly-typed programming language
    * Doesn't require data type definition
    * Comparison operator (==) performs type coercion before resolving expression
    * We can use strict equality (===) to avoid type coercion
*/

// Type Coercion of number to str and str concatenation
console.log(2 == "2") // returns true ("22")

console.log(2 === "2") // returns falses

// ! know what type coercion is but DON'T USE IT!

// ? Null and Undefined

/* 
    * Null - explains the lack of existence (nothing)
    * Undefined - explains the lack of value
*/

// ? Operators

/* 
    * Addition (+)
    * Substraction (-)
    * Division (/)
    * Exponent (**)
    * Dot (.)
    * Modulo (%) --> more on it later
    * Assignment (=) single
    * Comparison (==) double
    * Strict Comparison (===) triple
*/

// ? Expressions
/* 
    * Unprocessed values grouped using the ( )
    * Evaluated to be truthy or falsey
    * Can be empty ( )

    * expressions evaluate
*/

// ? Statements
/* 
    * keyword
    * expression
    * and code block

    * statements evaluate and execute code block when invoked
*/

// ? Modulo (%)

/* 
    Checks for the remainder of long division
*/

console.log(12 % 3) // returns 0
console.log(12 % 5) // returns 2