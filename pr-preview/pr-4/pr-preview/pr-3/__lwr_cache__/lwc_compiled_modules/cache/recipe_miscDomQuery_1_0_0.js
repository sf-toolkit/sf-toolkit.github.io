import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./miscDomQuery.html";
class MiscDomQuery extends LightningElement {
  constructor(...args) {
    super(...args);
    this.selection = void 0;
  }
  handleCheckboxChange() {
    // Query the DOM
    const checked = Array.from(this.template.querySelectorAll('ui-input'))
    // Filter to only checked items
    .filter(element => element.checked)
    // Map to their labels
    .map(element => element.label);
    this.selection = checked.join(', ');
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(MiscDomQuery, {
  fields: ["selection"]
});
export default _registerComponent(MiscDomQuery, {
  tmpl: _tmpl,
  sel: "recipe-misc-dom-query",
  apiVersion: 61
});