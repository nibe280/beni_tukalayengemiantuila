const articles = Array.from({ length: 20 }, (_, i) => `Article ${i+1}`);
const perPage = 5;
let page = 0;

const list = document.getElementById("articles");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function renderPage() {
  list.innerHTML = "";
  const start = page * perPage;
  const end = start + perPage;
  articles.slice(start, end).forEach(a => {
    const li = document.createElement("li");
    li.textContent = a;
    list.appendChild(li);
  });
}
renderPage();

prev.addEventListener("click", () => {
  if (page > 0) page--;
  renderPage();
});
next.addEventListener("click", () => {
  if (page < Math.ceil(articles.length / perPage) - 1) page++;
  renderPage();
});
