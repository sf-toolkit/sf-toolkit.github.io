import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./helloExpressionsTrack.css";

import _implicitScopedStylesheets from "./helloExpressionsTrack.scoped.css?scoped=true";

import _uiInput from "ui/input";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<p class="margin-top-medium${0}"${2}>${"t1"}</p>`;
const stc0 = {
  props: {
    "title": "HelloExpressionsTrack"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  "name": "firstName",
  "label": "First Name"
};
const stc3 = {
  "name": "lastName",
  "label": "Last Name"
};
const stc4 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/helloExpressionsTrack"
  },
  key: 6
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, h: api_element, t: api_text} = $api;
  const {_m0, _m1} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_custom_element("ui-input", _uiInput, {
    props: stc2,
    key: 2,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange))
    }
  }), api_custom_element("ui-input", _uiInput, {
    props: stc3,
    key: 3,
    on: {
      "change": _m1 || ($ctx._m1 = api_bind($cmp.handleChange))
    }
  }), api_static_fragment($fragment1, 5, [api_static_part(1, null, "Uppercased Full Name: " + api_dynamic_text($cmp.uppercasedFullName))])]), api_custom_element("recipe-view-source", _recipeViewSource, stc4, [api_text("Use JavaScript expressions in a template that leverages the @track Decorator on an object. Type something in the input fields to see the recipe in action.")])])];
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
tmpl.stylesheetToken = "lwc-76qto4s1rj8";
tmpl.legacyStylesheetToken = "recipe-helloExpressionsTrack_helloExpressionsTrack";
freezeTemplate(tmpl);
