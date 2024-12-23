import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./miscSharedJavaScript.css";

import _implicitScopedStylesheets from "./miscSharedJavaScript.scoped.css?scoped=true";

import _uiInput from "ui/input";
import _uiSelect from "ui/select";
import _uiButton from "ui/button";
import _uiOutput from "ui/output";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<br${3}>`;
const stc0 = {
  props: {
    "title": "MiscSharedJavaScript"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  classMap: {
    "margin-vertical-small": true
  },
  key: 5
};
const stc3 = {
  "label": "Calculate Monthly Payment"
};
const stc4 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/miscSharedJavaScript"
  },
  key: 10
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element, st: api_static_fragment, t: api_text} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_custom_element("ui-input", _uiInput, {
    props: {
      "type": "number",
      "label": "Principal",
      "value": $cmp.principal
    },
    key: 2,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.principalChange))
    }
  }), api_custom_element("ui-select", _uiSelect, {
    props: {
      "label": "Term",
      "value": $cmp.term,
      "options": $cmp.termOptions
    },
    key: 3,
    on: {
      "change": _m1 || ($ctx._m1 = api_bind($cmp.termChange))
    }
  }), api_custom_element("ui-input", _uiInput, {
    props: {
      "type": "number",
      "label": "Rate",
      "value": $cmp.rate
    },
    key: 4,
    on: {
      "change": _m2 || ($ctx._m2 = api_bind($cmp.rateChange))
    }
  }), api_element("p", stc2, [api_custom_element("ui-button", _uiButton, {
    props: stc3,
    key: 6,
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.calculateMonthlyPayment))
    }
  })]), api_custom_element("ui-output", _uiOutput, {
    props: {
      "type": "number",
      "currencyCode": "USD",
      "value": $cmp.monthlyPayment
    },
    key: 7
  }), api_static_fragment($fragment1, 9)]), api_custom_element("recipe-view-source", _recipeViewSource, stc4, [api_text("Share JavaScript code using JavaScript modules. In this case, the JavaScript module provides the logic to calculate mortgage payments.")])])];
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
tmpl.stylesheetToken = "lwc-65lddp1u8t1";
tmpl.legacyStylesheetToken = "recipe-miscSharedJavaScript_miscSharedJavaScript";
freezeTemplate(tmpl);
