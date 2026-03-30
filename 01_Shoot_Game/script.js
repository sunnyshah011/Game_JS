/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let timeToNextRaven = 0;
let ravenInterval = 500;
let lastTime = 0;

let ravens = [];

class Raven {
  constructor() {
    this.spriteWidth = 271;
    this.spriteHeight = 194;
    this.sizeModifier = Math.random() * 1.5 + 0.8;
    this.width = this.spriteWidth / this.sizeModifier;
    this.height = this.spriteHeight / this.sizeModifier;
    this.x = canvas.width;
    this.y = Math.random() * (canvas.height - this.height);
    this.directionX = Math.random() * 5 + 3;
    this.directionY = Math.random() * 5 - 2.5;
    this.image = new Image();
    this.image.src = "Raven.png";
    this.frame = 0;
    this.maxFrame = 4;
  }
  update() {
    this.x -= this.directionX;
    if (this.frame > this.maxFrame) this.frame = 0;
    else this.frame++;
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height,
    );
  }
}

function animate(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let deltatime = timestamp - lastTime;
  lastTime = timestamp;
  // timeToNextRaven += deltatime;
  if (timeToNextRaven > ravenInterval) {
    ravens.push(new Raven());
    timeToNextRaven = 0;
  }
  [...ravens].forEach((Object) => Object.update());
  [...ravens].forEach((Object) => Object.draw());
  requestAnimationFrame(animate);
}
animate(0);
