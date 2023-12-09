function printerError(s) {

    let count = 0;

    for (let i = 0; i <s.length; i++) {

        if(/[n-z]/.test(s[i])) {
            count++
        }

    }


    return `${count}/${s.length}`
}

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))