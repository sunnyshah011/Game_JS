/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 700
let explosion = []
let canvasPosition = canvas.getBoundingClientRect()

class Collision {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.spritewidth = 200
        this.spriteheight = 179
        this.width = this.spritewidth / 2
        this.height = this.spriteheight / 2
        this.image = new Image()
        this.image.src = 'boom.png'
        this.frame = 0
        this.timer = 0
    }
    update() {
        this.timer++
        if (this.timer % 10 === 0) {
            this.frame++
        }
    }
    draw() {
        ctx.drawImage(this.image, this.spritewidth * this.frame, 0, this.spritewidth, this.spriteheight, this.x, this.y, this.width, this.height)
    }
}

window.addEventListener('click', (e) => {
    let positionX = e.x - canvasPosition.left
    let positionY = e.y - canvasPosition.top
    explosion.push(new Collision(positionX, positionY))
})

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (i = 0; i < explosion.length; i++) {
        explosion[i].update()
        explosion[i].draw()
    }
    requestAnimationFrame(animate)
}
animate()

