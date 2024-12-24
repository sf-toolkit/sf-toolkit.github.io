import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./button.css";

import _implicitScopedStylesheets from "./button.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<button${"a0:title"}${3}>${"t1"}</button>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1, [api_static_part(0, {
    attrs: {
      "title": $cmp.label
    }
  }, null), api_static_part(1, null, api_dynamic_text($cmp.label))])];
  /*LWC compiler v6.5.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-2egv2dscate";
tmpl.legacyStylesheetToken = "ui-button_button";
freezeTemplate(tmpl);
