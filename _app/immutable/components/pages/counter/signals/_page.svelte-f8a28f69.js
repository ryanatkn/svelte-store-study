import{S as y,i as C,n as M,j as k,q as m,s as S,k as q,l as B,r as d,f as l,c as T,a as _,I as v,P as N,u as V,B as j,M as w}from"../../../../chunks/index-15a2e370.js";import{w as O,u as U}from"../../../../chunks/signals-core.module-68cdaa66.js";function h(i){let n,o,a,u,t,p,f,r,c,b,E,D;return{c(){n=k("div"),o=m("counter: "),a=m(i[1]),u=S(),t=k("div"),p=m("tripled: "),f=m(i[2]),r=S(),c=k("button"),b=m("increment counter")},l(e){n=q(e,"DIV",{});var s=B(n);o=d(s,"counter: "),a=d(s,i[1]),s.forEach(l),u=T(e),t=q(e,"DIV",{});var I=B(t);p=d(I,"tripled: "),f=d(I,i[2]),I.forEach(l),r=T(e),c=q(e,"BUTTON",{});var P=B(c);b=d(P,"increment counter"),P.forEach(l)},m(e,s){_(e,n,s),v(n,o),v(n,a),_(e,u,s),_(e,t,s),v(t,p),v(t,f),_(e,r,s),_(e,c,s),v(c,b),E||(D=N(c,"click",i[4]),E=!0)},p(e,[s]){s&2&&V(a,e[1]),s&4&&V(f,e[2])},i:j,o:j,d(e){e&&l(n),e&&l(u),e&&l(t),e&&l(r),e&&l(c),E=!1,D()}}}function z(i,n,o){let a,u;const t=U(0);w(i,t,r=>o(1,a=r));const p=O(()=>t.value*3);return w(i,p,r=>o(2,u=r)),[t,a,u,p,()=>{o(0,t.value++,t)}]}class G extends y{constructor(n){super(),C(this,n,z,h,M,{})}}export{G as default};