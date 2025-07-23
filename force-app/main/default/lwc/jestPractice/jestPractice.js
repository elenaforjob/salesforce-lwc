import { LightningElement } from "lwc";

export default class JestPractice extends LightningElement {
  message = "Hello, Jest!";

  handleClick() {
    this.message = "Button was clicked!";
  }
}
