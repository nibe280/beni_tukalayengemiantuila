const box = document.querySelector(".box");

window.addEventListener("scroll", () => {
  const rect = box.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    box.classList.add("show");
  }
});
