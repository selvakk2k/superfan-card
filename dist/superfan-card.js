function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,m=f?f.emptyScript:"",v=u.reactiveElementPolyfillSupport,$=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},_=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);r?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:g).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=i;const n=r.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const n=this.constructor;if(!1===i&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??_)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[$("elementProperties")]=new Map,y[$("finalized")]=new Map,v?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,x=t=>t,S=A.trustedTypes,w=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,k=`<${P}>`,U=document,O=()=>U.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,H="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,L=/>/g,j=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,D=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),q=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,F=U.createTreeWalker(U,129);function J(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const K=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=R;for(let e=0;e<s;e++){const s=t[e];let a,c,l=-1,h=0;for(;h<s.length&&(o.lastIndex=h,c=o.exec(s),null!==c);)h=o.lastIndex,o===R?"!--"===c[1]?o=N:void 0!==c[1]?o=L:void 0!==c[2]?(I.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=j):void 0!==c[3]&&(o=j):o===j?">"===c[0]?(o=r??R,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?j:'"'===c[3]?D:z):o===D||o===z?o=j:o===N||o===L?o=R:(o=j,r=void 0);const d=o===j&&t[e+1].startsWith("/>")?" ":"";n+=o===R?s+k:l>=0?(i.push(a),s.slice(0,l)+E+s.slice(l)+C+d):s+C+(-2===l?e:d)}return[J(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[c,l]=K(t,e);if(this.el=Y.createElement(c,s),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[n++],s=i.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:X}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),F.nextNode(),a.push({type:2,index:++r});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function Z(t,e,s=t,i){if(e===q)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=M(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Z(t,r._$AS(t,e.values),r,i)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);F.currentNode=i;let r=F.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=F.nextNode(),n++)}return F.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),M(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new G(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Y(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Q(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=Z(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Z(this,i[s+o],e,o),a===q&&(a=this._$AH[o]),n||=!M(a)||a!==this._$AH[o],a===W?t=W:t!==W&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends X{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===q)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=A.litHtmlPolyfillSupport;rt?.(Y,Q),(A.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Q(e.insertBefore(O(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const at=nt.litElementPolyfillSupport;at?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:_},lt=(t=ct,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)})`
  /* ──────────────────────────────────────────────────────────
     Default Token Layer (Standard Home Assistant)
     ────────────────────────────────────────────────────────── */
  :host {
    --miraie-accent:        var(--primary-color, #03a9f4);

    /* Surfaces */
    --m-bg:                 var(--ha-card-background, var(--card-background-color, var(--lovelace-background)));
    --m-surface:            var(--secondary-background-color, rgba(128,128,128,0.08));
    --m-surface-hover:      rgba(128,128,128,0.15);
    --m-border:             var(--divider-color, rgba(128,128,128,0.14));

    /* Text */
    --m-text:               var(--primary-text-color);
    --m-text-2:             var(--secondary-text-color);
    --m-on-accent:          var(--text-primary-color, #fff);

    /* Active state */
    --m-active-bg:          color-mix(in srgb, var(--miraie-accent) 15%, transparent);
    --m-active-border:      color-mix(in srgb, var(--miraie-accent) 50%, transparent);
  }

  /* ──────────────────────────────────────────────────────────
     Material You Token Layer (Activated via Config)
     ────────────────────────────────────────────────────────── */
  :host([theme="material_you"]) {
    --miraie-accent:        var(--md-sys-color-primary, var(--primary-color, #03a9f4));

    /* Surfaces */
    --m-bg:                 var(--md-sys-color-surface, var(--ha-card-background, var(--card-background-color, var(--lovelace-background))));
    --m-surface:            var(--md-sys-color-surface-variant, var(--secondary-background-color, rgba(128,128,128,0.08)));
    --m-surface-hover:      var(--md-sys-color-surface-variant-hover, var(--hover-color, rgba(128,128,128,0.15)));
    --m-border:             var(--md-sys-color-outline, var(--divider-color, rgba(128,128,128,0.14)));

    /* Text */
    --m-text:               var(--md-sys-color-on-surface, var(--primary-text-color));
    --m-text-2:             var(--md-sys-color-on-surface-variant, var(--secondary-text-color));
    --m-on-accent:          var(--md-sys-color-on-primary, var(--text-primary-color, #fff));

    /* Active state */
    --m-active-bg:          var(--md-sys-color-secondary-container, color-mix(in srgb, var(--miraie-accent) 15%, transparent));
    --m-active-border:      var(--md-sys-color-secondary, color-mix(in srgb, var(--miraie-accent) 50%, transparent));
  }

  ha-card {
    background: var(--m-bg);
    border-radius: 18px;
    padding: 20px 18px 18px;
    color: var(--m-text);
    font-family: inherit;
    overflow: hidden;
  }

  /* ── Header ── */
  .header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 24px;
  }
  .header-left { display: flex; flex-direction: column; gap: 3px; }
  .title-row   { display: flex; align-items: center; gap: 7px; }

  .status-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--m-text-2); flex-shrink: 0;
  }
  .status-dot.online { background: var(--success-color, #2ecc71); }

  .title   { font-size: 1.05rem; font-weight: 700; }
  .subtitle { font-size: 0.75rem; color: var(--m-text-2); }

  .power-btn {
    width: 44px; height: 44px; border-radius: 50%;
    border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--m-surface); color: var(--m-text);
    transition: all 0.2s ease;
  }
  .power-btn:hover { background: var(--m-surface-hover); }
  .power-btn.on { background: var(--miraie-accent); color: var(--m-on-accent); }

  /* ── Body Layout (Side by Side) ── */
  .body-container {
    display: flex;
    gap: 24px;
    align-items: stretch;
  }

  /* Left: Vertical Selector */
  .vertical-selector {
    display: flex;
    flex-direction: column;
    background: var(--m-surface);
    border-radius: 28px;
    padding: 6px;
    width: 72px;
    flex-shrink: 0;
    align-self: center;
  }

  .speed-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 52px;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    background: transparent;
    color: var(--m-text-2);
  }

  .speed-btn ha-icon {
    --mdc-icon-size: 24px;
    margin-bottom: 2px;
  }
  
  .speed-btn span {
    font-size: 0.75rem;
    font-weight: 600;
  }

  .speed-btn:hover {
    background: var(--m-surface-hover);
  }

  .speed-btn.active {
    background: var(--miraie-accent);
    color: var(--m-on-accent);
    box-shadow: 0 4px 12px color-mix(in srgb, var(--miraie-accent) 40%, transparent);
  }

  /* Right: Presets */
  .presets-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .section-label {
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em;
    color: var(--m-text-2); text-transform: uppercase;
  }

  .pill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
  }

  .pill-btn {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    border: 1px solid var(--m-border); border-radius: 20px;
    padding: 10px 16px; background: transparent; color: var(--m-text-2);
    font-size: 0.85rem; font-weight: 500; cursor: pointer;
    transition: all 0.2s; white-space: nowrap; flex: 1 1 calc(50% - 10px);
  }
  .pill-btn:hover { background: var(--m-surface); }
  .pill-btn.active {
    background: var(--m-active-bg);
    border-color: var(--m-active-border);
    color: var(--miraie-accent);
  }
  .pill-btn ha-icon { --mdc-icon-size: 18px; }
`;window.customCards=window.customCards||[],window.customCards.push({type:"superfan-card",name:"Superfan Card",description:"A premium custom card for the Superfan integration.",preview:!0});let pt=class extends ot{static get styles(){return dt}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{domain:"fan"}}},{name:"name",selector:{text:{}}},{name:"theme",selector:{select:{options:[{label:"Default HA Theme",value:"default"},{label:"Material You",value:"material_you"}]}}},{name:"accent_color",selector:{ui_color:{}}}]}}static getStubConfig(t,e,s){const i=e.find(t=>t.startsWith("fan."))||"";return{type:"custom:superfan-card",entity:i}}setConfig(t){this._config=t}updated(t){if(super.updated(t),t.has("_config")){const t=this._config?.theme||"default";this.getAttribute("theme")!==t&&this.setAttribute("theme",t)}}getCardSize(){return 4}_setSpeed(t){this.hass.callService("fan","set_percentage",{entity_id:this._config.entity,percentage:t})}_toggle(){this.hass.callService("fan","toggle",{entity_id:this._config.entity})}_setPreset(t){this.hass.callService("fan","set_preset_mode",{entity_id:this._config.entity,preset_mode:t})}_getPresetIcon(t){const e=t.toLowerCase();return e.includes("breeze")?"mdi:weather-windy":e.includes("speed")?"mdi:swap-vertical":e.includes("eco")?"mdi:leaf":e.includes("wellness")?"mdi:heart-pulse":e.includes("ac")?"mdi:air-conditioner":"mdi:auto-fix"}render(){if(!this._config||!this.hass)return B``;const t=this.hass.states[this._config.entity];if(!t)return B`<ha-card><div class="not-found">Entity not found</div></ha-card>`;const e=this._config.name||t.attributes.friendly_name||"Superfan",s="on"===t.state,i=t.attributes.percentage||0,r=t.attributes.preset_mode,n=t.attributes.preset_modes||[],o=t.attributes.percentage_step||100,a=Math.round(100/o),c=n.filter(t=>!t.toLowerCase().includes("timer")&&!t.toLowerCase().includes("hr")&&!t.toLowerCase().includes("hour")),l=n.filter(t=>t.toLowerCase().includes("timer")||t.toLowerCase().includes("hr")||t.toLowerCase().includes("hour"));let h="";if(this._config.accent_color)if(Array.isArray(this._config.accent_color))h=`rgb(${this._config.accent_color.join(",")})`;else if("string"==typeof this._config.accent_color){const t=this._config.accent_color.toLowerCase();h="primary"===t?"var(--primary-color)":"accent"===t?"var(--accent-color)":/^[a-z-]+$/.test(t)?`var(--${t}-color, ${t})`:t}return B`
      <ha-card style="${h?`--miraie-accent: ${h};`:""}">
        <div class="header">
          <div class="header-left">
            <div class="title-row">
              <div class="status-dot ${s?"online":""}"></div>
              <div class="title">${e}</div>
            </div>
            <div class="subtitle">Fan: ${s?r||i+"%":"off"}</div>
          </div>
          <button class="power-btn ${s?"on":""}" @click=${this._toggle}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
        </div>

        <div class="body-container">
          <!-- Left Column: Speed Selector -->
          <div class="vertical-selector">
            ${5===a?B`
              <button class="speed-btn ${s&&i>80&&!r?"active":""}" @click=${()=>this._setSpeed(100)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>5</span>
              </button>
              <button class="speed-btn ${s&&i>60&&i<=80&&!r?"active":""}" @click=${()=>this._setSpeed(80)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>4</span>
              </button>
              <button class="speed-btn ${s&&i>40&&i<=60&&!r?"active":""}" @click=${()=>this._setSpeed(60)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>3</span>
              </button>
              <button class="speed-btn ${s&&i>20&&i<=40&&!r?"active":""}" @click=${()=>this._setSpeed(40)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>2</span>
              </button>
              <button class="speed-btn ${s&&i>0&&i<=20&&!r?"active":""}" @click=${()=>this._setSpeed(20)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>1</span>
              </button>
            `:3===a?B`
              <button class="speed-btn ${s&&i>66&&!r?"active":""}" @click=${()=>this._setSpeed(100)}>
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button class="speed-btn ${s&&i>33&&i<=66&&!r?"active":""}" @click=${()=>this._setSpeed(66)}>
                <ha-icon icon="mdi:fan-speed-2"></ha-icon>
                <span>Medium</span>
              </button>
              <button class="speed-btn ${s&&i>0&&i<=33&&!r?"active":""}" @click=${()=>this._setSpeed(33)}>
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            `:B`
              <!-- Fallback -->
              <button class="speed-btn ${s&&i>50&&!r?"active":""}" @click=${()=>this._setSpeed(100)}>
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button class="speed-btn ${s&&i>0&&i<=50&&!r?"active":""}" @click=${()=>this._setSpeed(50)}>
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            `}
          </div>

          <!-- Right Column: Presets -->
          <div class="presets-container" style="display: flex; flex-direction: column; gap: 12px;">
            ${c.length>0?B`
              <div class="section-label">Modes</div>
              <div class="pill-grid">
                ${c.map(t=>B`
                  <button 
                    class="pill-btn ${r===t?"active":""}" 
                    @click=${()=>this._setPreset(t)}
                  >
                    <ha-icon icon="${this._getPresetIcon(t)}"></ha-icon>
                    <span>${t}</span>
                  </button>
                `)}
              </div>
            `:""}

            ${l.length>0?B`
              <div class="section-label" style="margin-top: 4px;">Timers</div>
              <div class="pill-grid">
                ${l.map(t=>B`
                  <button 
                    class="pill-btn ${r===t?"active":""}" 
                    @click=${()=>this._setPreset(t)}
                  >
                    <ha-icon icon="mdi:timer-outline"></ha-icon>
                    <span>${t}</span>
                  </button>
                `)}
              </div>
            `:""}

            ${0===n.length?B`
              <div class="section-label">No Presets Available</div>
            `:""}
          </div>
        </div>
      </ha-card>
    `}};t([ht({attribute:!1})],pt.prototype,"hass",void 0),t([function(t){return ht({...t,state:!0,attribute:!1})}()],pt.prototype,"_config",void 0),pt=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("superfan-card")],pt);export{pt as SuperfanCard};
