import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./eventSimple.html";
class EventSimple extends LightningElement {
  constructor(...args) {
    super(...args);
    this.page = 1;
  }
  handlePrevious() {
    if (this.page > 1) {
      this.page = this.page - 1;
    }
  }
  handleNext() {
    this.page = this.page + 1;
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(EventSimple, {
  fields: ["page"]
});
export default _registerComponent(EventSimple, {
  tmpl: _tmpl,
  sel: "recipe-event-simple",
  apiVersion: 61
});