const rootStyle = document.documentElement.style;

const btnAlert = document.querySelector(".button-alert");

btnAlert.onclick = () => {
    alert("Congratulations! You have just won an iPhone 6s!");
    window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=VBRLATKEC_NYAddn&t=1"; // hehehe
}

const sillyImg = document.querySelector(".cat-image");
let catRight = true;

function updateRotation() {
    const style = getComputedStyle(sillyImg);
    const matrix = new DOMMatrixReadOnly(style.transform);
    const curRot = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
    rootStyle.setProperty("--catRotation", `${curRot}deg`);
}

sillyImg.addEventListener("click", () => {
    updateRotation();

    catRight = !catRight;
    const dir = catRight ? 1 : -1;
    rootStyle.setProperty("--catDirection", dir);
});
