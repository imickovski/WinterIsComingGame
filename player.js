class Player {
    constructor(col, row) {
        this.col = col
        this.row = row
        this.speed = 3
    }
    drawingThePlayer() {
        image(game.playerImg.src, this.col, this.row, 130, 100)
    }
    // Need fixing when goes on the left
    moveLeft() {
        this.col -= this.speed  
    }
    moveRight() {
        this.col += this.speed
    }
}