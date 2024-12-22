import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./select.html";
class Select extends LightningElement {
  constructor(...args) {
    super(...args);
    this.label = void 0;
    this.options = void 0;
    this.currentValue = void 0;
  }
  set value(val) {
    this.currentValue = val;
  }
  get value() {
    return this.currentValue;
  }
  handleChange(event) {
    this.currentValue = this.options[event.target.selectedIndex].value;
    this.dispatchEvent(new CustomEvent('change'));
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(Select, {
  publicProps: {
    label: {
      config: 0
    },
    options: {
      config: 0
    },
    value: {
      config: 3
    }
  },
  track: {
    currentValue: 1
  }
});
export default _registerComponent(Select, {
  tmpl: _tmpl,
  sel: "ui-select",
  apiVersion: 61
});