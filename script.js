function activateClickAnimation(element) {
  element.classList.add("cardClicked");
}

function deactivateClickAnimation() {
  element.classList.remove("cardClicked");
}

function addEventCards(cards) {
  cards.forEach((element) => {
    console.log(element);
    element.addEventListener("click", event => activateClickAnimation(element));
    // não pode ser no evento
  });
}

function loadingPage() {
  console.log(":D");
  const cards = Array.from(document.querySelectorAll(".card"));
  addEventCards(cards);
}

loadingPage();
