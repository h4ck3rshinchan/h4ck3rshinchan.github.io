// Old site redirect
const goBtn = document.getElementById("goBtn");
if (goBtn) {
  goBtn.addEventListener("click", () => {
    window.location.href = "Old site/index.html";
  });
}
// Secret page redirect
const secretBtn = document.getElementById("secretBtn");
if (secretBtn) {
  secretBtn.addEventListener("click", () => {
    window.location.href = "letter/index.html";
  });
}
// Celebration page redirect
const celebrateBtn = document.getElementById("celebrateBtn");
if (celebrateBtn) {
  celebrateBtn.addEventListener("click", () => {
    window.location.href = "celebration/celebration.html";
  });
}
// Falling petals
const petalContainer = document.querySelector(".petals");

if (petalContainer) {

  function createPetal() {
    const petal = document.createElement("span");
    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 7 + Math.random() * 6 + "s";
    petal.style.transform = `scale(${Math.random() * 0.6 + 0.6})`;

    petalContainer.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 15000);
  }

  setInterval(createPetal, 600);

}

const newCardBtn = document.getElementById("newCardBtn");

if (newCardBtn) {
  newCardBtn.addEventListener("click", () => {
    window.location.href = "code/index.html";
  });
}
