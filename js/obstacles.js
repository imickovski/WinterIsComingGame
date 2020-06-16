class Obstacles {
    constructor() {
        this.x = Math.random() * width;
        this.y = 0;
        this.i = Math.random() * width
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
        // console.log(playerLeftSide, playerRightSide, playerTopSide,playerBottomSide)
        //    console.log(player)
        // console.log(width)
        
        let xCollision =
        leftSide > playerLeftSide -30  &&
        leftSide < playerRightSide +30 &&
        rightSide > playerLeftSide -30 &&
        rightSide < playerRightSide +30 ;
        
        let yCollision = 
        topSide > playerTopSide -30 &&
        topSide < playerBottomSide +30 &&
        bottomSide > playerTopSide -30 &&
        bottomSide <playerBottomSide +30;

        if(xCollision && yCollision) {
            return true
        }else {
            return false;
        }
    }
    drawingObstacles() {
        this.y += 2;
        image(game.aryaImg.src, this.x, this.y, this.width, this.height)
        // image(game.branImg.src, this.i, this.y, this.width, this.height)
    }
}