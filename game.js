class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player(450, 500);
        this.obstacles = [];
        this.scores = [];
        this.playerScore = 0;
    }
    preloadGame() {
        // this.backgroundImg = {src: loadImage("images/background.jpg")};
        this.backgroundImg = {src: loadImage("images/wall-goes-down.gif")};

        this.playerImg = {src: loadImage("images/night-king-png.png")};
        this.aryaImg = {src: loadImage("images/transparent.png")};
        this.branImg = {src: loadImage("images/brandon-stark.png")};

        // this.aryaWinsImg = {src: loadImage("images/arya-wins.jpg")};
        this.aryaWinsImg = {src: loadImage("images/Jon Snow.gif")};
    }
    defeatImg(){
        image(this.aryaWinsImg.src, 0, 0, width, height)
    }
    upgrateScore() {
        this.playerScore++;
        document.getElementById("score").innerText = this.playerScore;
        document.getElementById("totalScore").innerText = this.playerScore;
    }
    resetScore(){
        this.playerScore = 0;
        this.obstacles = [];
        this.scores = [];
        document.getElementById("score").innerText = this.playerScore;
        document.getElementById("totalScore").innerText = this.playerScore;
        this.player.col = 450;
        this.player.row = 500;
        
    }
    drawingGame() {
        frameRate(150);
        this.background.drawingBackground();
        this.player.drawingThePlayer();
        // When goes on the right off the canvas
        // Player width is 130
        if(this.player.col > width) {
            this.player.col = -this.player.width + 10 
        }
        // When goes on the left off the canvas
        // Player width is 130
        if(this.player.col < -this.player.width) {
            this.player.col = width - 10
        }
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
                gameStart += 1;
                return false;
            }else {
                return true;
            }
        })
        // For Bran
        this.scores = this.scores.filter((bran) => {
            if(bran.checkCollision(this.player)) {
                this.upgrateScore();
                return false;
            }else {
                return true;
            }
        }) 
    }     
}
