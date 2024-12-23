import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./templateTwo.css";

import _implicitScopedStylesheets from "./templateTwo.scoped.css?scoped=true";

import _uiButton from "ui/button";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div${3}>Template Two</div>`;
const stc0 = {
  props: {
    "title": "MiscMultipleTemplates"
  },
  key: 0
};
const stc1 = {
  classMap: {
    "margin-vertical-small": true
  },
  key: 3
};
const stc2 = {
  "label": "Switch Templates"
};
const stc3 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/miscMultipleTemplates"
  },
  key: 5
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, b: api_bind, c: api_custom_element, h: api_element, t: api_text} = $api;
  const {_m0} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_static_fragment($fragment1, 2), api_element("p", stc1, [api_custom_element("ui-button", _uiButton, {
    props: stc2,
    key: 4,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.switchTemplate))
    }
  })]), api_custom_element("recipe-view-source", _recipeViewSource, stc3, [api_text("Choose which template to render.")])])];
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
tmpl.stylesheetToken = "lwc-1vv393fbijl";
tmpl.legacyStylesheetToken = "recipe-miscMultipleTemplates_templateTwo";
freezeTemplate(tmpl);
