import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./todoList.css";

import _implicitScopedStylesheets from "./todoList.scoped.css?scoped=true";

import _uiInput from "ui/input";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<li${3}><div class="todo-content${0}"${2}><p${3}>${"t3"}</p><p${3}>${"t5"}</p></div></li>`;
const stc0 = {
  key: 0
};
const stc1 = {
  "label": "Priority Only",
  "type": "checkbox"
};
const stc2 = {
  classMap: {
    "margin-top-small": true
  },
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, k: api_key, d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, i: api_iterator, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_custom_element("ui-input", _uiInput, {
    props: stc1,
    key: 1,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleCheckboxChange))
    }
  }), api_element("ul", stc2, api_iterator($cmp.filteredTodos, function (todo) {
    return api_static_fragment($fragment1, api_key(4, todo.id), [api_static_part(3, null, api_dynamic_text(todo.description)), api_static_part(5, null, "Priority: " + api_dynamic_text(todo.priority))]);
  }))])];
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
tmpl.stylesheetToken = "lwc-2lsmkjopqd6";
tmpl.legacyStylesheetToken = "recipe-todoList_todoList";
freezeTemplate(tmpl);
