import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./compositionDynamic.css";

import _implicitScopedStylesheets from "./compositionDynamic.scoped.css?scoped=true";

import _uiButton from "ui/button";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "CompositionDynamic"
  },
  key: 0
};
const stc1 = {
  "label": "Load Hello Component"
};
const stc2 = {
  classMap: {
    "dynamic-component": true
  },
  key: 2
};
const stc3 = {
  key: 3
};
const stc4 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/compositionDynamic"
  },
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, dc: api_dynamic_component, h: api_element, t: api_text} = $api;
  const {_m0} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_custom_element("ui-button", _uiButton, {
    props: stc1,
    key: 1,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.loadComponent))
    }
  }), api_element("div", stc2, [api_dynamic_component($cmp.componentConstructor, stc3)]), api_custom_element("recipe-view-source", _recipeViewSource, stc4, [api_text("Load a component dynamically by assigning a constructor at runtime.")])])];
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
tmpl.stylesheetToken = "lwc-7ujr06u40fn";
tmpl.legacyStylesheetToken = "recipe-compositionDynamic_compositionDynamic";
freezeTemplate(tmpl);
