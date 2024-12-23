import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./compositionContactSearch.html";
import { findContacts } from 'data/simpleProvider';

/** The delay used when debouncing event handlers before a method call. */
const DELAY = 350;
class CompositionContactSearch extends LightningElement {
  constructor(...args) {
    super(...args);
    this.contacts = void 0;
    this.error = void 0;
  }
  handleKeyChange(event) {
    // Debouncing this method: Do not actually invoke the method call as long as this function is
    // being called within a delay of DELAY.
    window.clearTimeout(this.delayTimeout);
    const searchKey = event.target.value;
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    this.delayTimeout = setTimeout(() => {
      try {
        this.contacts = findContacts(searchKey);
      } catch (e) {
        this.error = e;
      }
    }, DELAY);
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(CompositionContactSearch, {
  fields: ["contacts", "error"]
});
export default _registerComponent(CompositionContactSearch, {
  tmpl: _tmpl,
  sel: "recipe-composition-contact-search",
  apiVersion: 61
});