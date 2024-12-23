import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hello.css";

import _implicitScopedStylesheets from "./hello.scoped.css?scoped=true";

import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div${3}>${"t1"}</div>`;
const stc0 = {
  props: {
    "title": "Hello"
  },
  key: 0
};
const stc1 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/hello"
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, t: api_text, c: api_custom_element} = $api;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_static_fragment($fragment1, 2, [api_static_part(1, null, "Hello, " + api_dynamic_text($cmp.greeting) + "!")]), api_custom_element("recipe-view-source", _recipeViewSource, stc1, [api_text("Bind an HTML element to a component property.")])])];
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
tmpl.stylesheetToken = "lwc-s8tjrs6194";
tmpl.legacyStylesheetToken = "recipe-hello_hello";
freezeTemplate(tmpl);
