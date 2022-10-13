const board = document.querySelector('#board')
const colors = ['#1AA2B0', '#51797D', '#39E394', '#E6737A', '#B01A6E']
const SQUARE_NUMBERS = 600


for (let i = 0; i < SQUARE_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square))
    
    square.addEventListener('mouseleave', () => 
        removeColor(square))

    board.append(square)
}

function setColor(element)
{
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element)
{
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const index = Math.floor(Math.random() *colors.length)
    return colors[index]
}