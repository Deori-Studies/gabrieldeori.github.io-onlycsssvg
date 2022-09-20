function clickCardListener() {
  const cards = Array.from(document.getElementsByClassName("c-holocard"));
  console.log(cards)
  cards.forEach(card => {
    console.log(card);
  });
}

export {
  clickCardListener,
}
