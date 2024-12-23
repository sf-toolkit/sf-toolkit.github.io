import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./errorPanel.html";
import { reduceErrors } from 'recipe/ldsUtils';
import noDataIllustration from './templates/noDataIllustration.html';
import inlineMessage from './templates/inlineMessage.html';
class ErrorPanel extends LightningElement {
  constructor(...args) {
    super(...args);
    /** Single or array of errors */
    this.errors = void 0;
    /** Generic / user-friendly message */
    this.friendlyMessage = 'Error retrieving data';
    /** Type of error message **/
    this.type = void 0;
    this.viewDetails = false;
  }
  get errorMessages() {
    return reduceErrors(this.errors);
  }
  handleShowDetailsClick() {
    this.viewDetails = !this.viewDetails;
  }
  render() {
    if (this.type === 'inlineMessage') return inlineMessage;
    return noDataIllustration;
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(ErrorPanel, {
  publicProps: {
    errors: {
      config: 0
    },
    friendlyMessage: {
      config: 0
    },
    type: {
      config: 0
    }
  },
  fields: ["viewDetails"]
});
export default _registerComponent(ErrorPanel, {
  tmpl: _tmpl,
  sel: "recipe-error-panel",
  apiVersion: 61
});