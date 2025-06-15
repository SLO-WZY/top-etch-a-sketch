const buttons = document.querySelectorAll(".buttons button");
const gridBorder = document.querySelector(".gridBorder")
let gridSize = 16
let isDrawing = false;
let selectedColor = 'black';
const colors = document.querySelectorAll(".colorpicker button")
colors.forEach(color => {
    color.addEventListener("click", () => {
        if (color.dataset.color != "custom") {selectedColor = color.dataset.color}
        else {const userColor = prompt("Input a color eg. 12A1FF")
            selectedColor = `#${userColor}`
        }
        
    })
})

function addListenersToSquares() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            isDrawing = true;
            square.style.backgroundColor = selectedColor;
        });

        square.addEventListener('mouseover', () => {
            if (isDrawing) {
                square.style.backgroundColor = selectedColor;
            }
        });
    });
}

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

//Draw Grid
for (let i = 0; i<gridSize**2; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.setAttribute("style", `width: ${1024/gridSize}px; height: ${1024/gridSize}px; `)
            gridSquare.classList.add("square")
            gridBorder.appendChild(gridSquare);
        }
addListenersToSquares()
//change gridSize
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const gridSize = parseInt(button.className);
        
        gridBorder.innerHTML= ''
        for (let i = 0; i<gridSize**2; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.setAttribute("style", `width: ${1024/gridSize}px; height: ${1024/gridSize}px; `)
            gridSquare.classList.add("square")
            gridBorder.appendChild(gridSquare);
        }
        addListenersToSquares()
        return false
    })
})


