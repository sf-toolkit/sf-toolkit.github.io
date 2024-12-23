import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./helloBinding.html";
class HelloBinding extends LightningElement {
  constructor(...args) {
    super(...args);
    this.greeting = 'World';
  }
  handleChange(event) {
    this.greeting = event.target.value;
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(HelloBinding, {
  fields: ["greeting"]
});
export default _registerComponent(HelloBinding, {
  tmpl: _tmpl,
  sel: "recipe-hello-binding",
  apiVersion: 61
});