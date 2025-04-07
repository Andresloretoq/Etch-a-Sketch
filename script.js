const container = document.querySelector('.container');
const buttonSetGrid = document.querySelector('.set-grid');

buttonSetGrid.textContent = 'Set Grid';

function removeGrid() {
    const squareNodes = document.querySelectorAll(".hover");
    for (const square of squareNodes) {
        container.removeChild(square);
    }
}

function generateGrid(number) {
    if (number > 100 || number < 1) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    const totalSquares = number * number;

    for (let i = 0; i < totalSquares; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.style.width = 800 / number + "px";
        squareDiv.style.height = 800 / number + "px";
        squareDiv.classList.add("hover");
        container.appendChild(squareDiv);
    }

    // Ajusta el grid con CSS Grid
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    container.style.width = "800px";
    container.style.height = "800px";
}

container.addEventListener("mouseover", (e) => {
    const target = e.target;
    let opacity = Number(target.style.opacity) || 0;

    if (target.classList.contains("hover")) {
        if (target.style.background === "") {
            target.style.background = getRandomColor();
        }
        opacity = Math.min(opacity + 0.1, 1);
        target.style.opacity = opacity;
    }
});

buttonSetGrid.addEventListener("click", () => {
    const num = prompt("Insert new grid size (1-100):");
    removeGrid();
    generateGrid(Number(num));
});

// Color aleatorio
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Generar grid inicial
generateGrid(16);
