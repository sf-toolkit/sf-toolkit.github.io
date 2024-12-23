import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./helloForEach.html";
class HelloForEach extends LightningElement {
  constructor(...args) {
    super(...args);
    this.contacts = [{
      Id: '003171931112854375',
      Name: 'Amy Taylor',
      Title: 'VP of Engineering'
    }, {
      Id: '003192301009134555',
      Name: 'Michael Jones',
      Title: 'VP of Sales'
    }, {
      Id: '003848991274589432',
      Name: 'Jennifer Wu',
      Title: 'CEO'
    }];
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(HelloForEach, {
  fields: ["contacts"]
});
export default _registerComponent(HelloForEach, {
  tmpl: _tmpl,
  sel: "recipe-hello-for-each",
  apiVersion: 61
});