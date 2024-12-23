import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./libsChartjs.css";

import _implicitScopedStylesheets from "./libsChartjs.scoped.css?scoped=true";

import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "LibsChartjs"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  classMap: {
    "donut": true
  },
  context: {
    lwc: {
      dom: "manual"
    }
  },
  key: 2
};
const stc3 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/libsChartjs"
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, t: api_text, c: api_custom_element} = $api;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_element("canvas", stc2)]), api_custom_element("recipe-view-source", _recipeViewSource, stc3, [api_text("Use Chart.js in a Lightning web component.")])])];
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
tmpl.stylesheetToken = "lwc-5umhvd3ggok";
tmpl.legacyStylesheetToken = "recipe-libsChartjs_libsChartjs";
freezeTemplate(tmpl);
