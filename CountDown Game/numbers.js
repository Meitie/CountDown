let smallNum = document.querySelector('.smallNum')
let bigNum = document.querySelector('.bigNum')
let numbersShown = document.querySelector('.numbersShown')
let showSumNum = document.querySelector('.showSumNum')
let generateSum = document.querySelector('.generateSum')
let resetNum = document.querySelector('.resetNum')

const bigNumbers = [25, 50, 75, 100];
const smallNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let allNumbers = []
let sumToGet = 0

resetNum.addEventListener("click", function() {
    allNumbers = []
    sumToGet = 0;
    showSumNum.innerHTML = `000`
    numbersShown.innerHTML = ``
})

generateSum.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 899) + 100
    showSumNum.innerHTML = `${randomNumber}`
})

let generateNumbers = (type) => {
    let randomNumber = Math.floor((Math.random() * (type === 'bignum' ? 4 : 20)))

    if (allNumbers.length < 6) {
        switch (type) {
            case 'smallnum':
                allNumbers.push(`<span class="indiLetters">${smallNumbers[randomNumber]}</span>`)
                break;
            case 'bignum':
                allNumbers.push(`<span class="indiLetters">${bigNumbers[randomNumber]}</span>`)
                break;
        }
        numbersShown.innerHTML = allNumbers.join(" ")
    }
}

smallNum.addEventListener("click", function() {
    generateNumbers('smallnum')
})

bigNum.addEventListener("click", function() {
    generateNumbers('bignum')
})