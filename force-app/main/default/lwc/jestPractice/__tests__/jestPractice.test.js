import { createElement } from "lwc";
import JestPractice from "c/jestPractice";

describe("Tests for c-jest-practice", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("Should have the right message", () => {
    const element = createElement("c-jest-practice", {
      is: JestPractice
    });

    document.body.appendChild(element);

    const nameElement = element.shadowRoot.querySelector("p");
    expect(nameElement.textContent).toBe("Hello, Jest!");
  });
});
