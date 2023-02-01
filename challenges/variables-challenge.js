/* 
    ? Challenge
    * Declare a variable called favoriteMovies. This variable should be a string of at least five different movies.
    * Extrapolate at least two movies from favoriteMovies and assign those values to new variables.
    * In those new variables, reassign variable value so that the name of the movie has its last letter capitalized
*/

let favoriteMovies = `hustle, spider man, avatar, chronicles, flash`
let firstMovie = favoriteMovies.slice(0, 6)
console.log(firstMovie)
let secondMovie = favoriteMovies.slice(8, 18)
console.log(secondMovie)

firstMovie = firstMovie.slice(0, 5) + firstMovie.charAt(firstMovie.length - 1).toUpperCase()
console.log(firstMovie)


// let count = 0
// let counter = setInterval(() => {
//     count++
//     console.log(count)
//     count < 180 ? null : clearInterval(counter)
// }, 1000);