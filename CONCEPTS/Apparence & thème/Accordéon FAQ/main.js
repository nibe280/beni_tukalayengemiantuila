const items = document.querySelectorAll(".item h3");

items.forEach(q => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});
