// ? Functions

/* 
    ? A block of reusable code. It can:
    * take in parameters (doors to the inside of your fx)
    * perform an action
    * and return a result
    
    ? There are two types of functions:
        * function declaration
            * are hoisted
        * function expresssion
            * are not hoisted
    
    ? Functions
    * need to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming through the parameter is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined

    Syntax:

    function identifier(parameter, parameter, ...) {
        function code block
        return statement
    }

*/

function sayHello() {
    return "Hello January Cohort"
}

console.log(sayHello())

function greetStudent(student) {
    return `Hello, ${student}`
}

console.log(greetStudent("Paul"))
console.log(greetStudent("Tyler"))
console.log(greetStudent("Alex"))

function addNums(num1, num2) {
    let result = num1 + num2
    return result
}

console.log(addNums(4, 6))

// ? Function Expression

/* 
    * utilizes a variable as a placeholder

    let identifier = function(params) {
        code block
        return statement
    }

*/

let nameAge = function(name, age) {
    return `Your name is ${name} and you're ${age} years old.`
}

console.log(nameAge("Ian", 28))

/* 
    ? Challenge

    * Create a function that will give you a result of a quadratic formula based on all of the necessary factors.
    * Check if the data type is a Number. If not, return "please use whole numbers only"
    * Please return the result but also the value of the top and bottom seperately.
*/

function quadraticFormula(a, b, c) {
    let sqrtResult = Math.sqrt(b**2 - 4 * a * c)
    
    if (isNaN(sqrtResult)) {
        return "Please make sure you use whole numbers which result in a positive discriminant."
    } else {
        let addResult = (-b + sqrtResult) / 2 * a
        let subResult = (-b - sqrtResult) / 2 * a
        return `The solution is: ${(-b + sqrtResult) / 2 * a} and ${(-b - sqrtResult) / 2 * a}`
    }
}

console.log(quadraticFormula(1, -11, 24))

/* 
    Pythagoream Theorem Challenge

    * Right angle triangle has three sides
    * The longest side c is calculated by taking the sum of:
    * a**2 and b**2
    * The formula is as follows c = sqrt(a **2 + b **2)
    * Create a function that takes the two triangle sides
    * Return the hypotenuse
*/

function solvePy(a, b) {
    return Math.sqrt(Math.pow(a, 2) + b**2)
}

console.log(solvePy(5, 7))

// ? Arrow Functions

/* 
    * Introduced in ES6
    * Concise way of writing functions
    * Part of fx expression family
    * Do not bind to .this or super (more on that in Classes)
*/

// ? Concise Body Arrow Function

/* 
    * Can only have no or one parameter
    * Code block must not have { }
    * Return statement must be implicit
*/

let greetEveryone = () => `Hello everyone!`
console.log(greetEveryone())

let greetDoctor = drName => `Hello, Dr. ${drName}`
console.log(greetDoctor("Paul"))

// ? Block Body Arrow Functions

let concatenateString = (str1, str2) => {
    if (typeof str1 == "string" && typeof str2 == "string") {
        return str1 + str2
    } else {
        return `You can only pass string values as arguments`
    }
}

console.log(concatenateString("hello", 1));

// Immediately Invoked Function Expression (IIFE)

(function() {
    console.log("IIFE")
})()

console.log(concatenateString)

// FizzBuzz Challenge!
/*
  Create a function that takes a parameters called start and stop.
  Loop over numbers from start to stop
  If the number is divisible by 3, print "Fizz"
  If the number is divisible by 5, print "Buzz"
  If the number is divisible by 3 and 5, print "Fizz Buzz"
  If the number is not divisible, print the number only
  Invoke your function to make sure it works.
*/

function fizzBuzz(start, stop) {
    
    for (i = start; i <= stop; i++) {
        i % 15 == 0 ? console.log("FizzBuzz")
        : i % 5 == 0 ? console.log("Fizz")
        : i % 3 == 0 ? console.log("Buzz")
        : console.log(i)
    }
}

console.log(fizzBuzz(0, 100))