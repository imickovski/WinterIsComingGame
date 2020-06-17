const game = new Game();
const width = 1000;
const height = 600;
let gameStart = false;

function preload() {
    game.preloadGame()
}

function setup() {
    createCanvas(width, height);
}

document.querySelector(".start").addEventListener("click", start)
function start() {
    document.getElementById("begin-button").style.display = "none"
    gameStart = true;
}

function draw() {
    if(gameStart==true) {
        game.drawingGame();
    }
    if (keyIsDown(37)) {
        game.player.moveLeft();
    }
    if (keyIsDown(39)) {
        game.player.moveRight();
    } 
}
