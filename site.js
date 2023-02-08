//setting up squares with random values
let squares = document.getElementsByClassName("squares");
let header = document.getElementById("header");
let resetButton = document.getElementById("newColors");
let message = document.getElementById("message");
let correctColor;

document.getElementById("colorToGuess").innerText = correctColor;

init();
function init() {
    setColors();
    setSquares();
    correctColor = getCorrectAnswer();
}


function setSquares () {
// adding event listeners to each square.
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            let colorChoice = this.style.backgroundColor;
            if (colorChoice === correctColor) {
                message.textContent = "Correct!";
                changeColors(colorChoice);
            } else {
                message.textContent = "Try Again!";
                this.style.backgroundColor = '#232323';
            }
        });
    }
}
function changeColors(colorChoice) {
    for(let i =0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colorChoice;
        header.style.backgroundColor = colorChoice;
    }
}

function setColors() {
    for(let i = 0; i < squares.length; i++) {
        let rgb = []

        while(rgb.length < 3) {
            let value = Math.floor(Math.random() * 256);
            rgb.push(value);
        }

        squares[i].style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    }
}

// setting reset button
resetButton.addEventListener("click", function() {
   reset();
});

function reset() {
    setSquares();
    setColors();
    correctColor = getCorrectAnswer();
    header.style.backgroundColor = '#2C8E99';
    message.textContent = "Click the right color!"
}

function getCorrectAnswer() {
    let randomElement = Math.floor(Math.random() * squares.length);
    let correctColor = squares[randomElement].style.backgroundColor;
    document.getElementById("colorToGuess").innerText = correctColor;
    console.log(correctColor);
    return correctColor;
}
