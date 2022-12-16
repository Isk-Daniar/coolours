const cols = document.querySelectorAll('.columns')

document.addEventListener('keydown', (event) => {
    if (event.code.toLowerCase() ==="space"){
        setRandomColors()
    }
}
)

function setRandomColors() {
    cols.forEach(columns => {
        const text = columns.querySelector('h2')
        const button = columns.querySelector('button')
        const color = chroma.random()

        text.textContent = color
        columns.style.background = color

        setTextColor(text, color)
        setTextColor(button, color)
    })
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'

}

setRandomColors()