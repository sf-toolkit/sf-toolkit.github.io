import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./select.css";

import _implicitScopedStylesheets from "./select.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<label class="field-label${0}"${2}>${"t1"}</label>`;
const $fragment2 = parseFragment`<option${3}>${"t1"}</option>`;
const stc0 = {
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, b: api_bind, k: api_key, i: api_iterator, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2, [api_static_part(1, null, api_dynamic_text($cmp.label))]), api_element("select", {
    key: 3,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange))
    }
  }, api_iterator($cmp.options, function (option) {
    return api_static_fragment($fragment2, api_key(5, option.value), [api_static_part(1, null, api_dynamic_text(option.label))]);
  }))])];
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
tmpl.stylesheetToken = "lwc-49edi4di4el";
tmpl.legacyStylesheetToken = "ui-select_select";
freezeTemplate(tmpl);
