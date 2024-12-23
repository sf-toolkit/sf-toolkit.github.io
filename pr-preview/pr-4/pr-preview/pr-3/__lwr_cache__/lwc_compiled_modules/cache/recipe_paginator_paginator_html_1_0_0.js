import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./paginator.css";

import _implicitScopedStylesheets from "./paginator.scoped.css?scoped=true";

import _uiButton from "ui/button";
import {registerTemplate} from "lwc";
const stc0 = {
  key: 0
};
const stc1 = {
  "label": "Previous"
};
const stc2 = {
  "button-right": true
};
const stc3 = {
  "label": "Next"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", stc0, [api_custom_element("ui-button", _uiButton, {
    props: stc1,
    key: 1,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handlePrevious))
    }
  }), api_custom_element("ui-button", _uiButton, {
    classMap: stc2,
    props: stc3,
    key: 2,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleNext))
    }
  })])];
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
tmpl.stylesheetToken = "lwc-psk7sgeerg";
tmpl.legacyStylesheetToken = "recipe-paginator_paginator";
freezeTemplate(tmpl);
