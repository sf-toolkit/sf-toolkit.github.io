import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./compositionBasics.css";

import _implicitScopedStylesheets from "./compositionBasics.scoped.css?scoped=true";

import _recipeContactTile from "recipe/contactTile";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "CompositionBasics"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/compositionBasics"
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, t: api_text} = $api;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_custom_element("recipe-contact-tile", _recipeContactTile, {
    props: {
      "contact": $cmp.contact
    },
    key: 2
  })]), api_custom_element("recipe-view-source", _recipeViewSource, stc2, [api_text("Nest a child component into a parent component and pass data to the child component using its public (@api) properties.")])])];
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
tmpl.stylesheetToken = "lwc-2h0pi111iuf";
tmpl.legacyStylesheetToken = "recipe-compositionBasics_compositionBasics";
freezeTemplate(tmpl);
