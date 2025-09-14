const modal = document.getElementById("modal");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click", () => modal.style.display = "flex");
closeBtn.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
