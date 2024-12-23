import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./compositionDynamic.html";
class CompositionDynamic extends LightningElement {
  constructor(...args) {
    super(...args);
    this.componentConstructor = void 0;
  }
  async loadComponent() {
    const ctor = await import('recipe/hello');
    this.componentConstructor = ctor.default;
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(CompositionDynamic, {
  fields: ["componentConstructor"]
});
export default _registerComponent(CompositionDynamic, {
  tmpl: _tmpl,
  sel: "recipe-composition-dynamic",
  apiVersion: 61
});