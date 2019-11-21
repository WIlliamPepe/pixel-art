// Select color input
const colorPicker = document.getElementById('colorPicker')
let color = '#000000'
//Color Change on User Input
colorPicker.addEventListener('input', (e) => {
    color = colorPicker.value
})


// Select size input
const can = document.getElementById('pixelCanvas')
const grid = document.getElementById('sizePicker')
let x = document.getElementById('inputHeight').value
let y = document.getElementById('inputWidth').value

makeGrid(x, y)//Draw initial Grid


// When size is submitted by the user, call makeGrid()
grid.addEventListener('submit',(e) => {
    e.preventDefault()
    x = document.getElementById("inputHeight").value
    y = document.getElementById("inputWidth").value
    can.firstElementChild.remove()
    makeGrid(x, y)
})


//Making the grid
function makeGrid(x, y) {
    for (let i = 0; i < x; i ++) {
        let row = can.insertRow(i)
        for (let z = 0; z < y; z++) {
            let cell = row.insertCell(z)

            // Set the Color of the Cell's
            cell.addEventListener('click',(e) => {
                cell.style.background = color
            })
            //Remove Color from cell
            cell.addEventListener("dblclick",(e) => {
                cell.style.background = "#FFFFFF"
            })
        }
    }

}
