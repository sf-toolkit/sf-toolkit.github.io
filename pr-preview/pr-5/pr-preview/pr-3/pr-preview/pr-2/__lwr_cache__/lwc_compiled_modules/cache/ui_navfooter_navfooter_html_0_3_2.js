import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./navfooter.css";

import _implicitScopedStylesheets from "./navfooter.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "page-nav": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "previous": true
  },
  key: 1
};
const stc2 = {
  "href": "#"
};
const stc3 = {
  classMap: {
    "next": true
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {t: api_text, b: api_bind, d: api_dynamic_text, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", stc0, [$cmp.labelPrevious ? api_element("span", stc1, [api_text("←  "), api_element("a", {
    attrs: stc2,
    key: 2,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handlePreviousClick))
    }
  }, [api_text(api_dynamic_text($cmp.labelPrevious.title))])]) : null, $cmp.labelNext ? api_element("span", stc3, [api_element("a", {
    attrs: stc2,
    key: 4,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleNextClick))
    }
  }, [api_text(api_dynamic_text($cmp.labelNext.title))]), api_text("  →")]) : null])];
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
tmpl.stylesheetToken = "lwc-176p3jq4p6p";
tmpl.legacyStylesheetToken = "ui-navfooter_navfooter";
freezeTemplate(tmpl);
