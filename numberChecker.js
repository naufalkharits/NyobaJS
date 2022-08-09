// cara-1
// function numberChecker(givenNumber) {
//     const winner = typeof givenNumber == "number" && givenNumber % 2 === 0 ? `GENAP` : typeof givenNumber == "number" && givenNumber % 2 !== 0 ? `GANJIL` : `Error: Invalid data type`
//     return winner
// }

// cara-2
const numberChecker = (givenNumber) =>
  typeof givenNumber == "number" && givenNumber % 2 === 0
    ? `GENAP`
    : typeof givenNumber == "number" && givenNumber % 2 !== 0
    ? `GANJIL`
    : givenNumber == null
    ? `Error: Bro where is the parameter?`
    : `Error: Invalid data type`

console.log(numberChecker(10))
console.log(numberChecker(3))
console.log(numberChecker("3"))
console.log(numberChecker({}))
console.log(numberChecker([]))
console.log(numberChecker())
