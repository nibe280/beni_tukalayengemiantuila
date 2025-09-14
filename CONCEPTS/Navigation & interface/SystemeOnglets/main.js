const buttons = document.querySelectorAll(".tabs button");
const contents = document.querySelectorAll(".content");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    contents.forEach(c => c.classList.remove("active"));
    document.getElementById("tab" + btn.dataset.tab).classList.add("active");
  });
});
