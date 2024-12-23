import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./helloExpressions.html";
class HelloExpressions extends LightningElement {
  constructor(...args) {
    super(...args);
    this.firstName = '';
    this.lastName = '';
  }
  handleChange(event) {
    const field = event.target.name;
    if (field === 'firstName') {
      this.firstName = event.target.value;
    } else if (field === 'lastName') {
      this.lastName = event.target.value;
    }
  }
  get uppercasedFullName() {
    return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(HelloExpressions, {
  fields: ["firstName", "lastName"]
});
export default _registerComponent(HelloExpressions, {
  tmpl: _tmpl,
  sel: "recipe-hello-expressions",
  apiVersion: 61
});