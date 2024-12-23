import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./libsD3.css";

import _implicitScopedStylesheets from "./libsD3.scoped.css?scoped=true";

import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "LibsD3"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  "d3": true
};
const stc3 = {
  lwc: {
    dom: "manual"
  }
};
const stc4 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/libsD3"
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, t: api_text, c: api_custom_element} = $api;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_element("svg", {
    classMap: stc2,
    attrs: {
      "width": $cmp.svgWidth,
      "height": $cmp.svgHeight
    },
    context: stc3,
    key: 2,
    svg: true
  })]), api_custom_element("recipe-view-source", _recipeViewSource, stc4, [api_text("Integrate D3 into a Lightning web component for custom, data-driven visualizations.")])])];
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
tmpl.stylesheetToken = "lwc-4uum17vp215";
tmpl.legacyStylesheetToken = "recipe-libsD3_libsD3";
freezeTemplate(tmpl);
