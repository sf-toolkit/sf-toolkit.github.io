import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./miscRestApiCall.css";

import _implicitScopedStylesheets from "./miscRestApiCall.scoped.css?scoped=true";

import _uiInput from "ui/input";
import _uiButton from "ui/button";
import _recipeErrorPanel from "recipe/errorPanel";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<li class="search-results${0}"${2}>${"t1"}</li>`;
const $fragment2 = parseFragment`<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank"${3}>Fetch API</a>`;
const stc0 = {
  props: {
    "title": "MiscRestApiCall"
  },
  key: 0
};
const stc1 = {
  classMap: {
    "container": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "search": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "margin-vertical-small": true
  },
  key: 4
};
const stc4 = {
  "button": true
};
const stc5 = {
  "label": "Search"
};
const stc6 = {
  key: 7
};
const stc7 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/miscRestApiCall"
  },
  key: 12
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element, k: api_key, d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, i: api_iterator, fr: api_fragment, t: api_text} = $api;
  const {_m0, _m1} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_element("div", stc2, [api_custom_element("ui-input", _uiInput, {
    props: {
      "type": "search",
      "label": "Search Books",
      "value": $cmp.searchKey
    },
    key: 3,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleSearchKeyChange))
    }
  }), api_element("p", stc3, [api_custom_element("ui-button", _uiButton, {
    classMap: stc4,
    props: stc5,
    key: 5,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleSearchClick))
    }
  })])]), $cmp.books ? api_fragment(6, [api_element("ul", stc6, api_iterator($cmp.books.items, function (book) {
    return api_static_fragment($fragment1, api_key(9, book.id), [api_static_part(1, null, api_dynamic_text(book.volumeInfo.title))]);
  }))], 0) : null, $cmp.error ? api_fragment(10, [api_custom_element("recipe-error-panel", _recipeErrorPanel, {
    props: {
      "errors": $cmp.error
    },
    key: 11
  })], 0) : null]), api_custom_element("recipe-view-source", _recipeViewSource, stc7, [api_text("Call a REST service using the "), api_static_fragment($fragment2, 14), api_text(".")])])];
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
tmpl.stylesheetToken = "lwc-32mc3oaaepu";
tmpl.legacyStylesheetToken = "recipe-miscRestApiCall_miscRestApiCall";
freezeTemplate(tmpl);
