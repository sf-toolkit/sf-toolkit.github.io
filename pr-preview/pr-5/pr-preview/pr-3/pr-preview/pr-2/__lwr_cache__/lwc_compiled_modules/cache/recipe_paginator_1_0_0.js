import _tmpl from "./paginator.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
class Paginator extends LightningElement {
  handlePrevious() {
    this.dispatchEvent(new CustomEvent('previous'));
  }
  handleNext() {
    this.dispatchEvent(new CustomEvent('next'));
  }
  /*LWC compiler v6.5.0*/
}
export default _registerComponent(Paginator, {
  tmpl: _tmpl,
  sel: "recipe-paginator",
  apiVersion: 61
});