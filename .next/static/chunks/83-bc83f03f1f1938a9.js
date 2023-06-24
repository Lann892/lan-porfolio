"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83],{4444:function(e,t,r){r.d(t,{BH:function(){return w},DV:function(){return H},Dv:function(){return J},G6:function(){return O},GJ:function(){return M},L:function(){return d},LL:function(){return N},Sg:function(){return E},UG:function(){return C},UI:function(){return z},US:function(){return l},Wj:function(){return Y},Wl:function(){return U},Yr:function(){return R},ZB:function(){return p},ZR:function(){return x},aH:function(){return y},b$:function(){return I},cI:function(){return L},dS:function(){return ee},eu:function(){return k},g5:function(){return o},gK:function(){return Q},gQ:function(){return q},h$:function(){return c},hl:function(){return D},hu:function(){return s},jU:function(){return A},lb:function(){return Z},m9:function(){return er},ne:function(){return G},p$:function(){return g},r3:function(){return F},uI:function(){return S},ug:function(){return et},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let n=t[s],o=r[s];if(V(n)&&V(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}},w9:function(){return B},xO:function(){return $},xb:function(){return W},z$:function(){return T}});var n=r(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(e,t){if(!e)throw o(t)},o=function(e){return Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},a=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):(64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},h=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[r++],o=e[r++],a=e[r++],h=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(1023&h))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,h=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4,c=(15&o)<<2|h>>6,d=63&h;a||(d=64,s||(c=64)),n.push(r[l],r[u],r[c],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):h(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length,o=s?r[e.charAt(t)]:0;++t;let a=t<e.length,h=a?r[e.charAt(t)]:64;++t;let l=t<e.length,c=l?r[e.charAt(t)]:64;if(++t,null==i||null==o||null==h||null==c)throw new u;let d=i<<2|o>>4;if(n.push(d),64!==h){let e=o<<4&240|h>>2;if(n.push(e),64!==c){let e=h<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let c=function(e){let t=a(e);return l.encodeByteArray(t,!0)},d=function(e){return c(e).replace(/\./g,"")},f=function(e){try{return l.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(let r in t)t.hasOwnProperty(r)&&"__proto__"!==r&&(e[r]=p(e[r],t[r]));return e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,m=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},v=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&f(e[1]);return t&&JSON.parse(t)},b=()=>{try{return _()||m()||v()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},y=()=>{var e;return null===(e=b())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[d(JSON.stringify({alg:"none",type:"JWT"})),d(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function S(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(T())}function C(){var e;let t=null===(e=b())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(r.g.process)}catch(e){return!1}}function A(){return"object"==typeof self&&self.self===self}function I(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function R(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function O(){return!C()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function D(){try{return"object"==typeof indexedDB}catch(e){return!1}}function k(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class x extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(P,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`,a=new x(n,o,r);return a}}let P=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return JSON.parse(e)}function U(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let j=function(e){let t={},r={},n={},i="";try{let s=e.split(".");t=L(f(s[0])||""),r=L(f(s[1])||""),i=s[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:i}},B=function(e){let t=j(e),r=t.claims;return!!r&&"object"==typeof r&&r.hasOwnProperty("iat")},M=function(e){let t=j(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function H(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function W(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function z(e,t,r){let n={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=t.call(r,e[i],i,e));return n}function V(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let r,n;t||(t=0);let i=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)i[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)i[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=i[e-3]^i[e-8]^i[e-14]^i[e-16];i[e]=(t<<1|t>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],h=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=h^o&(a^h),n=1518500249):(r=o^a^h,n=1859775393):e<60?(r=o&a|h&(o|a),n=2400959708):(r=o^a^h,n=3395469782);let t=(s<<5|s>>>27)+r+l+n+i[e]&4294967295;l=h,h=a,a=(o<<30|o>>>2)&4294967295,o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let r=t-this.blockSize,n=0,i=this.buf_,s=this.inbuf_;for(;n<t;){if(0===s)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(i[s]=e.charCodeAt(n),++s,++n,s===this.blockSize){this.compress_(i),s=0;break}}else for(;n<t;)if(i[s]=e[n],++s,++n,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let r=0;for(let t=0;t<5;t++)for(let n=24;n>=0;n-=8)e[r]=this.chain_[t]>>n&255,++r;return e}}function G(e,t){let r=new X(e,t);return r.subscribe.bind(r)}class X{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=K),void 0===n.error&&(n.error=K),void 0===n.complete&&(n.complete=K);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J=function(e,t,r,n){let i;if(n<t?i="at least "+t:n>r&&(i=0===r?"none":"no more than "+r),i){let t=e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+i+".";throw Error(t)}};function Q(e,t){return`${e} failed: ${t} argument `}function Y(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw Error(Q(e,t)+"must be a valid function.")}function Z(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw Error(Q(e,t)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ee=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i>=55296&&i<=56319){let t=i-55296;s(++n<e.length,"Surrogate pair missing trail surrogate.");let r=e.charCodeAt(n)-56320;i=65536+(t<<10)+r}i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):i<65536?(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},et=function(e){let t=0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){return e&&e._delegate?e._delegate:e}},1708:function(e,t,r){r.d(t,{r:function(){return o}});var n=r(5059),i=r(4232),s=r(5893),o=(0,n.G)(function(e,t){let{templateAreas:r,gap:n,rowGap:o,columnGap:a,column:h,row:l,autoFlow:u,autoRows:c,templateRows:d,autoColumns:f,templateColumns:g,...p}=e;return(0,s.jsx)(i.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:r,gridGap:n,gridRowGap:o,gridColumnGap:a,gridAutoColumns:f,gridColumn:h,gridRow:l,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:d,gridTemplateColumns:g},...p})});o.displayName="Grid"},9849:function(e,t,r){r.d(t,{M:function(){return l}});var n=r(1708),i=r(5059),s=r(5119),o=r(4629),a=r(3951),h=r(5893),l=(0,i.G)(function(e,t){let{columns:r,spacingX:i,spacingY:l,spacing:u,minChildWidth:c,...d}=e,f=(0,s.F)(),g=c?(0,a.XQ)(c,e=>{let t=(0,o.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(f);return null===e?null:`repeat(auto-fit, minmax(${t}, 1fr))`}):(0,a.XQ)(r,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return(0,h.jsx)(n.r,{ref:t,gap:u,columnGap:i,rowGap:l,templateColumns:g,...d})});l.displayName="SimpleGrid"},8180:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(4444),i=r(740),s=r(5816),o=r(3333);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate)))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var r;this._delegate.checkDestroyed();let n=this._delegate.container.getProvider(e);return n.isInitialized()||(null===(r=n.getComponent())||void 0===r?void 0:r.instantiationMode)!=="EXPLICIT"||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}let h=new n.LL("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),l=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t={},r={__esModule:!0,initializeApp:function(i,o={}){let a=s.initializeApp(i,o);if((0,n.r3)(t,a.name))return t[a.name];let h=new e(a,r);return t[a.name]=h,h},app:i,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:function(t){let o=t.name,a=o.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){let s=(e=i())=>{if("function"!=typeof e[a])throw h.create("invalid-app-argument",{appName:o});return e[a]()};void 0!==t.serviceProps&&(0,n.ZB)(s,t.serviceProps),r[a]=s,e.prototype[a]=function(...e){let r=this._getService.bind(this,o);return r.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?r[a]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:s}};function i(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,n.r3)(t,e))throw h.create("no-app",{appName:e});return t[e]}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),i.App=e,r}(a);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,n.ZB)(t,e)},createSubscribe:n.ne,ErrorFactory:n.LL,deepExtend:n.ZB}),t}(),u=new o.Yd("@firebase/app-compat");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,n.jU)()&&void 0!==self.firebase){u.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);let e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&u.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}let c=l;(0,s.registerVersion)("@firebase/app-compat","0.2.12",void 0)},5816:function(e,t,r){let n,i;r.r(t),r.d(t,{FirebaseError:function(){return h.ZR},SDK_VERSION:function(){return B},_DEFAULT_ENTRY_NAME:function(){return A},_addComponent:function(){return D},_addOrOverwriteComponent:function(){return k},_apps:function(){return R},_clearComponents:function(){return L},_components:function(){return O},_getProvider:function(){return N},_registerComponent:function(){return x},_removeServiceInstance:function(){return P},deleteApp:function(){return W},getApp:function(){return F},getApps:function(){return H},initializeApp:function(){return M},onLog:function(){return V},registerVersion:function(){return z},setLogLevel:function(){return $}});var s,o=r(740),a=r(3333),h=r(4444);let l=(e,t)=>t.some(t=>e instanceof t),u=new WeakMap,c=new WeakMap,d=new WeakMap,f=new WeakMap,g=new WeakMap,p={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return _(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function _(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(_(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&u.set(t,e)}).catch(()=>{}),g.set(t,e),t}(e);if(f.has(e))return f.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(m(this),e),_(u.get(this))}:function(...e){return _(t.apply(m(this),e))}:function(e,...r){let n=t.call(m(this),e,...r);return d.set(n,e.sort?e.sort():[e]),_(n)}:(t instanceof IDBTransaction&&function(e){if(c.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});c.set(e,t)}(t),l(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,p):t;return r!==e&&(f.set(e,r),g.set(r,e)),r}let m=e=>g.get(e),v=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],y=new Map;function w(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(y.get(t))return y.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=b.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return y.set(t,s),s}p={...s=p,get:(e,t,r)=>w(e,t)||s.get(e,t,r),has:(e,t)=>!!w(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let T="@firebase/app",S="0.9.12",C=new a.Yd("@firebase/app"),A="[DEFAULT]",I={[T]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},R=new Map,O=new Map;function D(e,t){try{e.container.addComponent(t)}catch(r){C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function k(e,t){e.container.addOrOverwriteComponent(t)}function x(e){let t=e.name;if(O.has(t))return C.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(O.set(t,e),R.values()))D(r,e);return!0}function N(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function P(e,t,r=A){N(e,t).clearInstance(r)}function L(){O.clear()}let U=new h.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw U.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let B="9.22.2";function M(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:A,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw U.create("bad-app-name",{appName:String(i)});if(r||(r=(0,h.aH)()),!r)throw U.create("no-options");let s=R.get(i);if(s){if((0,h.vZ)(r,s.options)&&(0,h.vZ)(n,s.config))return s;throw U.create("duplicate-app",{appName:i})}let a=new o.H0(i);for(let e of O.values())a.addComponent(e);let l=new j(r,n,a);return R.set(i,l),l}function F(e=A){let t=R.get(e);if(!t&&e===A&&(0,h.aH)())return M();if(!t)throw U.create("no-app",{appName:e});return t}function H(){return Array.from(R.values())}async function W(e){let t=e.name;R.has(t)&&(R.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function z(e,t,r){var n;let i=null!==(n=I[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),C.warn(e.join(" "));return}x(new o.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function V(e,t){if(null!==e&&"function"!=typeof e)throw U.create("invalid-log-argument");(0,a.Am)(e,t)}function $(e){(0,a.Ub)(e)}let q="firebase-heartbeat-store",G=null;function X(){return G||(G=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=_(o);return n&&o.addEventListener("upgradeneeded",e=>{n(_(o.result),e.oldVersion,e.newVersion,_(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(q)}}).catch(e=>{throw U.create("idb-open",{originalErrorMessage:e.message})})),G}async function K(e){try{let t=await X(),r=await t.transaction(q).objectStore(q).get(Q(e));return r}catch(e){if(e instanceof h.ZR)C.warn(e.message);else{let t=U.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});C.warn(t.message)}}}async function J(e,t){try{let r=await X(),n=r.transaction(q,"readwrite"),i=n.objectStore(q);await i.put(t,Q(e)),await n.done}catch(e){if(e instanceof h.ZR)C.warn(e.message);else{let t=U.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});C.warn(t.message)}}}function Q(e){return`${e.name}!${e.options.appId}`}class Y{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ee(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=Z();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=Z(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),et(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),et(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,h.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Z(){let e=new Date;return e.toISOString().substring(0,10)}class ee{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,h.hl)()&&(0,h.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await K(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return J(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return J(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function et(e){return(0,h.L)(JSON.stringify({version:2,heartbeats:e})).length}x(new o.wA("platform-logger",e=>new E(e),"PRIVATE")),x(new o.wA("heartbeat",e=>new Y(e),"PRIVATE")),z(T,S,""),z(T,S,"esm2017"),z("fire-js","")},740:function(e,t,r){r.d(t,{H0:function(){return a},wA:function(){return i},zt:function(){return o}});var n=r(4444);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,r){var n,i;r.d(t,{Am:function(){return d},Ub:function(){return c},Yd:function(){return u},in:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,h={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},l=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=h[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}function c(e){s.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(let r of s){let i=null;t&&t.level&&(i=o[t.level]),null===e?r.userLogHandler=null:r.userLogHandler=(t,r,...s)=>{let o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");r>=(null!=i?i:t.logLevel)&&e({level:n[r].toLowerCase(),message:o,args:s,type:t.name})}}}},6640:function(e,t,r){r.d(t,{FJ:function(){return rU},JJ:function(){return rz},UE:function(){return rL},V8:function(){return rV},ii:function(){return rW},jK:function(){return rj},ju:function(){return rM},kN:function(){return rF},tw:function(){return rB},z8:function(){return r$},zI:function(){return rH}});var n,i,s,o,a,h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l={},u=u||{},c=h||self;function d(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function f(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e,t,r){return e.call.apply(e.bind,arguments)}function p(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function _(e,t,r){return(_=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:p).apply(null,arguments)}function m(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function r(){}r.prototype=t.prototype,e.$=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.ac=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function b(){this.s=this.s,this.o=this.o}b.prototype.s=!1,b.prototype.sa=function(){this.s||(this.s=!0,this.N())},b.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let y=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let r=0;r<e.length;r++)if(r in e&&e[r]===t)return r;return -1};function w(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function E(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(d(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function T(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{c.addEventListener("test",()=>{},t),c.removeEventListener("test",()=>{},t)}catch(e){}return e}();function C(e){return/^[\s\xa0]*$/.test(e)}function A(){var e=c.navigator;return e&&(e=e.userAgent)?e:""}function I(e){return -1!=A().indexOf(e)}function R(e){return R[" "](e),e}R[" "]=function(){};var O=I("Opera"),D=I("Trident")||I("MSIE"),k=I("Edge"),x=k||D,N=I("Gecko")&&!(-1!=A().toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),P=-1!=A().toLowerCase().indexOf("webkit")&&!I("Edge");function L(){var e=c.document;return e?e.documentMode:void 0}e:{var U,j="",B=(U=A(),N?/rv:([^\);]+)(\)|;)/.exec(U):k?/Edge\/([\d\.]+)/.exec(U):D?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(U):P?/WebKit\/(\S+)/.exec(U):O?/(?:Version)[ \/]?(\S+)/.exec(U):void 0);if(B&&(j=B?B[1]:""),D){var M=L();if(null!=M&&M>parseFloat(j)){i=String(M);break e}}i=j}var F=c.document&&D&&(L()||parseInt(i,10))||void 0;function H(e,t){if(T.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(N){e:{try{R(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:W[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&H.$.h.call(this)}}v(H,T);var W={2:"touch",3:"pen",4:"mouse"};H.prototype.h=function(){H.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),V=0;function $(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.la=i,this.key=++V,this.fa=this.ia=!1}function q(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function G(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function X(e){let t={};for(let r in e)t[r]=e[r];return t}let K="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function J(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<K.length;t++)r=K[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function Q(e){this.src=e,this.g={},this.h=0}function Y(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=y(i,t);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(q(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function Z(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!r==s.capture&&s.la==n)return i}return -1}Q.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Z(e,t,n,i);return -1<o?(t=e[o],r||(t.ia=!1)):((t=new $(t,this.src,s,!!n,i)).ia=r,e.push(t)),t};var ee="closure_lm_"+(1e6*Math.random()|0),et={};function er(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var o=f(i)?!!i.capture:!!i,a=eo(e);if(a||(e[ee]=a=new Q(e)),(r=a.add(t,r,n,o,s)).proxy)return r;if(n=function e(t){return es.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)S||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(ei(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function en(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[z])Y(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(ei(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=eo(t))?(Y(r,e),0==r.h&&(r.src=null,t[ee]=null)):q(e)}}}function ei(e){return e in et?et[e]:et[e]="on"+e}function es(e,t){if(e.fa)e=!0;else{t=new H(t,this);var r=e.listener,n=e.la||e.src;e.ia&&en(e),e=r.call(n,t)}return e}function eo(e){return(e=e[ee])instanceof Q?e:null}var ea="__closure_events_fn_"+(1e9*Math.random()>>>0);function eh(e){return"function"==typeof e?e:(e[ea]||(e[ea]=function(t){return e.handleEvent(t)}),e[ea])}function el(){b.call(this),this.i=new Q(this),this.S=this,this.J=null}function eu(e,t){var r,n=e.J;if(n)for(r=[];n;n=n.J)r.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new T(t,e);else if(t instanceof T)t.target=t.target||e;else{var i=t;J(t=new T(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=t.g=r[s];i=ec(o,n,!0,t)&&i}if(i=ec(o=t.g=e,n,!0,t)&&i,i=ec(o,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=ec(o=t.g=r[s],n,!1,t)&&i}function ec(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==r){var a=o.listener,h=o.la||o.src;o.ia&&Y(e.i,o),i=!1!==a.call(h,n)&&i}}return i&&!n.defaultPrevented}v(el,b),el.prototype[z]=!0,el.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);else(i=f(i)?!!i.capture:!!i,n=eh(n),t&&t[z])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=Z(o=t.g[r],n,i,s))&&(q(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[r],t.h--))):t&&(t=eo(t))&&(r=t.g[r.toString()],t=-1,r&&(t=Z(r,n,i,s)),(n=-1<t?r[t]:null)&&en(n))}(this,e,t,r,n)},el.prototype.N=function(){if(el.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)q(r[n]);delete t.g[e],t.h--}}this.J=null},el.prototype.O=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},el.prototype.P=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};var ed=c.JSON.stringify,ef=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new eg,e=>e.reset());class eg{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let ep,e_=!1,em=new class{constructor(){this.h=this.g=null}add(e,t){let r=ef.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},ev=()=>{let e=c.Promise.resolve(void 0);ep=()=>{e.then(eb)}};var eb=()=>{let e;for(var t;e=null,em.g&&(e=em.g,em.g=em.g.next,em.g||(em.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){c.setTimeout(()=>{throw e},0)}(e)}ef.j(t),100>ef.h&&(ef.h++,t.next=ef.g,ef.g=t)}e_=!1};function ey(e,t){el.call(this),this.h=e||1,this.g=t||c,this.j=_(this.qb,this),this.l=Date.now()}function ew(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function eE(e,t,r){if("function"==typeof e)r&&(e=_(e,r));else if(e&&"function"==typeof e.handleEvent)e=_(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:c.setTimeout(e,t||0)}v(ey,el),(a=ey.prototype).ga=!1,a.T=null,a.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),eu(this,"tick"),this.ga&&(ew(this),this.start()))}},a.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},a.N=function(){ey.$.N.call(this),ew(this),delete this.g};class eT extends b{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eE(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eS(e){b.call(this),this.h=e,this.g={}}v(eS,b);var eC=[];function eA(e,t,r,n){Array.isArray(r)||(r&&(eC[0]=r.toString()),r=eC);for(var i=0;i<r.length;i++){var s=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=eh(n),t&&t[z]?t.P(r,n,f(i)?!!i.capture:!!i,s):er(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=eh(n),t&&t[z]?t.O(r,n,f(i)?!!i.capture:!!i,s):er(t,r,n,!1,i,s)}(t,r[i],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eI(e){G(e.g,function(e,t){this.g.hasOwnProperty(t)&&en(e)},e),e.g={}}function eR(){this.g=!0}function eO(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return ed(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eS.prototype.N=function(){eS.$.N.call(this),eI(this)},eS.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eR.prototype.Ea=function(){this.g=!1},eR.prototype.info=function(){};var eD={},ek=null;function ex(){return ek=ek||new el}function eN(e){T.call(this,eD.Ta,e)}function eP(e){let t=ex();eu(t,new eN(t))}function eL(e,t){T.call(this,eD.STAT_EVENT,e),this.stat=t}function eU(e){let t=ex();eu(t,new eL(t,e))}function ej(e,t){T.call(this,eD.Ua,e),this.size=t}function eB(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){e()},t)}eD.Ta="serverreachability",v(eN,T),eD.STAT_EVENT="statevent",v(eL,T),eD.Ua="timingevent",v(ej,T);var eM={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eF={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eH(){}function eW(e){return e.h||(e.h=e.i())}function ez(){}eH.prototype.h=null;var eV={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function e$(){T.call(this,"d")}function eq(){T.call(this,"c")}function eG(){}function eX(e,t,r,n){this.l=e,this.j=t,this.m=r,this.W=n||1,this.U=new eS(this),this.P=eJ,e=x?125:void 0,this.V=new ey(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new eK}function eK(){this.i=null,this.g="",this.h=!1}v(e$,T),v(eq,T),v(eG,eH),eG.prototype.g=function(){return new XMLHttpRequest},eG.prototype.i=function(){return{}},o=new eG;var eJ=45e3,eQ={},eY={};function eZ(e,t,r){e.L=1,e.v=ta(tr(t)),e.s=r,e.S=!0,e0(e,null)}function e0(e,t){e.G=Date.now(),e9(e),e.A=tr(e.v);var r=e.A,n=e.W;Array.isArray(n)||(n=[String(n)]),ty(r.i,"t",n),e.C=0,r=e.l.J,e.h=new eK,e.g=rl(e.l,r?t:null,!e.s),0<e.O&&(e.M=new eT(_(e.Pa,e,e.g),e.O)),eA(e.U,e.g,"readystatechange",e.nb),t=e.I?X(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),eP(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var l=a[h].split("=");if(1<l.length){var u=l[0];l=l[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+o})}(e.j,e.u,e.A,e.m,e.W,e.s)}function e2(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.l.Ha}function e1(e,t,r){let n=!0,i;for(;!e.J&&e.C<r.length;)if((i=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?eY:isNaN(r=Number(t.substring(r,n)))?eQ:(n+=1)+r>t.length?eY:(t=t.slice(n,n+r),e.C=n+r,t)}(e,r))==eY){4==t&&(e.o=4,eU(14),n=!1),eO(e.j,e.m,null,"[Incomplete Response]");break}else if(i==eQ){e.o=4,eU(15),eO(e.j,e.m,r,"[Invalid Chunk]"),n=!1;break}else eO(e.j,e.m,i,null),e7(e,i);e2(e)&&i!=eY&&i!=eQ&&(e.h.g="",e.C=0),4!=t||0!=r.length||e.h.h||(e.o=1,eU(16),n=!1),e.i=e.i&&n,n?0<r.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+r.length),rt(t),t.M=!0,eU(11))):(eO(e.j,e.m,r,"[Invalid Chunked Response]"),e3(e),e5(e))}function e9(e){e.Y=Date.now()+e.P,e4(e,e.P)}function e4(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eB(_(e.lb,e),t)}function e6(e){e.B&&(c.clearTimeout(e.B),e.B=null)}function e5(e){0==e.l.H||e.J||ri(e.l,e)}function e3(e){e6(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,ew(e.V),eI(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function e7(e,t){try{var r=e.l;if(0!=r.H&&(r.g==e||tI(r.i,e))){if(!e.K&&tI(r.i,e)&&3==r.H){try{var n=r.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.G+3e3<e.G)rn(r),t9(r);else break e}re(r),eU(18)}}else r.Fa=i[1],0<r.Fa-r.V&&37500>i[2]&&r.G&&0==r.A&&!r.v&&(r.v=eB(_(r.ib,r),6e3));if(1>=tA(r.i)&&r.oa){try{r.oa()}catch(e){}r.oa=void 0}}else ro(r,11)}else if((e.K||r.g==e)&&rn(r),!C(t))for(i=r.Ja.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(r.V=a[0],a=a[1],2==r.H){if("c"==a[0]){r.K=a[1],r.pa=a[2];let t=a[3];null!=t&&(r.ra=t,r.l.info("VER="+r.ra));let i=a[4];null!=i&&(r.Ga=i,r.l.info("SVER="+r.Ga));let h=a[5];null!=h&&"number"==typeof h&&0<h&&(n=1.5*h,r.L=n,r.l.info("backChannelRequestTimeoutMs_="+n)),n=r;let l=e.g;if(l){let e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tR(s,s.h),s.h=null))}if(n.F){let e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,to(n.I,n.F,e))}}if(r.H=3,r.h&&r.h.Ba(),r.ca&&(r.S=Date.now()-e.G,r.l.info("Handshake RTT: "+r.S+"ms")),(n=r).wa=rh(n,n.J?n.pa:null,n.Y),e.K){tO(n.i,e);var o=n.L;o&&e.setTimeout(o),e.B&&(e6(e),e9(e)),n.g=e}else t8(n);0<r.j.length&&t6(r)}else"stop"!=a[0]&&"close"!=a[0]||ro(r,7)}else 3==r.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?ro(r,7):t1(r):"noop"!=a[0]&&r.h&&r.h.Aa(a),r.A=0)}}eP(4)}catch(e){}}function e8(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(d(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(d(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}(a=eX.prototype).setTimeout=function(e){this.P=e},a.nb=function(e){e=e.target;let t=this.M;t&&3==tJ(e)?t.l():this.Pa(e)},a.Pa=function(e){try{if(e==this.g)e:{let u=tJ(this.g);var t=this.g.Ia();let d=this.g.da();if(!(3>u)&&(3!=u||x||this.g&&(this.h.h||this.g.ja()||tQ(this.g)))){this.J||4!=u||7==t||(8==t||0>=d?eP(3):eP(2)),e6(this);var r=this.g.da();this.ca=r;t:if(e2(this)){var n=tQ(this.g);e="";var i=n.length,s=4==tJ(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){e3(this),e5(this);var o="";break t}this.h.i=new c.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==i-1});n.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==r,function(e,t,r,n,i,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.W,u,r),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(a)){var l=a;break t}}l=null}if(r=l)eO(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,e7(this,r);else{this.i=!1,this.o=3,eU(12),e3(this),e5(this);break e}}this.S?(e1(this,u,o),x&&this.i&&3==u&&(eA(this.U,this.V,"tick",this.mb),this.V.start())):(eO(this.j,this.m,o,null),e7(this,o)),4==u&&e3(this),this.i&&!this.J&&(4==u?ri(this.l,this):(this.i=!1,e9(this)))}else(function(e){let t={};e=(e.g&&2<=tJ(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(C(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<o.indexOf("Unknown SID")?(this.o=3,eU(12)):(this.o=0,eU(13)),e3(this),e5(this)}}}catch(e){}finally{}},a.mb=function(){if(this.g){var e=tJ(this.g),t=this.g.ja();this.C<t.length&&(e6(this),e1(this,e,t),this.i&&4!=e&&e9(this))}},a.cancel=function(){this.J=!0,e3(this)},a.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.L&&(eP(),eU(17)),e3(this),this.o=2,e5(this)):e4(this,this.Y-e)};var te=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof tt){this.h=e.h,tn(this,e.j),this.s=e.s,this.g=e.g,ti(this,e.m),this.l=e.l;var t=e.i,r=new t_;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),ts(this,r),this.o=e.o}else e&&(t=String(e).match(te))?(this.h=!1,tn(this,t[1]||"",!0),this.s=th(t[2]||""),this.g=th(t[3]||"",!0),ti(this,t[4]),this.l=th(t[5]||"",!0),ts(this,t[6]||"",!0),this.o=th(t[7]||"")):(this.h=!1,this.i=new t_(null,this.h))}function tr(e){return new tt(e)}function tn(e,t,r){e.j=r?th(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ti(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ts(e,t,r){var n,i;t instanceof t_?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tm(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tv(this,t),ty(this,r,e))},n)),n.j=i):(r||(t=tl(t,tg)),e.i=new t_(t,e.h))}function to(e,t,r){e.i.set(t,r)}function ta(e){return to(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function th(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tl(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,tu),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tu(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tl(t,tc,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tl(t,tc,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.m)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(tl(r,"/"==r.charAt(0)?tf:td,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.o)&&e.push("#",tl(r,tp)),e.join("")};var tc=/[#\/\?@]/g,td=/[#\?:]/g,tf=/[#\?]/g,tg=/[#\?@]/g,tp=/#/g;function t_(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tm(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tv(e,t){tm(e),t=tw(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tb(e,t){return tm(e),t=tw(e,t),e.g.has(t)}function ty(e,t,r){tv(e,t),0<r.length&&(e.i=null,e.g.set(tw(e,t),w(r)),e.h+=r.length)}function tw(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(a=t_.prototype).add=function(e,t){tm(this),this.i=null,e=tw(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},a.forEach=function(e,t){tm(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},a.ta=function(){tm(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},a.Z=function(e){tm(this);let t=[];if("string"==typeof e)tb(this,e)&&(t=t.concat(this.g.get(tw(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},a.set=function(e,t){return tm(this),this.i=null,tb(this,e=tw(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},a.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},a.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),o=this.Z(n);for(n=0;n<o.length;n++){var i=s;""!==o[n]&&(i+="="+encodeURIComponent(String(o[n]))),e.push(i)}}return this.i=e.join("&")};var tE=class{constructor(e,t){this.g=e,this.map=t}};function tT(e){this.l=e||tS,e=c.PerformanceNavigationTiming?0<(e=c.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(c.g&&c.g.Ka&&c.g.Ka()&&c.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tS=10;function tC(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tA(e){return e.h?1:e.g?e.g.size:0}function tI(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tR(e,t){e.g?e.g.add(t):e.h=t}function tO(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tD(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.F);return t}return w(e.i)}tT.prototype.cancel=function(){if(this.i=tD(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var tk=class{stringify(e){return c.JSON.stringify(e,void 0)}parse(e){return c.JSON.parse(e,void 0)}};function tx(){this.g=new tk}function tN(e,t,r,n,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(n)}catch(e){}}function tP(e){this.l=e.fc||null,this.j=e.ob||!1}function tL(e,t){el.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=tU,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}v(tP,eH),tP.prototype.g=function(){return new tL(this.l,this.j)},tP.prototype.i=(n={},function(){return n}),v(tL,el);var tU=0;function tj(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function tB(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tM(e)}function tM(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(a=tL.prototype).open=function(e,t){if(this.readyState!=tU)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tM(this)},a.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||c).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},a.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tB(this)),this.readyState=tU},a.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tM(this)),this.g&&(this.readyState=3,tM(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==c.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tj(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},a.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tB(this):tM(this),3==this.readyState&&tj(this)}},a.Za=function(e){this.g&&(this.response=this.responseText=e,tB(this))},a.Ya=function(e){this.g&&(this.response=e,tB(this))},a.ka=function(){this.g&&tB(this)},a.setRequestHeader=function(e,t){this.v.append(e,t)},a.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},a.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(tL.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tF=c.JSON.parse;function tH(e){el.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tW,this.L=this.M=!1}v(tH,el);var tW="",tz=/^https?$/i,tV=["POST","PUT"];function t$(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,tq(e),tX(e)}function tq(e){e.F||(e.F=!0,eu(e,"complete"),eu(e,"error"))}function tG(e){if(e.h&&void 0!==u&&(!e.C[1]||4!=tJ(e)||2!=e.da())){if(e.v&&4==tJ(e))eE(e.La,0,e);else if(eu(e,"readystatechange"),4==tJ(e)){e.h=!1;try{let o=e.da();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===o){var i=String(e.I).match(te)[1]||null;!i&&c.self&&c.self.location&&(i=c.self.location.protocol.slice(0,-1)),r=!tz.test(i?i.toLowerCase():"")}t=r}if(t)eu(e,"complete"),eu(e,"success");else{e.m=6;try{var s=2<tJ(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",tq(e)}}finally{tX(e)}}}}function tX(e,t){if(e.g){tK(e);let r=e.g,n=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||eu(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function tK(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(c.clearTimeout(e.A),e.A=null)}function tJ(e){return e.g?e.g.readyState:0}function tQ(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case tW:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tY(e){let t="";return G(e,function(e,r){t+=r+":"+e+"\r\n"}),t}function tZ(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=tY(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):to(e,t,r))}function t0(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function t2(e){this.Ga=0,this.j=[],this.l=new eR,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=t0("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=t0("baseRetryDelayMs",5e3,e),this.hb=t0("retryDelaySeedMs",1e4,e),this.eb=t0("forwardChannelMaxRetries",2,e),this.xa=t0("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new tT(e&&e.concurrentRequestLimit),this.Ja=new tx,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function t1(e){if(t4(e),3==e.H){var t=e.W++,r=tr(e.I);if(to(r,"SID",e.K),to(r,"RID",t),to(r,"TYPE","terminate"),t3(e,r),(t=new eX(e,e.l,t)).L=2,t.v=ta(tr(r)),r=!1,c.navigator&&c.navigator.sendBeacon)try{r=c.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&c.Image&&((new Image).src=t.v,r=!0),r||(t.g=rl(t.l,null),t.g.ha(t.v)),t.G=Date.now(),e9(t)}ra(e)}function t9(e){e.g&&(rt(e),e.g.cancel(),e.g=null)}function t4(e){t9(e),e.u&&(c.clearTimeout(e.u),e.u=null),rn(e),e.i.cancel(),e.m&&("number"==typeof e.m&&c.clearTimeout(e.m),e.m=null)}function t6(e){if(!tC(e.i)&&!e.m){e.m=!0;var t=e.Na;ep||ev(),e_||(ep(),e_=!0),em.add(t,e),e.C=0}}function t5(e,t){var r;r=t?t.m:e.W++;let n=tr(e.I);to(n,"SID",e.K),to(n,"RID",r),to(n,"AID",e.V),t3(e,n),e.o&&e.s&&tZ(n,e.o,e.s),r=new eX(e,e.l,r,e.C+1),null===e.o&&(r.I=e.s),t&&(e.j=t.F.concat(e.j)),t=t7(e,r,1e3),r.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),tR(e.i,r),eZ(r,n,t)}function t3(e,t){e.na&&G(e.na,function(e,r){to(t,r,e)}),e.h&&e8({},function(e,r){to(t,r,e)})}function t7(e,t,r){r=Math.min(e.j.length,r);var n=e.h?_(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<r;o++){let r=i[o].g,a=i[o].map;if(0>(r-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{e8(e,function(e,r){let i=e;f(e)&&(i=ed(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+r+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.j.splice(0,r),t.F=e,n}function t8(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ep||ev(),e_||(ep(),e_=!0),em.add(t,e),e.A=0}}function re(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=eB(_(e.Ma,e),rs(e,e.A)),e.A++,!0)}function rt(e){null!=e.B&&(c.clearTimeout(e.B),e.B=null)}function rr(e){e.g=new eX(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=tr(e.wa);to(t,"RID","rpc"),to(t,"SID",e.K),to(t,"AID",e.V),to(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&to(t,"TO",e.qa),to(t,"TYPE","xmlhttp"),t3(e,t),e.o&&e.s&&tZ(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var r=e.g;e=e.pa,r.L=1,r.v=ta(tr(t)),r.s=null,r.S=!0,e0(r,e)}function rn(e){null!=e.v&&(c.clearTimeout(e.v),e.v=null)}function ri(e,t){var r=null;if(e.g==t){rn(e),rt(e),e.g=null;var n=2}else{if(!tI(e.i,t))return;r=t.F,tO(e.i,t),n=1}if(0!=e.H){if(t.i){if(1==n){r=t.s?t.s.length:0,t=Date.now()-t.G;var i,s=e.C;eu(n=ex(),new ej(n,r)),t6(e)}else t8(e)}else if(3==(s=t.o)||0==s&&0<t.ca||!(1==n&&(i=t,!(tA(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=i.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=eB(_(e.Na,e,i),rs(e,e.C)),e.C++,!0)))||2==n&&re(e)))switch(r&&0<r.length&&((t=e.i).i=t.i.concat(r)),s){case 1:ro(e,5);break;case 4:ro(e,10);break;case 3:ro(e,6);break;default:ro(e,2)}}}function rs(e,t){let r=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(r*=2),r*t}function ro(e,t){if(e.l.info("Error code "+t),2==t){var r=null;e.h&&(r=null);var n=_(e.pb,e);r||(r=new tt("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||tn(r,"https"),ta(r)),function(e,t){let r=new eR;if(c.Image){let n=new Image;n.onload=m(tN,r,n,"TestLoadImage: loaded",!0,t),n.onerror=m(tN,r,n,"TestLoadImage: error",!1,t),n.onabort=m(tN,r,n,"TestLoadImage: abort",!1,t),n.ontimeout=m(tN,r,n,"TestLoadImage: timeout",!1,t),c.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(r.toString(),n)}else eU(2);e.H=0,e.h&&e.h.za(t),ra(e),t4(e)}function ra(e){if(e.H=0,e.ma=[],e.h){let t=tD(e.i);(0!=t.length||0!=e.j.length)&&(E(e.ma,t),E(e.ma,e.j),e.i.i.length=0,w(e.j),e.j.length=0),e.h.ya()}}function rh(e,t,r){var n=r instanceof tt?tr(r):new tt(r);if(""!=n.g)t&&(n.g=t+"."+n.g),ti(n,n.m);else{var i=c.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new tt(null);n&&tn(s,n),t&&(s.g=t),i&&ti(s,i),r&&(s.l=r),n=s}return r=e.F,t=e.Da,r&&t&&to(n,r,t),to(n,"VER",e.ra),t3(e,n),n}function rl(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tH(r&&e.Ha&&!e.va?new tP({ob:!0}):e.va)).Oa(e.J),t}function ru(){}function rc(){if(D&&!(10<=Number(F)))throw Error("Environmental error: no available transport.")}function rd(e,t){el.call(this),this.g=new t2(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!C(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new rp(this)}function rf(e){e$.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function rg(){eq.call(this),this.status=1}function rp(e){this.g=e}function r_(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function rm(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^r&(i^s))+n[0]+3614090360&4294967295;o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[1]+3905402710&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[2]+606105819&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[3]+3250441966&4294967295,o=t+(s^(r=i+(o<<22&4294967295|o>>>10))&(i^s))+n[4]+4118548399&4294967295,o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[5]+1200080426&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[6]+2821735955&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[7]+4249261313&4294967295,o=t+(s^(r=i+(o<<22&4294967295|o>>>10))&(i^s))+n[8]+1770035416&4294967295,o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[9]+2336552879&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[10]+4294925233&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[11]+2304563134&4294967295,o=t+(s^(r=i+(o<<22&4294967295|o>>>10))&(i^s))+n[12]+1804603682&4294967295,o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[13]+4254626195&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[14]+2792965006&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[15]+1236535329&4294967295,r=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(r^i))+n[1]+4129170786&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[0]+3921069994&4294967295,r=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(r^i))+n[5]+3593408605&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[4]+3889429448&4294967295,r=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(r^i))+n[9]+568446438&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[8]+1163531501&4294967295,r=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(r^i))+n[13]+2850285829&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[12]+2368359562&4294967295,o=t+((r=i+(o<<20&4294967295|o>>>12))^i^s)+n[5]+4294588738&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[8]+2272392833&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[11]+1839030562&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[14]+4259657740&4294967295,o=t+((r=i+(o<<23&4294967295|o>>>9))^i^s)+n[1]+2763975236&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[4]+1272893353&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[7]+4139469664&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[10]+3200236656&4294967295,o=t+((r=i+(o<<23&4294967295|o>>>9))^i^s)+n[13]+681279174&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[0]+3936430074&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[3]+3572445317&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[6]+76029189&4294967295,o=t+((r=i+(o<<23&4294967295|o>>>9))^i^s)+n[9]+3654602809&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[12]+3873151461&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[15]+530742520&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[2]+3299628645&4294967295,r=i+(o<<23&4294967295|o>>>9),o=t+(i^(r|~s))+n[0]+4096336452&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[5]+4237533241&4294967295,r=i+(o<<21&4294967295|o>>>11),o=t+(i^(r|~s))+n[12]+1700485571&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[1]+2240044497&4294967295,r=i+(o<<21&4294967295|o>>>11),o=t+(i^(r|~s))+n[8]+1873313359&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[13]+1309151649&4294967295,r=i+(o<<21&4294967295|o>>>11),o=t+(i^(r|~s))+n[4]+4149444226&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function rv(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}(a=tH.prototype).Oa=function(e){this.M=e},a.ha=function(e,t,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():o.g(),this.C=this.u?eW(this.u):eW(o),this.g.onreadystatechange=_(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){t$(this,e);return}if(e=r||"",r=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var i in n)r.set(i,n[i]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())r.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[s,o]of(n=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),i=c.FormData&&e instanceof c.FormData,!(0<=y(tV,t))||n||i||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;tK(this),0<this.B&&((this.L=(s=this.g,D&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=_(this.ua,this)):this.A=eE(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){t$(this,e)}},a.ua=function(){void 0!==u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eu(this,"timeout"),this.abort(8))},a.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,eu(this,"complete"),eu(this,"abort"),tX(this))},a.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),tX(this,!0)),tH.$.N.call(this)},a.La=function(){this.s||(this.G||this.v||this.l?tG(this):this.kb())},a.kb=function(){tG(this)},a.isActive=function(){return!!this.g},a.da=function(){try{return 2<tJ(this)?this.g.status:-1}catch(e){return -1}},a.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},a.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tF(t)}},a.Ia=function(){return this.m},a.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(a=t2.prototype).ra=8,a.H=1,a.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new eX(this,this.l,e),s=this.s;if(this.U&&(s?J(s=X(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,r=0;r<this.j.length;r++){t:{var n=this.j[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.j.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=t7(this,i,t),to(r=tr(this.I),"RID",e),to(r,"CVER",22),this.F&&to(r,"X-HTTP-Session-Id",this.F),t3(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(tY(s)))+"&"+t:this.o&&tZ(r,this.o,s)),tR(this.i,i),this.bb&&to(r,"TYPE","init"),this.P?(to(r,"$req",t),to(r,"SID","null"),i.aa=!0,eZ(i,r,null)):eZ(i,r,t),this.H=2}}else 3==this.H&&(e?t5(this,e):0==this.j.length||tC(this.i)||t5(this))}},a.Ma=function(){if(this.u=null,rr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=eB(_(this.jb,this),e)}},a.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,eU(10),t9(this),rr(this))},a.ib=function(){null!=this.v&&(this.v=null,t9(this),re(this),eU(19))},a.pb=function(e){e?(this.l.info("Successfully pinged google.com"),eU(2)):(this.l.info("Failed to ping google.com"),eU(1))},a.isActive=function(){return!!this.h&&this.h.isActive(this)},(a=ru.prototype).Ba=function(){},a.Aa=function(){},a.za=function(){},a.ya=function(){},a.isActive=function(){return!0},a.Va=function(){},rc.prototype.g=function(e,t){return new rd(e,t)},v(rd,el),rd.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,r=this.h||void 0;eU(0),e.Y=t,e.na=r||{},e.G=e.aa,e.I=rh(e,null,e.Y),t6(e)},rd.prototype.close=function(){t1(this.g)},rd.prototype.u=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.v&&((r={}).__data__=ed(e),e=r);t.j.push(new tE(t.fb++,e)),3==t.H&&t6(t)},rd.prototype.N=function(){this.g.h=null,delete this.j,t1(this.g),delete this.g,rd.$.N.call(this)},v(rf,e$),v(rg,eq),v(rp,ru),rp.prototype.Ba=function(){eu(this.g,"a")},rp.prototype.Aa=function(e){eu(this.g,new rf(e))},rp.prototype.za=function(e){eu(this.g,new rg)},rp.prototype.ya=function(){eu(this.g,"b")},v(r_,function(){this.blockSize=-1}),r_.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},r_.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=r;)rm(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[i++]=e.charCodeAt(s++),i==this.blockSize){rm(this,n),i=0;break}}else for(;s<t;)if(n[i++]=e[s++],i==this.blockSize){rm(this,n),i=0;break}}this.h=i,this.i+=t},r_.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.j(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var rb={};function ry(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(rb,e)?rb[e]:rb[e]=new rv([0|e],0>e?-1:0):new rv([0|e],0>e?-1:0)}function rw(e){if(isNaN(e)||!isFinite(e))return rT;if(0>e)return rR(rw(-e));for(var t=[],r=1,n=0;e>=r;n++)t[n]=e/r|0,r*=rE;return new rv(t,0)}var rE=4294967296,rT=ry(0),rS=ry(1),rC=ry(16777216);function rA(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function rI(e){return -1==e.h}function rR(e){for(var t=e.g.length,r=[],n=0;n<t;n++)r[n]=~e.g[n];return new rv(r,~e.h).add(rS)}function rO(e,t){return e.add(rR(t))}function rD(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function rk(e,t){this.g=e,this.h=t}function rx(e,t){if(rA(t))throw Error("division by zero");if(rA(e))return new rk(rT,rT);if(rI(e))return t=rx(rR(e),t),new rk(rR(t.g),rR(t.h));if(rI(t))return t=rx(e,rR(t)),new rk(rR(t.g),t.h);if(30<e.g.length){if(rI(e)||rI(t))throw Error("slowDivide_ only works with positive integers.");for(var r=rS,n=t;0>=n.X(e);)r=rN(r),n=rN(n);var i=rP(r,1),s=rP(n,1);for(n=rP(n,2),r=rP(r,2);!rA(n);){var o=s.add(n);0>=o.X(e)&&(i=i.add(r),s=o),n=rP(n,1),r=rP(r,1)}return t=rO(e,i.R(t)),new rk(i,t)}for(i=rT;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),o=(s=rw(r)).R(t);rI(o)||0<o.X(e);)r-=n,o=(s=rw(r)).R(t);rA(s)&&(s=rS),i=i.add(s),e=rO(e,o)}return new rk(i,e)}function rN(e){for(var t=e.g.length+1,r=[],n=0;n<t;n++)r[n]=e.D(n)<<1|e.D(n-1)>>>31;return new rv(r,e.h)}function rP(e,t){var r=t>>5;t%=32;for(var n=e.g.length-r,i=[],s=0;s<n;s++)i[s]=0<t?e.D(s+r)>>>t|e.D(s+r+1)<<32-t:e.D(s+r);return new rv(i,e.h)}(a=rv.prototype).ea=function(){if(rI(this))return-rR(this).ea();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.D(r);e+=(0<=n?n:rE+n)*t,t*=rE}return e},a.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(rA(this))return"0";if(rI(this))return"-"+rR(this).toString(e);for(var t=rw(Math.pow(e,6)),r=this,n="";;){var i=rx(r,t).g,s=((0<(r=rO(r,i.R(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(rA(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},a.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},a.X=function(e){return rI(e=rO(this,e))?-1:rA(e)?0:1},a.abs=function(){return rI(this)?rR(this):this},a.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0,i=0;i<=t;i++){var s=n+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);n=o>>>16,s&=65535,o&=65535,r[i]=o<<16|s}return new rv(r,-2147483648&r[r.length-1]?-1:0)},a.R=function(e){if(rA(this)||rA(e))return rT;if(rI(this))return rI(e)?rR(this).R(rR(e)):rR(rR(this).R(e));if(rI(e))return rR(this.R(rR(e)));if(0>this.X(rC)&&0>e.X(rC))return rw(this.ea()*e.ea());for(var t=this.g.length+e.g.length,r=[],n=0;n<2*t;n++)r[n]=0;for(n=0;n<this.g.length;n++)for(var i=0;i<e.g.length;i++){var s=this.D(n)>>>16,o=65535&this.D(n),a=e.D(i)>>>16,h=65535&e.D(i);r[2*n+2*i]+=o*h,rD(r,2*n+2*i),r[2*n+2*i+1]+=s*h,rD(r,2*n+2*i+1),r[2*n+2*i+1]+=o*a,rD(r,2*n+2*i+1),r[2*n+2*i+2]+=s*a,rD(r,2*n+2*i+2)}for(n=0;n<t;n++)r[n]=r[2*n+1]<<16|r[2*n];for(n=t;n<2*t;n++)r[n]=0;return new rv(r,0)},a.gb=function(e){return rx(this,e).h},a.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)&e.D(n);return new rv(r,this.h&e.h)},a.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)|e.D(n);return new rv(r,this.h|e.h)},a.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)^e.D(n);return new rv(r,this.h^e.h)},rc.prototype.createWebChannel=rc.prototype.g,rd.prototype.send=rd.prototype.u,rd.prototype.open=rd.prototype.m,rd.prototype.close=rd.prototype.close,eM.NO_ERROR=0,eM.TIMEOUT=8,eM.HTTP_ERROR=6,eF.COMPLETE="complete",ez.EventType=eV,eV.OPEN="a",eV.CLOSE="b",eV.ERROR="c",eV.MESSAGE="d",el.prototype.listen=el.prototype.O,tH.prototype.listenOnce=tH.prototype.P,tH.prototype.getLastError=tH.prototype.Sa,tH.prototype.getLastErrorCode=tH.prototype.Ia,tH.prototype.getStatus=tH.prototype.da,tH.prototype.getResponseJson=tH.prototype.Wa,tH.prototype.getResponseText=tH.prototype.ja,tH.prototype.send=tH.prototype.ha,tH.prototype.setWithCredentials=tH.prototype.Oa,r_.prototype.digest=r_.prototype.l,r_.prototype.reset=r_.prototype.reset,r_.prototype.update=r_.prototype.j,rv.prototype.add=rv.prototype.add,rv.prototype.multiply=rv.prototype.R,rv.prototype.modulo=rv.prototype.gb,rv.prototype.compare=rv.prototype.X,rv.prototype.toNumber=rv.prototype.ea,rv.prototype.toString=rv.prototype.toString,rv.prototype.getBits=rv.prototype.D,rv.fromNumber=rw,rv.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return rR(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rw(Math.pow(r,8)),i=rT,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),r);8>o?(o=rw(Math.pow(r,o)),i=i.R(o).add(rw(a))):i=(i=i.R(n)).add(rw(a))}return i};var rL=l.createWebChannelTransport=function(){return new rc},rU=l.getStatEventTarget=function(){return ex()},rj=l.ErrorCode=eM,rB=l.EventType=eF,rM=l.Event=eD,rF=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rH=l.FetchXmlHttpFactory=tP,rW=l.WebChannel=ez,rz=l.XhrIo=tH,rV=l.Md5=r_,r$=l.Integer=rv},4866:function(e,t,r){r.d(t,{Z:function(){return n.Z}});var n=r(8180);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n.Z.registerVersion("firebase","9.22.2","app-compat")},7058:function(e,t,r){var n,i=r(8180),s=r(740),o=r(5276),a=r(4444),h=r(3333);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l=new h.Yd("@firebase/database-compat"),u=function(e){l.warn("FIREBASE WARNING: "+e)},c=function(e,t,r,n){if((!n||void 0!==r)&&"boolean"!=typeof r)throw Error((0,a.gK)(e,t)+"must be a boolean.")},d=function(e,t,r){if(!r||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw Error((0,a.gK)(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this._delegate=e}cancel(e){(0,a.Dv)("OnDisconnect.cancel",0,1,arguments.length),(0,a.Wj)("OnDisconnect.cancel","onComplete",e,!0);let t=this._delegate.cancel();return e&&t.then(()=>e(null),t=>e(t)),t}remove(e){(0,a.Dv)("OnDisconnect.remove",0,1,arguments.length),(0,a.Wj)("OnDisconnect.remove","onComplete",e,!0);let t=this._delegate.remove();return e&&t.then(()=>e(null),t=>e(t)),t}set(e,t){(0,a.Dv)("OnDisconnect.set",1,2,arguments.length),(0,a.Wj)("OnDisconnect.set","onComplete",t,!0);let r=this._delegate.set(e);return t&&r.then(()=>t(null),e=>t(e)),r}setWithPriority(e,t,r){(0,a.Dv)("OnDisconnect.setWithPriority",2,3,arguments.length),(0,a.Wj)("OnDisconnect.setWithPriority","onComplete",r,!0);let n=this._delegate.setWithPriority(e,t);return r&&n.then(()=>r(null),e=>r(e)),n}update(e,t){if((0,a.Dv)("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){let t={};for(let r=0;r<e.length;++r)t[""+r]=e[r];e=t,u("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}(0,a.Wj)("OnDisconnect.update","onComplete",t,!0);let r=this._delegate.update(e);return t&&r.then(()=>t(null),e=>t(e)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return(0,a.Dv)("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e,t){this._database=e,this._delegate=t}val(){return(0,a.Dv)("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return(0,a.Dv)("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return(0,a.Dv)("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return(0,a.Dv)("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return(0,a.Dv)("DataSnapshot.child",0,1,arguments.length),e=String(e),(0,o.FQ)("DataSnapshot.child","path",e,!1),new p(this._database,this._delegate.child(e))}hasChild(e){return(0,a.Dv)("DataSnapshot.hasChild",1,1,arguments.length),(0,o.FQ)("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return(0,a.Dv)("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return(0,a.Dv)("DataSnapshot.forEach",1,1,arguments.length),(0,a.Wj)("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new p(this._database,t)))}hasChildren(){return(0,a.Dv)("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return(0,a.Dv)("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return(0,a.Dv)("DataSnapshot.ref",0,0,arguments.length),new m(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class _{constructor(e,t){this.database=e,this._delegate=t}on(e,t,r,n){var i;(0,a.Dv)("Query.on",2,4,arguments.length),(0,a.Wj)("Query.on","callback",t,!1);let s=_.getCancelAndContextArgs_("Query.on",r,n),h=(e,r)=>{t.call(s.context,new p(this.database,e),r)};h.userCallback=t,h.context=s.context;let l=null===(i=s.cancel)||void 0===i?void 0:i.bind(s.context);switch(e){case"value":return(0,o.jM)(this._delegate,h,l),t;case"child_added":return(0,o.yv)(this._delegate,h,l),t;case"child_removed":return(0,o.MQ)(this._delegate,h,l),t;case"child_changed":return(0,o.Jr)(this._delegate,h,l),t;case"child_moved":return(0,o.Vt)(this._delegate,h,l),t;default:throw Error((0,a.gK)("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,r){if((0,a.Dv)("Query.off",0,3,arguments.length),d("Query.off",e,!0),(0,a.Wj)("Query.off","callback",t,!0),(0,a.lb)("Query.off","context",r,!0),t){let n=()=>{};n.userCallback=t,n.context=r,(0,o.S1)(this._delegate,e,n)}else(0,o.S1)(this._delegate,e)}get(){return(0,o.U2)(this._delegate).then(e=>new p(this.database,e))}once(e,t,r,n){(0,a.Dv)("Query.once",1,4,arguments.length),(0,a.Wj)("Query.once","callback",t,!0);let i=_.getCancelAndContextArgs_("Query.once",r,n),s=new a.BH,h=(e,r)=>{let n=new p(this.database,e);t&&t.call(i.context,n,r),s.resolve(n)};h.userCallback=t,h.context=i.context;let l=e=>{i.cancel&&i.cancel.call(i.context,e),s.reject(e)};switch(e){case"value":(0,o.jM)(this._delegate,h,l,{onlyOnce:!0});break;case"child_added":(0,o.yv)(this._delegate,h,l,{onlyOnce:!0});break;case"child_removed":(0,o.MQ)(this._delegate,h,l,{onlyOnce:!0});break;case"child_changed":(0,o.Jr)(this._delegate,h,l,{onlyOnce:!0});break;case"child_moved":(0,o.Vt)(this._delegate,h,l,{onlyOnce:!0});break;default:throw Error((0,a.gK)("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return s.promise}limitToFirst(e){return(0,a.Dv)("Query.limitToFirst",1,1,arguments.length),new _(this.database,(0,o.IO)(this._delegate,(0,o.Kk)(e)))}limitToLast(e){return(0,a.Dv)("Query.limitToLast",1,1,arguments.length),new _(this.database,(0,o.IO)(this._delegate,(0,o.vh)(e)))}orderByChild(e){return(0,a.Dv)("Query.orderByChild",1,1,arguments.length),new _(this.database,(0,o.IO)(this._delegate,(0,o.g2)(e)))}orderByKey(){return(0,a.Dv)("Query.orderByKey",0,0,arguments.length),new _(this.database,(0,o.IO)(this._delegate,(0,o.R)()))}orderByPriority(){return(0,a.Dv)("Query.orderByPriority",0,0,arguments.length),new _(this.database,(0,o.IO)(this._delegate,(0,o.HE)()))}orderByValue(){return(0,a.Dv)("Query.orderByValue",0,0,arguments.length),new _(this.database,(0,o.IO)(this._delegate,(0,o.Bd)()))}startAt(e=null,t){return(0,a.Dv)("Query.startAt",0,2,arguments.length),new _(this.database,(0,o.IO)(this._delegate,(0,o.e0)(e,t)))}startAfter(e=null,t){return(0,a.Dv)("Query.startAfter",0,2,arguments.length),new _(this.database,(0,o.IO)(this._delegate,(0,o.TQ)(e,t)))}endAt(e=null,t){return(0,a.Dv)("Query.endAt",0,2,arguments.length),new _(this.database,(0,o.IO)(this._delegate,(0,o.Wu)(e,t)))}endBefore(e=null,t){return(0,a.Dv)("Query.endBefore",0,2,arguments.length),new _(this.database,(0,o.IO)(this._delegate,(0,o.Lx)(e,t)))}equalTo(e,t){return(0,a.Dv)("Query.equalTo",1,2,arguments.length),new _(this.database,(0,o.IO)(this._delegate,(0,o.EW)(e,t)))}toString(){return(0,a.Dv)("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return(0,a.Dv)("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if((0,a.Dv)("Query.isEqual",1,1,arguments.length),!(e instanceof _))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,r){let n={cancel:void 0,context:void 0};if(t&&r)n.cancel=t,(0,a.Wj)(e,"cancel",n.cancel,!0),n.context=r,(0,a.lb)(e,"context",n.context,!0);else if(t){if("object"==typeof t&&null!==t)n.context=t;else if("function"==typeof t)n.cancel=t;else throw Error((0,a.gK)(e,"cancelOrContext")+" must either be a cancel callback or a context object.")}return n}get ref(){return new m(this.database,new o.tn(this._delegate._repo,this._delegate._path))}}class m extends _{constructor(e,t){super(e,new o.JH(t._repo,t._path,new o.G$,!1)),this.database=e,this._delegate=t}getKey(){return(0,a.Dv)("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return(0,a.Dv)("Reference.child",1,1,arguments.length),"number"==typeof e&&(e=String(e)),new m(this.database,(0,o.iU)(this._delegate,e))}getParent(){(0,a.Dv)("Reference.parent",0,0,arguments.length);let e=this._delegate.parent;return e?new m(this.database,e):null}getRoot(){return(0,a.Dv)("Reference.root",0,0,arguments.length),new m(this.database,this._delegate.root)}set(e,t){(0,a.Dv)("Reference.set",1,2,arguments.length),(0,a.Wj)("Reference.set","onComplete",t,!0);let r=(0,o.t8)(this._delegate,e);return t&&r.then(()=>t(null),e=>t(e)),r}update(e,t){if((0,a.Dv)("Reference.update",1,2,arguments.length),Array.isArray(e)){let t={};for(let r=0;r<e.length;++r)t[""+r]=e[r];e=t,u("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}(0,o.mI)("Reference.update",this._delegate._path),(0,a.Wj)("Reference.update","onComplete",t,!0);let r=(0,o.Vx)(this._delegate,e);return t&&r.then(()=>t(null),e=>t(e)),r}setWithPriority(e,t,r){(0,a.Dv)("Reference.setWithPriority",2,3,arguments.length),(0,a.Wj)("Reference.setWithPriority","onComplete",r,!0);let n=(0,o.cy)(this._delegate,e,t);return r&&n.then(()=>r(null),e=>r(e)),n}remove(e){(0,a.Dv)("Reference.remove",0,1,arguments.length),(0,a.Wj)("Reference.remove","onComplete",e,!0);let t=(0,o.Od)(this._delegate);return e&&t.then(()=>e(null),t=>e(t)),t}transaction(e,t,r){(0,a.Dv)("Reference.transaction",1,3,arguments.length),(0,a.Wj)("Reference.transaction","transactionUpdate",e,!1),(0,a.Wj)("Reference.transaction","onComplete",t,!0),c("Reference.transaction","applyLocally",r,!0);let n=(0,o.i3)(this._delegate,e,{applyLocally:r}).then(e=>new g(e.committed,new p(this.database,e.snapshot)));return t&&n.then(e=>t(null,e.committed,e.snapshot),e=>t(e,!1,null)),n}setPriority(e,t){(0,a.Dv)("Reference.setPriority",1,2,arguments.length),(0,a.Wj)("Reference.setPriority","onComplete",t,!0);let r=(0,o.Sl)(this._delegate,e);return t&&r.then(()=>t(null),e=>t(e)),r}push(e,t){(0,a.Dv)("Reference.push",0,2,arguments.length),(0,a.Wj)("Reference.push","onComplete",t,!0);let r=(0,o.VF)(this._delegate,e),n=r.then(e=>new m(this.database,e));t&&n.then(()=>t(null),e=>t(e));let i=new m(this.database,r);return i.then=n.then.bind(n),i.catch=n.catch.bind(n,void 0),i}onDisconnect(){return(0,o.mI)("Reference.onDisconnect",this._delegate._path),new f(new o.vA(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:o.TD,forceLongPolling:o.Ot}}useEmulator(e,t,r={}){(0,o.dH)(this._delegate,e,t,r)}ref(e){if((0,a.Dv)("database.ref",0,1,arguments.length),e instanceof m){let t=(0,o.qT)(this._delegate,e.toString());return new m(this,t)}{let t=(0,o.iH)(this._delegate,e);return new m(this,t)}}refFromURL(e){(0,a.Dv)("database.refFromURL",1,1,arguments.length);let t=(0,o.qT)(this._delegate,e);return new m(this,t)}goOffline(){return(0,a.Dv)("database.goOffline",0,0,arguments.length),(0,o.Sb)(this._delegate)}goOnline(){return(0,a.Dv)("database.goOnline",0,0,arguments.length),(0,o.$o)(this._delegate)}}v.ServerValue={TIMESTAMP:(0,o.Bt)(),increment:e=>(0,o.nP)(e)};var b=Object.freeze({__proto__:null,initStandalone:/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function({app:e,url:t,version:r,customAuthImpl:n,namespace:i,nodeAdmin:a=!1}){(0,o.AM)(r);let h=new s.zt("auth-internal",new s.H0("database-standalone"));return h.setComponent(new s.wA("auth-internal",()=>n,"PRIVATE")),{instance:new v((0,o.wj)(e,h,void 0,t,a),e),namespace:i}}});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y=v.ServerValue;(n=i.Z).INTERNAL.registerComponent(new s.wA("database-compat",(e,{instanceIdentifier:t})=>{let r=e.getProvider("app-compat").getImmediate(),n=e.getProvider("database").getImmediate({identifier:t});return new v(n,r)},"PUBLIC").setServiceProps({Reference:m,Query:_,Database:v,DataSnapshot:p,enableLogging:o.U7,INTERNAL:b,ServerValue:y}).setMultipleInstances(!0)),n.registerVersion("@firebase/database-compat","0.3.4")},6282:function(e,t,r){var n,i=r(8180),s=r(19),o=r(4444),a=r(740);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new s.WA("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"==typeof Uint8Array)throw new s.WA("unimplemented","Uint8Arrays are not available in this environment.")}function u(){if(!(0,s.Me)())throw new s.WA("unimplemented","Blobs are unavailable in Firestore in this environment.")}class c{constructor(e){this._delegate=e}static fromBase64String(e){return u(),new c(s.Jj.fromBase64String(e))}static fromUint8Array(e){return l(),new c(s.Jj.fromUint8Array(e))}toBase64(){return u(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{enableIndexedDbPersistence(e,t){return(0,s.ST)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return(0,s.fH)(e._delegate)}clearIndexedDbPersistence(e){return(0,s.Fc)(e._delegate)}}class g{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof s.l7||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){let t=this._delegate._getSettings();e.merge||t.host===e.host||(0,s.yq)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){(0,s.at)(this._delegate,e,t,r)}enableNetwork(){return(0,s.Ix)(this._delegate)}disableNetwork(){return(0,s.TF)(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,(0,s.Wi)("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return(0,s.Mx)(this._delegate)}onSnapshotsInSync(e){return(0,s.sc)(this._delegate,e)}get app(){if(!this._appCompat)throw new s.WA("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new R(this,(0,s.hJ)(this._delegate,e))}catch(e){throw y(e,"collection()","Firestore.collection()")}}doc(e){try{return new b(this,(0,s.JU)(this._delegate,e))}catch(e){throw y(e,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new C(this,(0,s.B$)(this._delegate,e))}catch(e){throw y(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return(0,s.i3)(this._delegate,t=>e(new _(this,t)))}batch(){return(0,s.qY)(this._delegate),new m(new s.PU(this._delegate,e=>(0,s.GL)(this._delegate,e)))}loadBundle(e){return(0,s.Pb)(this._delegate,e)}namedQuery(e){return(0,s.L$)(this._delegate,e).then(e=>e?new C(this,e):null)}}class p extends s.u7{constructor(e){super(),this.firestore=e}convertBytes(e){return new c(new s.Jj(e))}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return b.forKey(t,this.firestore,null)}}class _{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new p(e)}get(e){let t=O(e);return this._delegate.get(t).then(e=>new T(this._firestore,new s.xU(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,r){let n=O(e);return r?(h("Transaction.set",r),this._delegate.set(n,t,r)):this._delegate.set(n,t),this}update(e,t,r,...n){let i=O(e);return 2==arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,r,...n),this}delete(e){let t=O(e);return this._delegate.delete(t),this}}class m{constructor(e){this._delegate=e}set(e,t,r){let n=O(e);return r?(h("WriteBatch.set",r),this._delegate.set(n,t,r)):this._delegate.set(n,t),this}update(e,t,r,...n){let i=O(e);return 2==arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,r,...n),this}delete(e){let t=O(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class v{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){let r=new s.$q(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new S(this._firestore,r),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){let r=v.INSTANCES,n=r.get(e);n||(n=new WeakMap,r.set(e,n));let i=n.get(t);return i||(i=new v(e,new p(e),t),n.set(t,i)),i}}v.INSTANCES=new WeakMap;class b{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new p(e)}static forPath(e,t,r){if(e.length%2!=0)throw new s.WA("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new b(t,new s.my(t._delegate,r,new s.Ky(e)))}static forKey(e,t,r){return new b(t,new s.my(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new R(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new R(this.firestore,(0,s.hJ)(this._delegate,e))}catch(e){throw y(e,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=(0,o.m9)(e))instanceof s.my&&(0,s.Eo)(this._delegate,e)}set(e,t){t=h("DocumentReference.set",t);try{if(t)return(0,s.pl)(this._delegate,e,t);return(0,s.pl)(this._delegate,e)}catch(e){throw y(e,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{if(1==arguments.length)return(0,s.r7)(this._delegate,e);return(0,s.r7)(this._delegate,e,t,...r)}catch(e){throw y(e,"updateDoc()","DocumentReference.update()")}}delete(){return(0,s.oe)(this._delegate)}onSnapshot(...e){let t=w(e),r=E(e,e=>new T(this.firestore,new s.xU(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return(0,s.cf)(this._delegate,t,r)}get(e){return((null==e?void 0:e.source)==="cache"?(0,s.kl)(this._delegate):(null==e?void 0:e.source)==="server"?(0,s.Xk)(this._delegate):(0,s.QT)(this._delegate)).then(e=>new T(this.firestore,new s.xU(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new b(this.firestore,e?this._delegate.withConverter(v.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function y(e,t,r){return e.message=e.message.replace(t,r),e}function w(e){for(let t of e)if("object"==typeof t&&!d(t))return t;return{}}function E(e,t){var r,n;let i;return{next:e=>{i.next&&i.next(t(e))},error:null===(r=(i=d(e[0])?e[0]:d(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]}).error)||void 0===r?void 0:r.bind(i),complete:null===(n=i.complete)||void 0===n?void 0:n.bind(i)}}class T{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new b(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return(0,s.qK)(this._delegate,e._delegate)}}class S extends T{data(e){let t=this._delegate.data(e);return(0,s.K9)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class C{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new p(e)}where(e,t,r){try{return new C(this.firestore,(0,s.IO)(this._delegate,(0,s.ar)(e,t,r)))}catch(e){throw y(e,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new C(this.firestore,(0,s.IO)(this._delegate,(0,s.Xo)(e,t)))}catch(e){throw y(e,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new C(this.firestore,(0,s.IO)(this._delegate,(0,s.b9)(e)))}catch(e){throw y(e,"limit()","Query.limit()")}}limitToLast(e){try{return new C(this.firestore,(0,s.IO)(this._delegate,(0,s.vh)(e)))}catch(e){throw y(e,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new C(this.firestore,(0,s.IO)(this._delegate,(0,s.e0)(...e)))}catch(e){throw y(e,"startAt()","Query.startAt()")}}startAfter(...e){try{return new C(this.firestore,(0,s.IO)(this._delegate,(0,s.TQ)(...e)))}catch(e){throw y(e,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new C(this.firestore,(0,s.IO)(this._delegate,(0,s.Lx)(...e)))}catch(e){throw y(e,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new C(this.firestore,(0,s.IO)(this._delegate,(0,s.Wu)(...e)))}catch(e){throw y(e,"endAt()","Query.endAt()")}}isEqual(e){return(0,s.iE)(this._delegate,e._delegate)}get(e){return((null==e?void 0:e.source)==="cache"?(0,s.UQ)(this._delegate):(null==e?void 0:e.source)==="server"?(0,s.zN)(this._delegate):(0,s.PL)(this._delegate)).then(e=>new I(this.firestore,new s.W(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){let t=w(e),r=E(e,e=>new I(this.firestore,new s.W(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return(0,s.cf)(this._delegate,t,r)}withConverter(e){return new C(this.firestore,e?this._delegate.withConverter(v.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class A{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new S(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class I{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new C(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new S(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new A(this._firestore,e))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new S(this._firestore,r))})}isEqual(e){return(0,s.qK)(this._delegate,e._delegate)}}class R extends C{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){let e=this._delegate.parent;return e?new b(this.firestore,e):null}doc(e){try{if(void 0===e)return new b(this.firestore,(0,s.JU)(this._delegate));return new b(this.firestore,(0,s.JU)(this._delegate,e))}catch(e){throw y(e,"doc()","CollectionReference.doc()")}}add(e){return(0,s.ET)(this._delegate,e).then(e=>new b(this.firestore,e))}isEqual(e){return(0,s.Eo)(this._delegate,e._delegate)}withConverter(e){return new R(this.firestore,e?this._delegate.withConverter(v.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function O(e){return(0,s.Cf)(e,s.my)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(...e){this._delegate=new s.Lz(...e)}static documentId(){return new D(s.Xb.keyField().canonicalString())}isEqual(e){return(e=(0,o.m9)(e))instanceof s.Lz&&this._delegate._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this._delegate=e}static serverTimestamp(){let e=(0,s.Bt)();return e._methodName="FieldValue.serverTimestamp",new k(e)}static delete(){let e=(0,s.AK)();return e._methodName="FieldValue.delete",new k(e)}static arrayUnion(...e){let t=(0,s.vr)(...e);return t._methodName="FieldValue.arrayUnion",new k(t)}static arrayRemove(...e){let t=(0,s.Ab)(...e);return t._methodName="FieldValue.arrayRemove",new k(t)}static increment(e){let t=(0,s.nP)(e);return t._methodName="FieldValue.increment",new k(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x={Firestore:g,GeoPoint:s.F8,Timestamp:s.EK,Blob:c,Transaction:_,WriteBatch:m,DocumentReference:b,DocumentSnapshot:T,Query:C,QueryDocumentSnapshot:S,QuerySnapshot:I,CollectionReference:R,FieldPath:D,FieldValue:k,setLogLevel:function(e){(0,s.Ub)(e)},CACHE_SIZE_UNLIMITED:s.IX};!function(e,t){e.INTERNAL.registerComponent(new a.wA("firestore-compat",e=>{let r=e.getProvider("app-compat").getImmediate(),n=e.getProvider("firestore").getImmediate();return t(r,n)},"PUBLIC").setServiceProps(Object.assign({},x)))}(n=i.Z,(e,t)=>new g(e,t,new f)),n.registerVersion("@firebase/firestore-compat","0.3.11")},8542:function(e,t,r){var n,i,s,o,a,h=r(8180),l=r(5816),u=r(4444),c=r(740);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="firebasestorage.googleapis.com",f="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g extends u.ZR{constructor(e,t,r=0){super(p(e),`Firebase Storage: ${t} (${p(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,g.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return p(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function p(e){return"storage/"+e}function _(){return new g(o.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function m(){return new g(o.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function v(){return new g(o.CANCELED,"User canceled the upload/download.")}function b(){return new g(o.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function y(e){return new g(o.INVALID_ARGUMENT,e)}function w(){return new g(o.APP_DELETED,"The Firebase app was deleted.")}function E(e){return new g(o.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function T(e,t){return new g(o.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function S(e){throw new g(o.INTERNAL_ERROR,"Internal error: "+e)}(n=o||(o={})).UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=C.makeFromUrl(e,t)}catch(t){return new C(e,"")}if(""===r.path)return r;throw new g(o.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+n+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}let a=t.replace(/[.]/g,"\\."),h=RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),l=RegExp(`^https?://${t===d?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),u=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:h,indices:{bucket:1,path:3},postModify:s},{regex:l,indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<u.length;t++){let n=u[t],i=n.regex.exec(e);if(i){let e=i[n.indices.bucket],t=i[n.indices.path];t||(t=""),r=new C(e,t),n.postModify(r);break}}if(null==r)throw new g(o.INVALID_URL,"Invalid URL '"+e+"'.");return r}}class A{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function I(e){return"string"==typeof e||e instanceof String}function R(e){return O()&&e instanceof Blob}function O(){return"undefined"!=typeof Blob&&!(0,u.UG)()}function D(e,t,r,n){if(n<t)throw y(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw y(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function x(e){let t=encodeURIComponent,r="?";for(let n in e)if(e.hasOwnProperty(n)){let i=t(n)+"="+t(e[n]);r=r+i+"&"}return r.slice(0,-1)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){let r=e>=500&&e<600,n=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return r||n||i}(i=a||(a={}))[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t,r,n,i,s,o,a,h,l,u,c=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=h,this.progressCallback_=l,this.connectionFactory_=u,this.retry=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{let r=this.resolve_,n=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(i,i.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==i){let e=_();e.serverResponse=i.getErrorText(),n(this.errorCallback_?this.errorCallback_(i,e):e)}else if(t.canceled){let e=this.appDelete_?w():v();n(e)}else{let e=m();n(e)}};this.canceled_?e(!1,new L(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,r){let n=1,i=null,s=null,o=!1,a=0,h=!1;function l(...e){h||(h=!0,t.apply(null,e))}function u(t){i=setTimeout(()=>{i=null,e(d,2===a)},t)}function c(){s&&clearTimeout(s)}function d(e,...t){let r;if(h){c();return}if(e){c(),l.call(null,e,...t);return}let i=2===a||o;if(i){c(),l.call(null,e,...t);return}n<64&&(n*=2),1===a?(a=2,r=0):r=(n+Math.random())*1e3,u(r)}let f=!1;function g(e){!f&&(f=!0,c(),!h&&(null!==i?(e||(a=2),clearTimeout(i),u(0)):e||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,g(!0)},r),g}((e,t)=>{if(t){e(!1,new L(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let n=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;let t=r.getErrorCode()===a.NO_ERROR,i=r.getStatus();if(!t||N(i,this.additionalRetryCodes_)&&this.retry){let t=r.getErrorCode()===a.ABORT;e(!1,new L(!1,null,t));return}let s=-1!==this.successCodes_.indexOf(i);e(!0,new L(s,r))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class L{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function U(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let t=0;t<e.length;t++)r.append(e[t]);return r.getBlob()}if(O())return new Blob(e);throw new g(o.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let j={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class B{constructor(e,t){this.data=e,this.contentType=t||null}}function M(e,t){switch(e){case j.RAW:return new B(F(t));case j.BASE64:case j.BASE64URL:return new B(H(e,t));case j.DATA_URL:return new B(function(e){let t=new W(e);return t.base64?H(j.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw T(j.DATA_URL,"Malformed data URL.")}return F(t)}(t.rest)}(t),function(e){let t=new W(e);return t.contentType}(t))}throw _()}function F(e){let t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if((64512&n)==55296){let i=r<e.length-1&&(64512&e.charCodeAt(r+1))==56320;if(i){let i=n,s=e.charCodeAt(++r);n=65536|(1023&i)<<10|1023&s,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function H(e,t){let r;switch(e){case j.BASE64:{let r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw T(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case j.BASE64URL:{let r=-1!==t.indexOf("+"),n=-1!==t.indexOf("/");if(r||n)throw T(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{r=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("undefined"==typeof atob)throw new g(o.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw T(e,"Invalid character found")}let n=new Uint8Array(r.length);for(let e=0;e<r.length;e++)n[e]=r.charCodeAt(e);return n}class W{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw T(j.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=t[1]||null;null!=r&&(this.base64=function(e,t){let r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){let r=0,n="";R(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(R(this.data_)){let r=this.data_,n=r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null;return null===n?null:new z(n)}{let r=new Uint8Array(this.data_.buffer,e,t-e);return new z(r,!0)}}static getBlob(...e){if(O()){let t=e.map(e=>e instanceof z?e.data_:e);return new z(U.apply(null,t))}{let t=e.map(e=>I(e)?M(j.RAW,e).data:e.data_),r=0;t.forEach(e=>{r+=e.byteLength});let n=new Uint8Array(r),i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)n[i++]=e[t]}),new z(n,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function $(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){return t}class G{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||q}}let X=null;function K(){if(X)return X;let e=[];e.push(new G("bucket")),e.push(new G("generation")),e.push(new G("metageneration")),e.push(new G("name","fullPath",!0));let t=new G("name");t.xform=function(e,t){return!I(t)||t.length<2?t:$(t)},e.push(t);let r=new G("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new G("timeCreated")),e.push(new G("updated")),e.push(new G("md5Hash",null,!0)),e.push(new G("cacheControl",null,!0)),e.push(new G("contentDisposition",null,!0)),e.push(new G("contentEncoding",null,!0)),e.push(new G("contentLanguage",null,!0)),e.push(new G("contentType",null,!0)),e.push(new G("metadata","customMetadata",!0)),X=e}function J(e,t,r){let n=V(t);return null===n?null:function(e,t,r){let n={};n.type="file";let i=r.length;for(let e=0;e<i;e++){let i=r[e];n[i.local]=i.xform(n,t[i.server])}return Object.defineProperty(n,"ref",{get:function(){let t=n.bucket,r=n.fullPath,i=new C(t,r);return e._makeStorageReference(i)}}),n}(e,n,r)}function Q(e,t){let r={},n=t.length;for(let i=0;i<n;i++){let n=t[i];n.writable&&(r[n.server]=e[n.local])}return JSON.stringify(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y="prefixes",Z="items";class ee{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){if(!e)throw _()}function er(e,t){return function(r,n){let i=J(e,n,t);return et(null!==i),i}}function en(e){return function(t,r){var n,i;let s;return 401===t.getStatus()?s=t.getErrorText().includes("Firebase App Check token is invalid")?new g(o.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new g(o.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,s=new g(o.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,s=new g(o.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}}function ei(e){let t=en(e);return function(r,n){let i=t(r,n);if(404===r.getStatus()){var s;s=e.path,i=new g(o.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")}return i.serverResponse=n.serverResponse,i}}function es(e,t,r){let n=t.fullServerUrl(),i=k(n,e.host,e._protocol),s=e.maxOperationRetryTime,o=new ee(i,"GET",er(e,r),s);return o.errorHandler=ei(t),o}function eo(e,t,r){let n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),!n.contentType&&(n.contentType=t&&t.type()||"application/octet-stream"),n}class ea{constructor(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}}function eh(e,t){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){et(!1)}return et(!!r&&-1!==(t||["active"]).indexOf(r)),r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function eu(e){switch(e){case"running":case"pausing":case"canceling":return el.RUNNING;case"paused":return el.PAUSED;case"success":return el.SUCCESS;case"canceled":return el.CANCELED;default:return el.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,r){"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=r?r:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class ef{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=a.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=a.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=a.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n){if(this.sent_)throw S("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw S("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw S("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw S("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw S("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class eg extends ef{initXhr(){this.xhr_.responseType="text"}}function ep(){return new eg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=K(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(o.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let t=this.isExponentialBackoffExpired();if(N(e.status,[])){if(t)e=m();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(o.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,i){let s=t.bucketOnlyServerUrl(),o=eo(t,n,i),a={name:o.fullPath},h=k(s,e.host,e._protocol),l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=Q(o,r),c=e.maxUploadRetryTime,d=new ee(h,"POST",function(e){let t;eh(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){et(!1)}return et(I(t)),t},c);return d.urlParams=a,d.headers=l,d.body=u,d.errorHandler=en(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,ep,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,r)=>{let n=function(e,t,r,n){let i=e.maxUploadRetryTime,s=new ee(r,"POST",function(e){let t=eh(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){et(!1)}r||et(!1);let i=Number(r);return et(!isNaN(i)),new ea(i,n.size(),"final"===t)},i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=en(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(n,ep,t,r);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new ea(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((n,i)=>{let s;try{s=function(e,t,r,n,i,s,a,h){let l=new ea(0,0);if(a?(l.current=a.current,l.total=a.total):(l.current=0,l.total=n.size()),n.size()!==l.total)throw new g(o.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");let u=l.total-l.current,c=u;i>0&&(c=Math.min(c,i));let d=l.current,f=d+c,p="";p=0===c?"finalize":u===c?"upload, finalize":"upload";let _={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},m=n.slice(d,f);if(null===m)throw b();let v=t.maxUploadRetryTime,y=new ee(r,"POST",function(e,r){let i;let o=eh(e,["active","final"]),a=l.current+c,h=n.size();return i="final"===o?er(t,s)(e,r):null,new ea(a,h,"final"===o,i)},v);return y.headers=_,y.body=m.uploadData(),y.progressCallback=h||null,y.errorHandler=en(e),y}(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){this._error=e,this._transition("error");return}let a=this._ref.storage._makeRequest(s,ep,n,i,!1);this._request=a,a.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){let e=262144*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let r=es(this._ref.storage,this._ref._location,this._mappings),n=this._ref.storage._makeRequest(r,ep,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,i){let s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;let h=eo(t,n,i),l=Q(h,r),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+a+"\r\nContent-Type: "+h.contentType+"\r\n\r\n",c=z.getBlob(u,n,"\r\n--"+a+"--");if(null===c)throw b();let d={name:h.fullPath},f=k(s,e.host,e._protocol),g=e.maxUploadRetryTime,p=new ee(f,"POST",er(e,r),g);return p.urlParams=d,p.headers=o,p.body=c.uploadData(),p.errorHandler=en(t),p}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,ep,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=v(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=eu(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,n){let i=new ec(t||void 0,r||void 0,n||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();let e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(eu(this._state)){case el.SUCCESS:ed(this._resolve.bind(null,this.snapshot))();break;case el.CANCELED:case el.ERROR:let t=this._reject;ed(t.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){let t=eu(this._state);switch(t){case el.RUNNING:case el.PAUSED:e.next&&ed(e.next.bind(e,this.snapshot))();break;case el.SUCCESS:e.complete&&ed(e.complete.bind(e))();break;case el.CANCELED:case el.ERROR:default:e.error&&ed(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this._service=e,t instanceof C?this._location=t:this._location=C.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new em(e,t)}get root(){let e=new C(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let r=e.slice(0,t);return r}(this._location.path);if(null===e)return null;let t=new C(this._location.bucket,e);return new em(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw E(e)}}async function ev(e,t,r){let n=await eb(e,{pageToken:r});t.prefixes.push(...n.prefixes),t.items.push(...n.items),null!=n.nextPageToken&&await ev(e,t,n.nextPageToken)}function eb(e,t){null!=t&&"number"==typeof t.maxResults&&D("options.maxResults",1,1e3,t.maxResults);let r=t||{},n=function(e,t,r,n,i){var s;let o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",r&&r.length>0&&(o.delimiter=r),n&&(o.pageToken=n),i&&(o.maxResults=i);let a=t.bucketOnlyServerUrl(),h=k(a,e.host,e._protocol),l=e.maxOperationRetryTime,u=new ee(h,"GET",(s=t.bucket,function(t,r){let n=function(e,t,r){let n=V(r);return null===n?null:function(e,t,r){let n={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r[Y])for(let i of r[Y]){let r=i.replace(/\/$/,""),s=e._makeStorageReference(new C(t,r));n.prefixes.push(s)}if(r[Z])for(let i of r[Z]){let r=e._makeStorageReference(new C(t,i.name));n.items.push(r)}return n}(e,t,n)}(e,s,r);return et(null!==n),n}),l);return u.urlParams=o,u.errorHandler=en(t),u}(e.storage,e._location,"/",r.pageToken,r.maxResults);return e.storage.makeRequestWithTokens(n,ep)}function ey(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new C(e._location.bucket,r);return new em(e.storage,n)}function ew(e,t){let r=null==t?void 0:t[f];return null==r?null:C.makeFromBucketSpec(r,e)}class eE{constructor(e,t,r,n,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=d,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=C.makeFromBucketSpec(n,this._host):this._bucket=ew(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=C.makeFromBucketSpec(this._url,e):this._bucket=ew(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){D("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){D("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new em(this,e)}_makeRequest(e,t,r,n,i=!0){if(this._deleted)return new A(w());{let s=function(e,t,r,n,i,s,o=!0){let a=x(e.urlParams),h=e.url+a,l=Object.assign({},e.headers);return t&&(l["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(l.Authorization="Firebase "+r),l["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),null!==n&&(l["X-Firebase-AppCheck"]=n),new P(h,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}(e,this._appId,r,n,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}let eT="@firebase/storage",eS="0.11.2";function eC(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,r){if(t instanceof eE){if(null==t._bucket)throw new g(o.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+f+"' property when initializing the app?");let n=new em(t,t._bucket);return null!=r?e(n,r):n}return void 0!==r?ey(t,r):t}(e,t);if(e instanceof eE)return new em(e,t);throw y("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,u.m9)(e),t)}(0,l._registerComponent)(new c.wA("storage",function(e,{instanceIdentifier:t}){let r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new eE(r,n,i,t,l.SDK_VERSION)},"PUBLIC").setMultipleInstances(!0)),(0,l.registerVersion)(eT,eS,""),(0,l.registerVersion)(eT,eS,"esm2017");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t,r){this._delegate=e,this.task=t,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new eA(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(t=>{if(e)return e(new eA(t,this,this._ref))},t)}on(e,t,r,n){let i;return t&&(i="function"==typeof t?e=>t(new eA(e,this,this._ref)):{next:t.next?e=>t.next(new eA(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,r||void 0,n||void 0)}}class eR{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new eO(e,this._service))}get items(){return this._delegate.items.map(e=>new eO(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){let t=ey(this._delegate,e);return new eO(t,this.storage)}get root(){return new eO(this._delegate.root,this.storage)}get parent(){let e=this._delegate.parent;return null==e?null:new eO(e,this.storage)}put(e,t){var r,n;return this._throwIfRoot("put"),new eI((r=this._delegate,(n=r=(0,u.m9)(r))._throwIfRoot("uploadBytesResumable"),new e_(n,new z(e),t)),this)}putString(e,t=j.RAW,r){this._throwIfRoot("putString");let n=M(t,e),i=Object.assign({},r);return null==i.contentType&&null!=n.contentType&&(i.contentType=n.contentType),new eI(new e_(this._delegate,new z(n.data,!0),i),this)}listAll(){var e;return(e=this._delegate,function(e){let t={prefixes:[],items:[]};return ev(e,t).then(()=>t)}(e=(0,u.m9)(e))).then(e=>new eR(e,this.storage))}list(e){var t,r;return(t=this._delegate,r=e||void 0,eb(t=(0,u.m9)(t),r)).then(e=>new eR(e,this.storage))}getMetadata(){var e;return e=this._delegate,function(e){e._throwIfRoot("getMetadata");let t=es(e.storage,e._location,K());return e.storage.makeRequestWithTokens(t,ep)}(e=(0,u.m9)(e))}updateMetadata(e){var t;return t=this._delegate,function(e,t){e._throwIfRoot("updateMetadata");let r=function(e,t,r,n){let i=t.fullServerUrl(),s=k(i,e.host,e._protocol),o=Q(r,n),a=e.maxOperationRetryTime,h=new ee(s,"PATCH",er(e,n),a);return h.headers={"Content-Type":"application/json; charset=utf-8"},h.body=o,h.errorHandler=ei(t),h}(e.storage,e._location,t,K());return e.storage.makeRequestWithTokens(r,ep)}(t=(0,u.m9)(t),e)}getDownloadURL(){var e;return e=this._delegate,function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){let n=t.fullServerUrl(),i=k(n,e.host,e._protocol),s=e.maxOperationRetryTime,o=new ee(i,"GET",function(t,n){let i=J(e,n,r);return et(null!==i),function(e,t,r,n){let i=V(t);if(null===i||!I(i.downloadTokens))return null;let s=i.downloadTokens;if(0===s.length)return null;let o=encodeURIComponent,a=s.split(","),h=a.map(t=>{let i=e.bucket,s=e.fullPath,a="/b/"+o(i)+"/o/"+o(s),h=k(a,r,n),l=x({alt:"media",token:t});return h+l});return h[0]}(i,n,e.host,e._protocol)},s);return o.errorHandler=ei(t),o}(e.storage,e._location,K());return e.storage.makeRequestWithTokens(t,ep).then(e=>{if(null===e)throw new g(o.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}(e=(0,u.m9)(e))}delete(){var e;return this._throwIfRoot("delete"),e=this._delegate,function(e){e._throwIfRoot("deleteObject");let t=function(e,t){let r=t.fullServerUrl(),n=k(r,e.host,e._protocol),i=e.maxOperationRetryTime,s=new ee(n,"DELETE",function(e,t){},i);return s.successCodes=[200,204],s.errorHandler=ei(t),s}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ep)}(e=(0,u.m9)(e))}_throwIfRoot(e){if(""===this._delegate._location.path)throw E(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(ek(e))throw y("ref() expected a child path but got a URL, use refFromURL instead.");return new eO(eC(this._delegate,e),this)}refFromURL(e){if(!ek(e))throw y("refFromURL() expected a full URL but got a child path, use ref() instead.");try{C.makeFromUrl(e,this._delegate.host)}catch(e){throw y("refFromUrl() expected a valid full URL but got an invalid one.")}return new eO(eC(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,r={}){!function(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:i}=n;i&&(e._overrideAuthToken="string"==typeof i?i:(0,u.Sg)(i,e.app.options.projectId))}(e,t,r,n)}(this._delegate,e,t,r)}}function ek(e){return/^[A-Za-z]+:\/\//.test(e)}(s=h.Z).INTERNAL.registerComponent(new c.wA("storage-compat",function(e,{instanceIdentifier:t}){let r=e.getProvider("app-compat").getImmediate(),n=e.getProvider("storage").getImmediate({identifier:t}),i=new eD(r,n);return i},"PUBLIC").setServiceProps({TaskState:el,TaskEvent:{STATE_CHANGED:"state_changed"},StringFormat:j,Storage:eD,Reference:eO}).setMultipleInstances(!0)),s.registerVersion("@firebase/storage-compat","0.3.2")}}]);