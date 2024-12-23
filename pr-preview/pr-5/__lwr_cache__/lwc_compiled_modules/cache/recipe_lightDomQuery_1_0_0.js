import _tmpl from "./lightDomQuery.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
class LightDomQuery extends LightningElement {
  handleButtonClick() {
    // Elements that are inside a Light DOM child component are directly accessible by the parent
    this.template.querySelector('p.lightDomParagraph').innerText = 'Text changed by parent';
  }
  /*LWC compiler v6.5.0*/
}
export default _registerComponent(LightDomQuery, {
  tmpl: _tmpl,
  sel: "recipe-light-dom-query",
  apiVersion: 61
});