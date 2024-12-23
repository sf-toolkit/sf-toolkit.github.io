import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./helloBinding.css";

import _implicitScopedStylesheets from "./helloBinding.scoped.css?scoped=true";

import _uiInput from "ui/input";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<p${3}>${"t1"}</p>`;
const stc0 = {
  props: {
    "title": "HelloBinding"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/helloBinding"
  },
  key: 5
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, b: api_bind, c: api_custom_element, h: api_element, t: api_text} = $api;
  const {_m0} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_static_fragment($fragment1, 3, [api_static_part(1, null, "Hello, " + api_dynamic_text($cmp.greeting) + "!")]), api_custom_element("ui-input", _uiInput, {
    props: {
      "label": "Name",
      "value": $cmp.greeting
    },
    key: 4,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange))
    }
  })]), api_custom_element("recipe-view-source", _recipeViewSource, stc2, [api_text("Change the value of a bound property when the value of an input field changes. Type something in the input field to see the recipe in action.")])])];
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
tmpl.stylesheetToken = "lwc-7m4o6i03pnr";
tmpl.legacyStylesheetToken = "recipe-helloBinding_helloBinding";
freezeTemplate(tmpl);
