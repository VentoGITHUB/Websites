const root = document.documentElement;

// Welcome text
const welcomeText = document.querySelector(".welcome-text");

setInterval(() => {
    const range = 0.1;
    const offsetX = -range + Math.random() * (range * 2 + 1);
    const offsetY = -range + Math.random() * (range * 2 + 1);

    welcomeText.style.transform = `translate(${offsetX}rem, ${offsetY}rem)`;

    /*
    console.log(`OffsetX: ${offsetX}`);
    console.log(`OffsetY: ${offsetY}`);
    */
}, 100);

// Silly
import { PartsManager } from "./part.js";

let pm;
const img = new Image();
img.src = "./src/silly-16.png";
img.style.width = "150%";
img.style.height = "150%";

window.addEventListener("DOMContentLoaded", () => {
    pm = new PartsManager(img);
})

window.addEventListener("mousemove", (e) => {
    pm.createPart(e.x, e.y);
})

// rndColor
function rgbToHex(r, g, b) {
    function compToHex(c) {
        const hex = c.toString(16);
        return hex.lenght == 1 ? "0" + hex : hex;
    }
    return `#${compToHex(r)}${compToHex(g)}${compToHex(b)}`;
}
function rnd255() {
    return Math.floor(Math.random() * 256);
}

let genColor = rgbToHex(rnd255(), rnd255(), rnd255()); 
if (genColor.length < 7) {
    const missing = 7 - genColor.length;
    let missingPart = "";
    for (let i = 0; i < missing; i++) {
        missingPart += "f";
    }
    genColor += missingPart;
}

root.style.setProperty("--rndColor", `${genColor}`);

document.querySelector(".rndColor-hex").innerHTML = genColor;

document.querySelector(".rndColor-preview").onclick = () => {
    navigator.clipboard.writeText(genColor);
}

// rndCats
async function rndCat() {
  const res = await fetch('cats.json');
  const files = await res.json();
  const random = files[Math.floor(Math.random() * files.length)];
  document.querySelector('.rndCats-img').src = random;
}
rndCat();
