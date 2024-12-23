import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _uiNavbar from "ui/navbar";
import _recipeHello from "recipe/hello";
import _recipeHelloBinding from "recipe/helloBinding";
import _recipeHelloExpressions from "recipe/helloExpressions";
import _recipeHelloExpressionsTrack from "recipe/helloExpressionsTrack";
import _recipeHelloConditionalRendering from "recipe/helloConditionalRendering";
import _recipeHelloForEach from "recipe/helloForEach";
import _recipeHelloIterator from "recipe/helloIterator";
import _uiNavfooter from "ui/navfooter";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div${3}>Title</div>`;
const stc0 = {
  classMap: {
    "content": true,
    "container": true,
    "page-background": true
  },
  key: 2
};
const stc1 = {
  classMap: {
    "container": true
  },
  key: 4
};
const stc2 = {
  key: 5
};
const stc3 = {
  key: 7
};
const stc4 = {
  key: 8
};
const stc5 = {
  key: 9
};
const stc6 = {
  key: 10
};
const stc7 = {
  key: 11
};
const stc8 = {
  key: 12
};
const stc9 = {
  key: 13
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, b: api_bind, c: api_custom_element, fr: api_fragment, h: api_element} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_static_fragment($fragment1, 1), api_element("section", stc0, [api_custom_element("ui-navbar", _uiNavbar, {
    props: {
      "navItems": $cmp.navigationItems,
      "selectedItem": $cmp.currentNavigationItem
    },
    key: 3,
    on: {
      "categorychange": _m0 || ($ctx._m0 = api_bind($cmp.handleCategoryChange))
    }
  }), api_element("article", stc1, [api_element("div", stc2, [$cmp.navigationItems.hello.visible ? api_fragment(6, [api_custom_element("recipe-hello", _recipeHello, stc3), api_custom_element("recipe-hello-binding", _recipeHelloBinding, stc4), api_custom_element("recipe-hello-expressions", _recipeHelloExpressions, stc5), api_custom_element("recipe-hello-expressions-track", _recipeHelloExpressionsTrack, stc6), api_custom_element("recipe-hello-conditional-rendering", _recipeHelloConditionalRendering, stc7), api_custom_element("recipe-hello-for-each", _recipeHelloForEach, stc8), api_custom_element("recipe-hello-iterator", _recipeHelloIterator, stc9)], 0) : null, api_custom_element("ui-navfooter", _uiNavfooter, {
    props: {
      "labelNext": $cmp.nextNavigationItem,
      "labelPrevious": $cmp.previousNavigationItem
    },
    key: 14,
    on: {
      "nextclicked": _m1 || ($ctx._m1 = api_bind($cmp.handleNavigateNext)),
      "previousclicked": _m2 || ($ctx._m2 = api_bind($cmp.handleNavigatePrevious))
    }
  })])])])];
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
tmpl.stylesheetToken = "lwc-1uh17g0ai6h";
tmpl.legacyStylesheetToken = "ui-app_app";
freezeTemplate(tmpl);
