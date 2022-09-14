/**
 * @jest-environment jsdom
 */

 const jsdom = require("jsdom");
 const { JSDOM } = jsdom;
 
 const newDom = new JSDOM(`
  <!DOCTYPE html>
  <body>
    <div class="catch-card"></div>
    <div class="catch-card"></div>
    <div class="catch-card"></div>
  </body>
 `);

import {
  addClass, removeClass, clickCardListener
} from "../../scripts/catchCards/cardsListeners.js";

 describe("Functions are manipulating correct elements", () => {
  it("Should add and remove a class to an element", () => {
    const classToFind = "catch-card"
    const classToAdd = "card-canhover";
    const elements = Array.from(newDom.window.document
      .getElementsByClassName(classToFind));
    const firstElement = elements[0];
    let firstClass = firstElement.classList[0]
    let secondClass = firstElement.classList[1]

    expect(firstElement.classList.length).toBe(1);

    addClass(classToAdd, firstElement);
    secondClass = firstElement.classList[1]

    expect(secondClass).toBe(classToAdd);

    removeClass(classToFind, firstElement);
    firstClass = firstElement.classList[0]
    secondClass = firstElement[1];

    expect(secondClass).toBeUndefined();
    expect(firstClass).toBe(classToAdd);

    removeClass(classToAdd, firstElement);
    expect(firstElement.classList.length).toBe(0);
  });
});
