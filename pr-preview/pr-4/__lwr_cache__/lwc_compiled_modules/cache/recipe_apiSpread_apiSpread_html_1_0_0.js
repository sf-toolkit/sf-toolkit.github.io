import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apiSpread.css";

import _implicitScopedStylesheets from "./apiSpread.scoped.css?scoped=true";

import _uiInput from "ui/input";
import _recipeChild from "recipe/child";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "ApiSpread"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/apiSpread"
  },
  key: 5
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element, t: api_text} = $api;
  const {_m0, _m1} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_custom_element("ui-input", _uiInput, {
    props: {
      "label": "First Name",
      "name": "firstName",
      "type": "text",
      "value": $cmp.props.firstName
    },
    key: 2,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleFirstNameChange))
    }
  }), api_custom_element("ui-input", _uiInput, {
    props: {
      "label": "Last Name",
      "name": "lastName",
      "type": "text",
      "value": $cmp.props.lastName
    },
    key: 3,
    on: {
      "change": _m1 || ($ctx._m1 = api_bind($cmp.handleLastNameChange))
    }
  }), api_custom_element("recipe-child", _recipeChild, {
    props: {
      ...$cmp.props
    },
    key: 4
  })]), api_custom_element("recipe-view-source", _recipeViewSource, stc2, [api_text("Pass data to a child component using lwc:spread directive")])])];
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
tmpl.stylesheetToken = "lwc-5etagepkos4";
tmpl.legacyStylesheetToken = "recipe-apiSpread_apiSpread";
freezeTemplate(tmpl);
