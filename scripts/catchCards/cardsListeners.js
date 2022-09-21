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
      const clickable = card.classList.contains(CLASSES.CLICKABLE);
  
      if (clickable) {
        card.classList.add(CLASSES.CLICKED_CARD);
        hologram.classList.add(CLASSES.ACTIVE);
        holocover.classList.add(CLASSES.ACTIVE);

        cards.forEach((newCard) => {
          newCard.classList.remove(CLASSES.CLICKABLE);
          newCard.classList.remove(CLASSES.CAN_HOVER);
        });
      }
    });
  });
}

export {
  clickCardListener,
}
