import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./chartBar.css";

import _implicitScopedStylesheets from "./chartBar.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="container${0}"${2}><div class="text${0}"${2}>${"t2"}</div><div class="bar${0}"${"s3"}${2}></div></div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1, [api_static_part(2, null, api_dynamic_text($cmp.percentage) + "%"), api_static_part(3, {
    style: $cmp.style
  }, null)])];
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
tmpl.stylesheetToken = "lwc-6cpblfe1vh5";
tmpl.legacyStylesheetToken = "recipe-chartBar_chartBar";
freezeTemplate(tmpl);
