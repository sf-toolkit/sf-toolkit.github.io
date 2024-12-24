import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./apiSpread.html";
class ApiSpread extends LightningElement {
  constructor(...args) {
    super(...args);
    this.props = {
      firstName: 'Amy',
      lastName: 'Taylor'
    };
  }
  handleFirstNameChange(event) {
    this.props.firstName = event.target.value;
  }
  handleLastNameChange(event) {
    this.props.lastName = event.target.value;
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(ApiSpread, {
  track: {
    props: 1
  }
});
export default _registerComponent(ApiSpread, {
  tmpl: _tmpl,
  sel: "recipe-api-spread",
  apiVersion: 61
});