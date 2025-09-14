function share(network) {
  document.getElementById("status").textContent = `✅ Partagé sur ${network}`;
}

document.getElementById("facebook").addEventListener("click", () => share("Facebook"));
document.getElementById("twitter").addEventListener("click", () => share("Twitter"));
document.getElementById("linkedin").addEventListener("click", () => share("LinkedIn"));
