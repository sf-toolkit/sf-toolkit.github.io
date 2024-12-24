import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./helloExpressionsTrack.html";
class HelloExpressionsTrack extends LightningElement {
  constructor(...args) {
    super(...args);
    this.fullName = {
      firstName: '',
      lastName: ''
    };
  }
  handleChange(event) {
    const field = event.target.name;
    if (field === 'firstName') {
      this.fullName.firstName = event.target.value;
    } else if (field === 'lastName') {
      this.fullName.lastName = event.target.value;
    }
  }
  get uppercasedFullName() {
    return `${this.fullName.firstName} ${this.fullName.lastName}`.trim().toUpperCase();
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(HelloExpressionsTrack, {
  track: {
    fullName: 1
  }
});
export default _registerComponent(HelloExpressionsTrack, {
  tmpl: _tmpl,
  sel: "recipe-hello-expressions-track",
  apiVersion: 61
});