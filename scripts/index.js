import { addContent } from "./holocontent/addContent.js";
import { clickCardListener } from "./catchCards/cardsListeners.js";
import { btnPutCardListener } from "./putCards/btnListeners.js";

function addListenerEvents(callbacks) {
  callbacks.addContent();
  callbacks.clickCardListener();
  callbacks.btnPutCardListener();
}

function mainScript(callbacks) {
  callbacks.addListenerEvents(callbacks);
}

const allFunctions = {
  clickCardListener,
  addListenerEvents,
  btnPutCardListener,
  addContent,
};

Object.onload = mainScript(allFunctions);

export {
  mainScript,
  addListenerEvents,
}
