class Score {
    constructor() {
        this.x = Math.random() * width;
        this.y = 0;
        this.width = 80;
        this.height = 60;
    }
    checkCollision(player) {
        let leftSide = this.x;
        let rightSide = this.x + this.width;
        let topSide = this.y;
        let bottomSide = this.y + this.height;
        let playerLeftSide = player.col;
        let playerRightSide = player.col + player.width;
        let playerTopSide = player.row;
        let playerBottomSide = player.row + player.heigth;
        
        let xCollision =
        leftSide > playerLeftSide -15  &&
        leftSide < playerRightSide +15 &&
        rightSide > playerLeftSide -15 &&
        rightSide < playerRightSide +15 ;
        
        let yCollision = 
        topSide > playerTopSide -15 &&
        topSide < playerBottomSide +15 &&
        bottomSide > playerTopSide -15 &&
        bottomSide <playerBottomSide +15;

        if(xCollision && yCollision) {
            return true
        }else {
            return false;
        }
    }
    drawingObstaclesForScore() {
        this.y += 2;
        image(game.branImg.src, this.x, this.y, this.width, this.height)
    }
}