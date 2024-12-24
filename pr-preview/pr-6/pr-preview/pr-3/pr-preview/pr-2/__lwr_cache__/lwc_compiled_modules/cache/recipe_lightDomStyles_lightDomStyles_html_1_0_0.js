import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lightDomStyles.css";

import _implicitScopedStylesheets from "./lightDomStyles.scoped.css?scoped=true";

import _recipeLightDomStylesChild from "recipe/lightDomStylesChild";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<p${3}>This is a paragraph in parent</p>`;
const $fragment2 = parseFragment`<div class="scoped${0}"${2}>This element remains unstyled by Light DOM child&#x27;s scoped styles</div>`;
const $fragment3 = parseFragment`<div class="unscoped${0}"${2}>This element is styled by Light DOM child&#x27;s unscoped styles</div>`;
const stc0 = {
  props: {
    "title": "LightDomStyles"
  },
  key: 0
};
const stc1 = {
  key: 7
};
const stc2 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/lightDomStyles"
  },
  key: 8
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, t: api_text} = $api;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_static_fragment($fragment1, 2), api_static_fragment($fragment2, 4), api_static_fragment($fragment3, 6), api_custom_element("recipe-light-dom-styles-child", _recipeLightDomStylesChild, stc1), api_custom_element("recipe-view-source", _recipeViewSource, stc2, [api_text("Styles from the parent component cascade into the child component, and unscoped styles from the child are applied to the parent component.")])])];
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
tmpl.stylesheetToken = "lwc-4vcchl29li9";
tmpl.legacyStylesheetToken = "recipe-lightDomStyles_lightDomStyles";
freezeTemplate(tmpl);
