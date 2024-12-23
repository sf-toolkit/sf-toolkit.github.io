import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apiFunction.css";

import _implicitScopedStylesheets from "./apiFunction.scoped.css?scoped=true";

import _uiButton from "ui/button";
import _recipeClock from "recipe/clock";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "ApiFunction"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  "label": "Refresh Time"
};
const stc3 = {
  key: 3
};
const stc4 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/apiFunction"
  },
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element, t: api_text} = $api;
  const {_m0} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_custom_element("ui-button", _uiButton, {
    props: stc2,
    key: 2,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleRefresh))
    }
  }), api_custom_element("recipe-clock", _recipeClock, stc3)]), api_custom_element("recipe-view-source", _recipeViewSource, stc4, [api_text("Parent-to-child communication. Call a public (@api) function in a child component.")])])];
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
tmpl.stylesheetToken = "lwc-4eq3uqppcul";
tmpl.legacyStylesheetToken = "recipe-apiFunction_apiFunction";
freezeTemplate(tmpl);
