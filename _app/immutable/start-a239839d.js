import{S as xe,i as et,s as tt,a as nt,e as C,c as rt,b as z,g as ue,t as F,d as pe,f as B,h as J,j as at,o as Re,k as ot,l as st,m as it,n as ve,p as D,q as lt,r as ct,u as ft,v as W,w as H,x as Le,y as Y,z as X,A as ie}from"./chunks/index-b1a93a0b.js";import{g as ze,f as Me,s as K,a as Oe,i as ut,b as pt}from"./chunks/singletons-34379dbe.js";import{_ as ee}from"./chunks/preload-helper-9b728935.js";import{s as ht}from"./chunks/paths-6cd3a76e.js";function dt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function mt(n){return n.split("%25").map(decodeURI).join("%25")}function _t(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const gt=["href","pathname","search","searchParams","toString","toJSON"];function wt(n,e){const t=new URL(n);for(const o of gt){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return yt(t),t}function yt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const bt="/__data.json";function vt(n){return n.replace(/\/$/,"")+bt}function Et(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;ne.delete(o)}return he(n,e)};const ne=new Map;function kt(n,e){const t=Ze(n,e),o=document.querySelector(t);if(o!=null&&o.textContent){const{body:s,...u}=JSON.parse(o.textContent),r=o.getAttribute("data-ttl");return r&&ne.set(t,{body:s,init:u,ttl:1e3*Number(r)}),Promise.resolve(new Response(s,u))}return he(n,e)}function St(n,e,t){if(ne.size>0){const o=Ze(n,t),s=ne.get(o);if(s){if(performance.now()<s.ttl)return new Response(s.body,s.init);ne.delete(o)}}return he(e,t)}function Ze(n,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${Et(e.body)}"]`),o}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${$t(n).map(o=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const r=o.split(/\[(.+?)\](?!\])/),c=r.map((m,_)=>{if(_%2){if(m.startsWith("x+"))return Ee(String.fromCharCode(parseInt(m.slice(2),16)));if(m.startsWith("u+"))return Ee(String.fromCharCode(...m.slice(2).split("-").map(q=>parseInt(q,16))));const w=Rt.exec(m);if(!w)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,S,U,L]=w;return e.push({name:U,matcher:L,optional:!!v,rest:!!S,chained:S?_===1&&r[0]==="":!1}),S?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return Ee(m)}).join("");return"/"+c}).join("")}/?$`),params:e}}function It(n){return!/^\([^)]+\)$/.test(n)}function $t(n){return n.slice(1).split("/").filter(It)}function jt(n,e,t){const o={},s=n.slice(1);let u="";for(let r=0;r<e.length;r+=1){const c=e[r];let m=s[r];if(c.chained&&c.rest&&u&&(m=m?u+"/"+m:u),u="",m===void 0)c.rest&&(o[c.name]="");else{if(c.matcher&&!t[c.matcher](m)){if(c.optional&&c.chained){let _=s.indexOf(void 0,r);if(_===-1){const w=e[r+1];if((w==null?void 0:w.rest)&&w.chained)u=m;else return}for(;_>=r;)s[_]=s[_-1],_-=1;continue}return}o[c.name]=m}}if(!u)return o}function Ee(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Lt(n,e,t,o){const s=new Set(e);return Object.entries(t).map(([c,[m,_,w]])=>{const{pattern:v,params:S}=Ot(c),U={id:c,exec:L=>{const q=v.exec(L);if(q)return jt(q,S,o)},errors:[1,...w||[]].map(L=>n[L]),layouts:[0,..._||[]].map(r),leaf:u(m)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function u(c){const m=c<0;return m&&(c=~c),[m,n[c]]}function r(c){return c===void 0?c:[s.has(c),n[c]]}}function At(n){let e,t,o;var s=n[0][0];function u(r){return{props:{data:r[2],form:r[1]}}}return s&&(e=W(s,u(n))),{c(){e&&H(e.$$.fragment),t=C()},l(r){e&&Le(e.$$.fragment,r),t=C()},m(r,c){e&&Y(e,r,c),z(r,t,c),o=!0},p(r,c){const m={};if(c&4&&(m.data=r[2]),c&2&&(m.form=r[1]),s!==(s=r[0][0])){if(e){ue();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),pe()}s?(e=W(s,u(r)),H(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(m)},i(r){o||(e&&B(e.$$.fragment,r),o=!0)},o(r){e&&F(e.$$.fragment,r),o=!1},d(r){r&&J(t),e&&X(e,r)}}}function Pt(n){let e,t,o;var s=n[0][0];function u(r){return{props:{data:r[2],$$slots:{default:[Nt]},$$scope:{ctx:r}}}}return s&&(e=W(s,u(n))),{c(){e&&H(e.$$.fragment),t=C()},l(r){e&&Le(e.$$.fragment,r),t=C()},m(r,c){e&&Y(e,r,c),z(r,t,c),o=!0},p(r,c){const m={};if(c&4&&(m.data=r[2]),c&523&&(m.$$scope={dirty:c,ctx:r}),s!==(s=r[0][0])){if(e){ue();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),pe()}s?(e=W(s,u(r)),H(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(m)},i(r){o||(e&&B(e.$$.fragment,r),o=!0)},o(r){e&&F(e.$$.fragment,r),o=!1},d(r){r&&J(t),e&&X(e,r)}}}function Nt(n){let e,t,o;var s=n[0][1];function u(r){return{props:{data:r[3],form:r[1]}}}return s&&(e=W(s,u(n))),{c(){e&&H(e.$$.fragment),t=C()},l(r){e&&Le(e.$$.fragment,r),t=C()},m(r,c){e&&Y(e,r,c),z(r,t,c),o=!0},p(r,c){const m={};if(c&8&&(m.data=r[3]),c&2&&(m.form=r[1]),s!==(s=r[0][1])){if(e){ue();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),pe()}s?(e=W(s,u(r)),H(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(m)},i(r){o||(e&&B(e.$$.fragment,r),o=!0)},o(r){e&&F(e.$$.fragment,r),o=!1},d(r){r&&J(t),e&&X(e,r)}}}function We(n){let e,t=n[5]&&He(n);return{c(){e=ot("div"),t&&t.c(),this.h()},l(o){e=st(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=it(e);t&&t.l(s),s.forEach(J),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(o,s){z(o,e,s),t&&t.m(e,null)},p(o,s){o[5]?t?t.p(o,s):(t=He(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&J(e),t&&t.d()}}}function He(n){let e;return{c(){e=lt(n[6])},l(t){e=ct(t,n[6])},m(t,o){z(t,e,o)},p(t,o){o&64&&ft(e,t[6])},d(t){t&&J(e)}}}function Ut(n){let e,t,o,s,u;const r=[Pt,At],c=[];function m(w,v){return w[0][1]?0:1}e=m(n),t=c[e]=r[e](n);let _=n[4]&&We(n);return{c(){t.c(),o=nt(),_&&_.c(),s=C()},l(w){t.l(w),o=rt(w),_&&_.l(w),s=C()},m(w,v){c[e].m(w,v),z(w,o,v),_&&_.m(w,v),z(w,s,v),u=!0},p(w,[v]){let S=e;e=m(w),e===S?c[e].p(w,v):(ue(),F(c[S],1,1,()=>{c[S]=null}),pe(),t=c[e],t?t.p(w,v):(t=c[e]=r[e](w),t.c()),B(t,1),t.m(o.parentNode,o)),w[4]?_?_.p(w,v):(_=We(w),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(w){u||(B(t),u=!0)},o(w){F(t),u=!1},d(w){c[e].d(w),w&&J(o),_&&_.d(w),w&&J(s)}}}function Tt(n,e,t){let{stores:o}=e,{page:s}=e,{components:u}=e,{form:r}=e,{data_0:c=null}=e,{data_1:m=null}=e;at(o.page.notify);let _=!1,w=!1,v=null;return Re(()=>{const S=o.page.subscribe(()=>{_&&(t(5,w=!0),t(6,v=document.title||"untitled page"))});return t(4,_=!0),S}),n.$$set=S=>{"stores"in S&&t(7,o=S.stores),"page"in S&&t(8,s=S.page),"components"in S&&t(0,u=S.components),"form"in S&&t(1,r=S.form),"data_0"in S&&t(2,c=S.data_0),"data_1"in S&&t(3,m=S.data_1)},n.$$.update=()=>{n.$$.dirty&384&&o.page.set(s)},[u,r,c,m,_,w,v,o,s]}class Dt extends xe{constructor(e){super(),et(this,e,Tt,Ut,tt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Vt={},de=[()=>ee(()=>import("./chunks/0-59db9cbb.js"),["./chunks/0-59db9cbb.js","./chunks/_layout-22144c87.js","./components/pages/_layout.svelte-7adcd004.js","./chunks/index-b1a93a0b.js","./chunks/paths-6cd3a76e.js","./chunks/state-01fed7aa.js","./chunks/preload-helper-9b728935.js","./chunks/theme-0f508a1f.js","./assets/_layout-ff36eaba.css"],import.meta.url),()=>ee(()=>import("./chunks/1-63ace092.js"),["./chunks/1-63ace092.js","./components/error.svelte-fa6be18b.js","./chunks/index-b1a93a0b.js","./chunks/singletons-34379dbe.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>ee(()=>import("./chunks/2-8f315e75.js"),["./chunks/2-8f315e75.js","./components/pages/_page.svelte-ead8ee14.js","./chunks/index-b1a93a0b.js","./chunks/singletons-34379dbe.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>ee(()=>import("./chunks/3-f457820f.js"),["./chunks/3-f457820f.js","./components/pages/edit/_page.svelte-51d21a2b.js","./chunks/index-b1a93a0b.js","./chunks/state-01fed7aa.js","./chunks/preload-helper-9b728935.js","./chunks/theme-0f508a1f.js","./chunks/View-1e75241e.js","./assets/View-0c536ccf.css","./chunks/paths-6cd3a76e.js","./assets/_page-826332b8.css"],import.meta.url),()=>ee(()=>import("./chunks/4-449f51d8.js"),["./chunks/4-449f51d8.js","./components/pages/view/_page.svelte-7da57126.js","./chunks/index-b1a93a0b.js","./chunks/View-1e75241e.js","./chunks/state-01fed7aa.js","./chunks/preload-helper-9b728935.js","./assets/View-0c536ccf.css"],import.meta.url)],qt=[],Ct={"/":[2],"/edit":[3],"/view":[4]},Ft={handleError:({error:n})=>{console.error(n)}};class Ie{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,t){this.status=e,this.location=t}}async function Bt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([o,s])=>[o,await s])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Jt=-1,Gt=-2,Kt=-3,zt=-4,Mt=-5,Wt=-6;function Ht(n){if(typeof n=="number")return o(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,t=Array(e.length);function o(s,u=!1){if(s===Jt)return;if(s===Kt)return NaN;if(s===zt)return 1/0;if(s===Mt)return-1/0;if(s===Wt)return-0;if(u)throw new Error("Invalid input");if(s in t)return t[s];const r=e[s];if(!r||typeof r!="object")t[s]=r;else if(Array.isArray(r))if(typeof r[0]=="string")switch(r[0]){case"Date":t[s]=new Date(r[1]);break;case"Set":const m=new Set;t[s]=m;for(let v=1;v<r.length;v+=1)m.add(o(r[v]));break;case"Map":const _=new Map;t[s]=_;for(let v=1;v<r.length;v+=2)_.set(o(r[v]),o(r[v+1]));break;case"RegExp":t[s]=new RegExp(r[1],r[2]);break;case"Object":t[s]=Object(r[1]);break;case"BigInt":t[s]=BigInt(r[1]);break;case"null":const w=Object.create(null);t[s]=w;for(let v=1;v<r.length;v+=2)w[r[v]]=o(r[v+1]);break}else{const c=new Array(r.length);t[s]=c;for(let m=0;m<r.length;m+=1){const _=r[m];_!==Gt&&(c[m]=o(_))}}else{const c={};t[s]=c;for(const m in r){const _=r[m];c[m]=o(_)}}return t[s]}return o(0)}const Qe="sveltekit:scroll",V="sveltekit:index",le=Lt(de,qt,Ct,Vt),$e=de[0],je=de[1];$e();je();let re={};try{re=JSON.parse(sessionStorage[Qe])}catch{}function ke(n){re[n]=Oe()}function Yt({target:n,base:e}){var Je;const t=[];let o=null;const s={before_navigate:[],after_navigate:[]};let u={branch:[],error:null,url:null},r=!1,c=!1,m=!0,_=!1,w=!1,v=!1,S=!1,U,L=(Je=history.state)==null?void 0:Je[V];L||(L=Date.now(),history.replaceState({...history.state,[V]:L},"",location.href));const q=re[L];q&&(history.scrollRestoration="manual",scrollTo(q.x,q.y));let G,Ae,ae;async function Pe(){ae=ae||Promise.resolve(),await ae,ae=null;const a=new URL(location.href),l=we(a,!0);o=null,await Ue(l,a,[])}async function me(a,{noScroll:l=!1,replaceState:f=!1,keepFocus:i=!1,state:p={},invalidateAll:h=!1},d,E){return typeof a=="string"&&(a=new URL(a,ze(document))),ye({url:a,scroll:l?Oe():null,keepfocus:i,redirect_chain:d,details:{state:p,replaceState:f},nav_token:E,accepted:()=>{h&&(S=!0)},blocked:()=>{},type:"goto"})}async function Ne(a){const l=we(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:Ve(l).then(f=>(f.type==="loaded"&&f.state.error&&(o=null),f))},o.promise}async function Ue(a,l,f,i,p={},h){var E,k;Ae=p;let d=a&&await Ve(a);if(d||(d=await Be(l,{id:null},await te(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,Ae!==p)return!1;if(d.type==="redirect")if(f.length>10||f.includes(l.pathname))d=await oe({status:500,error:await te(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return me(new URL(d.location,l).href,{},[...f,l.pathname],p),!1;else((k=(E=d.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await K.updated.check()&&await se(l);if(t.length=0,S=!1,_=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[V]=L+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(o=null,c){u=d.state,d.props.page&&(d.props.page.url=l);const y=fe();U.$set(d.props),y()}else Te(d);if(i){const{scroll:y,keepfocus:b}=i;if(b||Se(),await ie(),m){const R=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):R?R.scrollIntoView():scrollTo(0,0)}}else await ie();m=!0,d.props.page&&(G=d.props.page),h&&h(),_=!1}function Te(a){var p,h;u=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),G=a.props.page;const f=fe();U=new Dt({target:n,props:{...a.props,stores:K},hydrate:!0}),f();const i={from:null,to:ce("to",{params:u.params,route:{id:(h=(p=u.route)==null?void 0:p.id)!=null?h:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};s.after_navigate.forEach(d=>d(i)),c=!0}async function Z({url:a,params:l,branch:f,status:i,error:p,route:h,form:d}){var P;const E=f.filter(Boolean);let k="never";for(const I of f)(I==null?void 0:I.slash)!==void 0&&(k=I.slash);a.pathname=dt(a.pathname,k),a.search=a.search;const y={type:"loaded",state:{url:a,params:l,branch:f,error:p,route:h},props:{components:E.map(I=>I.node.component)}};d!==void 0&&(y.props.form=d);let b={},R=!G;for(let I=0;I<E.length;I+=1){const A=E[I];b={...b,...A.data},(R||!u.branch.some(T=>T===A))&&(y.props[`data_${I}`]=b,R=R||Object.keys((P=A.data)!=null?P:{}).length>0)}if(R||(R=Object.keys(G.data).length!==Object.keys(b).length),!u.url||a.href!==u.url.href||u.error!==p||d!==void 0||R){y.props.page={error:p,params:l,route:h,status:i,url:a,form:d,data:R?b:G.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const I=(A,T)=>{Object.defineProperty(y.props.page,A,{get:()=>{throw new Error(`$page.${A} has been replaced by $page.url.${T}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return y}async function _e({loader:a,parent:l,url:f,params:i,route:p,server_data_node:h}){var y,b,R,N,P,I,A;let d=null;const E={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},k=await a();if((y=k.shared)!=null&&y.load){let T=function(...g){for(const O of g){const{href:$}=new URL(O,f);E.dependencies.add($)}};const Q={route:{get id(){return E.route=!0,p.id}},params:new Proxy(i,{get:(g,O)=>(E.params.add(O),g[O])}),data:(b=h==null?void 0:h.data)!=null?b:null,url:wt(f,()=>{E.url=!0}),async fetch(g,O){let $;g instanceof Request?($=g.url,O={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...O}):$=g;const j=new URL($,f).href;return T(j),c?St($,j,O):kt($,O)},setHeaders:()=>{},depends:T,parent(){return E.parent=!0,l()}};Object.defineProperties(Q,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),d=(R=await k.shared.load.call(null,Q))!=null?R:null,d=d?await Bt(d):null}return{node:k,loader:a,server:h,shared:(N=k.shared)!=null&&N.load?{type:"data",data:d,uses:E}:null,data:(P=d!=null?d:h==null?void 0:h.data)!=null?P:null,slash:(A=(I=k.shared)==null?void 0:I.trailingSlash)!=null?A:h==null?void 0:h.slash}}function De(a,l,f,i,p){if(S)return!0;if(!i)return!1;if(i.parent&&a||i.route&&l||i.url&&f)return!0;for(const h of i.params)if(p[h]!==u.params[h])return!0;for(const h of i.dependencies)if(t.some(d=>d(new URL(h))))return!0;return!1}function ge(a,l){var f,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((f=a.uses.dependencies)!=null?f:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Ve({id:a,invalidating:l,url:f,params:i,route:p}){var Q;if((o==null?void 0:o.id)===a)return o.promise;const{errors:h,layouts:d,leaf:E}=p,k=[...d,E];h.forEach(g=>g==null?void 0:g().catch(()=>{})),k.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let y=null;const b=u.url?a!==u.url.pathname+u.url.search:!1,R=u.route?a!==u.route.id:!1,N=k.reduce((g,O,$)=>{var x;const j=u.branch[$],M=!!(O!=null&&O[0])&&((j==null?void 0:j.loader)!==O[1]||De(g.some(Boolean),R,b,(x=j.server)==null?void 0:x.uses,i));return g.push(M),g},[]);if(N.some(Boolean)){try{y=await Xe(f,N)}catch(g){return oe({status:500,error:await te(g,{url:f,params:i,route:{id:p.id}}),url:f,route:p})}if(y.type==="redirect")return y}const P=y==null?void 0:y.nodes;let I=!1;const A=k.map(async(g,O)=>{var x;if(!g)return;const $=u.branch[O],j=P==null?void 0:P[O];if((!j||j.type==="skip")&&g[1]===($==null?void 0:$.loader)&&!De(I,R,b,(x=$.shared)==null?void 0:x.uses,i))return $;if(I=!0,(j==null?void 0:j.type)==="error")throw j;return _e({loader:g[1],url:f,params:i,route:p,parent:async()=>{var Ke;const Ge={};for(let be=0;be<O;be+=1)Object.assign(Ge,(Ke=await A[be])==null?void 0:Ke.data);return Ge},server_data_node:ge(j===void 0&&g[0]?{type:"skip"}:j!=null?j:null,$==null?void 0:$.server)})});for(const g of A)g.catch(()=>{});const T=[];for(let g=0;g<k.length;g+=1)if(k[g])try{T.push(await A[g])}catch(O){if(O instanceof Ye)return{type:"redirect",location:O.location};let $=500,j;P!=null&&P.includes(O)?($=(Q=O.status)!=null?Q:$,j=O.error):O instanceof Ie?($=O.status,j=O.body):j=await te(O,{params:i,url:f,route:{id:p.id}});const M=await qe(g,T,h);return M?await Z({url:f,params:i,branch:T.slice(0,M.idx).concat(M.node),status:$,error:j,route:p}):await Be(f,{id:p.id},j,$)}else T.push(void 0);return await Z({url:f,params:i,branch:T,status:200,error:null,route:p,form:l?void 0:null})}async function qe(a,l,f){for(;a--;)if(f[a]){let i=a;for(;!l[i];)i-=1;try{return{idx:i+1,node:{node:await f[a](),loader:f[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:l,url:f,route:i}){var y;const p={},h=await $e();let d=null;if(h.server)try{const b=await Xe(f,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;d=(y=b.nodes[0])!=null?y:null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||r)&&await se(f)}const E=await _e({loader:$e,url:f,params:p,route:i,parent:()=>Promise.resolve({}),server_data_node:ge(d)}),k={node:await je(),loader:je,shared:null,server:null,data:null};return await Z({url:f,params:p,branch:[E,k],status:a,error:l,route:null})}function we(a,l){if(Ce(a))return;const f=mt(a.pathname.slice(e.length)||"/");for(const i of le){const p=i.exec(f);if(p)return{id:a.pathname+a.search,invalidating:l,route:i,params:_t(p),url:a}}}function Ce(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Fe({url:a,type:l,intent:f,delta:i}){var E,k,y,b,R;let p=!1;const h={from:ce("from",{params:u.params,route:{id:(k=(E=u.route)==null?void 0:E.id)!=null?k:null},url:u.url}),to:ce("to",{params:(y=f==null?void 0:f.params)!=null?y:null,route:{id:(R=(b=f==null?void 0:f.route)==null?void 0:b.id)!=null?R:null},url:a}),willUnload:!f,type:l};i!==void 0&&(h.delta=i);const d={...h,cancel:()=>{p=!0}};return w||s.before_navigate.forEach(N=>N(d)),p?null:h}async function ye({url:a,scroll:l,keepfocus:f,redirect_chain:i,details:p,type:h,delta:d,nav_token:E,accepted:k,blocked:y}){const b=we(a,!1),R=Fe({url:a,type:h,delta:d,intent:b});if(!R){y();return}ke(L),k(),w=!0,c&&K.navigating.set(R),await Ue(b,a,i,{scroll:l,keepfocus:f,details:p},E,()=>{w=!1,s.after_navigate.forEach(N=>N(R)),K.navigating.set(null)})}async function Be(a,l,f,i){return a.origin===location.origin&&a.pathname===location.pathname&&!r?await oe({status:i,error:f,url:a,route:l}):await se(a)}function se(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Re(()=>(s.after_navigate.push(a),()=>{const l=s.after_navigate.indexOf(a);s.after_navigate.splice(l,1)}))},before_navigate:a=>{Re(()=>(s.before_navigate.push(a),()=>{const l=s.before_navigate.indexOf(a);s.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(_||!c)&&(m=!1)},goto:(a,l={})=>{if("keepfocus"in l&&!("keepFocus"in l))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l&&!("noScroll"in l))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return me(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")t.push(a);else{const{href:l}=new URL(a,location.href);t.push(f=>f.href===l)}return Pe()},invalidateAll:()=>(S=!0,Pe()),prefetch:async a=>{const l=new URL(a,ze(document));await Ne(l)},prefetch_routes:async a=>{const f=(a?le.filter(i=>a.some(p=>i.exec(p))):le).map(i=>Promise.all([...i.layouts,i.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(f)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:f,route:i}=u;if(!i)return;const p=await qe(u.branch.length,f,i.errors);if(p){const h=await Z({url:l,params:u.params,branch:f.slice(0,p.idx).concat(p.node),status:500,error:a.error,route:i});u=h.state;const d=fe();U.$set(h.props),d(),ie().then(Se)}}else if(a.type==="redirect")me(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...G,form:a.data,status:a.status}},f=fe();U.$set(l),f(),a.type==="success"&&ie().then(Se)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var h,d;let p=!1;if(!w){const E={from:ce("from",{params:u.params,route:{id:(d=(h=u.route)==null?void 0:h.id)!=null?d:null},url:u.url}),to:null,willUnload:!0,type:"leave",cancel:()=>p=!0};s.before_navigate.forEach(k=>k(E))}p?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(L);try{sessionStorage[Qe]=JSON.stringify(re)}catch{}}});const a=i=>{const{url:p,options:h,has:d}=Me(i);if(p&&h.prefetch&&!Ce(p)){if(h.reload||d.rel_external||d.target||d.download)return;Ne(p)}};let l;const f=i=>{clearTimeout(l),l=setTimeout(()=>{var p;(p=i.target)==null||p.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};n.addEventListener("touchstart",a,{passive:!0}),n.addEventListener("mousemove",f),n.addEventListener("sveltekit:trigger_prefetch",a),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:p,url:h,options:d,has:E}=Me(i);if(!p||!h||!(p instanceof SVGAElement)&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:")||E.download)return;if(d.reload||E.rel_external||E.target){Fe({url:h,type:"link"})||i.preventDefault(),w=!0;return}const[y,b]=h.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){v=!0,ke(L),u.url=h,K.page.set({...G,url:h}),K.page.notify();return}ye({url:h,scroll:d.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{var p;if((p=i.state)!=null&&p[V]){if(i.state[V]===L)return;const h=i.state[V]-L;ye({url:new URL(location.href),scroll:re[i.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{L=i.state[V]},blocked:()=>{history.go(-h)},type:"popstate",delta:h})}}),addEventListener("hashchange",()=>{v&&(v=!1,history.replaceState({...history.state,[V]:++L},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:f,params:i,route:p,data:h,form:d})=>{var y;r=!0;const E=new URL(location.href);let k;try{const b=f.map(async(R,N)=>{const P=h[N];return _e({loader:de[R],url:E,params:i,route:p,parent:async()=>{const I={};for(let A=0;A<N;A+=1)Object.assign(I,(await b[A]).data);return I},server_data_node:ge(P)})});k=await Z({url:E,params:i,branch:await Promise.all(b),status:a,error:l,form:d,route:(y=le.find(({id:R})=>R===p.id))!=null?y:null})}catch(b){if(b instanceof Ye){await se(new URL(b.location,location.href));return}k=await oe({status:b instanceof Ie?b.status:500,error:await te(b,{url:E,params:i,route:p}),url:E,route:p})}Te(k)}}}async function Xe(n,e){var u;const t=new URL(n);t.pathname=vt(n.pathname);const o=await he(t.href,{headers:{"x-sveltekit-invalidated":e.map(r=>r?"1":"").join(",")}}),s=await o.json();if(!o.ok)throw new Error(s);return(u=s.nodes)==null||u.forEach(r=>{var c,m;(r==null?void 0:r.type)==="data"&&(r.data=Ht(r.data),r.uses={dependencies:new Set((c=r.uses.dependencies)!=null?c:[]),params:new Set((m=r.uses.params)!=null?m:[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url})}),s}function te(n,e){var t;return n instanceof Ie?n.body:(t=Ft.handleError({error:n,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Xt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(n,e){for(const t of Xt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function fe(){return()=>{}}function Se(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function tn({env:n,hydrate:e,paths:t,target:o,version:s}){ht(t),pt(s);const u=Yt({target:o,base:t.base});ut({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{tn as start};