let consonantsBtn = document.querySelector('.consonants')
let vowelsBtn = document.querySelector('.vowels')
let lettersShown = document.querySelector('.lettersShown')
let lettersReset = document.querySelector('.lettersReset')

const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
const vowels = ['A', 'E', 'I', 'O', 'U']
let randomLetters = []

lettersReset.addEventListener("click", function() {
    randomLetters = []
    lettersShown.innerHTML = ""
})


let newLetter = (type) => {
    let randomNumber = Math.floor((Math.random() * (type === 'vowel' ? 5 : 21)))

    if (randomLetters.length < 9) {
        switch (type) {
            case 'vowel':
                randomLetters.push(`<span class="indiLetters">${vowels[randomNumber]}</span>`)
                break;
            case 'consonant':
                randomLetters.push(`<span class="indiLetters">${consonants[randomNumber]}</span>`)
                break;
        }
        lettersShown.innerHTML = randomLetters.join(` `)
    }
}

vowelsBtn.addEventListener("click", function() {
    newLetter('vowel')
});
consonantsBtn.addEventListener("click", function() {
    newLetter('consonant')
});


//FIRST ATTEMPT
// vowelsBtn.addEventListener("click", function() {
//     let randomNumber = Math.floor((Math.random() * 5))
//     if (randomLetters.length < 9) {
//         randomLetters.push(vowels[randomNumber])
//         lettersShown.innerHTML = randomLetters.join(" ")
//     }
// });
// consonantsBtn.addEventListener("click", function() {
//     let randomNumber = Math.floor((Math.random() * 21))
//     if (randomLetters.length < 9) {
//         randomLetters.push(consonants[randomNumber])
//         lettersShown.innerHTML = randomLetters.join(" ")
//     }
// });