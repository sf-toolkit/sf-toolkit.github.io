import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./miscDomQuery.css";

import _implicitScopedStylesheets from "./miscDomQuery.scoped.css?scoped=true";

import _uiInput from "ui/input";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<p class="margin-top${0}"${2}>${"t1"}</p>`;
const stc0 = {
  props: {
    "title": "MiscDomQuery"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  "label": "Category 1",
  "type": "checkbox"
};
const stc3 = {
  "label": "Category 2",
  "type": "checkbox"
};
const stc4 = {
  "label": "Category 3",
  "type": "checkbox"
};
const stc5 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/miscDomQuery"
  },
  key: 7
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, h: api_element, t: api_text} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_custom_element("ui-input", _uiInput, {
    props: stc2,
    key: 2,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleCheckboxChange))
    }
  }), api_custom_element("ui-input", _uiInput, {
    props: stc3,
    key: 3,
    on: {
      "change": _m1 || ($ctx._m1 = api_bind($cmp.handleCheckboxChange))
    }
  }), api_custom_element("ui-input", _uiInput, {
    props: stc4,
    key: 4,
    on: {
      "change": _m2 || ($ctx._m2 = api_bind($cmp.handleCheckboxChange))
    }
  }), api_static_fragment($fragment1, 6, [api_static_part(1, null, "Checked items: " + api_dynamic_text($cmp.selection))])]), api_custom_element("recipe-view-source", _recipeViewSource, stc5, [api_text("Use query selectors to access DOM elements.")])])];
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
tmpl.stylesheetToken = "lwc-4uijt46erg6";
tmpl.legacyStylesheetToken = "recipe-miscDomQuery_miscDomQuery";
freezeTemplate(tmpl);
