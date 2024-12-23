import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./externalComponentCdn.html";
class ExternalComponentCDN extends LightningElement {
  constructor(...args) {
    super(...args);
    this.rating = 3;
    this.rendered = false;
  }
  renderedCallback() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;

    /**
     * LWC's declarative event bindings only support lowercase events.
     * Events using anything other than lowercase can be listened for using the imperative addEventListener() API.
     * https://rfcs.lwc.dev/rfcs/lwc/0118-native-web-components-support#events
     */
    this.template.querySelector('sl-rating').addEventListener('sl-change', event => {
      this.rating = event.target.value;
    });
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(ExternalComponentCDN, {
  fields: ["rating", "rendered"]
});
export default _registerComponent(ExternalComponentCDN, {
  tmpl: _tmpl,
  sel: "recipe-external-component-cdn",
  apiVersion: 61
});