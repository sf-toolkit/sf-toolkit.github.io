import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./externalComponentNpm.html";
import 'wired-elements';
class ExternalComponentNPM extends LightningElement {
  constructor(...args) {
    super(...args);
    this.greeting = 'World';
  }
  handleChange(event) {
    this.greeting = event.target.value;
  }
  handleSayHelloClick() {
    // eslint-disable-next-line no-alert
    alert(`Hello ${this.greeting}`);
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(ExternalComponentNPM, {
  fields: ["greeting"]
});
export default _registerComponent(ExternalComponentNPM, {
  tmpl: _tmpl,
  sel: "recipe-external-component-npm",
  apiVersion: 61
});