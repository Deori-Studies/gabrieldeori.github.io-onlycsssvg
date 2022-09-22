import CLASSES from "../variables/CLASSES";
import IDS from "../variables/IDS";

function addContent() {
  const content = document.getElementsById(IDS.HOLOCONTENT);
  const cards = Array
    .from(document.getElementsByClassName(CLASSES.HOLOCARD));

  cards.forEach((card) => {
    card.addEventListener("click", ({ target: { id } }) => {
      createAllElements(content, id)
    });
  });
}

createAllElements(content, id) {
}

export {
  addContent,
}
