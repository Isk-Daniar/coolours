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

function setRandomColors(isInitial) {
    const colors = isInitial ? getColorsFromHash() : []

    cols.forEach((columns, index) => {
        const isLocked = columns.querySelector('i').classList.contains('fa-lock')
        const text = columns.querySelector('h2')
        const button = columns.querySelector('button')
        
        if (isLocked) {
            colors.push(text.textContent)
            return
        }

        const color = isInitial 
        ? colors[index]
            ? colors[index]
            : chroma.random()
        : chroma.random()

        if (!isInitial){
            colors.push(color)
            }

        text.textContent = color
        columns.style.background = color

        setTextColor(text, color)
        setTextColor(button, color)
    })

    saveColorsHash(colors)
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

function saveColorsHash(colors = []) {
    document.location.hash = colors.map((columns) => {
        return columns.toString().substring(1)
    })
    .join('-')
}

function getColorsFromHash() {
    if(document.location.hash.length > 1) {
        return document.location.hash.substring(1).split('-').map(color => '#' + color)
    }
    return []
}

setRandomColors(true)