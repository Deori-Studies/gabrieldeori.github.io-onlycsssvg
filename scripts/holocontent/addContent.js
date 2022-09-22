import CLASSES from "../variables/CLASSES.js";
import IDS from "../variables/IDS.js";
import { cardsContents } from "./cardsContents.js";
import { btnPutCardListener } from "../putCards/btnListeners.js";

function addContent() {
  const holocontent = document.getElementById(IDS.HOLOCONTENT);
  const cards = Array
    .from(document.getElementsByClassName(CLASSES.HOLOCARD));

  cards.forEach((card) => {
    card.addEventListener("click", (_e) => {
      const cardID = card.id;
      const cardContent = cardsContents[cardID];
      createAndAppend(cardContent, holocontent);
    });
  });
}

function createAndAppend(cardContent, holocontent) {
  const BUTTON_TEXT = "Guardar Valor"

  const headerElement = document.createElement("header");
  const h1Element = document.createElement("h1");
  const h1TextNode = document.createTextNode(cardContent.h1);

  h1Element.appendChild(h1TextNode);
  headerElement.appendChild(h1Element);

  const mainElement = document.createElement("main");
  const pElement = document.createElement("p");
  const pTextNode = document.createTextNode(cardContent.p);

  pElement.appendChild(pTextNode);
  mainElement.appendChild(pElement);

  const footerElement = document.createElement("footer");
  const buttonElement = document.createElement("button");
  const buttonTextNode = document.createTextNode(BUTTON_TEXT)
  buttonElement.setAttribute("id", IDS.BTN_PUTCARD);
  buttonElement.appendChild(buttonTextNode);
  footerElement.appendChild(buttonElement);  

  holocontent.appendChild(mainElement);
  holocontent.appendChild(headerElement);
  holocontent.appendChild(footerElement);

  btnPutCardListener();
}

export {
  addContent,
}
