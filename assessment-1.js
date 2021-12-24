/*
Created by Wasupol Tungsakultong
 */
// string letters use to encode and decode
const stringToDecode = "acdefgilnoprstuw"

let deHash = (hash) => {
    // final String answer for letter
    var letter = ""
    // each position from hash to string
    var positions = []
    // loop hash and divide by 37 (reverse hash function from assignment)
    for (let i = 0; hash > 37; i++) {
        positions[i] = Math.floor(hash % 37)
        hash = hash / 37
    }

    for (let i = (positions.length - 1); i >= 0; i--) {
        letter += stringToDecode[positions[i]]
    }
    return letter
}
// test the deHash function
console.log(deHash(934605031880300))
console.log(deHash(677842960118))
console.log(deHash(1317985395605002507))
