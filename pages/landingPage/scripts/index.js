import { clickCardListener } from "./catchCards/cardsListeners.js";

function addListenerEvents(callbacks) {
  callbacks.clickCardListener();
}

function mainScript(callbacks) {
  callbacks.addListenerEvents(allFunctions);
}

const allFunctions = {
  clickCardListener,
  addListenerEvents,
};

Object.onload = mainScript(allFunctions);

export {
  mainScript,
  addListenerEvents,
}
