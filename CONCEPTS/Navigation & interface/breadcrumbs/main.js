const breadcrumbs = document.querySelector(".breadcrumbs");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    breadcrumbs.textContent = btn.dataset.path;
  });
});
