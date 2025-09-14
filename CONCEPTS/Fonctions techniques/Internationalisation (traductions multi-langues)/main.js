const translations = {
  fr: { title: "Bonjour 👋", desc: "Bienvenue sur notre site" },
  en: { title: "Hello 👋", desc: "Welcome to our website" },
  es: { title: "Hola 👋", desc: "Bienvenido a nuestro sitio web" }
};

const langSelect = document.getElementById("lang");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

function updateLang(lang) {
  title.textContent = translations[lang].title;
  desc.textContent = translations[lang].desc;
}

langSelect.addEventListener("change", () => updateLang(langSelect.value));
updateLang("fr");
