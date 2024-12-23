import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./miscRestApiCall.html";
// The base URL (in this case https://www.googleapis.com/ must be added to the CSP Trusted Sites in Setup)
const QUERY_URL = 'https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=';
class MiscRestCall extends LightningElement {
  constructor(...args) {
    super(...args);
    this.searchKey = 'Harry Potter';
    this.books = void 0;
    this.error = void 0;
  }
  handleSearchKeyChange(event) {
    this.searchKey = event.target.value;
  }
  handleSearchClick() {
    // The Fetch API is currently not polyfilled for usage in IE11.
    // Use XMLHttpRequest instead in that case.
    fetch(QUERY_URL + this.searchKey).then(response => {
      // fetch isn't throwing an error if the request fails.
      // Therefore we have to check the ok property.
      // The thrown error will be catched on the catch() method
      if (!response.ok) {
        throw Error(response);
      } else {
        return response.json();
      }
    }).then(jsonResponse => {
      this.books = jsonResponse;
    }).catch(error => {
      this.error = error;
      this.books = undefined;
    });
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(MiscRestCall, {
  fields: ["searchKey", "books", "error"]
});
export default _registerComponent(MiscRestCall, {
  tmpl: _tmpl,
  sel: "recipe-misc-rest-api-call",
  apiVersion: 61
});