// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
    let maxNumber = num1
    if (num2 > maxNumber) {
        maxNumber = num2
    }
    if (num3 > maxNumber) {
        maxNumber = num3
    }

    return maxNumber
}

