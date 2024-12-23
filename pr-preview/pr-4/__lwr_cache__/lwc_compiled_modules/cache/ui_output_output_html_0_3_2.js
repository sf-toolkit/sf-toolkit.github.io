import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./output.css";

import _implicitScopedStylesheets from "./output.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<label class="field-label${0}"${2}>${"t1"}</label>`;
const $fragment2 = parseFragment`<a${"a0:href"}${3}>${"t1"}</a>`;
const $fragment3 = parseFragment`<a${"a0:href"}${3}>${"t1"}</a>`;
const stc0 = {
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, t: api_text, h: api_element} = $api;
  return [$cmp.label ? api_static_fragment($fragment1, 1, [api_static_part(1, null, api_dynamic_text($cmp.label))]) : null, api_element("p", stc0, [$cmp.isDateTime ? api_text(api_dynamic_text($cmp.dateTimeValue)) : null, $cmp.isEmail ? api_static_fragment($fragment2, 4, [api_static_part(0, {
    attrs: {
      "href": $cmp.hrefEmail
    }
  }, null), api_static_part(1, null, api_dynamic_text($cmp.value))]) : null, $cmp.isNumber ? api_text(api_dynamic_text($cmp.formattedNumber)) : null, $cmp.isPhonenumber ? api_static_fragment($fragment3, 6, [api_static_part(0, {
    attrs: {
      "href": $cmp.hrefPhonenumber
    }
  }, null), api_static_part(1, null, api_dynamic_text($cmp.formattedPhonenumber))]) : null, $cmp.isText ? api_text(api_dynamic_text($cmp.value)) : null])];
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
tmpl.stylesheetToken = "lwc-d3426se7d3";
tmpl.legacyStylesheetToken = "ui-output_output";
freezeTemplate(tmpl);
