import _tmpl from "./wireGetContactListProvider.html";
import { registerComponent as _registerComponent } from "lwc";
import { contacts } from 'data/contacts';
class getContactList {
  constructor(dataCallback) {
    this.connected = false;
    this.dataCallback = dataCallback;
  }
  connect() {
    this.connected = true;
    this.provideContactList();
  }
  disconnect() {
    this.connected = false;
  }
  update() {
    this.provideContactList();
  }
  provideContactList() {
    if (this.connected) {
      this.dataCallback({
        data: contacts
      });
    }
  }
}
export default _registerComponent(getContactList, {
  tmpl: _tmpl,
  sel: "data-wire-get-contact-list-provider",
  apiVersion: 61
});