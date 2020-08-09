let lettersBtn = document.querySelector(".letterGame")
let numbersBtn = document.querySelector(".numberGame")
let letters = document.querySelector(".letters")
let numbers = document.querySelector(".numbers")

lettersBtn.addEventListener("click", function(event){
    numbers.style.display = 'none'
    letters.style.display = 'block'
})

numbersBtn.addEventListener("click", function(event){
    letters.style.display = 'none'
    numbers.style.display = 'block'
})

lettersBtn.click();
