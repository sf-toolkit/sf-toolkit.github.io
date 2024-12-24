import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./contactListItem.html";
class ContactListItem extends LightningElement {
  constructor(...args) {
    super(...args);
    this.contact = void 0;
  }
  handleClick(event) {
    // 1. Prevent default behavior of anchor tag click which is to navigate to the href url
    event.preventDefault();
    // 2. Read about event best practices at http://lwc.dev/guide/events#pass-data-in-events
    const selectEvent = new CustomEvent('select', {
      detail: this.contact.Id
    });
    // 3. Fire the custom event
    this.dispatchEvent(selectEvent);
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(ContactListItem, {
  publicProps: {
    contact: {
      config: 0
    }
  }
});
export default _registerComponent(ContactListItem, {
  tmpl: _tmpl,
  sel: "recipe-contact-list-item",
  apiVersion: 61
});