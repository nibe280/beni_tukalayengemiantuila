const banner = document.getElementById("cookieBanner");
const accept = document.getElementById("accept");

if (localStorage.getItem("cookiesAccepted")) {
  banner.style.display = "none";
}

accept.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  banner.style.display = "none";
});
