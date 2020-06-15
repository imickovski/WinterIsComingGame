class Obstacles {
    constructor() {
        this.x = Math.random() * width;
        this.y = 0;
        this.i = Math.random() * width
        this.width = this.width;
        this.height = this.height;
    }
    drawingObstacles() {
        this.y += 2;
        image(game.aryaImg.src, this.x, this.y, 80, 60)
        image(game.branImg.src, this.i, this.y, 80, 60)
    }
    checkCollision(player) {
        let leftSide = this.x;
        let rightSide = this.x + this.width;
        let topSide = this.y;
        let bottomSide = this.y + this.height;
        let playerLeftSide = player.x;
        let playerRightSide = player.x + player.width;
        let playerTopSide = player.y;
        let playerBottomSide = player.y + player.height;
       
        let xCollision =
        leftSide > playerLeftSide  &&
        leftSide < playerRightSide  &&
        rightSide > playerLeftSide  &&
        rightSide < playerRightSide ;
        
        let yCollision = 
        topSide > playerTopSide  &&
        topSide < playerBottomSide &&
        bottomSide > playerTopSide &&
        bottomSide <playerBottomSide;

        if(yCollision && xCollision) {
            return true
        }else {
            return false;
        }
    
    }

}