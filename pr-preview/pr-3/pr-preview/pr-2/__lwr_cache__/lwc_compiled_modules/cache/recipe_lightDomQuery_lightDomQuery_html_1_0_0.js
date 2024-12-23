import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lightDomQuery.css";

import _implicitScopedStylesheets from "./lightDomQuery.scoped.css?scoped=true";

import _uiButton from "ui/button";
import _recipeLightDomQueryChild from "recipe/lightDomQueryChild";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "LightDomQuery"
  },
  key: 0
};
const stc1 = {
  "button": true
};
const stc2 = {
  "label": "Change Text on Child"
};
const stc3 = {
  key: 2
};
const stc4 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/lightDomQuery"
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, t: api_text} = $api;
  const {_m0} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_custom_element("ui-button", _uiButton, {
    classMap: stc1,
    props: stc2,
    key: 1,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleButtonClick))
    }
  }), api_custom_element("recipe-light-dom-query-child", _recipeLightDomQueryChild, stc3), api_custom_element("recipe-view-source", _recipeViewSource, stc4, [api_text("Use query selectors access nodes inside a light DOM component.")])])];
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
tmpl.stylesheetToken = "lwc-57fc0j47v20";
tmpl.legacyStylesheetToken = "recipe-lightDomQuery_lightDomQuery";
freezeTemplate(tmpl);
