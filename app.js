const start = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const time_list = document.querySelector('#time-list')
const time_game = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#1AA2B0', '#51797D', '#39E394', '#E6737A', '#B01A6E']
let time = 0
let score = 0

start.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up')
})

time_list.addEventListener('click', event => 
{
    if (event.target.classList.contains('time-btn')){
        time = parseInt(event.target.dataset.time)
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)

}

function decreaseTime(){
    if (time === 0){
        finishGame()
    }else{
        let current = --time
        if (current < 10){
            current = `0${current}`
        }
        setTime(current)
    }
    
    
}

function setTime(value){
    time_game.innerHTML = `00:${value}` 
}

function finishGame(){
    time_game.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}<span></h1>`
}

function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(10,60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(size, width-size)
    const y = getRandomNumber(size, height-size)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.left = `${x}px`
    circle.style.top = `${y}px`
    circle.style.backgroundColor = getRandomColor()
    board.append(circle)
}

function getRandomNumber(min, max){
    return Math.round(Math.random()*(max-min)+min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() *colors.length)
    return colors[index]
}