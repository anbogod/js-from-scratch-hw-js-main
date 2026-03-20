/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  str = str.trim()
  if (str === "") {
    return false
  }
  let hasDot = false
  let hasDigit = false
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      hasDigit = true
    } else if (str[i] === '.') {
      if (hasDot) {
        return false
      }
      hasDot = true
    } else if ((str[i] === "+" || str[i] === "-") && i === 0) {
    } else {
      return false
    }
  }
  return hasDigit
}

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
