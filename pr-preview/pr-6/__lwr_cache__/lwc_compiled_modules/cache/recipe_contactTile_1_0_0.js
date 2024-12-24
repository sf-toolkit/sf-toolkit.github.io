import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./contactTile.html";
class ContactTile extends LightningElement {
  constructor(...args) {
    super(...args);
    this.contact = void 0;
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(ContactTile, {
  publicProps: {
    contact: {
      config: 0
    }
  }
});
export default _registerComponent(ContactTile, {
  tmpl: _tmpl,
  sel: "recipe-contact-tile",
  apiVersion: 61
});