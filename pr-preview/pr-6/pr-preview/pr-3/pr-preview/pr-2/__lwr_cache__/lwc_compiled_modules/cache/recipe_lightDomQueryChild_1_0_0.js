import _tmpl from "./lightDomQueryChild.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
class LightDomQueryChild extends LightningElement {
  handleButtonClick() {
    // Within Light DOM components, use this.querySelector instead of this.template.querySelector to access elements
    this.querySelector('p.lightDomParagraph').innerText = 'Text changed by child';
  }
  /*LWC compiler v6.5.0*/
}
LightDomQueryChild.renderMode = 'light';
export default _registerComponent(LightDomQueryChild, {
  tmpl: _tmpl,
  sel: "recipe-light-dom-query-child",
  apiVersion: 61
});