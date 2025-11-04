const rootStyle = getComputedStyle(document.documentElement);

const btnAlert = document.querySelector(".button-alert");

btnAlert.onclick = () => {
    alert("Congratulations! You have just won an iPhone 6s!");
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"; // hehehe
}

const sillyImg = document.querySelector(".cat-image");
let sillyImgRight = true;
let sillyImgRot = rootStyle.getPropertyValue("--catRotation");

sillyImg.addEventListener("click", (btn) => {
    if (sillyImgRight == true) {
        sillyImg.style.animation = "spin-left 2.5s linear infinite";
        sillyImgRight = false;

        console.log("right");
    } else if (sillyImgRight == false) {
        sillyImg.style.animation = "spin-right 2.5s linear infinite";
        sillyImgRight = true;

        console.log("left");
    }
})

/* window.addEventListener("keypress", (k) => {
    alert(`You have pressed: '${k.key}'!`);
})
*/

setInterval(() => {
    const rot = getRotation(sillyImg);
    rootStyle.setProperty("--catRotation", `${rot}deg`);
})

function getRotation(box) {
    const style = getComputedStyle(box);
    const transform = style.getPropertyValue('transform');
    
    let angle = 0;
    
    if (transform !== 'none') {
      const values = transform.match(/matrix\(([^)]+)\)/)[1].split(', ');
      const a = parseFloat(values[0]);
      const b = parseFloat(values[1]);

      angle = Math.atan2(b, a) * (180 / Math.PI);
    }

    return angle;
}
