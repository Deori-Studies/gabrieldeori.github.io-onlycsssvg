const CARD_CLASS = ".c-3d__card"
const CARD_CLICKED_CLASS = "cardClicked"

function activateClickAnimation(element, cards) {
  cards.forEach(el => el.classList.remove(CARD_CLICKED_CLASS));
  element.classList.add(CARD_CLICKED_CLASS);
}

function addEventCards(cards) {
  cards.forEach((element) => {
    console.log(element);
    element.addEventListener("click", event => activateClickAnimation(element, cards));
    // não pode ser no evento
  });
}

function loadingPage() {
  const cards = Array.from(document.querySelectorAll(CARD_CLASS));
  addEventCards(cards);
}

loadingPage();
