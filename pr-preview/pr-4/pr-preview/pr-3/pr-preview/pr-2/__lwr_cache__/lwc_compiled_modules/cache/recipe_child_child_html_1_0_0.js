import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./child.css";

import _implicitScopedStylesheets from "./child.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text} = $api;
  return [api_text(" Hello, " + api_dynamic_text($cmp.fullName) + "! ")];
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
tmpl.stylesheetToken = "lwc-5u17a3qlri4";
tmpl.legacyStylesheetToken = "recipe-child_child";
freezeTemplate(tmpl);
