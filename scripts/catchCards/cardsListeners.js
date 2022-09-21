import CLASSES from "../variables/CLASSES.js";

function clickCardListener() {

  const cards = Array
    .from(document.getElementsByClassName(CLASSES.HOLOCARD));
  const hologram = Array
    .from(document.getElementsByClassName(CLASSES.HOLOGRAM))[0];
  const holocover = Array
    .from(document.getElementsByClassName(CLASSES.HOLOCOVER))[0]

  cards.forEach(card => {
    card.addEventListener("click", (_e) => {
      card.classList.add(CLASSES.CLICKED_CARD);
      card.classList.remove(CLASSES.CAN_HOVER);
      hologram.classList.add(CLASSES.ACTIVE);
      holocover.classList.add(CLASSES.ACTIVE);
    });
  });
}

export {
  clickCardListener,
}
