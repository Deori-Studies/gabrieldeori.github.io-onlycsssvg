function addClass(class_, element) {
  element.classList.add(class_);
  return class_;
}

function removeClass(class_, element) {
  element.classList.remove(class_);
  return class_;
}

function clickCardListener() {
  const toFind = "catch-card";
  const toAdd = "card-catched";
  const toRemove = "card-canhover";
  const coverBlurHide = "cover-blur-hidden";
  const coverBlurShow = "cover-blur-show";
  const cards = Array
    .from(document.getElementsByClassName(toFind));

  cards.forEach(element => {
    element.addEventListener("click", () => {
      removeClass(toRemove, element);
      addClass(toAdd, element);

      const coverElement = Array
        .from(document.getElementsByClassName(coverBlurHide))[0];
      removeClass(coverBlurHide, coverElement);
      addClass(coverBlurShow, coverElement);
    });
  });
  return { removed: toRemove, added: toAdd }
}

export {
  addClass,
  removeClass,
  clickCardListener,
}
