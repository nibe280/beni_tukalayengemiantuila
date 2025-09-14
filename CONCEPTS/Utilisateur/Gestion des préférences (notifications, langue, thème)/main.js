const notif = document.getElementById("notif");
const lang = document.getElementById("lang");
const dark = document.getElementById("dark");
const result = document.getElementById("result");

function updatePrefs() {
  result.textContent = `🔔 Notifications: ${notif.checked}, 🌍 Langue: ${lang.value}, 🌙 Dark Mode: ${dark.checked}`;
}

notif.addEventListener("change", updatePrefs);
lang.addEventListener("change", updatePrefs);
dark.addEventListener("change", updatePrefs);
