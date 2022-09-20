function clickCardListener() {
  const CLASS_HOLOCARD = "c-holocard";
  const CLASS_HOLOGRAM = "c-hologram";
  const CLASS_HOLOCOVER = "c-holocover";
  const CLASS_CLICKED_CARD = "m-clicked__card";
  const CLASS_CAN_HOVER = "m-can__hover";
  const CLASS_ACTIVE = "m-active";

  const cards = Array
    .from(document.getElementsByClassName(CLASS_HOLOCARD));
  const hologram = Array
    .from(document.getElementsByClassName(CLASS_HOLOGRAM))[0];
  const holocover = Array
    .from(document.getElementsByClassName(CLASS_HOLOCOVER))[0]

  cards.forEach(card => {
    card.addEventListener("click", (_e) => {
      card.classList.add(CLASS_CLICKED_CARD);
      card.classList.remove(CLASS_CAN_HOVER);
      hologram.classList.add(CLASS_ACTIVE);
      holocover.classList.add(CLASS_ACTIVE);
    });
  });
}

export {
  clickCardListener,
}
