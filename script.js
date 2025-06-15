const buttons = document.querySelectorAll(".buttons button");
const gridBorder = document.querySelector(".gridBorder")
//Draw Grid
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const gridSize = parseInt(button.className);
        
        gridBorder.innerHTML= ''
        for (let i = 0; i<gridSize**2; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.setAttribute("style", `width: ${1024/gridSize}px; height: ${1024/gridSize}px; outline: 1px solid black`)
            gridSquare.classList.add("square")
            gridBorder.appendChild(gridSquare);
        }
        return false
    })
})