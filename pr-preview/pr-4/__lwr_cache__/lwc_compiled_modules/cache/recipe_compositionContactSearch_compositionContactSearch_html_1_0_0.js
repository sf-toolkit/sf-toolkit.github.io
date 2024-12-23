import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./compositionContactSearch.css";

import _implicitScopedStylesheets from "./compositionContactSearch.scoped.css?scoped=true";

import _uiInput from "ui/input";
import _recipeContactTile from "recipe/contactTile";
import _recipeErrorPanel from "recipe/errorPanel";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "CompositionContactSearch"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  "type": "search",
  "label": "Search"
};
const stc3 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/compositionContactSearch"
  },
  key: 7
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, k: api_key, i: api_iterator, fr: api_fragment, h: api_element, t: api_text} = $api;
  const {_m0} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_custom_element("ui-input", _uiInput, {
    props: stc2,
    key: 2,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleKeyChange))
    }
  }), $cmp.contacts ? api_fragment(3, api_iterator($cmp.contacts, function (contact) {
    return api_custom_element("recipe-contact-tile", _recipeContactTile, {
      props: {
        "contact": contact
      },
      key: api_key(4, contact.Id)
    });
  }), 0) : null]), $cmp.error ? api_fragment(5, [api_custom_element("recipe-error-panel", _recipeErrorPanel, {
    props: {
      "errors": $cmp.error
    },
    key: 6
  })], 0) : null, api_custom_element("recipe-view-source", _recipeViewSource, stc3, [api_text("Create an experience component by assembling multiple child components. Type a few characters in the search bar to experience the recipe.")])])];
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
tmpl.stylesheetToken = "lwc-6tsa97mucd0";
tmpl.legacyStylesheetToken = "recipe-compositionContactSearch_compositionContactSearch";
freezeTemplate(tmpl);
