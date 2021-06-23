import{S as t,i as e,s as o,e as a,k as n,c as s,a as l,n as d,d as r,b as c,F as i,f as u,G as h,Q as f,R as m,T as v,U as p,V as x,W as g,X as y,N as b,t as w,P as E,g as j,Y as T,u as q,v as _,r as k,Z as M,_ as N,B as O,$ as U,H as F}from"../../chunks/vendor-033104bd.js";function P(t,{pending:e,error:o,result:a}){let n;async function s(s){const l=n={};s.preventDefault();const d=new FormData(t);e&&e(d,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:d});if(l!==n)return;e.ok?a(e,t):o?o(e,null,t):console.error(await e.text())}catch(r){if(!o)throw r;o(null,r,t)}}return t.addEventListener("submit",s),{destroy(){t.removeEventListener("submit",s)}}}function R(t,e,o){const a=t.slice();return a[6]=e[o],a[7]=e,a[8]=o,a}function B(t,e){let o,w,E,j,T,q,_,k,O,U,R,B,D,I,V,$,H,L,S,A,C,G,Q,W,X,Y,Z,z=F;function J(...t){return e[3](e[6],e[7],e[8],...t)}function K(){return e[4](e[6])}return{key:t,first:null,c(){o=a("div"),w=a("form"),E=a("input"),T=n(),q=a("button"),U=n(),R=a("form"),B=a("input"),I=n(),V=a("button"),H=n(),L=a("form"),S=a("button"),G=n(),this.h()},l(t){o=s(t,"DIV",{class:!0});var e=l(o);w=s(e,"FORM",{action:!0,method:!0});var a=l(w);E=s(a,"INPUT",{type:!0,name:!0,class:!0}),T=d(a),q=s(a,"BUTTON",{class:!0,"aria-label":!0}),l(q).forEach(r),a.forEach(r),U=d(e),R=s(e,"FORM",{class:!0,action:!0,method:!0});var n=l(R);B=s(n,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),I=d(n),V=s(n,"BUTTON",{class:!0,"aria-label":!0}),l(V).forEach(r),n.forEach(r),H=d(e),L=s(e,"FORM",{action:!0,method:!0});var c=l(L);S=s(c,"BUTTON",{class:!0,"aria-label":!0}),l(S).forEach(r),c.forEach(r),G=d(e),e.forEach(r),this.h()},h(){c(E,"type","hidden"),c(E,"name","done"),E.value=j=e[6].done?"":"true",c(E,"class","svelte-dmxqmd"),c(q,"class","toggle svelte-dmxqmd"),c(q,"aria-label",_="Mark todo as "+(e[6].done?"not done":"done")),c(w,"action",k="/todos/"+e[6].uid+".json?_method=patch"),c(w,"method","post"),c(B,"aria-label","Edit todo"),c(B,"type","text"),c(B,"name","text"),B.value=D=e[6].text,c(B,"class","svelte-dmxqmd"),c(V,"class","save svelte-dmxqmd"),c(V,"aria-label","Save todo"),c(R,"class","text svelte-dmxqmd"),c(R,"action",$="/todos/"+e[6].uid+".json?_method=patch"),c(R,"method","post"),c(S,"class","delete svelte-dmxqmd"),c(S,"aria-label","Delete todo"),c(L,"action",A="/todos/"+e[6].uid+".json?_method=delete"),c(L,"method","post"),c(o,"class","todo svelte-dmxqmd"),i(o,"done",e[6].done),this.first=o},m(t,a){u(t,o,a),h(o,w),h(w,E),h(w,T),h(w,q),h(o,U),h(o,R),h(R,B),h(R,I),h(R,V),h(o,H),h(o,L),h(L,S),h(o,G),X=!0,Y||(Z=[f(O=P.call(null,w,{pending:J,result:e[1]})),f(P.call(null,R,{result:e[1]})),f(C=P.call(null,L,{result:K}))],Y=!0)},p(t,a){e=t,(!X||1&a&&j!==(j=e[6].done?"":"true"))&&(E.value=j),(!X||1&a&&_!==(_="Mark todo as "+(e[6].done?"not done":"done")))&&c(q,"aria-label",_),(!X||1&a&&k!==(k="/todos/"+e[6].uid+".json?_method=patch"))&&c(w,"action",k),O&&m(O.update)&&1&a&&O.update.call(null,{pending:J,result:e[1]}),(!X||1&a&&D!==(D=e[6].text)&&B.value!==D)&&(B.value=D),(!X||1&a&&$!==($="/todos/"+e[6].uid+".json?_method=patch"))&&c(R,"action",$),(!X||1&a&&A!==(A="/todos/"+e[6].uid+".json?_method=delete"))&&c(L,"action",A),C&&m(C.update)&&1&a&&C.update.call(null,{result:K}),1&a&&i(o,"done",e[6].done)},r(){W=o.getBoundingClientRect()},f(){v(o),z(),p(o,W)},a(){z(),z=x(o,W,M,{duration:200})},i(t){X||(t&&g((()=>{Q||(Q=y(o,N,{start:.7},!0)),Q.run(1)})),X=!0)},o(t){t&&(Q||(Q=y(o,N,{start:.7},!1)),Q.run(0)),X=!1},d(t){t&&r(o),t&&Q&&Q.end(),Y=!1,b(Z)}}}function D(t){let e,o,i,v,p,x,g,y,b,M,N,F,D=[],I=new Map,V=t[0];const $=t=>t[6].uid;for(let a=0;a<V.length;a+=1){let e=R(t,V,a),o=$(e);I.set(o,D[a]=B(o,e))}return{c(){e=n(),o=a("div"),i=a("h1"),v=w("Todos"),p=n(),x=a("form"),g=a("input"),b=n();for(let t=0;t<D.length;t+=1)D[t].c();this.h()},l(t){E('[data-svelte="svelte-181o7gf"]',document.head).forEach(r),e=d(t),o=s(t,"DIV",{class:!0});var a=l(o);i=s(a,"H1",{});var n=l(i);v=j(n,"Todos"),n.forEach(r),p=d(a),x=s(a,"FORM",{class:!0,action:!0,method:!0});var c=l(x);g=s(c,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),c.forEach(r),b=d(a);for(let e=0;e<D.length;e+=1)D[e].l(a);a.forEach(r),this.h()},h(){document.title="Todos",c(g,"name","text"),c(g,"aria-label","Add todo"),c(g,"placeholder","+ tap to add a todo"),c(g,"class","svelte-dmxqmd"),c(x,"class","new svelte-dmxqmd"),c(x,"action","/todos.json"),c(x,"method","post"),c(o,"class","todos svelte-dmxqmd")},m(a,n){u(a,e,n),u(a,o,n),h(o,i),h(i,v),h(o,p),h(o,x),h(x,g),h(o,b);for(let t=0;t<D.length;t+=1)D[t].m(o,null);M=!0,N||(F=f(y=P.call(null,x,{result:t[2]})),N=!0)},p(t,[e]){if(y&&m(y.update)&&1&e&&y.update.call(null,{result:t[2]}),3&e){V=t[0],O();for(let t=0;t<D.length;t+=1)D[t].r();D=T(D,e,$,1,t,V,I,o,U,B,null,R);for(let t=0;t<D.length;t+=1)D[t].a();q()}},i(t){if(!M){for(let t=0;t<V.length;t+=1)_(D[t]);M=!0}},o(t){for(let e=0;e<D.length;e+=1)k(D[e]);M=!1},d(t){t&&r(e),t&&r(o);for(let e=0;e<D.length;e+=1)D[e].d();N=!1,F()}}}var I=function(t,e,o,a){return new(o||(o=Promise))((function(n,s){function l(t){try{r(a.next(t))}catch(e){s(e)}}function d(t){try{r(a.throw(t))}catch(e){s(e)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(l,d)}r((a=a.apply(t,e||[])).next())}))};const V=({fetch:t})=>I(void 0,void 0,void 0,(function*(){const e=yield t("/todos.json");if(e.ok){return{props:{todos:yield e.json()}}}const{message:o}=yield e.json();return{error:new Error(o)}}));function $(t,e,o){var a=this&&this.__awaiter||function(t,e,o,a){return new(o||(o=Promise))((function(n,s){function l(t){try{r(a.next(t))}catch(e){s(e)}}function d(t){try{r(a.throw(t))}catch(e){s(e)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(l,d)}r((a=a.apply(t,e||[])).next())}))};let{todos:n}=e;return t.$$set=t=>{"todos"in t&&o(0,n=t.todos)},[n,function(t){return a(this,void 0,void 0,(function*(){const e=yield t.json();o(0,n=n.map((t=>t.uid===e.uid?e:t)))}))},async(t,e)=>{const a=await t.json();o(0,n=[...n,a]),e.reset()},(t,e,a,s)=>{o(0,e[a].done=!!s.get("done"),n)},t=>{o(0,n=n.filter((e=>e.uid!==t.uid)))}]}export default class extends t{constructor(t){super(),e(this,t,$,D,o,{todos:0})}}export{V as load};
