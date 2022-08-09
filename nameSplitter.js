// cara-1
const nameSplitter = (givenNumber) => {
  if (givenNumber) {
    const splitName = givenNumber.toString().split(` `)
    if (splitName.length <= 3) {
      let splitObj = {}
      splitObj.firstName = splitName[0]
      splitObj.middleName = !splitName[2]
        ? null
        : !splitName[1]
        ? null
        : splitName[1]
      splitObj.lastName = !splitName[2] && !splitName[1] ? null : splitName[1]
      return splitObj
    } else {
      return `ERROR`
    }
  } else {
    return `ERROR`
  }
}

console.log(nameSplitter("Aldi Daniela Pramata"))
console.log(nameSplitter("Dwi Kuncoro"))
console.log(nameSplitter("Aurora"))
console.log(nameSplitter("Aurora Aureliya Sukma Darma"))
console.log(nameSplitter(0))
