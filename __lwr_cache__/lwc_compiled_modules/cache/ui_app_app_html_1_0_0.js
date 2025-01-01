import _implicitStylesheets from "./app.css";
import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<div class="slds-col slds-size_1-of-2 slds-medium-size_1-of-3${0}"${2}><div class="slds-box slds-box_x-small slds-theme_shade${0}"${2}><h1 class="slds-text-heading_large slds-text-align_center${0}"${2}>SF Toolkit</h1><p class="slds-text-body_regular slds-text-align_center slds-p-vertical_small${0}"${2}>Welcome to the SF Toolkit that provide multiple tools to help you monitor your orgs, analyse the permissions &amp; profiles, etc</p><p class="slds-text-body_regular slds-text-align_center${0}"${2}><strong${3}>Built with LWC and LWR</strong><br${3}>(Web, Chrome Extension and Electron)</p><img src="path/to/your/image.jpg" alt="SF Toolkit Landscape" class="slds-image slds-size_full${0}"${2}></div></div>`;
const $fragment2 = parseFragment`<div class="slds-p-vertical_medium${0}"${2}><div class="slds-box slds-box_x-small slds-theme_default${0}"${2}><div class="slds-media slds-media_center${0}"${2}><div class="slds-media__figure${0}"${2}><span class="slds-icon_container slds-icon-standard-{action.icon}${0}" title="Description of icon when needed"${2}><svg class="slds-icon slds-icon_small${0}" aria-hidden="true"${2}><use${"a6:xlink:href"}${3}/></svg></span></div><div class="slds-media__body${0}"${2}><h3 class="slds-text-heading_small${0}"${2}>${"t9"}</h3><p class="slds-text-body_small${0}"${2}>${"t11"}</p></div></div></div></div>`;
const $fragment3 = parseFragment`<div class="slds-card__header slds-grid${0}"${2}><header class="slds-media slds-media_center slds-has-flexi-truncate${0}"${2}><div class="slds-media__figure${0}"${2}><span class="slds-icon_container slds-icon-standard-instruction${0}" title="Instructions"${2}><svg class="slds-icon slds-icon_small${0}" aria-hidden="true"${2}><use${"a5:xlink:href"}${3}/></svg></span></div><div class="slds-media__body${0}"${2}><h2 class="slds-card__header-title${0}"${2}><a href="javascript:void(0);" class="slds-card__header-link slds-truncate${0}" title="App Instructions"${2}><span${3}>App Instructions</span></a></h2></div></header></div>`;
const $fragment4 = parseFragment`<div class="slds-p-vertical_small${0}"${2}><h3 class="slds-text-heading_small${0}"${2}>${"t2"}</h3><p class="slds-text-body_regular${0}"${2}>${"t4"}</p></div>`;
const $fragment5 = parseFragment`<div class="slds-col slds-size_1-of-3 slds-p-around_medium${0}"${2}><div class="slds-card${0}"${2}><div class="slds-card__header slds-grid${0}"${2}><h2 class="slds-text-heading_small slds-truncate${0}"${2}>${"t4"}</h2></div><div class="slds-card__body slds-card__body_inner${0}"${2}><img${"a6:src"}${"a6:alt"} class="slds-card__image${0}"${2}><p class="slds-text-body_small slds-p-top_small${0}"${2}>${"t8"}</p></div></div></div>`;
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-grid--align-center": true,
    "slds-p-around_medium": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-2": true,
    "slds-medium-size_2-of-3": true
  },
  key: 3
};
const stc2 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_align-center": true,
    "slds-p-vertical_medium": true
  },
  key: 6
};
const stc3 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-1": true,
    "slds-medium-size_2-of-3": true
  },
  key: 7
};
const stc4 = {
  classMap: {
    "slds-card": true
  },
  key: 8
};
const stc5 = {
  classMap: {
    "slds-card__body": true,
    "slds-card__body_inner": true
  },
  key: 11
};
const stc6 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 14
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, k: api_key, d: api_dynamic_text, sp: api_static_part, i: api_iterator, f: api_flatten, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2), api_element("div", stc1, api_flatten([api_iterator($cmp.actions, function (action) {
    return api_static_fragment($fragment2, api_key(5, action.title), [api_static_part(6, {
      attrs: {
        "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#{action.icon}")
      }
    }, null), api_static_part(9, null, api_dynamic_text(action.title)), api_static_part(11, null, api_dynamic_text(action.description))]);
  })]))]), api_element("section", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_static_fragment($fragment3, 10, [api_static_part(5, {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#instruction")
    }
  }, null)]), api_element("div", stc5, api_iterator($cmp.steps, function (step) {
    return api_static_fragment($fragment4, api_key(13, step.title), [api_static_part(2, null, api_dynamic_text(step.title)), api_static_part(4, null, api_dynamic_text(step.content))]);
  }))])])]), api_element("div", stc6, api_iterator($cmp.features, function (feature) {
    return api_static_fragment($fragment5, api_key(16, feature.id), [api_static_part(4, null, api_dynamic_text(feature.title)), api_static_part(6, {
      attrs: {
        "src": feature.image,
        "alt": feature.title
      }
    }, null), api_static_part(8, null, api_dynamic_text(feature.description))]);
  }))];
  /*LWC compiler v8.12.2*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-1uh17g0ai6h";
tmpl.legacyStylesheetToken = "ui-app_app";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
