import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./compositionIteration.css";

import _implicitScopedStylesheets from "./compositionIteration.scoped.css?scoped=true";

import _recipeContactTile from "recipe/contactTile";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "CompositionIteration"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/compositionIteration"
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, c: api_custom_element, i: api_iterator, h: api_element, t: api_text} = $api;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, api_iterator($cmp.contacts, function (contact) {
    return api_custom_element("recipe-contact-tile", _recipeContactTile, {
      props: {
        "contact": contact
      },
      key: api_key(2, contact.Id)
    });
  })), api_custom_element("recipe-view-source", _recipeViewSource, stc2, [api_text("Loop through an array of items in a template, and nest an instance of a child component for each item in the array.")])])];
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
tmpl.stylesheetToken = "lwc-68ji6sdrr2m";
tmpl.legacyStylesheetToken = "recipe-compositionIteration_compositionIteration";
freezeTemplate(tmpl);
