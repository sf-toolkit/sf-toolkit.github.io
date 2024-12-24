import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./eventBubbling.html";
import getContactList from 'data/wireGetContactListProvider';
class EventBubbling extends LightningElement {
  constructor(...args) {
    super(...args);
    this.selectedContact = void 0;
    this.contacts = {};
  }
  handleContactSelect(event) {
    this.selectedContact = event.target.contact;
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(EventBubbling, {
  wire: {
    contacts: {
      adapter: getContactList,
      config: function ($cmp) {
        return {};
      }
    }
  },
  fields: ["selectedContact"]
});
export default _registerComponent(EventBubbling, {
  tmpl: _tmpl,
  sel: "recipe-event-bubbling",
  apiVersion: 61
});