function e(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}};const r=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,f=globalThis,u=f.trustedTypes,g=u?u.emptyScript:"",b=f.reactiveElementPolyfillSupport,m=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!a(e,t),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&c(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const n=s?.call(this);o?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const e=this.properties,t=[...d(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(i)e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=s;const n=o.fromAttribute(t,e.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(e,t,i,s=!1,o){if(void 0!==e){const n=this.constructor;if(!1===s&&(o=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??_)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==o||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[m("elementProperties")]=new Map,x[m("finalized")]=new Map,b?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y=globalThis,w=e=>e,A=y.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+C,D=`<${E}>`,P=document,T=()=>P.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,H="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,L=/>/g,N=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,R=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),W=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),q=new WeakMap,V=P.createTreeWalker(P,129);function G(e,t){if(!M(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,s=[];let o,n=2===t?"<svg>":3===t?"<math>":"",r=O;for(let t=0;t<i;t++){const i=e[t];let a,c,l=-1,d=0;for(;d<i.length&&(r.lastIndex=d,c=r.exec(i),null!==c);)d=r.lastIndex,r===O?"!--"===c[1]?r=j:void 0!==c[1]?r=L:void 0!==c[2]?(I.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=N):void 0!==c[3]&&(r=N):r===N?">"===c[0]?(r=o??O,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?N:'"'===c[3]?R:U):r===R||r===U?r=N:r===j||r===L?r=O:(r=N,o=void 0);const h=r===N&&e[t+1].startsWith("/>")?" ":"";n+=r===O?i+D:l>=0?(s.push(a),i.slice(0,l)+k+i.slice(l)+C+h):i+C+(-2===l?t:h)}return[G(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class K{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const r=e.length-1,a=this.parts,[c,l]=J(e,t);if(this.el=K.createElement(c,i),V.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=V.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(k)){const t=l[n++],i=s.getAttribute(e).split(C),r=/([.?@])?(.*)/.exec(t);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?ee:"?"===r[1]?te:"@"===r[1]?ie:X}),s.removeAttribute(e)}else e.startsWith(C)&&(a.push({type:6,index:o}),s.removeAttribute(e));if(I.test(s.tagName)){const e=s.textContent.split(C),t=e.length-1;if(t>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],T()),V.nextNode(),a.push({type:2,index:++o});s.append(e[t],T())}}}else if(8===s.nodeType)if(s.data===E)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(C,e+1));)a.push({type:7,index:o}),e+=C.length-1}o++}}static createElement(e,t){const i=P.createElement("template");return i.innerHTML=e,i}}function Y(e,t,i=e,s){if(t===W)return t;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=z(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(e),o._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(t=Y(e,o._$AS(e,t.values),o,s)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??P).importNode(t,!0);V.currentNode=s;let o=V.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new Q(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new se(o,this,e)),this._$AV.push(t),a=i[++r]}n!==a?.index&&(o=V.nextNode(),n++)}return V.currentNode=P,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),z(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=K.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new Z(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new K(e)),t}k(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new Q(this.O(T()),this.O(T()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=w(e).nextSibling;w(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(void 0===o)e=Y(this,e,t,0),n=!z(e)||e!==this._$AH&&e!==W,n&&(this._$AH=e);else{const s=e;let r,a;for(e=o[0],r=0;r<o.length-1;r++)a=Y(this,s[i+r],t,r),a===W&&(a=this._$AH[r]),n||=!z(a)||a!==this._$AH[r],a===F?e=F:e!==F&&(e+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class te extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class ie extends X{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??F)===W)return;const i=this._$AH,s=e===F&&i!==F||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const oe=y.litHtmlPolyfillSupport;oe?.(K,Q),(y.litHtmlVersions??=[]).push("3.3.3");const ne=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class re extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let o=s._$litPart$;if(void 0===o){const e=i?.renderBefore??null;s._$litPart$=o=new Q(t.insertBefore(T(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}re._$litElement$=!0,re.finalized=!0,ne.litElementHydrateSupport?.({LitElement:re});const ae=ne.litElementPolyfillSupport;ae?.({LitElement:re}),(ne.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:_},le=(e=ce,t,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,o,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];t.call(this,i),this.requestUpdate(s,o,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(e){return(t,i)=>"object"==typeof i?le(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return de({...e,state:!0,attribute:!1})}const pe=((e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new n(i,e,s)})`
  /* ──────────────────────────────────────────────────────────
     Default Token Layer (Standard Home Assistant)
     ────────────────────────────────────────────────────────── */
  :host {
    display: block;
    --sf-accent:            var(--primary-color, #7c4dff);

    /* Surfaces - color-mix ensures deep contrast in both light & dark themes */
    --sf-bg:                var(--ha-card-background, var(--card-background-color, var(--lovelace-background)));
    --sf-surface:           color-mix(in srgb, var(--primary-text-color, #000) 10%, var(--ha-card-background, var(--card-background-color, #fff)));
    --sf-surface-hover:     color-mix(in srgb, var(--primary-text-color, #000) 18%, var(--sf-surface));
    --sf-border:            color-mix(in srgb, var(--primary-text-color, #000) 24%, transparent);

    /* Text */
    --sf-text:              var(--primary-text-color, #111111);
    --sf-text-2:            color-mix(in srgb, var(--primary-text-color, #000) 80%, transparent);
    --sf-on-accent:         var(--text-primary-color, var(--sf-bg));

    /* Active state */
    --sf-active-bg:         color-mix(in srgb, var(--sf-accent) 22%, var(--sf-surface));
    --sf-active-border:     color-mix(in srgb, var(--sf-accent) 75%, transparent);
  }

  /* ──────────────────────────────────────────────────────────
     Material You Token Layer (Activated via Config)
     ────────────────────────────────────────────────────────── */
  :host([theme="material_you"]) {
    --sf-accent:            var(--md-sys-color-primary, var(--primary-color, #7c4dff));

    --sf-bg:                var(--md-sys-color-surface-variant, var(--md-sys-color-surface, var(--ha-card-background, var(--card-background-color, var(--lovelace-background)))));
    --sf-surface:           var(--md-sys-color-surface, color-mix(in srgb, var(--primary-text-color, #000) 10%, var(--ha-card-background, var(--card-background-color, #fff))));
    --sf-surface-hover:     color-mix(in srgb, var(--md-sys-color-on-surface, var(--sf-text)) 18%, var(--sf-surface));
    --sf-border:            var(--md-sys-color-outline-variant, var(--md-sys-color-outline, color-mix(in srgb, var(--primary-text-color, #000) 24%, transparent)));

    /* Text */
    --sf-text:              var(--md-sys-color-on-surface, var(--primary-text-color, #111111));
    --sf-text-2:            var(--md-sys-color-on-surface-variant, color-mix(in srgb, var(--primary-text-color, #000) 80%, transparent));
    --sf-on-accent:         var(--md-sys-color-on-primary, var(--text-primary-color, var(--sf-bg)));

    /* Active state */
    --sf-active-bg:         var(--md-sys-color-secondary-container, color-mix(in srgb, var(--sf-accent) 22%, var(--sf-surface)));
    --sf-active-border:     var(--md-sys-color-secondary, color-mix(in srgb, var(--sf-accent) 75%, transparent));
  }

  ha-card {
    background: var(--sf-bg, var(--ha-card-background, var(--card-background-color, #1e1e24)));
    border: 1px solid var(--sf-border);
    border-radius: var(--ha-card-border-radius, 18px);
    padding: 20px 18px 18px;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.15));
    box-sizing: border-box;
    font-family: var(--paper-font-body1_-_font-family, inherit);
    color: var(--sf-text);
    overflow: hidden;
  }

  /* ── Card Header ── */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }
  .header-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .title-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .header-icon {
    --mdc-icon-size: 22px;
    color: var(--sf-accent);
  }
  .title {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.2;
  }
  .subtitle {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--sf-text-2);
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .collapse-btn {
    width: 40px; height: 40px; border-radius: 50%;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text-2);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .collapse-btn:hover { background: var(--sf-surface-hover); color: var(--sf-text); }

  .power-btn {
    width: 40px; height: 40px; border-radius: 50%;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .power-btn:hover { background: var(--sf-surface-hover); }
  .power-btn.disabled { opacity: 0.5; cursor: not-allowed; }
  .power-btn.on {
    background: var(--sf-accent);
    color: var(--sf-on-accent, #ffffff);
    border-color: var(--sf-accent);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--sf-accent) 40%, transparent);
  }

  /* ── Body Layout ── */
  .body-container {
    display: flex;
    gap: 16px;
    align-items: stretch;
  }

  /* ── Left Column: Speed Selector ── */
  .vertical-selector {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 76px;
    flex-shrink: 0;
    align-self: flex-start;
    background: rgba(128, 128, 128, 0.08);
    border: 1px solid var(--sf-border);
    border-radius: 16px;
    padding: 4px;
    box-sizing: border-box;
  }

  .speed-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 10px 4px;
    border-radius: 10px;
    border: none;
    background: transparent;
    color: var(--sf-text-2);
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .speed-btn:hover:not(.disabled) {
    background: rgba(128, 128, 128, 0.12);
    color: var(--sf-text);
  }
  .speed-btn.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
  .speed-btn ha-icon {
    --mdc-icon-size: 18px;
  }
  .speed-btn.active {
    background: var(--sf-accent);
    color: var(--sf-on-accent, #ffffff);
    font-weight: 700;
    box-shadow: 0 0 16px color-mix(in srgb, var(--sf-accent) 55%, transparent), 0 2px 8px color-mix(in srgb, var(--sf-accent) 35%, transparent);
  }

  /* ── Right Column: Presets ── */
  .presets-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
  }

  .section-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--sf-text-2);
  }

  .pill-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .pill-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 6px;
    padding: 10px 8px;
    border-radius: 12px;
    border: 1px solid var(--sf-border);
    background: var(--sf-surface);
    color: var(--sf-text);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    min-width: 0;
    overflow: hidden;
  }
  .pill-btn:hover { background: var(--sf-surface-hover); }
  .pill-btn.disabled { opacity: 0.5; cursor: not-allowed; }
  .pill-btn ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }
  .pill-btn span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    max-width: 100%;
  }

  .pill-btn.active {
    background: var(--sf-accent);
    border-color: var(--sf-accent);
    color: var(--sf-on-accent, #ffffff);
    font-weight: 700;
    box-shadow: 0 0 16px color-mix(in srgb, var(--sf-accent) 55%, transparent), 0 2px 8px color-mix(in srgb, var(--sf-accent) 35%, transparent);
  }

  /* ── Telemetry & Connection Footer ── */
  .footer-telemetry-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid var(--sf-border);
    font-size: 0.76rem;
    color: var(--sf-text-2);
  }
  .connection-status-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.76rem;
    color: var(--sf-text-2);
  }
  .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #e74c3c;
    flex-shrink: 0;
  }
  .status-dot.online {
    background: #2ecc71;
    box-shadow: 0 0 6px rgba(46, 204, 113, 0.5);
  }

  /* ──────────────────────────────────────────────────────────
     Google Home / Material Design 3 Full Layout
     ────────────────────────────────────────────────────────── */
  .gh-full-card {
    background: var(--sf-bg, var(--ha-card-background, var(--card-background-color, #1e1e24)));
    border-radius: 28px;
    border: none;
    box-shadow: none;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .gh-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .gh-header-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .gh-icon {
    --mdc-icon-size: 22px;
    color: var(--sf-text-2);
  }
  .gh-title {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--sf-text);
  }
  .gh-power-btn {
    width: 44px; height: 44px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    background: transparent; border: none; color: var(--sf-text-2);
    cursor: pointer; transition: 0.2s ease; outline: none;
  }
  .gh-power-btn:hover { background: rgba(128, 128, 128, 0.15); }
  .gh-power-btn.disabled { opacity: 0.4; cursor: not-allowed; }
  .gh-power-btn.on {
    background: var(--sf-active-bg);
    color: var(--sf-accent);
  }

  .gh-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 0 6px 0;
  }
  .gh-value-large {
    font-size: 5rem;
    font-weight: 400;
    color: var(--sf-text);
    line-height: 1.1;
    text-align: center;
    max-width: 100%;
    word-break: break-word;
  }
  .gh-subtitle-large {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--sf-text-2);
    margin-top: 4px;
    text-align: center;
  }

  /* ── Google Home Stepper Action Row ── */
  .gh-action-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    padding: 6px 0 12px 0;
  }
  .gh-circular-btn {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(128, 128, 128, 0.15);
    border: none;
    color: var(--sf-text);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s ease;
    --mdc-icon-size: 32px;
    outline: none;
  }
  .gh-circular-btn:hover:not(:disabled) {
    background: rgba(128, 128, 128, 0.25);
  }
  .gh-circular-btn:disabled, .gh-circular-btn.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  /* ── Custom Dropdown Selectors ── */
  .gh-select-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 4px;
  }
  .gh-select-wrapper {
    flex: 1 1 calc(33.3% - 8px);
    min-width: 100px;
    position: relative;
  }
  .gh-select-wrapper.active {
    z-index: 100;
  }
  .gh-custom-select {
    width: 100%;
    background: rgba(128, 128, 128, 0.15);
    border-radius: 20px;
    border: none;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    color: var(--sf-text);
    font-size: 0.88rem;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    user-select: none;
    outline: none;
    transition: background 0.2s ease;
  }
  .gh-custom-select:hover:not(:disabled) {
    background: rgba(128, 128, 128, 0.22);
  }
  .gh-custom-select:disabled, .gh-custom-select.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .gh-custom-select span, .gh-custom-select ha-icon {
    pointer-events: none;
  }
  .gh-custom-select ha-icon {
    color: var(--sf-text-2);
    --mdc-icon-size: 18px;
  }
  .gh-dropdown-menu {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 0;
    width: 100%;
    background: var(--sf-surface);
    border: 1px solid var(--sf-border);
    border-radius: 16px;
    overflow: hidden;
    z-index: 10;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
  }
  .gh-dropdown-item {
    width: 100%;
    text-align: left;
    border: none;
    background: transparent;
    font-family: inherit;
    padding: 10px 14px;
    font-size: 0.88rem;
    color: var(--sf-text);
    transition: 0.15s ease;
    cursor: pointer;
    outline: none;
  }
  .gh-dropdown-item:hover {
    background: rgba(128, 128, 128, 0.12);
  }
  .gh-dropdown-item.active {
    color: var(--sf-accent);
    background: var(--sf-active-bg);
    font-weight: 600;
  }

  /* ── Extra Action Chips ── */
  .gh-extra-chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding-top: 4px;
  }
  .gh-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 16px;
    background: rgba(128, 128, 128, 0.15);
    border: none;
    color: var(--sf-text);
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s ease;
    --mdc-icon-size: 16px;
    outline: none;
    min-width: 0;
  }
  .gh-chip span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    max-width: 100%;
  }
  .gh-chip:hover:not(:disabled), .gh-pill:hover {
    background: rgba(128, 128, 128, 0.25);
  }
  .gh-chip.active {
    background: var(--sf-active-bg);
    color: var(--sf-accent);
    font-weight: 600;
  }
  .gh-chip:disabled, .gh-chip.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* ── Compact Views: Classic vs Google Home ── */
  .compact-card {
    cursor: pointer;
    transition: all 0.2s ease;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* Classic Compact */
  .compact-card.classic {
    border-radius: 16px;
    border: 1px solid var(--sf-border);
    background: var(--sf-bg);
    padding: 16px;
  }
  .compact-card.classic .compact-icon-btn {
    width: 38px; height: 38px; border-radius: 10px;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.2s ease; flex-shrink: 0;
  }
  .compact-card.classic .compact-icon-btn.on {
    background: var(--sf-accent);
    color: var(--sf-on-accent);
    border-color: var(--sf-accent);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--sf-accent) 40%, transparent);
  }
  .compact-card.classic .compact-action-btn {
    width: 38px; height: 38px; border-radius: 10px;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.2s ease;
  }
  .compact-card.classic .compact-value {
    font-size: 2.4rem;
    font-weight: 800;
    color: var(--sf-text);
  }

  /* Google Home Compact */
  .compact-card.google-home {
    background: var(--sf-bg, var(--ha-card-background, var(--card-background-color, #1e1e24)));
    border-radius: 28px;
    border: none;
    box-shadow: none;
    padding: 16px;
  }
  .compact-card.google-home .compact-icon-btn {
    width: 40px; height: 40px; border-radius: 50%;
    border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: rgba(128, 128, 128, 0.15); color: var(--sf-text-2);
    transition: all 0.2s ease; flex-shrink: 0;
  }
  .compact-card.google-home .compact-icon-btn.on {
    background: var(--sf-active-bg);
    color: var(--sf-accent);
  }
  .compact-card.google-home .compact-action-btn {
    width: 40px; height: 40px; border-radius: 50%;
    border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: rgba(128, 128, 128, 0.15); color: var(--sf-text);
    transition: all 0.2s ease;
  }
  .compact-card.google-home .compact-value {
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--sf-text);
  }

  .compact-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .compact-title {
    font-size: 1rem;
    font-weight: 600;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .compact-chevron {
    color: var(--sf-text-2);
  }
  .compact-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .compact-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px;
  }
  .compact-icon-btn:hover { background: var(--sf-surface-hover); }
  .compact-icon-btn.disabled { opacity: 0.4; cursor: not-allowed; }
  .compact-action-btn:hover { background: var(--sf-surface-hover); }
  .compact-action-btn:disabled, .compact-action-btn.disabled { opacity: 0.3; cursor: not-allowed; }
  .compact-subtitle {
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--sf-text-2);
  }
`;window.customCards=window.customCards||[],window.customCards.push({type:"superfan-card",name:"Superfan Card",description:"A premium Lovelace fan card for the Superfan integration.",preview:!0});let fe=class extends re{constructor(){super(...arguments),this._expanded=!1,this._ghDropdown=null,this._handleWindowClick=e=>{const t=e.composedPath();this._ghDropdown&&!t.includes(this)&&(this._ghDropdown=null)}}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._handleWindowClick)}disconnectedCallback(){window.removeEventListener("click",this._handleWindowClick),super.disconnectedCallback()}static get styles(){return pe}static getConfigForm(){return{schema:[{name:"entity",required:!0,label:"Fan Entity",selector:{entity:{domain:"fan",integration:"superfan_ir"}}},{name:"name",label:"Custom Title",selector:{text:{}}},{name:"theme",label:"Theme",selector:{select:{options:[{label:"Default HA Theme",value:"default"},{label:"Material You",value:"material_you"}]}}},{name:"layout",label:"Card Layout",selector:{select:{options:[{label:"Default (Full)",value:"default"},{label:"Compact (Expandable)",value:"compact"}]}}},{name:"full_layout",label:"Full View Style",selector:{select:{options:[{label:"Classic",value:"default"},{label:"Google Home",value:"google_home"}]}}},{name:"",type:"expandable",title:"Theming & Colors",icon:"mdi:palette",schema:[{name:"accent_color",label:"Accent Color",selector:{ui_color:{}}},{name:"main_color",label:"Background Color",selector:{ui_color:{}}}]},{name:"",type:"expandable",title:"Companion Entities (Auto-Discovered if blank)",icon:"mdi:link-variant",schema:[{name:"control_source_sensor",label:"Control Source Sensor",selector:{entity:{domain:"sensor",integration:"superfan_ir"}}},{name:"ir_blaster_sensor",label:"IR Blaster Sensor",selector:{entity:{domain:["binary_sensor","infrared","remote"]}}}]}]}}static getStubConfig(e,t,i){const s=t.find(e=>e.startsWith("fan."))||"";return{type:"custom:superfan-card",entity:s}}setConfig(e){if(!e||!e.entity)throw new Error("Please define a valid fan entity");this._config={...e}}updated(e){if(super.updated(e),e.has("_config")){const e=this._config?.theme||"default";this.getAttribute("theme")!==e&&this.setAttribute("theme",e)}}getCardSize(){return"compact"!==this._config?.layout||this._expanded?4:2}_haptic(e="light"){window.dispatchEvent(new CustomEvent("haptic",{detail:e}))}_sourceIcon(e){const t=(e||"").toLowerCase();return t.includes("remote")?"mdi:remote":t.includes("switch")?"mdi:toggle-switch":t.includes("blaster")||t.includes("failover")||"ir"===t?"mdi:remote-desktop":t.includes("cloud")||"mqtt"===t?"mdi:cloud-check":"mdi:remote-desktop"}_showToast(e){this._haptic("warning"),this.dispatchEvent(new CustomEvent("hass-notification",{bubbles:!0,composed:!0,detail:{message:e}}))}_setSpeed(e){this._haptic("selection"),this.hass.callService("fan","set_percentage",{entity_id:this._config.entity,percentage:e})}_toggle(){if(!this.hass||!this._config)return;this._haptic("medium");const e=this.hass.states[this._config.entity];e&&("off"===e.state?this.hass.callService("fan","turn_on",{entity_id:this._config.entity}):this.hass.callService("fan","turn_off",{entity_id:this._config.entity}))}_setPreset(e){this._haptic("light"),this.hass.callService("fan","set_preset_mode",{entity_id:this._config.entity,preset_mode:e})}_formatPresetName(e){return e?e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()):""}_getPresetIcon(e){const t=e.toLowerCase();return t.includes("breeze")?"mdi:weather-windy":t.includes("nature")?"mdi:nature":t.includes("smart")?"mdi:brain":t.includes("speed")?"mdi:swap-vertical":t.includes("eco")?"mdi:leaf":t.includes("wellness")?"mdi:heart-pulse":t.includes("ac")?"mdi:air-conditioner":t.includes("reverse")?"mdi:rotate-left":t.includes("sleep")?"mdi:bed-clock":t.includes("led")||t.includes("light")?"mdi:lightbulb-outline":t.includes("boost")?"mdi:rocket-launch-outline":t.includes("timer")||t.includes("hr")||t.includes("hour")?"mdi:timer-outline":"mdi:fan"}render(){if(!this._config||!this.hass)return null;const e=this.hass.states[this._config.entity];if(!e)return B`
        <ha-card style="padding: 20px; text-align: center;">
          <div style="font-size: 16px; font-weight: 700; color: var(--primary-text-color);">Superfan Card</div>
          <div style="font-size: 13px; color: var(--error-color, #e53935); margin-top: 6px;">
            Entity not found: <code>${this._config.entity}</code>
          </div>
        </ha-card>
      `;const t=this._config.name||e.attributes.friendly_name||"Superfan",i="unavailable"!==e.state&&"unknown"!==e.state,s="on"===e.state&&i,o=e.attributes.percentage||0,n=e.attributes.preset_mode,r=e.attributes.preset_modes||[],a=e.attributes.percentage_step||100,c=Math.round(100/a),l=this._config.entity.replace(/^fan\./,""),d=this._config.control_source_sensor?this.hass.states[this._config.control_source_sensor]:this.hass.states[`sensor.${l}_last_controlled_via`]||Object.values(this.hass.states).find(e=>e.entity_id.startsWith("sensor.")&&e.entity_id.includes(l)&&e.entity_id.includes("last_controlled_via")),h=this._config.ir_blaster_sensor?this.hass.states[this._config.ir_blaster_sensor]:this.hass.states[`binary_sensor.${l}_ir_blaster_available`]||Object.values(this.hass.states).find(e=>e.entity_id.startsWith("binary_sensor.")&&e.entity_id.includes(l)&&e.entity_id.includes("ir_blaster_available")),p=h?"on"===h.state:i,f=d?d.state:null,u=r.filter(e=>!e.toLowerCase().includes("timer")&&!e.toLowerCase().includes("hr")&&!e.toLowerCase().includes("hour")),g=r.filter(e=>e.toLowerCase().includes("timer")||e.toLowerCase().includes("hr")||e.toLowerCase().includes("hour"));let b="";if(this._config.accent_color)if(Array.isArray(this._config.accent_color))b=`rgb(${this._config.accent_color.join(",")})`;else if("string"==typeof this._config.accent_color){const e=this._config.accent_color.toLowerCase();b="primary"===e?"var(--primary-color)":"accent"===e?"var(--accent-color)":/^[a-z-]+$/.test(e)?`var(--${e}-color, ${e})`:e}let m="";if(this._config.main_color)if(Array.isArray(this._config.main_color))m=`rgb(${this._config.main_color.join(",")})`;else if("string"==typeof this._config.main_color){const e=this._config.main_color.toLowerCase();m="primary"===e?"var(--primary-color)":"accent"===e?"var(--accent-color)":/^[a-z-]+$/.test(e)?`var(--${e}-color, ${e})`:e}const v=`${b?`--sf-accent: ${b}; `:""}${m?`--sf-bg: ${m}; `:""}`;return"compact"!==this._config.layout||this._expanded?"google_home"===this._config.full_layout?this._renderGoogleHomeFull(e,t,s,i,o,n,c,u,g,v,d,h):B`
      <ha-card style="${v}">
        <div class="header">
          <div class="header-left">
            <div class="title-row">
              <ha-icon class="header-icon" icon="mdi:fan"></ha-icon>
              <div class="title">${t}</div>
            </div>
            <div class="subtitle">Fan: ${s?n?this._formatPresetName(n):`${o}%`:i?"Off":"Offline"}</div>
          </div>
          <div class="header-right">
            ${"compact"===this._config.layout?B`
              <button
                class="collapse-btn"
                title="Collapse card"
                @click=${()=>this._expanded=!1}
              >
                <ha-icon icon="mdi:chevron-up"></ha-icon>
              </button>
            `:""}
            <button
              class="power-btn ${s?"on":""} ${i?"":"disabled"}"
              title="${i?"Toggle Power":"Device is offline"}"
              @click=${()=>{i?this._toggle():this._showToast("Device is offline")}}
            >
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        <div class="body-container">
          <!-- Left Column: Speed Selector -->
          <div class="vertical-selector">
            ${5===c?B`
              <button
                class="speed-btn ${s&&o>80&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Speed 5 (100%)":"Device is offline"}"
                @click=${()=>{i?this._setSpeed(100):this._showToast("Device is offline")}}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>5</span>
              </button>
              <button
                class="speed-btn ${s&&o>60&&o<=80&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Speed 4 (80%)":"Device is offline"}"
                @click=${()=>{i?this._setSpeed(80):this._showToast("Device is offline")}}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>4</span>
              </button>
              <button
                class="speed-btn ${s&&o>40&&o<=60&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Speed 3 (60%)":"Device is offline"}"
                @click=${()=>{i?this._setSpeed(60):this._showToast("Device is offline")}}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>3</span>
              </button>
              <button
                class="speed-btn ${s&&o>20&&o<=40&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Speed 2 (40%)":"Device is offline"}"
                @click=${()=>{i?this._setSpeed(40):this._showToast("Device is offline")}}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>2</span>
              </button>
              <button
                class="speed-btn ${s&&o>0&&o<=20&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Speed 1 (20%)":"Device is offline"}"
                @click=${()=>{i?this._setSpeed(20):this._showToast("Device is offline")}}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>1</span>
              </button>
            `:3===c?B`
              <button
                class="speed-btn ${s&&o>66&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"High Speed (100%)":"Device is offline"}"
                @click=${()=>{i?this._setSpeed(100):this._showToast("Device is offline")}}
              >
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button
                class="speed-btn ${s&&o>33&&o<=66&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Medium Speed (66%)":"Device is offline"}"
                @click=${()=>{i?this._setSpeed(66):this._showToast("Device is offline")}}
              >
                <ha-icon icon="mdi:fan-speed-2"></ha-icon>
                <span>Medium</span>
              </button>
              <button
                class="speed-btn ${s&&o>0&&o<=33&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Low Speed (33%)":"Device is offline"}"
                @click=${()=>{i?this._setSpeed(33):this._showToast("Device is offline")}}
              >
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            `:B`
              <button
                class="speed-btn ${s&&o>50&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"High Speed":"Device is offline"}"
                @click=${()=>{i?this._setSpeed(100):this._showToast("Device is offline")}}
              >
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button
                class="speed-btn ${s&&o>0&&o<=50&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Low Speed":"Device is offline"}"
                @click=${()=>{i?this._setSpeed(50):this._showToast("Device is offline")}}
              >
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            `}
          </div>

          <!-- Right Column: Presets -->
          <div class="presets-container">
            ${u.length>0?B`
              <div class="section-label">Modes</div>
              <div class="pill-grid">
                ${u.map(e=>{const t=e.toLowerCase().includes("speed adjust"),o=Boolean(n&&"none"!==n&&!n.toLowerCase().includes("speed adjust"));return B`
                    <button
                      class="pill-btn ${n===e&&s?"active":""} ${!i||t&&o?"disabled":""}"
                      title="${i?t&&o?"Deactivate current preset to adjust speed":e:"Device is offline"}"
                      @click=${()=>{i?t&&o?this._showToast("Deactivate current preset to adjust speed"):this._setPreset(e):this._showToast("Device is offline")}}
                    >
                      <ha-icon icon="${this._getPresetIcon(e)}"></ha-icon>
                      <span>${e}</span>
                    </button>
                  `})}
              </div>
            `:""}

            ${g.length>0?B`
              <div class="section-label" style="margin-top: 4px;">Timers</div>
              <div class="pill-grid">
                ${g.map(e=>B`
                  <button
                    class="pill-btn ${n===e&&s?"active":""} ${i?"":"disabled"}"
                    title="${i?e:"Device is offline"}"
                    @click=${()=>{i?this._setPreset(e):this._showToast("Device is offline")}}
                  >
                    <ha-icon icon="mdi:timer-outline"></ha-icon>
                    <span>${e}</span>
                  </button>
                `)}
              </div>
            `:""}

            ${0===r.length?B`
              <div class="section-label">No Presets Available</div>
            `:""}
          </div>
        </div>

        <!-- Telemetry & Connection Footer -->
        <div class="footer-telemetry-row">
          <div class="connection-status-pill">
            <div class="status-dot ${p?"online":""}"></div>
            <span>IR Blaster</span>
          </div>
          ${f?B`
            <div class="connection-status-pill">
              <ha-icon icon="${"IR Remote"===f?"mdi:remote":"Mains Switch"===f?"mdi:toggle-switch":"mdi:remote-desktop"}" style="--mdc-icon-size: 14px;"></ha-icon>
              <span>Last controlled by: ${f}</span>
            </div>
          `:""}
        </div>
      </ha-card>
    `:this._renderCompact(e,t,s,i,o,n,c,v)}_renderGoogleHomeFull(e,t,i,s,o,n,r,a,c,l,d,h){const p=i?n?this._formatPresetName(n):`${o}%`:"Off";let f=[];if(3===r)f=[{label:"Low",pct:33},{label:"Med",pct:66},{label:"High",pct:100}];else if(5===r)f=[{label:"1",pct:20},{label:"2",pct:40},{label:"3",pct:60},{label:"4",pct:80},{label:"5",pct:100}];else if(6===r)f=[{label:"1",pct:17},{label:"2",pct:33},{label:"3",pct:50},{label:"4",pct:67},{label:"5",pct:83},{label:"6",pct:100}];else{const e=r>0?r:3,t=100/e;for(let i=1;i<=e;i++)f.push({label:`${i}`,pct:Math.round(i*t)})}const u=i?f.findIndex((e,t)=>Math.abs(e.pct-o)<=10||t===f.length-1&&o>=e.pct-10):-1,g=u>=0?f[u].label:`${o}%`,b=c.find(e=>n===e),m=n&&!b?n:null,v=h?"on"===h.state:s,_=d?d.state:null;return B`
      <ha-card style="${l}" class="gh-full-card" @click=${()=>this._ghDropdown=null}>
        <!-- Header -->
        <div class="gh-header">
          <div class="gh-header-left">
            <ha-icon class="gh-icon" icon="mdi:fan"></ha-icon>
            <div class="gh-title">${t}</div>
          </div>
          <div style="display: flex; gap: 8px;">
            ${"compact"===this._config.layout?B`
                  <button
                    class="gh-power-btn"
                    title="Collapse card"
                    @click=${e=>{e.stopPropagation(),this._expanded=!1}}
                  >
                    <ha-icon icon="mdi:chevron-up"></ha-icon>
                  </button>
                `:""}
            <button
              class="gh-power-btn ${i?"on":""} ${s?"":"disabled"}"
              title="${s?"Toggle Power":"Device is offline"}"
              @click=${e=>{e.stopPropagation(),s?this._toggle():this._showToast("Device is offline")}}
            >
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        <!-- Hero Value -->
        <div class="gh-center">
          <div
            class="gh-value-large"
            style="${p.length>5?"font-size: 2.4rem; padding: 0 8px;":""}"
          >
            ${p}
          </div>
          <div class="gh-subtitle-large">${n?"Active Preset":"Fan Speed"}</div>
        </div>

        <!-- Google Home Dual Stepper Action Row -->
        <div class="gh-action-row">
          <button
            class="gh-circular-btn ${i&&s?"":"disabled"}"
            title="${s?i?u<=0?"Turn fan off":"Decrease speed":"Turn on the fan to decrease speed":"Device is offline"}"
            @click=${e=>{e.stopPropagation(),s?i?u<=0?this._toggle():this._setSpeed(f[u-1].pct):this._showToast("Turn on the fan to decrease speed"):this._showToast("Device is offline")}}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </button>
          <button
            class="gh-circular-btn ${!s||i&&u>=f.length-1?"disabled":""}"
            title="${s?i?u>=f.length-1?"Maximum speed reached":"Increase speed":"Turn on fan at low speed":"Device is offline"}"
            @click=${e=>{e.stopPropagation(),s?i?u>=f.length-1?this._showToast("Maximum speed reached"):this._setSpeed(f[u+1].pct):this._setSpeed(f[0].pct):this._showToast("Device is offline")}}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>

        <!-- Dropdowns Container: Speed, Preset, Timer -->
        <div class="gh-select-container">
          <!-- Speed Dropdown -->
          <div class="gh-select-wrapper ${"speed"===this._ghDropdown?"active":""}">
            <button
              class="gh-custom-select ${s?"":"disabled"}"
              title="${s?"Select Speed":"Device is offline"}"
              @click=${e=>{e.stopPropagation(),s?(this._haptic("selection"),this._ghDropdown="speed"===this._ghDropdown?null:"speed"):this._showToast("Device is offline")}}
            >
              <span>Speed: ${i?g:"Off"}</span>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
            ${"speed"===this._ghDropdown?B`
              <div class="gh-dropdown-menu">
                ${f.map((e,t)=>B`
                  <button
                    class="gh-dropdown-item ${i&&u===t?"active":""}"
                    @click=${t=>{t.stopPropagation(),this._ghDropdown=null,this._setSpeed(e.pct)}}
                  >
                    Speed ${e.label} (${e.pct}%)
                  </button>
                `)}
              </div>
            `:""}
          </div>

          <!-- Preset Dropdown -->
          ${a.length>0?B`
            <div class="gh-select-wrapper ${"preset"===this._ghDropdown?"active":""}">
              <button
                class="gh-custom-select ${s?"":"disabled"}"
                title="${s?"Select Preset Mode":"Device is offline"}"
                @click=${e=>{e.stopPropagation(),s?(this._haptic("selection"),this._ghDropdown="preset"===this._ghDropdown?null:"preset"):this._showToast("Device is offline")}}
              >
                <span>Preset: ${m?this._formatPresetName(m):"None"}</span>
                <ha-icon icon="mdi:chevron-down"></ha-icon>
              </button>
              ${"preset"===this._ghDropdown?B`
                <div class="gh-dropdown-menu">
                  <button
                    class="gh-dropdown-item ${m?"":"active"}"
                    @click=${e=>{e.stopPropagation(),this._ghDropdown=null,this._setSpeed(o||f[0].pct)}}
                  >
                    None
                  </button>
                  ${a.map(e=>B`
                    <button
                      class="gh-dropdown-item ${n===e?"active":""}"
                      @click=${t=>{t.stopPropagation(),this._ghDropdown=null,this._setPreset(e)}}
                    >
                      ${this._formatPresetName(e)}
                    </button>
                  `)}
                </div>
              `:""}
            </div>
          `:""}

          <!-- Timer Dropdown -->
          ${c.length>0?B`
            <div class="gh-select-wrapper ${"timer"===this._ghDropdown?"active":""}">
              <button
                class="gh-custom-select ${s?"":"disabled"}"
                title="${s?"Select Timer":"Device is offline"}"
                @click=${e=>{e.stopPropagation(),s?(this._haptic("selection"),this._ghDropdown="timer"===this._ghDropdown?null:"timer"):this._showToast("Device is offline")}}
              >
                <span>Timer: ${b?this._formatPresetName(b):"None"}</span>
                <ha-icon icon="mdi:chevron-down"></ha-icon>
              </button>
              ${"timer"===this._ghDropdown?B`
                <div class="gh-dropdown-menu">
                  <button
                    class="gh-dropdown-item ${b?"":"active"}"
                    @click=${e=>{e.stopPropagation(),this._ghDropdown=null,this._setSpeed(o||f[0].pct)}}
                  >
                    None (Off)
                  </button>
                  ${c.map(e=>B`
                    <button
                      class="gh-dropdown-item ${n===e?"active":""}"
                      @click=${t=>{t.stopPropagation(),this._ghDropdown=null,this._setPreset(e)}}
                    >
                      ${this._formatPresetName(e)}
                    </button>
                  `)}
                </div>
              `:""}
            </div>
          `:""}
        </div>

        <!-- Auxiliary Action Chips (LED Light if present) -->
        ${a.filter(e=>e.toLowerCase().includes("light")||e.toLowerCase().includes("led")).length>0?B`
              <div class="gh-extra-chips">
                ${a.filter(e=>e.toLowerCase().includes("light")||e.toLowerCase().includes("led")).map(e=>B`
                      <button
                        class="gh-chip ${n===e&&i?"active":""} ${s?"":"disabled"}"
                        title="${s?e:"Device is offline"}"
                        @click=${t=>{t.stopPropagation(),s?this._setPreset(e):this._showToast("Device is offline")}}
                      >
                        <ha-icon icon="mdi:lightbulb-outline"></ha-icon>
                        <span>${this._formatPresetName(e)}</span>
                      </button>
                    `)}
              </div>
            `:""}

        <!-- Footer Telemetry Status Row -->
        <div class="footer-telemetry-row">
          <div class="connection-status-pill">
            <div class="status-dot ${v?"online":""}"></div>
            <span>IR Blaster</span>
          </div>
          ${_?B`
                <div class="connection-status-pill">
                  <ha-icon
                    icon="${this._sourceIcon(_)}"
                    style="--mdc-icon-size: 14px;"
                  ></ha-icon>
                  <span>Last controlled by: ${_}</span>
                </div>
              `:""}
        </div>
      </ha-card>
    `}_renderCompact(e,t,i,s,o,n,r,a){const c=i?n?this._formatPresetName(n):`${o}%`:s?"Off":"Offline",l="google_home"===this._config.full_layout;return B`
      <ha-card
        style="${a}"
        class="compact-card ${l?"google-home":"classic"}"
        title="Click to expand Superfan controls"
        @click=${()=>{this._haptic("selection"),this._expanded=!0}}
      >
        <div class="compact-header">
          <button
            class="compact-icon-btn ${i?"on":""} ${s?"":"disabled"}"
            title="${s?"Toggle Power":"Device is offline"}"
            @click=${e=>{e.stopPropagation(),s?this._toggle():this._showToast("Device is offline")}}
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="compact-title">${t}</div>
          <ha-icon class="compact-chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="compact-center">
          <div
            class="compact-value"
            style="${c.length>4?"font-size: 1.8rem;":""}"
          >
            ${c}
          </div>
        </div>

        <div class="compact-footer">
          <button
            class="compact-action-btn ${i&&s?"":"disabled"}"
            title="${s?i?o<=1?"Turn fan off":"Decrease Speed":"Turn on the fan to adjust speed":"Device is offline"}"
            @click=${e=>{e.stopPropagation(),s?i?o<=1?this._toggle():this._cycleSpeed(o,r,-1):this._showToast("Turn on the fan to adjust speed"):this._showToast("Device is offline")}}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </button>
          <div class="compact-subtitle">Speed</div>
          <button
            class="compact-action-btn ${!s||i&&o>=100?"disabled":""}"
            title="${s?i?o>=100?"Maximum speed reached":"Increase Speed":"Turn on fan at low speed":"Device is offline"}"
            @click=${e=>{e.stopPropagation(),s?i?o>=100?this._showToast("Maximum speed reached"):this._cycleSpeed(o,r,1):this._setSpeed(o>0?o:3===r?33:6===r?17:20):this._showToast("Device is offline")}}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>
      </ha-card>
    `}_cycleSpeed(e,t,i){if(this._haptic("light"),3===t){const t=[0,33,66,100];let s=t.findIndex(t=>Math.abs(t-e)<=2);-1===s&&(s=0);let o=s+i;return o>3&&(o=3),o<0&&(o=0),void this._setSpeed(t[o])}if(5===t){const t=[0,20,40,60,80,100];let s=t.findIndex(t=>Math.abs(t-e)<=2);-1===s&&(s=0);let o=s+i;return o>5&&(o=5),o<0&&(o=0),void this._setSpeed(t[o])}if(6===t){const t=[0,17,33,50,67,83,100];let s=t.findIndex(t=>Math.abs(t-e)<=2);-1===s&&(s=0);let o=s+i;return o>6&&(o=6),o<0&&(o=0),void this._setSpeed(t[o])}let s=e+100/t*i;s>100&&(s=100),s<0&&(s=0),this._setSpeed(Math.round(s))}};e([de({attribute:!1})],fe.prototype,"hass",void 0),e([he()],fe.prototype,"_config",void 0),e([he()],fe.prototype,"_expanded",void 0),e([he()],fe.prototype,"_ghDropdown",void 0),fe=e([(e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)})("superfan-card")],fe);export{fe as SuperfanCard};
