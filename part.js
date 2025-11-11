export class PartsManager {
    constructor(img) {
        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");
        this.parts = [];
        this.img = img;

        this.resize();
        window.addEventListener("resize", () => this.resize());

        if (this.img) {
            this.img.onload = () => this.animate();
        } else {
            this.animate();
        }
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createPart(x, y) {
        let size;
        let width;
        let height;

        if (this.img) {
            width = this.img.width;
            height = this.img.height;
        } else {
            size = Math.random() * 4 + 1;
        }

        const spdX = (Math.random() - 0.5) * 2;
        const spdY = (Math.random() - 0.5) * 2;
        const opacity = 1;
        if (this.img) {
            this.parts.push({ x, y, width, height, spdX, spdY, opacity });
        } else {
            this.parts.push({ x, y, size, spdX, spdY, opacity });
        }
    }

    updateParts() {
        for (let i = 0; i < this.parts.length; i++) {
            const part = this.parts[i];
            part.x += part.spdX;
            part.y += part.spdY;

            part.opacity -= 0.01;
            if (part.opacity <= 0) {
                this.parts.splice(i, 1);
                i--;
            }
        }
    }

    drawParts() {
        for (const part of this.parts) {
            if (this.img) {
                this.ctx.drawImage(this.img, part.x, part.y, part.width, part.height);
            } else {
                this.ctx.beginPath();
                this.ctx.fillStyle = `rgba(255, 255, 255, ${part.opacity})`;
                this.ctx.arc(part.x, part.y, part.size, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.updateParts();
        this.drawParts();
        requestAnimationFrame(() => this.animate());
    }
}
