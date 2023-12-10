/*
  Kata-name => Disemvowel Trolls

Description => Trolls are attacking your comment section!
               A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
               Your task is to write a function that takes a string and return a new string with all vowels removed.

   Examples => {
              For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
              Note: for this kata y isn't considered a vowel.
   }
*/ //=========================================================

function disemvowel(str) {
    let arr = str.split('')
    let emptyARR = []

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 'a' && arr[i] !== 'e' && arr[i] !== 'i' && arr[i] !== 'o' && arr[i] !== 'u' && arr[i] !== 'A' && arr[i] !== 'E' && arr[i] !== 'I' && arr[i] !== 'O' && arr[i] !== 'U') {
            emptyARR.push(arr[i])
        }

    }

    return emptyARR.join('')
}

function make3(str) {
    const vowels = 'aeouiy'
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i].toLowerCase() === vowels[j]) {
                str = str.replace(str[i], '*')
            }
        }
    }
    return str.split('*').join('')
}

// guru answer

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
}