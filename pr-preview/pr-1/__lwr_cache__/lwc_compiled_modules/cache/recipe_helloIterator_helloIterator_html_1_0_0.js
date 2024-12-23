import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./helloIterator.css";

import _implicitScopedStylesheets from "./helloIterator.scoped.css?scoped=true";

import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="list-first${0}"${2}></div>`;
const $fragment2 = parseFragment`<div class="list-last${0}"${2}></div>`;
const stc0 = {
  props: {
    "title": "HelloIterator"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/helloIterator"
  },
  key: 9
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, st: api_static_fragment, fr: api_fragment, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator, c: api_custom_element} = $api;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("ul", stc1, api_iterator($cmp.contacts, function (itValue, itIndex, itFirst, itLast) {
    const it = {
      value: itValue,
      index: itIndex,
      first: itFirst,
      last: itLast
    };
    return api_element("li", {
      key: api_key(2, it.value.Id)
    }, [it.first ? api_fragment(3, [api_static_fragment($fragment1, 5)], 0) : null, api_text(api_dynamic_text(it.value.Name) + ", " + api_dynamic_text(it.value.Title)), it.last ? api_fragment(6, [api_static_fragment($fragment2, 8)], 0) : null]);
  })), api_custom_element("recipe-view-source", _recipeViewSource, stc2, [api_text("Loop through an array with special behavior for the first and last items.")])])];
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
tmpl.stylesheetToken = "lwc-2ggf8bnapf5";
tmpl.legacyStylesheetToken = "recipe-helloIterator_helloIterator";
freezeTemplate(tmpl);
