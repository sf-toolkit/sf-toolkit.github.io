import{parseFragment as u,registerTemplate as m,freezeTemplate as g,registerDecorators as v,registerComponent as f,LightningElement as y}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F6_5_0/s/69029b0d57be26dc66576684350f0bf0b6d67c43/bundle_lwc.js";function pe(i,e,s){var t=i?"["+i+"]":"",a=i?"["+i+"-host]":"";return(e?":host {":a+" {")+"display: block;overflow: hidden;position: relative;width: 100%;}section"+t+" {max-width: 1200px;margin: 0 auto;display: flex;margin-top: 2px;}article.container"+t+" {margin-bottom: 24px;}@media (max-width: 380px) {article.container"+t+" {margin-bottom: 34px;}}"}var M=[pe];function he(i,e,s){var t=i?"["+i+"]":"",a=i?"["+i+"-host]":"";return(e?":host {":a+" {")+"flex: 0 0 var(--sizebar-width);background: #fff;margin-top: 7px;}.active"+t+" {background-color: var(--primary-color-blue);color: white;}nav.nav"+t+" ul.nav__list"+t+" {background-color: #f6f4f4;border-radius: 5px;margin-top: 5px;}.nav"+t+" ul"+t+",.nav"+t+" li"+t+" {list-style: none;margin: 0;padding: 0;}ul"+t+" {margin: 0;}.nav"+t+" input"+t+" {display: none;}.nav"+t+" label"+t+" {margin: 0;cursor: pointer;font-weight: 300;line-height: 0.8rem;font-size: 1.4rem;color: #111;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}.nav"+t+" a"+t+" {display: block;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;color: #333;padding: 2rem;text-decoration: var(--text-decoration);}.nav"+t+" li.active"+t+" a"+t+" {color: white;}input"+t+" {box-sizing: border-box;padding: 0;margin-bottom: 1.5rem;line-height: normal;color: inherit;font: inherit;margin: 0;}@media screen and (max-width: 52rem) {"+(e?":host {":a+" {")+"display: none;}}"}var R=[he];const de=u`<input${"a0:id"} type="checkbox" hidden="" checked=""${3}>`,ue={classMap:{nav:!0},attrs:{role:"navigation"},key:0},me={classMap:{nav__list:!0},key:1};function x(i,e,s,t){const{k:a,gid:n,sp:l,st:o,fid:r,b:c,d:h,t:p,h:d,i:L}=i,{_m0:U}=t;return[d("nav",ue,[d("ul",me,L(e.navItems,function(_){return d("li",{key:a(2,_.title)},[o(de,4,[l(0,{attrs:{id:n(_.title)}},null)]),d("label",{attrs:{for:n(_.title)},key:5},[d("a",{attrs:{href:r("#"),title:_.title,"data-item":_.value},key:6,on:{click:U||(t._m0=c(e.handleNavItemClick))}},[p(h(_.title))])])])}))])]}var ge=m(x);x.stylesheets=[],R&&x.stylesheets.push.apply(x.stylesheets,R),x.stylesheetToken="lwc-1chfe8ai2hf",x.legacyStylesheetToken="ui-navbar_navbar",g(x);class W extends y{constructor(...e){super(...e);this.currentNavItem=void 0,this._isRendered=!1,this._navItemsPrivate=[]}set navItems(e){this._navItemsPrivate=[],Object.keys(e).forEach(s=>{this._navItemsPrivate.push(e[s]),e[s].visible&&(this.currentNavItem=e[s].value)})}get navItems(){return this._navItemsPrivate}set selectedItem(e){e&&this.currentNavItem!==e&&(this.styleNavItem(this.currentNavItem,e),this.currentNavItem=e)}get selectedItem(){return this.currentNavItem}renderedCallback(){this._isRendered||(this._isRendered=!0,this.template.querySelector(`a[data-item="${this.currentNavItem}"]`).parentNode.parentNode.classList.add("active"))}handleNavItemClick(e){const s=e.currentTarget.dataset.item;this.styleNavItem(this.currentNavItem,s),this.currentNavItem=s,e.preventDefault(),this.dispatchEvent(new CustomEvent("categorychange",{detail:s,bubbles:!0}))}styleNavItem(e,s){const t=this.template.querySelector(`a[data-item="${e}"]`).parentNode.parentNode,a=this.template.querySelector(`a[data-item="${s}"]`).parentNode.parentNode;t.classList.remove("active"),a.classList.add("active")}}v(W,{publicProps:{navItems:{config:3},selectedItem:{config:3}},fields:["currentNavItem","_isRendered","_navItemsPrivate"]});var ve=f(W,{tmpl:ge,sel:"ui-navbar",apiVersion:61});function fe(i,e,s){var t=i?"["+i+"]":"",a=i?"["+i+"-host]":"";return(e?":host {":a+" {")+"text-align: left;}.description"+t+" {color: #706e6b;}a"+t+" {color: var(--color-text-link);text-decoration: var(--text-decoration);}"}var j=[fe];const ye=u`<p${3}><a${"a1:href"} target="source"${3}>View Source</a></p>`,_e={classMap:{description:!0},key:0},be={key:1},ke=[];function b(i,e,s,t){const{s:a,h:n,sp:l,st:o}=i;return[n("div",_e,[a("",be,ke,s)]),o(ye,3,[l(1,{attrs:{href:e.sourceURL}},null)])]}var xe=m(b);b.slots=[""],b.stylesheets=[],j&&b.stylesheets.push.apply(b.stylesheets,j),b.stylesheetToken="lwc-26jsnr2siv8",b.legacyStylesheetToken="recipe-viewSource_viewSource",g(b);class O extends y{constructor(...e){super(...e);this.baseURL="https://github.com/trailheadapps/lwc-recipes-oss/tree/main/src/modules/",this.source=void 0}get sourceURL(){return this.baseURL+this.source}}v(O,{publicProps:{source:{config:0}},fields:["baseURL"]});var N=f(O,{tmpl:xe,sel:"recipe-view-source",apiVersion:61});function Ne(i,e,s){var t=i?"["+i+"]":"";return"@media (min-width: 48em) {.card"+t+" {padding: 2rem;}}.card"+t+" {background: #fff;border: 0.05rem solid #dadee4;border-radius: 0.1rem;display: flex;display: -ms-flexbox;-ms-flex-direction: column;flex-direction: column;margin: 1rem;margin-bottom: 3rem;flex: 1;padding: 1rem;max-width: 600px;}.card"+t+" .card-header"+t+",.card"+t+" .card-body"+t+",.card"+t+" .card-footer"+t+" {padding: 0.8rem;padding-bottom: 0;}.card"+t+" .card-header:last-child"+t+",.card"+t+" .card-body:last-child"+t+",.card"+t+" .card-footer:last-child"+t+" {padding-bottom: 0.8rem;}.card"+t+" .card-body"+t+" {-ms-flex: 1 1 auto;flex: 1 1 auto;padding: 14px;}.card"+t+" .card-image"+t+" {padding-top: 0.8rem;}.card"+t+" .card-image:first-child"+t+" {padding-top: 0;}.card"+t+" .card-image:first-child"+t+" img"+t+" {border-top-left-radius: 0.1rem;border-top-right-radius: 0.1rem;}.card"+t+" .card-image:last-child"+t+" img"+t+" {border-bottom-left-radius: 0.1rem;border-bottom-right-radius: 0.1rem;}.card"+t+" .card-title"+t+" {font-size: 2rem;font-weight: 800;}.card"+t+" .card-footer"+t+" {vertical-align: bottom;}@media (max-width: 380px) {.card"+t+" .card-title"+t+" {font-size: 1.6rem;font-weight: 600;}}"}var z=[Ne];const $e=u`<div class="card-title${0}"${2}>${"t1"}</div>`,we=u`<div class="card-subtitle${0}"${2}>${"t1"}</div>`,Ie={classMap:{card:!0},key:0},Ce={classMap:{"card-header":!0},key:1},Se={classMap:{"card-body":!0},key:6},Ee={key:7},q=[],Te={classMap:{"card-footer":!0},key:8},Pe={attrs:{name:"footer"},key:9};function k(i,e,s,t){const{d:a,sp:n,st:l,h:o,s:r}=i;return[o("div",Ie,[o("div",Ce,[e.title?l($e,3,[n(1,null,a(e.title))]):null,e.subtitle?l(we,5,[n(1,null,a(e.subtitle))]):null]),o("div",Se,[r("",Ee,q,s)]),o("div",Te,[r("footer",Pe,q,s)])])]}var He=m(k);k.slots=["","footer"],k.stylesheets=[],z&&k.stylesheets.push.apply(k.stylesheets,z),k.stylesheetToken="lwc-57qbsj9dbjv",k.legacyStylesheetToken="ui-card_card",g(k);class B extends y{constructor(...e){super(...e);this.imageUrl=void 0,this.title=void 0,this.subtitle=void 0}get showHeader(){return this.title&&this.subtitle}get showImage(){return this.imageUrl!==void 0&&this.imageUrl.length>0}}v(B,{publicProps:{imageUrl:{config:0},title:{config:0},subtitle:{config:0}}});var $=f(B,{tmpl:He,sel:"ui-card",apiVersion:61});const Fe=u`<div${3}>${"t1"}</div>`,Ve={props:{title:"Hello"},key:0},Ae={slotAssignment:"footer",props:{source:"recipe/hello"},key:3};function V(i,e,s,t){const{d:a,sp:n,st:l,t:o,c:r}=i;return[r("ui-card",$,Ve,[l(Fe,2,[n(1,null,"Hello, "+a(e.greeting)+"!")]),r("recipe-view-source",N,Ae,[o("Bind an HTML element to a component property.")])])]}var De=m(V);V.stylesheets=[],V.stylesheetToken="lwc-s8tjrs6194",V.legacyStylesheetToken="recipe-hello_hello",g(V);class J extends y{constructor(...e){super(...e);this.greeting="World"}}v(J,{fields:["greeting"]});var Le=f(J,{tmpl:De,sel:"recipe-hello",apiVersion:61});function Ue(i,e,s){var t=i?"["+i+"]":"";return".field-label"+t+" {font-size: 1.4rem;color: gray;display: block;}div.checkbox"+t+" {display: block;padding-bottom: 8px;position: relative;}div.checkbox"+t+" input"+t+" {position: absolute;opacity: 0;cursor: pointer;height: 0;width: 0;}div.checkbox"+t+" .checkbox-label"+t+" > span"+t+" {float: none;padding-left: 2rem;}div.checkbox"+t+" span.checkbox"+t+" {position: absolute;top: 0;left: 0;height: 18px;width: 18px;margin-top: 5px;background-color: #eee;}div.checkbox"+t+" span.checkbox:hover"+t+" {background-color: #ccc;}div.checkbox"+t+" span.checkbox.checked"+t+" {background-color: var(--button-color-bg);}.input"+t+" {appearance: none;background: 0 0;border: none;color: var(--color-text);font-size: 1.6rem;font-weight: 300;font-family: inherit;position: relative;padding: 4px;background-size: 20px 20px;background-repeat: no-repeat;background-position-y: center;background-position-x: 4px;width: 170px;background-color: var(--color-bg-search);outline: none;cursor: pointer;}"}var G=[Ue];const Me=u`<label class="field-label${0}"${2}>${"t1"}</label>`,Re=u`<div class="checkbox${0}"${2}><input type="checkbox"${3}><span class="checkbox${0}"${2}></span><label class="checkbox-label${0}"${2}><span${3}>${"t5"}</span></label></div>`,We={key:0},je={key:3},Oe={input:!0};function w(i,e,s,t){const{d:a,sp:n,st:l,b:o,h:r}=i,{_m0:c,_m1:h,_m2:p}=t;return[r("div",We,[e.isCheckboxField?null:l(Me,2,[n(1,null,a(e.label))]),r("div",je,[e.isCheckboxField?null:r("input",{classMap:Oe,attrs:{type:e.type},props:{value:e.valuePrivate},key:4,on:{keyup:c||(t._m0=o(e.keyupHandler)),change:h||(t._m1=o(e.changeHandler))}}),e.isCheckboxField?l(Re,6,[n(2,{on:{click:p||(t._m2=o(e.changeCheckboxHandler))}},null),n(5,null,a(e.label))]):null])])]}var ze=m(w);w.stylesheets=[],G&&w.stylesheets.push.apply(w.stylesheets,G),w.stylesheetToken="lwc-31jgu9lecdd",w.legacyStylesheetToken="ui-input_input",g(w);class K extends y{constructor(...e){super(...e);this.disabled=void 0,this.label=void 0,this.max=void 0,this.min=void 0,this.name=void 0,this.type="text",this.valuePrivate="",this._checked=!1}set checked(e){this._checked=e}get checked(){return this._checked}set value(e){this.valuePrivate=this._value=e!==void 0?e:""}get value(){return this._value}changeHandler(e){this._value=this.calculateValue(e.target.value),this.dispatchEvent(new CustomEvent("change"))}changeCheckboxHandler(){this._checked=!this._checked;const e=this.template.querySelector("div.checkbox span");this._checked?e.classList.add("checked"):e.classList.remove("checked"),this.dispatchEvent(new CustomEvent("change"))}keyupHandler(e){this._value=this.calculateValue(e.target.value),this.dispatchEvent(new CustomEvent("change"))}get isCheckboxField(){return this.type==="checkbox"}get isNumberField(){return this.type==="number"}get isPasswordField(){return this.type==="password"}get isSearchField(){return this.type==="search"}get isTextField(){return this.type==="password"||this.type==="text"||this.type==="search"}calculateValue(e){if(this.type!=="number")return e;let s=Number(e);const t=Number(this.max),a=Number(this.min);return this.max&&e>t?s=t:this.min&&e<a&&(s=a),s}}v(K,{publicProps:{checked:{config:3},disabled:{config:0},label:{config:0},max:{config:0},min:{config:0},name:{config:0},type:{config:0},value:{config:3}},track:{valuePrivate:1},fields:["_checked"]});var H=f(K,{tmpl:ze,sel:"ui-input",apiVersion:61});const qe=u`<p${3}>${"t1"}</p>`,Be={props:{title:"HelloBinding"},key:0},Je={key:1},Ge={slotAssignment:"footer",props:{source:"recipe/helloBinding"},key:5};function A(i,e,s,t){const{d:a,sp:n,st:l,b:o,c:r,h:c,t:h}=i,{_m0:p}=t;return[r("ui-card",$,Be,[c("div",Je,[l(qe,3,[n(1,null,"Hello, "+a(e.greeting)+"!")]),r("ui-input",H,{props:{label:"Name",value:e.greeting},key:4,on:{change:p||(t._m0=o(e.handleChange))}})]),r("recipe-view-source",N,Ge,[h("Change the value of a bound property when the value of an input field changes. Type something in the input field to see the recipe in action.")])])]}var Ke=m(A);A.stylesheets=[],A.stylesheetToken="lwc-7m4o6i03pnr",A.legacyStylesheetToken="recipe-helloBinding_helloBinding",g(A);class Q extends y{constructor(...e){super(...e);this.greeting="World"}handleChange(e){this.greeting=e.target.value}}v(Q,{fields:["greeting"]});var Qe=f(Q,{tmpl:Ke,sel:"recipe-hello-binding",apiVersion:61});function Xe(i,e,s){var t=i?"["+i+"]":"";return".margin-top-medium"+t+" {margin: 8 0 0 0;}"}var X=[Xe];const Ye=u`<p class="margin-top-medium${0}"${2}>${"t1"}</p>`,Ze={props:{title:"HelloExpressions"},key:0},et={key:1},tt={name:"firstName",label:"First Name"},it={name:"lastName",label:"Last Name"},st={slotAssignment:"footer",props:{source:"recipe/helloExpressions"},key:6};function I(i,e,s,t){const{b:a,c:n,d:l,sp:o,st:r,h:c,t:h}=i,{_m0:p,_m1:d}=t;return[n("ui-card",$,Ze,[c("div",et,[n("ui-input",H,{props:tt,key:2,on:{change:p||(t._m0=a(e.handleChange))}}),n("ui-input",H,{props:it,key:3,on:{change:d||(t._m1=a(e.handleChange))}}),r(Ye,5,[o(1,null,"Uppercased Full Name: "+l(e.uppercasedFullName))])]),n("recipe-view-source",N,st,[h("Use JavaScript expressions in a template. Type something in the input fields to see the recipe in action.")])])]}var at=m(I);I.stylesheets=[],X&&I.stylesheets.push.apply(I.stylesheets,X),I.stylesheetToken="lwc-62mojfc8vtm",I.legacyStylesheetToken="recipe-helloExpressions_helloExpressions",g(I);class Y extends y{constructor(...e){super(...e);this.firstName="",this.lastName=""}handleChange(e){const s=e.target.name;s==="firstName"?this.firstName=e.target.value:s==="lastName"&&(this.lastName=e.target.value)}get uppercasedFullName(){return`${this.firstName} ${this.lastName}`.trim().toUpperCase()}}v(Y,{fields:["firstName","lastName"]});var nt=f(Y,{tmpl:at,sel:"recipe-hello-expressions",apiVersion:61});function lt(i,e,s){var t=i?"["+i+"]":"";return".margin-top-medium"+t+" {margin: 8 0 0 0;}"}var Z=[lt];const ot=u`<p class="margin-top-medium${0}"${2}>${"t1"}</p>`,rt={props:{title:"HelloExpressionsTrack"},key:0},ct={key:1},pt={name:"firstName",label:"First Name"},ht={name:"lastName",label:"Last Name"},dt={slotAssignment:"footer",props:{source:"recipe/helloExpressionsTrack"},key:6};function C(i,e,s,t){const{b:a,c:n,d:l,sp:o,st:r,h:c,t:h}=i,{_m0:p,_m1:d}=t;return[n("ui-card",$,rt,[c("div",ct,[n("ui-input",H,{props:pt,key:2,on:{change:p||(t._m0=a(e.handleChange))}}),n("ui-input",H,{props:ht,key:3,on:{change:d||(t._m1=a(e.handleChange))}}),r(ot,5,[o(1,null,"Uppercased Full Name: "+l(e.uppercasedFullName))])]),n("recipe-view-source",N,dt,[h("Use JavaScript expressions in a template that leverages the @track Decorator on an object. Type something in the input fields to see the recipe in action.")])])]}var ut=m(C);C.stylesheets=[],Z&&C.stylesheets.push.apply(C.stylesheets,Z),C.stylesheetToken="lwc-76qto4s1rj8",C.legacyStylesheetToken="recipe-helloExpressionsTrack_helloExpressionsTrack",g(C);class ee extends y{constructor(...e){super(...e);this.fullName={firstName:"",lastName:""}}handleChange(e){const s=e.target.name;s==="firstName"?this.fullName.firstName=e.target.value:s==="lastName"&&(this.fullName.lastName=e.target.value)}get uppercasedFullName(){return`${this.fullName.firstName} ${this.fullName.lastName}`.trim().toUpperCase()}}v(ee,{track:{fullName:1}});var mt=f(ee,{tmpl:ut,sel:"recipe-hello-expressions-track",apiVersion:61});const gt={props:{title:"HelloConditionalRendering"},key:0},vt={key:1},ft={type:"checkbox",label:"Show details"},yt={classMap:{details:!0},key:3},_t={slotAssignment:"footer",props:{source:"recipe/helloConditionalRendering"},key:5};function D(i,e,s,t){const{b:a,c:n,t:l,fr:o,h:r}=i,{_m0:c}=t;return[n("ui-card",$,gt,[r("div",vt,[n("ui-input",H,{props:ft,key:2,on:{change:c||(t._m0=a(e.handleChange))}}),r("div",yt,[e.areDetailsVisible?o(4,[l("These are the details!")],0):o(4,[l("Not showing details.")],0)])]),n("recipe-view-source",N,_t,[l("Conditionally render elements.")])])]}var bt=m(D);D.stylesheets=[],D.stylesheetToken="lwc-20qifkd8ib",D.legacyStylesheetToken="recipe-helloConditionalRendering_helloConditionalRendering",g(D);class te extends y{constructor(...e){super(...e);this.areDetailsVisible=!1}handleChange(e){this.areDetailsVisible=e.target.checked}}v(te,{fields:["areDetailsVisible"]});var kt=f(te,{tmpl:bt,sel:"recipe-hello-conditional-rendering",apiVersion:61});function xt(i,e,s){var t=i?"["+i+"]":"";return"ul"+t+" {list-style: none;padding: 0;}"}var ie=[xt];const Nt=u`<li${3}>${"t1"}</li>`,$t={props:{title:"HelloForEach"},key:0},wt={key:1},It={slotAssignment:"footer",props:{source:"recipe/helloForEach"},key:4};function S(i,e,s,t){const{k:a,d:n,sp:l,st:o,i:r,h:c,t:h,c:p}=i;return[p("ui-card",$,$t,[c("ul",wt,r(e.contacts,function(d){return o(Nt,a(3,d.Id),[l(1,null,n(d.Name)+", "+n(d.Title))])})),p("recipe-view-source",N,It,[h("Loop through an array of items in a template.")])])]}var Ct=m(S);S.stylesheets=[],ie&&S.stylesheets.push.apply(S.stylesheets,ie),S.stylesheetToken="lwc-1e07mlk789m",S.legacyStylesheetToken="recipe-helloForEach_helloForEach",g(S);class se extends y{constructor(...e){super(...e);this.contacts=[{Id:"003171931112854375",Name:"Amy Taylor",Title:"VP of Engineering"},{Id:"003192301009134555",Name:"Michael Jones",Title:"VP of Sales"},{Id:"003848991274589432",Name:"Jennifer Wu",Title:"CEO"}]}}v(se,{fields:["contacts"]});var St=f(se,{tmpl:Ct,sel:"recipe-hello-for-each",apiVersion:61});function Et(i,e,s){var t=i?"["+i+"]":"";return".list-first"+t+" {border-top: 1px solid #706e6b;padding-top: 5px;}.list-last"+t+" {border-bottom: 1px solid #706e6b;padding-bottom: 5px;}ul"+t+" {list-style: none;padding: 0;}"}var ae=[Et];const Tt=u`<div class="list-first${0}"${2}></div>`,Pt=u`<div class="list-last${0}"${2}></div>`,Ht={props:{title:"HelloIterator"},key:0},Ft={key:1},Vt={slotAssignment:"footer",props:{source:"recipe/helloIterator"},key:9};function E(i,e,s,t){const{k:a,st:n,fr:l,d:o,t:r,h:c,i:h,c:p}=i;return[p("ui-card",$,Ht,[c("ul",Ft,h(e.contacts,function(d,L,U,_){const F={value:d,index:L,first:U,last:_};return c("li",{key:a(2,F.value.Id)},[F.first?l(3,[n(Tt,5)],0):null,r(o(F.value.Name)+", "+o(F.value.Title)),F.last?l(6,[n(Pt,8)],0):null])})),p("recipe-view-source",N,Vt,[r("Loop through an array with special behavior for the first and last items.")])])]}var At=m(E);E.stylesheets=[],ae&&E.stylesheets.push.apply(E.stylesheets,ae),E.stylesheetToken="lwc-2ggf8bnapf5",E.legacyStylesheetToken="recipe-helloIterator_helloIterator",g(E);class ne extends y{constructor(...e){super(...e);this.contacts=[{Id:"003171931112854375",Name:"Amy Taylor",Title:"VP of Engineering"},{Id:"003192301009134555",Name:"Michael Jones",Title:"VP of Sales"},{Id:"003848991274589432",Name:"Jennifer Wu",Title:"CEO"}]}}v(ne,{fields:["contacts"]});var Dt=f(ne,{tmpl:At,sel:"recipe-hello-iterator",apiVersion:61});function Lt(i,e,s){var t=i?"["+i+"]":"";return"a"+t+" {text-decoration: var(--text-decoration);color: var(--color-text-link);}.next"+t+" {float: right;margin-right: 10px;}.previous"+t+" {margin-left: 10px;}"}var le=[Lt];const Ut={classMap:{"page-nav":!0},key:0},Mt={classMap:{previous:!0},key:1},oe={href:"#"},Rt={classMap:{next:!0},key:3};function T(i,e,s,t){const{t:a,b:n,d:l,h:o}=i,{_m0:r,_m1:c}=t;return[o("div",Ut,[e.labelPrevious?o("span",Mt,[a("\u2190\xA0\xA0"),o("a",{attrs:oe,key:2,on:{click:r||(t._m0=n(e.handlePreviousClick))}},[a(l(e.labelPrevious.title))])]):null,e.labelNext?o("span",Rt,[o("a",{attrs:oe,key:4,on:{click:c||(t._m1=n(e.handleNextClick))}},[a(l(e.labelNext.title))]),a("\xA0\xA0\u2192")]):null])]}var Wt=m(T);T.stylesheets=[],le&&T.stylesheets.push.apply(T.stylesheets,le),T.stylesheetToken="lwc-176p3jq4p6p",T.legacyStylesheetToken="ui-navfooter_navfooter",g(T);class re extends y{constructor(...e){super(...e);this.labelNext=void 0,this.labelPrevious=void 0}handleNextClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("nextclicked"))}handlePreviousClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("previousclicked"))}}v(re,{publicProps:{labelNext:{config:0},labelPrevious:{config:0}}});var jt=f(re,{tmpl:Wt,sel:"ui-navfooter",apiVersion:61});const Ot=u`<div${3}>Title</div>`,zt={classMap:{content:!0,container:!0,"page-background":!0},key:2},qt={classMap:{container:!0},key:4},Bt={key:5},Jt={key:7},Gt={key:8},Kt={key:9},Qt={key:10},Xt={key:11},Yt={key:12},Zt={key:13};function P(i,e,s,t){const{st:a,b:n,c:l,fr:o,h:r}=i,{_m0:c,_m1:h,_m2:p}=t;return[a(Ot,1),r("section",zt,[l("ui-navbar",ve,{props:{navItems:e.navigationItems,selectedItem:e.currentNavigationItem},key:3,on:{categorychange:c||(t._m0=n(e.handleCategoryChange))}}),r("article",qt,[r("div",Bt,[e.navigationItems.hello.visible?o(6,[l("recipe-hello",Le,Jt),l("recipe-hello-binding",Qe,Gt),l("recipe-hello-expressions",nt,Kt),l("recipe-hello-expressions-track",mt,Qt),l("recipe-hello-conditional-rendering",kt,Xt),l("recipe-hello-for-each",St,Yt),l("recipe-hello-iterator",Dt,Zt)],0):null,l("ui-navfooter",jt,{props:{labelNext:e.nextNavigationItem,labelPrevious:e.previousNavigationItem},key:14,on:{nextclicked:h||(t._m1=n(e.handleNavigateNext)),previousclicked:p||(t._m2=n(e.handleNavigatePrevious))}})])])])]}var ei=m(P);P.stylesheets=[],M&&P.stylesheets.push.apply(P.stylesheets,M),P.stylesheetToken="lwc-1uh17g0ai6h",P.legacyStylesheetToken="ui-app_app",g(P);const ti={hello:{title:"Hello",value:"hello",visible:!1},composition:{title:"Composition",value:"composition",visible:!1},child:{title:"Child-to-Parent",value:"child",visible:!1},parent:{title:"Parent-to-Child",value:"parent",visible:!1},misc:{title:"Misc",value:"misc",visible:!1},party:{title:"3rd Party Libs",value:"party",visible:!1},lightDom:{title:"Light DOM",value:"lightDom",visible:!1},externalWc:{title:"3rd Party Web Components",value:"externalWc",visible:!1}},ii=["hello","composition","child","parent","misc","party","lightDom","externalWc"];class ce extends y{constructor(...e){super(...e);this.currentNavigationItem="hello",this.navigationItems=ti,this.nextNavigationItem=void 0,this.previousNavigationItem=void 0,this.navigationElements=ii,this._isWindowHistoryUpdate=!1}connectedCallback(){let e=this;if(window.onpopstate=function(s){s.state&&s.state.page&&(e._isWindowHistoryUpdate=!0,e.navigationItems[e.currentNavigationItem].visible=!1,e.currentNavigationItem=s.state.page,e.hideCurrentNavigationItemFromNav(),e.handleCategoryChange())},window.location.hash){const s=window.location.hash.substring(1,window.location.hash.length);this.navigationElements.indexOf(s)>-1&&(this.currentNavigationItem=s,window.history.replaceState({page:s},null,""))}else window.history.replaceState({page:this.currentNavigationItem},null,"");this.navigationItems[this.currentNavigationItem].visible=!0,this.calculateNavFooterElements()}handleCategoryChange(e){if(e)if(this.currentNavigationItem!==e.detail)this.navigationItems[this.currentNavigationItem].visible=!1,this.currentNavigationItem=e.detail;else return;this.updateGoogleAnalyticsForSPA(this.currentNavigationItem),this.scrollAndLocation(),this.calculateNavFooterElements(),this.navigationItems[this.currentNavigationItem].visible=!0}handleNavigateNext(){this.hideCurrentNavigationItemFromNav(),this.currentNavigationItem=this.navigationItems[this.navigationElements[this.navigationElements.indexOf(this.currentNavigationItem)+1]].value,this.handleCategoryChange()}handleNavigatePrevious(){this.hideCurrentNavigationItemFromNav(),this.currentNavigationItem=this.navigationItems[this.navigationElements[this.navigationElements.indexOf(this.currentNavigationItem)-1]].value,this.handleCategoryChange()}calculateNavFooterElements(){this.nextNavigationItem=this.navigationItems[this.navigationElements[this.navigationElements.indexOf(this.currentNavigationItem)+1]],this.previousNavigationItem=this.navigationItems[this.navigationElements[this.navigationElements.indexOf(this.currentNavigationItem)-1]]}hideCurrentNavigationItemFromNav(){this.navigationItems[this.navigationElements[this.navigationElements.indexOf(this.currentNavigationItem)]].visible=!1}scrollAndLocation(){this._isWindowHistoryUpdate||window.history.pushState({page:this.currentNavigationItem},null,"#".concat(this.currentNavigationItem)),this._isWindowHistoryUpdate=!1,document.body.scrollTop=document.documentElement.scrollTop=0}updateGoogleAnalyticsForSPA(e){window.dataLayer=window.dataLayer||[];function s(){window.dataLayer.push(arguments)}s("config","UA-45076517-19",{page_path:"#".concat(e)})}}v(ce,{fields:["currentNavigationItem","navigationItems","nextNavigationItem","previousNavigationItem","navigationElements","_isWindowHistoryUpdate"]});var si=f(ce,{tmpl:ei,sel:"ui-app",apiVersion:61});export{si as default};
