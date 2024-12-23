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
import _recipeCompositionBasics from "recipe/compositionBasics";
import _recipeCompositionIteration from "recipe/compositionIteration";
import _recipeCompositionContactSearch from "recipe/compositionContactSearch";
import _recipeCompositionDynamic from "recipe/compositionDynamic";
import _recipeEventSimple from "recipe/eventSimple";
import _recipeEventWithData from "recipe/eventWithData";
import _recipeEventBubbling from "recipe/eventBubbling";
import _recipeApiProperty from "recipe/apiProperty";
import _recipeApiFunction from "recipe/apiFunction";
import _recipeApiSetterGetter from "recipe/apiSetterGetter";
import _recipeApiSpread from "recipe/apiSpread";
import _recipeMiscSharedJavaScript from "recipe/miscSharedJavaScript";
import _recipeMiscRestApiCall from "recipe/miscRestApiCall";
import _recipeMiscDomQuery from "recipe/miscDomQuery";
import _recipeMiscMultipleTemplates from "recipe/miscMultipleTemplates";
import _recipeLibsD3 from "recipe/libsD3";
import _recipeLibsChartjs from "recipe/libsChartjs";
import _recipeLightDomQuery from "recipe/lightDomQuery";
import _recipeLightDomStyles from "recipe/lightDomStyles";
import _recipeExternalComponentCdn from "recipe/externalComponentCdn";
import _recipeExternalComponentNpm from "recipe/externalComponentNpm";
import _uiNavfooter from "ui/navfooter";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "content": true,
    "container": true,
    "page-background": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "container": true
  },
  key: 2
};
const stc2 = {
  key: 3
};
const stc3 = {
  key: 5
};
const stc4 = {
  key: 6
};
const stc5 = {
  key: 7
};
const stc6 = {
  key: 8
};
const stc7 = {
  key: 9
};
const stc8 = {
  key: 10
};
const stc9 = {
  key: 11
};
const stc10 = {
  key: 12
};
const stc11 = {
  key: 13
};
const stc12 = {
  key: 14
};
const stc13 = {
  key: 15
};
const stc14 = {
  key: 16
};
const stc15 = {
  key: 17
};
const stc16 = {
  key: 18
};
const stc17 = {
  key: 19
};
const stc18 = {
  key: 20
};
const stc19 = {
  key: 21
};
const stc20 = {
  key: 22
};
const stc21 = {
  key: 23
};
const stc22 = {
  key: 24
};
const stc23 = {
  key: 25
};
const stc24 = {
  key: 26
};
const stc25 = {
  key: 27
};
const stc26 = {
  key: 28
};
const stc27 = {
  key: 29
};
const stc28 = {
  key: 30
};
const stc29 = {
  key: 31
};
const stc30 = {
  key: 32
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, fr: api_fragment, h: api_element} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("section", stc0, [api_custom_element("ui-navbar", _uiNavbar, {
    props: {
      "navItems": $cmp.navigationItems,
      "selectedItem": $cmp.currentNavigationItem
    },
    key: 1,
    on: {
      "categorychange": _m0 || ($ctx._m0 = api_bind($cmp.handleCategoryChange))
    }
  }), api_element("article", stc1, [api_element("div", stc2, [$cmp.navigationItems.hello.visible ? api_fragment(4, [api_custom_element("recipe-hello", _recipeHello, stc3), api_custom_element("recipe-hello-binding", _recipeHelloBinding, stc4), api_custom_element("recipe-hello-expressions", _recipeHelloExpressions, stc5), api_custom_element("recipe-hello-expressions-track", _recipeHelloExpressionsTrack, stc6), api_custom_element("recipe-hello-conditional-rendering", _recipeHelloConditionalRendering, stc7), api_custom_element("recipe-hello-for-each", _recipeHelloForEach, stc8), api_custom_element("recipe-hello-iterator", _recipeHelloIterator, stc9)], 0) : $cmp.navigationItems.composition.visible ? api_fragment(4, [api_custom_element("recipe-composition-basics", _recipeCompositionBasics, stc10), api_custom_element("recipe-composition-iteration", _recipeCompositionIteration, stc11), api_custom_element("recipe-composition-contact-search", _recipeCompositionContactSearch, stc12), api_custom_element("recipe-composition-dynamic", _recipeCompositionDynamic, stc13)], 0) : $cmp.navigationItems.child.visible ? api_fragment(4, [api_custom_element("recipe-event-simple", _recipeEventSimple, stc14), api_custom_element("recipe-event-with-data", _recipeEventWithData, stc15), api_custom_element("recipe-event-bubbling", _recipeEventBubbling, stc16)], 0) : $cmp.navigationItems.parent.visible ? api_fragment(4, [api_custom_element("recipe-api-property", _recipeApiProperty, stc17), api_custom_element("recipe-api-function", _recipeApiFunction, stc18), api_custom_element("recipe-api-setter-getter", _recipeApiSetterGetter, stc19), api_custom_element("recipe-api-spread", _recipeApiSpread, stc20)], 0) : $cmp.navigationItems.misc.visible ? api_fragment(4, [api_custom_element("recipe-misc-shared-java-script", _recipeMiscSharedJavaScript, stc21), api_custom_element("recipe-misc-rest-api-call", _recipeMiscRestApiCall, stc22), api_custom_element("recipe-misc-dom-query", _recipeMiscDomQuery, stc23), api_custom_element("recipe-misc-multiple-templates", _recipeMiscMultipleTemplates, stc24)], 0) : $cmp.navigationItems.party.visible ? api_fragment(4, [api_custom_element("recipe-libs-d3", _recipeLibsD3, stc25), api_custom_element("recipe-libs-chartjs", _recipeLibsChartjs, stc26)], 0) : $cmp.navigationItems.lightDom.visible ? api_fragment(4, [api_custom_element("recipe-light-dom-query", _recipeLightDomQuery, stc27), api_custom_element("recipe-light-dom-styles", _recipeLightDomStyles, stc28)], 0) : $cmp.navigationItems.externalWc.visible ? api_fragment(4, [api_custom_element("recipe-external-component-cdn", _recipeExternalComponentCdn, stc29), api_custom_element("recipe-external-component-npm", _recipeExternalComponentNpm, stc30)], 0) : null, api_custom_element("ui-navfooter", _uiNavfooter, {
    props: {
      "labelNext": $cmp.nextNavigationItem,
      "labelPrevious": $cmp.previousNavigationItem
    },
    key: 33,
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
