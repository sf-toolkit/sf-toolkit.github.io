import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./compositionBasics.html";
class CompositionParent extends LightningElement {
  constructor(...args) {
    super(...args);
    this.contact = {
      Name: 'Amy Taylor',
      Title: 'VP of Engineering',
      Phone: '4152568563',
      Picture: '/assets/images/demo/amy_taylor.jpg'
    };
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(CompositionParent, {
  fields: ["contact"]
});
export default _registerComponent(CompositionParent, {
  tmpl: _tmpl,
  sel: "recipe-composition-basics",
  apiVersion: 61
});