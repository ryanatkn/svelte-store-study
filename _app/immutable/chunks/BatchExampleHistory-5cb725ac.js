import{w as I}from"./index-9d447d19.js";import{Q as N,S as H,i as L,n as T,j as m,q as g,s as b,k as d,l as p,r as A,f as _,c as v,m as q,a as x,I as u,B as E,O as M,u as $,C}from"./index-15a2e370.js";const F="Alyssa",w="Ben",O="Apple",R="Banana",G=i=>{const t=I([]),l=i.subscribe(o=>{t.update(r=>r.concat(j(o)))});return N(l),t},j=i=>({valid:D(i),value:i}),D=i=>{const[t,l]=i.split(" ");return t===F&&l===O||t===w&&l===R};function B(i,t,l){const o=i.slice();return o[2]=t[l],o}function S(i){let t;return{c(){t=g("\u26A0\uFE0F")},l(l){t=A(l,"\u26A0\uFE0F")},m(l,o){x(l,t,o)},d(l){l&&_(t)}}}function k(i){let t,l=i[2].value+"",o,r,c,a=!i[2].valid&&S();return{c(){t=m("li"),o=g(l),r=b(),a&&a.c(),c=b()},l(e){t=d(e,"LI",{});var s=p(t);o=A(s,l),r=v(s),a&&a.l(s),c=v(s),s.forEach(_)},m(e,s){x(e,t,s),u(t,o),u(t,r),a&&a.m(t,null),u(t,c)},p(e,s){s&2&&l!==(l=e[2].value+"")&&$(o,l),e[2].valid?a&&(a.d(1),a=null):a||(a=S(),a.c(),a.m(t,c))},d(e){e&&_(t),a&&a.d()}}}function Q(i){let t,l,o,r,c,a=i[1],e=[];for(let s=0;s<a.length;s+=1)e[s]=k(B(i,a,s));return{c(){t=m("section"),l=m("h2"),o=g("history"),r=b(),c=m("ul");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=d(s,"SECTION",{class:!0});var h=p(t);l=d(h,"H2",{});var n=p(l);o=A(n,"history"),n.forEach(_),r=v(h),c=d(h,"UL",{});var f=p(c);for(let y=0;y<e.length;y+=1)e[y].l(f);f.forEach(_),h.forEach(_),this.h()},h(){q(t,"class","markup svelte-1f1qmq8")},m(s,h){x(s,t,h),u(t,l),u(l,o),u(t,r),u(t,c);for(let n=0;n<e.length;n+=1)e[n].m(c,null)},p(s,[h]){if(h&2){a=s[1];let n;for(n=0;n<a.length;n+=1){const f=B(s,a,n);e[n]?e[n].p(f,h):(e[n]=k(f),e[n].c(),e[n].m(c,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=a.length}},i:E,o:E,d(s){s&&_(t),M(e,s)}}}function U(i,t,l){let o,r=E,c=()=>(r(),r=C(a,e=>l(1,o=e)),a);i.$$.on_destroy.push(()=>r());let{history:a}=t;return c(),i.$$set=e=>{"history"in e&&c(l(0,a=e.history))},[a,o]}class J extends H{constructor(t){super(),L(this,t,U,Q,T,{history:0})}}export{J as B,w as F,R as L,F as a,O as b,G as c};