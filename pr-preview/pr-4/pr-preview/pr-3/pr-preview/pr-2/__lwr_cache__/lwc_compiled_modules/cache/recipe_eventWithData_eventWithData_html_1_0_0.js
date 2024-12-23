import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./eventWithData.css";

import _implicitScopedStylesheets from "./eventWithData.scoped.css?scoped=true";

import _recipeContactListItem from "recipe/contactListItem";
import _uiOutput from "ui/output";
import _recipeErrorPanel from "recipe/errorPanel";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<img${"a0:src"} alt="Profile photo"${3}>`;
const $fragment2 = parseFragment`<p${3}>${"t1"}</p>`;
const $fragment3 = parseFragment`<p${3}>${"t1"}</p>`;
const stc0 = {
  props: {
    "title": "EventWithData"
  },
  key: 0
};
const stc1 = {
  classMap: {
    "contacts": true
  },
  key: 2
};
const stc2 = {
  classMap: {
    "contact-list": true
  },
  key: 3
};
const stc3 = {
  classMap: {
    "contact-details": true
  },
  key: 5
};
const stc4 = {
  key: 13
};
const stc5 = {
  key: 15
};
const stc6 = {
  slotAssignment: "footer",
  props: {
    "source": "recipe/eventWithData"
  },
  key: 19
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, b: api_bind, c: api_custom_element, i: api_iterator, h: api_element, sp: api_static_part, st: api_static_fragment, d: api_dynamic_text, fr: api_fragment, t: api_text} = $api;
  const {_m0} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [$cmp.contacts.data ? api_fragment(1, [api_element("div", stc1, [api_element("div", stc2, api_iterator($cmp.contacts.data, function (contact) {
    return api_custom_element("recipe-contact-list-item", _recipeContactListItem, {
      props: {
        "contact": contact
      },
      key: api_key(4, contact.Id),
      on: {
        "select": _m0 || ($ctx._m0 = api_bind($cmp.handleSelect))
      }
    });
  })), api_element("div", stc3, [$cmp.selectedContact ? api_fragment(6, [api_static_fragment($fragment1, 8, [api_static_part(0, {
    attrs: {
      "src": $cmp.selectedContact.Picture
    }
  }, null)]), api_static_fragment($fragment2, 10, [api_static_part(1, null, api_dynamic_text($cmp.selectedContact.Name))]), api_static_fragment($fragment3, 12, [api_static_part(1, null, api_dynamic_text($cmp.selectedContact.Title))]), api_element("p", stc4, [api_custom_element("ui-output", _uiOutput, {
    props: {
      "type": "phone",
      "value": $cmp.selectedContact.Phone
    },
    key: 14
  })]), api_element("p", stc5, [api_custom_element("ui-output", _uiOutput, {
    props: {
      "type": "email",
      "value": $cmp.selectedContact.Email
    },
    key: 16
  })])], 0) : null])])], 0) : null, $cmp.contacts.error ? api_fragment(17, [api_custom_element("recipe-error-panel", _recipeErrorPanel, {
    props: {
      "errors": $cmp.contacts.error
    },
    key: 18
  })], 0) : null, api_custom_element("recipe-view-source", _recipeViewSource, stc6, [api_text("Child-to-parent communication using a custom event that passes data to the parent component. Click an item in the list to see the recipe in action.")])])];
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
tmpl.stylesheetToken = "lwc-2fb6qglpjcs";
tmpl.legacyStylesheetToken = "recipe-eventWithData_eventWithData";
freezeTemplate(tmpl);
