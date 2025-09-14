const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    sections.forEach(s => s.classList.remove("active"));
    document.getElementById(link.dataset.section).classList.add("active");
  });
});
