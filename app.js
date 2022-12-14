const cols = document.querySelectorAll('.columns')

function generateRandomColor() {
    const hexCodes = '0123456789ABCDEF'

    for ( let i = 0; i < 6; i++) { 
        color += hexCodes[Math.floor() * hexCodes.length]
    }
    return '#' + color
}

function setRandomColors() {
    cols.forEach(columns => {
        console.log(columns)
    })
}

setRandomColors()