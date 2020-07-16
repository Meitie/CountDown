let timer = document.querySelector('.timer')
let timerBtn = document.querySelector('.timerBtn')
let timerReset = document.querySelector('.timerReset')
let body = document.querySelector('.body')

let timerID
let timeLeft = 29

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerID)
        body.style.background = 'red'
    } else {
        if (timeLeft >= 10) {
            timer.innerHTML = '00:' + timeLeft
            timeLeft--
        } else {
            timer.innerHTML = '00:0' + timeLeft
            timeLeft--
        }
    }
}

timerBtn.addEventListener("click", function() {
    timerID = setInterval(countdown, 1000)
})

timerReset.addEventListener("click", function() {
    timer.innerHTML = "00:30"
    timeLeft = 29
    clearTimeout(timerID)
    body.style.background = "#00A2E8"
})