function t(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const r=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,g=f?f.emptyScript:"",b=u.reactiveElementPolyfillSupport,m=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},_=(t,e)=>!a(t,e),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);o?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:v).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i;const n=o.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(void 0!==t){const n=this.constructor;if(!1===i&&(o=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??_)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[m("elementProperties")]=new Map,x[m("finalized")]=new Map,b?.({ReactiveElement:x}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y=globalThis,w=t=>t,S=y.trustedTypes,A=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+k,P=`<${E}>`,T=document,j=()=>T.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,O="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,N=/>/g,U=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,L=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,q=T.createTreeWalker(T,129);function G(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=D;for(let e=0;e<s;e++){const s=t[e];let a,c,l=-1,d=0;for(;d<s.length&&(r.lastIndex=d,c=r.exec(s),null!==c);)d=r.lastIndex,r===D?"!--"===c[1]?r=H:void 0!==c[1]?r=N:void 0!==c[2]?(I.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=U):void 0!==c[3]&&(r=U):r===U?">"===c[0]?(r=o??D,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?U:'"'===c[3]?L:R):r===L||r===R?r=U:r===H||r===N?r=D:(r=U,o=void 0);const h=r===U&&t[e+1].startsWith("/>")?" ":"";n+=r===D?s+P:l>=0?(i.push(a),s.slice(0,l)+C+s.slice(l)+k+h):s+k+(-2===l?e:h)}return[G(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[c,l]=J(t,e);if(this.el=K.createElement(c,s),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=q.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=l[n++],s=i.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?st:X}),i.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],j()),q.nextNode(),a.push({type:2,index:++o});i.append(t[e],j())}}}else if(8===i.nodeType)if(i.data===E)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function Z(t,e,s=t,i){if(e===F)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const n=z(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);q.currentNode=i;let o=q.nextNode(),n=0,r=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new it(o,this,t)),this._$AV.push(e),a=s[++r]}n!==a?.index&&(o=q.nextNode(),n++)}return q.currentNode=T,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),z(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new Y(this.O(j()),this.O(j()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=Z(this,t,e,0),n=!z(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const i=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Z(this,i[s+r],e,r),a===F&&(a=this._$AH[r]),n||=!z(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends X{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===F)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=y.litHtmlPolyfillSupport;ot?.(K,Y),(y.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new Y(e.insertBefore(j(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}rt._$litElement$=!0,rt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:rt});const at=nt.litElementPolyfillSupport;at?.({LitElement:rt}),(nt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:_},lt=(t=ct,e,s)=>{const{kind:i,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return dt({...t,state:!0,attribute:!1})}const pt=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)})`
  :host {
    display: block;
    --sf-accent: var(--primary-color, #7c4dff);
    --sf-on-accent: #ffffff;
    --sf-surface: var(--card-background-color, #1e1e24);
    --sf-surface-hover: color-mix(in srgb, var(--sf-surface) 90%, var(--sf-text, #ffffff));
    --sf-active-bg: color-mix(in srgb, var(--sf-accent) 15%, transparent);
    --sf-active-border: var(--sf-accent);
    --sf-border: var(--divider-color, rgba(255, 255, 255, 0.08));
    --sf-text: var(--primary-text-color, #ffffff);
    --sf-text-2: var(--secondary-text-color, #9e9e9e);
  }

  ha-card {
    background: var(--sf-surface);
    border: 1px solid var(--sf-border);
    border-radius: var(--ha-card-border-radius, 20px);
    padding: 16px;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.15));
    box-sizing: border-box;
    font-family: var(--paper-font-body1_-_font-family, inherit);
    color: var(--sf-text);
    overflow: hidden;
  }

  /* ── Card Header ── */
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .header-icon {
    --mdc-icon-size: 22px;
    color: var(--sf-accent);
  }
  .title-group {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.2;
  }
  .subtitle { font-size: 0.78rem; font-weight: 600; color: var(--sf-text-2); }

  .power-btn {
    width: 44px; height: 44px; border-radius: 50%;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .power-btn:hover { background: var(--sf-surface-hover); }
  .power-btn.disabled { opacity: 0.5; pointer-events: none; }
  .power-btn.on {
    background: var(--sf-active-bg);
    color: var(--sf-accent);
    border-color: var(--sf-active-border);
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
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  /* ── Classic Connection Footer ── */
  .classic-connection-section {
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px solid var(--sf-border);
  }
  .classic-connection-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--sf-text-2);
    margin-bottom: 6px;
  }
  .classic-telemetry-row {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 0.76rem;
    color: var(--sf-text-2);
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
    display: flex;
    align-items: center;
    justify-content: center;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .pill-btn:hover { background: var(--sf-surface-hover); }
  .pill-btn.disabled { opacity: 0.5; pointer-events: none; }
  .pill-btn ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }

  .pill-btn.active {
    background: var(--sf-active-bg);
    border-color: var(--sf-active-border);
    color: var(--sf-accent);
    font-weight: 700;
  }

  /* ──────────────────────────────────────────────────────────
     Google Home / Material Design 3 Full Layout
     ────────────────────────────────────────────────────────── */
  .gh-full-card {
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
    font-size: 4.5rem;
    font-weight: 400;
    color: var(--sf-text);
    line-height: 1.1;
  }
  .gh-subtitle-large {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--sf-text-2);
    margin-top: 4px;
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

  /* ── Material 3 Stepped Notch Slider ── */
  .step-slider-wrap {
    margin-top: 4px;
    border-radius: 16px;
    background: var(--sf-surface);
    border: 1px solid var(--sf-border);
    padding: 14px 16px 10px;
  }
  .step-slider-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
  }
  .step-slider-title {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--sf-text-2);
  }
  .step-slider-val {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--sf-accent);
  }
  .step-track-outer {
    position: relative;
    height: 4px;
    margin: 14px 6px 24px;
  }
  .step-track-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--sf-border);
    border-radius: 2px;
  }
  .step-track-fill {
    height: 100%;
    background: var(--sf-accent);
    border-radius: 2px;
    transition: width 0.25s ease;
  }
  .step-notches {
    position: absolute;
    top: -4px;
    left: 0;
    width: 100%;
    height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notch-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    width: 12px;
    height: 12px;
  }
  .step-notch {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    padding: 0;
    background: var(--sf-surface-hover);
    border: 2px solid var(--sf-border);
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none;
  }
  .step-notch:hover:not(:disabled) {
    transform: scale(1.3);
  }
  .step-notch.filled {
    background: var(--sf-accent);
    border-color: var(--sf-accent);
  }
  .step-notch.current {
    transform: scale(1.4);
    background: var(--sf-accent);
    border-color: var(--sf-surface);
    box-shadow: 0 0 0 1px var(--sf-accent);
  }
  .step-notch.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .notch-label {
    position: absolute;
    top: 18px;
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--sf-text-2);
    white-space: nowrap;
  }
  .notch-label.current {
    color: var(--sf-accent);
    font-weight: 700;
  }

  /* ── Custom Dropdown Selectors ── */
  .gh-select-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 4px;
  }
  .gh-select-wrapper {
    flex: 1 1 calc(50% - 8px);
    min-width: 120px;
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
    font-size: 0.9rem;
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

  /* ── Footer Telemetry & Status ── */
  .gh-footer-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 8px;
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

  /* ── Compact View ── */
  .compact-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    cursor: pointer;
  }
  .compact-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .compact-icon-btn {
    width: 36px; height: 36px; border-radius: 50%;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }
  .compact-icon-btn:hover { background: var(--sf-surface-hover); }
  .compact-icon-btn.disabled { opacity: 0.5; pointer-events: none; }
  .compact-icon-btn.on {
    background: var(--sf-accent);
    color: var(--sf-on-accent);
    border-color: var(--sf-accent);
  }
  .compact-title {
    font-size: 1rem;
    font-weight: 700;
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
  .compact-value {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--sf-text);
  }

  .compact-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px;
  }
  .compact-action-btn {
    width: 36px; height: 36px; border-radius: 50%;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.2s ease;
  }
  .compact-action-btn:hover { background: var(--sf-surface-hover); }
  .compact-action-btn:disabled, .compact-action-btn.disabled { opacity: 0.4; pointer-events: none; }
  .compact-subtitle {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--sf-text-2);
  }
`;window.customCards=window.customCards||[],window.customCards.push({type:"superfan-card",name:"Superfan Card",description:"A premium Lovelace fan card for the Superfan integration.",preview:!0});let ut=class extends rt{constructor(){super(...arguments),this._expanded=!1,this._ghDropdown=null}static get styles(){return pt}static getConfigForm(){return{schema:[{name:"entity",required:!0,label:"Fan Entity",selector:{entity:{domain:"fan",integration:"superfan_ir"}}},{name:"name",label:"Custom Title",selector:{text:{}}},{name:"theme",label:"Theme",selector:{select:{options:[{label:"Default HA Theme",value:"default"},{label:"Material You",value:"material_you"}]}}},{name:"layout",label:"Card Layout",selector:{select:{options:[{label:"Default (Full)",value:"default"},{label:"Compact (Expandable)",value:"compact"}]}}},{name:"full_layout",label:"Full View Style",selector:{select:{options:[{label:"Classic",value:"default"},{label:"Google Home",value:"google_home"}]}}},{name:"",type:"expandable",title:"Theming & Colors",icon:"mdi:palette",schema:[{name:"accent_color",label:"Accent Color",selector:{ui_color:{}}},{name:"main_color",label:"Background Color",selector:{ui_color:{}}}]},{name:"",type:"expandable",title:"Companion Entities (Auto-Discovered if blank)",icon:"mdi:link-variant",schema:[{name:"control_source_sensor",label:"Control Source Sensor",selector:{entity:{domain:"sensor",integration:"superfan_ir"}}},{name:"ir_blaster_sensor",label:"IR Blaster Sensor",selector:{entity:{domain:["binary_sensor","infrared","remote"]}}}]}]}}static getStubConfig(t,e,s){const i=e.find(t=>t.startsWith("fan."))||"";return{type:"custom:superfan-card",entity:i}}setConfig(t){if(!t||!t.entity)throw new Error("Please define a valid fan entity");this._config={...t}}updated(t){if(super.updated(t),t.has("_config")){const t=this._config?.theme||"default";this.getAttribute("theme")!==t&&this.setAttribute("theme",t)}}getCardSize(){return"compact"!==this._config?.layout||this._expanded?4:2}_haptic(t="light"){window.dispatchEvent(new CustomEvent("haptic",{detail:t}))}_showToast(t){window.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:t},bubbles:!0,composed:!0}))}_setSpeed(t){this._haptic("selection"),this.hass.callService("fan","set_percentage",{entity_id:this._config.entity,percentage:t})}_toggle(){if(!this.hass||!this._config)return;this._haptic("medium");const t=this.hass.states[this._config.entity];t&&("off"===t.state?this.hass.callService("fan","turn_on",{entity_id:this._config.entity}):this.hass.callService("fan","turn_off",{entity_id:this._config.entity}))}_setPreset(t){this._haptic("light"),this.hass.callService("fan","set_preset_mode",{entity_id:this._config.entity,preset_mode:t})}_formatPresetName(t){return t?t.replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase()):""}_getPresetIcon(t){const e=t.toLowerCase();return e.includes("breeze")?"mdi:weather-windy":e.includes("nature")?"mdi:nature":e.includes("smart")?"mdi:brain":e.includes("speed")?"mdi:swap-vertical":e.includes("eco")?"mdi:leaf":e.includes("wellness")?"mdi:heart-pulse":e.includes("ac")?"mdi:air-conditioner":e.includes("reverse")?"mdi:rotate-left":e.includes("sleep")?"mdi:bed-clock":e.includes("led")||e.includes("light")?"mdi:lightbulb-outline":e.includes("boost")?"mdi:rocket-launch-outline":e.includes("timer")||e.includes("hr")||e.includes("hour")?"mdi:timer-outline":"mdi:fan"}render(){if(!this._config||!this.hass)return null;const t=this.hass.states[this._config.entity];if(!t)return B`
        <ha-card style="padding: 20px; text-align: center;">
          <div style="font-size: 16px; font-weight: 700; color: var(--primary-text-color);">Superfan Card</div>
          <div style="font-size: 13px; color: var(--error-color, #e53935); margin-top: 6px;">
            Entity not found: <code>${this._config.entity}</code>
          </div>
        </ha-card>
      `;const e=this._config.name||t.attributes.friendly_name||"Superfan",s="unavailable"!==t.state&&"unknown"!==t.state,i="on"===t.state&&s,o=t.attributes.percentage||0,n=t.attributes.preset_mode,r=t.attributes.preset_modes||[],a=t.attributes.percentage_step||100,c=Math.round(100/a),l=this._config.entity.replace(/^fan\./,""),d=this._config.control_source_sensor?this.hass.states[this._config.control_source_sensor]:this.hass.states[`sensor.${l}_last_controlled_via`]||Object.values(this.hass.states).find(t=>t.entity_id.startsWith("sensor.")&&t.entity_id.includes(l)&&t.entity_id.includes("last_controlled_via")),h=this._config.ir_blaster_sensor?this.hass.states[this._config.ir_blaster_sensor]:this.hass.states[`binary_sensor.${l}_ir_blaster_available`]||Object.values(this.hass.states).find(t=>t.entity_id.startsWith("binary_sensor.")&&t.entity_id.includes(l)&&t.entity_id.includes("ir_blaster_available")),p=h?"on"===h.state:s,u=d?d.state:null,f=r.filter(t=>!t.toLowerCase().includes("timer")&&!t.toLowerCase().includes("hr")&&!t.toLowerCase().includes("hour")),g=r.filter(t=>t.toLowerCase().includes("timer")||t.toLowerCase().includes("hr")||t.toLowerCase().includes("hour"));let b="";if(this._config.accent_color)if(Array.isArray(this._config.accent_color))b=`rgb(${this._config.accent_color.join(",")})`;else if("string"==typeof this._config.accent_color){const t=this._config.accent_color.toLowerCase();b="primary"===t?"var(--primary-color)":"accent"===t?"var(--accent-color)":/^[a-z-]+$/.test(t)?`var(--${t}-color, ${t})`:t}let m="";if(this._config.main_color)if(Array.isArray(this._config.main_color))m=`rgb(${this._config.main_color.join(",")})`;else if("string"==typeof this._config.main_color){const t=this._config.main_color.toLowerCase();m="primary"===t?"var(--primary-color)":"accent"===t?"var(--accent-color)":/^[a-z-]+$/.test(t)?`var(--${t}-color, ${t})`:t}const v=`${b?`--sf-accent: ${b}; `:""}${m?`--sf-bg: ${m}; `:""}`;return"compact"!==this._config.layout||this._expanded?"google_home"===this._config.full_layout?this._renderGoogleHomeFull(t,e,i,s,o,n,c,f,g,v,d,h):B`
      <ha-card style="${v}">
        <div class="header">
          <div class="header-left">
            <div class="title-row">
              <div class="status-dot ${s&&i?"online":""}"></div>
              <div class="title">${e}</div>
            </div>
            <div class="subtitle">Fan: ${i?n||`${o}%`:s?"Off":"Offline"}</div>
          </div>
          <div style="display: flex; gap: 8px;">
            ${"compact"===this._config.layout?B`
              <button
                class="power-btn"
                style="background: transparent; border-color: transparent;"
                title="Collapse card"
                @click=${()=>this._expanded=!1}
              >
                <ha-icon icon="mdi:chevron-up"></ha-icon>
              </button>
            `:""}
            <button
              class="power-btn ${i?"on":""} ${s?"":"disabled"}"
              title="${s?"Toggle Power":"Device is offline"}"
              @click=${()=>{s?this._toggle():this._showToast("Device is offline")}}
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
                class="speed-btn ${i&&o>80&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Speed 5 (100%)":"Turn on the fan to adjust speed"}"
                @click=${()=>this._setSpeed(100)}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>5</span>
              </button>
              <button
                class="speed-btn ${i&&o>60&&o<=80&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Speed 4 (80%)":"Turn on the fan to adjust speed"}"
                @click=${()=>this._setSpeed(80)}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>4</span>
              </button>
              <button
                class="speed-btn ${i&&o>40&&o<=60&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Speed 3 (60%)":"Turn on the fan to adjust speed"}"
                @click=${()=>this._setSpeed(60)}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>3</span>
              </button>
              <button
                class="speed-btn ${i&&o>20&&o<=40&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Speed 2 (40%)":"Turn on the fan to adjust speed"}"
                @click=${()=>this._setSpeed(40)}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>2</span>
              </button>
              <button
                class="speed-btn ${i&&o>0&&o<=20&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Speed 1 (20%)":"Turn on the fan to adjust speed"}"
                @click=${()=>this._setSpeed(20)}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>1</span>
              </button>
            `:3===c?B`
              <button
                class="speed-btn ${i&&o>66&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"High Speed (100%)":"Turn on the fan to adjust speed"}"
                @click=${()=>this._setSpeed(100)}
              >
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button
                class="speed-btn ${i&&o>33&&o<=66&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Medium Speed (66%)":"Turn on the fan to adjust speed"}"
                @click=${()=>this._setSpeed(66)}
              >
                <ha-icon icon="mdi:fan-speed-2"></ha-icon>
                <span>Medium</span>
              </button>
              <button
                class="speed-btn ${i&&o>0&&o<=33&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Low Speed (33%)":"Turn on the fan to adjust speed"}"
                @click=${()=>this._setSpeed(33)}
              >
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            `:B`
              <button
                class="speed-btn ${i&&o>50&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"High Speed":"Turn on the fan to adjust speed"}"
                @click=${()=>this._setSpeed(100)}
              >
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button
                class="speed-btn ${i&&o>0&&o<=50&&!n?"active":""} ${i?"":"disabled"}"
                title="${i?"Low Speed":"Turn on the fan to adjust speed"}"
                @click=${()=>this._setSpeed(50)}
              >
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            `}
          </div>

          <!-- Right Column: Presets -->
          <div class="presets-container">
            ${f.length>0?B`
              <div class="section-label">Modes</div>
              <div class="pill-grid">
                ${f.map(t=>{const e=t.toLowerCase().includes("speed adjust"),s=Boolean(n&&"none"!==n&&!n.toLowerCase().includes("speed adjust"));return B`
                    <button
                      class="pill-btn ${n===t?"active":""} ${!i||e&&s?"disabled":""}"
                      title="${i?t:"Turn on the fan to select modes"}"
                      @click=${()=>{i?this._setPreset(t):this._showToast("Turn on the fan to select modes")}}
                    >
                      <ha-icon icon="${this._getPresetIcon(t)}"></ha-icon>
                      <span>${t}</span>
                    </button>
                  `})}
              </div>
            `:""}

            ${g.length>0?B`
              <div class="section-label" style="margin-top: 4px;">Timers</div>
              <div class="pill-grid">
                ${g.map(t=>B`
                  <button
                    class="pill-btn ${n===t?"active":""} ${i?"":"disabled"}"
                    title="${i?t:"Turn on the fan to activate timers"}"
                    @click=${()=>{i?this._setPreset(t):this._showToast("Turn on the fan to activate timers")}}
                  >
                    <ha-icon icon="mdi:timer-outline"></ha-icon>
                    <span>${t}</span>
                  </button>
                `)}
              </div>
            `:""}

            ${0===r.length?B`
              <div class="section-label">No Presets Available</div>
            `:""}
          </div>
        </div>

        <!-- Classic Connection Footer -->
        <div class="classic-connection-section">
          <div class="classic-connection-label">Connection</div>
          <div class="classic-telemetry-row">
            <div class="connection-status-pill">
              <div class="status-dot ${p?"online":""}"></div>
              <span>IR Blaster</span>
            </div>
            ${u?B`
              <div class="connection-status-pill">
                <ha-icon icon="${"IR Remote"===u?"mdi:remote":"Mains Switch"===u?"mdi:toggle-switch":"mdi:remote-desktop"}" style="--mdc-icon-size: 14px;"></ha-icon>
                <span>${u}</span>
              </div>
            `:""}
          </div>
        </div>
      </ha-card>
    `:this._renderCompact(t,e,i,s,o,n,c)}_renderGoogleHomeFull(t,e,s,i,o,n,r,a,c,l,d,h){const p=s?n?this._formatPresetName(n):`${o}%`:"Off";let u=[];if(3===r)u=[{label:"Low",pct:33},{label:"Med",pct:66},{label:"High",pct:100}];else if(5===r)u=[{label:"1",pct:20},{label:"2",pct:40},{label:"3",pct:60},{label:"4",pct:80},{label:"5",pct:100}];else if(6===r)u=[{label:"1",pct:17},{label:"2",pct:33},{label:"3",pct:50},{label:"4",pct:67},{label:"5",pct:83},{label:"6",pct:100}];else{const t=r>0?r:3,e=100/t;for(let s=1;s<=t;s++)u.push({label:`${s}`,pct:Math.round(s*e)})}const f=s?u.findIndex((t,e)=>Math.abs(t.pct-o)<=10||e===u.length-1&&o>=t.pct-10):-1,g=c.find(t=>n===t),b=n&&!g?n:null,m=a.filter(t=>t.toLowerCase().includes("reverse")||t.toLowerCase().includes("eco")||t.toLowerCase().includes("wellness")||t.toLowerCase().includes("adjust")||t.toLowerCase().includes("ac mix")),v=h?"on"===h.state:i,_=d?d.state:null;return B`
      <ha-card style="${l}" class="gh-full-card" @click=${()=>this._ghDropdown=null}>
        <!-- Header -->
        <div class="gh-header">
          <div class="gh-header-left">
            <ha-icon class="gh-icon" icon="mdi:fan"></ha-icon>
            <div class="gh-title">${e}</div>
          </div>
          <div style="display: flex; gap: 8px;">
            ${"compact"===this._config.layout?B`
                  <button
                    class="gh-power-btn"
                    title="Collapse card"
                    @click=${t=>{t.stopPropagation(),this._expanded=!1}}
                  >
                    <ha-icon icon="mdi:chevron-up"></ha-icon>
                  </button>
                `:""}
            <button
              class="gh-power-btn ${s?"on":""} ${i?"":"disabled"}"
              title="${i?"Toggle Power":"Device is offline"}"
              @click=${t=>{t.stopPropagation(),i?this._toggle():this._showToast("Device is offline")}}
            >
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        <!-- Hero Value -->
        <div class="gh-center">
          <div class="gh-value-large">${p}</div>
          <div class="gh-subtitle-large">Fan Speed</div>
        </div>

        <!-- Google Home Dual Stepper Action Row -->
        <div class="gh-action-row">
          <button
            class="gh-circular-btn ${s?"":"disabled"}"
            title="${s?f<=0?"Turn fan off":"Decrease speed":"Turn on the fan to decrease speed"}"
            ?disabled="${!s}"
            @click=${t=>{t.stopPropagation(),s&&(f<=0?this._toggle():this._setSpeed(u[f-1].pct))}}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </button>
          <button
            class="gh-circular-btn ${s&&f===u.length-1?"disabled":""}"
            title="${s?f>=u.length-1?"Maximum speed reached":"Increase speed":"Turn on fan at low speed"}"
            ?disabled="${s&&f===u.length-1}"
            @click=${t=>{t.stopPropagation(),s?f<u.length-1&&this._setSpeed(u[f+1].pct):this._setSpeed(u[0].pct)}}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>

        <!-- Material 3 Stepped Notch Slider -->
        <div class="step-slider-wrap">
          <div class="step-slider-header">
            <span class="step-slider-title">Speed Step</span>
            <span class="step-slider-val">
              ${s&&f>=0?u[f].label:s?`${o}%`:"Off"}
            </span>
          </div>
          <div class="step-track-outer">
            <div class="step-track-bg">
              <div
                class="step-track-fill"
                style="width: ${s&&f>=0?f/(u.length-1)*100:0}%"
              ></div>
            </div>
            <div class="step-notches">
              ${u.map((t,e)=>{const o=s&&e===f;return B`
                  <div class="notch-wrapper">
                    <button
                      class="step-notch ${s&&e<=f?"filled":""} ${o?"current":""} ${i?"":"disabled"}"
                      title="${i?s?`Set Speed ${t.label}`:`Turn on and set to Speed ${t.label}`:"Device is offline"}"
                      @click=${e=>{e.stopPropagation(),i?this._setSpeed(t.pct):this._showToast("Device is offline")}}
                    ></button>
                    <span class="notch-label ${o?"current":""}">${t.label}</span>
                  </div>
                `})}
            </div>
          </div>
        </div>

        <!-- Dropdowns Container -->
        ${a.length>0||c.length>0?B`
          <div class="gh-select-container">
            <!-- Preset Dropdown -->
            ${a.length>0?B`
              <div class="gh-select-wrapper ${"preset"===this._ghDropdown?"active":""}">
                <button
                  class="gh-custom-select ${s?"":"disabled"}"
                  title="${s?"Select Preset Mode":"Turn on the fan to select presets"}"
                  @click=${t=>{t.stopPropagation(),s?(this._haptic("selection"),this._ghDropdown="preset"===this._ghDropdown?null:"preset"):this._showToast("Turn on the fan to select presets")}}
                >
                  <span>Preset: ${b?this._formatPresetName(b):"None"}</span>
                  <ha-icon icon="mdi:chevron-down"></ha-icon>
                </button>
                ${"preset"===this._ghDropdown?B`
                  <div class="gh-dropdown-menu">
                    <button
                      class="gh-dropdown-item ${b?"":"active"}"
                      @click=${t=>{t.stopPropagation(),this._ghDropdown=null,this._setSpeed(o||u[0].pct)}}
                    >
                      None
                    </button>
                    ${a.map(t=>B`
                      <button
                        class="gh-dropdown-item ${n===t?"active":""}"
                        @click=${e=>{e.stopPropagation(),this._ghDropdown=null,this._setPreset(t)}}
                      >
                        ${this._formatPresetName(t)}
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
                  title="${s?"Select Timer":"Turn on the fan to set timers"}"
                  @click=${t=>{t.stopPropagation(),s?(this._haptic("selection"),this._ghDropdown="timer"===this._ghDropdown?null:"timer"):this._showToast("Turn on the fan to set timers")}}
                >
                  <span>Timer: ${g?this._formatPresetName(g):"None"}</span>
                  <ha-icon icon="mdi:chevron-down"></ha-icon>
                </button>
                ${"timer"===this._ghDropdown?B`
                  <div class="gh-dropdown-menu">
                    <button
                      class="gh-dropdown-item ${g?"":"active"}"
                      @click=${t=>{t.stopPropagation(),this._ghDropdown=null,this._setSpeed(o||u[0].pct)}}
                    >
                      None (Off)
                    </button>
                    ${c.map(t=>B`
                      <button
                        class="gh-dropdown-item ${n===t?"active":""}"
                        @click=${e=>{e.stopPropagation(),this._ghDropdown=null,this._setPreset(t)}}
                      >
                        ${this._formatPresetName(t)}
                      </button>
                    `)}
                  </div>
                `:""}
              </div>
            `:""}
          </div>
        `:""}

        <!-- Quick-Action Chips -->
        ${m.length>0?B`
          <div class="gh-extra-chips">
            ${m.map(t=>B`
              <button
                class="gh-chip ${n===t?"active":""} ${s?"":"disabled"}"
                title="${s?t:"Turn on the fan to activate"}"
                @click=${e=>{e.stopPropagation(),s?this._setPreset(t):this._showToast("Turn on the fan to activate")}}
              >
                <ha-icon icon="${this._getPresetIcon(t)}"></ha-icon>
                <span>${this._formatPresetName(t)}</span>
              </button>
            `)}
          </div>
        `:""}

        <!-- Footer Telemetry Status Row -->
        <div class="gh-footer-text">
          <div class="connection-status-pill">
            <div class="status-dot ${v?"online":""}"></div>
            <span>IR Blaster</span>
          </div>
          ${_?B`
            <div class="connection-status-pill">
              <ha-icon icon="mdi:remote" style="--mdc-icon-size: 14px;"></ha-icon>
              <span>${_}</span>
            </div>
          `:""}
        </div>
      </ha-card>
    `}_renderCompact(t,e,s,i,o,n,r){const a=s?n||`${o}%`:i?"Off":"Offline";return B`
      <ha-card
        class="compact-card"
        title="Click to expand Superfan controls"
        @click=${()=>{this._haptic("selection"),this._expanded=!0}}
      >
        <div class="compact-header">
          <button
            class="compact-icon-btn ${s?"on":""} ${i?"":"disabled"}"
            title="${i?"Toggle Power":"Device is offline"}"
            @click=${t=>{t.stopPropagation(),i?this._toggle():this._showToast("Device is offline")}}
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="compact-title">${e}</div>
          <ha-icon class="compact-chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="compact-center">
          <div
            class="compact-value"
            style="${a.length>4?"font-size: 1.8rem;":""}"
          >
            ${a}
          </div>
        </div>

        <div class="compact-footer">
          <button
            class="compact-action-btn ${s?"":"disabled"}"
            title="${s?"Decrease Speed":"Turn on the fan to adjust speed"}"
            @click=${t=>{t.stopPropagation(),s?this._cycleSpeed(o,r,-1):this._showToast("Turn on the fan to adjust speed")}}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </button>
          <div class="compact-subtitle">Speed</div>
          <button
            class="compact-action-btn ${s?"":"disabled"}"
            title="${s?"Increase Speed":"Turn on the fan to adjust speed"}"
            @click=${t=>{t.stopPropagation(),s?this._cycleSpeed(o,r,1):this._showToast("Turn on the fan to adjust speed")}}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>
      </ha-card>
    `}_cycleSpeed(t,e,s){if(this._haptic("light"),3===e){const e=[0,33,66,100];let i=e.findIndex(e=>Math.abs(e-t)<=2);-1===i&&(i=0);let o=i+s;return o>3&&(o=3),o<0&&(o=0),void this._setSpeed(e[o])}if(5===e){const e=[0,20,40,60,80,100];let i=e.findIndex(e=>Math.abs(e-t)<=2);-1===i&&(i=0);let o=i+s;return o>5&&(o=5),o<0&&(o=0),void this._setSpeed(e[o])}if(6===e){const e=[0,17,33,50,67,83,100];let i=e.findIndex(e=>Math.abs(e-t)<=2);-1===i&&(i=0);let o=i+s;return o>6&&(o=6),o<0&&(o=0),void this._setSpeed(e[o])}let i=t+100/e*s;i>100&&(i=100),i<0&&(i=0),this._setSpeed(Math.round(i))}};t([dt({attribute:!1})],ut.prototype,"hass",void 0),t([ht()],ut.prototype,"_config",void 0),t([ht()],ut.prototype,"_expanded",void 0),t([ht()],ut.prototype,"_ghDropdown",void 0),ut=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("superfan-card")],ut);export{ut as SuperfanCard};
