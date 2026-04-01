/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

const CANVAS_HEIGHT = canvas.height = 640
const CANVAS_WIDTH = canvas.width = 360

//bird
let birdWidth = 34
let birdHeight = 24
let birdX = 360 / 8
let birdY = 640 / 2
let birdImage = new Image()
birdImage.src = 'flappybird.png'
let birdVelocity = 0
let gravity = 0.4
let gameOver = false
let score = 0

let bird = {
    width: birdWidth,
    height: birdHeight,
    x: birdX,
    y: birdY
}

//pipe
let pipeArray = []
let pipeWidth = 64
let pipeHeight = 512
let pipeX = CANVAS_WIDTH
let pipeY = 0
let toppipeImage = new Image()
toppipeImage.src = 'toppipe.png'
let bottompipeImage = new Image()
bottompipeImage.src = 'bottompipe.png'
let openingSpace = CANVAS_HEIGHT / 4

let pipe = {
    width: pipeWidth,
    height: pipeHeight,
    x: pipeX,
    y: pipeY
}

class pipes {
    constructor() {
        this.width = pipeWidth
        this.height = pipeHeight
        this.pipeX = CANVAS_WIDTH
        this.randomPipeYTop = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2)
        this.randomPipeYBottom = this.randomPipeYTop + pipeHeight + openingSpace
        this.topimage = toppipeImage
        this.bottomimage = bottompipeImage
        this.passed = false
    }

    update() {
        this.pipeX -= 2
    }

    draw() {
        ctx.drawImage(this.topimage, this.pipeX, this.randomPipeYTop, this.width, this.height)
        ctx.drawImage(this.bottomimage, this.pipeX, this.randomPipeYBottom, this.width, this.height)
    }
}

setInterval(() => {
    pipeArray.push(new pipes())
}, 1500)


function Animate() {
    if (gameOver) {
        return
    }
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    birdVelocity += gravity
    bird.y = Math.max(bird.y + birdVelocity, 0)
    ctx.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height)
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i]
        pipe.update()
        pipe.draw()
        // collision detection top
        if (detectcollision(bird, { x: pipe.pipeX, y: pipe.randomPipeYTop, width: pipe.width, height: pipe.height })) {
            gameOver = true
        }
        // collision detection bottom
        if (detectcollision(bird, { x: pipe.pipeX, y: pipe.randomPipeYBottom, width: pipe.width, height: pipe.height })) {
            gameOver = true
        }
        if (!pipe.passed && bird.x > pipe.pipeX + pipe.width) {
            score += 1; //0.5 because there are 2 pipes! so 0.5*2 = 1, 1 for each set of pipes
            pipe.passed = true;
        }
    }
    if (bird.y > CANVAS_HEIGHT) {
        gameOver = true
    }

    //score
    ctx.fillStyle = "white";
    ctx.font = "45px sans-serif";
    ctx.fillText(score, 5, 45);

    pipeArray = pipeArray.filter(pipe => pipe.pipeX + pipe.width > 0)
    requestAnimationFrame(Animate)
}
Animate()

addEventListener("keydown", birdmove)

function birdmove(e) {
    if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
        birdVelocity = -6
    }

}

function detectcollision(a, b) {
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
}