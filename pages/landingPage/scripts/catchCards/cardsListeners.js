function clickCardListener() {
  const CLASS_HOLOCARD = "c-holocard";
  const CLASS_CLICKED_CARD = "m-clicked__card";
  const CLASS_CAN_HOVER = "m-can__hover";

  const cards = Array.from(
    document.getElementsByClassName(CLASS_HOLOCARD)
  );

  cards.forEach(card => {
    card.addEventListener("click", (_e) => {
      card.classList.add(CLASS_CLICKED_CARD);
      card.classList.remove(CLASS_CAN_HOVER);
    });
  });
}

export {
  clickCardListener,
}
