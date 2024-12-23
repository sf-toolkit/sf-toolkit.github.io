import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./externalComponentCdn.css";

import _implicitScopedStylesheets from "./externalComponentCdn.scoped.css?scoped=true";

import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<p${3}>${"t1"}</p>`;
const stc0 = {
  props: {
    "title": "ExternalComponentCDN"
  },
  key: 0
};
const stc1 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/externalComponentCdn"
  },
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, t: api_text, c: api_custom_element} = $api;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("sl-rating", {
    attrs: {
      "label": "Rating",
      "value": $cmp.rating
    },
    key: 1,
    external: true
  }), api_static_fragment($fragment1, 3, [api_static_part(1, null, "Selected Rating is: " + api_dynamic_text($cmp.rating))]), api_custom_element("recipe-view-source", _recipeViewSource, stc1, [api_text("Import a third-party web component from a CDN.")])])];
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
tmpl.stylesheetToken = "lwc-6mn191gev8j";
tmpl.legacyStylesheetToken = "recipe-externalComponentCdn_externalComponentCdn";
freezeTemplate(tmpl);
