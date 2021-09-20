// create 16x16 grid of squares
function createCanvas(squares) {
  while (squares > 100) {
    squares = prompt("Too many! Input less squares!");
  }
  // set square size

  let numberOfSquares = squares ** 2;
  const canvas = document.querySelector(".canvas");
  // remove already existing squares
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);  
  }
  // create squares
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    canvas.appendChild(square);
  }
}

function changeColor(event) {
  event.target.style.backgroundColor = "gray";
}

function resetCanvas(event) {
  console.log("Canvas is being reset");
  let input = prompt("How many squares do you want on each side?");
  createCanvas(input);

  // change color on mouseover
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) =>
    square.addEventListener("mouseover", changeColor)
  );
}

resetCanvas();
// reset button
const resetBtn = document.querySelector("button");
resetBtn.addEventListener("click", resetCanvas);
