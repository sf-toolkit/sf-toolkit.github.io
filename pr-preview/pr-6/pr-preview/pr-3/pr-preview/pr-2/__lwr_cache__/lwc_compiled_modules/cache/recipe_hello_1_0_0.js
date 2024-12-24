import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./hello.html";
class Hello extends LightningElement {
  constructor(...args) {
    super(...args);
    this.greeting = 'World';
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(Hello, {
  fields: ["greeting"]
});
export default _registerComponent(Hello, {
  tmpl: _tmpl,
  sel: "recipe-hello",
  apiVersion: 61
});