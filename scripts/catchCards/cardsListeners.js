import CLASSES from "../variables/CLASSES.js";

function mainClassHandler(paramCard, cards) {
  const hologram = Array
    .from(document.getElementsByClassName(CLASSES.HOLOGRAM))[0];
  const holocover = Array
    .from(document.getElementsByClassName(CLASSES.HOLOCOVER))[0];

  paramCard.classList.add(CLASSES.CLICKED_CARD);
  hologram.classList.add(CLASSES.ACTIVE);
  holocover.classList.dd(CLASSES.ACTIVE);

  cards.forEach((card) => {
    card.classList.remove(CLASSES.CLICKABLE);
    card.classList.remove(CLASSES.CAN_HOVER);
  });
}

function clickCardListener() {
  const cards = Array
    .from(document.getElementsByClassName(CLASSES.HOLOCARD));

  cards.forEach(card => {
    card.addEventListener("click", (_e) => {
      const clickable = card.classList.contains(CLASSES.CLICKABLE);

      if (clickable) {
        mainClassHandler(card, cards);
      }
    });
  });
}

export {
  clickCardListener,
}
