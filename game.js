class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player(450, 500);
        this.obstacles = [];
    }
    preloadGame() {
        this.backgroundImg = {src: loadImage("images/background.jpg")}
        this.playerImg = {src:loadImage("images/night-king-png.png")}
        this.aryaImg = {src:loadImage("images/transparent.png")}
        this.branImg = {src: loadImage("images/brandon-stark.png")};
    }
    drawingGame() {
        clear();
        frameRate(200);
        this.background.drawingBackground();
        this.player.drawingThePlayer();
        if(frameCount % 40 === 0) {
            this.obstacles.push(new Obstacles());
        }
        this.obstacles.forEach((el) => {
            el.drawingObstacles();
            el.checkCollision(this.player)
        });
        this.obstacles = this.obstacles.filter((obstacle) => {
            if(obstacle.checkCollision(this.player)) {
                console.log("happening")
                return false;
            }else {
                // console.log("not colliding")
                return true;
            }

        })
    }    
}