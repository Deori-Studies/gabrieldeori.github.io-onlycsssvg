/**
 * @jest-environment jsdom
 */

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`
<!DOCTYPE html>
<body>
  <main class="landing-page">
    <section class="card-container">
      <div class="catch-card card-canhover">
        <div class="catch-card__ornament-0"></div>
        <div class="catch-card__ornament-1"></div>
      </div>
      <div class="catch-card card-canhover">
        <div class="catch-card__ornament-0"></div>
        <div class="catch-card__ornament-1"></div>
      </div>
      <div class="catch-card card-canhover">
        <div class="catch-card__ornament-0"></div>
        <div class="catch-card__ornament-1"></div>
      </div>
    </section>
  </main>
</body>
`);

import { mainScript, addListenerEvents } from "../scripts/index.js";

describe("Test the test", () => {
  test("if jsdom is not null", () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull()
  });
});

describe("Test if functions are being called on index.js", () => {
  it("should call addListenerEvents once in mainScript", () => {
    const m_addListenerEvents = jest.fn();
    mainScript({ addListenerEvents: m_addListenerEvents });
    expect(m_addListenerEvents).toHaveBeenCalledTimes(1)
  });
  it("should call clickCardListener once in addListenerEvents", () => {
    const m_clickCardListener = jest.fn();
    addListenerEvents({ clickCardListener: m_clickCardListener });
    expect(m_clickCardListener).toHaveBeenCalledTimes(1);
  })
});
