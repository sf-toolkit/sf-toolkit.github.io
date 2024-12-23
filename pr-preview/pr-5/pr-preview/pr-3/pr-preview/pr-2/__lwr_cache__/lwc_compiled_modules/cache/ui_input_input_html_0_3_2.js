import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./input.css";

import _implicitScopedStylesheets from "./input.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<label class="field-label${0}"${2}>${"t1"}</label>`;
const $fragment2 = parseFragment`<div class="checkbox${0}"${2}><input type="checkbox"${3}><span class="checkbox${0}"${2}></span><label class="checkbox-label${0}"${2}><span${3}>${"t5"}</span></label></div>`;
const stc0 = {
  key: 0
};
const stc1 = {
  key: 3
};
const stc2 = {
  "input": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, b: api_bind, h: api_element} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("div", stc0, [!$cmp.isCheckboxField ? api_static_fragment($fragment1, 2, [api_static_part(1, null, api_dynamic_text($cmp.label))]) : null, api_element("div", stc1, [!$cmp.isCheckboxField ? api_element("input", {
    classMap: stc2,
    attrs: {
      "type": $cmp.type
    },
    props: {
      "value": $cmp.valuePrivate
    },
    key: 4,
    on: {
      "keyup": _m0 || ($ctx._m0 = api_bind($cmp.keyupHandler)),
      "change": _m1 || ($ctx._m1 = api_bind($cmp.changeHandler))
    }
  }) : null, $cmp.isCheckboxField ? api_static_fragment($fragment2, 6, [api_static_part(2, {
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.changeCheckboxHandler))
    }
  }, null), api_static_part(5, null, api_dynamic_text($cmp.label))]) : null])])];
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
tmpl.stylesheetToken = "lwc-31jgu9lecdd";
tmpl.legacyStylesheetToken = "ui-input_input";
freezeTemplate(tmpl);
