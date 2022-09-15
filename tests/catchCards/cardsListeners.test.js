 /**
 * @jest-environment jsdom
 */
 
 const jsdom = require("jsdom");
 const { JSDOM } = jsdom;
const dom = new JSDOM(`
<!DOCTYPE html>
<html>
  <body>
    <div class="catch-card card-canhover"></div>
    <div class="catch-card card-canhover"></div>
  </body>
</html>
`);

const CLASS_CARD = "catch-card";
const CATCHED_CARD = "card-catched";
const CANHOVER_CARD = "card-canhover";

import {
  addClass, removeClass, clickCardListener
} from "../../scripts/catchCards/cardsListeners.js";

 describe("Functions are manipulating correct elements", () => {
  it("Should add and remove a class to an element", () => {
    const cards = Array.from(dom.window.document
      .getElementsByClassName(CLASS_CARD));
    const card = cards[0]

    card.classList.forEach((cardClass) => {
      expect(cardClass).not.toBe(CATCHED_CARD);
    });

    removeClass(CANHOVER_CARD, card);

    card.classList.forEach((cardClass) => {
      expect(cardClass).not.toBe(CANHOVER_CARD);
    });

    addClass(CATCHED_CARD, card);

    Array.from(card.classList).some((cardClass) => {
      return cardClass === CATCHED_CARD;
    });
  });
});

describe("clickCardListener are adding correct eventListeners", () => {
  it("Should remove 'can-hover' and add 'card-Catched classes'",
  () => {
    const classes = clickCardListener();
    expect(classes).toEqual({
      added: "card-catched",
      removed: "card-canhover"
    });
  });
});
