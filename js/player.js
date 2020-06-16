class Player {
    constructor(col, row) {
        this.col = col
        this.row = row
        this.speed = 5
        this.width = 130
        this.heigth = 100
    }
    drawingThePlayer() {
        image(game.playerImg.src, this.col, this.row, this.width, this.heigth)
    }
    moveLeft() {
        this.col -= this.speed
    }
    moveRight() {
        this.col += this.speed
    }
}