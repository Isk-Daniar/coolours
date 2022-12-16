const cols = document.querySelectorAll('.columns')

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.code.toLowerCase() ==="space"){
        setRandomColors()
    }
})

document.addEventListener('click', (event) => {
    const type = event.target.dataset.type

    if (type === 'lock') {
        const node = 
            event.target.tagName.toLowerCase() === 'i'
            ? event.target
            : event.target.children[0]

    node.classList.toggle('fa-lock-open')
    node.classList.toggle('fa-lock')
    } else if (type === 'copy') {
        copyToClickboard(event.target.textContent)
    }
})

function copyToClickboard(text) {
    return navigator.clipboard.writeText(text)
}

function setRandomColors() {
    cols.forEach(columns => {
        const isLocked = columns.querySelector('i').classList.contains('fa-lock')
        const text = columns.querySelector('h2')
        const button = columns.querySelector('button')
        const color = chroma.random()

        if (isLocked) {
            return
        }

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