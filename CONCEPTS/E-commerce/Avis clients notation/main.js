const stars = document.querySelectorAll("#rating span");
const result = document.getElementById("result");

stars.forEach(star => {
  star.addEventListener("click", () => {
    stars.forEach(s => s.classList.remove("active"));
    star.classList.add("active");
    result.textContent = `Merci pour votre note : ${star.dataset.value}⭐`;
  });
});
