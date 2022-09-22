import CLASSES from "../variables/CLASSES.js";
import IDS from "../variables/IDS.js";

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
  });
}

export {
  btnPutCardListener,
}
