function addClass(class_, element) {
  element.classList.add(class_);
}

function removeClass(class_, element) {
  element.classList.remove(class_);
}

export function hoverCardsListener() {
  const CARD_CLASS = "catch-card";
  const CARD_CLICKED_CLASS = "hovered-catch-card";
  const cards = Array
    .from(document.getElementsByClassName(CARD_CLASS));

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      addClass(CARD_CLICKED_CLASS, card);
    });
    card.addEventListener("mouseleave", () => {
      removeClass(CARD_CLICKED_CLASS, card);
    });
  });
}
