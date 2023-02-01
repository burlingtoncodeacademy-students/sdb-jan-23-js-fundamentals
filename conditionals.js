// ? Conditionals & Logic Gates

/* 
    * Conditional statements check if an expression is truthy
    * The expression must always resolve to true
    * If it's truthy, a code within a statement executes
    * If an expression is false, nothing happens unless we specify otherwise
*/

// ? Falsey Values

/* 
    Falsey value is one that is considered false in Boolean context

    If JS expects false boolean, it can return the following:
    * false
    * 0
    * "", '', ``
    * undefined
    * null
    * NaN
*/

/* 
    ? If Statement
    * Checks if something is true and executes code
*/

let lightSwitch = "on"

if (lightSwitch) {
    console.log("The light is on")
}

/* 
    ? Else If Statement
    * Allows us to do add additional condition if the prior one has not been satisfied
*/

/* 
    ? Else Statement
    * If all else fails, execute this code
*/

let temp = "The house is on fire"

if (temp >= 50) {
    console.log("It's nice out")
} else if (temp < 50 && temp > 32) {
    console.log("Temp is really gettin' down")
} else if (temp <= 32) {
    console.log("Watch out for ice!")
} else {
    console.log(`${temp} is not a valid temperature range`)
}

/* 
    ? SYNTAX:

    if (conditionIsTrue) {
        execute this code block
    } else if (conditionIsTrue) {
        execute this code block
    } else {
        execute this code block
    }

*/

/* 
    ? Logical Operators NOT AND OR
    * OR Operator ( || )
        * true if one of the conditions is true
        * ex: I will be happy if I go to the movies or eat dinner
        * (dinner & movies = true)
        * (no dinner & movies = true)
        * (dinner & no movie = true)
        * (no dinner & no movie = false)
    * AND Operator ( && )
        * true if both conditions are true
        * ex: I will be happy if I got to the movies and eat dinner
        * (dinner and movies = true)
        * (no dinner and movies = false)
        * (dinner and no movies = false)
        * (no dinner and no movies = false)
    * NOT operator ( ! )
        * flips the logical expression
*/

// NOT Example

lightSwitch = false

if (!lightSwitch) {
    // (lightSwitch == false)
    // (!lightSwitch)
    // (lightSwitch != true)
    // All of the above mean the same thing
    console.log("light switch is off")
}

// AND Example

let home = true
lightSwitch = false

if (home && lightSwitch) {
    // (home == true && lightSwitch == true)
    console.log("You're home and the lights are on")
} else if (home && !lightSwitch) {
    // (home == true && lightSwitch == false)
    console.log("You forgot to turn on the lights")
} else if (!home && lightSwitch) {
    // (home == false && lightSwitch == true)
    console.log("You forgot to turn off the lights")
} else {
    console.log("Home is empty and lights are off")
}

// OR Example

if (!home || !lightSwitch) {
    console.log(`Home value is: ${home} and Light Switch value is: ${lightSwitch}`)
}

/* 
    ? Challenge

    * Create a condition that will check the user's age and insurance status:
    * If the user is under 16, they can't drive
    * If the user is 16 thru 18, and they're male their insurance is highest
    * If the user is 16 thru 18, and they're female their insurance is high
    * If the user is older than 18 but less than 21 and they're male, their insurance is average
    * If the user is older than 18 but less than 21 and they're female, their insurance is below average
    * If they're over 21 regardless whether male or female, the insurance is low.
*/

let age = 19
let gender = "male"

if (age < 16) {
    console.log("You cannot drive")
} else if (age >= 16 && age < 18) {
    if (gender === "male") {
        console.log("Your insurance is the highest")
    } else if (gender === "female") {
        console.log("Your insurance is high")
    }
} else if (age >= 18 && age < 21 && gender === "male") {
    console.log("Your insurance is average")
} else if (age >= 18 && age < 21 && gender === "female") {
    console.log("Your insurance is below average")
} else if (age >= 21) {
    console.log("You got good rates")
}

// ? Ternaries

/* 
    * A quick way of creating an if/else conditional
    * Commonly used to check a quick condition
*/

let ignition = true
// true for "on" false for "off"

let ignitionCount = 0

if (ignition) {
    console.log("The car is on")
    ignitionCount = ignitionCount + 1
    console.log(`Ignition count: ${ignitionCount}`)
} else {
    console.log("The car is off")
}

ignition ? console.log("Car is on") : console.log("Car is off")

// Chaining Ternaries

let season = 2

if (season == 1) {
    console.log("spring")
} else if (season == 2) {
    console.log("summer")
} else if (season == 3) {
    console.log("autumn")
} else if (season == 4) {
    console.log("winter")
} else {
    console.log(`${season} is not an appropriate input`)
}

season == 1 ? console.log("spring")
            : season == 2 ? console.log("summer")
            : season == 3 ? console.log("autumn")
            : season == 4 ? console.log("winter")
            : null

// ! If you do not have an else statement, you must use a null.


/* 
    Ternary Syntax:

    conditional ? code block if true : code block if false

    conditional ? code block if true
                : else if statement ? code block if true
                : else if statement ? code block if true
                : else statement OR null

*/

/* 
    ? Ternary Challenge

    * Use the age from earlier to check if:
    * You're under 18 you're still a teenager
    * If you're over 18 you can travel but cannot drink
    * If you're over 21 you can drink alcohol
*/

age = 18;

age < 18 ? console.log("You're still a teenager")
        : age < 21 ? console.log("You can travel but not drink")
        : age >= 21 ? console.log("You can drink alcohol")
        : null

// ? Switch Statements

/* 
    Switches execute a block of code dependent upon a different case

    We ask a question that requires a specific response determined by our answer
*/

let uprightInstructor = "Paul"

switch(uprightInstructor) {
    // information that cases are compared against
    case "Paul":
        // condition that's compared against switch
        // execute the code below
        console.log(`${uprightInstructor} is a Lead SD Instructor`)
        break
        // used to stop other cases from evaluating
    case "Rob":
        console.log(`${uprightInstructor} is on vacation.`)
        break
    case "Matt":
        console.log(`${uprightInstructor} is an Operations Manager`)
        break
    default:
        console.log(`${uprightInstructor} may or may not work here.`)
}

