document.getElementById("show").addEventListener("click", () => {
  const place = document.getElementById("place").value;
  if (!place) return;
  document.getElementById("map").innerHTML = `
    <iframe src="https://www.google.com/maps?q=${encodeURIComponent(place)}&output=embed"></iframe>
  `;
});
