import { addContent } from "./holocontent/addContent.js";
import { clickCardListener } from "./catchCards/cardsListeners.js";

function addListenerEvents(callbacks) {
  callbacks.addContent();
  callbacks.clickCardListener();
}

function mainScript(callbacks) {
  callbacks.addListenerEvents(callbacks);
}

const allFunctions = {
  clickCardListener,
  addListenerEvents,
  addContent,
};

Object.onload = mainScript(allFunctions);

export {
  mainScript,
  addListenerEvents,
}
