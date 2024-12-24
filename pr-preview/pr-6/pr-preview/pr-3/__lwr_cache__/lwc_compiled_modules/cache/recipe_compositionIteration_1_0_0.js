import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./compositionIteration.html";
class CompositionIteration extends LightningElement {
  constructor(...args) {
    super(...args);
    this.contacts = [{
      Id: '003171931112854375',
      Name: 'Amy Taylor',
      Title: 'VP of Engineering',
      Phone: '4152568563',
      Picture: '/assets/images/demo/amy_taylor.jpg'
    }, {
      Id: '003192301009134555',
      Name: 'Michael Jones',
      Title: 'VP of Sales',
      Phone: '4158526633',
      Picture: '/assets/images/demo/michael_jones.jpg'
    }, {
      Id: '003848991274589432',
      Name: 'Jennifer Wu',
      Title: 'CEO',
      Phone: '4158521463',
      Picture: '/assets/images/demo/jennifer_wu.jpg'
    }];
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(CompositionIteration, {
  fields: ["contacts"]
});
export default _registerComponent(CompositionIteration, {
  tmpl: _tmpl,
  sel: "recipe-composition-iteration",
  apiVersion: 61
});