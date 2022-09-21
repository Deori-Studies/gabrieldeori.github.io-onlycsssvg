function btnPutCardListener() {
  const CLASS_ACTIVE = "m-active";
  const CLASS_CAN_HOVER = "m-can__hover";
  const CLASS_CLICKED_CARD = "m-clicked__card";
  const CLASS_HOLOGRAM = "c-hologram";
  const CLASS_HOLOCOVER = "c-holocover";
  const CLASS_PUTAWAY = "m-putaway";
  const ID_PUTCARD = "btnPutCard";

  const btnPutCard = document.getElementById(ID_PUTCARD);
  const hologram = document.getElementsByClassName(CLASS_HOLOGRAM)[0];
  const holocover = document.getElementsByClassName(CLASS_HOLOCOVER)[0];

  btnPutCard.addEventListener("click", () => {
    const actualCard = document
      .getElementsByClassName(CLASS_CLICKED_CARD)[0];

    actualCard.classList.remove(CLASS_CLICKED_CARD);
    actualCard.classList.add(CLASS_PUTAWAY);
    actualCard.classList.add(CLASS_CAN_HOVER);

    hologram.classList.remove(CLASS_ACTIVE)
    holocover.classList.remove(CLASS_ACTIVE)
  });
}

export {
  btnPutCardListener,
}
