import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contactTile.css";

import _implicitScopedStylesheets from "./contactTile.scoped.css?scoped=true";

import _uiOutput from "ui/output";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<img${"a0:src"} alt="Profile photo"${3}>`;
const $fragment2 = parseFragment`<p${3}>${"t1"}</p>`;
const $fragment3 = parseFragment`<p${3}>${"t1"}</p>`;
const $fragment4 = parseFragment`<p${3}>No contact data available.</p>`;
const stc0 = {
  key: 7
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {sp: api_static_part, st: api_static_fragment, d: api_dynamic_text, c: api_custom_element, h: api_element, fr: api_fragment} = $api;
  return [$cmp.contact ? api_fragment(0, [api_static_fragment($fragment1, 2, [api_static_part(0, {
    attrs: {
      "src": $cmp.contact.Picture
    }
  }, null)]), api_static_fragment($fragment2, 4, [api_static_part(1, null, api_dynamic_text($cmp.contact.Name))]), api_static_fragment($fragment3, 6, [api_static_part(1, null, api_dynamic_text($cmp.contact.Title))]), api_element("p", stc0, [api_custom_element("ui-output", _uiOutput, {
    props: {
      "type": "phone",
      "value": $cmp.contact.Phone
    },
    key: 8
  })])], 0) : api_fragment(0, [api_static_fragment($fragment4, 10)], 0)];
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
tmpl.stylesheetToken = "lwc-2s2r66rt4oo";
tmpl.legacyStylesheetToken = "recipe-contactTile_contactTile";
freezeTemplate(tmpl);
