import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./helloConditionalRendering.html";
class HelloConditionalRendering extends LightningElement {
  constructor(...args) {
    super(...args);
    this.areDetailsVisible = false;
  }
  handleChange(event) {
    this.areDetailsVisible = event.target.checked;
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(HelloConditionalRendering, {
  fields: ["areDetailsVisible"]
});
export default _registerComponent(HelloConditionalRendering, {
  tmpl: _tmpl,
  sel: "recipe-hello-conditional-rendering",
  apiVersion: 61
});