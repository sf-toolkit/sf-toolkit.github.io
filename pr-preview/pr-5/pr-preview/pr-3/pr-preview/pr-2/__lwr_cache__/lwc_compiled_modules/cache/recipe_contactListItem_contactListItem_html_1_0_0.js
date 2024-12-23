import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contactListItem.css";

import _implicitScopedStylesheets from "./contactListItem.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<img${"a0:src"} alt="Profile photo"${3}>`;
const $fragment2 = parseFragment`<p${3}>${"t1"}</p>`;
const stc0 = {
  "href": "#"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, sp: api_static_part, st: api_static_fragment, d: api_dynamic_text, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("a", {
    attrs: stc0,
    key: 0,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
    }
  }, [api_static_fragment($fragment1, 2, [api_static_part(0, {
    attrs: {
      "src": $cmp.contact.Picture
    }
  }, null)]), api_static_fragment($fragment2, 4, [api_static_part(1, null, api_dynamic_text($cmp.contact.Name))])])];
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
tmpl.stylesheetToken = "lwc-6burreneq3a";
tmpl.legacyStylesheetToken = "recipe-contactListItem_contactListItem";
freezeTemplate(tmpl);
