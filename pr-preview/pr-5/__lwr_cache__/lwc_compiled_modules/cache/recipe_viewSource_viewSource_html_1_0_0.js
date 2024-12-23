import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./viewSource.css";

import _implicitScopedStylesheets from "./viewSource.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<p${3}><a${"a1:href"} target="source"${3}>View Source</a></p>`;
const stc0 = {
  classMap: {
    "description": true
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {s: api_slot, h: api_element, sp: api_static_part, st: api_static_fragment} = $api;
  return [api_element("div", stc0, [api_slot("", stc1, stc2, $slotset)]), api_static_fragment($fragment1, 3, [api_static_part(1, {
    attrs: {
      "href": $cmp.sourceURL
    }
  }, null)])];
  /*LWC compiler v6.5.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-26jsnr2siv8";
tmpl.legacyStylesheetToken = "recipe-viewSource_viewSource";
freezeTemplate(tmpl);
