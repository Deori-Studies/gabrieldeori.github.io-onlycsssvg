import CLASSES from "../variables/CLASSES.js";
import IDS from "../variables/IDS.js";

function btnPutCardListener() {

  const btnPutCard = document.getElementById(IDS.BTN_PUTCARD);
  const hologram = document.getElementsByClassName(CLASSES.HOLOGRAM)[0];
  const holocover = document.getElementsByClassName(CLASSES.HOLOCOVER)[0];

  btnPutCard.addEventListener("click", () => {
    const actualCard = document
      .getElementsByClassName(CLASSES.CLICKED_CARD)[0];

    actualCard.classList.remove(CLASSES.CLICKED_CARD);
    actualCard.classList.add(CLASSES.PUTAWAY);
    actualCard.classList.add(CLASSES.CAN_HOVER);

    hologram.classList.remove(CLASSES.ACTIVE)
    holocover.classList.remove(CLASSES.ACTIVE)
  });
}

export {
  btnPutCardListener,
}
