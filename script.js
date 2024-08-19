function squareDigits(num){
    num = num.toString()
    console.log(num);
    
    let numbers = num.split('')
    let squarenum = []
    for (let i = 0; i < numbers.length; i++) {
        ans = numbers[i] * numbers[i]
        squarenum.push(ans)
    }
    return Number(squarenum.join(''))
  }

console.log(squareDigits(0));



// function getCount(str) {
//     let vowlcount = 0
//     let words = str.split('')
//     for (let i = 0; i < words.length; i++) {
//         if(/[aiueo]/.test(words[i])) {
//             vowlcount++
//         }
//     }
//     return vowlcount
// }

// function getCount(str) {
//     return str.match(/[aiueo]/ig).length
// }

// console.log(getCount("sadatokikaisei"));

// function replacetext(text) {
//     let newText = text.replace(/[aiueo]/ig, "")
//     return newText
// }

// console.log(replacetext("I am sadatokikaisei"));



