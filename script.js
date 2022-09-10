function activateClickAnimation(element, cards) {
  cards.forEach(el => el.classList.remove("cardClicked"));
  element.classList.add("cardClicked");
}

function addEventCards(cards) {
  cards.forEach((element) => {
    console.log(element);
    element.addEventListener("click", event => activateClickAnimation(element, cards));
    // não pode ser no evento
  });
}

function loadingPage() {
  console.log(":D");
  const cards = Array.from(document.querySelectorAll(".card"));
  addEventCards(cards);
}

loadingPage();
