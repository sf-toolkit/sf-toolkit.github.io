import _tmpl from "./apiFunction.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
class ApiFunction extends LightningElement {
  handleRefresh() {
    this.template.querySelector('recipe-clock').refresh();
  }
  /*LWC compiler v6.5.0*/
}
export default _registerComponent(ApiFunction, {
  tmpl: _tmpl,
  sel: "recipe-api-function",
  apiVersion: 61
});