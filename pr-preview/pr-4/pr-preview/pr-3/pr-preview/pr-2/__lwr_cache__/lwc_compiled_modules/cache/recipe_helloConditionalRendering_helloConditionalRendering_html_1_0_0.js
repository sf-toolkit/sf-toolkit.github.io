import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./helloConditionalRendering.css";

import _implicitScopedStylesheets from "./helloConditionalRendering.scoped.css?scoped=true";

import _uiInput from "ui/input";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "HelloConditionalRendering"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  "type": "checkbox",
  "label": "Show details"
};
const stc3 = {
  classMap: {
    "details": true
  },
  key: 3
};
const stc4 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/helloConditionalRendering"
  },
  key: 5
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, t: api_text, fr: api_fragment, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_custom_element("ui-input", _uiInput, {
    props: stc2,
    key: 2,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange))
    }
  }), api_element("div", stc3, [$cmp.areDetailsVisible ? api_fragment(4, [api_text("These are the details!")], 0) : api_fragment(4, [api_text("Not showing details.")], 0)])]), api_custom_element("recipe-view-source", _recipeViewSource, stc4, [api_text("Conditionally render elements.")])])];
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
tmpl.stylesheetToken = "lwc-20qifkd8ib";
tmpl.legacyStylesheetToken = "recipe-helloConditionalRendering_helloConditionalRendering";
freezeTemplate(tmpl);
