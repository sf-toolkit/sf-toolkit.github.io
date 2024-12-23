import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./eventSimple.css";

import _implicitScopedStylesheets from "./eventSimple.scoped.css?scoped=true";

import _recipePaginator from "recipe/paginator";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<p class="center${0}"${2}>${"t1"}</p>`;
const stc0 = {
  props: {
    "title": "EventSimple"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/eventSimple"
  },
  key: 5
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, b: api_bind, c: api_custom_element, h: api_element, t: api_text} = $api;
  const {_m0, _m1} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_static_fragment($fragment1, 3, [api_static_part(1, null, "Page " + api_dynamic_text($cmp.page))]), api_custom_element("recipe-paginator", _recipePaginator, {
    key: 4,
    on: {
      "previous": _m0 || ($ctx._m0 = api_bind($cmp.handlePrevious)),
      "next": _m1 || ($ctx._m1 = api_bind($cmp.handleNext))
    }
  })]), api_custom_element("recipe-view-source", _recipeViewSource, stc2, [api_text("Child-to-parent communication using a custom event.")])])];
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
tmpl.stylesheetToken = "lwc-2lpjl221o0m";
tmpl.legacyStylesheetToken = "recipe-eventSimple_eventSimple";
freezeTemplate(tmpl);
