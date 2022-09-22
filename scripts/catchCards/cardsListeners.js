import CLASSES from "../variables/CLASSES.js";
import IDS from "../variables/IDS.js";

const holocardsInfos = {
  catchedCards: {},
}

function mainClassHandler(paramCard, cards) {
  const hologram = Array
    .from(document.getElementsByClassName(CLASSES.HOLOGRAM))[0];
  const holocover = Array
    .from(document.getElementsByClassName(CLASSES.HOLOCOVER))[0];

  paramCard.classList.add(CLASSES.CLICKED_CARD);
  hologram.classList.add(CLASSES.ACTIVE);
  holocover.classList.add(CLASSES.ACTIVE);

  cards.forEach((otherCards) => {
    otherCards.classList.remove(CLASSES.CLICKABLE);
    otherCards.classList.remove(CLASSES.CAN_HOVER);
  });
}

function countCard(card) {
  if(!holocardsInfos.catchedCards.hasOwnProperty(card.id)) {
    holocardsInfos.catchedCards[card.id] = true;
  }

  if (Object.keys(holocardsInfos.catchedCards).length >= 3) {
    const extraCard = document.getElementById(IDS.HOLOCARD4);
    extraCard.classList.remove(CLASSES.DISABLED);
    extraCard.classList.add(CLASSES.CLICKABLE);
    extraCard.classList.add(CLASSES.CAN_HOVER);
  }
}

function clickCardListener() {

  const cards = Array
    .from(document.getElementsByClassName(CLASSES.HOLOCARD));

  cards.forEach(card => {
    card.addEventListener("click", (_e) => {
      const clickable = card.classList.contains(CLASSES.CLICKABLE);

      if (clickable) {
        mainClassHandler(card, cards);
        countCard(card);
      }
    });
  });
}

export {
  clickCardListener,
}
