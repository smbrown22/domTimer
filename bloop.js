let start = document.getElementById('startTimer')
let stop = document.getElementById('stopTimer')
let reset = document.getElementById('resetTimer')
let timer = document.getElementById('timer')
let seconds = 0 

start.addEventListener('click' , function start() {
    timer.innerHTML = "Timer Start"
    let current = setInterval(function () {seconds++}, 1000);
    let time = setInterval(function () {timer.innerHTML = `${seconds}`}, 1000);
    
    stop.addEventListener('click' , function stop() {
        clearInterval(current)
        clearInterval(time)
    })

    reset.addEventListener('click' , function reset() {
        current = setInterval(function () {seconds++}, 1000);
        time = setInterval(function () {timer.innerHTML = `${seconds}`}, 1000);
        clearInterval(current)
        clearInterval(time)
    })

})

