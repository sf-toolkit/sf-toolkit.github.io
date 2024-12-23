import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./contactListItemBubbling.html";
class ContactListItemBubbling extends LightningElement {
  constructor(...args) {
    super(...args);
    this.contact = void 0;
  }
  handleSelect(event) {
    // 1. Prevent default behavior of anchor tag click which is to navigate to the href url
    event.preventDefault();
    // 2. Create a custom event that bubbles. Read about event best practices at https://lwc.dev/guide/events#configure-event-propagation
    const selectEvent = new CustomEvent('contactselect', {
      bubbles: true
    });
    // 3. Fire the custom event
    this.dispatchEvent(selectEvent);
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(ContactListItemBubbling, {
  publicProps: {
    contact: {
      config: 0
    }
  }
});
export default _registerComponent(ContactListItemBubbling, {
  tmpl: _tmpl,
  sel: "recipe-contact-list-item-bubbling",
  apiVersion: 61
});