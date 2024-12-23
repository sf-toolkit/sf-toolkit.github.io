import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./eventWithData.html";
import getContactList from 'data/wireGetContactListProvider';
class EventWithData extends LightningElement {
  constructor(...args) {
    super(...args);
    this.selectedContact = void 0;
    this.contacts = {};
  }
  handleSelect(event) {
    const contactId = event.detail;
    this.selectedContact = this.contacts.data.find(contact => contact.Id === contactId);
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(EventWithData, {
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
export default _registerComponent(EventWithData, {
  tmpl: _tmpl,
  sel: "recipe-event-with-data",
  apiVersion: 61
});