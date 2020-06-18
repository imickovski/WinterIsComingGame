const game = new Game();
const width = 1000;
const height = 600;
let gameStart = 0;

function preload() {
    game.preloadGame()
}

function setup() {
    createCanvas(width, height);
}

// Start Button
document.querySelector(".start").addEventListener("click", start)
function start() {
    document.getElementById("begin-button").style.display = "none"
    gameStart++;
}

// Try again Button
document.getElementById("try-again").addEventListener("click", startAgain)
function startAgain() {
    document.getElementById("try-again").style.display = "none";
    document.querySelector(".start-again").style.display = "none";
    gameStart = 1;
}

function draw() {
    if(gameStart==1) {
       game.drawingGame();
    }
    if(gameStart==2) {
        document.getElementById("try-again").style.display = "inline";
        document.querySelector(".start-again").style.display = "inline";
        game.defeatImg();
    }
    if (keyIsDown(37)) {
        game.player.moveLeft();
    }
    if (keyIsDown(39)) {
        game.player.moveRight();
    } 
}
