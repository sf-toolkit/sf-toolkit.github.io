import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./clock.html";
class Clock extends LightningElement {
  constructor(...args) {
    super(...args);
    this.timestamp = new Date().toISOString();
  }
  refresh() {
    this.timestamp = new Date().toISOString();
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(Clock, {
  publicMethods: ["refresh"],
  fields: ["timestamp"]
});
export default _registerComponent(Clock, {
  tmpl: _tmpl,
  sel: "recipe-clock",
  apiVersion: 61
});