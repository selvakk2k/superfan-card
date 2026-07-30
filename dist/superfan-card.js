function t(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,m=u.trustedTypes,g=m?m.emptyScript:"",f=u.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!a(t,e),_={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s;const o=r.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const o=this.constructor;if(!1===s&&(r=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??$)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[v("elementProperties")]=new Map,y[v("finalized")]=new Map,f?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,A=t=>t,w=x.trustedTypes,S=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,P=`<${C}>`,M=document,O=()=>M.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,T="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,R=/>/g,N=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),V=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,W=M.createTreeWalker(M,129);function G(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=z;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===z?"!--"===c[1]?n=j:void 0!==c[1]?n=R:void 0!==c[2]?(I.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=N):void 0!==c[3]&&(n=N):n===N?">"===c[0]?(n=r??z,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?N:'"'===c[3]?D:L):n===D||n===L?n=N:n===j||n===R?n=z:(n=N,r=void 0);const h=n===N&&t[e+1].startsWith("/>")?" ":"";o+=n===z?i+P:l>=0?(s.push(a),i.slice(0,l)+E+i.slice(l)+k+h):i+k+(-2===l?e:h)}return[G(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[c,l]=J(t,e);if(this.el=K.createElement(c,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=W.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=l[o++],i=s.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:X}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),W.nextNode(),a.push({type:2,index:++r});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:r}),t+=k.length-1}r++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===V)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=H(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Y(t,r._$AS(t,e.values),r,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);W.currentNode=s;let r=W.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=W.nextNode(),o++)}return W.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),H(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new K(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=Y(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Y(this,s[i+n],e,n),a===V&&(a=this._$AH[n]),o||=!H(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends X{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??q)===V)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(K,Q),(x.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Q(e.insertBefore(O(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const at=ot.litElementPolyfillSupport;at?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$},lt=(t=ct,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,i)=>"object"==typeof i?lt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return dt({...t,state:!0,attribute:!1})}const pt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)})`
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

    /* Surfaces - using surface-variant or surface-container for better contrast against background */
    --m-bg:                 var(--md-sys-color-surface-variant, var(--md-sys-color-surface, var(--ha-card-background, var(--card-background-color, var(--lovelace-background)))));
    --m-surface:            var(--md-sys-color-surface, var(--secondary-background-color, rgba(128,128,128,0.08)));
    --m-surface-hover:      var(--md-sys-color-surface-variant-hover, var(--hover-color, rgba(128,128,128,0.15)));
    --m-border:             var(--md-sys-color-outline-variant, var(--md-sys-color-outline, var(--divider-color, rgba(128,128,128,0.14))));

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

  /* ──────────────────────────────────────────────────────────
     Compact View (Google Home Style)
     ────────────────────────────────────────────────────────── */
  .compact-card {
    cursor: pointer;
    transition: background 0.2s;
    background: var(--m-bg);
    border-radius: 28px;
    padding: 4px;
    box-sizing: border-box;
  }
  .compact-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 12px 12px 0 12px;
  }
  .compact-icon-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--m-border);
    color: var(--m-text-2);
    cursor: pointer;
    transition: 0.2s;
    outline: none;
  }
  .compact-icon-btn:hover {
    background: rgba(128, 128, 128, 0.15);
  }
  .compact-icon-btn.on {
    background: var(--m-active-bg);
    border-color: var(--m-active-border);
    color: var(--miraie-accent);
  }
  .compact-title {
    font-weight: 500;
    font-size: 1rem;
    flex: 1;
    margin-left: 4px;
    color: var(--m-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .compact-chevron {
    color: var(--m-text-2);
    opacity: 0.5;
  }
  .compact-center {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
  }
  .compact-value {
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--m-text);
  }
  .compact-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px 12px 12px;
  }
  .compact-action-btn {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: transparent;
    border: 1px solid var(--m-border);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--m-text);
    cursor: pointer;
    transition: 0.2s;
    outline: none;
  }
  .compact-action-btn:hover:not(:disabled) {
    background: rgba(128, 128, 128, 0.15);
  }
  .compact-action-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  .compact-subtitle {
    color: var(--m-text-2);
    font-size: 0.9rem;
    font-weight: 500;
  }

  /* ──────────────────────────────────────────────────────────
     Google Home Full View
     ────────────────────────────────────────────────────────── */
  .gh-full-card {
    background: var(--m-bg);
    border-radius: 28px;
    padding: 16px;
    box-sizing: border-box;
  }
  .gh-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 24px;
  }
  .gh-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .gh-icon {
    color: var(--m-text-2);
    --mdc-icon-size: 20px;
  }
  .gh-title {
    font-weight: 500;
    font-size: 1.05rem;
    color: var(--m-text);
  }
  .gh-power-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: var(--m-text-2);
    cursor: pointer;
    transition: 0.2s;
    outline: none;
  }
  .gh-power-btn:hover {
    background: rgba(128, 128, 128, 0.15);
  }
  .gh-power-btn.on {
    background: var(--m-active-bg);
    color: var(--miraie-accent);
  }
  .gh-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 0 40px 0;
  }
  .gh-value-large {
    font-size: 4rem;
    font-weight: 400;
    line-height: 1.1;
    color: var(--m-text);
  }
  .gh-subtitle-large {
    font-size: 1rem;
    font-weight: 500;
    color: var(--m-text-2);
    margin-top: 8px;
  }
  .gh-slider-container {
    padding: 0 16px 32px 16px;
  }
  .gh-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 64px;
    background: var(--m-surface-hover);
    border-radius: 32px;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    position: relative;
  }
  .gh-slider::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    border-radius: 32px;
    background: linear-gradient(to right, var(--m-active-bg) var(--slider-value), transparent var(--slider-value));
  }
  .gh-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0;
    height: 0;
  }
  .gh-slider:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .gh-pill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .gh-pill {
    flex: 1 1 calc(50% - 8px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 16px;
    border-radius: 20px;
    background: var(--m-surface-hover);
    border: none;
    color: var(--m-text);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s;
  }
  .gh-pill:hover {
    background: rgba(128, 128, 128, 0.15);
  }
  .gh-pill.active {
    background: var(--m-active-bg);
    color: var(--miraie-accent);
  }
`;window.customCards=window.customCards||[],window.customCards.push({type:"superfan-card",name:"Superfan Card",description:"A premium custom card for the Superfan integration.",preview:!0});let ut=class extends nt{constructor(){super(...arguments),this._expanded=!1}static get styles(){return pt}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{domain:"fan"}}},{name:"name",selector:{text:{}}},{name:"theme",selector:{select:{options:[{label:"Default HA Theme",value:"default"},{label:"Material You",value:"material_you"}]}}},{name:"layout",selector:{select:{options:[{label:"Default (Full)",value:"default"},{label:"Compact (Expandable)",value:"compact"}]}}},{name:"full_layout",selector:{select:{options:[{label:"Classic",value:"default"},{label:"Google Home",value:"google_home"}]}}},{name:"accent_color",selector:{ui_color:{}}},{name:"main_color",selector:{ui_color:{}}}]}}static getStubConfig(t,e,i){const s=e.find(t=>t.startsWith("fan."))||"";return{type:"custom:superfan-card",entity:s}}setConfig(t){this._config=t}updated(t){if(super.updated(t),t.has("_config")){const t=this._config?.theme||"default";this.getAttribute("theme")!==t&&this.setAttribute("theme",t)}}getCardSize(){return"compact"!==this._config?.layout||this._expanded?4:2}_setSpeed(t){this.hass.callService("fan","set_percentage",{entity_id:this._config.entity,percentage:t})}_toggle(){if(!this.hass||!this._config)return;const t=this.hass.states[this._config.entity];if(t)if("off"===t.state){const e=Math.round(100/(t.attributes.percentage_step||100));let i=33;i=3===e?33:5===e?20:Math.round(100/e),this.hass.callService("fan","turn_on",{entity_id:this._config.entity,percentage:i})}else this.hass.callService("fan","turn_off",{entity_id:this._config.entity})}_setPreset(t){this.hass.callService("fan","set_preset_mode",{entity_id:this._config.entity,preset_mode:t})}_getPresetIcon(t){const e=t.toLowerCase();return e.includes("breeze")?"mdi:weather-windy":e.includes("speed")?"mdi:swap-vertical":e.includes("eco")?"mdi:leaf":e.includes("wellness")?"mdi:heart-pulse":e.includes("ac")?"mdi:air-conditioner":"mdi:auto-fix"}render(){if(!this._config||!this.hass)return B``;const t=this.hass.states[this._config.entity];if(!t)return B`<ha-card><div class="not-found">Entity not found</div></ha-card>`;const e=this._config.name||t.attributes.friendly_name||"Superfan",i="on"===t.state,s=t.attributes.percentage||0,r=t.attributes.preset_mode,o=t.attributes.preset_modes||[],n=t.attributes.percentage_step||100,a=Math.round(100/n),c=o.filter(t=>!t.toLowerCase().includes("timer")&&!t.toLowerCase().includes("hr")&&!t.toLowerCase().includes("hour")),l=o.filter(t=>t.toLowerCase().includes("timer")||t.toLowerCase().includes("hr")||t.toLowerCase().includes("hour"));let d="";if(this._config.accent_color)if(Array.isArray(this._config.accent_color))d=`rgb(${this._config.accent_color.join(",")})`;else if("string"==typeof this._config.accent_color){const t=this._config.accent_color.toLowerCase();d="primary"===t?"var(--primary-color)":"accent"===t?"var(--accent-color)":/^[a-z-]+$/.test(t)?`var(--${t}-color, ${t})`:t}let h="";if(this._config.main_color)if(Array.isArray(this._config.main_color))h=`rgb(${this._config.main_color.join(",")})`;else if("string"==typeof this._config.main_color){const t=this._config.main_color.toLowerCase();h="primary"===t?"var(--primary-color)":"accent"===t?"var(--accent-color)":/^[a-z-]+$/.test(t)?`var(--${t}-color, ${t})`:t}const p=`${d?`--miraie-accent: ${d}; `:""}${h?`--m-bg: ${h}; `:""}`;return"compact"!==this._config.layout||this._expanded?"google_home"===this._config.full_layout?this._renderGoogleHomeFull(t,e,i,s,r,a,c,l,p):B`
      <ha-card style="${p}">
        <div class="header">
          <div class="header-left">
            <div class="title-row">
              <div class="status-dot ${i?"online":""}"></div>
              <div class="title">${e}</div>
            </div>
            <div class="subtitle">Fan: ${i?r||s+"%":"off"}</div>
          </div>
          <div style="display: flex; gap: 8px;">
            ${"compact"===this._config.layout?B`
              <button class="power-btn" style="background: transparent;" @click=${()=>this._expanded=!1}>
                <ha-icon icon="mdi:chevron-up"></ha-icon>
              </button>
            `:""}
            <button class="power-btn ${i?"on":""}" @click=${this._toggle}>
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        <div class="body-container">
          <!-- Left Column: Speed Selector -->
          <div class="vertical-selector">
            ${5===a?B`
              <button class="speed-btn ${i&&s>80&&!r?"active":""}" @click=${()=>this._setSpeed(100)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>5</span>
              </button>
              <button class="speed-btn ${i&&s>60&&s<=80&&!r?"active":""}" @click=${()=>this._setSpeed(80)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>4</span>
              </button>
              <button class="speed-btn ${i&&s>40&&s<=60&&!r?"active":""}" @click=${()=>this._setSpeed(60)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>3</span>
              </button>
              <button class="speed-btn ${i&&s>20&&s<=40&&!r?"active":""}" @click=${()=>this._setSpeed(40)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>2</span>
              </button>
              <button class="speed-btn ${i&&s>0&&s<=20&&!r?"active":""}" @click=${()=>this._setSpeed(20)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>1</span>
              </button>
            `:3===a?B`
              <button class="speed-btn ${i&&s>66&&!r?"active":""}" @click=${()=>this._setSpeed(100)}>
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button class="speed-btn ${i&&s>33&&s<=66&&!r?"active":""}" @click=${()=>this._setSpeed(66)}>
                <ha-icon icon="mdi:fan-speed-2"></ha-icon>
                <span>Medium</span>
              </button>
              <button class="speed-btn ${i&&s>0&&s<=33&&!r?"active":""}" @click=${()=>this._setSpeed(33)}>
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            `:B`
              <!-- Fallback -->
              <button class="speed-btn ${i&&s>50&&!r?"active":""}" @click=${()=>this._setSpeed(100)}>
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button class="speed-btn ${i&&s>0&&s<=50&&!r?"active":""}" @click=${()=>this._setSpeed(50)}>
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

            ${0===o.length?B`
              <div class="section-label">No Presets Available</div>
            `:""}
          </div>
        </div>
      </ha-card>
    `:this._renderCompact(t,e,i,s,r,a)}_renderGoogleHomeFull(t,e,i,s,r,o,n,a,c){const l=i?r||`${s}%`:"Off";return B`
      <ha-card style="${c}" class="gh-full-card">
        <div class="gh-header">
          <div class="gh-header-left">
            <ha-icon class="gh-icon" icon="mdi:fan"></ha-icon>
            <div class="gh-title">${e}</div>
          </div>
          <div style="display: flex; gap: 8px;">
            ${"compact"===this._config.layout?B`
              <button class="gh-power-btn" style="background: transparent; color: var(--m-text-2);" @click=${()=>this._expanded=!1}>
                <ha-icon icon="mdi:chevron-up"></ha-icon>
              </button>
            `:""}
            <button class="gh-power-btn ${i?"on":""}" @click=${this._toggle}>
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        <div class="gh-center">
          <div class="gh-value-large">${l}</div>
          <div class="gh-subtitle-large">Fan Speed</div>
        </div>

        <div class="gh-slider-container">
          <input type="range" class="gh-slider" 
            min="0" max="100" step="${100/o}" 
            .value="${s}" 
            ?disabled=${!i||void 0!==r&&"none"!==r&&""!==r}
            @change=${t=>{const e=t.target;this._setSpeed(parseInt(e.value,10))}}
            style="--slider-value: ${s}%;"
          >
        </div>

        ${n.length>0||a.length>0?B`
          <div class="gh-pill-grid">
            ${n.map(t=>B`
              <button class="gh-pill ${r===t?"active":""}" @click=${()=>this._setPreset(t)}>
                <ha-icon icon="${this._getPresetIcon(t)}"></ha-icon>
                <span>${t}</span>
              </button>
            `)}
            ${a.map(t=>B`
              <button class="gh-pill ${r===t?"active":""}" @click=${()=>this._setPreset(t)}>
                <ha-icon icon="mdi:timer-outline"></ha-icon>
                <span>${t}</span>
              </button>
            `)}
          </div>
        `:""}
      </ha-card>
    `}_renderCompact(t,e,i,s,r,o){const n=i?r||`${s}%`:"Off";return B`
      <ha-card class="compact-card" @click=${()=>this._expanded=!0}>
        <div class="compact-header">
          <button class="compact-icon-btn ${i?"on":""}" @click=${t=>{t.stopPropagation(),this._toggle()}}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="compact-title">${e}</div>
          <ha-icon class="compact-chevron" icon="mdi:chevron-right"></ha-icon>
        </div>
        
        <div class="compact-center">
          <div class="compact-value" style="${n.length>4?"font-size: 1.8rem;":""}">${n}</div>
        </div>

        <div class="compact-footer">
          <button class="compact-action-btn" ?disabled=${!i||Boolean(r&&"none"!==r)} @click=${t=>{t.stopPropagation(),this._cycleSpeed(s,o,-1)}}>
            <ha-icon icon="mdi:minus"></ha-icon>
          </button>
          <div class="compact-subtitle">Speed</div>
          <button class="compact-action-btn" ?disabled=${!i||Boolean(r&&"none"!==r)} @click=${t=>{t.stopPropagation(),this._cycleSpeed(s,o,1)}}>
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>
      </ha-card>
    `}_cycleSpeed(t,e,i){if(3===e){const e=[0,33,66,100];let s=e.findIndex(e=>Math.abs(e-t)<=2);-1===s&&(s=0);let r=s+i;return r>3&&(r=3),r<0&&(r=0),void this._setSpeed(e[r])}if(5===e){const e=[0,20,40,60,80,100];let s=e.findIndex(e=>Math.abs(e-t)<=2);-1===s&&(s=0);let r=s+i;return r>5&&(r=5),r<0&&(r=0),void this._setSpeed(e[r])}let s=t+100/e*i;s>100&&(s=100),s<0&&(s=0),this._setSpeed(Math.round(s))}};t([dt({attribute:!1})],ut.prototype,"hass",void 0),t([ht()],ut.prototype,"_config",void 0),t([ht()],ut.prototype,"_expanded",void 0),ut=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("superfan-card")],ut);export{ut as SuperfanCard};
