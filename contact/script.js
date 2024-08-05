// contact-script.js

const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');
let stars = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

class Star {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.alpha = Math.random();
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0 - this.radius;
            this.x = Math.random() * canvas.width;
        }
        this.alpha += this.speed * 0.01;
        if (this.alpha > 1 || this.alpha < 0) {
            this.speed = -this.speed;
        }
        this.draw();
    }
}

function init() {
    stars = [];
    for (let i = 0; i < 200; i++) {
        let radius = Math.random() * 2;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speed = (Math.random() * 1) + 0.5;
        stars.push(new Star(x, y, radius, speed));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.update();
    });
}

init();
animate();
