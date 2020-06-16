const game = new Game();
const width = 1000;
const height = 600;

function preload() {
    game.preloadGame()
}

function setup() {
    createCanvas(width, height);
}

function draw() {
    game.drawingGame();
    keyPressed();
}

function keyPressed() {
    if(keyCode == 37) {
        game.player.moveLeft();
    }
    if(keyCode == 39) {
        game.player.moveRight();
    }
}