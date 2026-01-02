document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openBtn");
  const stage = document.querySelector(".stage");

  if (!openBtn || !stage) {
    alert("Button or stage not found");
    return;
  }

  openBtn.addEventListener("click", () => {
    stage.classList.add("open");
    openBtn.style.display = "none";
  });
});
