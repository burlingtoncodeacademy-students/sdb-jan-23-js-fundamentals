// ? Variables

/* 
    Containers that store data in memory
    * declaration
        * allows memory space to be reserved
        * starts with let, var, or const
        * cannot start with a number or characters other than $ or _
        * if no value is assigned, it's undefined
    * initilization
        * assignment of data value
        * can be any value or data type (str, int, arr, fx, class, etc.)
        * can be reassigned (except for const)
*/

// Variable Declaration
let firstName
console.log(firstName)

// Variable Declaration and variable initilization
let lastName = "Niemczyk"
console.log(lastName)

// Reassignment
firstName = "Paul"

// ? String Concatenation
// let fullName = firstName + " " + lastName
// console.log(fullName)

// ? String Interpolation
let fullName = `${firstName} ${lastName}`
console.log(fullName)

// (a) (b) (c)            (d)
let address = "123 Main St, Salem, MA"
    // (e)  =     (f)
// (a) - keyword
// (b) - variable identifier
// (c) - assignment operator
// (d) - value or initializer
// (e) - variable declaration
// (f) - variable initiliaztion or value assignment

// Var is hoisted whereas let is not
// ! Don't use if you can avoid it
var age = 26
console.log(age)

// ? Const variable CANNOT have a reassigned value
const ssn = "123-45-6789"
// ssn = "invalid ssn"
// console.log(ssn) // TypeError: cannot reassign a const

/* 
    ? Coding Practices for Variables
    * be concise (ex: firstName instead of usersFirstName)
    * be specific (ex: value instead of i)
    * utilize camelCase (most popular in JS)
    * snake_case
    * PascalCase, or
    * skewer-case
    * nocase, or
    * SCREAMING_CASE
*/

/* 
    Challenge

    Set a few variables:
    fName, lName, houseNumber, aptNumber (if applicable)
    street, city, state, post code

    Once done, concatenate or interpolate them together into new variable to create your address stamp

    Create a new variable that utilizes all of those variable values

    Console log it

    !SPICEY MODE - assign the value of state to be lowercase but when you console log your address stamp, utilize a method to make sure it's capitalized.

    58ish

*/

let fName = "Jose"
let lName = "Rodriguez"
let street = "123 Damen Rd"
let city = "Northampton"
let state = "ma"
let zip = "01060"
console.log(fName, lName, street, city, state, zip)

let addressStampConcatenated = fName + " " + lName + " " + street + " " + city + " " + state.toUpperCase() + " " + zip
console.log(addressStampConcatenated)

let addressStampInterpolated = `${fName} ${lName} \n ${street} ${city}, ${state.toUpperCase()} ${zip}`
console.log(addressStampInterpolated)


// let count = 0
// let timer = setInterval(() => {
//     count++
//     console.log(count)
//     if (count >= 60) {
//         clearInterval(timer)
//     }
// }, 1000);