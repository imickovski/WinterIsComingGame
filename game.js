class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player(450, 500);
        this.obstacles = [];
        this.scores = [];
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
        // Arya Stark
        if(frameCount % 40 === 0) {
            this.obstacles.push(new Obstacles());
        }
        this.obstacles.forEach((arya) => {
            arya.drawingObstacles();
            arya.checkCollision(this.player)
        });
        // Bran Stark
        if(frameCount % 40 === 0) {
            this.scores.push(new Score());
        }
        this.scores.forEach((bran) => {
            bran.drawingObstaclesForScore();
            bran.checkCollision(this.player)
        });

        // For Arya
        this.obstacles = this.obstacles.filter((arya) => {
            if(arya.checkCollision(this.player)) {
                alert("Game Over")
                return false;
            }else {
                // console.log("not colliding")
                return true;
            }
        })
        // For Bran
        this.scores = this.scores.filter((bran) => {
            if(bran.checkCollision(this.player)) {
               let theScore = document.querySelector("#score").innerText
                console.log(theScore)
                // return false;
            }else {
                // console.log("not colliding")
                return true;
            }

        })
    }    
}