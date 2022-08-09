// cara-1
// function getSecondLargest(dataNumbers) {
//     if (dataNumbers) {
//         // NOTE manually sorting
//         const distinct = [...new Set(dataNumbers)];
//         const distinctSorted = distinct.sort((a, b) => a - b);
//         return distinctSorted[distinctSorted.length - 2];
//     } else {
//         return `ERROR :`
//     }
// }

// cara-2
const getSecondLargest = (dataNumbers) => {
  if (dataNumbers) {
    // NOTE without manually sorting
    const distinct = [...new Set(dataNumbers)]
    const maxNum = Math.max(...distinct)
    const filteredMaxOut = distinct.filter((num) => num < maxNum)
    const secondMax = Math.max(...filteredMaxOut)
    return secondMax
  } else {
    return `ERROR :`
  }
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]
const dataAngkaCopy1 = [9, 4, 7, 7, 4, 3, 2, 2, 8, 9, 10, 10]
const dataAngkaCopy2 = [9, 4, 11, 12, 4, 3, 2, 2, 8, 9, 11, 10]

console.log(getSecondLargest(dataAngka))
console.log(getSecondLargest(dataAngkaCopy1))
console.log(getSecondLargest(dataAngkaCopy2))
console.log(getSecondLargest(0))
console.log(getSecondLargest())
