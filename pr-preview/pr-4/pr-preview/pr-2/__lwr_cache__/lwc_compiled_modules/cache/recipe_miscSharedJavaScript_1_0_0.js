import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./miscSharedJavaScript.html";
import { getTermOptions, calculateMonthlyPayment } from 'recipe/mortgage';
class MiscSharedJavaScript extends LightningElement {
  constructor(...args) {
    super(...args);
    this.principal = 200000;
    this.term = 30;
    this.rate = 4;
    this.monthlyPayment = '';
    this.termOptions = getTermOptions();
  }
  principalChange(event) {
    this.principal = event.target.value;
  }
  termChange(event) {
    this.term = parseInt(event.target.value, 10);
  }
  rateChange(event) {
    this.rate = event.target.value;
  }
  calculateMonthlyPayment() {
    this.monthlyPayment = calculateMonthlyPayment(this.principal, this.term, this.rate);
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(MiscSharedJavaScript, {
  fields: ["principal", "term", "rate", "monthlyPayment", "termOptions"]
});
export default _registerComponent(MiscSharedJavaScript, {
  tmpl: _tmpl,
  sel: "recipe-misc-shared-java-script",
  apiVersion: 61
});