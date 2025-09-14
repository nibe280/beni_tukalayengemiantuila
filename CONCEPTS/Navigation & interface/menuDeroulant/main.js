const btn = document.querySelector(".menu button");
const submenu = document.querySelector(".submenu");

btn.addEventListener("click", () => {
  submenu.classList.toggle("active");
});
