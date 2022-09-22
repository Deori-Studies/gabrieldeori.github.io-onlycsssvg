import CLASSES from "../variables/CLASSES.js";
import IDS from "../variables/IDS.js";

const holocardsInfos = {
  catchedCards: {},
}

function countCard(card) {
  if(!holocardsInfos.catchedCards.hasOwnProperty(card.id)) {
    holocardsInfos.catchedCards[card.id] = true;
  }

  const catchedCards = Object.keys(holocardsInfos.catchedCards).length;

  if (catchedCards === 3) {
    const extraCard = document.getElementById(IDS.HOLOCARD4);
    extraCard.classList.remove(CLASSES.DISABLED);
    extraCard.classList.add(CLASSES.CLICKABLE);
    extraCard.classList.add(CLASSES.CAN_HOVER);
  }

  if (catchedCards === 4) {
    const cards = Array
      .from(document.getElementsByClassName(CLASSES.HOLOCARD));
    const linkPort = Array
      .from(document.getElementsByClassName(CLASSES.REDIR_PORTF))[0];
    const hologram = Array
      .from(document.getElementsByClassName(CLASSES.HOLOGRAM))[0];

    cards.forEach((card) => {
      card.classList.remove(CLASSES.TAKENOUT);
      card.classList.add(CLASSES.CLICKED_CARD);
    });
    linkPort.classList.add(CLASSES.ACTIVE);
    hologram.classList.add(CLASSES.SPECIAL);
  }

}

function btnPutCardListener() {

  const btnPutCard = document.getElementById(IDS.BTN_PUTCARD);
  const holocontent = document.getElementById(IDS.HOLOCONTENT);
  const hologram = document.getElementsByClassName(CLASSES.HOLOGRAM)[0];
  const holocover = document.getElementsByClassName(CLASSES.HOLOCOVER)[0];
  const cards = Array
    .from(document.getElementsByClassName(CLASSES.HOLOCARD));

  btnPutCard.addEventListener("click", () => {
    const actualCard = document
      .getElementsByClassName(CLASSES.CLICKED_CARD)[0];

    actualCard.classList.remove(CLASSES.CLICKED_CARD);
    actualCard.classList.add(CLASSES.TAKENOUT);

    hologram.classList.remove(CLASSES.ACTIVE);
    holocover.classList.remove(CLASSES.ACTIVE);

    cards.forEach((card) => {
      const cardIsDisabled = card.classList.contains(CLASSES.DISABLED);

      if(!cardIsDisabled) {
        card.classList.add(CLASSES.CLICKABLE);
        card.classList.add(CLASSES.CAN_HOVER);
      }
    });

    holocontent.innerHTML = "";
    if(actualCard) {
      countCard(actualCard);
    }
  });
}

export {
  btnPutCardListener,
}
