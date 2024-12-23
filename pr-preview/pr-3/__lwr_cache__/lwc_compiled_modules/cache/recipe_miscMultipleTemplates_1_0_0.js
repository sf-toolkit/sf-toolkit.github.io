import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./miscMultipleTemplates.html";
import templateOne from './templateOne.html';
import templateTwo from './templateTwo.html';
class MiscMultipleTemplates extends LightningElement {
  constructor(...args) {
    super(...args);
    this.showTemplateOne = true;
  }
  render() {
    return this.showTemplateOne ? templateOne : templateTwo;
  }
  switchTemplate() {
    this.showTemplateOne = !this.showTemplateOne;
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(MiscMultipleTemplates, {
  fields: ["showTemplateOne"]
});
export default _registerComponent(MiscMultipleTemplates, {
  tmpl: _tmpl,
  sel: "recipe-misc-multiple-templates",
  apiVersion: 61
});