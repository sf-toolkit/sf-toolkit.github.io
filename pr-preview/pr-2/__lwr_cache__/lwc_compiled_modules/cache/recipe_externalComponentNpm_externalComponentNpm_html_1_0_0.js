import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./externalComponentNpm.css";

import _implicitScopedStylesheets from "./externalComponentNpm.scoped.css?scoped=true";

import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "ExternalComponentNPM"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  key: 2,
  external: true
};
const stc3 = {
  key: 3,
  external: true
};
const stc4 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/externalComponentNpm"
  },
  key: 6
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {t: api_text, h: api_element, b: api_bind, c: api_custom_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_element("wired-card", stc2, [api_text("Form built with third-party web components"), api_element("wired-divider", stc3), api_element("wired-input", {
    attrs: {
      "value": $cmp.greeting
    },
    key: 4,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange))
    },
    external: true
  }), api_element("wired-button", {
    key: 5,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleSayHelloClick))
    },
    external: true
  }, [api_text("Say Hello")])])]), api_custom_element("recipe-view-source", _recipeViewSource, stc4, [api_text("Import third-party web components from an npm package.")])])];
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
tmpl.stylesheetToken = "lwc-4ie3h8nfqh5";
tmpl.legacyStylesheetToken = "recipe-externalComponentNpm_externalComponentNpm";
freezeTemplate(tmpl);
