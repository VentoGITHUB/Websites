export class Walker {
  constructor(el, idle, walk, idleLength) {
    this.el = el;
    this.el.style.position = "absolute";
    this.el.style.left = "50%";
    this.el.style.top = "50%";
    
    this.idle = idle;
    this.walk = walk;
    this.el.src = this.idle;
    this.idleLength = idleLength;

    this.currentX = 0;
    this.currentY = 0;

    requestAnimationFrame(() => this.loop());
  }

  loop() {
    this.el.src = this.walk;

    const moveX = Math.floor(Math.random() * 101 - 50);
    const moveY = Math.floor(Math.random() * 101 - 50);

    const scale = moveX < 0 ? -1 : 1;

    this.el.offsetWidth;

    this.el.style.transition = "transform 0.7s ease-in-out";
    this.el.style.transform = `translate(${moveX}vw, ${moveY}vh) scaleX(${scale})`;

    this.currentX = moveX;
    this.currentY = moveY;

    setTimeout(() => {
      requestAnimationFrame(() => this.loop());
    }, this.idleLength);
  }
}
