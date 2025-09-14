document.getElementById("home").addEventListener("click", () => {
  document.title = "Accueil - Mon Site";
  document.querySelector("#metaDesc").setAttribute("content", "Bienvenue sur la page d'accueil");
});

document.getElementById("about").addEventListener("click", () => {
  document.title = "À propos - Mon Site";
  document.querySelector("#metaDesc").setAttribute("content", "Découvrez qui nous sommes");
});
