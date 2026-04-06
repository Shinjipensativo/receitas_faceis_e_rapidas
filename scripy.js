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

function avaliar(gostou) {
  const msg = document.getElementById("mensagem");

  if (gostou) {
    msg.textContent = "Que bom que você gostou! 😄🍝";
    msg.style.color = "green";
  } else {
    msg.textContent = "Poxa 😢 vamos melhorar essa receita!";
    msg.style.color = "red";
  }

  msg.style.display = "block";

  setTimeout(() => {
    msg.style.display = "none";
  }, 5000);
}