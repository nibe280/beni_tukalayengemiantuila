async function loadNews() {
  const container = document.getElementById("news");
  container.textContent = "⏳ Chargement...";

  try {
    // ⚠️ Mets ta clé API ici si tu en as une
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await res.json();

    container.innerHTML = "";
    data.forEach(n => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${n.title}</h3><p>${n.body}</p>`;
      container.appendChild(div);
    });
  } catch {
    container.textContent = "❌ Erreur chargement news";
  }
}
loadNews();
