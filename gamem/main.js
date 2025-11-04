const keys = {};
window.addEventListener("keydown", (e) => keys[e.code] = true);
window.addEventListener("keyup", (e) => keys[e.code] = false);

let mouseDown = false;
window.addEventListener("mousedown", () => mouseDown = true);
window.addEventListener("mouseup", () => mouseDown = false);

class Player {
    constructor(x, y) {
        this.pos = {x: x, y: y};
        this.bounds = {w: 64, h: 64};
    }

    update() {
        if (keys["KeyD"]) this.pos.x += 2;
        if (keys["KeyA"]) this.pos.x -= 2;
        if (keys["KeyS"]) this.pos.y += 2;
        if (keys["KeyW"]) this.pos.y -= 2;
    }
}

class Main {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.init()
        this.ctx = canvas.getContext("2d");

        requestAnimationFrame((t) => this.loop(t));
    }

    loop(t) {
        const delta = (t - this.framerate.lastTime) / 1000;
        this.framerate.lastTime = t;
        this.framerate.accumulator += delta;

        while (this.framerate.accumulator >= this.framerate.fixedDelta) {
            this.update();
            this.framerate.accumulator -= this.framerate.fixedDelta;
        }

        this.draw();

        requestAnimationFrame((t) => this.loop(t));
    }

    init() {
        this.framerate = {
            lastTime: performance.now(),
            accumulator: 0,
            fixedDelta: 1 / 60,
        };


        this.player = new Player(100, 100)
    }

    update() {
        this.player.update();
    }

    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.fillStyle = "cornflowerblue";
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.fillStyle = "white";

        // Do your drawing here

        ctx.fillStyle = "#b424bf";
        ctx.fillRect(this.player.pos.x, this.player.pos.y, this.player.bounds.w, this.player.bounds.h);
    }
}

const canvas = document.querySelector("#canvas");
canvas.width = 945;
canvas.height = 540;

// DO not touch this lmao
new Main(canvas.width, canvas.height);
