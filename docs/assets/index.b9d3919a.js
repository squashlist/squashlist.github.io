(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Yo(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ie={},wn=[],et=()=>{},_d=()=>!1,vd=/^on[^a-z]/,Gr=t=>vd.test(t),Ko=t=>t.startsWith("onUpdate:"),Ee=Object.assign,qo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yd=Object.prototype.hasOwnProperty,Y=(t,e)=>yd.call(t,e),H=Array.isArray,Cn=t=>Xr(t)==="[object Map]",cu=t=>Xr(t)==="[object Set]",U=t=>typeof t=="function",me=t=>typeof t=="string",Qr=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",uu=t=>(oe(t)||U(t))&&U(t.then)&&U(t.catch),fu=Object.prototype.toString,Xr=t=>fu.call(t),bd=t=>Xr(t).slice(8,-1),hu=t=>Xr(t)==="[object Object]",Go=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pr=Yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wd=/-(\w)/g,ct=Jr(t=>t.replace(wd,(e,n)=>n?n.toUpperCase():"")),Cd=/\B([A-Z])/g,zn=Jr(t=>t.replace(Cd,"-$1").toLowerCase()),Zr=Jr(t=>t.charAt(0).toUpperCase()+t.slice(1)),As=Jr(t=>t?`on${Zr(t)}`:""),rn=(t,e)=>!Object.is(t,e),mr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Cr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pl;const Js=()=>pl||(pl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qo(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=me(i)?Sd(i):Qo(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(me(t)||oe(t))return t}const Ed=/;(?![^(]*\))/g,xd=/:([^]+)/,Id=/\/\*[^]*?\*\//g;function Sd(t){const e={};return t.replace(Id,"").split(Ed).forEach(n=>{if(n){const i=n.split(xd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function es(t){let e="";if(me(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const i=es(t[n]);i&&(e+=i+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Td="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ad=Yo(Td);function du(t){return!!t||t===""}const Er=t=>me(t)?t:t==null?"":H(t)||oe(t)&&(t.toString===fu||!U(t.toString))?JSON.stringify(t,pu,2):String(t),pu=(t,e)=>e&&e.__v_isRef?pu(t,e.value):Cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:cu(e)?{[`Set(${e.size})`]:[...e.values()]}:oe(e)&&!H(e)&&!hu(e)?String(e):e;let Ve;class kd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ve,!e&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ve;try{return Ve=this,e()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Nd(t,e=Ve){e&&e.active&&e.effects.push(t)}function Pd(){return Ve}const Xo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},mu=t=>(t.w&Mt)>0,gu=t=>(t.n&Mt)>0,Od=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Mt},Rd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];mu(r)&&!gu(r)?r.delete(t):e[n++]=r,r.w&=~Mt,r.n&=~Mt}e.length=n}},Zs=new WeakMap;let ni=0,Mt=1;const eo=30;let Ke;const en=Symbol(""),to=Symbol("");class Jo{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Nd(this,i)}run(){if(!this.active)return this.fn();let e=Ke,n=At;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ke,Ke=this,At=!0,Mt=1<<++ni,ni<=eo?Od(this):ml(this),this.fn()}finally{ni<=eo&&Rd(this),Mt=1<<--ni,Ke=this.parent,At=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ke===this?this.deferStop=!0:this.active&&(ml(this),this.onStop&&this.onStop(),this.active=!1)}}function ml(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let At=!0;const _u=[];function Un(){_u.push(At),At=!1}function $n(){const t=_u.pop();At=t===void 0?!0:t}function Le(t,e,n){if(At&&Ke){let i=Zs.get(t);i||Zs.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Xo()),vu(r)}}function vu(t,e){let n=!1;ni<=eo?gu(t)||(t.n|=Mt,n=!mu(t)):n=!t.has(Ke),n&&(t.add(Ke),Ke.deps.push(t))}function mt(t,e,n,i,r,s){const o=Zs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Qr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Go(n)&&a.push(o.get("length")):(a.push(o.get(en)),Cn(t)&&a.push(o.get(to)));break;case"delete":H(t)||(a.push(o.get(en)),Cn(t)&&a.push(o.get(to)));break;case"set":Cn(t)&&a.push(o.get(en));break}if(a.length===1)a[0]&&no(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);no(Xo(l))}}function no(t,e){const n=H(t)?t:[...t];for(const i of n)i.computed&&gl(i);for(const i of n)i.computed||gl(i)}function gl(t,e){(t!==Ke||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Md=Yo("__proto__,__v_isRef,__isVue"),yu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qr)),_l=Dd();function Dd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=q(this);for(let s=0,o=this.length;s<o;s++)Le(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(q)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Un();const i=q(this)[e].apply(this,n);return $n(),i}}),t}function Ld(t){const e=q(this);return Le(e,"has",t),e.hasOwnProperty(t)}class bu{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const r=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&i===(r?s?Gd:xu:s?Eu:Cu).get(e))return e;const o=H(e);if(!r){if(o&&Y(_l,n))return Reflect.get(_l,n,i);if(n==="hasOwnProperty")return Ld}const a=Reflect.get(e,n,i);return(Qr(n)?yu.has(n):Md(n))||(r||Le(e,"get",n),s)?a:Se(a)?o&&Go(n)?a:a.value:oe(a)?r?Iu(a):ta(a):a}}class wu extends bu{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(Pn(s)&&Se(s)&&!Se(i))return!1;if(!this._shallow&&(!xr(i)&&!Pn(i)&&(s=q(s),i=q(i)),!H(e)&&Se(s)&&!Se(i)))return s.value=i,!0;const o=H(e)&&Go(n)?Number(n)<e.length:Y(e,n),a=Reflect.set(e,n,i,r);return e===q(r)&&(o?rn(i,s)&&mt(e,"set",n,i):mt(e,"add",n,i)),a}deleteProperty(e,n){const i=Y(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&mt(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Qr(n)||!yu.has(n))&&Le(e,"has",n),i}ownKeys(e){return Le(e,"iterate",H(e)?"length":en),Reflect.ownKeys(e)}}class Fd extends bu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hd=new wu,Bd=new Fd,zd=new wu(!0),Zo=t=>t,ts=t=>Reflect.getPrototypeOf(t);function Xi(t,e,n=!1,i=!1){t=t.__v_raw;const r=q(t),s=q(e);n||(rn(e,s)&&Le(r,"get",e),Le(r,"get",s));const{has:o}=ts(r),a=i?Zo:n?ia:mi;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Ji(t,e=!1){const n=this.__v_raw,i=q(n),r=q(t);return e||(rn(t,r)&&Le(i,"has",t),Le(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Zi(t,e=!1){return t=t.__v_raw,!e&&Le(q(t),"iterate",en),Reflect.get(t,"size",t)}function vl(t){t=q(t);const e=q(this);return ts(e).has.call(e,t)||(e.add(t),mt(e,"add",t,t)),this}function yl(t,e){e=q(e);const n=q(this),{has:i,get:r}=ts(n);let s=i.call(n,t);s||(t=q(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?rn(e,o)&&mt(n,"set",t,e):mt(n,"add",t,e),this}function bl(t){const e=q(this),{has:n,get:i}=ts(e);let r=n.call(e,t);r||(t=q(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&mt(e,"delete",t,void 0),s}function wl(){const t=q(this),e=t.size!==0,n=t.clear();return e&&mt(t,"clear",void 0,void 0),n}function er(t,e){return function(i,r){const s=this,o=s.__v_raw,a=q(o),l=e?Zo:t?ia:mi;return!t&&Le(a,"iterate",en),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function tr(t,e,n){return function(...i){const r=this.__v_raw,s=q(r),o=Cn(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Zo:e?ia:mi;return!e&&Le(s,"iterate",l?to:en),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function It(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ud(){const t={get(s){return Xi(this,s)},get size(){return Zi(this)},has:Ji,add:vl,set:yl,delete:bl,clear:wl,forEach:er(!1,!1)},e={get(s){return Xi(this,s,!1,!0)},get size(){return Zi(this)},has:Ji,add:vl,set:yl,delete:bl,clear:wl,forEach:er(!1,!0)},n={get(s){return Xi(this,s,!0)},get size(){return Zi(this,!0)},has(s){return Ji.call(this,s,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:er(!0,!1)},i={get(s){return Xi(this,s,!0,!0)},get size(){return Zi(this,!0)},has(s){return Ji.call(this,s,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=tr(s,!1,!1),n[s]=tr(s,!0,!1),e[s]=tr(s,!1,!0),i[s]=tr(s,!0,!0)}),[t,n,e,i]}const[$d,Wd,jd,Vd]=Ud();function ea(t,e){const n=e?t?Vd:jd:t?Wd:$d;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Y(n,r)&&r in i?n:i,r,s)}const Yd={get:ea(!1,!1)},Kd={get:ea(!1,!0)},qd={get:ea(!0,!1)},Cu=new WeakMap,Eu=new WeakMap,xu=new WeakMap,Gd=new WeakMap;function Qd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xd(t){return t.__v_skip||!Object.isExtensible(t)?0:Qd(bd(t))}function ta(t){return Pn(t)?t:na(t,!1,Hd,Yd,Cu)}function Jd(t){return na(t,!1,zd,Kd,Eu)}function Iu(t){return na(t,!0,Bd,qd,xu)}function na(t,e,n,i,r){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Xd(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function En(t){return Pn(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function Pn(t){return!!(t&&t.__v_isReadonly)}function xr(t){return!!(t&&t.__v_isShallow)}function Su(t){return En(t)||Pn(t)}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function Tu(t){return Cr(t,"__v_skip",!0),t}const mi=t=>oe(t)?ta(t):t,ia=t=>oe(t)?Iu(t):t;function Au(t){At&&Ke&&(t=q(t),vu(t.dep||(t.dep=Xo())))}function ku(t,e){t=q(t);const n=t.dep;n&&no(n)}function Se(t){return!!(t&&t.__v_isRef===!0)}function Ye(t){return Zd(t,!1)}function Zd(t,e){return Se(t)?t:new ep(t,e)}class ep{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:q(e),this._value=n?e:mi(e)}get value(){return Au(this),this._value}set value(e){const n=this.__v_isShallow||xr(e)||Pn(e);e=n?e:q(e),rn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:mi(e),ku(this))}}function ra(t){return Se(t)?t.value:t}const tp={get:(t,e,n)=>ra(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Nu(t){return En(t)?t:new Proxy(t,tp)}class np{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Jo(e,()=>{this._dirty||(this._dirty=!0,ku(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=q(this);return Au(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ip(t,e,n=!1){let i,r;const s=U(t);return s?(i=t,r=et):(i=t.get,r=t.set),new np(i,r,s||!r,n)}function kt(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){ns(s,e,n)}return r}function tt(t,e,n,i){if(U(t)){const s=kt(t,e,n,i);return s&&uu(s)&&s.catch(o=>{ns(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(tt(t[s],e,n,i));return r}function ns(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){kt(l,null,10,[t,o,a]);return}}rp(t,n,r,i)}function rp(t,e,n,i=!0){console.error(t)}let gi=!1,io=!1;const Ie=[];let at=0;const xn=[];let dt=null,Kt=0;const Pu=Promise.resolve();let sa=null;function Ou(t){const e=sa||Pu;return t?e.then(this?t.bind(this):t):e}function sp(t){let e=at+1,n=Ie.length;for(;e<n;){const i=e+n>>>1,r=Ie[i],s=_i(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function oa(t){(!Ie.length||!Ie.includes(t,gi&&t.allowRecurse?at+1:at))&&(t.id==null?Ie.push(t):Ie.splice(sp(t.id),0,t),Ru())}function Ru(){!gi&&!io&&(io=!0,sa=Pu.then(Du))}function op(t){const e=Ie.indexOf(t);e>at&&Ie.splice(e,1)}function ap(t){H(t)?xn.push(...t):(!dt||!dt.includes(t,t.allowRecurse?Kt+1:Kt))&&xn.push(t),Ru()}function Cl(t,e=gi?at+1:0){for(;e<Ie.length;e++){const n=Ie[e];n&&n.pre&&(Ie.splice(e,1),e--,n())}}function Mu(t){if(xn.length){const e=[...new Set(xn)];if(xn.length=0,dt){dt.push(...e);return}for(dt=e,dt.sort((n,i)=>_i(n)-_i(i)),Kt=0;Kt<dt.length;Kt++)dt[Kt]();dt=null,Kt=0}}const _i=t=>t.id==null?1/0:t.id,lp=(t,e)=>{const n=_i(t)-_i(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Du(t){io=!1,gi=!0,Ie.sort(lp);const e=et;try{for(at=0;at<Ie.length;at++){const n=Ie[at];n&&n.active!==!1&&kt(n,null,14)}}finally{at=0,Ie.length=0,Mu(),gi=!1,sa=null,(Ie.length||xn.length)&&Du()}}function cp(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ie;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||ie;h&&(r=n.map(m=>me(m)?m.trim():m)),f&&(r=n.map(Xs))}let a,l=i[a=As(e)]||i[a=As(ct(e))];!l&&s&&(l=i[a=As(zn(e))]),l&&tt(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,tt(c,t,6,r)}}function Lu(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!U(t)){const l=c=>{const u=Lu(c,e,!0);u&&(a=!0,Ee(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(oe(t)&&i.set(t,null),null):(H(s)?s.forEach(l=>o[l]=null):Ee(o,s),oe(t)&&i.set(t,o),o)}function is(t,e){return!t||!Gr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,zn(e))||Y(t,e))}let ze=null,Fu=null;function Ir(t){const e=ze;return ze=t,Fu=t&&t.type.__scopeId||null,e}function up(t,e=ze,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Rl(-1);const s=Ir(e);let o;try{o=t(...r)}finally{Ir(s),i._d&&Rl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ks(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:y,inheritAttrs:w}=t;let D,I;const T=Ir(t);try{if(n.shapeFlag&4){const N=r||i,G=N;D=ot(u.call(G,N,f,s,m,h,y)),I=l}else{const N=e;D=ot(N.length>1?N(s,{attrs:l,slots:a,emit:c}):N(s,null)),I=e.props?l:fp(l)}}catch(N){oi.length=0,ns(N,t,1),D=ue(sn)}let F=D;if(I&&w!==!1){const N=Object.keys(I),{shapeFlag:G}=F;N.length&&G&7&&(o&&N.some(Ko)&&(I=hp(I,o)),F=On(F,I))}return n.dirs&&(F=On(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),D=F,Ir(T),D}const fp=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gr(n))&&((e||(e={}))[n]=t[n]);return e},hp=(t,e)=>{const n={};for(const i in t)(!Ko(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function dp(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?El(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!is(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?El(i,o,c):!0:!!o;return!1}function El(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!is(n,s))return!0}return!1}function pp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Hu="components";function aa(t,e){return gp(Hu,t,!0,e)||t}const mp=Symbol.for("v-ndc");function gp(t,e,n=!0,i=!1){const r=ze||be;if(r){const s=r.type;if(t===Hu){const a=cm(s,!1);if(a&&(a===e||a===ct(e)||a===Zr(ct(e))))return s}const o=xl(r[t]||s[t],e)||xl(r.appContext[t],e);return!o&&i?s:o}}function xl(t,e){return t&&(t[e]||t[ct(e)]||t[Zr(ct(e))])}const _p=t=>t.__isSuspense;function vp(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):ap(t)}function yp(t,e){return la(t,null,{flush:"post"})}const nr={};function In(t,e,n){return la(t,e,n)}function la(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=ie){var a;const l=Pd()===((a=be)==null?void 0:a.scope)?be:null;let c,u=!1,f=!1;if(Se(t)?(c=()=>t.value,u=xr(t)):En(t)?(c=()=>t,i=!0):H(t)?(f=!0,u=t.some(N=>En(N)||xr(N)),c=()=>t.map(N=>{if(Se(N))return N.value;if(En(N))return Gt(N);if(U(N))return kt(N,l,2)})):U(t)?e?c=()=>kt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),tt(t,l,3,[m])}:c=et,e&&i){const N=c;c=()=>Gt(N())}let h,m=N=>{h=T.onStop=()=>{kt(N,l,4),h=T.onStop=void 0}},y;if(yi)if(m=et,e?n&&tt(e,l,3,[c(),f?[]:void 0,m]):c(),r==="sync"){const N=hm();y=N.__watcherHandles||(N.__watcherHandles=[])}else return et;let w=f?new Array(t.length).fill(nr):nr;const D=()=>{if(!!T.active)if(e){const N=T.run();(i||u||(f?N.some((G,we)=>rn(G,w[we])):rn(N,w)))&&(h&&h(),tt(e,l,3,[N,w===nr?void 0:f&&w[0]===nr?[]:w,m]),w=N)}else T.run()};D.allowRecurse=!!e;let I;r==="sync"?I=D:r==="post"?I=()=>Re(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),I=()=>oa(D));const T=new Jo(c,I);e?n?D():w=T.run():r==="post"?Re(T.run.bind(T),l&&l.suspense):T.run();const F=()=>{T.stop(),l&&l.scope&&qo(l.scope.effects,T)};return y&&y.push(F),F}function bp(t,e,n){const i=this.proxy,r=me(t)?t.includes(".")?Bu(i,t):()=>i[t]:t.bind(i,i);let s;U(e)?s=e:(s=e.handler,n=e);const o=be;Mn(this);const a=la(r,s.bind(i),n);return o?Mn(o):tn(),a}function Bu(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Gt(t,e){if(!oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Se(t))Gt(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Gt(t[n],e);else if(cu(t)||Cn(t))t.forEach(n=>{Gt(n,e)});else if(hu(t))for(const n in t)Gt(t[n],e);return t}function Ns(t,e){const n=ze;if(n===null)return t;const i=cs(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=ie]=e[s];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&Gt(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Wt(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Un(),tt(l,n,8,[t.el,a,t,e]),$n())}}/*! #__NO_SIDE_EFFECTS__ */function ca(t,e){return U(t)?(()=>Ee({name:t.name},e,{setup:t}))():t}const gr=t=>!!t.type.__asyncLoader,zu=t=>t.type.__isKeepAlive;function wp(t,e){Uu(t,"a",e)}function Cp(t,e){Uu(t,"da",e)}function Uu(t,e,n=be){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(rs(e,i,n),n){let r=n.parent;for(;r&&r.parent;)zu(r.parent.vnode)&&Ep(i,e,n,r),r=r.parent}}function Ep(t,e,n,i){const r=rs(e,t,i,!0);ua(()=>{qo(i[e],r)},n)}function rs(t,e,n=be,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Un(),Mn(n);const a=tt(e,n,t,o);return tn(),$n(),a});return i?r.unshift(s):r.push(s),s}}const wt=t=>(e,n=be)=>(!yi||t==="sp")&&rs(t,(...i)=>e(...i),n),xp=wt("bm"),ss=wt("m"),Ip=wt("bu"),Sp=wt("u"),Tp=wt("bum"),ua=wt("um"),Ap=wt("sp"),kp=wt("rtg"),Np=wt("rtc");function Pp(t,e=be){rs("ec",t,e)}function $u(t,e,n,i){let r;const s=n&&n[i];if(H(t)||me(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(oe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const ro=t=>t?Zu(t)?cs(t)||t.proxy:ro(t.parent):null,si=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ro(t.parent),$root:t=>ro(t.root),$emit:t=>t.emit,$options:t=>fa(t),$forceUpdate:t=>t.f||(t.f=()=>oa(t.update)),$nextTick:t=>t.n||(t.n=Ou.bind(t.proxy)),$watch:t=>bp.bind(t)}),Ps=(t,e)=>t!==ie&&!t.__isScriptSetup&&Y(t,e),Op={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ps(i,e))return o[e]=1,i[e];if(r!==ie&&Y(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Y(c,e))return o[e]=3,s[e];if(n!==ie&&Y(n,e))return o[e]=4,n[e];so&&(o[e]=0)}}const u=si[e];let f,h;if(u)return e==="$attrs"&&Le(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&Y(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Y(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ps(r,e)?(r[e]=n,!0):i!==ie&&Y(i,e)?(i[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ie&&Y(t,o)||Ps(e,o)||(a=s[0])&&Y(a,o)||Y(i,o)||Y(si,o)||Y(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Il(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let so=!0;function Rp(t){const e=fa(t),n=t.proxy,i=t.ctx;so=!1,e.beforeCreate&&Sl(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:y,activated:w,deactivated:D,beforeDestroy:I,beforeUnmount:T,destroyed:F,unmounted:N,render:G,renderTracked:we,renderTriggered:Ce,errorCaptured:$e,serverPrefetch:We,expose:ft,inheritAttrs:Gn,components:Ki,directives:qi,filters:Is}=e;if(c&&Mp(c,i,null),o)for(const ae in o){const J=o[ae];U(J)&&(i[ae]=J.bind(n))}if(r){const ae=r.call(n,n);oe(ae)&&(t.data=ta(ae))}if(so=!0,s)for(const ae in s){const J=s[ae],Ut=U(J)?J.bind(n,n):U(J.get)?J.get.bind(n,n):et,Gi=!U(J)&&U(J.set)?J.set.bind(n):et,$t=Be({get:Ut,set:Gi});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>$t.value,set:it=>$t.value=it})}if(a)for(const ae in a)Wu(a[ae],i,n,ae);if(l){const ae=U(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(J=>{zp(J,ae[J])})}u&&Sl(u,t,"c");function Te(ae,J){H(J)?J.forEach(Ut=>ae(Ut.bind(n))):J&&ae(J.bind(n))}if(Te(xp,f),Te(ss,h),Te(Ip,m),Te(Sp,y),Te(wp,w),Te(Cp,D),Te(Pp,$e),Te(Np,we),Te(kp,Ce),Te(Tp,T),Te(ua,N),Te(Ap,We),H(ft))if(ft.length){const ae=t.exposed||(t.exposed={});ft.forEach(J=>{Object.defineProperty(ae,J,{get:()=>n[J],set:Ut=>n[J]=Ut})})}else t.exposed||(t.exposed={});G&&t.render===et&&(t.render=G),Gn!=null&&(t.inheritAttrs=Gn),Ki&&(t.components=Ki),qi&&(t.directives=qi)}function Mp(t,e,n=et){H(t)&&(t=oo(t));for(const i in t){const r=t[i];let s;oe(r)?"default"in r?s=_r(r.from||i,r.default,!0):s=_r(r.from||i):s=_r(r),Se(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Sl(t,e,n){tt(H(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wu(t,e,n,i){const r=i.includes(".")?Bu(n,i):()=>n[i];if(me(t)){const s=e[t];U(s)&&In(r,s)}else if(U(t))In(r,t.bind(n));else if(oe(t))if(H(t))t.forEach(s=>Wu(s,e,n,i));else{const s=U(t.handler)?t.handler.bind(n):e[t.handler];U(s)&&In(r,s,t)}}function fa(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Sr(l,c,o,!0)),Sr(l,e,o)),oe(e)&&s.set(e,l),l}function Sr(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Sr(t,s,n,!0),r&&r.forEach(o=>Sr(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Dp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Dp={data:Tl,props:Al,emits:Al,methods:ii,computed:ii,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:ii,directives:ii,watch:Fp,provide:Tl,inject:Lp};function Tl(t,e){return e?t?function(){return Ee(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Lp(t,e){return ii(oo(t),oo(e))}function oo(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function ii(t,e){return t?Ee(Object.create(null),t,e):e}function Al(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Ee(Object.create(null),Il(t),Il(e!=null?e:{})):e}function Fp(t,e){if(!t)return e;if(!e)return t;const n=Ee(Object.create(null),t);for(const i in e)n[i]=Ae(t[i],e[i]);return n}function ju(){return{app:null,config:{isNativeTag:_d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hp=0;function Bp(t,e){return function(i,r=null){U(i)||(i=Ee({},i)),r!=null&&!oe(r)&&(r=null);const s=ju(),o=new WeakSet;let a=!1;const l=s.app={_uid:Hp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:dm,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(l,...u)):U(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=ue(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,cs(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Tr=l;try{return c()}finally{Tr=null}}};return l}}let Tr=null;function zp(t,e){if(be){let n=be.provides;const i=be.parent&&be.parent.provides;i===n&&(n=be.provides=Object.create(i)),n[t]=e}}function _r(t,e,n=!1){const i=be||ze;if(i||Tr){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Tr._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&U(e)?e.call(i&&i.proxy):e}}function Up(t,e,n,i=!1){const r={},s={};Cr(s,ls,1),t.propsDefaults=Object.create(null),Vu(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Jd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function $p(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=q(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(is(t.emitsOptions,h))continue;const m=e[h];if(l)if(Y(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const y=ct(h);r[y]=ao(l,a,y,m,t,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Vu(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Y(e,f)&&((u=zn(f))===f||!Y(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=ao(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Y(e,f)&&!0)&&(delete s[f],c=!0)}c&&mt(t,"set","$attrs")}function Vu(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(pr(l))continue;const c=e[l];let u;r&&Y(r,u=ct(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:is(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=q(n),c=a||ie;for(let u=0;u<s.length;u++){const f=s[u];n[f]=ao(r,l,f,c[f],t,!Y(c,f))}}return o}function ao(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Y(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&U(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Mn(r),i=c[n]=l.call(null,e),tn())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===zn(n))&&(i=!0))}return i}function Yu(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!U(t)){const u=f=>{l=!0;const[h,m]=Yu(f,e,!0);Ee(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return oe(t)&&i.set(t,wn),wn;if(H(s))for(let u=0;u<s.length;u++){const f=ct(s[u]);kl(f)&&(o[f]=ie)}else if(s)for(const u in s){const f=ct(u);if(kl(f)){const h=s[u],m=o[f]=H(h)||U(h)?{type:h}:Ee({},h);if(m){const y=Ol(Boolean,m.type),w=Ol(String,m.type);m[0]=y>-1,m[1]=w<0||y<w,(y>-1||Y(m,"default"))&&a.push(f)}}}const c=[o,a];return oe(t)&&i.set(t,c),c}function kl(t){return t[0]!=="$"}function Nl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Pl(t,e){return Nl(t)===Nl(e)}function Ol(t,e){return H(e)?e.findIndex(n=>Pl(n,t)):U(e)&&Pl(e,t)?0:-1}const Ku=t=>t[0]==="_"||t==="$stable",ha=t=>H(t)?t.map(ot):[ot(t)],Wp=(t,e,n)=>{if(e._n)return e;const i=up((...r)=>ha(e(...r)),n);return i._c=!1,i},qu=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Ku(r))continue;const s=t[r];if(U(s))e[r]=Wp(r,s,i);else if(s!=null){const o=ha(s);e[r]=()=>o}}},Gu=(t,e)=>{const n=ha(e);t.slots.default=()=>n},jp=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=q(e),Cr(e,"_",n)):qu(e,t.slots={})}else t.slots={},e&&Gu(t,e);Cr(t.slots,ls,1)},Vp=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ie;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ee(r,e),!n&&a===1&&delete r._):(s=!e.$stable,qu(e,r)),o=e}else e&&(Gu(t,e),o={default:1});if(s)for(const a in r)!Ku(a)&&o[a]==null&&delete r[a]};function lo(t,e,n,i,r=!1){if(H(t)){t.forEach((h,m)=>lo(h,e&&(H(e)?e[m]:e),n,i,r));return}if(gr(i)&&!r)return;const s=i.shapeFlag&4?cs(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(me(c)?(u[c]=null,Y(f,c)&&(f[c]=null)):Se(c)&&(c.value=null)),U(l))kt(l,a,12,[o,u]);else{const h=me(l),m=Se(l);if(h||m){const y=()=>{if(t.f){const w=h?Y(f,l)?f[l]:u[l]:l.value;r?H(w)&&qo(w,s):H(w)?w.includes(s)||w.push(s):h?(u[l]=[s],Y(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,Y(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Re(y,n)):y()}}}const Re=vp;function Yp(t){return Kp(t)}function Kp(t,e){const n=Js();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=et,insertStaticContent:y}=t,w=(d,p,g,_=null,v=null,x=null,A=!1,C=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Xn(d,p)&&(_=Qi(d),it(d,v,x,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:R,shapeFlag:P}=p;switch(b){case os:D(d,p,g,_);break;case sn:I(d,p,g,_);break;case vr:d==null&&T(p,g,_,A);break;case Ne:Ki(d,p,g,_,v,x,A,C,S);break;default:P&1?G(d,p,g,_,v,x,A,C,S):P&6?qi(d,p,g,_,v,x,A,C,S):(P&64||P&128)&&b.process(d,p,g,_,v,x,A,C,S,dn)}R!=null&&v&&lo(R,d&&d.ref,x,p||d,!p)},D=(d,p,g,_)=>{if(d==null)i(p.el=a(p.children),g,_);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},I=(d,p,g,_)=>{d==null?i(p.el=l(p.children||""),g,_):p.el=d.el},T=(d,p,g,_)=>{[d.el,d.anchor]=y(d.children,p,g,_,d.el,d.anchor)},F=({el:d,anchor:p},g,_)=>{let v;for(;d&&d!==p;)v=h(d),i(d,g,_),d=v;i(p,g,_)},N=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),r(d),d=g;r(p)},G=(d,p,g,_,v,x,A,C,S)=>{A=A||p.type==="svg",d==null?we(p,g,_,v,x,A,C,S):We(d,p,v,x,A,C,S)},we=(d,p,g,_,v,x,A,C)=>{let S,b;const{type:R,props:P,shapeFlag:M,transition:B,dirs:j}=d;if(S=d.el=o(d.type,x,P&&P.is,P),M&8?u(S,d.children):M&16&&$e(d.children,S,null,_,v,x&&R!=="foreignObject",A,C),j&&Wt(d,null,_,"created"),Ce(S,d,d.scopeId,A,_),P){for(const Q in P)Q!=="value"&&!pr(Q)&&s(S,Q,null,P[Q],x,d.children,_,v,ht);"value"in P&&s(S,"value",null,P.value),(b=P.onVnodeBeforeMount)&&st(b,_,d)}j&&Wt(d,null,_,"beforeMount");const Z=qp(v,B);Z&&B.beforeEnter(S),i(S,p,g),((b=P&&P.onVnodeMounted)||Z||j)&&Re(()=>{b&&st(b,_,d),Z&&B.enter(S),j&&Wt(d,null,_,"mounted")},v)},Ce=(d,p,g,_,v)=>{if(g&&m(d,g),_)for(let x=0;x<_.length;x++)m(d,_[x]);if(v){let x=v.subTree;if(p===x){const A=v.vnode;Ce(d,A,A.scopeId,A.slotScopeIds,v.parent)}}},$e=(d,p,g,_,v,x,A,C,S=0)=>{for(let b=S;b<d.length;b++){const R=d[b]=C?Tt(d[b]):ot(d[b]);w(null,R,p,g,_,v,x,A,C)}},We=(d,p,g,_,v,x,A)=>{const C=p.el=d.el;let{patchFlag:S,dynamicChildren:b,dirs:R}=p;S|=d.patchFlag&16;const P=d.props||ie,M=p.props||ie;let B;g&&jt(g,!1),(B=M.onVnodeBeforeUpdate)&&st(B,g,p,d),R&&Wt(p,d,g,"beforeUpdate"),g&&jt(g,!0);const j=v&&p.type!=="foreignObject";if(b?ft(d.dynamicChildren,b,C,g,_,j,x):A||J(d,p,C,null,g,_,j,x,!1),S>0){if(S&16)Gn(C,p,P,M,g,_,v);else if(S&2&&P.class!==M.class&&s(C,"class",null,M.class,v),S&4&&s(C,"style",P.style,M.style,v),S&8){const Z=p.dynamicProps;for(let Q=0;Q<Z.length;Q++){const fe=Z[Q],je=P[fe],pn=M[fe];(pn!==je||fe==="value")&&s(C,fe,je,pn,v,d.children,g,_,ht)}}S&1&&d.children!==p.children&&u(C,p.children)}else!A&&b==null&&Gn(C,p,P,M,g,_,v);((B=M.onVnodeUpdated)||R)&&Re(()=>{B&&st(B,g,p,d),R&&Wt(p,d,g,"updated")},_)},ft=(d,p,g,_,v,x,A)=>{for(let C=0;C<p.length;C++){const S=d[C],b=p[C],R=S.el&&(S.type===Ne||!Xn(S,b)||S.shapeFlag&70)?f(S.el):g;w(S,b,R,null,_,v,x,A,!0)}},Gn=(d,p,g,_,v,x,A)=>{if(g!==_){if(g!==ie)for(const C in g)!pr(C)&&!(C in _)&&s(d,C,g[C],null,A,p.children,v,x,ht);for(const C in _){if(pr(C))continue;const S=_[C],b=g[C];S!==b&&C!=="value"&&s(d,C,b,S,A,p.children,v,x,ht)}"value"in _&&s(d,"value",g.value,_.value)}},Ki=(d,p,g,_,v,x,A,C,S)=>{const b=p.el=d?d.el:a(""),R=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:M,slotScopeIds:B}=p;B&&(C=C?C.concat(B):B),d==null?(i(b,g,_),i(R,g,_),$e(p.children,g,R,v,x,A,C,S)):P>0&&P&64&&M&&d.dynamicChildren?(ft(d.dynamicChildren,M,g,v,x,A,C),(p.key!=null||v&&p===v.subTree)&&Qu(d,p,!0)):J(d,p,g,R,v,x,A,C,S)},qi=(d,p,g,_,v,x,A,C,S)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?v.ctx.activate(p,g,_,A,S):Is(p,g,_,v,x,A,S):ll(d,p,S)},Is=(d,p,g,_,v,x,A)=>{const C=d.component=im(d,_,v);if(zu(d)&&(C.ctx.renderer=dn),sm(C),C.asyncDep){if(v&&v.registerDep(C,Te),!d.el){const S=C.subTree=ue(sn);I(null,S,p,g)}return}Te(C,d,p,g,v,x,A)},ll=(d,p,g)=>{const _=p.component=d.component;if(dp(d,p,g))if(_.asyncDep&&!_.asyncResolved){ae(_,p,g);return}else _.next=p,op(_.update),_.update();else p.el=d.el,_.vnode=p},Te=(d,p,g,_,v,x,A)=>{const C=()=>{if(d.isMounted){let{next:R,bu:P,u:M,parent:B,vnode:j}=d,Z=R,Q;jt(d,!1),R?(R.el=j.el,ae(d,R,A)):R=j,P&&mr(P),(Q=R.props&&R.props.onVnodeBeforeUpdate)&&st(Q,B,R,j),jt(d,!0);const fe=ks(d),je=d.subTree;d.subTree=fe,w(je,fe,f(je.el),Qi(je),d,v,x),R.el=fe.el,Z===null&&pp(d,fe.el),M&&Re(M,v),(Q=R.props&&R.props.onVnodeUpdated)&&Re(()=>st(Q,B,R,j),v)}else{let R;const{el:P,props:M}=p,{bm:B,m:j,parent:Z}=d,Q=gr(p);if(jt(d,!1),B&&mr(B),!Q&&(R=M&&M.onVnodeBeforeMount)&&st(R,Z,p),jt(d,!0),P&&Ts){const fe=()=>{d.subTree=ks(d),Ts(P,d.subTree,d,v,null)};Q?p.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=ks(d);w(null,fe,g,_,d,v,x),p.el=fe.el}if(j&&Re(j,v),!Q&&(R=M&&M.onVnodeMounted)){const fe=p;Re(()=>st(R,Z,fe),v)}(p.shapeFlag&256||Z&&gr(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&Re(d.a,v),d.isMounted=!0,p=g=_=null}},S=d.effect=new Jo(C,()=>oa(b),d.scope),b=d.update=()=>S.run();b.id=d.uid,jt(d,!0),b()},ae=(d,p,g)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,$p(d,p.props,_,g),Vp(d,p.children,g),Un(),Cl(),$n()},J=(d,p,g,_,v,x,A,C,S=!1)=>{const b=d&&d.children,R=d?d.shapeFlag:0,P=p.children,{patchFlag:M,shapeFlag:B}=p;if(M>0){if(M&128){Gi(b,P,g,_,v,x,A,C,S);return}else if(M&256){Ut(b,P,g,_,v,x,A,C,S);return}}B&8?(R&16&&ht(b,v,x),P!==b&&u(g,P)):R&16?B&16?Gi(b,P,g,_,v,x,A,C,S):ht(b,v,x,!0):(R&8&&u(g,""),B&16&&$e(P,g,_,v,x,A,C,S))},Ut=(d,p,g,_,v,x,A,C,S)=>{d=d||wn,p=p||wn;const b=d.length,R=p.length,P=Math.min(b,R);let M;for(M=0;M<P;M++){const B=p[M]=S?Tt(p[M]):ot(p[M]);w(d[M],B,g,null,v,x,A,C,S)}b>R?ht(d,v,x,!0,!1,P):$e(p,g,_,v,x,A,C,S,P)},Gi=(d,p,g,_,v,x,A,C,S)=>{let b=0;const R=p.length;let P=d.length-1,M=R-1;for(;b<=P&&b<=M;){const B=d[b],j=p[b]=S?Tt(p[b]):ot(p[b]);if(Xn(B,j))w(B,j,g,null,v,x,A,C,S);else break;b++}for(;b<=P&&b<=M;){const B=d[P],j=p[M]=S?Tt(p[M]):ot(p[M]);if(Xn(B,j))w(B,j,g,null,v,x,A,C,S);else break;P--,M--}if(b>P){if(b<=M){const B=M+1,j=B<R?p[B].el:_;for(;b<=M;)w(null,p[b]=S?Tt(p[b]):ot(p[b]),g,j,v,x,A,C,S),b++}}else if(b>M)for(;b<=P;)it(d[b],v,x,!0),b++;else{const B=b,j=b,Z=new Map;for(b=j;b<=M;b++){const He=p[b]=S?Tt(p[b]):ot(p[b]);He.key!=null&&Z.set(He.key,b)}let Q,fe=0;const je=M-j+1;let pn=!1,fl=0;const Qn=new Array(je);for(b=0;b<je;b++)Qn[b]=0;for(b=B;b<=P;b++){const He=d[b];if(fe>=je){it(He,v,x,!0);continue}let rt;if(He.key!=null)rt=Z.get(He.key);else for(Q=j;Q<=M;Q++)if(Qn[Q-j]===0&&Xn(He,p[Q])){rt=Q;break}rt===void 0?it(He,v,x,!0):(Qn[rt-j]=b+1,rt>=fl?fl=rt:pn=!0,w(He,p[rt],g,null,v,x,A,C,S),fe++)}const hl=pn?Gp(Qn):wn;for(Q=hl.length-1,b=je-1;b>=0;b--){const He=j+b,rt=p[He],dl=He+1<R?p[He+1].el:_;Qn[b]===0?w(null,rt,g,dl,v,x,A,C,S):pn&&(Q<0||b!==hl[Q]?$t(rt,g,dl,2):Q--)}}},$t=(d,p,g,_,v=null)=>{const{el:x,type:A,transition:C,children:S,shapeFlag:b}=d;if(b&6){$t(d.component.subTree,p,g,_);return}if(b&128){d.suspense.move(p,g,_);return}if(b&64){A.move(d,p,g,dn);return}if(A===Ne){i(x,p,g);for(let P=0;P<S.length;P++)$t(S[P],p,g,_);i(d.anchor,p,g);return}if(A===vr){F(d,p,g);return}if(_!==2&&b&1&&C)if(_===0)C.beforeEnter(x),i(x,p,g),Re(()=>C.enter(x),v);else{const{leave:P,delayLeave:M,afterLeave:B}=C,j=()=>i(x,p,g),Z=()=>{P(x,()=>{j(),B&&B()})};M?M(x,j,Z):Z()}else i(x,p,g)},it=(d,p,g,_=!1,v=!1)=>{const{type:x,props:A,ref:C,children:S,dynamicChildren:b,shapeFlag:R,patchFlag:P,dirs:M}=d;if(C!=null&&lo(C,null,g,d,!0),R&256){p.ctx.deactivate(d);return}const B=R&1&&M,j=!gr(d);let Z;if(j&&(Z=A&&A.onVnodeBeforeUnmount)&&st(Z,p,d),R&6)gd(d.component,g,_);else{if(R&128){d.suspense.unmount(g,_);return}B&&Wt(d,null,p,"beforeUnmount"),R&64?d.type.remove(d,p,g,v,dn,_):b&&(x!==Ne||P>0&&P&64)?ht(b,p,g,!1,!0):(x===Ne&&P&384||!v&&R&16)&&ht(S,p,g),_&&cl(d)}(j&&(Z=A&&A.onVnodeUnmounted)||B)&&Re(()=>{Z&&st(Z,p,d),B&&Wt(d,null,p,"unmounted")},g)},cl=d=>{const{type:p,el:g,anchor:_,transition:v}=d;if(p===Ne){md(g,_);return}if(p===vr){N(d);return}const x=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:C}=v,S=()=>A(g,x);C?C(d.el,x,S):S()}else x()},md=(d,p)=>{let g;for(;d!==p;)g=h(d),r(d),d=g;r(p)},gd=(d,p,g)=>{const{bum:_,scope:v,update:x,subTree:A,um:C}=d;_&&mr(_),v.stop(),x&&(x.active=!1,it(A,d,p,g)),C&&Re(C,p),Re(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ht=(d,p,g,_=!1,v=!1,x=0)=>{for(let A=x;A<d.length;A++)it(d[A],p,g,_,v)},Qi=d=>d.shapeFlag&6?Qi(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),ul=(d,p,g)=>{d==null?p._vnode&&it(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,g),Cl(),Mu(),p._vnode=d},dn={p:w,um:it,m:$t,r:cl,mt:Is,mc:$e,pc:J,pbc:ft,n:Qi,o:t};let Ss,Ts;return e&&([Ss,Ts]=e(dn)),{render:ul,hydrate:Ss,createApp:Bp(ul,Ss)}}function jt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qu(t,e,n=!1){const i=t.children,r=e.children;if(H(i)&&H(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Tt(r[s]),a.el=o.el),n||Qu(o,a)),a.type===os&&(a.el=o.el)}}function Gp(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Qp=t=>t.__isTeleport,Ne=Symbol.for("v-fgt"),os=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),vr=Symbol.for("v-stc"),oi=[];let Qe=null;function he(t=!1){oi.push(Qe=t?null:[])}function Xp(){oi.pop(),Qe=oi[oi.length-1]||null}let vi=1;function Rl(t){vi+=t}function Xu(t){return t.dynamicChildren=vi>0?Qe||wn:null,Xp(),vi>0&&Qe&&Qe.push(t),t}function ke(t,e,n,i,r,s){return Xu(z(t,e,n,i,r,s,!0))}function as(t,e,n,i,r){return Xu(ue(t,e,n,i,r,!0))}function co(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return t.type===e.type&&t.key===e.key}const ls="__vInternal",Ju=({key:t})=>t!=null?t:null,yr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||Se(t)||U(t)?{i:ze,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,i=0,r=null,s=t===Ne?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ju(e),ref:e&&yr(e),scopeId:Fu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ze};return a?(da(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),vi>0&&!o&&Qe&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Qe.push(l),l}const ue=Jp;function Jp(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===mp)&&(t=sn),co(t)){const a=On(t,e,!0);return n&&da(a,n),vi>0&&!s&&Qe&&(a.shapeFlag&6?Qe[Qe.indexOf(t)]=a:Qe.push(a)),a.patchFlag|=-2,a}if(um(t)&&(t=t.__vccOpts),e){e=Zp(e);let{class:a,style:l}=e;a&&!me(a)&&(e.class=es(a)),oe(l)&&(Su(l)&&!H(l)&&(l=Ee({},l)),e.style=Qo(l))}const o=me(t)?1:_p(t)?128:Qp(t)?64:oe(t)?4:U(t)?2:0;return z(t,e,n,i,r,o,s,!0)}function Zp(t){return t?Su(t)||ls in t?Ee({},t):t:null}function On(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?em(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ju(a),ref:e&&e.ref?n&&r?H(r)?r.concat(yr(e)):[r,yr(e)]:yr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&On(t.ssContent),ssFallback:t.ssFallback&&On(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Rn(t=" ",e=0){return ue(os,null,t,e)}function ai(t="",e=!1){return e?(he(),as(sn,null,t)):ue(sn,null,t)}function ot(t){return t==null||typeof t=="boolean"?ue(sn):H(t)?ue(Ne,null,t.slice()):typeof t=="object"?Tt(t):ue(os,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:On(t)}function da(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),da(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ls in e)?e._ctx=ze:r===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),i&64?(n=16,e=[Rn(e)]):n=8);t.children=e,t.shapeFlag|=n}function em(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=es([e.class,i.class]));else if(r==="style")e.style=Qo([e.style,i.style]);else if(Gr(r)){const s=e[r],o=i[r];o&&s!==o&&!(H(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function st(t,e,n,i=null){tt(t,e,7,[n,i])}const tm=ju();let nm=0;function im(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||tm,s={uid:nm++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new kd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yu(i,r),emitsOptions:Lu(i,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:i.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=cp.bind(null,s),t.ce&&t.ce(s),s}let be=null;const rm=()=>be||ze;let pa,mn,Ml="__VUE_INSTANCE_SETTERS__";(mn=Js()[Ml])||(mn=Js()[Ml]=[]),mn.push(t=>be=t),pa=t=>{mn.length>1?mn.forEach(e=>e(t)):mn[0](t)};const Mn=t=>{pa(t),t.scope.on()},tn=()=>{be&&be.scope.off(),pa(null)};function Zu(t){return t.vnode.shapeFlag&4}let yi=!1;function sm(t,e=!1){yi=e;const{props:n,children:i}=t.vnode,r=Zu(t);Up(t,n,r,e),jp(t,i);const s=r?om(t,e):void 0;return yi=!1,s}function om(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Tu(new Proxy(t.ctx,Op));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?lm(t):null;Mn(t),Un();const s=kt(i,t,0,[t.props,r]);if($n(),tn(),uu(s)){if(s.then(tn,tn),e)return s.then(o=>{Dl(t,o,e)}).catch(o=>{ns(o,t,0)});t.asyncDep=s}else Dl(t,s,e)}else ef(t,e)}function Dl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=Nu(e)),ef(t,n)}let Ll;function ef(t,e,n){const i=t.type;if(!t.render){if(!e&&Ll&&!i.render){const r=i.template||fa(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ee(Ee({isCustomElement:s,delimiters:a},o),l);i.render=Ll(r,c)}}t.render=i.render||et}{Mn(t),Un();try{Rp(t)}finally{$n(),tn()}}}function am(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Le(t,"get","$attrs"),e[n]}}))}function lm(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return am(t)},slots:t.slots,emit:t.emit,expose:e}}function cs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Nu(Tu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in si)return si[n](t)},has(e,n){return n in e||n in si}}))}function cm(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function um(t){return U(t)&&"__vccOpts"in t}const Be=(t,e)=>ip(t,e,yi);function tf(t,e,n){const i=arguments.length;return i===2?oe(e)&&!H(e)?co(e)?ue(t,null,[e]):ue(t,e):ue(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&co(n)&&(n=[n]),ue(t,e,n))}const fm=Symbol.for("v-scx"),hm=()=>_r(fm),dm="3.3.9",pm="http://www.w3.org/2000/svg",qt=typeof document<"u"?document:null,Fl=qt&&qt.createElement("template"),mm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?qt.createElementNS(pm,t):qt.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>qt.createTextNode(t),createComment:t=>qt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Fl.innerHTML=i?`<svg>${t}</svg>`:t;const a=Fl.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gm=Symbol("_vtc");function _m(t,e,n){const i=t[gm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vm=Symbol("_vod");function ym(t,e,n){const i=t.style,r=me(n);if(n&&!r){if(e&&!me(e))for(const s in e)n[s]==null&&uo(i,s,"");for(const s in n)uo(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),vm in t&&(i.display=s)}}const Hl=/\s*!important$/;function uo(t,e,n){if(H(n))n.forEach(i=>uo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=bm(t,e);Hl.test(n)?t.setProperty(zn(i),n.replace(Hl,""),"important"):t[i]=n}}const Bl=["Webkit","Moz","ms"],Os={};function bm(t,e){const n=Os[e];if(n)return n;let i=ct(e);if(i!=="filter"&&i in t)return Os[e]=i;i=Zr(i);for(let r=0;r<Bl.length;r++){const s=Bl[r]+i;if(s in t)return Os[e]=s}return e}const zl="http://www.w3.org/1999/xlink";function wm(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zl,e.slice(6,e.length)):t.setAttributeNS(zl,e,n);else{const s=Ad(e);n==null||s&&!du(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Cm(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n==null?"":n;c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=du(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function _n(t,e,n,i){t.addEventListener(e,n,i)}function Em(t,e,n,i){t.removeEventListener(e,n,i)}const Ul=Symbol("_vei");function xm(t,e,n,i,r=null){const s=t[Ul]||(t[Ul]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Im(e);if(i){const c=s[e]=Am(i,r);_n(t,a,c,l)}else o&&(Em(t,a,o,l),s[e]=void 0)}}const $l=/(?:Once|Passive|Capture)$/;function Im(t){let e;if($l.test(t)){e={};let i;for(;i=t.match($l);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zn(t.slice(2)),e]}let Rs=0;const Sm=Promise.resolve(),Tm=()=>Rs||(Sm.then(()=>Rs=0),Rs=Date.now());function Am(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;tt(km(i,n.value),e,5,[i])};return n.value=t,n.attached=Tm(),n}function km(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Wl=/^on[a-z]/,Nm=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?_m(t,i,r):e==="style"?ym(t,n,i):Gr(e)?Ko(e)||xm(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pm(t,e,i,r))?Cm(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),wm(t,e,i,r))};function Pm(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Wl.test(e)&&U(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Wl.test(e)&&me(n)?!1:e in t}function Om(t){const e=rm();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>ho(s,r))},i=()=>{const r=t(e.proxy);fo(e.subTree,r),n(r)};yp(i),ss(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),ua(()=>r.disconnect())})}function fo(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{fo(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ho(t.el,e);else if(t.type===Ne)t.children.forEach(n=>fo(n,e));else if(t.type===vr){let{el:n,anchor:i}=t;for(;n&&(ho(n,e),n!==i);)n=n.nextSibling}}function ho(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const jl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>mr(e,n):e};function Rm(t){t.target.composing=!0}function Vl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ms=Symbol("_assign"),Ds={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Ms]=jl(r);const s=i||r.props&&r.props.type==="number";_n(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Xs(a)),t[Ms](a)}),n&&_n(t,"change",()=>{t.value=t.value.trim()}),e||(_n(t,"compositionstart",Rm),_n(t,"compositionend",Vl),_n(t,"change",Vl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t[Ms]=jl(s),t.composing)return;const o=r||t.type==="number"?Xs(t.value):t.value,a=e==null?"":e;o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===a)||(t.value=a))}},Mm=["ctrl","shift","alt","meta"],Dm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mm.some(n=>t[`${n}Key`]&&!e.includes(n))},Lm=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=Dm[e[r]];if(s&&s(n,e))return}return t(n,...i)},Fm=Ee({patchProp:Nm},mm);let Yl;function Hm(){return Yl||(Yl=Yp(Fm))}const Bm=(...t)=>{const e=Hm().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=zm(i);if(!r)return;const s=e._component;!U(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function zm(t){return me(t)?document.querySelector(t):t}const Um="/icon.svg",$m="/sl-logo.svg";/**
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
 */const nf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw Wn(e)},Wn=function(t){return new Error("Firebase Database ("+nf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const rf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Wm=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ma={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),i.push(n[u],n[f],n[h],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw new jm;const h=s<<2|a>>4;if(i.push(h),c!==64){const m=a<<4&240|c>>2;if(i.push(m),f!==64){const y=c<<6&192|f;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sf=function(t){const e=rf(t);return ma.encodeByteArray(e,!0)},Ar=function(t){return sf(t).replace(/\./g,"")},po=function(t){try{return ma.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vm(t){return of(void 0,t)}function of(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ym(n)||(t[n]=of(t[n],e[n]));return t}function Ym(t){return t!=="__proto__"}/**
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
 */function Km(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qm=()=>Km().__FIREBASE_DEFAULTS__,Gm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&po(t[1]);return e&&JSON.parse(e)},af=()=>{try{return qm()||Gm()||Qm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xm=t=>{var e,n;return(n=(e=af())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jm=t=>{const e=Xm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},lf=()=>{var t;return(t=af())===null||t===void 0?void 0:t.config};/**
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
 */class us{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Zm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ar(JSON.stringify(n)),Ar(JSON.stringify(o)),a].join(".")}/**
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
 */function eg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(eg())}function tg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uf(){return nf.NODE_ADMIN===!0}function ng(){try{return typeof indexedDB=="object"}catch{return!1}}function ig(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const rg="FirebaseError";class Fi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=rg,Object.setPrototypeOf(this,Fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ff.prototype.create)}}class ff{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?sg(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Fi(r,a,i)}}function sg(t,e){return t.replace(og,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const og=/\{\$([^}]+)}/g;/**
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
 */function bi(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
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
 */const hf=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=bi(po(s[0])||""),n=bi(po(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},ag=function(t){const e=hf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lg=function(t){const e=hf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ct(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Dn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Kl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function mo(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(ql(s)&&ql(o)){if(!mo(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function ql(t){return t!==null&&typeof t=="object"}/**
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
 */function cg(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class ug{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function ga(t,e){return`${t} failed: ${e} argument `}/**
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
 */const fg=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,E(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},fs=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function jn(t){return t&&t._delegate?t._delegate:t}class wi{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vt="[DEFAULT]";/**
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
 */class hg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new us;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pg(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:dg(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dg(t){return t===Vt?void 0:t}function pg(t){return t.instantiationMode==="EAGER"}/**
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
 */class mg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const gg={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},_g=ee.INFO,vg={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},yg=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=vg[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class df{constructor(e){this.name=e,this._logLevel=_g,this._logHandler=yg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const bg=(t,e)=>e.some(n=>t instanceof n);let Gl,Ql;function wg(){return Gl||(Gl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cg(){return Ql||(Ql=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pf=new WeakMap,go=new WeakMap,mf=new WeakMap,Ls=new WeakMap,_a=new WeakMap;function Eg(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nt(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pf.set(n,t)}).catch(()=>{}),_a.set(e,t),e}function xg(t){if(go.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});go.set(t,e)}let _o={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return go.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ig(t){_o=t(_o)}function Sg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Fs(this),e,...n);return mf.set(i,e.sort?e.sort():[e]),Nt(i)}:Cg().includes(t)?function(...e){return t.apply(Fs(this),e),Nt(pf.get(this))}:function(...e){return Nt(t.apply(Fs(this),e))}}function Tg(t){return typeof t=="function"?Sg(t):(t instanceof IDBTransaction&&xg(t),bg(t,wg())?new Proxy(t,_o):t)}function Nt(t){if(t instanceof IDBRequest)return Eg(t);if(Ls.has(t))return Ls.get(t);const e=Tg(t);return e!==t&&(Ls.set(t,e),_a.set(e,t)),e}const Fs=t=>_a.get(t);function Ag(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Nt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Nt(o.result),l.oldVersion,l.newVersion,Nt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const kg=["get","getKey","getAll","getAllKeys","count"],Ng=["put","add","delete","clear"],Hs=new Map;function Xl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hs.get(e))return Hs.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Ng.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||kg.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Hs.set(e,s),s}Ig(t=>({...t,get:(e,n,i)=>Xl(e,n)||t.get(e,n,i),has:(e,n)=>!!Xl(e,n)||t.has(e,n)}));/**
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
 */class Pg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Og(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Og(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vo="@firebase/app",Jl="0.9.13";/**
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
 */const on=new df("@firebase/app"),Rg="@firebase/app-compat",Mg="@firebase/analytics-compat",Dg="@firebase/analytics",Lg="@firebase/app-check-compat",Fg="@firebase/app-check",Hg="@firebase/auth",Bg="@firebase/auth-compat",zg="@firebase/database",Ug="@firebase/database-compat",$g="@firebase/functions",Wg="@firebase/functions-compat",jg="@firebase/installations",Vg="@firebase/installations-compat",Yg="@firebase/messaging",Kg="@firebase/messaging-compat",qg="@firebase/performance",Gg="@firebase/performance-compat",Qg="@firebase/remote-config",Xg="@firebase/remote-config-compat",Jg="@firebase/storage",Zg="@firebase/storage-compat",e_="@firebase/firestore",t_="@firebase/firestore-compat",n_="firebase",i_="9.23.0";/**
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
 */const yo="[DEFAULT]",r_={[vo]:"fire-core",[Rg]:"fire-core-compat",[Dg]:"fire-analytics",[Mg]:"fire-analytics-compat",[Fg]:"fire-app-check",[Lg]:"fire-app-check-compat",[Hg]:"fire-auth",[Bg]:"fire-auth-compat",[zg]:"fire-rtdb",[Ug]:"fire-rtdb-compat",[$g]:"fire-fn",[Wg]:"fire-fn-compat",[jg]:"fire-iid",[Vg]:"fire-iid-compat",[Yg]:"fire-fcm",[Kg]:"fire-fcm-compat",[qg]:"fire-perf",[Gg]:"fire-perf-compat",[Qg]:"fire-rc",[Xg]:"fire-rc-compat",[Jg]:"fire-gcs",[Zg]:"fire-gcs-compat",[e_]:"fire-fst",[t_]:"fire-fst-compat","fire-js":"fire-js",[n_]:"fire-js-all"};/**
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
 */const Nr=new Map,bo=new Map;function s_(t,e){try{t.container.addComponent(e)}catch(n){on.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pr(t){const e=t.name;if(bo.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;bo.set(e,t);for(const n of Nr.values())s_(n,t);return!0}function o_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const a_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pt=new ff("app","Firebase",a_);/**
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
 */class l_{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const c_=i_;function va(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:yo,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Pt.create("bad-app-name",{appName:String(r)});if(n||(n=lf()),!n)throw Pt.create("no-options");const s=Nr.get(r);if(s){if(mo(n,s.options)&&mo(i,s.config))return s;throw Pt.create("duplicate-app",{appName:r})}const o=new mg(r);for(const l of bo.values())o.addComponent(l);const a=new l_(n,i,o);return Nr.set(r,a),a}function u_(t=yo){const e=Nr.get(t);if(!e&&t===yo&&lf())return va();if(!e)throw Pt.create("no-app",{appName:t});return e}function Sn(t,e,n){var i;let r=(i=r_[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(a.join(" "));return}Pr(new wi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const f_="firebase-heartbeat-database",h_=1,Ci="firebase-heartbeat-store";let Bs=null;function gf(){return Bs||(Bs=Ag(f_,h_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ci)}}}).catch(t=>{throw Pt.create("idb-open",{originalErrorMessage:t.message})})),Bs}async function d_(t){try{return await(await gf()).transaction(Ci).objectStore(Ci).get(_f(t))}catch(e){if(e instanceof Fi)on.warn(e.message);else{const n=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});on.warn(n.message)}}}async function Zl(t,e){try{const i=(await gf()).transaction(Ci,"readwrite");await i.objectStore(Ci).put(e,_f(t)),await i.done}catch(n){if(n instanceof Fi)on.warn(n.message);else{const i=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});on.warn(i.message)}}}function _f(t){return`${t.name}!${t.options.appId}`}/**
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
 */const p_=1024,m_=30*24*60*60*1e3;class g_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new v_(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ec();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=m_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ec(),{heartbeatsToSend:n,unsentEntries:i}=__(this._heartbeatsCache.heartbeats),r=Ar(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ec(){return new Date().toISOString().substring(0,10)}function __(t,e=p_){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),tc(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tc(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class v_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ng()?ig().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await d_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tc(t){return Ar(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function y_(t){Pr(new wi("platform-logger",e=>new Pg(e),"PRIVATE")),Pr(new wi("heartbeat",e=>new g_(e),"PRIVATE")),Sn(vo,Jl,t),Sn(vo,Jl,"esm2017"),Sn("fire-js","")}y_("");var b_="firebase",w_="9.23.0";/**
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
 */Sn(b_,w_,"app");const nc="@firebase/database",ic="0.14.4";/**
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
 */let vf="";function C_(t){vf=t}/**
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
 */class E_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class x_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const yf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new E_(e)}}catch{}return new x_},Qt=yf("localStorage"),wo=yf("sessionStorage");/**
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
 */const Tn=new df("@firebase/database"),I_=function(){let t=1;return function(){return t++}}(),bf=function(t){const e=fg(t),n=new ug;n.update(e);const i=n.digest();return ma.encodeByteArray(i)},Hi=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Hi.apply(null,i):typeof i=="object"?e+=de(i):e+=i,e+=" "}return e};let nn=null,rc=!0;const S_=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Tn.logLevel=ee.VERBOSE,nn=Tn.log.bind(Tn),e&&wo.set("logging_enabled",!0)):typeof t=="function"?nn=t:(nn=null,wo.remove("logging_enabled"))},xe=function(...t){if(rc===!0&&(rc=!1,nn===null&&wo.get("logging_enabled")===!0&&S_(!0)),nn){const e=Hi.apply(null,t);nn(e)}},Bi=function(t){return function(...e){xe(t,...e)}},Co=function(...t){const e="FIREBASE INTERNAL ERROR: "+Hi(...t);Tn.error(e)},_t=function(...t){const e=`FIREBASE FATAL ERROR: ${Hi(...t)}`;throw Tn.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+Hi(...t);Tn.warn(e)},T_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},A_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ln="[MIN_NAME]",an="[MAX_NAME]",Vn=function(t,e){if(t===e)return 0;if(t===Ln||e===an)return-1;if(e===Ln||t===an)return 1;{const n=sc(t),i=sc(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},k_=function(t,e){return t===e?0:t<e?-1:1},Jn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},ya=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=de(e[i]),n+=":",n+=ya(t[e[i]]);return n+="}",n},Cf=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ef=function(t){E(!wf(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},N_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},P_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function O_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const R_=new RegExp("^-?(0*)\\d{1,10}$"),M_=-2147483648,D_=2147483647,sc=function(t){if(R_.test(t)){const e=Number(t);if(e>=M_&&e<=D_)return e}return null},Yn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},L_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},li=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class F_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class H_{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class An{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}An.OWNER="owner";/**
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
 */const ba="5",xf="v",If="s",Sf="r",Tf="f",Af=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kf="ls",Nf="p",Eo="ac",Pf="websocket",Of="long_polling";/**
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
 */class Rf{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function B_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Mf(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let i;if(e===Pf)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Of)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);B_(t)&&(n.ns=t.namespace);const r=[];return Fe(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class z_{constructor(){this.counters_={}}incrementCounter(e,n=1){Ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Vm(this.counters_)}}/**
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
 */const zs={},Us={};function wa(t){const e=t.toString();return zs[e]||(zs[e]=new z_),zs[e]}function U_(t,e){const n=t.toString();return Us[n]||(Us[n]=e()),Us[n]}/**
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
 */class $_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Yn(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const oc="start",W_="close",j_="pLPCommand",V_="pRTLPCB",Df="id",Lf="pw",Ff="ser",Y_="cb",K_="seg",q_="ts",G_="d",Q_="dframe",Hf=1870,Bf=30,X_=Hf-Bf,J_=25e3,Z_=3e4;class vn{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bi(e),this.stats_=wa(n),this.urlFn=l=>(this.appCheckToken&&(l[Eo]=this.appCheckToken),Mf(n,Of,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Z_)),A_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ca((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===oc)this.id=a,this.password=l;else if(o===W_)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[oc]="t",i[Ff]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Y_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[xf]=ba,this.transportSessionId&&(i[If]=this.transportSessionId),this.lastSessionId&&(i[kf]=this.lastSessionId),this.applicationId&&(i[Nf]=this.applicationId),this.appCheckToken&&(i[Eo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Af.test(location.hostname)&&(i[Sf]=Tf);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vn.forceAllow_=!0}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){return vn.forceAllow_?!0:!vn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!N_()&&!P_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=sf(n),r=Cf(i,X_);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Q_]="t",i[Df]=e,i[Lf]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ca{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=I_(),window[j_+this.uniqueCallbackIdentifier]=e,window[V_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ca.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){xe("frame writing exception"),a.stack&&xe(a.stack),xe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Df]=this.myID,e[Lf]=this.myPW,e[Ff]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bf+i.length<=Hf;){const o=this.pendingSegs.shift();i=i+"&"+K_+r+"="+o.seg+"&"+q_+r+"="+o.ts+"&"+G_+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(J_)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const ev=16384,tv=45e3;let Or=null;typeof MozWebSocket<"u"?Or=MozWebSocket:typeof WebSocket<"u"&&(Or=WebSocket);class qe{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bi(this.connId),this.stats_=wa(n),this.connURL=qe.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[xf]=ba,typeof location<"u"&&location.hostname&&Af.test(location.hostname)&&(o[Sf]=Tf),n&&(o[If]=n),i&&(o[kf]=i),r&&(o[Eo]=r),s&&(o[Nf]=s),Mf(e,Pf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qt.set("previous_websocket_failure",!0);try{let i;uf(),this.mySock=new Or(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Or!==null&&!qe.forceDisallow_}static previouslyFailed(){return Qt.isInMemoryStorage||Qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=bi(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Cf(n,ev);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tv))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2;qe.healthyTimeout=3e4;/**
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
 */class Ei{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vn,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=qe&&qe.isAvailable();let i=n&&!qe.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[qe];else{const r=this.transports_=[];for(const s of Ei.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Ei.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ei.globalTransportInitialized_=!1;/**
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
 */const nv=6e4,iv=5e3,rv=10*1024,sv=100*1024,$s="t",ac="d",ov="s",lc="r",av="e",cc="o",uc="a",fc="n",hc="p",lv="h";class cv{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bi("c:"+this.id+":"),this.transportManager_=new Ei(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=li(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sv?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rv?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($s in e){const n=e[$s];n===uc?this.upgradeIfSecondaryHealthy_():n===lc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Jn("t",e),i=Jn("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:uc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Jn("t",e),i=Jn("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Jn($s,e);if(ac in e){const i=e[ac];if(n===lv){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===fc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ov?this.onConnectionShutdown_(i):n===lc?this.onReset_(i):n===av?Co("Server Error: "+i):n===cc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Co("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ba!==i&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),li(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nv))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):li(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iv))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class zf{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Uf{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Rr extends Uf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!cf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Rr}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const dc=32,pc=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new X("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dt(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function $f(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uv(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Wf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function pe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof X)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new X(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Pe(t,e){const n=V(t),i=V(e);if(n===null)return e;if(n===i)return Pe(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Vf(t,e){if(Dt(t)!==Dt(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Dt(t)>Dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class fv{constructor(e,n){this.errorPrefix_=n,this.parts_=Wf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=fs(this.parts_[i]);Yf(this)}}function hv(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fs(e),Yf(t)}function dv(t){const e=t.parts_.pop();t.byteLength_-=fs(e),t.parts_.length>0&&(t.byteLength_-=1)}function Yf(t){if(t.byteLength_>pc)throw new Error(t.errorPrefix_+"has a key path longer than "+pc+" bytes ("+t.byteLength_+").");if(t.parts_.length>dc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dc+") or object contains a cycle "+Yt(t))}function Yt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ea extends Uf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ea}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Zn=1e3,pv=60*5*1e3,mc=30*1e3,mv=1.3,gv=3e4,_v="server_kill",gc=3;class gt extends zf{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=gt.nextPersistentConnectionId_++,this.log_=Bi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zn,this.maxReconnectDelay_=pv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!uf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ea.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Rr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(de(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new us,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;gt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ct(e,"w")){const i=Dn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ag(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Co("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gv&&(this.reconnectDelay_=Zn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+gt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new cv(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,m=>{De(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(_v)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&De(f),l())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Kl(this.interruptReasons_)&&(this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>ya(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new X(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gc&&(this.reconnectDelay_=mc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vf.replace(/\./g,"-")]=1,cf()?e["framework.cordova"]=1:tg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rr.getInstance().currentlyOnline();return Kl(this.interruptReasons_)&&e}}gt.nextPersistentConnectionId_=0;gt.nextConnectionId_=0;/**
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
 */class ${constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new $(e,n)}}/**
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
 */class hs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new $(Ln,e),r=new $(Ln,n);return this.compare(i,r)!==0}minPost(){return $.MIN}}/**
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
 */let ir;class Kf extends hs{static get __EMPTY_NODE(){return ir}static set __EMPTY_NODE(e){ir=e}compare(e,n){return Vn(e.name,n.name)}isDefinedOn(e){throw Wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(an,ir)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,ir)}toString(){return".key"}}const kn=new Kf;/**
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
 */class rr{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:ve.RED,this.left=r!=null?r:Me.EMPTY_NODE,this.right=s!=null?s:Me.EMPTY_NODE}copy(e,n,i,r,s){return new ve(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class vv{copy(e,n,i,r,s){return this}insert(e,n,i){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Me{constructor(e,n=Me.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Me(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new rr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new rr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new rr(this.root_,null,this.comparator_,!0,e)}}Me.EMPTY_NODE=new vv;/**
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
 */function yv(t,e){return Vn(t.name,e.name)}function xa(t,e){return Vn(t,e)}/**
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
 */let xo;function bv(t){xo=t}const qf=function(t){return typeof t=="number"?"number:"+Ef(t):"string:"+t},Gf=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ct(e,".sv"),"Priority must be a string or number.")}else E(t===xo||t.isEmpty(),"priority of unexpected type.");E(t===xo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let _c;class _e{constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gf(this.priorityNode_)}static set __childrenNodeConstructor(e){_c=e}static get __childrenNodeConstructor(){return _c}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:V(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=V(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(E(i!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ef(this.value_):e+=this.value_,this.lazyHash_=bf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=_e.VALUE_TYPE_ORDER.indexOf(n),s=_e.VALUE_TYPE_ORDER.indexOf(i);return E(r>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Qf,Xf;function wv(t){Qf=t}function Cv(t){Xf=t}class Ev extends hs{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Vn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(an,new _e("[PRIORITY-POST]",Xf))}makePost(e,n){const i=Qf(e);return new $(n,new _e("[PRIORITY-POST]",i))}toString(){return".priority"}}const ce=new Ev;/**
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
 */const xv=Math.log(2);class Iv{constructor(e){const n=s=>parseInt(Math.log(s)/xv,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mr=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let f,h;if(u===0)return null;if(u===1)return f=t[l],h=n?n(f):f,new ve(h,f.node,ve.BLACK,null,null);{const m=parseInt(u/2,10)+l,y=r(l,m),w=r(m+1,c);return f=t[m],h=n?n(f):f,new ve(h,f.node,ve.BLACK,y,w)}},s=function(l){let c=null,u=null,f=t.length;const h=function(y,w){const D=f-y,I=f;f-=y;const T=r(D+1,I),F=t[D],N=n?n(F):F;m(new ve(N,F.node,w,null,T))},m=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const w=l.nextBitIsOne(),D=Math.pow(2,l.count-(y+1));w?h(D,ve.BLACK):(h(D,ve.BLACK),h(D,ve.RED))}return u},o=new Iv(t.length),a=s(o);return new Me(i||e,a)};/**
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
 */let Ws;const gn={};class pt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(gn&&ce,"ChildrenNode.ts has not been loaded"),Ws=Ws||new pt({".priority":gn},{".priority":ce}),Ws}get(e){const n=Dn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Me?n:null}hasIndex(e){return Ct(this.indexSet_,e.toString())}addIndex(e,n){E(e!==kn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator($.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Mr(i,e.getCompare()):a=gn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new pt(u,c)}addToIndexes(e,n){const i=kr(this.indexes_,(r,s)=>{const o=Dn(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),r===gn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator($.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Mr(a,o.getCompare())}else return gn;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new $(e.name,a))),l.insert(e,e.node)}});return new pt(i,this.indexSet_)}removeFromIndexes(e,n){const i=kr(this.indexes_,r=>{if(r===gn)return r;{const s=n.get(e.name);return s?r.remove(new $(e.name,s)):r}});return new pt(i,this.indexSet_)}}/**
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
 */let ei;class L{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Gf(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ei||(ei=new L(new Me(xa),null,pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ei}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ei:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new $(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?ei:this.priorityNode_;return new L(r,o,s)}}updateChild(e,n){const i=V(e);if(i===null)return n;{E(V(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(te(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(ce,(o,a)=>{n[o]=a.val(e),i++,s&&L.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qf(this.getPriority().val())+":"),this.forEachChild(ce,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":bf(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new $(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,$.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zi?-1:0}withIndex(e){if(e===kn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===kn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ce),r=n.getIterator(ce);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===kn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Sv extends L{constructor(){super(new Me(xa),L.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const zi=new Sv;Object.defineProperties($,{MIN:{value:new $(Ln,L.EMPTY_NODE)},MAX:{value:new $(an,zi)}});Kf.__EMPTY_NODE=L.EMPTY_NODE;_e.__childrenNodeConstructor=L;bv(zi);Cv(zi);/**
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
 */const Tv=!0;function ye(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,ye(e))}if(!(t instanceof Array)&&Tv){const n=[];let i=!1;if(Fe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ye(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new $(o,l)))}}),n.length===0)return L.EMPTY_NODE;const s=Mr(n,yv,o=>o.name,xa);if(i){const o=Mr(n,ce.getCompare());return new L(s,ye(e),new pt({".priority":o},{".priority":ce}))}else return new L(s,ye(e),pt.Default)}else{let n=L.EMPTY_NODE;return Fe(t,(i,r)=>{if(Ct(t,i)&&i.substring(0,1)!=="."){const s=ye(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(ye(e))}}wv(ye);/**
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
 */class Av extends hs{constructor(e){super(),this.indexPath_=e,E(!W(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Vn(e.name,n.name):s}makePost(e,n){const i=ye(e),r=L.EMPTY_NODE.updateChild(this.indexPath_,i);return new $(n,r)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,zi);return new $(an,e)}toString(){return Wf(this.indexPath_,0).join("/")}}/**
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
 */class kv extends hs{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Vn(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const i=ye(e);return new $(n,i)}toString(){return".value"}}const Nv=new kv;/**
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
 */function Jf(t){return{type:"value",snapshotNode:t}}function Fn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function xi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ii(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Pv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ia{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(xi(n,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Fn(n,i)):o.trackChildChange(Ii(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ce,(r,s)=>{n.hasChild(r)||i.trackChildChange(xi(r,s))}),n.isLeafNode()||n.forEachChild(ce,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(Ii(r,s,o))}else i.trackChildChange(Fn(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Si{constructor(e){this.indexedFilter_=new Ia(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Si.getStartPost_(e),this.endPost_=Si.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,r,s,o){return this.matches(new $(n,i))||(i=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=L.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(ce,(o,a)=>{s.matches(new $(o,a))||(r=r.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Ov{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Si(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new $(n,i))||(i=L.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,m)=>f(m,h)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const l=new $(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let h=r.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!i.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Ii(n,i,f)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(xi(n,f));const w=a.updateImmediateChild(n,L.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Fn(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(xi(c.name,c.node)),s.trackChildChange(Fn(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,L.EMPTY_NODE)):e}}/**
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
 */class Sa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ln}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:an}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new Sa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rv(t){return t.loadsAllData()?new Ia(t.getIndex()):t.hasLimit()?new Ov(t):new Si(t)}function vc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ce?n="$priority":t.index_===Nv?n="$value":t.index_===kn?n="$key":(E(t.index_ instanceof Av,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=de(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+de(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=de(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+de(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function yc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
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
 */class Dr extends zf{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Bi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Dr.getListenId_(e,i),a={};this.listens_[o]=a;const l=vc(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,i),Dn(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,n){const i=Dr.getListenId_(e,n);delete this.listens_[i]}get(e){const n=vc(e._queryParams),i=e._path.toString(),r=new us;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cg(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=bi(a.responseText)}catch{De("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Mv{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Lr(){return{value:null,children:new Map}}function Zf(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=V(e);t.children.has(i)||t.children.set(i,Lr());const r=t.children.get(i);e=te(e),Zf(r,e,n)}}function Io(t,e,n){t.value!==null?n(e,t.value):Dv(t,(i,r)=>{const s=new X(e.toString()+"/"+i);Io(r,s,n)})}function Dv(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Lv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const bc=10*1e3,Fv=30*1e3,Hv=5*60*1e3;class Bv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Lv(e);const i=bc+(Fv-bc)*Math.random();li(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Fe(e,(r,s)=>{s>0&&Ct(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),li(this.reportStats_.bind(this),Math.floor(Math.random()*2*Hv))}}/**
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
 */var Je;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Je||(Je={}));function eh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ta(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Aa(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Fr{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Je.ACK_USER_WRITE,this.source=eh()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new Fr(K(),n,this.revert)}}else return E(V(this.path)===e,"operationForChild called for unrelated child."),new Fr(te(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ti{constructor(e,n){this.source=e,this.path=n,this.type=Je.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new Ti(this.source,K()):new Ti(this.source,te(this.path))}}/**
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
 */class ln{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Je.OVERWRITE}operationForChild(e){return W(this.path)?new ln(this.source,K(),this.snap.getImmediateChild(e)):new ln(this.source,te(this.path),this.snap)}}/**
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
 */class Ai{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Je.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new ln(this.source,K(),n.value):new Ai(this.source,K(),n)}else return E(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ai(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Lt{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class zv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Uv(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Pv(o.childName,o.snapshotNode))}),ti(t,r,"child_removed",e,i,n),ti(t,r,"child_added",e,i,n),ti(t,r,"child_moved",s,i,n),ti(t,r,"child_changed",e,i,n),ti(t,r,"value",e,i,n),r}function ti(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Wv(t,a,l)),o.forEach(a=>{const l=$v(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function $v(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Wv(t,e,n){if(e.childName==null||n.childName==null)throw Wn("Should only compare child_ events.");const i=new $(e.childName,e.snapshotNode),r=new $(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function ds(t,e){return{eventCache:t,serverCache:e}}function ci(t,e,n,i){return ds(new Lt(e,n,i),t.serverCache)}function th(t,e,n,i){return ds(t.eventCache,new Lt(e,n,i))}function Hr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let js;const jv=()=>(js||(js=new Me(k_)),js);class ne{constructor(e,n=jv()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return Fe(e,(i,r)=>{n=n.set(new X(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(W(e))return null;{const i=V(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(te(e),n);return s!=null?{path:pe(new X(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=V(e),i=this.children.get(n);return i!==null?i.subtree(te(e)):new ne(null)}}set(e,n){if(W(e))return new ne(n,this.children);{const i=V(e),s=(this.children.get(i)||new ne(null)).set(te(e),n),o=this.children.insert(i,s);return new ne(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=V(e),i=this.children.get(n);if(i){const r=i.remove(te(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new ne(null):new ne(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=V(e),i=this.children.get(n);return i?i.get(te(e)):null}}setTree(e,n){if(W(e))return n;{const i=V(e),s=(this.children.get(i)||new ne(null)).setTree(te(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ne(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(pe(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(W(e))return null;{const s=V(e),o=this.children.get(s);return o?o.findOnPath_(te(e),pe(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,i){if(W(e))return this;{this.value&&i(n,this.value);const r=V(e),s=this.children.get(r);return s?s.foreachOnPath_(te(e),pe(n,r),i):new ne(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(pe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class nt{constructor(e){this.writeTree_=e}static empty(){return new nt(new ne(null))}}function ui(t,e,n){if(W(e))return new nt(new ne(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Pe(r,e);return s=s.updateChild(o,n),new nt(t.writeTree_.set(r,s))}else{const r=new ne(n),s=t.writeTree_.setTree(e,r);return new nt(s)}}}function wc(t,e,n){let i=t;return Fe(n,(r,s)=>{i=ui(i,pe(e,r),s)}),i}function Cc(t,e){if(W(e))return nt.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new nt(n)}}function So(t,e){return hn(t,e)!=null}function hn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pe(n.path,e)):null}function Ec(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(i,r)=>{e.push(new $(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new $(i,r.value))}),e}function Ot(t,e){if(W(e))return t;{const n=hn(t,e);return n!=null?new nt(new ne(n)):new nt(t.writeTree_.subtree(e))}}function To(t){return t.writeTree_.isEmpty()}function Hn(t,e){return nh(K(),t.writeTree_,e)}function nh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=nh(pe(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(pe(t,".priority"),i)),n}}/**
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
 */function ps(t,e){return oh(e,t)}function Vv(t,e,n,i,r){E(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=ui(t.visibleWrites,e,n)),t.lastWriteId=i}function Yv(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Kv(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&qv(a,i.path)?r=!1:Xe(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return Gv(t),!0;if(i.snap)t.visibleWrites=Cc(t.visibleWrites,i.path);else{const a=i.children;Fe(a,l=>{t.visibleWrites=Cc(t.visibleWrites,pe(i.path,l))})}return!0}else return!1}function qv(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(pe(t.path,n),e))return!0;return!1}function Gv(t){t.visibleWrites=ih(t.allWrites,Qv,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Qv(t){return t.visible}function ih(t,e,n){let i=nt.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Xe(n,o)?(a=Pe(n,o),i=ui(i,a,s.snap)):Xe(o,n)&&(a=Pe(o,n),i=ui(i,K(),s.snap.getChild(a)));else if(s.children){if(Xe(n,o))a=Pe(n,o),i=wc(i,a,s.children);else if(Xe(o,n))if(a=Pe(o,n),W(a))i=wc(i,K(),s.children);else{const l=Dn(s.children,V(a));if(l){const c=l.getChild(te(a));i=ui(i,K(),c)}}}else throw Wn("WriteRecord should have .snap or .children")}}return i}function rh(t,e,n,i,r){if(!i&&!r){const s=hn(t.visibleWrites,e);if(s!=null)return s;{const o=Ot(t.visibleWrites,e);if(To(o))return n;if(n==null&&!So(o,K()))return null;{const a=n||L.EMPTY_NODE;return Hn(o,a)}}}else{const s=Ot(t.visibleWrites,e);if(!r&&To(s))return n;if(!r&&n==null&&!So(s,K()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Xe(c.path,e)||Xe(e,c.path))},a=ih(t.allWrites,o,e),l=n||L.EMPTY_NODE;return Hn(a,l)}}}function Xv(t,e,n){let i=L.EMPTY_NODE;const r=hn(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ce,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Ot(t.visibleWrites,e);return n.forEachChild(ce,(o,a)=>{const l=Hn(Ot(s,new X(o)),a);i=i.updateImmediateChild(o,l)}),Ec(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Ot(t.visibleWrites,e);return Ec(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Jv(t,e,n,i,r){E(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=pe(e,n);if(So(t.visibleWrites,s))return null;{const o=Ot(t.visibleWrites,s);return To(o)?r.getChild(n):Hn(o,r.getChild(n))}}function Zv(t,e,n,i){const r=pe(e,n),s=hn(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Ot(t.visibleWrites,r);return Hn(o,i.getNode().getImmediateChild(n))}else return null}function ey(t,e){return hn(t.visibleWrites,e)}function ty(t,e,n,i,r,s,o){let a;const l=Ot(t.visibleWrites,e),c=hn(l,K());if(c!=null)a=c;else if(n!=null)a=Hn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=h.getNext();for(;m&&u.length<r;)f(m,i)!==0&&u.push(m),m=h.getNext();return u}else return[]}function ny(){return{visibleWrites:nt.empty(),allWrites:[],lastWriteId:-1}}function Br(t,e,n,i){return rh(t.writeTree,t.treePath,e,n,i)}function ka(t,e){return Xv(t.writeTree,t.treePath,e)}function xc(t,e,n,i){return Jv(t.writeTree,t.treePath,e,n,i)}function zr(t,e){return ey(t.writeTree,pe(t.treePath,e))}function iy(t,e,n,i,r,s){return ty(t.writeTree,t.treePath,e,n,i,r,s)}function Na(t,e,n){return Zv(t.writeTree,t.treePath,e,n)}function sh(t,e){return oh(pe(t.treePath,e),t.writeTree)}function oh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ry{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Ii(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,xi(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Fn(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Ii(i,e.snapshotNode,r.oldSnap));else throw Wn("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class sy{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const ah=new sy;class Pa{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Lt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Na(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cn(this.viewCache_),s=iy(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function oy(t){return{filter:t}}function ay(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ly(t,e,n,i,r){const s=new ry;let o,a;if(n.type===Je.OVERWRITE){const c=n;c.source.fromUser?o=Ao(t,e,c.path,c.snap,i,r,s):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=Ur(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Je.MERGE){const c=n;c.source.fromUser?o=uy(t,e,c.path,c.children,i,r,s):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ko(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Je.ACK_USER_WRITE){const c=n;c.revert?o=dy(t,e,c.path,i,r,s):o=fy(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Je.LISTEN_COMPLETE)o=hy(t,e,n.path,i,s);else throw Wn("Unknown operation type: "+n.type);const l=s.getChanges();return cy(e,o,l),{viewCache:o,changes:l}}function cy(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Hr(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Jf(Hr(e)))}}function lh(t,e,n,i,r,s){const o=e.eventCache;if(zr(i,n)!=null)return e;{let a,l;if(W(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=cn(e),u=c instanceof L?c:L.EMPTY_NODE,f=ka(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Br(i,cn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=V(n);if(c===".priority"){E(Dt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=xc(i,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=te(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=xc(i,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(u,h):f=o.getNode().getImmediateChild(c)}else f=Na(i,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,r,s):a=o.getNode()}}return ci(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Ur(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),m,null)}else{const m=V(n);if(!l.isCompleteForPath(n)&&Dt(n)>1)return e;const y=te(n),D=l.getNode().getImmediateChild(m).updateChild(y,i);m===".priority"?c=u.updatePriority(l.getNode(),D):c=u.updateChild(l.getNode(),m,D,y,ah,null)}const f=th(e,c,l.isFullyInitialized()||W(n),u.filtersNodes()),h=new Pa(r,f,s);return lh(t,f,n,r,h,a)}function Ao(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new Pa(r,e,s);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ci(e,c,!0,t.filter.filtersNodes());else{const f=V(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ci(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=te(n),m=a.getNode().getImmediateChild(f);let y;if(W(h))y=i;else{const w=u.getCompleteChild(f);w!=null?$f(h)===".priority"&&w.getChild(jf(h)).isEmpty()?y=w:y=w.updateChild(h,i):y=L.EMPTY_NODE}if(m.equals(y))l=e;else{const w=t.filter.updateChild(a.getNode(),f,y,h,u,o);l=ci(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ic(t,e){return t.eventCache.isCompleteForChild(e)}function uy(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=pe(n,l);Ic(e,V(u))&&(a=Ao(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=pe(n,l);Ic(e,V(u))||(a=Ao(t,a,u,c,r,s,o))}),a}function Sc(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function ko(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;W(n)?c=i:c=new ne(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),y=Sc(t,m,h);l=Ur(t,l,new X(f),y,r,s,o,a)}}),c.children.inorderTraversal((f,h)=>{const m=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!m){const y=e.serverCache.getNode().getImmediateChild(f),w=Sc(t,y,h);l=Ur(t,l,new X(f),w,r,s,o,a)}}),l}function fy(t,e,n,i,r,s,o){if(zr(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ur(t,e,n,l.getNode().getChild(n),r,s,a,o);if(W(n)){let c=new ne(null);return l.getNode().forEachChild(kn,(u,f)=>{c=c.set(new X(u),f)}),ko(t,e,n,c,r,s,a,o)}else return e}else{let c=new ne(null);return i.foreach((u,f)=>{const h=pe(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),ko(t,e,n,c,r,s,a,o)}}function hy(t,e,n,i,r){const s=e.serverCache,o=th(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return lh(t,o,n,i,ah,r)}function dy(t,e,n,i,r,s){let o;if(zr(i,n)!=null)return e;{const a=new Pa(i,e,r),l=e.eventCache.getNode();let c;if(W(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Br(i,cn(e));else{const f=e.serverCache.getNode();E(f instanceof L,"serverChildren would be complete if leaf node"),u=ka(i,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=V(n);let f=Na(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,te(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,L.EMPTY_NODE,te(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Br(i,cn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||zr(i,K())!=null,ci(e,c,o,t.filter.filtersNodes())}}/**
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
 */class py{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Ia(i.getIndex()),s=Rv(i);this.processor_=oy(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(L.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),u=new Lt(l,o.isFullyInitialized(),r.filtersNodes()),f=new Lt(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ds(f,u),this.eventGenerator_=new zv(this.query_)}get query(){return this.query_}}function my(t){return t.viewCache_.serverCache.getNode()}function gy(t){return Hr(t.viewCache_)}function _y(t,e){const n=cn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function Tc(t){return t.eventRegistrations_.length===0}function vy(t,e){t.eventRegistrations_.push(e)}function Ac(t,e,n){const i=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function kc(t,e,n,i){e.type===Je.MERGE&&e.source.queryId!==null&&(E(cn(t.viewCache_),"We should always have a full cache before handling merges"),E(Hr(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=ly(t.processor_,r,e,n,i);return ay(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,ch(t,s.changes,s.viewCache.eventCache.getNode(),null)}function yy(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ce,(s,o)=>{i.push(Fn(s,o))}),n.isFullyInitialized()&&i.push(Jf(n.getNode())),ch(t,i,n.getNode(),e)}function ch(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return Uv(t.eventGenerator_,e,n,r)}/**
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
 */let $r;class uh{constructor(){this.views=new Map}}function by(t){E(!$r,"__referenceConstructor has already been defined"),$r=t}function wy(){return E($r,"Reference.ts has not been loaded"),$r}function Cy(t){return t.views.size===0}function Oa(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return E(s!=null,"SyncTree gave us an op for an invalid query."),kc(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(kc(o,e,n,i));return s}}function fh(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Br(n,r?i:null),l=!1;a?l=!0:i instanceof L?(a=ka(n,i),l=!1):(a=L.EMPTY_NODE,l=!1);const c=ds(new Lt(a,l,!1),new Lt(i,r,!1));return new py(e,c)}return o}function Ey(t,e,n,i,r,s){const o=fh(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vy(o,n),yy(o,n)}function xy(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Ft(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Ac(c,n,i)),Tc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Ac(l,n,i)),Tc(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ft(t)&&s.push(new(wy())(e._repo,e._path)),{removed:s,events:o}}function hh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rt(t,e){let n=null;for(const i of t.views.values())n=n||_y(i,e);return n}function dh(t,e){if(e._queryParams.loadsAllData())return ms(t);{const i=e._queryIdentifier;return t.views.get(i)}}function ph(t,e){return dh(t,e)!=null}function Ft(t){return ms(t)!=null}function ms(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Wr;function Iy(t){E(!Wr,"__referenceConstructor has already been defined"),Wr=t}function Sy(){return E(Wr,"Reference.ts has not been loaded"),Wr}let Ty=1;class Nc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=ny(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mh(t,e,n,i,r){return Vv(t.pendingWriteTree_,e,n,i,r),r?$i(t,new ln(eh(),e,n)):[]}function Xt(t,e,n=!1){const i=Yv(t.pendingWriteTree_,e);if(Kv(t.pendingWriteTree_,e)){let s=new ne(null);return i.snap!=null?s=s.set(K(),!0):Fe(i.children,o=>{s=s.set(new X(o),!0)}),$i(t,new Fr(i.path,s,n))}else return[]}function Ui(t,e,n){return $i(t,new ln(Ta(),e,n))}function Ay(t,e,n){const i=ne.fromObject(n);return $i(t,new Ai(Ta(),e,i))}function ky(t,e){return $i(t,new Ti(Ta(),e))}function Ny(t,e,n){const i=Ma(t,n);if(i){const r=Da(i),s=r.path,o=r.queryId,a=Pe(s,e),l=new Ti(Aa(o),a);return La(t,s,l)}else return[]}function gh(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||ph(o,e))){const l=xy(o,e,n,i);Cy(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(h,m)=>Ft(m));if(u&&!f){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=My(h);for(let y=0;y<m.length;++y){const w=m[y],D=w.query,I=bh(t,w);t.listenProvider_.startListening(fi(D),ki(t,D),I.hashFn,I.onComplete)}}}!f&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(fi(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(gs(h));t.listenProvider_.stopListening(fi(h),m)}))}Dy(t,c)}return a}function _h(t,e,n,i){const r=Ma(t,i);if(r!=null){const s=Da(r),o=s.path,a=s.queryId,l=Pe(o,e),c=new ln(Aa(a),l,n);return La(t,o,c)}else return[]}function Py(t,e,n,i){const r=Ma(t,i);if(r){const s=Da(r),o=s.path,a=s.queryId,l=Pe(o,e),c=ne.fromObject(n),u=new Ai(Aa(a),l,c);return La(t,o,u)}else return[]}function Oy(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(h,m)=>{const y=Pe(h,r);s=s||Rt(m,y),o=o||Ft(m)});let a=t.syncPointTree_.get(r);a?(o=o||Ft(a),s=s||Rt(a,K())):(a=new uh,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((m,y)=>{const w=Rt(y,K());w&&(s=s.updateImmediateChild(m,w))}));const c=ph(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=gs(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=Ly();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=ps(t.pendingWriteTree_,r);let f=Ey(a,e,n,u,s,l);if(!c&&!o&&!i){const h=dh(a,e);f=f.concat(Fy(t,e,h))}return f}function Ra(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Pe(o,e),c=Rt(a,l);if(c)return c});return rh(r,e,s,n,!0)}function Ry(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=Pe(c,n);i=i||Rt(u,f)});let r=t.syncPointTree_.get(n);r?i=i||Rt(r,K()):(r=new uh,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new Lt(i,!0,!1):null,a=ps(t.pendingWriteTree_,e._path),l=fh(r,e,a,s?o.getNode():L.EMPTY_NODE,s);return gy(l)}function $i(t,e){return vh(e,t.syncPointTree_,null,ps(t.pendingWriteTree_,K()))}function vh(t,e,n,i){if(W(t.path))return yh(t,e,n,i);{const r=e.get(K());n==null&&r!=null&&(n=Rt(r,K()));let s=[];const o=V(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=sh(i,o);s=s.concat(vh(a,l,c,u))}return r&&(s=s.concat(Oa(r,t,i,n))),s}}function yh(t,e,n,i){const r=e.get(K());n==null&&r!=null&&(n=Rt(r,K()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=sh(i,o),u=t.operationForChild(o);u&&(s=s.concat(yh(u,a,l,c)))}),r&&(s=s.concat(Oa(r,t,i,n))),s}function bh(t,e){const n=e.query,i=ki(t,n);return{hashFn:()=>(my(e)||L.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?Ny(t,n._path,i):ky(t,n._path);{const s=O_(r,n);return gh(t,n,null,s)}}}}function ki(t,e){const n=gs(e);return t.queryToTagMap.get(n)}function gs(t){return t._path.toString()+"$"+t._queryIdentifier}function Ma(t,e){return t.tagToQueryMap.get(e)}function Da(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function La(t,e,n){const i=t.syncPointTree_.get(e);E(i,"Missing sync point for query tag that we're tracking");const r=ps(t.pendingWriteTree_,e);return Oa(i,n,r,null)}function My(t){return t.fold((e,n,i)=>{if(n&&Ft(n))return[ms(n)];{let r=[];return n&&(r=hh(n)),Fe(i,(s,o)=>{r=r.concat(o)}),r}})}function fi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Sy())(t._repo,t._path):t}function Dy(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=gs(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function Ly(){return Ty++}function Fy(t,e,n){const i=e._path,r=ki(t,e),s=bh(t,n),o=t.listenProvider_.startListening(fi(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)E(!Ft(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!W(c)&&u&&Ft(u))return[ms(u).query];{let h=[];return u&&(h=h.concat(hh(u).map(m=>m.query))),Fe(f,(m,y)=>{h=h.concat(y)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(fi(u),ki(t,u))}}return o}/**
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
 */class Fa{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fa(n)}node(){return this.node_}}class Ha{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new Ha(this.syncTree_,n)}node(){return Ra(this.syncTree_,this.path_)}}const Hy=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pc=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return By(t[".sv"],e,n);if(typeof t[".sv"]=="object")return zy(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},By=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},zy=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&E(!1,"Unexpected increment value: "+i);const r=e.node();if(E(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},Uy=function(t,e,n,i){return Ba(e,new Ha(n,t),i)},wh=function(t,e,n){return Ba(t,new Fa(e),n)};function Ba(t,e,n){const i=t.getPriority().val(),r=Pc(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Pc(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new _e(a,ye(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new _e(r))),o.forEachChild(ce,(a,l)=>{const c=Ba(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class za{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Ua(t,e){let n=e instanceof X?e:new X(e),i=t,r=V(n);for(;r!==null;){const s=Dn(i.node.children,r)||{children:{},childCount:0};i=new za(r,i,s),n=te(n),r=V(n)}return i}function Kn(t){return t.node.value}function Ch(t,e){t.node.value=e,No(t)}function Eh(t){return t.node.childCount>0}function $y(t){return Kn(t)===void 0&&!Eh(t)}function _s(t,e){Fe(t.node.children,(n,i)=>{e(new za(n,t,i))})}function xh(t,e,n,i){n&&!i&&e(t),_s(t,r=>{xh(r,e,!0,i)}),n&&i&&e(t)}function Wy(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Wi(t){return new X(t.parent===null?t.name:Wi(t.parent)+"/"+t.name)}function No(t){t.parent!==null&&jy(t.parent,t.name,t)}function jy(t,e,n){const i=$y(n),r=Ct(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,No(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,No(t))}/**
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
 */const Vy=/[\[\].#$\/\u0000-\u001F\u007F]/,Yy=/[\[\].#$\u0000-\u001F\u007F]/,Vs=10*1024*1024,Ih=function(t){return typeof t=="string"&&t.length!==0&&!Vy.test(t)},Sh=function(t){return typeof t=="string"&&t.length!==0&&!Yy.test(t)},Ky=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sh(t)},qy=function(t,e,n,i){i&&e===void 0||$a(ga(t,"value"),e,n)},$a=function(t,e,n){const i=n instanceof X?new fv(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Yt(i));if(typeof e=="function")throw new Error(t+"contains a function "+Yt(i)+" with contents = "+e.toString());if(wf(e))throw new Error(t+"contains "+e.toString()+" "+Yt(i));if(typeof e=="string"&&e.length>Vs/3&&fs(e)>Vs)throw new Error(t+"contains a string greater than "+Vs+" utf8 bytes "+Yt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Fe(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ih(o)))throw new Error(t+" contains an invalid key ("+o+") "+Yt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hv(i,o),$a(t,a,i),dv(i)}),r&&s)throw new Error(t+' contains ".value" child '+Yt(i)+" in addition to actual children.")}},Th=function(t,e,n,i){if(!(i&&n===void 0)&&!Sh(n))throw new Error(ga(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Gy=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Th(t,e,n,i)},Qy=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Xy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ih(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ky(n))throw new Error(ga(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Jy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ah(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Vf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function ut(t,e,n){Ah(t,n),Zy(t,i=>Xe(i,e)||Xe(e,i))}function Zy(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(eb(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function eb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();nn&&xe("event: "+n.toString()),Yn(i)}}}/**
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
 */const tb="repo_interrupt",nb=25;class ib{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lr(),this.transactionQueueTree_=new za,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rb(t,e,n){if(t.stats_=wa(t.repoInfo_),t.forceRestClient_||L_())t.server_=new Dr(t.repoInfo_,(i,r,s,o)=>{Oc(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Rc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new gt(t.repoInfo_,e,(i,r,s,o)=>{Oc(t,i,r,s,o)},i=>{Rc(t,i)},i=>{ob(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=U_(t.repoInfo_,()=>new Bv(t.stats_,t.server_)),t.infoData_=new Mv,t.infoSyncTree_=new Nc({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Ui(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ja(t,"connected",!1),t.serverSyncTree_=new Nc({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);ut(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function sb(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Wa(t){return Hy({timestamp:sb(t)})}function Oc(t,e,n,i,r){t.dataUpdateCount++;const s=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=kr(n,c=>ye(c));o=Py(t.serverSyncTree_,s,l,r)}else{const l=ye(n);o=_h(t.serverSyncTree_,s,l,r)}else if(i){const l=kr(n,c=>ye(c));o=Ay(t.serverSyncTree_,s,l)}else{const l=ye(n);o=Ui(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ys(t,s)),ut(t.eventQueue_,a,o)}function Rc(t,e){ja(t,"connected",e),e===!1&&cb(t)}function ob(t,e){Fe(e,(n,i)=>{ja(t,n,i)})}function ja(t,e,n){const i=new X("/.info/"+e),r=ye(n);t.infoData_.updateSnapshot(i,r);const s=Ui(t.infoSyncTree_,i,r);ut(t.eventQueue_,i,s)}function kh(t){return t.nextWriteId_++}function ab(t,e,n){const i=Ry(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const s=ye(r).withIndex(e._queryParams.getIndex());Oy(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ui(t.serverSyncTree_,e._path,s);else{const a=ki(t.serverSyncTree_,e);o=_h(t.serverSyncTree_,e._path,s,a)}return ut(t.eventQueue_,e._path,o),gh(t.serverSyncTree_,e,n,null,!0),s},r=>(vs(t,"get for query "+de(e)+" failed: "+r),Promise.reject(new Error(r))))}function lb(t,e,n,i,r){vs(t,"set",{path:e.toString(),value:n,priority:i});const s=Wa(t),o=ye(n,i),a=Ra(t.serverSyncTree_,e),l=wh(o,a,s),c=kh(t),u=mh(t.serverSyncTree_,e,l,c,!0);Ah(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const y=h==="ok";y||De("set at "+e+" failed: "+h);const w=Xt(t.serverSyncTree_,c,!y);ut(t.eventQueue_,e,w),fb(t,r,h,m)});const f=Mh(t,e);ys(t,f),ut(t.eventQueue_,f,[])}function cb(t){vs(t,"onDisconnectEvents");const e=Wa(t),n=Lr();Io(t.onDisconnect_,K(),(r,s)=>{const o=Uy(r,s,t.serverSyncTree_,e);Zf(n,r,o)});let i=[];Io(n,K(),(r,s)=>{i=i.concat(Ui(t.serverSyncTree_,r,s));const o=Mh(t,r);ys(t,o)}),t.onDisconnect_=Lr(),ut(t.eventQueue_,K(),i)}function ub(t){t.persistentConnection_&&t.persistentConnection_.interrupt(tb)}function vs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xe(n,...e)}function fb(t,e,n,i){e&&Yn(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function Nh(t,e,n){return Ra(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Va(t,e=t.transactionQueueTree_){if(e||bs(t,e),Kn(e)){const n=Oh(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&hb(t,Wi(e),n)}else Eh(e)&&_s(e,n=>{Va(t,n)})}function hb(t,e,n){const i=n.map(c=>c.currentWriteId),r=Nh(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Pe(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{vs(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Xt(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();bs(t,Ua(t.transactionQueueTree_,e)),Va(t,t.transactionQueueTree_),ut(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)Yn(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{De("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}ys(t,e)}},o)}function ys(t,e){const n=Ph(t,e),i=Wi(n),r=Oh(t,n);return db(t,r,i),i}function db(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Pe(n,l.path);let u=!1,f;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,r=r.concat(Xt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=nb)u=!0,f="maxretry",r=r.concat(Xt(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Nh(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){$a("transaction failed: Data returned ",m,l.path);let y=ye(m);typeof m=="object"&&m!=null&&Ct(m,".priority")||(y=y.updatePriority(h.getPriority()));const D=l.currentWriteId,I=Wa(t),T=wh(y,h,I);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=T,l.currentWriteId=kh(t),o.splice(o.indexOf(D),1),r=r.concat(mh(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),r=r.concat(Xt(t.serverSyncTree_,D,!0))}else u=!0,f="nodata",r=r.concat(Xt(t.serverSyncTree_,l.currentWriteId,!0))}ut(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}bs(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Yn(i[a]);Va(t,t.transactionQueueTree_)}function Ph(t,e){let n,i=t.transactionQueueTree_;for(n=V(e);n!==null&&Kn(i)===void 0;)i=Ua(i,n),e=te(e),n=V(e);return i}function Oh(t,e){const n=[];return Rh(t,e,n),n.sort((i,r)=>i.order-r.order),n}function Rh(t,e,n){const i=Kn(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);_s(e,r=>{Rh(t,r,n)})}function bs(t,e){const n=Kn(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Ch(e,n.length>0?n:void 0)}_s(e,i=>{bs(t,i)})}function Mh(t,e){const n=Wi(Ph(t,e)),i=Ua(t.transactionQueueTree_,e);return Wy(i,r=>{Ys(t,r)}),Ys(t,i),xh(i,r=>{Ys(t,r)}),n}function Ys(t,e){const n=Kn(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Xt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ch(e,void 0):n.length=s+1,ut(t.eventQueue_,Wi(e),r);for(let o=0;o<i.length;o++)Yn(i[o])}}/**
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
 */function pb(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function mb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mc=function(t,e){const n=gb(t),i=n.namespace;n.domain==="firebase.com"&&_t(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&_t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||T_();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Rf(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new X(n.pathString)}},gb=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(r=pb(t.substring(u,f)));const h=mb(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class _b{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class vb{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class yb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ya{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return W(this._path)?null:$f(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=yc(this._queryParams),n=ya(e);return n==="{}"?"default":n}get _queryObject(){return yc(this._queryParams)}isEqual(e){if(e=jn(e),!(e instanceof Ya))return!1;const n=this._repo===e._repo,i=Vf(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+uv(this._path)}}class Et extends Ya{constructor(e,n){super(e,n,new Sa,!1)}get parent(){const e=jf(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ni{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),i=Pi(this.ref,e);return new Ni(this._node.getChild(n),i,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Ni(r,Pi(this.ref,i),ce)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Po(t,e){return t=jn(t),t._checkNotDeleted("ref"),e!==void 0?Pi(t._root,e):t._root}function Pi(t,e){return t=jn(t),V(t._path)===null?Gy("child","path",e,!1):Th("child","path",e,!1),new Et(t._repo,pe(t._path,e))}function Dh(t,e){t=jn(t),Qy("set",t._path),qy("set",e,t._path,!1);const n=new us;return lb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Dc(t){t=jn(t);const e=new yb(()=>{}),n=new Ka(e);return ab(t._repo,t,n).then(i=>new Ni(i,new Et(t._repo,t._path),t._queryParams.getIndex()))}class Ka{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new _b("value",this,new Ni(e.snapshotNode,new Et(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vb(this,e,n):null}matches(e){return e instanceof Ka?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}by(Et);Iy(Et);/**
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
 */const bb="FIREBASE_DATABASE_EMULATOR_HOST",Oo={};let wb=!1;function Cb(t,e,n,i){t.repoInfo_=new Rf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function Eb(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||_t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mc(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[bb]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Mc(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new An(An.OWNER):new H_(t.name,t.options,e);Xy("Invalid Firebase Database URL",o),W(o.path)||_t("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Ib(a,t,u,new F_(t.name,n));return new Sb(f,t)}function xb(t,e){const n=Oo[e];(!n||n[t.key]!==t)&&_t(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ub(t),delete n[t.key]}function Ib(t,e,n,i){let r=Oo[e.name];r||(r={},Oo[e.name]=r);let s=r[t.toURLString()];return s&&_t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ib(t,wb,n,i),r[t.toURLString()]=s,s}class Sb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_t("Cannot call "+e+" on a deleted database.")}}function Lh(t=u_(),e){const n=o_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Jm("database");i&&Tb(n,...i)}return n}function Tb(t,e,n,i={}){t=jn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&_t("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&_t('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new An(An.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Zm(i.mockUserToken,t.app.options.projectId);s=new An(o)}Cb(r,e,n,s)}/**
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
 */function Ab(t){C_(c_),Pr(new wi("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Eb(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Sn(nc,ic,t),Sn(nc,ic,"esm2017")}gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Ab();const Fh={apiKey:"AIzaSyAafPKtLoc5BfiqN-j9AGJLlkIcEbJE3rw",authDomain:"squash-list.firebaseapp.com",databaseURL:"https://squash-list-default-rtdb.firebaseio.com",projectId:"squash-list",storageBucket:"squash-list.appspot.com",messagingSenderId:"537914321064",appId:"1:537914321064:web:6df5523c5fc9d1c9b83a9d"},kb={class:"header"},Nb=z("div",{class:"skip"},[z("a",{class:"sr-only sr-only-focusable",href:"#main"}," Skip to content ")],-1),Pb=z("div",{class:"logo-wrapper"},[z("img",{src:$m,class:"logo",alt:"Squashlist logo",width:"172",height:"24"})],-1),Ob={class:"suggest"},Rb=z("span",{class:"tooltip"},"Suggest item",-1),Mb={key:0,class:"form-title"},Db=z("span",null,"Suggest item",-1),Lb=z("span",{class:"sr-only"},"Close",-1),Fb={key:1,class:"error"},Hb=z("div",null,"Unable to submit",-1),Bb={key:2,class:"success"},zb=z("div",null,"Thanks for making a suggestion!",-1),Ub=z("p",null,"Suggest an item to be included in the Squash List",-1),$b=["onSubmit"],Wb=z("span",null,[Rn("Name "),z("span",{class:"required"},"*")],-1),jb=z("span",null,[Rn("URL "),z("span",{class:"required"},"*")],-1),Vb=z("span",null,"Description",-1),Yb=["disabled"],Kb=z("h1",{class:"sr-only"},"Squash sites, apps, & resources",-1),qb={__name:"Header",setup(t){const e=Ye(null),n=Ye(!1),i=Ye({name:"",url:"",desc:""}),r=Ye(null),s=Ye(!0),o=Ye(!1),a=Ye(!1),l=()=>{n.value=!0,i.value={name:"",url:"",desc:""},s.value=!0,o.value=!1,a.value=!1};In(n,h=>{h&&Ou(()=>r.value.focus())}),In(i,h=>{h.name&&h.url?s.value=!1:s.value=!0},{deep:!0});const c=va(Fh),u=Lh(c),f=()=>{s.value=!0,Dh(Po(u,`/suggest/item-${Math.floor(Date.now()*Math.random())}`),ra(i)).then(()=>a.value=!0).catch(()=>o.value=!0)};return ss(()=>{let h=0,m=0;const y=()=>{m>h+100&&(n.value=!1)};e.value.addEventListener("touchstart",w=>{h=w.changedTouches[0].screenX}),e.value.addEventListener("touchend",w=>{m=w.changedTouches[0].screenX,y()}),document.addEventListener("keydown",w=>{w.code==="Escape"&&(n.value=!1)})}),(h,m)=>{const y=aa("font-awesome-icon");return he(),ke("header",kb,[Nb,Pb,z("div",Ob,[z("button",{onClick:l},[Rb,ue(y,{icon:"fa-solid fa-circle-plus",class:"icon"})]),z("div",null,[n.value?(he(),ke("div",{key:0,class:"form-bg",onClick:m[0]||(m[0]=w=>n.value=!1)})):ai("",!0),z("div",{class:es(["form",{open:n.value}]),ref_key:"formWrapper",ref:e},[n.value?(he(),ke("h2",Mb,[Db,z("button",{class:"close-icon",onClick:m[1]||(m[1]=w=>n.value=!1)},[ue(y,{icon:"fa-solid fa-xmark"}),Lb])])):ai("",!0),o.value?(he(),ke("div",Fb,[ue(y,{icon:"fa-solid fa-face-frown",class:"icon"}),Hb])):a.value?(he(),ke("div",Bb,[ue(y,{icon:"fa-solid fa-face-smile",class:"icon"}),zb])):(he(),ke(Ne,{key:3},[n.value?(he(),ke(Ne,{key:0},[Ub,z("form",{onSubmit:Lm(f,["prevent"])},[z("label",null,[Wb,Ns(z("input",{"onUpdate:modelValue":m[2]||(m[2]=w=>i.value.name=w),type:"text",name:"name",required:"",ref_key:"nameInput",ref:r},null,512),[[Ds,i.value.name]])]),z("label",null,[jb,Ns(z("input",{"onUpdate:modelValue":m[3]||(m[3]=w=>i.value.url=w),type:"text",name:"url",required:""},null,512),[[Ds,i.value.url]])]),z("label",null,[Vb,Ns(z("input",{"onUpdate:modelValue":m[4]||(m[4]=w=>i.value.desc=w),type:"text",name:"desc"},null,512),[[Ds,i.value.desc]])]),z("button",{type:"submit",disabled:s.value}," Submit ",8,Yb)],40,$b)],64)):ai("",!0)],64))],2)])]),Kb])}}},Hh=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Gb={},Qb={class:"footer"},Xb=z("img",{src:"//banc-m.github.io/media/img/old-dude.jpg",alt:"bancm logo"},null,-1),Jb=z("a",{href:"/"},"bancm",-1);function Zb(t,e){return he(),ke("footer",Qb,[Xb,Rn(" a "),Jb,Rn(" project ")])}const e1=Hh(Gb,[["render",Zb]]);const t1=["href"],n1={class:"desc"},i1={__name:"Item",props:{item:Object},setup(t){Om(i=>({bda018a2:n.degrees,ef45bcbe:n.position}));const e=Math.random()<.5?"-":"",n={degrees:`${e}${Math.random()/1.5}deg`,position:`${e}${Math.random()*3}px`};return(i,r)=>{const s=aa("font-awesome-icon");return he(),ke("a",{href:t.item.url,class:"item"},[z("p",null,[Rn(Er(t.item.name)+" ",1),t.item.paid?(he(),as(s,{key:0,icon:"fa-solid fa-money-bills",class:"money-icon",title:"Paid service"})):ai("",!0)]),z("p",n1,Er(t.item.desc),1)],8,t1)}}},r1=Hh(i1,[["__scopeId","data-v-99d85e0c"]]),s1={class:"category"},o1={class:"items-wrapper"},a1={__name:"Category",props:{category:Object},setup(t){const e=t,n=Ye(!0),i=Be(()=>e.category.items.sort((r,s)=>n.value?r.name>s.name?1:-1:r.name<s.name?1:-1));return(r,s)=>{const o=aa("font-awesome-icon");return he(),ke("div",s1,[z("h2",null,[ue(o,{icon:`fa-solid fa-${t.category.icon}`,class:"icon"},null,8,["icon"]),z("span",null,Er(t.category.cat),1),z("button",{onClick:s[0]||(s[0]=a=>n.value=!n.value)},[ue(o,{icon:`fa-solid ${n.value?"fa-arrow-down-a-z":"fa-arrow-up-z-a"}`,title:n.value?"Sort Z to A":"Sort A to Z",class:"icon"},null,8,["icon","title"])])]),z("div",o1,[(he(!0),ke(Ne,null,$u(i.value,a=>(he(),as(r1,{item:a},null,8,["item"]))),256))])])}}};const l1={class:"wrapper"},c1={class:"container",id:"main"},u1={key:0,class:"loading"},f1=z("img",{src:Um,alt:"loading icon",width:"40"},null,-1),h1=z("span",{class:"sr-only"},"Loading lists...",-1),d1=[f1,h1],p1={key:1,class:"error"},m1="*K^3j3YCB80cjijCxNg9JC2AlWyXBZh*zlcbaAilqL2YGx8q9CHcj5dJ$UgFcGooPV*lD5kpkOQswP4zcH$7GB6&ZifR009NFid",g1={__name:"App",setup(t){const e=va(Fh),n=Lh(e),i=Po(n),r=Ye([]),s=Ye(""),o=Ye(0);ss(()=>{a(),!({}.VITE_DEV||document.location.search.includes("no-stats"))&&l()});const a=()=>{Dc(Pi(i,"categories")).then(u=>{u.exists()?r.value=u.val().data:console.log("No data available")}).catch(u=>{s.value=u})},l=()=>{Dc(Pi(i,"visits")).then(u=>{u.exists()?(o.value=u.val().data,o.value++,c()):console.log("No data available")}).catch(u=>{console.log(u)})},c=()=>{Dh(Po(n,"/visits/"),{data:ra(o),token:m1})};return(u,f)=>(he(),ke(Ne,null,[ue(qb),z("div",l1,[z("main",c1,[r.value.length?ai("",!0):(he(),ke("div",u1,d1)),s.value?(he(),ke("div",p1,Er(s.value),1)):(he(!0),ke(Ne,{key:2},$u(r.value,h=>(he(),as(a1,{category:h},null,8,["category"]))),256))])]),ue(e1)],64))}};function Lc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Lc(Object(n),!0).forEach(function(i){ge(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Lc(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function jr(t){return jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jr(t)}function _1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fc(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function v1(t,e,n){return e&&Fc(t.prototype,e),n&&Fc(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ge(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qa(t,e){return b1(t)||C1(t,e)||Bh(t,e)||x1()}function ji(t){return y1(t)||w1(t)||Bh(t)||E1()}function y1(t){if(Array.isArray(t))return Ro(t)}function b1(t){if(Array.isArray(t))return t}function w1(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function C1(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function Bh(t,e){if(!!t){if(typeof t=="string")return Ro(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ro(t,e)}}function Ro(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function E1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Hc=function(){},Ga={},zh={},Uh=null,$h={mark:Hc,measure:Hc};try{typeof window<"u"&&(Ga=window),typeof document<"u"&&(zh=document),typeof MutationObserver<"u"&&(Uh=MutationObserver),typeof performance<"u"&&($h=performance)}catch{}var I1=Ga.navigator||{},Bc=I1.userAgent,zc=Bc===void 0?"":Bc,Ht=Ga,se=zh,Uc=Uh,sr=$h;Ht.document;var xt=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",Wh=~zc.indexOf("MSIE")||~zc.indexOf("Trident/"),or,ar,lr,cr,ur,vt="___FONT_AWESOME___",Mo=16,jh="fa",Vh="svg-inline--fa",un="data-fa-i2svg",Do="data-fa-pseudo-element",S1="data-fa-pseudo-element-pending",Qa="data-prefix",Xa="data-icon",$c="fontawesome-i2svg",T1="async",A1=["HTML","HEAD","STYLE","SCRIPT"],Yh=function(){try{return!0}catch{return!1}}(),re="classic",le="sharp",Ja=[re,le];function Vi(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[re]}})}var Oi=Vi((or={},ge(or,re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ge(or,le,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),or)),Ri=Vi((ar={},ge(ar,re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ge(ar,le,{solid:"fass",regular:"fasr",light:"fasl"}),ar)),Mi=Vi((lr={},ge(lr,re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ge(lr,le,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),lr)),k1=Vi((cr={},ge(cr,re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ge(cr,le,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),cr)),N1=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Kh="fa-layers-text",P1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,O1=Vi((ur={},ge(ur,re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ge(ur,le,{900:"fass",400:"fasr",300:"fasl"}),ur)),qh=[1,2,3,4,5,6,7,8,9,10],R1=qh.concat([11,12,13,14,15,16,17,18,19,20]),M1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Di=new Set;Object.keys(Ri[re]).map(Di.add.bind(Di));Object.keys(Ri[le]).map(Di.add.bind(Di));var D1=[].concat(Ja,ji(Di),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Jt.GROUP,Jt.SWAP_OPACITY,Jt.PRIMARY,Jt.SECONDARY]).concat(qh.map(function(t){return"".concat(t,"x")})).concat(R1.map(function(t){return"w-".concat(t)})),hi=Ht.FontAwesomeConfig||{};function L1(t){var e=se.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function F1(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(se&&typeof se.querySelector=="function"){var H1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];H1.forEach(function(t){var e=qa(t,2),n=e[0],i=e[1],r=F1(L1(n));r!=null&&(hi[i]=r)})}var Gh={styleDefault:"solid",familyDefault:"classic",cssPrefix:jh,replacementClass:Vh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};hi.familyPrefix&&(hi.cssPrefix=hi.familyPrefix);var Bn=k(k({},Gh),hi);Bn.autoReplaceSvg||(Bn.observeMutations=!1);var O={};Object.keys(Gh).forEach(function(t){Object.defineProperty(O,t,{enumerable:!0,set:function(n){Bn[t]=n,di.forEach(function(i){return i(O)})},get:function(){return Bn[t]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(e){Bn.cssPrefix=e,di.forEach(function(n){return n(O)})},get:function(){return Bn.cssPrefix}});Ht.FontAwesomeConfig=O;var di=[];function B1(t){return di.push(t),function(){di.splice(di.indexOf(t),1)}}var St=Mo,lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function z1(t){if(!(!t||!xt)){var e=se.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=se.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return se.head.insertBefore(e,i),t}}var U1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Li(){for(var t=12,e="";t-- >0;)e+=U1[Math.random()*62|0];return e}function qn(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Za(t){return t.classList?qn(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Qh(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $1(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Qh(t[n]),'" ')},"").trim()}function ws(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function el(t){return t.size!==lt.size||t.x!==lt.x||t.y!==lt.y||t.rotate!==lt.rotate||t.flipX||t.flipY}function W1(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function j1(t){var e=t.transform,n=t.width,i=n===void 0?Mo:n,r=t.height,s=r===void 0?Mo:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Wh?l+="translate(".concat(e.x/St-i/2,"em, ").concat(e.y/St-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/St,"em), calc(-50% + ").concat(e.y/St,"em)) "):l+="translate(".concat(e.x/St,"em, ").concat(e.y/St,"em) "),l+="scale(".concat(e.size/St*(e.flipX?-1:1),", ").concat(e.size/St*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var V1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xh(){var t=jh,e=Vh,n=O.cssPrefix,i=O.replacementClass,r=V1;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var Wc=!1;function Ks(){O.autoAddCss&&!Wc&&(z1(Xh()),Wc=!0)}var Y1={mixout:function(){return{dom:{css:Xh,insertCss:Ks}}},hooks:function(){return{beforeDOMElementCreation:function(){Ks()},beforeI2svg:function(){Ks()}}}},yt=Ht||{};yt[vt]||(yt[vt]={});yt[vt].styles||(yt[vt].styles={});yt[vt].hooks||(yt[vt].hooks={});yt[vt].shims||(yt[vt].shims=[]);var Ze=yt[vt],Jh=[],K1=function t(){se.removeEventListener("DOMContentLoaded",t),Vr=1,Jh.map(function(e){return e()})},Vr=!1;xt&&(Vr=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),Vr||se.addEventListener("DOMContentLoaded",K1));function q1(t){!xt||(Vr?setTimeout(t,0):Jh.push(t))}function Yi(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?Qh(t):"<".concat(e," ").concat($1(i),">").concat(s.map(Yi).join(""),"</").concat(e,">")}function jc(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var G1=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},qs=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?G1(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function Q1(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Lo(t){var e=Q1(t);return e.length===1?e[0].toString(16):null}function X1(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Vc(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Fo(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Vc(e);typeof Ze.hooks.addPack=="function"&&!r?Ze.hooks.addPack(t,Vc(e)):Ze.styles[t]=k(k({},Ze.styles[t]||{}),s),t==="fas"&&Fo("fa",e)}var fr,hr,dr,yn=Ze.styles,J1=Ze.shims,Z1=(fr={},ge(fr,re,Object.values(Mi[re])),ge(fr,le,Object.values(Mi[le])),fr),tl=null,Zh={},ed={},td={},nd={},id={},e0=(hr={},ge(hr,re,Object.keys(Oi[re])),ge(hr,le,Object.keys(Oi[le])),hr);function t0(t){return~D1.indexOf(t)}function n0(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!t0(r)?r:null}var rd=function(){var e=function(s){return qs(yn,function(o,a,l){return o[l]=qs(a,s,{}),o},{})};Zh=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),ed=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),id=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in yn||O.autoFetchSvg,i=qs(J1,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});td=i.names,nd=i.unicodes,tl=Cs(O.styleDefault,{family:O.familyDefault})};B1(function(t){tl=Cs(t.styleDefault,{family:O.familyDefault})});rd();function nl(t,e){return(Zh[t]||{})[e]}function i0(t,e){return(ed[t]||{})[e]}function Zt(t,e){return(id[t]||{})[e]}function sd(t){return td[t]||{prefix:null,iconName:null}}function r0(t){var e=nd[t],n=nl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Bt(){return tl}var il=function(){return{prefix:null,iconName:null,rest:[]}};function Cs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?re:n,r=Oi[i][t],s=Ri[i][t]||Ri[i][r],o=t in Ze.styles?t:null;return s||o||null}var Yc=(dr={},ge(dr,re,Object.keys(Mi[re])),ge(dr,le,Object.keys(Mi[le])),dr);function Es(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},ge(e,re,"".concat(O.cssPrefix,"-").concat(re)),ge(e,le,"".concat(O.cssPrefix,"-").concat(le)),e),o=null,a=re;(t.includes(s[re])||t.some(function(c){return Yc[re].includes(c)}))&&(a=re),(t.includes(s[le])||t.some(function(c){return Yc[le].includes(c)}))&&(a=le);var l=t.reduce(function(c,u){var f=n0(O.cssPrefix,u);if(yn[u]?(u=Z1[a].includes(u)?k1[a][u]:u,o=u,c.prefix=u):e0[a].indexOf(u)>-1?(o=u,c.prefix=Cs(u,{family:a})):f?c.iconName=f:u!==O.replacementClass&&u!==s[re]&&u!==s[le]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var h=o==="fa"?sd(c.iconName):{},m=Zt(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||m||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!yn.far&&yn.fas&&!O.autoFetchSvg&&(c.prefix="fas")}return c},il());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===le&&(yn.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=Zt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Bt()||"fas"),l}var s0=function(){function t(){_1(this,t),this.definitions={}}return v1(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=k(k({},n.definitions[a]||{}),o[a]),Fo(a,o[a]);var l=Mi[re][a];l&&Fo(l,o[a]),rd()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),Kc=[],bn={},Nn={},o0=Object.keys(Nn);function a0(t,e){var n=e.mixoutsTo;return Kc=t,bn={},Object.keys(Nn).forEach(function(i){o0.indexOf(i)===-1&&delete Nn[i]}),Kc.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),jr(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){bn[o]||(bn[o]=[]),bn[o].push(s[o])})}i.provides&&i.provides(Nn)}),n}function Ho(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=bn[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function fn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=bn[t]||[];r.forEach(function(s){s.apply(null,n)})}function bt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Nn[t]?Nn[t].apply(null,e):void 0}function Bo(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Bt();if(!!e)return e=Zt(n,e)||e,jc(od.definitions,n,e)||jc(Ze.styles,n,e)}var od=new s0,l0=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,fn("noAuto")},c0={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return xt?(fn("beforeI2svg",e),bt("pseudoElements2svg",e),bt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,q1(function(){f0({autoReplaceSvgRoot:n}),fn("watch",e)})}},u0={icon:function(e){if(e===null)return null;if(jr(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Zt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Cs(e[0]);return{prefix:i,iconName:Zt(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(O.cssPrefix,"-"))>-1||e.match(N1))){var r=Es(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Bt(),iconName:Zt(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Bt();return{prefix:s,iconName:Zt(s,e)||e}}}},Ue={noAuto:l0,config:O,dom:c0,parse:u0,library:od,findIconDefinition:Bo,toHtml:Yi},f0=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?se:n;(Object.keys(Ze.styles).length>0||O.autoFetchSvg)&&xt&&O.autoReplaceSvg&&Ue.dom.i2svg({node:i})};function xs(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Yi(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!xt){var i=se.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function h0(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(el(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=ws(k(k({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function d0(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(O.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},r),{},{id:o}),children:i}]}]}function rl(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,m=h===void 0?!1:h,y=i.found?i:n,w=y.width,D=y.height,I=r==="fak",T=[O.replacementClass,s?"".concat(O.cssPrefix,"-").concat(s):""].filter(function(We){return f.classes.indexOf(We)===-1}).filter(function(We){return We!==""||!!We}).concat(f.classes).join(" "),F={children:[],attributes:k(k({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:T,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(D)})},N=I&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/D*16*.0625,"em")}:{};m&&(F.attributes[un]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(u||Li())},children:[l]}),delete F.attributes.title);var G=k(k({},F),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:k(k({},N),f.styles)}),we=i.found&&n.found?bt("generateAbstractMask",G)||{children:[],attributes:{}}:bt("generateAbstractIcon",G)||{children:[],attributes:{}},Ce=we.children,$e=we.attributes;return G.children=Ce,G.attributes=$e,a?d0(G):h0(G)}function qc(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=k(k(k({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[un]="");var u=k({},o.styles);el(r)&&(u.transform=j1({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=ws(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function p0(t){var e=t.content,n=t.title,i=t.extra,r=k(k(k({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=ws(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Gs=Ze.styles;function zo(t){var e=t[0],n=t[1],i=t.slice(4),r=qa(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(Jt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(Jt.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(Jt.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var m0={found:!1,width:512,height:512};function g0(t,e){!Yh&&!O.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Uo(t,e){var n=e;return e==="fa"&&O.styleDefault!==null&&(e=Bt()),new Promise(function(i,r){if(bt("missingIconAbstract"),n==="fa"){var s=sd(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Gs[e]&&Gs[e][t]){var o=Gs[e][t];return i(zo(o))}g0(t,e),i(k(k({},m0),{},{icon:O.showMissingIcons&&t?bt("missingIconAbstract")||{}:{}}))})}var Gc=function(){},$o=O.measurePerformance&&sr&&sr.mark&&sr.measure?sr:{mark:Gc,measure:Gc},ri='FA "6.4.2"',_0=function(e){return $o.mark("".concat(ri," ").concat(e," begins")),function(){return ad(e)}},ad=function(e){$o.mark("".concat(ri," ").concat(e," ends")),$o.measure("".concat(ri," ").concat(e),"".concat(ri," ").concat(e," begins"),"".concat(ri," ").concat(e," ends"))},sl={begin:_0,end:ad},br=function(){};function Qc(t){var e=t.getAttribute?t.getAttribute(un):null;return typeof e=="string"}function v0(t){var e=t.getAttribute?t.getAttribute(Qa):null,n=t.getAttribute?t.getAttribute(Xa):null;return e&&n}function y0(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(O.replacementClass)}function b0(){if(O.autoReplaceSvg===!0)return wr.replace;var t=wr[O.autoReplaceSvg];return t||wr.replace}function w0(t){return se.createElementNS("http://www.w3.org/2000/svg",t)}function C0(t){return se.createElement(t)}function ld(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?w0:C0:n;if(typeof t=="string")return se.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(ld(o,{ceFn:i}))}),r}function E0(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var wr={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(ld(r),n)}),n.getAttribute(un)===null&&O.keepOriginalSource){var i=se.createComment(E0(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Za(n).indexOf(O.replacementClass))return wr.replace(e);var r=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===O.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return Yi(a)}).join(`
`);n.setAttribute(un,""),n.innerHTML=o}};function Xc(t){t()}function cd(t,e){var n=typeof e=="function"?e:br;if(t.length===0)n();else{var i=Xc;O.mutateApproach===T1&&(i=Ht.requestAnimationFrame||Xc),i(function(){var r=b0(),s=sl.begin("mutate");t.map(r),s(),n()})}}var ol=!1;function ud(){ol=!0}function Wo(){ol=!1}var Yr=null;function Jc(t){if(!!Uc&&!!O.observeMutations){var e=t.treeCallback,n=e===void 0?br:e,i=t.nodeCallback,r=i===void 0?br:i,s=t.pseudoElementsCallback,o=s===void 0?br:s,a=t.observeMutationsRoot,l=a===void 0?se:a;Yr=new Uc(function(c){if(!ol){var u=Bt();qn(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Qc(f.addedNodes[0])&&(O.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&O.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Qc(f.target)&&~M1.indexOf(f.attributeName))if(f.attributeName==="class"&&v0(f.target)){var h=Es(Za(f.target)),m=h.prefix,y=h.iconName;f.target.setAttribute(Qa,m||u),y&&f.target.setAttribute(Xa,y)}else y0(f.target)&&r(f.target)})}}),xt&&Yr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function x0(){!Yr||Yr.disconnect()}function I0(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function S0(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Es(Za(t));return r.prefix||(r.prefix=Bt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=i0(r.prefix,t.innerText)||nl(r.prefix,Lo(t.innerText))),!r.iconName&&O.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function T0(t){var e=qn(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return O.autoA11y&&(n?e["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(i||Li()):(e["aria-hidden"]="true",e.focusable="false")),e}function A0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=S0(t),i=n.iconName,r=n.prefix,s=n.rest,o=T0(t),a=Ho("parseNodeAttributes",{},t),l=e.styleParser?I0(t):[];return k({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var k0=Ze.styles;function fd(t){var e=O.autoReplaceSvg==="nest"?Zc(t,{styleParser:!1}):Zc(t);return~e.extra.classes.indexOf(Kh)?bt("generateLayersText",t,e):bt("generateSvgReplacementMutation",t,e)}var zt=new Set;Ja.map(function(t){zt.add("fa-".concat(t))});Object.keys(Oi[re]).map(zt.add.bind(zt));Object.keys(Oi[le]).map(zt.add.bind(zt));zt=ji(zt);function eu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!xt)return Promise.resolve();var n=se.documentElement.classList,i=function(f){return n.add("".concat($c,"-").concat(f))},r=function(f){return n.remove("".concat($c,"-").concat(f))},s=O.autoFetchSvg?zt:Ja.map(function(u){return"fa-".concat(u)}).concat(Object.keys(k0));s.includes("fa")||s.push("fa");var o=[".".concat(Kh,":not([").concat(un,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(un,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=qn(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=sl.begin("onTree"),c=a.reduce(function(u,f){try{var h=fd(f);h&&u.push(h)}catch(m){Yh||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){cd(h,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),f(h)})})}function N0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fd(t).then(function(n){n&&cd([n],e)})}function P0(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Bo(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Bo(r||{})),t(i,k(k({},n),{},{mask:r}))}}var O0=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?lt:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,h=f===void 0?null:f,m=n.titleId,y=m===void 0?null:m,w=n.classes,D=w===void 0?[]:w,I=n.attributes,T=I===void 0?{}:I,F=n.styles,N=F===void 0?{}:F;if(!!e){var G=e.prefix,we=e.iconName,Ce=e.icon;return xs(k({type:"icon"},e),function(){return fn("beforeDOMElementCreation",{iconDefinition:e,params:n}),O.autoA11y&&(h?T["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(y||Li()):(T["aria-hidden"]="true",T.focusable="false")),rl({icons:{main:zo(Ce),mask:l?zo(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:G,iconName:we,transform:k(k({},lt),r),symbol:o,title:h,maskId:u,titleId:y,extra:{attributes:T,styles:N,classes:D}})})}},R0={mixout:function(){return{icon:P0(O0)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=eu,n.nodeCallback=N0,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?se:i,s=n.callback,o=s===void 0?function(){}:s;return eu(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,h=i.extra;return new Promise(function(m,y){Promise.all([Uo(r,a),u.iconName?Uo(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var D=qa(w,2),I=D[0],T=D[1];m([n,rl({icons:{main:I,mask:T},prefix:a,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=ws(a);l.length>0&&(r.style=l);var c;return el(o)&&(c=bt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},M0={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return xs({type:"layer"},function(){fn("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(ji(s)).join(" ")},children:o}]})}}}},D0={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return xs({type:"counter",content:n},function(){return fn("beforeDOMElementCreation",{content:n,params:i}),p0({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(ji(a))}})})}}}},L0={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?lt:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,h=i.styles,m=h===void 0?{}:h;return xs({type:"text",content:n},function(){return fn("beforeDOMElementCreation",{content:n,params:i}),qc({content:n,transform:k(k({},lt),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(O.cssPrefix,"-layers-text")].concat(ji(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(Wh){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return O.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,qc({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},F0=new RegExp('"',"ug"),tu=[1105920,1112319];function H0(t){var e=t.replace(F0,""),n=X1(e,0),i=n>=tu[0]&&n<=tu[1],r=e.length===2?e[0]===e[1]:!1;return{value:Lo(r?e[0]:e),isSecondary:i||r}}function nu(t,e){var n="".concat(S1).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=qn(t.children),o=s.filter(function(Ce){return Ce.getAttribute(Do)===e})[0],a=Ht.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(P1),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?le:re,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ri[h][l[2].toLowerCase()]:O1[h][c],y=H0(f),w=y.value,D=y.isSecondary,I=l[0].startsWith("FontAwesome"),T=nl(m,w),F=T;if(I){var N=r0(w);N.iconName&&N.prefix&&(T=N.iconName,m=N.prefix)}if(T&&!D&&(!o||o.getAttribute(Qa)!==m||o.getAttribute(Xa)!==F)){t.setAttribute(n,F),o&&t.removeChild(o);var G=A0(),we=G.extra;we.attributes[Do]=e,Uo(T,m).then(function(Ce){var $e=rl(k(k({},G),{},{icons:{main:Ce,mask:il()},prefix:m,iconName:F,extra:we,watchable:!0})),We=se.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(We,t.firstChild):t.appendChild(We),We.outerHTML=$e.map(function(ft){return Yi(ft)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function B0(t){return Promise.all([nu(t,"::before"),nu(t,"::after")])}function z0(t){return t.parentNode!==document.head&&!~A1.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Do)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function iu(t){if(!!xt)return new Promise(function(e,n){var i=qn(t.querySelectorAll("*")).filter(z0).map(B0),r=sl.begin("searchPseudoElements");ud(),Promise.all(i).then(function(){r(),Wo(),e()}).catch(function(){r(),Wo(),n()})})}var U0={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=iu,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?se:i;O.searchPseudoElements&&iu(r)}}},ru=!1,$0={mixout:function(){return{dom:{unwatch:function(){ud(),ru=!0}}}},hooks:function(){return{bootstrap:function(){Jc(Ho("mutationObserverCallbacks",{}))},noAuto:function(){x0()},watch:function(n){var i=n.observeMutationsRoot;ru?Wo():Jc(Ho("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},su=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},W0={mixout:function(){return{parse:{transform:function(n){return su(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=su(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:h};return{tag:"g",attributes:k({},m.outer),children:[{tag:"g",attributes:k({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:k(k({},i.icon.attributes),m.path)}]}]}}}},Qs={x:0,y:0,width:"100%",height:"100%"};function ou(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function j0(t){return t.tag==="g"?t.children:[t]}var V0={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Es(r.split(" ").map(function(o){return o.trim()})):il();return s.prefix||(s.prefix=Bt()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,h=o.icon,m=W1({transform:l,containerWidth:f,iconWidth:c}),y={tag:"rect",attributes:k(k({},Qs),{},{fill:"white"})},w=u.children?{children:u.children.map(ou)}:{},D={tag:"g",attributes:k({},m.inner),children:[ou(k({tag:u.tag,attributes:k(k({},u.attributes),m.path)},w))]},I={tag:"g",attributes:k({},m.outer),children:[D]},T="mask-".concat(a||Li()),F="clip-".concat(a||Li()),N={tag:"mask",attributes:k(k({},Qs),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,I]},G={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:j0(h)},N]};return i.push(G,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(T,")")},Qs)}),{children:i,attributes:r}}}},Y0={provides:function(e){var n=!1;Ht.matchMedia&&(n=Ht.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:k(k({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=k(k({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:k(k({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:k(k({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:k(k({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:k(k({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},K0={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},q0=[Y1,R0,M0,D0,L0,U0,$0,W0,V0,Y0,K0];a0(q0,{mixoutsTo:Ue});Ue.noAuto;var hd=Ue.config,G0=Ue.library;Ue.dom;var Kr=Ue.parse;Ue.findIconDefinition;Ue.toHtml;var Q0=Ue.icon;Ue.layer;var X0=Ue.text;Ue.counter;function au(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ge(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?au(Object(n),!0).forEach(function(i){Oe(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):au(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function qr(t){return qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qr(t)}function Oe(t,e,n){return e=sw(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Z0(t,e){if(t==null)return{};var n=J0(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function jo(t){return ew(t)||tw(t)||nw(t)||iw()}function ew(t){if(Array.isArray(t))return Vo(t)}function tw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nw(t,e){if(!!t){if(typeof t=="string")return Vo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vo(t,e)}}function Vo(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function iw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rw(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function sw(t){var e=rw(t,"string");return typeof e=="symbol"?e:String(e)}var ow=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dd={exports:{}};(function(t){(function(e){var n=function(I,T,F){if(!c(T)||f(T)||h(T)||m(T)||l(T))return T;var N,G=0,we=0;if(u(T))for(N=[],we=T.length;G<we;G++)N.push(n(I,T[G],F));else{N={};for(var Ce in T)Object.prototype.hasOwnProperty.call(T,Ce)&&(N[I(Ce,F)]=n(I,T[Ce],F))}return N},i=function(I,T){T=T||{};var F=T.separator||"_",N=T.split||/(?=[A-Z])/;return I.split(N).join(F)},r=function(I){return y(I)?I:(I=I.replace(/[\-_\s]+(.)?/g,function(T,F){return F?F.toUpperCase():""}),I.substr(0,1).toLowerCase()+I.substr(1))},s=function(I){var T=r(I);return T.substr(0,1).toUpperCase()+T.substr(1)},o=function(I,T){return i(I,T).toLowerCase()},a=Object.prototype.toString,l=function(I){return typeof I=="function"},c=function(I){return I===Object(I)},u=function(I){return a.call(I)=="[object Array]"},f=function(I){return a.call(I)=="[object Date]"},h=function(I){return a.call(I)=="[object RegExp]"},m=function(I){return a.call(I)=="[object Boolean]"},y=function(I){return I=I-0,I===I},w=function(I,T){var F=T&&"process"in T?T.process:T;return typeof F!="function"?I:function(N,G){return F(N,I,G)}},D={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(I,T){return n(w(r,T),I)},decamelizeKeys:function(I,T){return n(w(o,T),I,T)},pascalizeKeys:function(I,T){return n(w(s,T),I)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=D:e.humps=D})(ow)})(dd);var aw=dd.exports,lw=["class","style"];function cw(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=aw.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function uw(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function al(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return al(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=uw(u);break;case"style":l.style=cw(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=Z0(n,lw);return tf(t.tag,Ge(Ge(Ge({},e),{},{class:r.class,style:Ge(Ge({},r.style),o)},r.attrs),a),i)}var pd=!1;try{pd=!0}catch{}function fw(){if(!pd&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function pi(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Oe({},t,e):{}}function hw(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Oe(e,"fa-".concat(t.size),t.size!==null),Oe(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Oe(e,"fa-pull-".concat(t.pull),t.pull!==null),Oe(e,"fa-swap-opacity",t.swapOpacity),Oe(e,"fa-bounce",t.bounce),Oe(e,"fa-shake",t.shake),Oe(e,"fa-beat",t.beat),Oe(e,"fa-fade",t.fade),Oe(e,"fa-beat-fade",t.beatFade),Oe(e,"fa-flash",t.flash),Oe(e,"fa-spin-pulse",t.spinPulse),Oe(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function lu(t){if(t&&qr(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Kr.icon)return Kr.icon(t);if(t===null)return null;if(qr(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var dw=ca({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=Be(function(){return lu(e.icon)}),s=Be(function(){return pi("classes",hw(e))}),o=Be(function(){return pi("transform",typeof e.transform=="string"?Kr.transform(e.transform):e.transform)}),a=Be(function(){return pi("mask",lu(e.mask))}),l=Be(function(){return Q0(r.value,Ge(Ge(Ge(Ge({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});In(l,function(u){if(!u)return fw("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=Be(function(){return l.value?al(l.value.abstract[0],{},i):null});return function(){return c.value}}});ca({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=hd.familyPrefix,s=Be(function(){return["".concat(r,"-layers")].concat(jo(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return tf("div",{class:s.value},i.default?i.default():[])}}});ca({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=hd.familyPrefix,s=Be(function(){return pi("classes",[].concat(jo(e.counter?["".concat(r,"-layers-counter")]:[]),jo(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=Be(function(){return pi("transform",typeof e.transform=="string"?Kr.transform(e.transform):e.transform)}),a=Be(function(){var c=X0(e.value.toString(),Ge(Ge({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Be(function(){return al(a.value,{},i)});return function(){return l.value}}});var pw={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"]},mw={prefix:"fas",iconName:"person-running",icon:[448,512,[127939,"running"],"f70c","M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"]},gw={prefix:"fas",iconName:"money-bills",icon:[640,512,[],"e1f3","M96 96V320c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64H160V256zM224 96c0 35.3-28.7 64-64 64V96h64zM576 256v64H512c0-35.3 28.7-64 64-64zM512 96h64v64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V360c0 66.3 53.7 120 120 120H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V120z"]},_w={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]},vw={prefix:"fas",iconName:"star-half-stroke",icon:[640,512,["star-half-alt"],"f5c0","M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"]},yw={prefix:"fas",iconName:"basket-shopping",icon:[576,512,["shopping-basket"],"f291","M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},bw={prefix:"fas",iconName:"face-frown",icon:[512,512,[9785,"frown"],"f119","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},ww={prefix:"fas",iconName:"arrow-down-a-z",icon:[576,512,["sort-alpha-asc","sort-alpha-down"],"f15d","M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 320c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 416H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 352H352c-17.7 0-32-14.3-32-32zM416 32c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 224H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128C392.8 38.8 403.9 32 416 32zM395.8 176h40.4L416 135.6 395.8 176z"]},Cw={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Ew={prefix:"fas",iconName:"tv",icon:[640,512,[63717,"television","tv-alt"],"f26c","M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},xw={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Iw={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Sw={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},Tw={prefix:"fas",iconName:"arrow-up-z-a",icon:[576,512,["sort-alpha-up-alt"],"f882","M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 64c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zm96 192c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 262.8 428.1 256 416 256zM395.8 400L416 359.6 436.2 400H395.8z"]};G0.add(Cw,Ew,mw,_w,vw,yw,pw,gw,Sw,xw,bw,Iw,ww,Tw);Bm(g1).component("font-awesome-icon",dw).mount("#app");
