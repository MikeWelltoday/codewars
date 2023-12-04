/*
  Kata-name => Square Every Digit

Description => Welcome. In this kata, you are asked to square every digit of a number and concatenate them

   Examples => {
      For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
   }
*/ //=========================================================

function squareDigits(num) {
    let arr = String(num).split('').map(item => item * item).join('')
    return Number(arr)
}

function maker2(num) {
    let res = ''
    num = String(num)
    for (let i = 0; i < num.length; i++) {
        res = res + (num[i] ** 2)
    }
    return Number(res)
}

function maker22(num) {
    return Number(String(num).split('').map(item => item ** 2).join(''))
}