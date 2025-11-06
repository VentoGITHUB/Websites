const rootStyle = document.documentElement.style;

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
