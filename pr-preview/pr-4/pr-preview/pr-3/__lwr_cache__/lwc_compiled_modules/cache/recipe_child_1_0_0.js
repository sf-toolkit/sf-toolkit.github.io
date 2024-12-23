import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./child.html";
class Child extends LightningElement {
  constructor(...args) {
    super(...args);
    this.firstName = void 0;
    this.lastName = void 0;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(Child, {
  publicProps: {
    firstName: {
      config: 0
    },
    lastName: {
      config: 0
    }
  }
});
export default _registerComponent(Child, {
  tmpl: _tmpl,
  sel: "recipe-child",
  apiVersion: 61
});