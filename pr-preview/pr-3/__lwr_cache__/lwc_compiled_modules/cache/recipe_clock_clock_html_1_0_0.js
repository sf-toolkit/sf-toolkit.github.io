import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./clock.css";

import _implicitScopedStylesheets from "./clock.scoped.css?scoped=true";

import _uiOutput from "ui/output";
import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element} = $api;
  return [api_custom_element("ui-output", _uiOutput, {
    props: {
      "value": $cmp.timestamp
    },
    key: 0
  })];
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
tmpl.stylesheetToken = "lwc-3mn5p70ccin";
tmpl.legacyStylesheetToken = "recipe-clock_clock";
freezeTemplate(tmpl);
