import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./card.css";

import _implicitScopedStylesheets from "./card.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="card-title${0}"${2}>${"t1"}</div>`;
const $fragment2 = parseFragment`<div class="card-subtitle${0}"${2}>${"t1"}</div>`;
const stc0 = {
  classMap: {
    "card": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "card-header": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "card-body": true
  },
  key: 6
};
const stc3 = {
  key: 7
};
const stc4 = [];
const stc5 = {
  classMap: {
    "card-footer": true
  },
  key: 8
};
const stc6 = {
  attrs: {
    "name": "footer"
  },
  key: 9
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, h: api_element, s: api_slot} = $api;
  return [api_element("div", stc0, [api_element("div", stc1, [$cmp.title ? api_static_fragment($fragment1, 3, [api_static_part(1, null, api_dynamic_text($cmp.title))]) : null, $cmp.subtitle ? api_static_fragment($fragment2, 5, [api_static_part(1, null, api_dynamic_text($cmp.subtitle))]) : null]), api_element("div", stc2, [api_slot("", stc3, stc4, $slotset)]), api_element("div", stc5, [api_slot("footer", stc6, stc4, $slotset)])])];
  /*LWC compiler v6.5.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = ["", "footer"];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-57qbsj9dbjv";
tmpl.legacyStylesheetToken = "ui-card_card";
freezeTemplate(tmpl);
