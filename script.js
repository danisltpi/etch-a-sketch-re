function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0;i < 6; i++) { 
    color += letters[Math.floor(Math.random() * 16)];
  } 
  return color;
}

function createCanvas(squares) {
  while (squares > 100) {
    squares = prompt("Too many! Input less squares!");
  }
  const numberOfSquares = squares ** 2;
  const canvas = document.querySelector(".canvas");
  // calculate square size
  const size = 600 / squares;
  // remove already existing squares
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);  
  }
  // create squares
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.height = `${size}px`;
    square.style.width = `${size}px`;
    canvas.appendChild(square);
  }
}

function changeColor(event) {
  event.target.style.backgroundColor = getRandomColor();
}

function resetCanvas(event) {
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