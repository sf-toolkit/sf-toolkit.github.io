import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lightDomQueryChild.css";

import _implicitScopedStylesheets from "./lightDomQueryChild.scoped.css?scoped=true";

import _uiButton from "ui/button";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<p class="lightDomParagraph${0}"${2}>Click any button to change this text</p>`;
const stc0 = {
  "button": true
};
const stc1 = {
  "label": "Change Text"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, b: api_bind, c: api_custom_element} = $api;
  const {_m0} = $ctx;
  return [api_static_fragment($fragment1, 1), api_custom_element("ui-button", _uiButton, {
    classMap: stc0,
    props: stc1,
    key: 2,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleButtonClick))
    }
  })];
  /*LWC compiler v6.5.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.renderMode = "light";


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-6elb0h6va9e";
tmpl.legacyStylesheetToken = "recipe-lightDomQueryChild_lightDomQueryChild";
freezeTemplate(tmpl);
