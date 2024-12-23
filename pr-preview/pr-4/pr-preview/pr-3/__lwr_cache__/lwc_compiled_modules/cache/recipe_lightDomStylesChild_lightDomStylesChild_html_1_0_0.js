import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lightDomStylesChild.css";

import _implicitScopedStylesheets from "./lightDomStylesChild.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<p${3}>This paragraph element is styled by parent component</p>`;
const $fragment2 = parseFragment`<div class="scoped${0}"${2}>This is a div element is styled by scoped styles</div>`;
const $fragment3 = parseFragment`<div class="unscoped${0}"${2}>This is a div element is styled by unscoped styles</div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1), api_static_fragment($fragment2, 3), api_static_fragment($fragment3, 5)];
  /*LWC compiler v6.5.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.renderMode = "light";


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-49cdqojhrgu";
tmpl.legacyStylesheetToken = "recipe-lightDomStylesChild_lightDomStylesChild";
freezeTemplate(tmpl);
