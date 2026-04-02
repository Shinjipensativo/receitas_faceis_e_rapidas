const busca = document.getElementById("busca");
const cards = document.querySelectorAll(".card");

busca.addEventListener("input", function() {
  const valor = busca.value.toLowerCase();

  cards.forEach(card => {
    if (card.textContent.toLowerCase().includes(valor)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});