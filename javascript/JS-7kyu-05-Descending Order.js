/*
  Kata-name => Descending Order

Description => Your task is to make a function that can take any non-negative integer as an argument and return
               it with its digits in descending order.
               Essentially, rearrange the digits to create the highest possible number.

   Examples => {
               Input: 123456789 Output: 987654321
   }
*/ //=========================================================

function descendingOrder(n) {
    // число преобразуем в строку, разбиваем на массив, сортируем, и собираем массив обратно в строку
    let res = ('' + n).split('').sort((a, b) => b - a).join('')
    // число-строку преобразуем в число и возвращаем
    return +res
}