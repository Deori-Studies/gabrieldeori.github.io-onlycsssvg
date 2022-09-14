import { hoverCardsListener } from "./catchCards/cardsListeners.js"

function addListenerEvents() {
  hoverCardsListener();
}

function mainScript() {
  addListenerEvents();
}

Object.onload = mainScript();
