class Background {
    constructor(){}

    drawingBackground() {
        // game.backgroundImg.forEach((el) => {
        //     el.y -= el.speed
        //     image(el.src, el.x, el.y, width, height)
        //     image(el.src, el.x, el.y + width, width, height)
        //     if (el.y <= -width) {
        //         el.y = 0;
        //       }
        // })
        image(game.backgroundImg.src, 0, 0, width, height)
    }
}