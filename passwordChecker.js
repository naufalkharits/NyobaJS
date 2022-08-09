const passwordFormat = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

// cara-1
// function passwordChecker(givenPassword) {
//     if (!givenPassword) {
//         return `Error: Bro where is the parameter?`
//     } else if (passwordFormat.test(givenPassword)) {
//         return true
//     } else {
//         return false
//     }
// }

// cara-2
const passwordChecker = (givenPassword) =>
  !givenPassword
    ? `Error: Bro where is the parameter?`
    : passwordFormat.test(givenPassword)
    ? true
    : false

console.log(passwordChecker("Meong2021"))
console.log(passwordChecker("meong2021"))
console.log(passwordChecker("@eong"))
console.log(passwordChecker("Meong2"))
console.log(passwordChecker(0))
console.log(passwordChecker())
