/*
  Kata-name => Vowel Count

Description => Return the number (count) of vowels in the given string..

*/ //=========================================================

function getCount(str) {
    var vowelsCount = 0
    let act1 = str.split('')
    for (let i = 0; i < act1.length; i++) {
        if (act1[i] == 'a' || act1[i] == 'e' || act1[i] == 'i' || act1[i] == 'o' || act1[i] == 'u') {
            vowelsCount++
        }
    }
    return vowelsCount
}

function maker1(str) {
    return str.match(/[aeouiyAEOUIY]/g).length
}

// guru answer

function quest1(str) {
    let act1 = str.split('')
    let counter = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < act1.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (act1[i] === vowels[j]) {
                counter++
            }
        }
    }
    return counter
}