/*
  Kata-name => Highest and Lowest

Description => In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number

   Examples => {
               highAndLow("1 2 3 4 5")     return "5 1"
   }
*/ //=========================================================

function highAndLow(numbers) {
    let arr = numbers.split(' ')
    let max = arr[0]
    let min = arr[0]

    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i]
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return `${max} ${min}`
}

// guru answer

function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number)
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers)
}

// new
function practice(num) {
    num = num.split(' ').sort((a, b) => a - b)
    return '' + num[num.length - 1] + ' ' + num[0]
}