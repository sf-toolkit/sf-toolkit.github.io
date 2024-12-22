import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./helloForEach.css";

import _implicitScopedStylesheets from "./helloForEach.scoped.css?scoped=true";

import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<li${3}>${"t1"}</li>`;
const stc0 = {
  props: {
    "title": "HelloForEach"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/helloForEach"
  },
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, i: api_iterator, h: api_element, t: api_text, c: api_custom_element} = $api;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("ul", stc1, api_iterator($cmp.contacts, function (contact) {
    return api_static_fragment($fragment1, api_key(3, contact.Id), [api_static_part(1, null, api_dynamic_text(contact.Name) + ", " + api_dynamic_text(contact.Title))]);
  })), api_custom_element("recipe-view-source", _recipeViewSource, stc2, [api_text("Loop through an array of items in a template.")])])];
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
tmpl.stylesheetToken = "lwc-1e07mlk789m";
tmpl.legacyStylesheetToken = "recipe-helloForEach_helloForEach";
freezeTemplate(tmpl);
