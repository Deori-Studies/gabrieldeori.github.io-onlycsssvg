import { clickCardListener } from "./catchCards/cardsListeners.js";

function addListenerEvents() {
  clickCardListener();
}

function mainScript() {
  addListenerEvents();
}

Object.onload = mainScript();
