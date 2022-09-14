function addClass(class_, element) {
  element.classList.add(class_);
}

function removeClass(class_, element) {
  element.classList.remove(class_);
}

function clickCardListener() {
  const CLASS_CARD = "catch-card";
  const CATCHED_CARD = "card-catched";
  const CANHOVER_CARD = "card-canhover";

  const cards = Array.from(document.getElementsByClassName(CLASS_CARD));
  
  cards.forEach(element => {
    element.addEventListener("click", () => {
      removeClass(CANHOVER_CARD, element);
      addClass(CATCHED_CARD, element);
    })
  });
}

export {
  addClass,
  removeClass,
  clickCardListener,
}
