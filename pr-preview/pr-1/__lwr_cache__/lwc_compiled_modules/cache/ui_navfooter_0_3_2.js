import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./navfooter.html";
class Navfooter extends LightningElement {
  constructor(...args) {
    super(...args);
    this.labelNext = void 0;
    this.labelPrevious = void 0;
  }
  handleNextClick(event) {
    event.preventDefault();
    this.dispatchEvent(new CustomEvent('nextclicked'));
  }
  handlePreviousClick(event) {
    event.preventDefault();
    this.dispatchEvent(new CustomEvent('previousclicked'));
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(Navfooter, {
  publicProps: {
    labelNext: {
      config: 0
    },
    labelPrevious: {
      config: 0
    }
  }
});
export default _registerComponent(Navfooter, {
  tmpl: _tmpl,
  sel: "ui-navfooter",
  apiVersion: 61
});