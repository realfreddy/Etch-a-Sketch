const container = document.querySelector(".container");
const button = document.querySelector(".popup");
const input = document.querySelector(".reset-grid");

createGrid(10);
function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const divs = document.createElement("div");
    const squareSize = 480 / size;
divs.style.width = squareSize + "px";
divs.style.height = squareSize + "px";
    divs.classList.add("grid-square");
    container.appendChild(divs);

    divs.addEventListener("mouseenter", () => {
      divs.style.backgroundColor = "blue";
    });
  }
}
function clearGrid(){
        container.textContent = '';
}

function resetGrid(){
    const newSize = input.value;
    if (isNaN(newSize) || newSize < 1 || newSize > 100){
        alert("Enter a number between 1 - 100 ");
        return;

    }
    clearGrid();
    createGrid(newSize);
}
button.addEventListener("click", () => {
    resetGrid()
});