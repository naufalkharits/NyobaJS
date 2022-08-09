const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// cara-1
// function emailChecker(email) {
//     if (!email) {
//         return `Error: Bro where is the parameter?`
//     } else if (emailFormat.test(email)) {
//         return `VALID`
//     } else {
//         return `INVALID`
//     }
// }

// cara-2
const emailChecker = (email) =>
  !email
    ? `Error: Bro where is the parameter?`
    : emailFormat.test(email)
    ? `VALID`
    : `INVALID`

console.log(emailChecker(`apranata@binar.co.id`))
console.log(emailChecker(`apranata@binar.com`))
console.log(emailChecker(`apranata@binar`))
console.log(emailChecker(`apranata`))
// console.log(checkTypeNumber(emailChecker(3322))); // ERROR: function tidak ditemukan
console.log(emailChecker())
console.log(emailChecker(``))
