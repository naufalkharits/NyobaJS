// cara-1
// function wordChanger(selectedText, changeText, text) {
//     const changingWord = text.replace(selectedText, changeText)
//     return changingWord
// }

// cara-2
const wordChanger = (selectedText, changeText, text) =>
  text.replace(selectedText, changeText)

const kalimat1 = "Andini sangat mencintai kamu selamanya"
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu"

console.log(wordChanger("mencintai", "membenci", kalimat1))
console.log(wordChanger("bromo", "semeru", kalimat2))
