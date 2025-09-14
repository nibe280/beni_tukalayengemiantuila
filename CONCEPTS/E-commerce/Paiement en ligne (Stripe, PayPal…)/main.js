document.getElementById("stripe").addEventListener("click", () => {
  document.getElementById("status").textContent = "✅ Paiement Stripe simulé avec succès !";
});

document.getElementById("paypal").addEventListener("click", () => {
  document.getElementById("status").textContent = "✅ Paiement PayPal simulé avec succès !";
});
