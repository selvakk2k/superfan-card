function t(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,$=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,_=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);n?.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:g).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=i;const r=n.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){const r=this.constructor;if(!1===i&&(n=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??v)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[_("elementProperties")]=new Map,y[_("finalized")]=new Map,m?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,x=t=>t,S=A.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,k=`<${P}>`,O=document,U=()=>O.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,R="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,j=/>/g,z=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,B=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),q=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,F=O.createTreeWalker(O,129);function J(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const K=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=T;for(let e=0;e<s;e++){const s=t[e];let a,c,h=-1,l=0;for(;l<s.length&&(o.lastIndex=l,c=o.exec(s),null!==c);)l=o.lastIndex,o===T?"!--"===c[1]?o=N:void 0!==c[1]?o=j:void 0!==c[2]?(B.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=z):void 0!==c[3]&&(o=z):o===z?">"===c[0]?(o=n??T,h=-1):void 0===c[1]?h=-2:(h=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?z:'"'===c[3]?D:L):o===D||o===L?o=z:o===N||o===j?o=T:(o=z,n=void 0);const d=o===z&&t[e+1].startsWith("/>")?" ":"";r+=o===T?s+k:h>=0?(i.push(a),s.slice(0,h)+w+s.slice(h)+C+d):s+C+(-2===h?e:d)}return[J(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[c,h]=K(t,e);if(this.el=Z.createElement(c,s),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(w)){const e=h[r++],s=i.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:Y}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],U()),F.nextNode(),a.push({type:2,index:++n});i.append(t[e],U())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const s=O.createElement("template");return s.innerHTML=t,s}}function G(t,e,s=t,i){if(e===q)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=H(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=G(t,n._$AS(t,e.values),n,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);F.currentNode=i;let n=F.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new X(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new it(n,this,t)),this._$AV.push(e),a=s[++o]}r!==a?.index&&(n=F.nextNode(),r++)}return F.currentNode=O,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),H(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Z(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new X(this.O(U()),this.O(U()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=G(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=G(this,i[s+o],e,o),a===q&&(a=this._$AH[o]),r||=!H(a)||a!==this._$AH[o],a===V?t=V:t!==V&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends Y{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===q)return;const s=this._$AH,i=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==V&&(s===V||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const nt=A.litHtmlPolyfillSupport;nt?.(Z,X),(A.litHtmlVersions??=[]).push("3.3.3");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new X(e.insertBefore(U(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ot._$litElement$=!0,ot.finalized=!0,rt.litElementHydrateSupport?.({LitElement:ot});const at=rt.litElementPolyfillSupport;at?.({LitElement:ot}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:v},ht=(t=ct,e,s)=>{const{kind:i,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(s,t,i)})`
  :host {
    --miraie-accent: var(--primary-color, #03a9f4);

    --m-bg: var(--ha-card-background, var(--card-background-color, var(--lovelace-background)));
    --m-surface: var(--secondary-background-color, rgba(128,128,128,0.08));
    --m-surface-hover: rgba(128,128,128,0.15);
    --m-border: var(--divider-color, rgba(128,128,128,0.14));

    --m-text: var(--primary-text-color);
    --m-text-2: var(--secondary-text-color);

    --m-active-bg: color-mix(in srgb, var(--miraie-accent) 15%, transparent);
    --m-active-border: color-mix(in srgb, var(--miraie-accent) 50%, transparent);
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
  .power-btn.on { background: var(--miraie-accent); color: #fff; }

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
    color: #fff;
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
`;window.customCards=window.customCards||[],window.customCards.push({type:"superfan-card",name:"Superfan Card",description:"A premium custom card for the Superfan integration.",preview:!0});let pt=class extends ot{static get styles(){return dt}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{domain:"fan"}}},{name:"name",selector:{text:{}}},{name:"accent_color",selector:{ui_color:{}}}]}}static getStubConfig(t,e,s){const i=e.find(t=>t.startsWith("fan."))||"";return{type:"custom:superfan-card",entity:i}}setConfig(t){this._config=t}getCardSize(){return 4}_setSpeed(t){this.hass.callService("fan","set_percentage",{entity_id:this._config.entity,percentage:t})}_turnOff(){this.hass.callService("fan","turn_off",{entity_id:this._config.entity})}_setPreset(t){this.hass.callService("fan","set_preset_mode",{entity_id:this._config.entity,preset_mode:t})}render(){if(!this._config||!this.hass)return I``;const t=this.hass.states[this._config.entity];if(!t)return I`<ha-card><div class="not-found">Entity not found</div></ha-card>`;const e=this._config.name||t.attributes.friendly_name||"Superfan",s="on"===t.state,i=t.attributes.percentage||0,n=t.attributes.preset_mode,r=t.attributes.preset_modes||[],o=t.attributes.percentage_step||100,a=Math.round(100/o);return I`
      <ha-card style="${this._config.accent_color?`--miraie-accent: ${this._config.accent_color};`:""}">
        <div class="header">
          <div class="header-left">
            <div class="title-row">
              <div class="status-dot ${s?"online":""}"></div>
              <div class="title">${e}</div>
            </div>
            <div class="subtitle">Fan: ${s?n||i+"%":"off"}</div>
          </div>
          <button class="power-btn ${s?"on":""}" @click=${this._turnOff}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
        </div>

        <div class="body-container">
          <!-- Left Column: Speed Selector -->
          <div class="vertical-selector">
            ${5===a?I`
              <button class="speed-btn ${s&&i>80&&!n?"active":""}" @click=${()=>this._setSpeed(100)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>5</span>
              </button>
              <button class="speed-btn ${s&&i>60&&i<=80&&!n?"active":""}" @click=${()=>this._setSpeed(80)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>4</span>
              </button>
              <button class="speed-btn ${s&&i>40&&i<=60&&!n?"active":""}" @click=${()=>this._setSpeed(60)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>3</span>
              </button>
              <button class="speed-btn ${s&&i>20&&i<=40&&!n?"active":""}" @click=${()=>this._setSpeed(40)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>2</span>
              </button>
              <button class="speed-btn ${s&&i>0&&i<=20&&!n?"active":""}" @click=${()=>this._setSpeed(20)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>1</span>
              </button>
            `:3===a?I`
              <button class="speed-btn ${s&&i>66&&!n?"active":""}" @click=${()=>this._setSpeed(100)}>
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button class="speed-btn ${s&&i>33&&i<=66&&!n?"active":""}" @click=${()=>this._setSpeed(66)}>
                <ha-icon icon="mdi:fan-speed-2"></ha-icon>
                <span>Medium</span>
              </button>
              <button class="speed-btn ${s&&i>0&&i<=33&&!n?"active":""}" @click=${()=>this._setSpeed(33)}>
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            `:I`
              <!-- Fallback -->
              <button class="speed-btn ${s&&i>50&&!n?"active":""}" @click=${()=>this._setSpeed(100)}>
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button class="speed-btn ${s&&i>0&&i<=50&&!n?"active":""}" @click=${()=>this._setSpeed(50)}>
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            `}
          </div>

          <!-- Right Column: Presets -->
          <div class="presets-container">
            ${r.length>0?I`
              <div class="section-label">PRESETS</div>
              <div class="pill-grid">
                ${r.map(t=>I`
                  <button 
                    class="pill-btn ${n===t?"active":""}" 
                    @click=${()=>this._setPreset(t)}
                  >
                    <ha-icon icon="mdi:auto-fix"></ha-icon>
                    <span>${t}</span>
                  </button>
                `)}
              </div>
            `:I`
              <div class="section-label">NO PRESETS AVAILABLE</div>
            `}
          </div>
        </div>
      </ha-card>
    `}};t([lt({attribute:!1})],pt.prototype,"hass",void 0),t([function(t){return lt({...t,state:!0,attribute:!1})}()],pt.prototype,"_config",void 0),pt=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("superfan-card")],pt);export{pt as SuperfanCard};
