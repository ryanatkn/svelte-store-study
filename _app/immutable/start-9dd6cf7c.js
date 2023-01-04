import{S as nt,i as rt,n as at,s as ot,e as T,c as st,a as F,g as Z,t as U,b as Q,d as D,f as B,h as it,o as Ie,j as lt,k as ct,l as ft,m as Ee,p as W,q as ut,r as dt,u as pt,v as J,w as G,x as se,y as K,z,A as ue}from"./chunks/index-15a2e370.js";import{S as xe,I as H,g as We,f as ke,s as X,a as Le,i as ht,P as He,b as mt,c as _t}from"./chunks/singletons-ea8bd884.js";import{s as gt}from"./chunks/paths-6cd3a76e.js";function wt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function yt(r){return r.split("%25").map(decodeURI).join("%25")}function bt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(r,e){const n=new URL(r);for(const o of vt){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return kt(n),n}function kt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const $t="/__data.json";function Rt(r){return r.replace(/\/$/,"")+$t}function St(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ae.delete(o)}return he(r,e)};const ae=new Map;function Ot(r,e){const n=et(r,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:a,...l}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ae.set(n,{body:a,init:l,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,l))}return he(r,e)}function It(r,e,n){if(ae.size>0){const o=et(r,n),a=ae.get(o);if(a){if(performance.now()<a.ttl)return new Response(a.body,a.init);ae.delete(o)}}return he(e,n)}function et(r,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${St(e.body)}"]`),o}const Lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${jt(r).map(o=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const l=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(l)return e.push({name:l[1],matcher:l[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((f,p)=>{if(p%2){if(f.startsWith("x+"))return $e(String.fromCharCode(parseInt(f.slice(2),16)));if(f.startsWith("u+"))return $e(String.fromCharCode(...f.slice(2).split("-").map(M=>parseInt(M,16))));const g=Lt.exec(f);if(!g)throw new Error(`Invalid param: ${f}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,b,A,$,P]=g;return e.push({name:$,matcher:P,optional:!!b,rest:!!A,chained:A?p===1&&t[0]==="":!1}),A?"(.*?)":b?"([^/]*)?":"([^/]+?)"}return $e(f)}).join("")}).join("")}/?$`),params:e}}function At(r){return!/^\([^)]+\)$/.test(r)}function jt(r){return r.slice(1).split("/").filter(At)}function Nt(r,e,n){const o={},a=r.slice(1);let l="";for(let t=0;t<e.length;t+=1){const c=e[t];let f=a[t];if(c.chained&&c.rest&&l&&(f=f?l+"/"+f:l),l="",f===void 0)c.rest&&(o[c.name]="");else{if(c.matcher&&!n[c.matcher](f)){if(c.optional&&c.chained){let p=a.indexOf(void 0,t);if(p===-1){const g=e[t+1];if((g==null?void 0:g.rest)&&g.chained)l=f;else return}for(;p>=t;)a[p]=a[p-1],p-=1;continue}return}o[c.name]=f}}if(!l)return o}function $e(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([c,[f,p,g]])=>{const{pattern:b,params:A}=Pt(c),$={id:c,exec:P=>{const M=b.exec(P);if(M)return Nt(M,A,o)},errors:[1,...g||[]].map(P=>r[P]),layouts:[0,...p||[]].map(t),leaf:l(f)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function l(c){const f=c<0;return f&&(c=~c),[f,r[c]]}function t(c){return c===void 0?c:[a.has(c),r[c]]}}function Ut(r){let e,n,o;var a=r[0][0];function l(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=J(a,l(r))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&se(e.$$.fragment,t),n=T()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const f={};if(c&4&&(f.data=t[2]),c&2&&(f.form=t[1]),a!==(a=t[0][0])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=J(a,l(t)),G(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&z(e,t)}}}function Dt(r){let e,n,o;var a=r[0][0];function l(t){return{props:{data:t[2],$$slots:{default:[Bt]},$$scope:{ctx:t}}}}return a&&(e=J(a,l(r))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&se(e.$$.fragment,t),n=T()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const f={};if(c&4&&(f.data=t[2]),c&1051&&(f.$$scope={dirty:c,ctx:t}),a!==(a=t[0][0])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=J(a,l(t)),G(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&z(e,t)}}}function Vt(r){let e,n,o;var a=r[0][1];function l(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=J(a,l(r))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&se(e.$$.fragment,t),n=T()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const f={};if(c&8&&(f.data=t[3]),c&2&&(f.form=t[1]),a!==(a=t[0][1])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=J(a,l(t)),G(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&z(e,t)}}}function qt(r){let e,n,o;var a=r[0][1];function l(t){return{props:{data:t[3],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return a&&(e=J(a,l(r))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&se(e.$$.fragment,t),n=T()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const f={};if(c&8&&(f.data=t[3]),c&1043&&(f.$$scope={dirty:c,ctx:t}),a!==(a=t[0][1])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=J(a,l(t)),G(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&z(e,t)}}}function Ct(r){let e,n,o;var a=r[0][2];function l(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=J(a,l(r))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&se(e.$$.fragment,t),n=T()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const f={};if(c&16&&(f.data=t[4]),c&2&&(f.form=t[1]),a!==(a=t[0][2])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=J(a,l(t)),G(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&z(e,t)}}}function Bt(r){let e,n,o,a;const l=[qt,Vt],t=[];function c(f,p){return f[0][2]?0:1}return e=c(r),n=t[e]=l[e](r),{c(){n.c(),o=T()},l(f){n.l(f),o=T()},m(f,p){t[e].m(f,p),F(f,o,p),a=!0},p(f,p){let g=e;e=c(f),e===g?t[e].p(f,p):(Z(),U(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(f,p):(n=t[e]=l[e](f),n.c()),D(n,1),n.m(o.parentNode,o))},i(f){a||(D(n),a=!0)},o(f){U(n),a=!1},d(f){t[e].d(f),f&&B(o)}}}function Me(r){let e,n=r[6]&&Ye(r);return{c(){e=lt("div"),n&&n.c(),this.h()},l(o){e=ct(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=ft(e);n&&n.l(a),a.forEach(B),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),W(e,"position","absolute"),W(e,"left","0"),W(e,"top","0"),W(e,"clip","rect(0 0 0 0)"),W(e,"clip-path","inset(50%)"),W(e,"overflow","hidden"),W(e,"white-space","nowrap"),W(e,"width","1px"),W(e,"height","1px")},m(o,a){F(o,e,a),n&&n.m(e,null)},p(o,a){o[6]?n?n.p(o,a):(n=Ye(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&B(e),n&&n.d()}}}function Ye(r){let e;return{c(){e=ut(r[7])},l(n){e=dt(n,r[7])},m(n,o){F(n,e,o)},p(n,o){o&128&&pt(e,n[7])},d(n){n&&B(e)}}}function Ft(r){let e,n,o,a,l;const t=[Dt,Ut],c=[];function f(g,b){return g[0][1]?0:1}e=f(r),n=c[e]=t[e](r);let p=r[5]&&Me(r);return{c(){n.c(),o=ot(),p&&p.c(),a=T()},l(g){n.l(g),o=st(g),p&&p.l(g),a=T()},m(g,b){c[e].m(g,b),F(g,o,b),p&&p.m(g,b),F(g,a,b),l=!0},p(g,[b]){let A=e;e=f(g),e===A?c[e].p(g,b):(Z(),U(c[A],1,1,()=>{c[A]=null}),Q(),n=c[e],n?n.p(g,b):(n=c[e]=t[e](g),n.c()),D(n,1),n.m(o.parentNode,o)),g[5]?p?p.p(g,b):(p=Me(g),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null)},i(g){l||(D(n),l=!0)},o(g){U(n),l=!1},d(g){c[e].d(g),g&&B(o),p&&p.d(g),g&&B(a)}}}function Jt(r,e,n){let{stores:o}=e,{page:a}=e,{components:l}=e,{form:t}=e,{data_0:c=null}=e,{data_1:f=null}=e,{data_2:p=null}=e;it(o.page.notify);let g=!1,b=!1,A=null;return Ie(()=>{const $=o.page.subscribe(()=>{g&&(n(6,b=!0),n(7,A=document.title||"untitled page"))});return n(5,g=!0),$}),r.$$set=$=>{"stores"in $&&n(8,o=$.stores),"page"in $&&n(9,a=$.page),"components"in $&&n(0,l=$.components),"form"in $&&n(1,t=$.form),"data_0"in $&&n(2,c=$.data_0),"data_1"in $&&n(3,f=$.data_1),"data_2"in $&&n(4,p=$.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[l,t,c,f,p,g,b,A,o,a]}class Gt extends nt{constructor(e){super(),rt(this,e,Jt,Ft,at,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Kt="modulepreload",zt=function(r,e){return new URL(r,e).href},Xe={},C=function(e,n,o){if(!n||n.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=zt(l,o),l in Xe)return;Xe[l]=!0;const t=l.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!o)for(let g=a.length-1;g>=0;g--){const b=a[g];if(b.href===l&&(!t||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Kt,t||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),t)return new Promise((g,b)=>{p.addEventListener("load",g),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},Wt={},me=[()=>C(()=>import("./chunks/0-c2a7bb11.js"),["./chunks/0-c2a7bb11.js","./chunks/_layout-1daba58d.js","./components/pages/_layout.svelte-45bacb49.js","./chunks/index-15a2e370.js","./chunks/paths-6cd3a76e.js","./assets/_layout-7c4d4875.css"],import.meta.url),()=>C(()=>import("./chunks/1-307af21d.js"),["./chunks/1-307af21d.js","./components/error.svelte-0b92a705.js","./chunks/index-15a2e370.js","./chunks/stores-d49c9907.js","./chunks/singletons-ea8bd884.js","./chunks/index-9d447d19.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>C(()=>import("./chunks/2-bc07a623.js"),["./chunks/2-bc07a623.js","./components/pages/batch/_layout.svelte-dd9cee59.js","./chunks/index-15a2e370.js","./chunks/ExampleMenuLayout-f23904c9.js","./chunks/paths-6cd3a76e.js","./chunks/stores-d49c9907.js","./chunks/singletons-ea8bd884.js","./chunks/index-9d447d19.js","./assets/ExampleMenuLayout-7510cb72.css"],import.meta.url),()=>C(()=>import("./chunks/3-50b79b26.js"),["./chunks/3-50b79b26.js","./components/pages/counter/_layout.svelte-31a92491.js","./chunks/index-15a2e370.js","./chunks/ExampleMenuLayout-f23904c9.js","./chunks/paths-6cd3a76e.js","./chunks/stores-d49c9907.js","./chunks/singletons-ea8bd884.js","./chunks/index-9d447d19.js","./assets/ExampleMenuLayout-7510cb72.css"],import.meta.url),()=>C(()=>import("./chunks/4-7a084a02.js"),["./chunks/4-7a084a02.js","./components/pages/_page.svelte-0525540f.js","./chunks/index-15a2e370.js","./chunks/paths-6cd3a76e.js","./assets/_page-bfab1997.css"],import.meta.url),()=>C(()=>import("./chunks/5-028d508d.js"),["./chunks/5-028d508d.js","./components/pages/batch/_page.svelte-2f2521aa.js","./chunks/index-15a2e370.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>C(()=>import("./chunks/6-02f3501f.js"),["./chunks/6-02f3501f.js","./components/pages/batch/signals/_page.svelte-cd015971.js","./chunks/index-15a2e370.js","./chunks/signals-core.module-68cdaa66.js","./chunks/BatchExampleHistory-5cb725ac.js","./chunks/index-9d447d19.js","./assets/BatchExampleHistory-e09737dc.css"],import.meta.url),()=>C(()=>import("./chunks/7-416e39de.js"),["./chunks/7-416e39de.js","./components/pages/batch/tansu/_page.svelte-246fb1e3.js","./chunks/index-15a2e370.js","./chunks/index.es-8b952162.js","./chunks/BatchExampleHistory-5cb725ac.js","./chunks/index-9d447d19.js","./assets/BatchExampleHistory-e09737dc.css"],import.meta.url),()=>C(()=>import("./chunks/8-c2a1c0e0.js"),["./chunks/8-c2a1c0e0.js","./components/pages/counter/_page.svelte-59db0127.js","./chunks/index-15a2e370.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>C(()=>import("./chunks/9-cd07e82e.js"),["./chunks/9-cd07e82e.js","./components/pages/counter/signals/_page.svelte-f8a28f69.js","./chunks/index-15a2e370.js","./chunks/signals-core.module-68cdaa66.js"],import.meta.url),()=>C(()=>import("./chunks/10-0b70670d.js"),["./chunks/10-0b70670d.js","./components/pages/counter/svelte/_page.svelte-c8907077.js","./chunks/index-15a2e370.js","./chunks/index-9d447d19.js"],import.meta.url),()=>C(()=>import("./chunks/11-2e84ed5f.js"),["./chunks/11-2e84ed5f.js","./components/pages/counter/tansu/_page.svelte-aefada4b.js","./chunks/index-15a2e370.js","./chunks/index.es-8b952162.js"],import.meta.url)],Ht=[],Mt={"/":[4],"/batch":[5,[2]],"/batch/signals":[6,[2]],"/batch/tansu":[7,[2]],"/counter":[8,[3]],"/counter/signals":[9,[3]],"/counter/svelte":[10,[3]],"/counter/tansu":[11,[3]]},Yt={handleError:({error:r})=>{console.error(r)}};class Pe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ze{constructor(e,n){this.status=e,this.location=n}}async function Xt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Zt=-1,Qt=-2,xt=-3,en=-4,tn=-5,nn=-6;function rn(r){if(typeof r=="number")return o(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function o(a,l=!1){if(a===Zt)return;if(a===xt)return NaN;if(a===en)return 1/0;if(a===tn)return-1/0;if(a===nn)return-0;if(l)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const f=new Set;n[a]=f;for(let b=1;b<t.length;b+=1)f.add(o(t[b]));break;case"Map":const p=new Map;n[a]=p;for(let b=1;b<t.length;b+=2)p.set(o(t[b]),o(t[b+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let b=1;b<t.length;b+=2)g[t[b]]=o(t[b+1]);break}else{const c=new Array(t.length);n[a]=c;for(let f=0;f<t.length;f+=1){const p=t[f];p!==Qt&&(c[f]=o(p))}}else{const c={};n[a]=c;for(const f in t){const p=t[f];c[f]=o(p)}}return n[a]}return o(0)}const Re=Tt(me,Ht,Mt,Wt),Ae=me[0],je=me[1];Ae();je();let oe={};try{oe=JSON.parse(sessionStorage[xe])}catch{}function Se(r){oe[r]=Le()}function an({target:r,base:e}){var Ge;const n=[];let o=null;const a={before_navigate:[],after_navigate:[]};let l={branch:[],error:null,url:null},t=!1,c=!1,f=!0,p=!1,g=!1,b=!1,A=!1,$,P=(Ge=history.state)==null?void 0:Ge[H];P||(P=Date.now(),history.replaceState({...history.state,[H]:P},"",location.href));const M=oe[P];M&&(history.scrollRestoration="manual",scrollTo(M.x,M.y));let Y,Ne,ie;async function Te(){ie=ie||Promise.resolve(),await ie,ie=null;const s=new URL(location.href),i=ye(s,!0);o=null,await De(i,s,[])}async function _e(s,{noScroll:i=!1,replaceState:u=!1,keepFocus:d=!1,state:h={},invalidateAll:_=!1},m,v){return typeof s=="string"&&(s=new URL(s,We(document))),be({url:s,scroll:i?Le():null,keepfocus:d,redirect_chain:m,details:{state:h,replaceState:u},nav_token:v,accepted:()=>{_&&(A=!0)},blocked:()=>{},type:"goto"})}async function Ue(s){const i=ye(s,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${s}`);return o={id:i.id,promise:Ce(i).then(u=>(u.type==="loaded"&&u.state.error&&(o=null),u))},o.promise}async function le(...s){const u=Re.filter(d=>s.some(h=>d.exec(h))).map(d=>Promise.all([...d.layouts,d.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(u)}async function De(s,i,u,d,h={},_){var v,E;Ne=h;let m=s&&await Ce(s);if(m||(m=await Je(i,{id:null},await re(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(s==null?void 0:s.url)||i,Ne!==h)return!1;if(m.type==="redirect")if(u.length>10||u.includes(i.pathname))m=await ce({status:500,error:await re(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return _e(new URL(m.location,i).href,{},[...u,i.pathname],h),!1;else((E=(v=m.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await X.updated.check()&&await fe(i);if(n.length=0,A=!1,p=!0,d&&d.details){const{details:y}=d,k=y.replaceState?0:1;y.state[H]=P+=k,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(o=null,c){l=m.state,m.props.page&&(m.props.page.url=i);const y=pe();$.$set(m.props),y()}else Ve(m);if(d){const{scroll:y,keepfocus:k}=d;if(k||Oe(),await ue(),f){const S=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):S?S.scrollIntoView():scrollTo(0,0)}}else await ue();f=!0,m.props.page&&(Y=m.props.page),_&&_(),p=!1}function Ve(s){var h,_;l=s.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),Y=s.props.page;const u=pe();$=new Gt({target:r,props:{...s.props,stores:X},hydrate:!0}),u();const d={from:null,to:de("to",{params:l.params,route:{id:(_=(h=l.route)==null?void 0:h.id)!=null?_:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};a.after_navigate.forEach(m=>m(d)),c=!0}async function ee({url:s,params:i,branch:u,status:d,error:h,route:_,form:m}){var N;const v=u.filter(Boolean);let E="never";for(const O of u)(O==null?void 0:O.slash)!==void 0&&(E=O.slash);s.pathname=wt(s.pathname,E),s.search=s.search;const y={type:"loaded",state:{url:s,params:i,branch:u,error:h,route:_},props:{components:v.map(O=>O.node.component)}};m!==void 0&&(y.props.form=m);let k={},S=!Y;for(let O=0;O<v.length;O+=1){const j=v[O];k={...k,...j.data},(S||!l.branch.some(q=>q===j))&&(y.props[`data_${O}`]=k,S=S||Object.keys((N=j.data)!=null?N:{}).length>0)}if(S||(S=Object.keys(Y.data).length!==Object.keys(k).length),!l.url||s.href!==l.url.href||l.error!==h||m!==void 0||S){y.props.page={error:h,params:i,route:_,status:d,url:new URL(s),form:m,data:S?k:Y.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const O=(j,q)=>{Object.defineProperty(y.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${q}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return y}async function ge({loader:s,parent:i,url:u,params:d,route:h,server_data_node:_}){var y,k,S,V,N,O,j;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await s();if((y=E.shared)!=null&&y.load){let q=function(...w){for(const R of w){const{href:I}=new URL(R,u);v.dependencies.add(I)}};const te={route:{get id(){return v.route=!0,h.id}},params:new Proxy(d,{get:(w,R)=>(v.params.add(R),w[R])}),data:(k=_==null?void 0:_.data)!=null?k:null,url:Et(u,()=>{v.url=!0}),async fetch(w,R){let I;w instanceof Request?(I=w.url,R={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...R}):I=w;const L=new URL(I,u).href;return q(L),c?It(I,L,R):Ot(I,R)},setHeaders:()=>{},depends:q,parent(){return v.parent=!0,i()}};Object.defineProperties(te,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),m=(S=await E.shared.load.call(null,te))!=null?S:null,m=m?await Xt(m):null}return{node:E,loader:s,server:_,shared:(V=E.shared)!=null&&V.load?{type:"data",data:m,uses:v}:null,data:(N=m!=null?m:_==null?void 0:_.data)!=null?N:null,slash:(j=(O=E.shared)==null?void 0:O.trailingSlash)!=null?j:_==null?void 0:_.slash}}function qe(s,i,u,d,h){if(A)return!0;if(!d)return!1;if(d.parent&&s||d.route&&i||d.url&&u)return!0;for(const _ of d.params)if(h[_]!==l.params[_])return!0;for(const _ of d.dependencies)if(n.some(m=>m(new URL(_))))return!0;return!1}function we(s,i){var u,d;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((u=s.uses.dependencies)!=null?u:[]),params:new Set((d=s.uses.params)!=null?d:[]),parent:!!s.uses.parent,route:!!s.uses.route,url:!!s.uses.url},slash:s.slash}:(s==null?void 0:s.type)==="skip"&&i!=null?i:null}async function Ce({id:s,invalidating:i,url:u,params:d,route:h}){var te;if((o==null?void 0:o.id)===s)return o.promise;const{errors:_,layouts:m,leaf:v}=h,E=[...m,v];_.forEach(w=>w==null?void 0:w().catch(()=>{})),E.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const k=l.url?s!==l.url.pathname+l.url.search:!1,S=l.route?s!==l.route.id:!1,V=E.reduce((w,R,I)=>{var ne;const L=l.branch[I],x=!!(R!=null&&R[0])&&((L==null?void 0:L.loader)!==R[1]||qe(w.some(Boolean),S,k,(ne=L.server)==null?void 0:ne.uses,d));return w.push(x),w},[]);if(V.some(Boolean)){try{y=await Qe(u,V)}catch(w){return ce({status:500,error:await re(w,{url:u,params:d,route:{id:h.id}}),url:u,route:h})}if(y.type==="redirect")return y}const N=y==null?void 0:y.nodes;let O=!1;const j=E.map(async(w,R)=>{var ne;if(!w)return;const I=l.branch[R],L=N==null?void 0:N[R];if((!L||L.type==="skip")&&w[1]===(I==null?void 0:I.loader)&&!qe(O,S,k,(ne=I.shared)==null?void 0:ne.uses,d))return I;if(O=!0,(L==null?void 0:L.type)==="error")throw L;return ge({loader:w[1],url:u,params:d,route:h,parent:async()=>{var ze;const Ke={};for(let ve=0;ve<R;ve+=1)Object.assign(Ke,(ze=await j[ve])==null?void 0:ze.data);return Ke},server_data_node:we(L===void 0&&w[0]?{type:"skip"}:L!=null?L:null,I==null?void 0:I.server)})});for(const w of j)w.catch(()=>{});const q=[];for(let w=0;w<E.length;w+=1)if(E[w])try{q.push(await j[w])}catch(R){if(R instanceof Ze)return{type:"redirect",location:R.location};let I=500,L;N!=null&&N.includes(R)?(I=(te=R.status)!=null?te:I,L=R.error):R instanceof Pe?(I=R.status,L=R.body):L=await re(R,{params:d,url:u,route:{id:h.id}});const x=await Be(w,q,_);return x?await ee({url:u,params:d,branch:q.slice(0,x.idx).concat(x.node),status:I,error:L,route:h}):await Je(u,{id:h.id},L,I)}else q.push(void 0);return await ee({url:u,params:d,branch:q,status:200,error:null,route:h,form:i?void 0:null})}async function Be(s,i,u){for(;s--;)if(u[s]){let d=s;for(;!i[d];)d-=1;try{return{idx:d+1,node:{node:await u[s](),loader:u[s],data:{},server:null,shared:null}}}catch{continue}}}async function ce({status:s,error:i,url:u,route:d}){var y;const h={},_=await Ae();let m=null;if(_.server)try{const k=await Qe(u,[!0]);if(k.type!=="data"||k.nodes[0]&&k.nodes[0].type!=="data")throw 0;m=(y=k.nodes[0])!=null?y:null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||t)&&await fe(u)}const v=await ge({loader:Ae,url:u,params:h,route:d,parent:()=>Promise.resolve({}),server_data_node:we(m)}),E={node:await je(),loader:je,shared:null,server:null,data:null};return await ee({url:u,params:h,branch:[v,E],status:s,error:i,route:null})}function ye(s,i){if(ht(s,e))return;const u=yt(s.pathname.slice(e.length)||"/");for(const d of Re){const h=d.exec(u);if(h)return{id:s.pathname+s.search,invalidating:i,route:d,params:bt(h),url:s}}}function Fe({url:s,type:i,intent:u,delta:d}){var v,E,y,k,S;let h=!1;const _={from:de("from",{params:l.params,route:{id:(E=(v=l.route)==null?void 0:v.id)!=null?E:null},url:l.url}),to:de("to",{params:(y=u==null?void 0:u.params)!=null?y:null,route:{id:(S=(k=u==null?void 0:u.route)==null?void 0:k.id)!=null?S:null},url:s}),willUnload:!u,type:i};d!==void 0&&(_.delta=d);const m={..._,cancel:()=>{h=!0}};return g||a.before_navigate.forEach(V=>V(m)),h?null:_}async function be({url:s,scroll:i,keepfocus:u,redirect_chain:d,details:h,type:_,delta:m,nav_token:v,accepted:E,blocked:y}){const k=ye(s,!1),S=Fe({url:s,type:_,delta:m,intent:k});if(!S){y();return}Se(P),E(),g=!0,c&&X.navigating.set(S),await De(k,s,d,{scroll:i,keepfocus:u,details:h},v,()=>{g=!1,a.after_navigate.forEach(V=>V(S)),X.navigating.set(null)})}async function Je(s,i,u,d){return s.origin===location.origin&&s.pathname===location.pathname&&!t?await ce({status:d,error:u,url:s,route:i}):await fe(s)}function fe(s){return location.href=s.href,new Promise(()=>{})}function tt(){let s;r.addEventListener("mousemove",_=>{const m=_.target;clearTimeout(s),s=setTimeout(()=>{d(m,2)},20)});function i(_){d(_.composedPath()[0],1)}r.addEventListener("mousedown",i),r.addEventListener("touchstart",i,{passive:!0});const u=new IntersectionObserver(_=>{for(const m of _)m.isIntersecting&&(le(new URL(m.target.href).pathname),u.unobserve(m.target))},{threshold:0});function d(_,m){const{url:v,options:E,external:y}=ke(_,e);y||(m<=E.preload_data?Ue(v):m<=E.preload_code&&le(v.pathname))}function h(){u.disconnect();for(const _ of r.querySelectorAll("a")){const{url:m,external:v,options:E}=ke(_,e);v||(E.preload_code===He.viewport&&u.observe(_),E.preload_code===He.eager&&le(m.pathname))}}a.after_navigate.push(h),h()}return{after_navigate:s=>{Ie(()=>(a.after_navigate.push(s),()=>{const i=a.after_navigate.indexOf(s);a.after_navigate.splice(i,1)}))},before_navigate:s=>{Ie(()=>(a.before_navigate.push(s),()=>{const i=a.before_navigate.indexOf(s);a.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(p||!c)&&(f=!1)},goto:(s,i={})=>{if("keepfocus"in i&&!("keepFocus"in i))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in i&&!("noScroll"in i))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return _e(s,i,[])},invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")n.push(s);else{const{href:i}=new URL(s,location.href);n.push(u=>u.href===i)}return Te()},invalidateAll:()=>(A=!0,Te()),preload_data:async s=>{const i=new URL(s,We(document));await Ue(i)},preload_code:le,apply_action:async s=>{if(s.type==="error"){const i=new URL(location.href),{branch:u,route:d}=l;if(!d)return;const h=await Be(l.branch.length,u,d.errors);if(h){const _=await ee({url:i,params:l.params,branch:u.slice(0,h.idx).concat(h.node),status:500,error:s.error,route:d});l=_.state;const m=pe();$.$set(_.props),m(),ue().then(Oe)}}else if(s.type==="redirect")_e(s.location,{invalidateAll:!0},[]);else{const i={form:s.data,page:{...Y,form:s.data,status:s.status}},u=pe();$.$set(i),u(),s.type==="success"&&ue().then(Oe)}},_start_router:()=>{var s;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var d,h;let u=!1;if(!g){const _={from:de("from",{params:l.params,route:{id:(h=(d=l.route)==null?void 0:d.id)!=null?h:null},url:l.url}),to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};a.before_navigate.forEach(m=>m(_))}u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(P);try{sessionStorage[xe]=JSON.stringify(oe)}catch{}}}),(s=navigator.connection)!=null&&s.saveData||tt(),r.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:u,url:d,options:h,has:_}=ke(i.composedPath()[0],e);if(!u||!d||!(u instanceof SVGAElement)&&d.protocol!==location.protocol&&!(d.protocol==="https:"||d.protocol==="http:")||_.download)return;if(h.reload||_.rel_external||_.target){Fe({url:d,type:"link"})||i.preventDefault(),g=!0;return}const[v,E]=d.href.split("#");if(E!==void 0&&v===location.href.split("#")[0]){b=!0,Se(P),l.url=d,X.page.set({...Y,url:d}),X.page.notify();return}be({url:d,scroll:h.noscroll?Le():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{var u;if((u=i.state)!=null&&u[H]){if(i.state[H]===P)return;const d=i.state[H]-P;be({url:new URL(location.href),scroll:oe[i.state[H]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=i.state[H]},blocked:()=>{history.go(-d)},type:"popstate",delta:d})}}),addEventListener("hashchange",()=>{b&&(b=!1,history.replaceState({...history.state,[H]:++P},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&X.navigating.set(null)})},_hydrate:async({status:s,error:i,node_ids:u,params:d,route:h,data:_,form:m})=>{var y;t=!0;const v=new URL(location.href);let E;try{const k=u.map(async(S,V)=>{const N=_[V];return ge({loader:me[S],url:v,params:d,route:h,parent:async()=>{const O={};for(let j=0;j<V;j+=1)Object.assign(O,(await k[j]).data);return O},server_data_node:we(N)})});E=await ee({url:v,params:d,branch:await Promise.all(k),status:s,error:i,form:m,route:(y=Re.find(({id:S})=>S===h.id))!=null?y:null})}catch(k){if(k instanceof Ze){await fe(new URL(k.location,location.href));return}E=await ce({status:k instanceof Pe?k.status:500,error:await re(k,{url:v,params:d,route:h}),url:v,route:h})}Ve(E)}}}async function Qe(r,e){var l;const n=new URL(r);n.pathname=Rt(r.pathname);const o=await he(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),a=await o.json();if(!o.ok)throw new Error(a);return(l=a.nodes)==null||l.forEach(t=>{var c,f;(t==null?void 0:t.type)==="data"&&(t.data=rn(t.data),t.uses={dependencies:new Set((c=t.uses.dependencies)!=null?c:[]),params:new Set((f=t.uses.params)!=null?f:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function re(r,e){var n;return r instanceof Pe?r.body:(n=Yt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const on=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function de(r,e){for(const n of on)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function pe(){return()=>{}}function Oe(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function fn({env:r,hydrate:e,paths:n,target:o,version:a}){gt(n),_t(a);const l=an({target:o,base:n.base});mt({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{fn as start};