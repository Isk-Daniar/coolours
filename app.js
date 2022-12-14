const cols = document.querySelectorAll('.columns')

function generateRandomColor() {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for ( let i = 0; i < 6; i++) { 
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

function setRandomColors() {
    cols.forEach(columns => {
        columns.style.background = generateRandomColor()
    })
}

setRandomColors()