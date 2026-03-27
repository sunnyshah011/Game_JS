/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
CANVAS_HEIGHT = canvas.height = 700
CANVAS_WIDTH = canvas.width = 600

const enemyCount = 25
let enemyCountArray = []

class Enemy {
    constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.height = 100
        this.width = 100
        this.speed = Math.random() * 4 -2
    }
    update() {
        this.x += this.speed
        this.y += this.speed
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.height, this.width)
    }
}

for (let i = 0; i < enemyCount; i++) {
    enemyCountArray.push(new Enemy())
}
console.log(enemyCountArray);


function Animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_WIDTH)
    enemyCountArray.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })
    requestAnimationFrame(Animate)
}
Animate()