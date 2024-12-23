import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./navbar.css";

import _implicitScopedStylesheets from "./navbar.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<input${"a0:id"} type="checkbox" hidden="" checked=""${3}>`;
const stc0 = {
  classMap: {
    "nav": true
  },
  attrs: {
    "role": "navigation"
  },
  key: 0
};
const stc1 = {
  classMap: {
    "nav__list": true
  },
  key: 1
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, gid: api_scoped_id, sp: api_static_part, st: api_static_fragment, fid: api_scoped_frag_id, b: api_bind, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator} = $api;
  const {_m0} = $ctx;
  return [api_element("nav", stc0, [api_element("ul", stc1, api_iterator($cmp.navItems, function (navItem) {
    return api_element("li", {
      key: api_key(2, navItem.title)
    }, [api_static_fragment($fragment1, 4, [api_static_part(0, {
      attrs: {
        "id": api_scoped_id(navItem.title)
      }
    }, null)]), api_element("label", {
      attrs: {
        "for": api_scoped_id(navItem.title)
      },
      key: 5
    }, [api_element("a", {
      attrs: {
        "href": api_scoped_frag_id("#"),
        "title": navItem.title,
        "data-item": navItem.value
      },
      key: 6,
      on: {
        "click": _m0 || ($ctx._m0 = api_bind($cmp.handleNavItemClick))
      }
    }, [api_text(api_dynamic_text(navItem.title))])])]);
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
tmpl.stylesheetToken = "lwc-1chfe8ai2hf";
tmpl.legacyStylesheetToken = "ui-navbar_navbar";
freezeTemplate(tmpl);
