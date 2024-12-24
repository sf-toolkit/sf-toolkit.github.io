import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./inlineMessage.css";

import _implicitScopedStylesheets from "./inlineMessage.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<a${3}> Show details.</a>`;
const $fragment2 = parseFragment`<p${3}>${"t1"}</p>`;
const stc0 = {
  classMap: {
    "m-vertical_small": true,
    "text-body_regular": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "text-color_destructive": true
  },
  key: 1
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, b: api_bind, sp: api_static_part, st: api_static_fragment, fr: api_fragment, h: api_element, k: api_key, i: api_iterator} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", stc0, [api_element("span", stc1, [api_text(api_dynamic_text($cmp.friendlyMessage) + "."), $cmp.errorMessages.length ? api_fragment(2, [api_static_fragment($fragment1, 4, [api_static_part(0, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleShowDetailsClick))
    }
  }, null)])], 0) : null]), $cmp.errorMessages.length ? api_fragment(5, [$cmp.viewDetails ? api_fragment(6, api_iterator($cmp.errorMessages, function (message) {
    return api_static_fragment($fragment2, api_key(8, message), [api_static_part(1, null, api_dynamic_text(message))]);
  }), 0) : null], 0) : null])];
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
tmpl.stylesheetToken = "lwc-75m54q36a80";
tmpl.legacyStylesheetToken = "recipe-errorPanel_inlineMessage";
freezeTemplate(tmpl);
