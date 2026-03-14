(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function qo(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ie={},wn=[],et=()=>{},wd=()=>!1,Cd=/^on[^a-z]/,Xr=t=>Cd.test(t),Ko=t=>t.startsWith("onUpdate:"),Ee=Object.assign,Go=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ed=Object.prototype.hasOwnProperty,Y=(t,e)=>Ed.call(t,e),B=Array.isArray,Cn=t=>Zr(t)==="[object Map]",du=t=>Zr(t)==="[object Set]",$=t=>typeof t=="function",me=t=>typeof t=="string",Jr=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",pu=t=>(oe(t)||$(t))&&$(t.then)&&$(t.catch),mu=Object.prototype.toString,Zr=t=>mu.call(t),xd=t=>Zr(t).slice(8,-1),gu=t=>Zr(t)==="[object Object]",Qo=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mr=qo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),es=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Id=/-(\w)/g,ct=es(t=>t.replace(Id,(e,n)=>n?n.toUpperCase():"")),Sd=/\B([A-Z])/g,zn=es(t=>t.replace(Sd,"-$1").toLowerCase()),ts=es(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ns=es(t=>t?`on${ts(t)}`:""),sn=(t,e)=>!Object.is(t,e),gr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Er=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Zs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gl;const eo=()=>gl||(gl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xo(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=me(i)?Nd(i):Xo(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(me(t)||oe(t))return t}const Td=/;(?![^(]*\))/g,Ad=/:([^]+)/,kd=/\/\*[^]*?\*\//g;function Nd(t){const e={};return t.replace(kd,"").split(Td).forEach(n=>{if(n){const i=n.split(Ad);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ns(t){let e="";if(me(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const i=ns(t[n]);i&&(e+=i+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Pd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rd=qo(Pd);function _u(t){return!!t||t===""}const xr=t=>me(t)?t:t==null?"":B(t)||oe(t)&&(t.toString===mu||!$(t.toString))?JSON.stringify(t,vu,2):String(t),vu=(t,e)=>e&&e.__v_isRef?vu(t,e.value):Cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:du(e)?{[`Set(${e.size})`]:[...e.values()]}:oe(e)&&!B(e)&&!gu(e)?String(e):e;let Ve;class Od{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ve,!e&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ve;try{return Ve=this,e()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Md(t,e=Ve){e&&e.active&&e.effects.push(t)}function Dd(){return Ve}const Jo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},yu=t=>(t.w&Dt)>0,bu=t=>(t.n&Dt)>0,Ld=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dt},Fd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];yu(r)&&!bu(r)?r.delete(t):e[n++]=r,r.w&=~Dt,r.n&=~Dt}e.length=n}},to=new WeakMap;let ni=0,Dt=1;const no=30;let qe;const tn=Symbol(""),io=Symbol("");class Zo{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Md(this,i)}run(){if(!this.active)return this.fn();let e=qe,n=kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qe,qe=this,kt=!0,Dt=1<<++ni,ni<=no?Ld(this):_l(this),this.fn()}finally{ni<=no&&Fd(this),Dt=1<<--ni,qe=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(_l(this),this.onStop&&this.onStop(),this.active=!1)}}function _l(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let kt=!0;const wu=[];function $n(){wu.push(kt),kt=!1}function Un(){const t=wu.pop();kt=t===void 0?!0:t}function Le(t,e,n){if(kt&&qe){let i=to.get(t);i||to.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Jo()),Cu(r)}}function Cu(t,e){let n=!1;ni<=no?bu(t)||(t.n|=Dt,n=!yu(t)):n=!t.has(qe),n&&(t.add(qe),qe.deps.push(t))}function mt(t,e,n,i,r,s){const o=to.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Jr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Qo(n)&&a.push(o.get("length")):(a.push(o.get(tn)),Cn(t)&&a.push(o.get(io)));break;case"delete":B(t)||(a.push(o.get(tn)),Cn(t)&&a.push(o.get(io)));break;case"set":Cn(t)&&a.push(o.get(tn));break}if(a.length===1)a[0]&&ro(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ro(Jo(l))}}function ro(t,e){const n=B(t)?t:[...t];for(const i of n)i.computed&&vl(i);for(const i of n)i.computed||vl(i)}function vl(t,e){(t!==qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Bd=qo("__proto__,__v_isRef,__isVue"),Eu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jr)),yl=Hd();function Hd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=K(this);for(let s=0,o=this.length;s<o;s++)Le(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(K)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){$n();const i=K(this)[e].apply(this,n);return Un(),i}}),t}function zd(t){const e=K(this);return Le(e,"has",t),e.hasOwnProperty(t)}class xu{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const r=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&i===(r?s?Zd:Au:s?Tu:Su).get(e))return e;const o=B(e);if(!r){if(o&&Y(yl,n))return Reflect.get(yl,n,i);if(n==="hasOwnProperty")return zd}const a=Reflect.get(e,n,i);return(Jr(n)?Eu.has(n):Bd(n))||(r||Le(e,"get",n),s)?a:Se(a)?o&&Qo(n)?a:a.value:oe(a)?r?ku(a):na(a):a}}class Iu extends xu{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(Pn(s)&&Se(s)&&!Se(i))return!1;if(!this._shallow&&(!Ir(i)&&!Pn(i)&&(s=K(s),i=K(i)),!B(e)&&Se(s)&&!Se(i)))return s.value=i,!0;const o=B(e)&&Qo(n)?Number(n)<e.length:Y(e,n),a=Reflect.set(e,n,i,r);return e===K(r)&&(o?sn(i,s)&&mt(e,"set",n,i):mt(e,"add",n,i)),a}deleteProperty(e,n){const i=Y(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&mt(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Jr(n)||!Eu.has(n))&&Le(e,"has",n),i}ownKeys(e){return Le(e,"iterate",B(e)?"length":tn),Reflect.ownKeys(e)}}class $d extends xu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ud=new Iu,Wd=new $d,jd=new Iu(!0),ea=t=>t,is=t=>Reflect.getPrototypeOf(t);function Ji(t,e,n=!1,i=!1){t=t.__v_raw;const r=K(t),s=K(e);n||(sn(e,s)&&Le(r,"get",e),Le(r,"get",s));const{has:o}=is(r),a=i?ea:n?ra:gi;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Zi(t,e=!1){const n=this.__v_raw,i=K(n),r=K(t);return e||(sn(t,r)&&Le(i,"has",t),Le(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function er(t,e=!1){return t=t.__v_raw,!e&&Le(K(t),"iterate",tn),Reflect.get(t,"size",t)}function bl(t){t=K(t);const e=K(this);return is(e).has.call(e,t)||(e.add(t),mt(e,"add",t,t)),this}function wl(t,e){e=K(e);const n=K(this),{has:i,get:r}=is(n);let s=i.call(n,t);s||(t=K(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?sn(e,o)&&mt(n,"set",t,e):mt(n,"add",t,e),this}function Cl(t){const e=K(this),{has:n,get:i}=is(e);let r=n.call(e,t);r||(t=K(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&mt(e,"delete",t,void 0),s}function El(){const t=K(this),e=t.size!==0,n=t.clear();return e&&mt(t,"clear",void 0,void 0),n}function tr(t,e){return function(i,r){const s=this,o=s.__v_raw,a=K(o),l=e?ea:t?ra:gi;return!t&&Le(a,"iterate",tn),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function nr(t,e,n){return function(...i){const r=this.__v_raw,s=K(r),o=Cn(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?ea:e?ra:gi;return!e&&Le(s,"iterate",l?io:tn),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function St(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vd(){const t={get(s){return Ji(this,s)},get size(){return er(this)},has:Zi,add:bl,set:wl,delete:Cl,clear:El,forEach:tr(!1,!1)},e={get(s){return Ji(this,s,!1,!0)},get size(){return er(this)},has:Zi,add:bl,set:wl,delete:Cl,clear:El,forEach:tr(!1,!0)},n={get(s){return Ji(this,s,!0)},get size(){return er(this,!0)},has(s){return Zi.call(this,s,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:tr(!0,!1)},i={get(s){return Ji(this,s,!0,!0)},get size(){return er(this,!0)},has(s){return Zi.call(this,s,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:tr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=nr(s,!1,!1),n[s]=nr(s,!0,!1),e[s]=nr(s,!1,!0),i[s]=nr(s,!0,!0)}),[t,n,e,i]}const[Yd,qd,Kd,Gd]=Vd();function ta(t,e){const n=e?t?Gd:Kd:t?qd:Yd;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Y(n,r)&&r in i?n:i,r,s)}const Qd={get:ta(!1,!1)},Xd={get:ta(!1,!0)},Jd={get:ta(!0,!1)},Su=new WeakMap,Tu=new WeakMap,Au=new WeakMap,Zd=new WeakMap;function ep(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tp(t){return t.__v_skip||!Object.isExtensible(t)?0:ep(xd(t))}function na(t){return Pn(t)?t:ia(t,!1,Ud,Qd,Su)}function np(t){return ia(t,!1,jd,Xd,Tu)}function ku(t){return ia(t,!0,Wd,Jd,Au)}function ia(t,e,n,i,r){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=tp(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function En(t){return Pn(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function Pn(t){return!!(t&&t.__v_isReadonly)}function Ir(t){return!!(t&&t.__v_isShallow)}function Nu(t){return En(t)||Pn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Pu(t){return Er(t,"__v_skip",!0),t}const gi=t=>oe(t)?na(t):t,ra=t=>oe(t)?ku(t):t;function Ru(t){kt&&qe&&(t=K(t),Cu(t.dep||(t.dep=Jo())))}function Ou(t,e){t=K(t);const n=t.dep;n&&ro(n)}function Se(t){return!!(t&&t.__v_isRef===!0)}function Ye(t){return ip(t,!1)}function ip(t,e){return Se(t)?t:new rp(t,e)}class rp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:gi(e)}get value(){return Ru(this),this._value}set value(e){const n=this.__v_isShallow||Ir(e)||Pn(e);e=n?e:K(e),sn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:gi(e),Ou(this))}}function sa(t){return Se(t)?t.value:t}const sp={get:(t,e,n)=>sa(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Mu(t){return En(t)?t:new Proxy(t,sp)}class op{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zo(e,()=>{this._dirty||(this._dirty=!0,Ou(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=K(this);return Ru(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ap(t,e,n=!1){let i,r;const s=$(t);return s?(i=t,r=et):(i=t.get,r=t.set),new op(i,r,s||!r,n)}function Nt(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){rs(s,e,n)}return r}function tt(t,e,n,i){if($(t)){const s=Nt(t,e,n,i);return s&&pu(s)&&s.catch(o=>{rs(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(tt(t[s],e,n,i));return r}function rs(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Nt(l,null,10,[t,o,a]);return}}lp(t,n,r,i)}function lp(t,e,n,i=!0){console.error(t)}let _i=!1,so=!1;const Ie=[];let at=0;const xn=[];let dt=null,Kt=0;const Du=Promise.resolve();let oa=null;function Lu(t){const e=oa||Du;return t?e.then(this?t.bind(this):t):e}function cp(t){let e=at+1,n=Ie.length;for(;e<n;){const i=e+n>>>1,r=Ie[i],s=vi(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function aa(t){(!Ie.length||!Ie.includes(t,_i&&t.allowRecurse?at+1:at))&&(t.id==null?Ie.push(t):Ie.splice(cp(t.id),0,t),Fu())}function Fu(){!_i&&!so&&(so=!0,oa=Du.then(Hu))}function up(t){const e=Ie.indexOf(t);e>at&&Ie.splice(e,1)}function fp(t){B(t)?xn.push(...t):(!dt||!dt.includes(t,t.allowRecurse?Kt+1:Kt))&&xn.push(t),Fu()}function xl(t,e=_i?at+1:0){for(;e<Ie.length;e++){const n=Ie[e];n&&n.pre&&(Ie.splice(e,1),e--,n())}}function Bu(t){if(xn.length){const e=[...new Set(xn)];if(xn.length=0,dt){dt.push(...e);return}for(dt=e,dt.sort((n,i)=>vi(n)-vi(i)),Kt=0;Kt<dt.length;Kt++)dt[Kt]();dt=null,Kt=0}}const vi=t=>t.id==null?1/0:t.id,hp=(t,e)=>{const n=vi(t)-vi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Hu(t){so=!1,_i=!0,Ie.sort(hp);const e=et;try{for(at=0;at<Ie.length;at++){const n=Ie[at];n&&n.active!==!1&&Nt(n,null,14)}}finally{at=0,Ie.length=0,Bu(),_i=!1,oa=null,(Ie.length||xn.length)&&Hu()}}function dp(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ie;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||ie;h&&(r=n.map(m=>me(m)?m.trim():m)),f&&(r=n.map(Zs))}let a,l=i[a=Ns(e)]||i[a=Ns(ct(e))];!l&&s&&(l=i[a=Ns(zn(e))]),l&&tt(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,tt(c,t,6,r)}}function zu(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!$(t)){const l=c=>{const u=zu(c,e,!0);u&&(a=!0,Ee(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(oe(t)&&i.set(t,null),null):(B(s)?s.forEach(l=>o[l]=null):Ee(o,s),oe(t)&&i.set(t,o),o)}function ss(t,e){return!t||!Xr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,zn(e))||Y(t,e))}let ze=null,$u=null;function Sr(t){const e=ze;return ze=t,$u=t&&t.type.__scopeId||null,e}function pp(t,e=ze,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Dl(-1);const s=Sr(e);let o;try{o=t(...r)}finally{Sr(s),i._d&&Dl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ps(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:_,inheritAttrs:b}=t;let O,I;const S=Sr(t);try{if(n.shapeFlag&4){const N=r||i,G=N;O=ot(u.call(G,N,f,s,m,h,_)),I=l}else{const N=e;O=ot(N.length>1?N(s,{attrs:l,slots:a,emit:c}):N(s,null)),I=e.props?l:mp(l)}}catch(N){oi.length=0,rs(N,t,1),O=ue(on)}let L=O;if(I&&b!==!1){const N=Object.keys(I),{shapeFlag:G}=L;N.length&&G&7&&(o&&N.some(Ko)&&(I=gp(I,o)),L=Rn(L,I))}return n.dirs&&(L=Rn(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),O=L,Sr(S),O}const mp=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xr(n))&&((e||(e={}))[n]=t[n]);return e},gp=(t,e)=>{const n={};for(const i in t)(!Ko(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function _p(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Il(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ss(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Il(i,o,c):!0:!!o;return!1}function Il(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ss(n,s))return!0}return!1}function vp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Uu="components";function la(t,e){return bp(Uu,t,!0,e)||t}const yp=Symbol.for("v-ndc");function bp(t,e,n=!0,i=!1){const r=ze||be;if(r){const s=r.type;if(t===Uu){const a=dm(s,!1);if(a&&(a===e||a===ct(e)||a===ts(ct(e))))return s}const o=Sl(r[t]||s[t],e)||Sl(r.appContext[t],e);return!o&&i?s:o}}function Sl(t,e){return t&&(t[e]||t[ct(e)]||t[ts(ct(e))])}const wp=t=>t.__isSuspense;function Cp(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):fp(t)}function Ep(t,e){return ca(t,null,{flush:"post"})}const ir={};function In(t,e,n){return ca(t,e,n)}function ca(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=ie){var a;const l=Dd()===((a=be)==null?void 0:a.scope)?be:null;let c,u=!1,f=!1;if(Se(t)?(c=()=>t.value,u=Ir(t)):En(t)?(c=()=>t,i=!0):B(t)?(f=!0,u=t.some(N=>En(N)||Ir(N)),c=()=>t.map(N=>{if(Se(N))return N.value;if(En(N))return Qt(N);if($(N))return Nt(N,l,2)})):$(t)?e?c=()=>Nt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),tt(t,l,3,[m])}:c=et,e&&i){const N=c;c=()=>Qt(N())}let h,m=N=>{h=S.onStop=()=>{Nt(N,l,4),h=S.onStop=void 0}},_;if(bi)if(m=et,e?n&&tt(e,l,3,[c(),f?[]:void 0,m]):c(),r==="sync"){const N=gm();_=N.__watcherHandles||(N.__watcherHandles=[])}else return et;let b=f?new Array(t.length).fill(ir):ir;const O=()=>{if(!!S.active)if(e){const N=S.run();(i||u||(f?N.some((G,we)=>sn(G,b[we])):sn(N,b)))&&(h&&h(),tt(e,l,3,[N,b===ir?void 0:f&&b[0]===ir?[]:b,m]),b=N)}else S.run()};O.allowRecurse=!!e;let I;r==="sync"?I=O:r==="post"?I=()=>Oe(O,l&&l.suspense):(O.pre=!0,l&&(O.id=l.uid),I=()=>aa(O));const S=new Zo(c,I);e?n?O():b=S.run():r==="post"?Oe(S.run.bind(S),l&&l.suspense):S.run();const L=()=>{S.stop(),l&&l.scope&&Go(l.scope.effects,S)};return _&&_.push(L),L}function xp(t,e,n){const i=this.proxy,r=me(t)?t.includes(".")?Wu(i,t):()=>i[t]:t.bind(i,i);let s;$(e)?s=e:(s=e.handler,n=e);const o=be;Mn(this);const a=ca(r,s.bind(i),n);return o?Mn(o):nn(),a}function Wu(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Qt(t,e){if(!oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Se(t))Qt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Qt(t[n],e);else if(du(t)||Cn(t))t.forEach(n=>{Qt(n,e)});else if(gu(t))for(const n in t)Qt(t[n],e);return t}function Rs(t,e){const n=ze;if(n===null)return t;const i=fs(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=ie]=e[s];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&Qt(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function jt(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&($n(),tt(l,n,8,[t.el,a,t,e]),Un())}}/*! #__NO_SIDE_EFFECTS__ */function ua(t,e){return $(t)?(()=>Ee({name:t.name},e,{setup:t}))():t}const _r=t=>!!t.type.__asyncLoader,ju=t=>t.type.__isKeepAlive;function Ip(t,e){Vu(t,"a",e)}function Sp(t,e){Vu(t,"da",e)}function Vu(t,e,n=be){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(os(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ju(r.parent.vnode)&&Tp(i,e,n,r),r=r.parent}}function Tp(t,e,n,i){const r=os(e,t,i,!0);fa(()=>{Go(i[e],r)},n)}function os(t,e,n=be,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;$n(),Mn(n);const a=tt(e,n,t,o);return nn(),Un(),a});return i?r.unshift(s):r.push(s),s}}const Ct=t=>(e,n=be)=>(!bi||t==="sp")&&os(t,(...i)=>e(...i),n),Ap=Ct("bm"),as=Ct("m"),kp=Ct("bu"),Np=Ct("u"),Pp=Ct("bum"),fa=Ct("um"),Rp=Ct("sp"),Op=Ct("rtg"),Mp=Ct("rtc");function Dp(t,e=be){os("ec",t,e)}function Yu(t,e,n,i){let r;const s=n&&n[i];if(B(t)||me(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(oe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const oo=t=>t?rf(t)?fs(t)||t.proxy:oo(t.parent):null,si=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>oo(t.parent),$root:t=>oo(t.root),$emit:t=>t.emit,$options:t=>ha(t),$forceUpdate:t=>t.f||(t.f=()=>aa(t.update)),$nextTick:t=>t.n||(t.n=Lu.bind(t.proxy)),$watch:t=>xp.bind(t)}),Os=(t,e)=>t!==ie&&!t.__isScriptSetup&&Y(t,e),Lp={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Os(i,e))return o[e]=1,i[e];if(r!==ie&&Y(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Y(c,e))return o[e]=3,s[e];if(n!==ie&&Y(n,e))return o[e]=4,n[e];ao&&(o[e]=0)}}const u=si[e];let f,h;if(u)return e==="$attrs"&&Le(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&Y(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Y(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Os(r,e)?(r[e]=n,!0):i!==ie&&Y(i,e)?(i[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ie&&Y(t,o)||Os(e,o)||(a=s[0])&&Y(a,o)||Y(i,o)||Y(si,o)||Y(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Tl(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ao=!0;function Fp(t){const e=ha(t),n=t.proxy,i=t.ctx;ao=!1,e.beforeCreate&&Al(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:_,activated:b,deactivated:O,beforeDestroy:I,beforeUnmount:S,destroyed:L,unmounted:N,render:G,renderTracked:we,renderTriggered:Ce,errorCaptured:Ue,serverPrefetch:We,expose:ft,inheritAttrs:Gn,components:Ki,directives:Gi,filters:Ts}=e;if(c&&Bp(c,i,null),o)for(const ae in o){const J=o[ae];$(J)&&(i[ae]=J.bind(n))}if(r){const ae=r.call(n,n);oe(ae)&&(t.data=na(ae))}if(ao=!0,s)for(const ae in s){const J=s[ae],Ut=$(J)?J.bind(n,n):$(J.get)?J.get.bind(n,n):et,Qi=!$(J)&&$(J.set)?J.set.bind(n):et,Wt=He({get:Ut,set:Qi});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:it=>Wt.value=it})}if(a)for(const ae in a)qu(a[ae],i,n,ae);if(l){const ae=$(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(J=>{jp(J,ae[J])})}u&&Al(u,t,"c");function Te(ae,J){B(J)?J.forEach(Ut=>ae(Ut.bind(n))):J&&ae(J.bind(n))}if(Te(Ap,f),Te(as,h),Te(kp,m),Te(Np,_),Te(Ip,b),Te(Sp,O),Te(Dp,Ue),Te(Mp,we),Te(Op,Ce),Te(Pp,S),Te(fa,N),Te(Rp,We),B(ft))if(ft.length){const ae=t.exposed||(t.exposed={});ft.forEach(J=>{Object.defineProperty(ae,J,{get:()=>n[J],set:Ut=>n[J]=Ut})})}else t.exposed||(t.exposed={});G&&t.render===et&&(t.render=G),Gn!=null&&(t.inheritAttrs=Gn),Ki&&(t.components=Ki),Gi&&(t.directives=Gi)}function Bp(t,e,n=et){B(t)&&(t=lo(t));for(const i in t){const r=t[i];let s;oe(r)?"default"in r?s=vr(r.from||i,r.default,!0):s=vr(r.from||i):s=vr(r),Se(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Al(t,e,n){tt(B(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function qu(t,e,n,i){const r=i.includes(".")?Wu(n,i):()=>n[i];if(me(t)){const s=e[t];$(s)&&In(r,s)}else if($(t))In(r,t.bind(n));else if(oe(t))if(B(t))t.forEach(s=>qu(s,e,n,i));else{const s=$(t.handler)?t.handler.bind(n):e[t.handler];$(s)&&In(r,s,t)}}function ha(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Tr(l,c,o,!0)),Tr(l,e,o)),oe(e)&&s.set(e,l),l}function Tr(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Tr(t,s,n,!0),r&&r.forEach(o=>Tr(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Hp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Hp={data:kl,props:Nl,emits:Nl,methods:ii,computed:ii,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:ii,directives:ii,watch:$p,provide:kl,inject:zp};function kl(t,e){return e?t?function(){return Ee($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function zp(t,e){return ii(lo(t),lo(e))}function lo(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function ii(t,e){return t?Ee(Object.create(null),t,e):e}function Nl(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:Ee(Object.create(null),Tl(t),Tl(e!=null?e:{})):e}function $p(t,e){if(!t)return e;if(!e)return t;const n=Ee(Object.create(null),t);for(const i in e)n[i]=Ae(t[i],e[i]);return n}function Ku(){return{app:null,config:{isNativeTag:wd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Up=0;function Wp(t,e){return function(i,r=null){$(i)||(i=Ee({},i)),r!=null&&!oe(r)&&(r=null);const s=Ku(),o=new WeakSet;let a=!1;const l=s.app={_uid:Up++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:_m,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...u)):$(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=ue(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,fs(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Ar=l;try{return c()}finally{Ar=null}}};return l}}let Ar=null;function jp(t,e){if(be){let n=be.provides;const i=be.parent&&be.parent.provides;i===n&&(n=be.provides=Object.create(i)),n[t]=e}}function vr(t,e,n=!1){const i=be||ze;if(i||Ar){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ar._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&$(e)?e.call(i&&i.proxy):e}}function Vp(t,e,n,i=!1){const r={},s={};Er(s,us,1),t.propsDefaults=Object.create(null),Gu(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:np(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Yp(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=K(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ss(t.emitsOptions,h))continue;const m=e[h];if(l)if(Y(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const _=ct(h);r[_]=co(l,a,_,m,t,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Gu(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Y(e,f)&&((u=zn(f))===f||!Y(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=co(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Y(e,f)&&!0)&&(delete s[f],c=!0)}c&&mt(t,"set","$attrs")}function Gu(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(mr(l))continue;const c=e[l];let u;r&&Y(r,u=ct(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ss(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=K(n),c=a||ie;for(let u=0;u<s.length;u++){const f=s[u];n[f]=co(r,l,f,c[f],t,!Y(c,f))}}return o}function co(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Y(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Mn(r),i=c[n]=l.call(null,e),nn())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===zn(n))&&(i=!0))}return i}function Qu(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!$(t)){const u=f=>{l=!0;const[h,m]=Qu(f,e,!0);Ee(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return oe(t)&&i.set(t,wn),wn;if(B(s))for(let u=0;u<s.length;u++){const f=ct(s[u]);Pl(f)&&(o[f]=ie)}else if(s)for(const u in s){const f=ct(u);if(Pl(f)){const h=s[u],m=o[f]=B(h)||$(h)?{type:h}:Ee({},h);if(m){const _=Ml(Boolean,m.type),b=Ml(String,m.type);m[0]=_>-1,m[1]=b<0||_<b,(_>-1||Y(m,"default"))&&a.push(f)}}}const c=[o,a];return oe(t)&&i.set(t,c),c}function Pl(t){return t[0]!=="$"}function Rl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ol(t,e){return Rl(t)===Rl(e)}function Ml(t,e){return B(e)?e.findIndex(n=>Ol(n,t)):$(e)&&Ol(e,t)?0:-1}const Xu=t=>t[0]==="_"||t==="$stable",da=t=>B(t)?t.map(ot):[ot(t)],qp=(t,e,n)=>{if(e._n)return e;const i=pp((...r)=>da(e(...r)),n);return i._c=!1,i},Ju=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Xu(r))continue;const s=t[r];if($(s))e[r]=qp(r,s,i);else if(s!=null){const o=da(s);e[r]=()=>o}}},Zu=(t,e)=>{const n=da(e);t.slots.default=()=>n},Kp=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),Er(e,"_",n)):Ju(e,t.slots={})}else t.slots={},e&&Zu(t,e);Er(t.slots,us,1)},Gp=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ie;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ee(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Ju(e,r)),o=e}else e&&(Zu(t,e),o={default:1});if(s)for(const a in r)!Xu(a)&&o[a]==null&&delete r[a]};function uo(t,e,n,i,r=!1){if(B(t)){t.forEach((h,m)=>uo(h,e&&(B(e)?e[m]:e),n,i,r));return}if(_r(i)&&!r)return;const s=i.shapeFlag&4?fs(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(me(c)?(u[c]=null,Y(f,c)&&(f[c]=null)):Se(c)&&(c.value=null)),$(l))Nt(l,a,12,[o,u]);else{const h=me(l),m=Se(l);if(h||m){const _=()=>{if(t.f){const b=h?Y(f,l)?f[l]:u[l]:l.value;r?B(b)&&Go(b,s):B(b)?b.includes(s)||b.push(s):h?(u[l]=[s],Y(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,Y(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Oe(_,n)):_()}}}const Oe=Cp;function Qp(t){return Xp(t)}function Xp(t,e){const n=eo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=et,insertStaticContent:_}=t,b=(d,p,g,v=null,y=null,x=null,A=!1,C=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Xn(d,p)&&(v=Xi(d),it(d,y,x,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:w,ref:M,shapeFlag:P}=p;switch(w){case ls:O(d,p,g,v);break;case on:I(d,p,g,v);break;case yr:d==null&&S(p,g,v,A);break;case Ne:Ki(d,p,g,v,y,x,A,C,T);break;default:P&1?G(d,p,g,v,y,x,A,C,T):P&6?Gi(d,p,g,v,y,x,A,C,T):(P&64||P&128)&&w.process(d,p,g,v,y,x,A,C,T,dn)}M!=null&&y&&uo(M,d&&d.ref,x,p||d,!p)},O=(d,p,g,v)=>{if(d==null)i(p.el=a(p.children),g,v);else{const y=p.el=d.el;p.children!==d.children&&c(y,p.children)}},I=(d,p,g,v)=>{d==null?i(p.el=l(p.children||""),g,v):p.el=d.el},S=(d,p,g,v)=>{[d.el,d.anchor]=_(d.children,p,g,v,d.el,d.anchor)},L=({el:d,anchor:p},g,v)=>{let y;for(;d&&d!==p;)y=h(d),i(d,g,v),d=y;i(p,g,v)},N=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),r(d),d=g;r(p)},G=(d,p,g,v,y,x,A,C,T)=>{A=A||p.type==="svg",d==null?we(p,g,v,y,x,A,C,T):We(d,p,y,x,A,C,T)},we=(d,p,g,v,y,x,A,C)=>{let T,w;const{type:M,props:P,shapeFlag:D,transition:H,dirs:j}=d;if(T=d.el=o(d.type,x,P&&P.is,P),D&8?u(T,d.children):D&16&&Ue(d.children,T,null,v,y,x&&M!=="foreignObject",A,C),j&&jt(d,null,v,"created"),Ce(T,d,d.scopeId,A,v),P){for(const Q in P)Q!=="value"&&!mr(Q)&&s(T,Q,null,P[Q],x,d.children,v,y,ht);"value"in P&&s(T,"value",null,P.value),(w=P.onVnodeBeforeMount)&&st(w,v,d)}j&&jt(d,null,v,"beforeMount");const Z=Jp(y,H);Z&&H.beforeEnter(T),i(T,p,g),((w=P&&P.onVnodeMounted)||Z||j)&&Oe(()=>{w&&st(w,v,d),Z&&H.enter(T),j&&jt(d,null,v,"mounted")},y)},Ce=(d,p,g,v,y)=>{if(g&&m(d,g),v)for(let x=0;x<v.length;x++)m(d,v[x]);if(y){let x=y.subTree;if(p===x){const A=y.vnode;Ce(d,A,A.scopeId,A.slotScopeIds,y.parent)}}},Ue=(d,p,g,v,y,x,A,C,T=0)=>{for(let w=T;w<d.length;w++){const M=d[w]=C?At(d[w]):ot(d[w]);b(null,M,p,g,v,y,x,A,C)}},We=(d,p,g,v,y,x,A)=>{const C=p.el=d.el;let{patchFlag:T,dynamicChildren:w,dirs:M}=p;T|=d.patchFlag&16;const P=d.props||ie,D=p.props||ie;let H;g&&Vt(g,!1),(H=D.onVnodeBeforeUpdate)&&st(H,g,p,d),M&&jt(p,d,g,"beforeUpdate"),g&&Vt(g,!0);const j=y&&p.type!=="foreignObject";if(w?ft(d.dynamicChildren,w,C,g,v,j,x):A||J(d,p,C,null,g,v,j,x,!1),T>0){if(T&16)Gn(C,p,P,D,g,v,y);else if(T&2&&P.class!==D.class&&s(C,"class",null,D.class,y),T&4&&s(C,"style",P.style,D.style,y),T&8){const Z=p.dynamicProps;for(let Q=0;Q<Z.length;Q++){const fe=Z[Q],je=P[fe],pn=D[fe];(pn!==je||fe==="value")&&s(C,fe,je,pn,y,d.children,g,v,ht)}}T&1&&d.children!==p.children&&u(C,p.children)}else!A&&w==null&&Gn(C,p,P,D,g,v,y);((H=D.onVnodeUpdated)||M)&&Oe(()=>{H&&st(H,g,p,d),M&&jt(p,d,g,"updated")},v)},ft=(d,p,g,v,y,x,A)=>{for(let C=0;C<p.length;C++){const T=d[C],w=p[C],M=T.el&&(T.type===Ne||!Xn(T,w)||T.shapeFlag&70)?f(T.el):g;b(T,w,M,null,v,y,x,A,!0)}},Gn=(d,p,g,v,y,x,A)=>{if(g!==v){if(g!==ie)for(const C in g)!mr(C)&&!(C in v)&&s(d,C,g[C],null,A,p.children,y,x,ht);for(const C in v){if(mr(C))continue;const T=v[C],w=g[C];T!==w&&C!=="value"&&s(d,C,w,T,A,p.children,y,x,ht)}"value"in v&&s(d,"value",g.value,v.value)}},Ki=(d,p,g,v,y,x,A,C,T)=>{const w=p.el=d?d.el:a(""),M=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:D,slotScopeIds:H}=p;H&&(C=C?C.concat(H):H),d==null?(i(w,g,v),i(M,g,v),Ue(p.children,g,M,y,x,A,C,T)):P>0&&P&64&&D&&d.dynamicChildren?(ft(d.dynamicChildren,D,g,y,x,A,C),(p.key!=null||y&&p===y.subTree)&&ef(d,p,!0)):J(d,p,g,M,y,x,A,C,T)},Gi=(d,p,g,v,y,x,A,C,T)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?y.ctx.activate(p,g,v,A,T):Ts(p,g,v,y,x,A,T):ul(d,p,T)},Ts=(d,p,g,v,y,x,A)=>{const C=d.component=am(d,v,y);if(ju(d)&&(C.ctx.renderer=dn),cm(C),C.asyncDep){if(y&&y.registerDep(C,Te),!d.el){const T=C.subTree=ue(on);I(null,T,p,g)}return}Te(C,d,p,g,y,x,A)},ul=(d,p,g)=>{const v=p.component=d.component;if(_p(d,p,g))if(v.asyncDep&&!v.asyncResolved){ae(v,p,g);return}else v.next=p,up(v.update),v.update();else p.el=d.el,v.vnode=p},Te=(d,p,g,v,y,x,A)=>{const C=()=>{if(d.isMounted){let{next:M,bu:P,u:D,parent:H,vnode:j}=d,Z=M,Q;Vt(d,!1),M?(M.el=j.el,ae(d,M,A)):M=j,P&&gr(P),(Q=M.props&&M.props.onVnodeBeforeUpdate)&&st(Q,H,M,j),Vt(d,!0);const fe=Ps(d),je=d.subTree;d.subTree=fe,b(je,fe,f(je.el),Xi(je),d,y,x),M.el=fe.el,Z===null&&vp(d,fe.el),D&&Oe(D,y),(Q=M.props&&M.props.onVnodeUpdated)&&Oe(()=>st(Q,H,M,j),y)}else{let M;const{el:P,props:D}=p,{bm:H,m:j,parent:Z}=d,Q=_r(p);if(Vt(d,!1),H&&gr(H),!Q&&(M=D&&D.onVnodeBeforeMount)&&st(M,Z,p),Vt(d,!0),P&&ks){const fe=()=>{d.subTree=Ps(d),ks(P,d.subTree,d,y,null)};Q?p.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=Ps(d);b(null,fe,g,v,d,y,x),p.el=fe.el}if(j&&Oe(j,y),!Q&&(M=D&&D.onVnodeMounted)){const fe=p;Oe(()=>st(M,Z,fe),y)}(p.shapeFlag&256||Z&&_r(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&Oe(d.a,y),d.isMounted=!0,p=g=v=null}},T=d.effect=new Zo(C,()=>aa(w),d.scope),w=d.update=()=>T.run();w.id=d.uid,Vt(d,!0),w()},ae=(d,p,g)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,Yp(d,p.props,v,g),Gp(d,p.children,g),$n(),xl(),Un()},J=(d,p,g,v,y,x,A,C,T=!1)=>{const w=d&&d.children,M=d?d.shapeFlag:0,P=p.children,{patchFlag:D,shapeFlag:H}=p;if(D>0){if(D&128){Qi(w,P,g,v,y,x,A,C,T);return}else if(D&256){Ut(w,P,g,v,y,x,A,C,T);return}}H&8?(M&16&&ht(w,y,x),P!==w&&u(g,P)):M&16?H&16?Qi(w,P,g,v,y,x,A,C,T):ht(w,y,x,!0):(M&8&&u(g,""),H&16&&Ue(P,g,v,y,x,A,C,T))},Ut=(d,p,g,v,y,x,A,C,T)=>{d=d||wn,p=p||wn;const w=d.length,M=p.length,P=Math.min(w,M);let D;for(D=0;D<P;D++){const H=p[D]=T?At(p[D]):ot(p[D]);b(d[D],H,g,null,y,x,A,C,T)}w>M?ht(d,y,x,!0,!1,P):Ue(p,g,v,y,x,A,C,T,P)},Qi=(d,p,g,v,y,x,A,C,T)=>{let w=0;const M=p.length;let P=d.length-1,D=M-1;for(;w<=P&&w<=D;){const H=d[w],j=p[w]=T?At(p[w]):ot(p[w]);if(Xn(H,j))b(H,j,g,null,y,x,A,C,T);else break;w++}for(;w<=P&&w<=D;){const H=d[P],j=p[D]=T?At(p[D]):ot(p[D]);if(Xn(H,j))b(H,j,g,null,y,x,A,C,T);else break;P--,D--}if(w>P){if(w<=D){const H=D+1,j=H<M?p[H].el:v;for(;w<=D;)b(null,p[w]=T?At(p[w]):ot(p[w]),g,j,y,x,A,C,T),w++}}else if(w>D)for(;w<=P;)it(d[w],y,x,!0),w++;else{const H=w,j=w,Z=new Map;for(w=j;w<=D;w++){const Be=p[w]=T?At(p[w]):ot(p[w]);Be.key!=null&&Z.set(Be.key,w)}let Q,fe=0;const je=D-j+1;let pn=!1,dl=0;const Qn=new Array(je);for(w=0;w<je;w++)Qn[w]=0;for(w=H;w<=P;w++){const Be=d[w];if(fe>=je){it(Be,y,x,!0);continue}let rt;if(Be.key!=null)rt=Z.get(Be.key);else for(Q=j;Q<=D;Q++)if(Qn[Q-j]===0&&Xn(Be,p[Q])){rt=Q;break}rt===void 0?it(Be,y,x,!0):(Qn[rt-j]=w+1,rt>=dl?dl=rt:pn=!0,b(Be,p[rt],g,null,y,x,A,C,T),fe++)}const pl=pn?Zp(Qn):wn;for(Q=pl.length-1,w=je-1;w>=0;w--){const Be=j+w,rt=p[Be],ml=Be+1<M?p[Be+1].el:v;Qn[w]===0?b(null,rt,g,ml,y,x,A,C,T):pn&&(Q<0||w!==pl[Q]?Wt(rt,g,ml,2):Q--)}}},Wt=(d,p,g,v,y=null)=>{const{el:x,type:A,transition:C,children:T,shapeFlag:w}=d;if(w&6){Wt(d.component.subTree,p,g,v);return}if(w&128){d.suspense.move(p,g,v);return}if(w&64){A.move(d,p,g,dn);return}if(A===Ne){i(x,p,g);for(let P=0;P<T.length;P++)Wt(T[P],p,g,v);i(d.anchor,p,g);return}if(A===yr){L(d,p,g);return}if(v!==2&&w&1&&C)if(v===0)C.beforeEnter(x),i(x,p,g),Oe(()=>C.enter(x),y);else{const{leave:P,delayLeave:D,afterLeave:H}=C,j=()=>i(x,p,g),Z=()=>{P(x,()=>{j(),H&&H()})};D?D(x,j,Z):Z()}else i(x,p,g)},it=(d,p,g,v=!1,y=!1)=>{const{type:x,props:A,ref:C,children:T,dynamicChildren:w,shapeFlag:M,patchFlag:P,dirs:D}=d;if(C!=null&&uo(C,null,g,d,!0),M&256){p.ctx.deactivate(d);return}const H=M&1&&D,j=!_r(d);let Z;if(j&&(Z=A&&A.onVnodeBeforeUnmount)&&st(Z,p,d),M&6)bd(d.component,g,v);else{if(M&128){d.suspense.unmount(g,v);return}H&&jt(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,g,y,dn,v):w&&(x!==Ne||P>0&&P&64)?ht(w,p,g,!1,!0):(x===Ne&&P&384||!y&&M&16)&&ht(T,p,g),v&&fl(d)}(j&&(Z=A&&A.onVnodeUnmounted)||H)&&Oe(()=>{Z&&st(Z,p,d),H&&jt(d,null,p,"unmounted")},g)},fl=d=>{const{type:p,el:g,anchor:v,transition:y}=d;if(p===Ne){yd(g,v);return}if(p===yr){N(d);return}const x=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:C}=y,T=()=>A(g,x);C?C(d.el,x,T):T()}else x()},yd=(d,p)=>{let g;for(;d!==p;)g=h(d),r(d),d=g;r(p)},bd=(d,p,g)=>{const{bum:v,scope:y,update:x,subTree:A,um:C}=d;v&&gr(v),y.stop(),x&&(x.active=!1,it(A,d,p,g)),C&&Oe(C,p),Oe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ht=(d,p,g,v=!1,y=!1,x=0)=>{for(let A=x;A<d.length;A++)it(d[A],p,g,v,y)},Xi=d=>d.shapeFlag&6?Xi(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),hl=(d,p,g)=>{d==null?p._vnode&&it(p._vnode,null,null,!0):b(p._vnode||null,d,p,null,null,null,g),xl(),Bu(),p._vnode=d},dn={p:b,um:it,m:Wt,r:fl,mt:Ts,mc:Ue,pc:J,pbc:ft,n:Xi,o:t};let As,ks;return e&&([As,ks]=e(dn)),{render:hl,hydrate:As,createApp:Wp(hl,As)}}function Vt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Jp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ef(t,e,n=!1){const i=t.children,r=e.children;if(B(i)&&B(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=At(r[s]),a.el=o.el),n||ef(o,a)),a.type===ls&&(a.el=o.el)}}function Zp(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const em=t=>t.__isTeleport,Ne=Symbol.for("v-fgt"),ls=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),yr=Symbol.for("v-stc"),oi=[];let Qe=null;function he(t=!1){oi.push(Qe=t?null:[])}function tm(){oi.pop(),Qe=oi[oi.length-1]||null}let yi=1;function Dl(t){yi+=t}function tf(t){return t.dynamicChildren=yi>0?Qe||wn:null,tm(),yi>0&&Qe&&Qe.push(t),t}function ke(t,e,n,i,r,s){return tf(z(t,e,n,i,r,s,!0))}function cs(t,e,n,i,r){return tf(ue(t,e,n,i,r,!0))}function fo(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return t.type===e.type&&t.key===e.key}const us="__vInternal",nf=({key:t})=>t!=null?t:null,br=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||Se(t)||$(t)?{i:ze,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,i=0,r=null,s=t===Ne?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nf(e),ref:e&&br(e),scopeId:$u,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ze};return a?(pa(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),yi>0&&!o&&Qe&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Qe.push(l),l}const ue=nm;function nm(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===yp)&&(t=on),fo(t)){const a=Rn(t,e,!0);return n&&pa(a,n),yi>0&&!s&&Qe&&(a.shapeFlag&6?Qe[Qe.indexOf(t)]=a:Qe.push(a)),a.patchFlag|=-2,a}if(pm(t)&&(t=t.__vccOpts),e){e=im(e);let{class:a,style:l}=e;a&&!me(a)&&(e.class=ns(a)),oe(l)&&(Nu(l)&&!B(l)&&(l=Ee({},l)),e.style=Xo(l))}const o=me(t)?1:wp(t)?128:em(t)?64:oe(t)?4:$(t)?2:0;return z(t,e,n,i,r,o,s,!0)}function im(t){return t?Nu(t)||us in t?Ee({},t):t:null}function Rn(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?rm(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&nf(a),ref:e&&e.ref?n&&r?B(r)?r.concat(br(e)):[r,br(e)]:br(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function On(t=" ",e=0){return ue(ls,null,t,e)}function ai(t="",e=!1){return e?(he(),cs(on,null,t)):ue(on,null,t)}function ot(t){return t==null||typeof t=="boolean"?ue(on):B(t)?ue(Ne,null,t.slice()):typeof t=="object"?At(t):ue(ls,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rn(t)}function pa(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),pa(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(us in e)?e._ctx=ze:r===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),i&64?(n=16,e=[On(e)]):n=8);t.children=e,t.shapeFlag|=n}function rm(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ns([e.class,i.class]));else if(r==="style")e.style=Xo([e.style,i.style]);else if(Xr(r)){const s=e[r],o=i[r];o&&s!==o&&!(B(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function st(t,e,n,i=null){tt(t,e,7,[n,i])}const sm=Ku();let om=0;function am(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||sm,s={uid:om++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Od(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qu(i,r),emitsOptions:zu(i,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:i.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=dp.bind(null,s),t.ce&&t.ce(s),s}let be=null;const lm=()=>be||ze;let ma,mn,Ll="__VUE_INSTANCE_SETTERS__";(mn=eo()[Ll])||(mn=eo()[Ll]=[]),mn.push(t=>be=t),ma=t=>{mn.length>1?mn.forEach(e=>e(t)):mn[0](t)};const Mn=t=>{ma(t),t.scope.on()},nn=()=>{be&&be.scope.off(),ma(null)};function rf(t){return t.vnode.shapeFlag&4}let bi=!1;function cm(t,e=!1){bi=e;const{props:n,children:i}=t.vnode,r=rf(t);Vp(t,n,r,e),Kp(t,i);const s=r?um(t,e):void 0;return bi=!1,s}function um(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Pu(new Proxy(t.ctx,Lp));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?hm(t):null;Mn(t),$n();const s=Nt(i,t,0,[t.props,r]);if(Un(),nn(),pu(s)){if(s.then(nn,nn),e)return s.then(o=>{Fl(t,o,e)}).catch(o=>{rs(o,t,0)});t.asyncDep=s}else Fl(t,s,e)}else sf(t,e)}function Fl(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=Mu(e)),sf(t,n)}let Bl;function sf(t,e,n){const i=t.type;if(!t.render){if(!e&&Bl&&!i.render){const r=i.template||ha(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ee(Ee({isCustomElement:s,delimiters:a},o),l);i.render=Bl(r,c)}}t.render=i.render||et}{Mn(t),$n();try{Fp(t)}finally{Un(),nn()}}}function fm(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Le(t,"get","$attrs"),e[n]}}))}function hm(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return fm(t)},slots:t.slots,emit:t.emit,expose:e}}function fs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Mu(Pu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in si)return si[n](t)},has(e,n){return n in e||n in si}}))}function dm(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function pm(t){return $(t)&&"__vccOpts"in t}const He=(t,e)=>ap(t,e,bi);function of(t,e,n){const i=arguments.length;return i===2?oe(e)&&!B(e)?fo(e)?ue(t,null,[e]):ue(t,e):ue(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&fo(n)&&(n=[n]),ue(t,e,n))}const mm=Symbol.for("v-scx"),gm=()=>vr(mm),_m="3.3.9",vm="http://www.w3.org/2000/svg",Gt=typeof document<"u"?document:null,Hl=Gt&&Gt.createElement("template"),ym={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Gt.createElementNS(vm,t):Gt.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Gt.createTextNode(t),createComment:t=>Gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Hl.innerHTML=i?`<svg>${t}</svg>`:t;const a=Hl.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bm=Symbol("_vtc");function wm(t,e,n){const i=t[bm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Cm=Symbol("_vod");function Em(t,e,n){const i=t.style,r=me(n);if(n&&!r){if(e&&!me(e))for(const s in e)n[s]==null&&ho(i,s,"");for(const s in n)ho(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),Cm in t&&(i.display=s)}}const zl=/\s*!important$/;function ho(t,e,n){if(B(n))n.forEach(i=>ho(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=xm(t,e);zl.test(n)?t.setProperty(zn(i),n.replace(zl,""),"important"):t[i]=n}}const $l=["Webkit","Moz","ms"],Ms={};function xm(t,e){const n=Ms[e];if(n)return n;let i=ct(e);if(i!=="filter"&&i in t)return Ms[e]=i;i=ts(i);for(let r=0;r<$l.length;r++){const s=$l[r]+i;if(s in t)return Ms[e]=s}return e}const Ul="http://www.w3.org/1999/xlink";function Im(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ul,e.slice(6,e.length)):t.setAttributeNS(Ul,e,n);else{const s=Rd(e);n==null||s&&!_u(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Sm(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n==null?"":n;c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=_u(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function _n(t,e,n,i){t.addEventListener(e,n,i)}function Tm(t,e,n,i){t.removeEventListener(e,n,i)}const Wl=Symbol("_vei");function Am(t,e,n,i,r=null){const s=t[Wl]||(t[Wl]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=km(e);if(i){const c=s[e]=Rm(i,r);_n(t,a,c,l)}else o&&(Tm(t,a,o,l),s[e]=void 0)}}const jl=/(?:Once|Passive|Capture)$/;function km(t){let e;if(jl.test(t)){e={};let i;for(;i=t.match(jl);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zn(t.slice(2)),e]}let Ds=0;const Nm=Promise.resolve(),Pm=()=>Ds||(Nm.then(()=>Ds=0),Ds=Date.now());function Rm(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;tt(Om(i,n.value),e,5,[i])};return n.value=t,n.attached=Pm(),n}function Om(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Vl=/^on[a-z]/,Mm=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?wm(t,i,r):e==="style"?Em(t,n,i):Xr(e)?Ko(e)||Am(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dm(t,e,i,r))?Sm(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Im(t,e,i,r))};function Dm(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Vl.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Vl.test(e)&&me(n)?!1:e in t}function Lm(t){const e=lm();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>mo(s,r))},i=()=>{const r=t(e.proxy);po(e.subTree,r),n(r)};Ep(i),as(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),fa(()=>r.disconnect())})}function po(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{po(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)mo(t.el,e);else if(t.type===Ne)t.children.forEach(n=>po(n,e));else if(t.type===yr){let{el:n,anchor:i}=t;for(;n&&(mo(n,e),n!==i);)n=n.nextSibling}}function mo(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const Yl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>gr(e,n):e};function Fm(t){t.target.composing=!0}function ql(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ls=Symbol("_assign"),Fs={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Ls]=Yl(r);const s=i||r.props&&r.props.type==="number";_n(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Zs(a)),t[Ls](a)}),n&&_n(t,"change",()=>{t.value=t.value.trim()}),e||(_n(t,"compositionstart",Fm),_n(t,"compositionend",ql),_n(t,"change",ql))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t[Ls]=Yl(s),t.composing)return;const o=r||t.type==="number"?Zs(t.value):t.value,a=e==null?"":e;o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===a)||(t.value=a))}},Bm=["ctrl","shift","alt","meta"],Hm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Bm.some(n=>t[`${n}Key`]&&!e.includes(n))},zm=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=Hm[e[r]];if(s&&s(n,e))return}return t(n,...i)},$m=Ee({patchProp:Mm},ym);let Kl;function Um(){return Kl||(Kl=Qp($m))}const Wm=(...t)=>{const e=Um().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=jm(i);if(!r)return;const s=e._component;!$(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function jm(t){return me(t)?document.querySelector(t):t}const Vm="/icon.svg",Ym="/sl-logo.svg",qm=()=>{};/**
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
 */const af={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw Wn(e)},Wn=function(t){return new Error("Firebase Database ("+af.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const lf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Km=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),i.push(n[u],n[f],n[h],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Km(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw new Gm;const h=s<<2|a>>4;if(i.push(h),c!==64){const m=a<<4&240|c>>2;if(i.push(m),f!==64){const _=c<<6&192|f;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cf=function(t){const e=lf(t);return ga.encodeByteArray(e,!0)},kr=function(t){return cf(t).replace(/\./g,"")},go=function(t){try{return ga.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qm(t){return uf(void 0,t)}function uf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Xm(n)||(t[n]=uf(t[n],e[n]));return t}function Xm(t){return t!=="__proto__"}/**
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
 */function Jm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zm=()=>Jm().__FIREBASE_DEFAULTS__,eg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&go(t[1]);return e&&JSON.parse(e)},ff=()=>{try{return qm()||Zm()||eg()||tg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ng=t=>{var e,n;return(n=(e=ff())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},ig=t=>{const e=ng(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},hf=()=>{var t;return(t=ff())==null?void 0:t.config};/**
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
 */class hs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function _a(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rg(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function sg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[kr(JSON.stringify(n)),kr(JSON.stringify(o)),a].join(".")}const li={};function og(){const t={prod:[],emulator:[]};for(const e of Object.keys(li))li[e]?t.emulator.push(e):t.prod.push(e);return t}function ag(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Gl=!1;function lg(t,e){if(typeof window>"u"||typeof document>"u"||!_a(window.location.host)||li[t]===e||li[t]||Gl)return;li[t]=e;function n(h){return`__firebase__banner__${h}`}const i="__firebase__banner",s=og().prod.length>0;function o(){const h=document.getElementById(i);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,m){h.setAttribute("width","24"),h.setAttribute("id",m),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{Gl=!0,o()},h}function u(h,m){h.setAttribute("id",m),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=ag(i),m=n("text"),_=document.getElementById(m)||document.createElement("span"),b=n("learnmore"),O=document.getElementById(b)||document.createElement("a"),I=n("preprendIcon"),S=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const L=h.element;a(L),u(O,b);const N=c();l(S,I),L.append(S,_,O,N),document.body.appendChild(L)}s?(_.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(S.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function cg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function df(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cg())}function ug(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pf(){return af.NODE_ADMIN===!0}function fg(){try{return typeof indexedDB=="object"}catch{return!1}}function hg(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const dg="FirebaseError";class Bi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=dg,Object.setPrototypeOf(this,Bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mf.prototype.create)}}class mf{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?pg(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Bi(r,a,i)}}function pg(t,e){return t.replace(mg,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const mg=/\{\$([^}]+)}/g;/**
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
 */function wi(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
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
 */const gf=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=wi(go(s[0])||""),n=wi(go(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},gg=function(t){const e=gf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_g=function(t){const e=gf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Et(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Dn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ql(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nr(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Pr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Xl(s)&&Xl(o)){if(!Pr(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Xl(t){return t!==null&&typeof t=="object"}/**
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
 */function vg(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class yg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function va(t,e){return`${t} failed: ${e} argument `}/**
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
 */const bg=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,E(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ds=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function jn(t){return t&&t._delegate?t._delegate:t}class Ci{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class wg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new hs;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!=null?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eg(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var o;const i=this.normalizeInstanceIdentifier(n),r=(o=this.onInitCallbacks.get(i))!=null?o:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Cg(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cg(t){return t===Yt?void 0:t}function Eg(t){return t.instantiationMode==="EAGER"}/**
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
 */class xg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Ig={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Sg=ee.INFO,Tg={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Ag=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Tg[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _f{constructor(e){this.name=e,this._logLevel=Sg,this._logHandler=Ag,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ig[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const kg=(t,e)=>e.some(n=>t instanceof n);let Jl,Zl;function Ng(){return Jl||(Jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pg(){return Zl||(Zl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vf=new WeakMap,_o=new WeakMap,yf=new WeakMap,Bs=new WeakMap,ya=new WeakMap;function Rg(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pt(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vf.set(n,t)}).catch(()=>{}),ya.set(e,t),e}function Og(t){if(_o.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_o.set(t,e)}let vo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _o.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mg(t){vo=t(vo)}function Dg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Hs(this),e,...n);return yf.set(i,e.sort?e.sort():[e]),Pt(i)}:Pg().includes(t)?function(...e){return t.apply(Hs(this),e),Pt(vf.get(this))}:function(...e){return Pt(t.apply(Hs(this),e))}}function Lg(t){return typeof t=="function"?Dg(t):(t instanceof IDBTransaction&&Og(t),kg(t,Ng())?new Proxy(t,vo):t)}function Pt(t){if(t instanceof IDBRequest)return Rg(t);if(Bs.has(t))return Bs.get(t);const e=Lg(t);return e!==t&&(Bs.set(t,e),ya.set(e,t)),e}const Hs=t=>ya.get(t);function Fg(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Pt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Pt(o.result),l.oldVersion,l.newVersion,Pt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Bg=["get","getKey","getAll","getAllKeys","count"],Hg=["put","add","delete","clear"],zs=new Map;function ec(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zs.get(e))return zs.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Hg.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Bg.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return zs.set(e,s),s}Mg(t=>({...t,get:(e,n,i)=>ec(e,n)||t.get(e,n,i),has:(e,n)=>!!ec(e,n)||t.has(e,n)}));/**
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
 */class zg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($g(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function $g(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yo="@firebase/app",tc="0.14.9";/**
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
 */const _t=new _f("@firebase/app"),Ug="@firebase/app-compat",Wg="@firebase/analytics-compat",jg="@firebase/analytics",Vg="@firebase/app-check-compat",Yg="@firebase/app-check",qg="@firebase/auth",Kg="@firebase/auth-compat",Gg="@firebase/database",Qg="@firebase/data-connect",Xg="@firebase/database-compat",Jg="@firebase/functions",Zg="@firebase/functions-compat",e_="@firebase/installations",t_="@firebase/installations-compat",n_="@firebase/messaging",i_="@firebase/messaging-compat",r_="@firebase/performance",s_="@firebase/performance-compat",o_="@firebase/remote-config",a_="@firebase/remote-config-compat",l_="@firebase/storage",c_="@firebase/storage-compat",u_="@firebase/firestore",f_="@firebase/ai",h_="@firebase/firestore-compat",d_="firebase",p_="12.10.0";/**
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
 */const bo="[DEFAULT]",m_={[yo]:"fire-core",[Ug]:"fire-core-compat",[jg]:"fire-analytics",[Wg]:"fire-analytics-compat",[Yg]:"fire-app-check",[Vg]:"fire-app-check-compat",[qg]:"fire-auth",[Kg]:"fire-auth-compat",[Gg]:"fire-rtdb",[Qg]:"fire-data-connect",[Xg]:"fire-rtdb-compat",[Jg]:"fire-fn",[Zg]:"fire-fn-compat",[e_]:"fire-iid",[t_]:"fire-iid-compat",[n_]:"fire-fcm",[i_]:"fire-fcm-compat",[r_]:"fire-perf",[s_]:"fire-perf-compat",[o_]:"fire-rc",[a_]:"fire-rc-compat",[l_]:"fire-gcs",[c_]:"fire-gcs-compat",[u_]:"fire-fst",[h_]:"fire-fst-compat",[f_]:"fire-vertex","fire-js":"fire-js",[d_]:"fire-js-all"};/**
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
 */const Rr=new Map,g_=new Map,wo=new Map;function nc(t,e){try{t.container.addComponent(e)}catch(n){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Or(t){const e=t.name;if(wo.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;wo.set(e,t);for(const n of Rr.values())nc(n,t);for(const n of g_.values())nc(n,t);return!0}function __(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function v_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const y_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Rt=new mf("app","Firebase",y_);/**
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
 */class b_{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const w_=p_;function ba(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:bo,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw Rt.create("bad-app-name",{appName:String(r)});if(n||(n=hf()),!n)throw Rt.create("no-options");const s=Rr.get(r);if(s){if(Pr(n,s.options)&&Pr(i,s.config))return s;throw Rt.create("duplicate-app",{appName:r})}const o=new xg(r);for(const l of wo.values())o.addComponent(l);const a=new b_(n,i,o);return Rr.set(r,a),a}function C_(t=bo){const e=Rr.get(t);if(!e&&t===bo&&hf())return ba();if(!e)throw Rt.create("no-app",{appName:t});return e}function Sn(t,e,n){var o;let i=(o=m_[t])!=null?o:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(a.join(" "));return}Or(new Ci(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const E_="firebase-heartbeat-database",x_=1,Ei="firebase-heartbeat-store";let $s=null;function bf(){return $s||($s=Fg(E_,x_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ei)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),$s}async function I_(t){try{const n=(await bf()).transaction(Ei),i=await n.objectStore(Ei).get(wf(t));return await n.done,i}catch(e){if(e instanceof Bi)_t.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(n.message)}}}async function ic(t,e){try{const i=(await bf()).transaction(Ei,"readwrite");await i.objectStore(Ei).put(e,wf(t)),await i.done}catch(n){if(n instanceof Bi)_t.warn(n.message);else{const i=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_t.warn(i.message)}}}function wf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const S_=1024,T_=30;class A_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new N_(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>T_){const o=P_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){_t.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rc(),{heartbeatsToSend:i,unsentEntries:r}=k_(this._heartbeatsCache.heartbeats),s=kr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return _t.warn(n),""}}}function rc(){return new Date().toISOString().substring(0,10)}function k_(t,e=S_){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),sc(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),sc(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class N_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fg()?hg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await I_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const r=await this.read();return ic(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!=null?i:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const r=await this.read();return ic(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!=null?i:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sc(t){return kr(JSON.stringify({version:2,heartbeats:t})).length}function P_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function R_(t){Or(new Ci("platform-logger",e=>new zg(e),"PRIVATE")),Or(new Ci("heartbeat",e=>new A_(e),"PRIVATE")),Sn(yo,tc,t),Sn(yo,tc,"esm2020"),Sn("fire-js","")}R_("");var O_="firebase",M_="12.10.0";/**
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
 */Sn(O_,M_,"app");const oc="@firebase/database",ac="1.1.1";/**
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
 */let Cf="";function D_(t){Cf=t}/**
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
 */class L_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:wi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class F_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ef=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new L_(e)}}catch{}return new F_},Xt=Ef("localStorage"),Co=Ef("sessionStorage");/**
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
 */const Tn=new _f("@firebase/database"),B_=function(){let t=1;return function(){return t++}}(),xf=function(t){const e=bg(t),n=new yg;n.update(e);const i=n.digest();return ga.encodeByteArray(i)},Hi=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Hi.apply(null,i):typeof i=="object"?e+=de(i):e+=i,e+=" "}return e};let rn=null,lc=!0;const H_=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Tn.logLevel=ee.VERBOSE,rn=Tn.log.bind(Tn),e&&Co.set("logging_enabled",!0)):typeof t=="function"?rn=t:(rn=null,Co.remove("logging_enabled"))},xe=function(...t){if(lc===!0&&(lc=!1,rn===null&&Co.get("logging_enabled")===!0&&H_(!0)),rn){const e=Hi.apply(null,t);rn(e)}},zi=function(t){return function(...e){xe(t,...e)}},Eo=function(...t){const e="FIREBASE INTERNAL ERROR: "+Hi(...t);Tn.error(e)},vt=function(...t){const e=`FIREBASE FATAL ERROR: ${Hi(...t)}`;throw Tn.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+Hi(...t);Tn.warn(e)},z_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},If=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ln="[MIN_NAME]",an="[MAX_NAME]",Vn=function(t,e){if(t===e)return 0;if(t===Ln||e===an)return-1;if(e===Ln||t===an)return 1;{const n=cc(t),i=cc(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},U_=function(t,e){return t===e?0:t<e?-1:1},Jn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},wa=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=de(e[i]),n+=":",n+=wa(t[e[i]]);return n+="}",n},Sf=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Tf=function(t){E(!If(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},W_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},j_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function V_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Y_=new RegExp("^-?(0*)\\d{1,10}$"),q_=-2147483648,K_=2147483647,cc=function(t){if(Y_.test(t)){const e=Number(t);if(e>=q_&&e<=K_)return e}return null},Yn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},G_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ci=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Q_{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,v_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class X_{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class An{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}An.OWNER="owner";/**
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
 */const Ca="5",Af="v",kf="s",Nf="r",Pf="f",Rf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Of="ls",Mf="p",xo="ac",Df="websocket",Lf="long_polling";/**
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
 */class Ff{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function J_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Bf(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let i;if(e===Df)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Lf)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);J_(t)&&(n.ns=t.namespace);const r=[];return Fe(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class Z_{constructor(){this.counters_={}}incrementCounter(e,n=1){Et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Qm(this.counters_)}}/**
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
 */const Us={},Ws={};function Ea(t){const e=t.toString();return Us[e]||(Us[e]=new Z_),Us[e]}function ev(t,e){const n=t.toString();return Ws[n]||(Ws[n]=e()),Ws[n]}/**
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
 */class tv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Yn(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const uc="start",nv="close",iv="pLPCommand",rv="pRTLPCB",Hf="id",zf="pw",$f="ser",sv="cb",ov="seg",av="ts",lv="d",cv="dframe",Uf=1870,Wf=30,uv=Uf-Wf,fv=25e3,hv=3e4;class vn{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zi(e),this.stats_=Ea(n),this.urlFn=l=>(this.appCheckToken&&(l[xo]=this.appCheckToken),Bf(n,Lf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hv)),$_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xa((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===uc)this.id=a,this.password=l;else if(o===nv)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[uc]="t",i[$f]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[sv]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Af]=Ca,this.transportSessionId&&(i[kf]=this.transportSessionId),this.lastSessionId&&(i[Of]=this.lastSessionId),this.applicationId&&(i[Mf]=this.applicationId),this.appCheckToken&&(i[xo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Rf.test(location.hostname)&&(i[Nf]=Pf);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vn.forceAllow_=!0}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){return vn.forceAllow_?!0:!vn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!W_()&&!j_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=cf(n),r=Sf(i,uv);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[cv]="t",i[Hf]=e,i[zf]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xa{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=B_(),window[iv+this.uniqueCallbackIdentifier]=e,window[rv+this.uniqueCallbackIdentifier]=n,this.myIFrame=xa.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){xe("frame writing exception"),a.stack&&xe(a.stack),xe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Hf]=this.myID,e[zf]=this.myPW,e[$f]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wf+i.length<=Uf;){const o=this.pendingSegs.shift();i=i+"&"+ov+r+"="+o.seg+"&"+av+r+"="+o.ts+"&"+lv+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(fv)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const dv=16384,pv=45e3;let Mr=null;typeof MozWebSocket<"u"?Mr=MozWebSocket:typeof WebSocket<"u"&&(Mr=WebSocket);class Ke{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zi(this.connId),this.stats_=Ea(n),this.connURL=Ke.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[Af]=Ca,typeof location<"u"&&location.hostname&&Rf.test(location.hostname)&&(o[Nf]=Pf),n&&(o[kf]=n),i&&(o[Of]=i),r&&(o[xo]=r),s&&(o[Mf]=s),Bf(e,Df,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xt.set("previous_websocket_failure",!0);try{let i;pf(),this.mySock=new Mr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Mr!==null&&!Ke.forceDisallow_}static previouslyFailed(){return Xt.isInMemoryStorage||Xt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=wi(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Sf(n,dv);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pv))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
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
 */class xi{static get ALL_TRANSPORTS(){return[vn,Ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ke&&Ke.isAvailable();let i=n&&!Ke.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ke];else{const r=this.transports_=[];for(const s of xi.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);xi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xi.globalTransportInitialized_=!1;/**
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
 */const mv=6e4,gv=5e3,_v=10*1024,vv=100*1024,js="t",fc="d",yv="s",hc="r",bv="e",dc="o",pc="a",mc="n",gc="p",wv="h";class Cv{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zi("c:"+this.id+":"),this.transportManager_=new xi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ci(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vv?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_v?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(js in e){const n=e[js];n===pc?this.upgradeIfSecondaryHealthy_():n===hc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Jn("t",e),i=Jn("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Jn("t",e),i=Jn("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Jn(js,e);if(fc in e){const i=e[fc];if(n===wv){const r={...i};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===mc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yv?this.onConnectionShutdown_(i):n===hc?this.onReset_(i):n===bv?Eo("Server Error: "+i):n===dc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Eo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ca!==i&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ci(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mv))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ci(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gv))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class jf{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Vf{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Dr extends Vf{static getInstance(){return new Dr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!df()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _c=32,vc=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function q(){return new X("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Lt(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function Yf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ev(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Kf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function pe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof X)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new X(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Pe(t,e){const n=V(t),i=V(e);if(n===null)return e;if(n===i)return Pe(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Gf(t,e){if(Lt(t)!==Lt(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Lt(t)>Lt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class xv{constructor(e,n){this.errorPrefix_=n,this.parts_=qf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ds(this.parts_[i]);Qf(this)}}function Iv(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ds(e),Qf(t)}function Sv(t){const e=t.parts_.pop();t.byteLength_-=ds(e),t.parts_.length>0&&(t.byteLength_-=1)}function Qf(t){if(t.byteLength_>vc)throw new Error(t.errorPrefix_+"has a key path longer than "+vc+" bytes ("+t.byteLength_+").");if(t.parts_.length>_c)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_c+") or object contains a cycle "+qt(t))}function qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ia extends Vf{static getInstance(){return new Ia}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Zn=1e3,Tv=60*5*1e3,yc=30*1e3,Av=1.3,kv=3e4,Nv="server_kill",bc=3;class gt extends jf{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=gt.nextPersistentConnectionId_++,this.log_=zi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zn,this.maxReconnectDelay_=Tv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!pf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ia.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(de(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new hs,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;gt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Et(e,"w")){const i=Dn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_g(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gg(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Eo("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kv&&(this.reconnectDelay_=Zn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Av)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+gt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new Cv(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,m=>{De(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Nv)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&De(f),l())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ql(this.interruptReasons_)&&(this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>wa(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new X(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bc&&(this.reconnectDelay_=yc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Cf.replace(/\./g,"-")]=1,df()?e["framework.cordova"]=1:ug()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dr.getInstance().currentlyOnline();return Ql(this.interruptReasons_)&&e}}gt.nextPersistentConnectionId_=0;gt.nextConnectionId_=0;/**
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
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
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
 */class ps{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new U(Ln,e),r=new U(Ln,n);return this.compare(i,r)!==0}minPost(){return U.MIN}}/**
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
 */let rr;class Xf extends ps{static get __EMPTY_NODE(){return rr}static set __EMPTY_NODE(e){rr=e}compare(e,n){return Vn(e.name,n.name)}isDefinedOn(e){throw Wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(an,rr)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,rr)}toString(){return".key"}}const kn=new Xf;/**
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
 */class sr{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:ve.RED,this.left=r!=null?r:Me.EMPTY_NODE,this.right=s!=null?s:Me.EMPTY_NODE}copy(e,n,i,r,s){return new ve(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class Pv{copy(e,n,i,r,s){return this}insert(e,n,i){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Me{constructor(e,n=Me.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Me(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new sr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new sr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new sr(this.root_,null,this.comparator_,!0,e)}}Me.EMPTY_NODE=new Pv;/**
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
 */function Rv(t,e){return Vn(t.name,e.name)}function Sa(t,e){return Vn(t,e)}/**
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
 */let Io;function Ov(t){Io=t}const Jf=function(t){return typeof t=="number"?"number:"+Tf(t):"string:"+t},Zf=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Et(e,".sv"),"Priority must be a string or number.")}else E(t===Io||t.isEmpty(),"priority of unexpected type.");E(t===Io||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wc;class _e{static set __childrenNodeConstructor(e){wc=e}static get __childrenNodeConstructor(){return wc}constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zf(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:V(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=V(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(E(i!==".priority"||Lt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Tf(this.value_):e+=this.value_,this.lazyHash_=xf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=_e.VALUE_TYPE_ORDER.indexOf(n),s=_e.VALUE_TYPE_ORDER.indexOf(i);return E(r>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let eh,th;function Mv(t){eh=t}function Dv(t){th=t}class Lv extends ps{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Vn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(an,new _e("[PRIORITY-POST]",th))}makePost(e,n){const i=eh(e);return new U(n,new _e("[PRIORITY-POST]",i))}toString(){return".priority"}}const ce=new Lv;/**
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
 */const Fv=Math.log(2);class Bv{constructor(e){const n=s=>parseInt(Math.log(s)/Fv,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Lr=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let f,h;if(u===0)return null;if(u===1)return f=t[l],h=n?n(f):f,new ve(h,f.node,ve.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=r(l,m),b=r(m+1,c);return f=t[m],h=n?n(f):f,new ve(h,f.node,ve.BLACK,_,b)}},s=function(l){let c=null,u=null,f=t.length;const h=function(_,b){const O=f-_,I=f;f-=_;const S=r(O+1,I),L=t[O],N=n?n(L):L;m(new ve(N,L.node,b,null,S))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const b=l.nextBitIsOne(),O=Math.pow(2,l.count-(_+1));b?h(O,ve.BLACK):(h(O,ve.BLACK),h(O,ve.RED))}return u},o=new Bv(t.length),a=s(o);return new Me(i||e,a)};/**
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
 */let Vs;const gn={};class pt{static get Default(){return E(gn&&ce,"ChildrenNode.ts has not been loaded"),Vs=Vs||new pt({".priority":gn},{".priority":ce}),Vs}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Dn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Me?n:null}hasIndex(e){return Et(this.indexSet_,e.toString())}addIndex(e,n){E(e!==kn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Lr(i,e.getCompare()):a=gn;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new pt(u,c)}addToIndexes(e,n){const i=Nr(this.indexes_,(r,s)=>{const o=Dn(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),r===gn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Lr(a,o.getCompare())}else return gn;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new pt(i,this.indexSet_)}removeFromIndexes(e,n){const i=Nr(this.indexes_,r=>{if(r===gn)return r;{const s=n.get(e.name);return s?r.remove(new U(e.name,s)):r}});return new pt(i,this.indexSet_)}}/**
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
 */let ei;class F{static get EMPTY_NODE(){return ei||(ei=new F(new Me(Sa),null,pt.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Zf(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ei}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ei:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new U(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?ei:this.priorityNode_;return new F(r,o,s)}}updateChild(e,n){const i=V(e);if(i===null)return n;{E(V(e)!==".priority"||Lt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(te(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(ce,(o,a)=>{n[o]=a.val(e),i++,s&&F.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jf(this.getPriority().val())+":"),this.forEachChild(ce,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":xf(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,U.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$i?-1:0}withIndex(e){if(e===kn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===kn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ce),r=n.getIterator(ce);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===kn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Hv extends F{constructor(){super(new Me(Sa),F.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const $i=new Hv;Object.defineProperties(U,{MIN:{value:new U(Ln,F.EMPTY_NODE)},MAX:{value:new U(an,$i)}});Xf.__EMPTY_NODE=F.EMPTY_NODE;_e.__childrenNodeConstructor=F;Ov($i);Dv($i);/**
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
 */const zv=!0;function ye(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,ye(e))}if(!(t instanceof Array)&&zv){const n=[];let i=!1;if(Fe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ye(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new U(o,l)))}}),n.length===0)return F.EMPTY_NODE;const s=Lr(n,Rv,o=>o.name,Sa);if(i){const o=Lr(n,ce.getCompare());return new F(s,ye(e),new pt({".priority":o},{".priority":ce}))}else return new F(s,ye(e),pt.Default)}else{let n=F.EMPTY_NODE;return Fe(t,(i,r)=>{if(Et(t,i)&&i.substring(0,1)!=="."){const s=ye(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(ye(e))}}Mv(ye);/**
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
 */class $v extends ps{constructor(e){super(),this.indexPath_=e,E(!W(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Vn(e.name,n.name):s}makePost(e,n){const i=ye(e),r=F.EMPTY_NODE.updateChild(this.indexPath_,i);return new U(n,r)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,$i);return new U(an,e)}toString(){return qf(this.indexPath_,0).join("/")}}/**
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
 */class Uv extends ps{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Vn(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const i=ye(e);return new U(n,i)}toString(){return".value"}}const Wv=new Uv;/**
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
 */function nh(t){return{type:"value",snapshotNode:t}}function Fn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ii(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Si(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ta{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Ii(n,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Fn(n,i)):o.trackChildChange(Si(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ce,(r,s)=>{n.hasChild(r)||i.trackChildChange(Ii(r,s))}),n.isLeafNode()||n.forEachChild(ce,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(Si(r,s,o))}else i.trackChildChange(Fn(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ti{constructor(e){this.indexedFilter_=new Ta(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ti.getStartPost_(e),this.endPost_=Ti.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,r,s,o){return this.matches(new U(n,i))||(i=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=F.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(ce,(o,a)=>{s.matches(new U(o,a))||(r=r.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Vv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ti(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new U(n,i))||(i=F.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,m)=>f(m,h)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const l=new U(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let h=r.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!i.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Si(n,i,f)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(Ii(n,f));const b=a.updateImmediateChild(n,F.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Fn(h.name,h.node)),b.updateImmediateChild(h.name,h.node)):b}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Ii(c.name,c.node)),s.trackChildChange(Fn(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,F.EMPTY_NODE)):e}}/**
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
 */class Aa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ln}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:an}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new Aa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Yv(t){return t.loadsAllData()?new Ta(t.getIndex()):t.hasLimit()?new Vv(t):new Ti(t)}function Cc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ce?n="$priority":t.index_===Wv?n="$value":t.index_===kn?n="$key":(E(t.index_ instanceof $v,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=de(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+de(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=de(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+de(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ec(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
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
 */class Fr extends jf{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=zi("p:rest:"),this.listens_={}}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Fr.getListenId_(e,i),a={};this.listens_[o]=a;const l=Cc(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,i),Dn(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,n){const i=Fr.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Cc(e._queryParams),i=e._path.toString(),r=new hs;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vg(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=wi(a.responseText)}catch{De("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class qv{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Br(){return{value:null,children:new Map}}function ih(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=V(e);t.children.has(i)||t.children.set(i,Br());const r=t.children.get(i);e=te(e),ih(r,e,n)}}function So(t,e,n){t.value!==null?n(e,t.value):Kv(t,(i,r)=>{const s=new X(e.toString()+"/"+i);So(r,s,n)})}function Kv(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Gv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Fe(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const xc=10*1e3,Qv=30*1e3,Xv=5*60*1e3;class Jv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Gv(e);const i=xc+(Qv-xc)*Math.random();ci(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Fe(e,(r,s)=>{s>0&&Et(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),ci(this.reportStats_.bind(this),Math.floor(Math.random()*2*Xv))}}/**
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
 */var Je;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Je||(Je={}));function rh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ka(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Na(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Hr{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Je.ACK_USER_WRITE,this.source=rh()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new Hr(q(),n,this.revert)}}else return E(V(this.path)===e,"operationForChild called for unrelated child."),new Hr(te(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ai{constructor(e,n){this.source=e,this.path=n,this.type=Je.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new Ai(this.source,q()):new Ai(this.source,te(this.path))}}/**
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
 */class ln{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Je.OVERWRITE}operationForChild(e){return W(this.path)?new ln(this.source,q(),this.snap.getImmediateChild(e)):new ln(this.source,te(this.path),this.snap)}}/**
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
 */class ki{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Je.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new ln(this.source,q(),n.value):new ki(this.source,q(),n)}else return E(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ki(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ft{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Zv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function e1(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(jv(o.childName,o.snapshotNode))}),ti(t,r,"child_removed",e,i,n),ti(t,r,"child_added",e,i,n),ti(t,r,"child_moved",s,i,n),ti(t,r,"child_changed",e,i,n),ti(t,r,"value",e,i,n),r}function ti(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>n1(t,a,l)),o.forEach(a=>{const l=t1(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function t1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function n1(t,e,n){if(e.childName==null||n.childName==null)throw Wn("Should only compare child_ events.");const i=new U(e.childName,e.snapshotNode),r=new U(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function ms(t,e){return{eventCache:t,serverCache:e}}function ui(t,e,n,i){return ms(new Ft(e,n,i),t.serverCache)}function sh(t,e,n,i){return ms(t.eventCache,new Ft(e,n,i))}function zr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ys;const i1=()=>(Ys||(Ys=new Me(U_)),Ys);class ne{static fromObject(e){let n=new ne(null);return Fe(e,(i,r)=>{n=n.set(new X(i),r)}),n}constructor(e,n=i1()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:q(),value:this.value};if(W(e))return null;{const i=V(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(te(e),n);return s!=null?{path:pe(new X(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=V(e),i=this.children.get(n);return i!==null?i.subtree(te(e)):new ne(null)}}set(e,n){if(W(e))return new ne(n,this.children);{const i=V(e),s=(this.children.get(i)||new ne(null)).set(te(e),n),o=this.children.insert(i,s);return new ne(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=V(e),i=this.children.get(n);if(i){const r=i.remove(te(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new ne(null):new ne(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=V(e),i=this.children.get(n);return i?i.get(te(e)):null}}setTree(e,n){if(W(e))return n;{const i=V(e),s=(this.children.get(i)||new ne(null)).setTree(te(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ne(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(pe(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,q(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(W(e))return null;{const s=V(e),o=this.children.get(s);return o?o.findOnPath_(te(e),pe(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,q(),n)}foreachOnPath_(e,n,i){if(W(e))return this;{this.value&&i(n,this.value);const r=V(e),s=this.children.get(r);return s?s.foreachOnPath_(te(e),pe(n,r),i):new ne(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(pe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class nt{constructor(e){this.writeTree_=e}static empty(){return new nt(new ne(null))}}function fi(t,e,n){if(W(e))return new nt(new ne(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Pe(r,e);return s=s.updateChild(o,n),new nt(t.writeTree_.set(r,s))}else{const r=new ne(n),s=t.writeTree_.setTree(e,r);return new nt(s)}}}function Ic(t,e,n){let i=t;return Fe(n,(r,s)=>{i=fi(i,pe(e,r),s)}),i}function Sc(t,e){if(W(e))return nt.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new nt(n)}}function To(t,e){return hn(t,e)!=null}function hn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pe(n.path,e)):null}function Tc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(i,r)=>{e.push(new U(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new U(i,r.value))}),e}function Ot(t,e){if(W(e))return t;{const n=hn(t,e);return n!=null?new nt(new ne(n)):new nt(t.writeTree_.subtree(e))}}function Ao(t){return t.writeTree_.isEmpty()}function Bn(t,e){return oh(q(),t.writeTree_,e)}function oh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=oh(pe(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(pe(t,".priority"),i)),n}}/**
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
 */function gs(t,e){return uh(e,t)}function r1(t,e,n,i,r){E(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=fi(t.visibleWrites,e,n)),t.lastWriteId=i}function s1(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function o1(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&a1(a,i.path)?r=!1:Xe(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return l1(t),!0;if(i.snap)t.visibleWrites=Sc(t.visibleWrites,i.path);else{const a=i.children;Fe(a,l=>{t.visibleWrites=Sc(t.visibleWrites,pe(i.path,l))})}return!0}else return!1}function a1(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(pe(t.path,n),e))return!0;return!1}function l1(t){t.visibleWrites=ah(t.allWrites,c1,q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function c1(t){return t.visible}function ah(t,e,n){let i=nt.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Xe(n,o)?(a=Pe(n,o),i=fi(i,a,s.snap)):Xe(o,n)&&(a=Pe(o,n),i=fi(i,q(),s.snap.getChild(a)));else if(s.children){if(Xe(n,o))a=Pe(n,o),i=Ic(i,a,s.children);else if(Xe(o,n))if(a=Pe(o,n),W(a))i=Ic(i,q(),s.children);else{const l=Dn(s.children,V(a));if(l){const c=l.getChild(te(a));i=fi(i,q(),c)}}}else throw Wn("WriteRecord should have .snap or .children")}}return i}function lh(t,e,n,i,r){if(!i&&!r){const s=hn(t.visibleWrites,e);if(s!=null)return s;{const o=Ot(t.visibleWrites,e);if(Ao(o))return n;if(n==null&&!To(o,q()))return null;{const a=n||F.EMPTY_NODE;return Bn(o,a)}}}else{const s=Ot(t.visibleWrites,e);if(!r&&Ao(s))return n;if(!r&&n==null&&!To(s,q()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Xe(c.path,e)||Xe(e,c.path))},a=ah(t.allWrites,o,e),l=n||F.EMPTY_NODE;return Bn(a,l)}}}function u1(t,e,n){let i=F.EMPTY_NODE;const r=hn(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ce,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Ot(t.visibleWrites,e);return n.forEachChild(ce,(o,a)=>{const l=Bn(Ot(s,new X(o)),a);i=i.updateImmediateChild(o,l)}),Tc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Ot(t.visibleWrites,e);return Tc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function f1(t,e,n,i,r){E(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=pe(e,n);if(To(t.visibleWrites,s))return null;{const o=Ot(t.visibleWrites,s);return Ao(o)?r.getChild(n):Bn(o,r.getChild(n))}}function h1(t,e,n,i){const r=pe(e,n),s=hn(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Ot(t.visibleWrites,r);return Bn(o,i.getNode().getImmediateChild(n))}else return null}function d1(t,e){return hn(t.visibleWrites,e)}function p1(t,e,n,i,r,s,o){let a;const l=Ot(t.visibleWrites,e),c=hn(l,q());if(c!=null)a=c;else if(n!=null)a=Bn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=h.getNext();for(;m&&u.length<r;)f(m,i)!==0&&u.push(m),m=h.getNext();return u}else return[]}function m1(){return{visibleWrites:nt.empty(),allWrites:[],lastWriteId:-1}}function $r(t,e,n,i){return lh(t.writeTree,t.treePath,e,n,i)}function Pa(t,e){return u1(t.writeTree,t.treePath,e)}function Ac(t,e,n,i){return f1(t.writeTree,t.treePath,e,n,i)}function Ur(t,e){return d1(t.writeTree,pe(t.treePath,e))}function g1(t,e,n,i,r,s){return p1(t.writeTree,t.treePath,e,n,i,r,s)}function Ra(t,e,n){return h1(t.writeTree,t.treePath,e,n)}function ch(t,e){return uh(pe(t.treePath,e),t.writeTree)}function uh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class _1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Si(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,Ii(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Fn(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Si(i,e.snapshotNode,r.oldSnap));else throw Wn("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class v1{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const fh=new v1;class Oa{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ft(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ra(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cn(this.viewCache_),s=g1(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function y1(t){return{filter:t}}function b1(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function w1(t,e,n,i,r){const s=new _1;let o,a;if(n.type===Je.OVERWRITE){const c=n;c.source.fromUser?o=ko(t,e,c.path,c.snap,i,r,s):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=Wr(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Je.MERGE){const c=n;c.source.fromUser?o=E1(t,e,c.path,c.children,i,r,s):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=No(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Je.ACK_USER_WRITE){const c=n;c.revert?o=S1(t,e,c.path,i,r,s):o=x1(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Je.LISTEN_COMPLETE)o=I1(t,e,n.path,i,s);else throw Wn("Unknown operation type: "+n.type);const l=s.getChanges();return C1(e,o,l),{viewCache:o,changes:l}}function C1(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=zr(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(nh(zr(e)))}}function hh(t,e,n,i,r,s){const o=e.eventCache;if(Ur(i,n)!=null)return e;{let a,l;if(W(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=cn(e),u=c instanceof F?c:F.EMPTY_NODE,f=Pa(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=$r(i,cn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=V(n);if(c===".priority"){E(Lt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Ac(i,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=te(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Ac(i,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(u,h):f=o.getNode().getImmediateChild(c)}else f=Ra(i,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,r,s):a=o.getNode()}}return ui(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Wr(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),m,null)}else{const m=V(n);if(!l.isCompleteForPath(n)&&Lt(n)>1)return e;const _=te(n),O=l.getNode().getImmediateChild(m).updateChild(_,i);m===".priority"?c=u.updatePriority(l.getNode(),O):c=u.updateChild(l.getNode(),m,O,_,fh,null)}const f=sh(e,c,l.isFullyInitialized()||W(n),u.filtersNodes()),h=new Oa(r,f,s);return hh(t,f,n,r,h,a)}function ko(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new Oa(r,e,s);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ui(e,c,!0,t.filter.filtersNodes());else{const f=V(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ui(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=te(n),m=a.getNode().getImmediateChild(f);let _;if(W(h))_=i;else{const b=u.getCompleteChild(f);b!=null?Yf(h)===".priority"&&b.getChild(Kf(h)).isEmpty()?_=b:_=b.updateChild(h,i):_=F.EMPTY_NODE}if(m.equals(_))l=e;else{const b=t.filter.updateChild(a.getNode(),f,_,h,u,o);l=ui(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function kc(t,e){return t.eventCache.isCompleteForChild(e)}function E1(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=pe(n,l);kc(e,V(u))&&(a=ko(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=pe(n,l);kc(e,V(u))||(a=ko(t,a,u,c,r,s,o))}),a}function Nc(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function No(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;W(n)?c=i:c=new ne(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),_=Nc(t,m,h);l=Wr(t,l,new X(f),_,r,s,o,a)}}),c.children.inorderTraversal((f,h)=>{const m=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!m){const _=e.serverCache.getNode().getImmediateChild(f),b=Nc(t,_,h);l=Wr(t,l,new X(f),b,r,s,o,a)}}),l}function x1(t,e,n,i,r,s,o){if(Ur(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Wr(t,e,n,l.getNode().getChild(n),r,s,a,o);if(W(n)){let c=new ne(null);return l.getNode().forEachChild(kn,(u,f)=>{c=c.set(new X(u),f)}),No(t,e,n,c,r,s,a,o)}else return e}else{let c=new ne(null);return i.foreach((u,f)=>{const h=pe(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),No(t,e,n,c,r,s,a,o)}}function I1(t,e,n,i,r){const s=e.serverCache,o=sh(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return hh(t,o,n,i,fh,r)}function S1(t,e,n,i,r,s){let o;if(Ur(i,n)!=null)return e;{const a=new Oa(i,e,r),l=e.eventCache.getNode();let c;if(W(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=$r(i,cn(e));else{const f=e.serverCache.getNode();E(f instanceof F,"serverChildren would be complete if leaf node"),u=Pa(i,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=V(n);let f=Ra(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,te(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,F.EMPTY_NODE,te(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$r(i,cn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ur(i,q())!=null,ui(e,c,o,t.filter.filtersNodes())}}/**
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
 */class T1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Ta(i.getIndex()),s=Yv(i);this.processor_=y1(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(F.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(F.EMPTY_NODE,a.getNode(),null),u=new Ft(l,o.isFullyInitialized(),r.filtersNodes()),f=new Ft(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ms(f,u),this.eventGenerator_=new Zv(this.query_)}get query(){return this.query_}}function A1(t){return t.viewCache_.serverCache.getNode()}function k1(t){return zr(t.viewCache_)}function N1(t,e){const n=cn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function Pc(t){return t.eventRegistrations_.length===0}function P1(t,e){t.eventRegistrations_.push(e)}function Rc(t,e,n){const i=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function Oc(t,e,n,i){e.type===Je.MERGE&&e.source.queryId!==null&&(E(cn(t.viewCache_),"We should always have a full cache before handling merges"),E(zr(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=w1(t.processor_,r,e,n,i);return b1(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,dh(t,s.changes,s.viewCache.eventCache.getNode(),null)}function R1(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ce,(s,o)=>{i.push(Fn(s,o))}),n.isFullyInitialized()&&i.push(nh(n.getNode())),dh(t,i,n.getNode(),e)}function dh(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return e1(t.eventGenerator_,e,n,r)}/**
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
 */let jr;class ph{constructor(){this.views=new Map}}function O1(t){E(!jr,"__referenceConstructor has already been defined"),jr=t}function M1(){return E(jr,"Reference.ts has not been loaded"),jr}function D1(t){return t.views.size===0}function Ma(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return E(s!=null,"SyncTree gave us an op for an invalid query."),Oc(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Oc(o,e,n,i));return s}}function mh(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=$r(n,r?i:null),l=!1;a?l=!0:i instanceof F?(a=Pa(n,i),l=!1):(a=F.EMPTY_NODE,l=!1);const c=ms(new Ft(a,l,!1),new Ft(i,r,!1));return new T1(e,c)}return o}function L1(t,e,n,i,r,s){const o=mh(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),P1(o,n),R1(o,n)}function F1(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Bt(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Rc(c,n,i)),Pc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Rc(l,n,i)),Pc(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Bt(t)&&s.push(new(M1())(e._repo,e._path)),{removed:s,events:o}}function gh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mt(t,e){let n=null;for(const i of t.views.values())n=n||N1(i,e);return n}function _h(t,e){if(e._queryParams.loadsAllData())return _s(t);{const i=e._queryIdentifier;return t.views.get(i)}}function vh(t,e){return _h(t,e)!=null}function Bt(t){return _s(t)!=null}function _s(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Vr;function B1(t){E(!Vr,"__referenceConstructor has already been defined"),Vr=t}function H1(){return E(Vr,"Reference.ts has not been loaded"),Vr}let z1=1;class Mc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=m1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yh(t,e,n,i,r){return r1(t.pendingWriteTree_,e,n,i,r),r?Wi(t,new ln(rh(),e,n)):[]}function Jt(t,e,n=!1){const i=s1(t.pendingWriteTree_,e);if(o1(t.pendingWriteTree_,e)){let s=new ne(null);return i.snap!=null?s=s.set(q(),!0):Fe(i.children,o=>{s=s.set(new X(o),!0)}),Wi(t,new Hr(i.path,s,n))}else return[]}function Ui(t,e,n){return Wi(t,new ln(ka(),e,n))}function $1(t,e,n){const i=ne.fromObject(n);return Wi(t,new ki(ka(),e,i))}function U1(t,e){return Wi(t,new Ai(ka(),e))}function W1(t,e,n){const i=La(t,n);if(i){const r=Fa(i),s=r.path,o=r.queryId,a=Pe(s,e),l=new Ai(Na(o),a);return Ba(t,s,l)}else return[]}function bh(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||vh(o,e))){const l=F1(o,e,n,i);D1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(h,m)=>Bt(m));if(u&&!f){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=q1(h);for(let _=0;_<m.length;++_){const b=m[_],O=b.query,I=xh(t,b);t.listenProvider_.startListening(hi(O),Ni(t,O),I.hashFn,I.onComplete)}}}!f&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(hi(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(vs(h));t.listenProvider_.stopListening(hi(h),m)}))}K1(t,c)}return a}function wh(t,e,n,i){const r=La(t,i);if(r!=null){const s=Fa(r),o=s.path,a=s.queryId,l=Pe(o,e),c=new ln(Na(a),l,n);return Ba(t,o,c)}else return[]}function j1(t,e,n,i){const r=La(t,i);if(r){const s=Fa(r),o=s.path,a=s.queryId,l=Pe(o,e),c=ne.fromObject(n),u=new ki(Na(a),l,c);return Ba(t,o,u)}else return[]}function V1(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(h,m)=>{const _=Pe(h,r);s=s||Mt(m,_),o=o||Bt(m)});let a=t.syncPointTree_.get(r);a?(o=o||Bt(a),s=s||Mt(a,q())):(a=new ph,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((m,_)=>{const b=Mt(_,q());b&&(s=s.updateImmediateChild(m,b))}));const c=vh(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=vs(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=G1();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=gs(t.pendingWriteTree_,r);let f=L1(a,e,n,u,s,l);if(!c&&!o&&!i){const h=_h(a,e);f=f.concat(Q1(t,e,h))}return f}function Da(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Pe(o,e),c=Mt(a,l);if(c)return c});return lh(r,e,s,n,!0)}function Y1(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=Pe(c,n);i=i||Mt(u,f)});let r=t.syncPointTree_.get(n);r?i=i||Mt(r,q()):(r=new ph,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new Ft(i,!0,!1):null,a=gs(t.pendingWriteTree_,e._path),l=mh(r,e,a,s?o.getNode():F.EMPTY_NODE,s);return k1(l)}function Wi(t,e){return Ch(e,t.syncPointTree_,null,gs(t.pendingWriteTree_,q()))}function Ch(t,e,n,i){if(W(t.path))return Eh(t,e,n,i);{const r=e.get(q());n==null&&r!=null&&(n=Mt(r,q()));let s=[];const o=V(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=ch(i,o);s=s.concat(Ch(a,l,c,u))}return r&&(s=s.concat(Ma(r,t,i,n))),s}}function Eh(t,e,n,i){const r=e.get(q());n==null&&r!=null&&(n=Mt(r,q()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=ch(i,o),u=t.operationForChild(o);u&&(s=s.concat(Eh(u,a,l,c)))}),r&&(s=s.concat(Ma(r,t,i,n))),s}function xh(t,e){const n=e.query,i=Ni(t,n);return{hashFn:()=>(A1(e)||F.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?W1(t,n._path,i):U1(t,n._path);{const s=V_(r,n);return bh(t,n,null,s)}}}}function Ni(t,e){const n=vs(e);return t.queryToTagMap.get(n)}function vs(t){return t._path.toString()+"$"+t._queryIdentifier}function La(t,e){return t.tagToQueryMap.get(e)}function Fa(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function Ba(t,e,n){const i=t.syncPointTree_.get(e);E(i,"Missing sync point for query tag that we're tracking");const r=gs(t.pendingWriteTree_,e);return Ma(i,n,r,null)}function q1(t){return t.fold((e,n,i)=>{if(n&&Bt(n))return[_s(n)];{let r=[];return n&&(r=gh(n)),Fe(i,(s,o)=>{r=r.concat(o)}),r}})}function hi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(H1())(t._repo,t._path):t}function K1(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=vs(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function G1(){return z1++}function Q1(t,e,n){const i=e._path,r=Ni(t,e),s=xh(t,n),o=t.listenProvider_.startListening(hi(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)E(!Bt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!W(c)&&u&&Bt(u))return[_s(u).query];{let h=[];return u&&(h=h.concat(gh(u).map(m=>m.query))),Fe(f,(m,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(hi(u),Ni(t,u))}}return o}/**
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
 */class Ha{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ha(n)}node(){return this.node_}}class za{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new za(this.syncTree_,n)}node(){return Da(this.syncTree_,this.path_)}}const X1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Dc=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return J1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Z1(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},J1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Z1=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&E(!1,"Unexpected increment value: "+i);const r=e.node();if(E(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},ey=function(t,e,n,i){return $a(e,new za(n,t),i)},Ih=function(t,e,n){return $a(t,new Ha(e),n)};function $a(t,e,n){const i=t.getPriority().val(),r=Dc(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Dc(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new _e(a,ye(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new _e(r))),o.forEachChild(ce,(a,l)=>{const c=$a(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Ua{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Wa(t,e){let n=e instanceof X?e:new X(e),i=t,r=V(n);for(;r!==null;){const s=Dn(i.node.children,r)||{children:{},childCount:0};i=new Ua(r,i,s),n=te(n),r=V(n)}return i}function qn(t){return t.node.value}function Sh(t,e){t.node.value=e,Po(t)}function Th(t){return t.node.childCount>0}function ty(t){return qn(t)===void 0&&!Th(t)}function ys(t,e){Fe(t.node.children,(n,i)=>{e(new Ua(n,t,i))})}function Ah(t,e,n,i){n&&!i&&e(t),ys(t,r=>{Ah(r,e,!0,i)}),n&&i&&e(t)}function ny(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ji(t){return new X(t.parent===null?t.name:ji(t.parent)+"/"+t.name)}function Po(t){t.parent!==null&&iy(t.parent,t.name,t)}function iy(t,e,n){const i=ty(n),r=Et(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Po(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Po(t))}/**
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
 */const ry=/[\[\].#$\/\u0000-\u001F\u007F]/,sy=/[\[\].#$\u0000-\u001F\u007F]/,qs=10*1024*1024,kh=function(t){return typeof t=="string"&&t.length!==0&&!ry.test(t)},Nh=function(t){return typeof t=="string"&&t.length!==0&&!sy.test(t)},oy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Nh(t)},ay=function(t,e,n,i){i&&e===void 0||ja(va(t,"value"),e,n)},ja=function(t,e,n){const i=n instanceof X?new xv(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qt(i));if(typeof e=="function")throw new Error(t+"contains a function "+qt(i)+" with contents = "+e.toString());if(If(e))throw new Error(t+"contains "+e.toString()+" "+qt(i));if(typeof e=="string"&&e.length>qs/3&&ds(e)>qs)throw new Error(t+"contains a string greater than "+qs+" utf8 bytes "+qt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Fe(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!kh(o)))throw new Error(t+" contains an invalid key ("+o+") "+qt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Iv(i,o),ja(t,a,i),Sv(i)}),r&&s)throw new Error(t+' contains ".value" child '+qt(i)+" in addition to actual children.")}},Ph=function(t,e,n,i){if(!(i&&n===void 0)&&!Nh(n))throw new Error(va(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ly=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ph(t,e,n,i)},cy=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},uy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!kh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!oy(n))throw new Error(va(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class fy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rh(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Gf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function ut(t,e,n){Rh(t,n),hy(t,i=>Xe(i,e)||Xe(e,i))}function hy(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(dy(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function dy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();rn&&xe("event: "+n.toString()),Yn(i)}}}/**
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
 */const py="repo_interrupt",my=25;class gy{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Br(),this.transactionQueueTree_=new Ua,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _y(t,e,n){if(t.stats_=Ea(t.repoInfo_),t.forceRestClient_||G_())t.server_=new Fr(t.repoInfo_,(i,r,s,o)=>{Lc(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new gt(t.repoInfo_,e,(i,r,s,o)=>{Lc(t,i,r,s,o)},i=>{Fc(t,i)},i=>{yy(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=ev(t.repoInfo_,()=>new Jv(t.stats_,t.server_)),t.infoData_=new qv,t.infoSyncTree_=new Mc({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Ui(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ya(t,"connected",!1),t.serverSyncTree_=new Mc({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);ut(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function vy(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Va(t){return X1({timestamp:vy(t)})}function Lc(t,e,n,i,r){t.dataUpdateCount++;const s=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Nr(n,c=>ye(c));o=j1(t.serverSyncTree_,s,l,r)}else{const l=ye(n);o=wh(t.serverSyncTree_,s,l,r)}else if(i){const l=Nr(n,c=>ye(c));o=$1(t.serverSyncTree_,s,l)}else{const l=ye(n);o=Ui(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ws(t,s)),ut(t.eventQueue_,a,o)}function Fc(t,e){Ya(t,"connected",e),e===!1&&Cy(t)}function yy(t,e){Fe(e,(n,i)=>{Ya(t,n,i)})}function Ya(t,e,n){const i=new X("/.info/"+e),r=ye(n);t.infoData_.updateSnapshot(i,r);const s=Ui(t.infoSyncTree_,i,r);ut(t.eventQueue_,i,s)}function Oh(t){return t.nextWriteId_++}function by(t,e,n){const i=Y1(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const s=ye(r).withIndex(e._queryParams.getIndex());V1(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ui(t.serverSyncTree_,e._path,s);else{const a=Ni(t.serverSyncTree_,e);o=wh(t.serverSyncTree_,e._path,s,a)}return ut(t.eventQueue_,e._path,o),bh(t.serverSyncTree_,e,n,null,!0),s},r=>(bs(t,"get for query "+de(e)+" failed: "+r),Promise.reject(new Error(r))))}function wy(t,e,n,i,r){bs(t,"set",{path:e.toString(),value:n,priority:i});const s=Va(t),o=ye(n,i),a=Da(t.serverSyncTree_,e),l=Ih(o,a,s),c=Oh(t),u=yh(t.serverSyncTree_,e,l,c,!0);Rh(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||De("set at "+e+" failed: "+h);const b=Jt(t.serverSyncTree_,c,!_);ut(t.eventQueue_,e,b),xy(t,r,h,m)});const f=Bh(t,e);ws(t,f),ut(t.eventQueue_,f,[])}function Cy(t){bs(t,"onDisconnectEvents");const e=Va(t),n=Br();So(t.onDisconnect_,q(),(r,s)=>{const o=ey(r,s,t.serverSyncTree_,e);ih(n,r,o)});let i=[];So(n,q(),(r,s)=>{i=i.concat(Ui(t.serverSyncTree_,r,s));const o=Bh(t,r);ws(t,o)}),t.onDisconnect_=Br(),ut(t.eventQueue_,q(),i)}function Ey(t){t.persistentConnection_&&t.persistentConnection_.interrupt(py)}function bs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xe(n,...e)}function xy(t,e,n,i){e&&Yn(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function Mh(t,e,n){return Da(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function qa(t,e=t.transactionQueueTree_){if(e||Cs(t,e),qn(e)){const n=Lh(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&Iy(t,ji(e),n)}else Th(e)&&ys(e,n=>{qa(t,n)})}function Iy(t,e,n){const i=n.map(c=>c.currentWriteId),r=Mh(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Pe(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{bs(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Jt(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Cs(t,Wa(t.transactionQueueTree_,e)),qa(t,t.transactionQueueTree_),ut(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)Yn(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{De("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}ws(t,e)}},o)}function ws(t,e){const n=Dh(t,e),i=ji(n),r=Lh(t,n);return Sy(t,r,i),i}function Sy(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Pe(n,l.path);let u=!1,f;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,r=r.concat(Jt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=my)u=!0,f="maxretry",r=r.concat(Jt(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Mh(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){ja("transaction failed: Data returned ",m,l.path);let _=ye(m);typeof m=="object"&&m!=null&&Et(m,".priority")||(_=_.updatePriority(h.getPriority()));const O=l.currentWriteId,I=Va(t),S=Ih(_,h,I);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=S,l.currentWriteId=Oh(t),o.splice(o.indexOf(O),1),r=r.concat(yh(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),r=r.concat(Jt(t.serverSyncTree_,O,!0))}else u=!0,f="nodata",r=r.concat(Jt(t.serverSyncTree_,l.currentWriteId,!0))}ut(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}Cs(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Yn(i[a]);qa(t,t.transactionQueueTree_)}function Dh(t,e){let n,i=t.transactionQueueTree_;for(n=V(e);n!==null&&qn(i)===void 0;)i=Wa(i,n),e=te(e),n=V(e);return i}function Lh(t,e){const n=[];return Fh(t,e,n),n.sort((i,r)=>i.order-r.order),n}function Fh(t,e,n){const i=qn(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);ys(e,r=>{Fh(t,r,n)})}function Cs(t,e){const n=qn(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Sh(e,n.length>0?n:void 0)}ys(e,i=>{Cs(t,i)})}function Bh(t,e){const n=ji(Dh(t,e)),i=Wa(t.transactionQueueTree_,e);return ny(i,r=>{Ks(t,r)}),Ks(t,i),Ah(i,r=>{Ks(t,r)}),n}function Ks(t,e){const n=qn(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Jt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Sh(e,void 0):n.length=s+1,ut(t.eventQueue_,ji(e),r);for(let o=0;o<i.length;o++)Yn(i[o])}}/**
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
 */function Ty(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function Ay(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bc=function(t,e){const n=ky(t),i=n.namespace;n.domain==="firebase.com"&&vt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||z_();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ff(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new X(n.pathString)}},ky=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(r=Ty(t.substring(u,f)));const h=Ay(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class Ny{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class Py{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ry{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ka{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return W(this._path)?null:Yf(this._path)}get ref(){return new xt(this._repo,this._path)}get _queryIdentifier(){const e=Ec(this._queryParams),n=wa(e);return n==="{}"?"default":n}get _queryObject(){return Ec(this._queryParams)}isEqual(e){if(e=jn(e),!(e instanceof Ka))return!1;const n=this._repo===e._repo,i=Gf(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ev(this._path)}}class xt extends Ka{constructor(e,n){super(e,n,new Aa,!1)}get parent(){const e=Kf(this._path);return e===null?null:new xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pi{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),i=Ri(this.ref,e);return new Pi(this._node.getChild(n),i,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Pi(r,Ri(this.ref,i),ce)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ro(t,e){return t=jn(t),t._checkNotDeleted("ref"),e!==void 0?Ri(t._root,e):t._root}function Ri(t,e){return t=jn(t),V(t._path)===null?ly("child","path",e,!1):Ph("child","path",e,!1),new xt(t._repo,pe(t._path,e))}function Hh(t,e){t=jn(t),cy("set",t._path),ay("set",e,t._path,!1);const n=new hs;return wy(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Hc(t){t=jn(t);const e=new Ry(()=>{}),n=new Ga(e);return by(t._repo,t,n).then(i=>new Pi(i,new xt(t._repo,t._path),t._queryParams.getIndex()))}class Ga{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Ny("value",this,new Pi(e.snapshotNode,new xt(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Py(this,e,n):null}matches(e){return e instanceof Ga?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}O1(xt);B1(xt);/**
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
 */const Oy="FIREBASE_DATABASE_EMULATOR_HOST",Oo={};let My=!1;function Dy(t,e,n,i){const r=e.lastIndexOf(":"),s=e.substring(0,r),o=_a(s);t.repoInfo_=new Ff(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function Ly(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bc(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Oy]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Bc(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new An(An.OWNER):new X_(t.name,t.options,e);uy("Invalid Firebase Database URL",o),W(o.path)||vt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=By(a,t,u,new Q_(t,n));return new Hy(f,t)}function Fy(t,e){const n=Oo[e];(!n||n[t.key]!==t)&&vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ey(t),delete n[t.key]}function By(t,e,n,i){let r=Oo[e.name];r||(r={},Oo[e.name]=r);let s=r[t.toURLString()];return s&&vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new gy(t,My,n,i),r[t.toURLString()]=s,s}class Hy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_y(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xt(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Fy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vt("Cannot call "+e+" on a deleted database.")}}function zh(t=C_(),e){const n=__(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=ig("database");i&&zy(n,...i)}return n}function zy(t,e,n,i={}){t=jn(t),t._checkNotDeleted("useEmulator");const r=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(r===t._repoInternal.repoInfo_.host&&Pr(i,s.repoInfo_.emulatorOptions))return;vt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new An(An.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:sg(i.mockUserToken,t.app.options.projectId);o=new An(a)}_a(e)&&(rg(e),lg("Database",!0)),Dy(s,r,i,o)}/**
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
 */function $y(t){D_(w_),Or(new Ci("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Ly(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Sn(oc,ac,t),Sn(oc,ac,"esm2020")}gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$y();const $h={apiKey:"AIzaSyAafPKtLoc5BfiqN-j9AGJLlkIcEbJE3rw",authDomain:"squash-list.firebaseapp.com",databaseURL:"https://squash-list-default-rtdb.firebaseio.com",projectId:"squash-list",storageBucket:"squash-list.appspot.com",messagingSenderId:"537914321064",appId:"1:537914321064:web:6df5523c5fc9d1c9b83a9d"},Uy={class:"header"},Wy=z("div",{class:"skip"},[z("a",{class:"sr-only sr-only-focusable",href:"#main"}," Skip to content ")],-1),jy=z("div",{class:"logo-wrapper"},[z("img",{src:Ym,class:"logo",alt:"Squashlist logo",width:"172",height:"24"})],-1),Vy={class:"suggest"},Yy=z("span",{class:"tooltip"},"Suggest item",-1),qy={key:0,class:"form-title"},Ky=z("span",null,"Suggest item",-1),Gy=z("span",{class:"sr-only"},"Close",-1),Qy={key:1,class:"error"},Xy=z("div",null,"Unable to submit",-1),Jy={key:2,class:"success"},Zy=z("div",null,"Thanks for making a suggestion!",-1),eb=z("p",null,"Suggest an item to be included in the Squash List",-1),tb=["onSubmit"],nb=z("span",null,[On("Name "),z("span",{class:"required"},"*")],-1),ib=z("span",null,[On("URL "),z("span",{class:"required"},"*")],-1),rb=z("span",null,"Description",-1),sb=["disabled"],ob=z("h1",{class:"sr-only"},"Squash sites, apps, & resources",-1),ab={__name:"Header",setup(t){const e=Ye(null),n=Ye(!1),i=Ye({name:"",url:"",desc:""}),r=Ye(null),s=Ye(!0),o=Ye(!1),a=Ye(!1),l=()=>{n.value=!0,i.value={name:"",url:"",desc:""},s.value=!0,o.value=!1,a.value=!1};In(n,h=>{h&&Lu(()=>r.value.focus())}),In(i,h=>{h.name&&h.url?s.value=!1:s.value=!0},{deep:!0});const c=ba($h),u=zh(c),f=()=>{s.value=!0,Hh(Ro(u,`/suggest/item-${Math.floor(Date.now()*Math.random())}`),sa(i)).then(()=>a.value=!0).catch(()=>o.value=!0)};return as(()=>{let h=0,m=0;const _=()=>{m>h+100&&(n.value=!1)};e.value.addEventListener("touchstart",b=>{h=b.changedTouches[0].screenX}),e.value.addEventListener("touchend",b=>{m=b.changedTouches[0].screenX,_()}),document.addEventListener("keydown",b=>{b.code==="Escape"&&(n.value=!1)})}),(h,m)=>{const _=la("font-awesome-icon");return he(),ke("header",Uy,[Wy,jy,z("div",Vy,[z("button",{onClick:l},[Yy,ue(_,{icon:"fa-solid fa-circle-plus",class:"icon"})]),z("div",null,[n.value?(he(),ke("div",{key:0,class:"form-bg",onClick:m[0]||(m[0]=b=>n.value=!1)})):ai("",!0),z("div",{class:ns(["form",{open:n.value}]),ref_key:"formWrapper",ref:e},[n.value?(he(),ke("h2",qy,[Ky,z("button",{class:"close-icon",onClick:m[1]||(m[1]=b=>n.value=!1)},[ue(_,{icon:"fa-solid fa-xmark"}),Gy])])):ai("",!0),o.value?(he(),ke("div",Qy,[ue(_,{icon:"fa-solid fa-face-frown",class:"icon"}),Xy])):a.value?(he(),ke("div",Jy,[ue(_,{icon:"fa-solid fa-face-smile",class:"icon"}),Zy])):(he(),ke(Ne,{key:3},[n.value?(he(),ke(Ne,{key:0},[eb,z("form",{onSubmit:zm(f,["prevent"])},[z("label",null,[nb,Rs(z("input",{"onUpdate:modelValue":m[2]||(m[2]=b=>i.value.name=b),type:"text",name:"name",required:"",ref_key:"nameInput",ref:r},null,512),[[Fs,i.value.name]])]),z("label",null,[ib,Rs(z("input",{"onUpdate:modelValue":m[3]||(m[3]=b=>i.value.url=b),type:"text",name:"url",required:""},null,512),[[Fs,i.value.url]])]),z("label",null,[rb,Rs(z("input",{"onUpdate:modelValue":m[4]||(m[4]=b=>i.value.desc=b),type:"text",name:"desc"},null,512),[[Fs,i.value.desc]])]),z("button",{type:"submit",disabled:s.value}," Submit ",8,sb)],40,tb)],64)):ai("",!0)],64))],2)])]),ob])}}},Uh=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},lb={},cb={class:"footer"},ub=z("img",{src:"//nuvmo.github.io/media/img/old-dude.jpg",alt:"bancm logo"},null,-1),fb=z("a",{href:"//nuvmo.github.io"},"Nuvmo",-1);function hb(t,e){return he(),ke("footer",cb,[ub,On(" a "),fb,On(" project ")])}const db=Uh(lb,[["render",hb]]);const pb=["href"],mb={class:"desc"},gb={__name:"Item",props:{item:Object},setup(t){Lm(i=>({bda018a2:n.degrees,ef45bcbe:n.position}));const e=Math.random()<.5?"-":"",n={degrees:`${e}${Math.random()/1.5}deg`,position:`${e}${Math.random()*3}px`};return(i,r)=>{const s=la("font-awesome-icon");return he(),ke("a",{href:t.item.url,class:"item"},[z("p",null,[On(xr(t.item.name)+" ",1),t.item.paid?(he(),cs(s,{key:0,icon:"fa-solid fa-money-bills",class:"money-icon",title:"Paid service"})):ai("",!0)]),z("p",mb,xr(t.item.desc),1)],8,pb)}}},_b=Uh(gb,[["__scopeId","data-v-99d85e0c"]]),vb={class:"category"},yb={class:"items-wrapper"},bb={__name:"Category",props:{category:Object},setup(t){const e=t,n=Ye(!0),i=He(()=>e.category.items.sort((r,s)=>n.value?r.name>s.name?1:-1:r.name<s.name?1:-1));return(r,s)=>{const o=la("font-awesome-icon");return he(),ke("div",vb,[z("h2",null,[ue(o,{icon:`fa-solid fa-${t.category.icon}`,class:"icon"},null,8,["icon"]),z("span",null,xr(t.category.cat),1),z("button",{onClick:s[0]||(s[0]=a=>n.value=!n.value)},[ue(o,{icon:`fa-solid ${n.value?"fa-arrow-down-a-z":"fa-arrow-up-z-a"}`,title:n.value?"Sort Z to A":"Sort A to Z",class:"icon"},null,8,["icon","title"])])]),z("div",yb,[(he(!0),ke(Ne,null,Yu(i.value,a=>(he(),cs(_b,{item:a},null,8,["item"]))),256))])])}}};const wb={class:"wrapper"},Cb={class:"container",id:"main"},Eb={key:0,class:"loading"},xb=z("img",{src:Vm,alt:"loading icon",width:"40"},null,-1),Ib=z("span",{class:"sr-only"},"Loading lists...",-1),Sb=[xb,Ib],Tb={key:1,class:"error"},Ab="*K^3j3YCB80cjijCxNg9JC2AlWyXBZh*zlcbaAilqL2YGx8q9CHcj5dJ$UgFcGooPV*lD5kpkOQswP4zcH$7GB6&ZifR009NFid",kb={__name:"App",setup(t){const e=ba($h),n=zh(e),i=Ro(n),r=Ye([]),s=Ye(""),o=Ye(0);as(()=>{a(),!({}.VITE_DEV||document.location.search.includes("no-stats"))&&l()});const a=()=>{Hc(Ri(i,"categories")).then(u=>{u.exists()?r.value=u.val().data:console.log("No data available")}).catch(u=>{s.value=u})},l=()=>{Hc(Ri(i,"visits")).then(u=>{u.exists()?(o.value=u.val().data,o.value++,c()):console.log("No data available")}).catch(u=>{console.log(u)})},c=()=>{Hh(Ro(n,"/visits/"),{data:sa(o),token:Ab})};return(u,f)=>(he(),ke(Ne,null,[ue(ab),z("div",wb,[z("main",Cb,[r.value.length?ai("",!0):(he(),ke("div",Eb,Sb)),s.value?(he(),ke("div",Tb,xr(s.value),1)):(he(!0),ke(Ne,{key:2},Yu(r.value,h=>(he(),cs(bb,{category:h},null,8,["category"]))),256))])]),ue(db)],64))}};function zc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?zc(Object(n),!0).forEach(function(i){ge(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zc(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Yr(t){return Yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yr(t)}function Nb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Pb(t,e,n){return e&&$c(t.prototype,e),n&&$c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ge(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qa(t,e){return Ob(t)||Db(t,e)||Wh(t,e)||Fb()}function Vi(t){return Rb(t)||Mb(t)||Wh(t)||Lb()}function Rb(t){if(Array.isArray(t))return Mo(t)}function Ob(t){if(Array.isArray(t))return t}function Mb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Db(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function Wh(t,e){if(!!t){if(typeof t=="string")return Mo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mo(t,e)}}function Mo(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Lb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Uc=function(){},Xa={},jh={},Vh=null,Yh={mark:Uc,measure:Uc};try{typeof window<"u"&&(Xa=window),typeof document<"u"&&(jh=document),typeof MutationObserver<"u"&&(Vh=MutationObserver),typeof performance<"u"&&(Yh=performance)}catch{}var Bb=Xa.navigator||{},Wc=Bb.userAgent,jc=Wc===void 0?"":Wc,Ht=Xa,se=jh,Vc=Vh,or=Yh;Ht.document;var It=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",qh=~jc.indexOf("MSIE")||~jc.indexOf("Trident/"),ar,lr,cr,ur,fr,yt="___FONT_AWESOME___",Do=16,Kh="fa",Gh="svg-inline--fa",un="data-fa-i2svg",Lo="data-fa-pseudo-element",Hb="data-fa-pseudo-element-pending",Ja="data-prefix",Za="data-icon",Yc="fontawesome-i2svg",zb="async",$b=["HTML","HEAD","STYLE","SCRIPT"],Qh=function(){try{return!0}catch{return!1}}(),re="classic",le="sharp",el=[re,le];function Yi(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[re]}})}var Oi=Yi((ar={},ge(ar,re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ge(ar,le,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ar)),Mi=Yi((lr={},ge(lr,re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ge(lr,le,{solid:"fass",regular:"fasr",light:"fasl"}),lr)),Di=Yi((cr={},ge(cr,re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ge(cr,le,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),cr)),Ub=Yi((ur={},ge(ur,re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ge(ur,le,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ur)),Wb=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Xh="fa-layers-text",jb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vb=Yi((fr={},ge(fr,re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ge(fr,le,{900:"fass",400:"fasr",300:"fasl"}),fr)),Jh=[1,2,3,4,5,6,7,8,9,10],Yb=Jh.concat([11,12,13,14,15,16,17,18,19,20]),qb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Li=new Set;Object.keys(Mi[re]).map(Li.add.bind(Li));Object.keys(Mi[le]).map(Li.add.bind(Li));var Kb=[].concat(el,Vi(Li),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Zt.GROUP,Zt.SWAP_OPACITY,Zt.PRIMARY,Zt.SECONDARY]).concat(Jh.map(function(t){return"".concat(t,"x")})).concat(Yb.map(function(t){return"w-".concat(t)})),di=Ht.FontAwesomeConfig||{};function Gb(t){var e=se.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Qb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(se&&typeof se.querySelector=="function"){var Xb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Xb.forEach(function(t){var e=Qa(t,2),n=e[0],i=e[1],r=Qb(Gb(n));r!=null&&(di[i]=r)})}var Zh={styleDefault:"solid",familyDefault:"classic",cssPrefix:Kh,replacementClass:Gh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};di.familyPrefix&&(di.cssPrefix=di.familyPrefix);var Hn=k(k({},Zh),di);Hn.autoReplaceSvg||(Hn.observeMutations=!1);var R={};Object.keys(Zh).forEach(function(t){Object.defineProperty(R,t,{enumerable:!0,set:function(n){Hn[t]=n,pi.forEach(function(i){return i(R)})},get:function(){return Hn[t]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){Hn.cssPrefix=e,pi.forEach(function(n){return n(R)})},get:function(){return Hn.cssPrefix}});Ht.FontAwesomeConfig=R;var pi=[];function Jb(t){return pi.push(t),function(){pi.splice(pi.indexOf(t),1)}}var Tt=Do,lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zb(t){if(!(!t||!It)){var e=se.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=se.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return se.head.insertBefore(e,i),t}}var e0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fi(){for(var t=12,e="";t-- >0;)e+=e0[Math.random()*62|0];return e}function Kn(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function tl(t){return t.classList?Kn(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ed(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t0(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ed(t[n]),'" ')},"").trim()}function Es(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function nl(t){return t.size!==lt.size||t.x!==lt.x||t.y!==lt.y||t.rotate!==lt.rotate||t.flipX||t.flipY}function n0(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function i0(t){var e=t.transform,n=t.width,i=n===void 0?Do:n,r=t.height,s=r===void 0?Do:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&qh?l+="translate(".concat(e.x/Tt-i/2,"em, ").concat(e.y/Tt-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Tt,"em), calc(-50% + ").concat(e.y/Tt,"em)) "):l+="translate(".concat(e.x/Tt,"em, ").concat(e.y/Tt,"em) "),l+="scale(".concat(e.size/Tt*(e.flipX?-1:1),", ").concat(e.size/Tt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var r0=`:root, :host {
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
}`;function td(){var t=Kh,e=Gh,n=R.cssPrefix,i=R.replacementClass,r=r0;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var qc=!1;function Gs(){R.autoAddCss&&!qc&&(Zb(td()),qc=!0)}var s0={mixout:function(){return{dom:{css:td,insertCss:Gs}}},hooks:function(){return{beforeDOMElementCreation:function(){Gs()},beforeI2svg:function(){Gs()}}}},bt=Ht||{};bt[yt]||(bt[yt]={});bt[yt].styles||(bt[yt].styles={});bt[yt].hooks||(bt[yt].hooks={});bt[yt].shims||(bt[yt].shims=[]);var Ze=bt[yt],nd=[],o0=function t(){se.removeEventListener("DOMContentLoaded",t),qr=1,nd.map(function(e){return e()})},qr=!1;It&&(qr=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),qr||se.addEventListener("DOMContentLoaded",o0));function a0(t){!It||(qr?setTimeout(t,0):nd.push(t))}function qi(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?ed(t):"<".concat(e," ").concat(t0(i),">").concat(s.map(qi).join(""),"</").concat(e,">")}function Kc(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var l0=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},Qs=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?l0(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function c0(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Fo(t){var e=c0(t);return e.length===1?e[0].toString(16):null}function u0(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Gc(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Bo(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Gc(e);typeof Ze.hooks.addPack=="function"&&!r?Ze.hooks.addPack(t,Gc(e)):Ze.styles[t]=k(k({},Ze.styles[t]||{}),s),t==="fas"&&Bo("fa",e)}var hr,dr,pr,yn=Ze.styles,f0=Ze.shims,h0=(hr={},ge(hr,re,Object.values(Di[re])),ge(hr,le,Object.values(Di[le])),hr),il=null,id={},rd={},sd={},od={},ad={},d0=(dr={},ge(dr,re,Object.keys(Oi[re])),ge(dr,le,Object.keys(Oi[le])),dr);function p0(t){return~Kb.indexOf(t)}function m0(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!p0(r)?r:null}var ld=function(){var e=function(s){return Qs(yn,function(o,a,l){return o[l]=Qs(a,s,{}),o},{})};id=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),rd=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),ad=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in yn||R.autoFetchSvg,i=Qs(f0,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});sd=i.names,od=i.unicodes,il=xs(R.styleDefault,{family:R.familyDefault})};Jb(function(t){il=xs(t.styleDefault,{family:R.familyDefault})});ld();function rl(t,e){return(id[t]||{})[e]}function g0(t,e){return(rd[t]||{})[e]}function en(t,e){return(ad[t]||{})[e]}function cd(t){return sd[t]||{prefix:null,iconName:null}}function _0(t){var e=od[t],n=rl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function zt(){return il}var sl=function(){return{prefix:null,iconName:null,rest:[]}};function xs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?re:n,r=Oi[i][t],s=Mi[i][t]||Mi[i][r],o=t in Ze.styles?t:null;return s||o||null}var Qc=(pr={},ge(pr,re,Object.keys(Di[re])),ge(pr,le,Object.keys(Di[le])),pr);function Is(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},ge(e,re,"".concat(R.cssPrefix,"-").concat(re)),ge(e,le,"".concat(R.cssPrefix,"-").concat(le)),e),o=null,a=re;(t.includes(s[re])||t.some(function(c){return Qc[re].includes(c)}))&&(a=re),(t.includes(s[le])||t.some(function(c){return Qc[le].includes(c)}))&&(a=le);var l=t.reduce(function(c,u){var f=m0(R.cssPrefix,u);if(yn[u]?(u=h0[a].includes(u)?Ub[a][u]:u,o=u,c.prefix=u):d0[a].indexOf(u)>-1?(o=u,c.prefix=xs(u,{family:a})):f?c.iconName=f:u!==R.replacementClass&&u!==s[re]&&u!==s[le]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var h=o==="fa"?cd(c.iconName):{},m=en(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||m||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!yn.far&&yn.fas&&!R.autoFetchSvg&&(c.prefix="fas")}return c},sl());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===le&&(yn.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=en(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=zt()||"fas"),l}var v0=function(){function t(){Nb(this,t),this.definitions={}}return Pb(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=k(k({},n.definitions[a]||{}),o[a]),Bo(a,o[a]);var l=Di[re][a];l&&Bo(l,o[a]),ld()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),Xc=[],bn={},Nn={},y0=Object.keys(Nn);function b0(t,e){var n=e.mixoutsTo;return Xc=t,bn={},Object.keys(Nn).forEach(function(i){y0.indexOf(i)===-1&&delete Nn[i]}),Xc.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Yr(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){bn[o]||(bn[o]=[]),bn[o].push(s[o])})}i.provides&&i.provides(Nn)}),n}function Ho(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=bn[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function fn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=bn[t]||[];r.forEach(function(s){s.apply(null,n)})}function wt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Nn[t]?Nn[t].apply(null,e):void 0}function zo(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||zt();if(!!e)return e=en(n,e)||e,Kc(ud.definitions,n,e)||Kc(Ze.styles,n,e)}var ud=new v0,w0=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,fn("noAuto")},C0={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return It?(fn("beforeI2svg",e),wt("pseudoElements2svg",e),wt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,a0(function(){x0({autoReplaceSvgRoot:n}),fn("watch",e)})}},E0={icon:function(e){if(e===null)return null;if(Yr(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:en(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=xs(e[0]);return{prefix:i,iconName:en(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(R.cssPrefix,"-"))>-1||e.match(Wb))){var r=Is(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||zt(),iconName:en(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=zt();return{prefix:s,iconName:en(s,e)||e}}}},$e={noAuto:w0,config:R,dom:C0,parse:E0,library:ud,findIconDefinition:zo,toHtml:qi},x0=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?se:n;(Object.keys(Ze.styles).length>0||R.autoFetchSvg)&&It&&R.autoReplaceSvg&&$e.dom.i2svg({node:i})};function Ss(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return qi(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!It){var i=se.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function I0(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(nl(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=Es(k(k({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function S0(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(R.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},r),{},{id:o}),children:i}]}]}function ol(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,m=h===void 0?!1:h,_=i.found?i:n,b=_.width,O=_.height,I=r==="fak",S=[R.replacementClass,s?"".concat(R.cssPrefix,"-").concat(s):""].filter(function(We){return f.classes.indexOf(We)===-1}).filter(function(We){return We!==""||!!We}).concat(f.classes).join(" "),L={children:[],attributes:k(k({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:S,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(O)})},N=I&&!~f.classes.indexOf("fa-fw")?{width:"".concat(b/O*16*.0625,"em")}:{};m&&(L.attributes[un]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(u||Fi())},children:[l]}),delete L.attributes.title);var G=k(k({},L),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:k(k({},N),f.styles)}),we=i.found&&n.found?wt("generateAbstractMask",G)||{children:[],attributes:{}}:wt("generateAbstractIcon",G)||{children:[],attributes:{}},Ce=we.children,Ue=we.attributes;return G.children=Ce,G.attributes=Ue,a?S0(G):I0(G)}function Jc(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=k(k(k({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[un]="");var u=k({},o.styles);nl(r)&&(u.transform=i0({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=Es(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function T0(t){var e=t.content,n=t.title,i=t.extra,r=k(k(k({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=Es(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Xs=Ze.styles;function $o(t){var e=t[0],n=t[1],i=t.slice(4),r=Qa(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(Zt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Zt.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Zt.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var A0={found:!1,width:512,height:512};function k0(t,e){!Qh&&!R.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Uo(t,e){var n=e;return e==="fa"&&R.styleDefault!==null&&(e=zt()),new Promise(function(i,r){if(wt("missingIconAbstract"),n==="fa"){var s=cd(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Xs[e]&&Xs[e][t]){var o=Xs[e][t];return i($o(o))}k0(t,e),i(k(k({},A0),{},{icon:R.showMissingIcons&&t?wt("missingIconAbstract")||{}:{}}))})}var Zc=function(){},Wo=R.measurePerformance&&or&&or.mark&&or.measure?or:{mark:Zc,measure:Zc},ri='FA "6.4.2"',N0=function(e){return Wo.mark("".concat(ri," ").concat(e," begins")),function(){return fd(e)}},fd=function(e){Wo.mark("".concat(ri," ").concat(e," ends")),Wo.measure("".concat(ri," ").concat(e),"".concat(ri," ").concat(e," begins"),"".concat(ri," ").concat(e," ends"))},al={begin:N0,end:fd},wr=function(){};function eu(t){var e=t.getAttribute?t.getAttribute(un):null;return typeof e=="string"}function P0(t){var e=t.getAttribute?t.getAttribute(Ja):null,n=t.getAttribute?t.getAttribute(Za):null;return e&&n}function R0(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(R.replacementClass)}function O0(){if(R.autoReplaceSvg===!0)return Cr.replace;var t=Cr[R.autoReplaceSvg];return t||Cr.replace}function M0(t){return se.createElementNS("http://www.w3.org/2000/svg",t)}function D0(t){return se.createElement(t)}function hd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?M0:D0:n;if(typeof t=="string")return se.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(hd(o,{ceFn:i}))}),r}function L0(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Cr={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(hd(r),n)}),n.getAttribute(un)===null&&R.keepOriginalSource){var i=se.createComment(L0(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~tl(n).indexOf(R.replacementClass))return Cr.replace(e);var r=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===R.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return qi(a)}).join(`
`);n.setAttribute(un,""),n.innerHTML=o}};function tu(t){t()}function dd(t,e){var n=typeof e=="function"?e:wr;if(t.length===0)n();else{var i=tu;R.mutateApproach===zb&&(i=Ht.requestAnimationFrame||tu),i(function(){var r=O0(),s=al.begin("mutate");t.map(r),s(),n()})}}var ll=!1;function pd(){ll=!0}function jo(){ll=!1}var Kr=null;function nu(t){if(!!Vc&&!!R.observeMutations){var e=t.treeCallback,n=e===void 0?wr:e,i=t.nodeCallback,r=i===void 0?wr:i,s=t.pseudoElementsCallback,o=s===void 0?wr:s,a=t.observeMutationsRoot,l=a===void 0?se:a;Kr=new Vc(function(c){if(!ll){var u=zt();Kn(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!eu(f.addedNodes[0])&&(R.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&eu(f.target)&&~qb.indexOf(f.attributeName))if(f.attributeName==="class"&&P0(f.target)){var h=Is(tl(f.target)),m=h.prefix,_=h.iconName;f.target.setAttribute(Ja,m||u),_&&f.target.setAttribute(Za,_)}else R0(f.target)&&r(f.target)})}}),It&&Kr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function F0(){!Kr||Kr.disconnect()}function B0(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function H0(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Is(tl(t));return r.prefix||(r.prefix=zt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=g0(r.prefix,t.innerText)||rl(r.prefix,Fo(t.innerText))),!r.iconName&&R.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function z0(t){var e=Kn(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return R.autoA11y&&(n?e["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(i||Fi()):(e["aria-hidden"]="true",e.focusable="false")),e}function $0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function iu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=H0(t),i=n.iconName,r=n.prefix,s=n.rest,o=z0(t),a=Ho("parseNodeAttributes",{},t),l=e.styleParser?B0(t):[];return k({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var U0=Ze.styles;function md(t){var e=R.autoReplaceSvg==="nest"?iu(t,{styleParser:!1}):iu(t);return~e.extra.classes.indexOf(Xh)?wt("generateLayersText",t,e):wt("generateSvgReplacementMutation",t,e)}var $t=new Set;el.map(function(t){$t.add("fa-".concat(t))});Object.keys(Oi[re]).map($t.add.bind($t));Object.keys(Oi[le]).map($t.add.bind($t));$t=Vi($t);function ru(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!It)return Promise.resolve();var n=se.documentElement.classList,i=function(f){return n.add("".concat(Yc,"-").concat(f))},r=function(f){return n.remove("".concat(Yc,"-").concat(f))},s=R.autoFetchSvg?$t:el.map(function(u){return"fa-".concat(u)}).concat(Object.keys(U0));s.includes("fa")||s.push("fa");var o=[".".concat(Xh,":not([").concat(un,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(un,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Kn(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=al.begin("onTree"),c=a.reduce(function(u,f){try{var h=md(f);h&&u.push(h)}catch(m){Qh||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){dd(h,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),f(h)})})}function W0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;md(t).then(function(n){n&&dd([n],e)})}function j0(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:zo(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:zo(r||{})),t(i,k(k({},n),{},{mask:r}))}}var V0=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?lt:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,h=f===void 0?null:f,m=n.titleId,_=m===void 0?null:m,b=n.classes,O=b===void 0?[]:b,I=n.attributes,S=I===void 0?{}:I,L=n.styles,N=L===void 0?{}:L;if(!!e){var G=e.prefix,we=e.iconName,Ce=e.icon;return Ss(k({type:"icon"},e),function(){return fn("beforeDOMElementCreation",{iconDefinition:e,params:n}),R.autoA11y&&(h?S["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(_||Fi()):(S["aria-hidden"]="true",S.focusable="false")),ol({icons:{main:$o(Ce),mask:l?$o(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:G,iconName:we,transform:k(k({},lt),r),symbol:o,title:h,maskId:u,titleId:_,extra:{attributes:S,styles:N,classes:O}})})}},Y0={mixout:function(){return{icon:j0(V0)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ru,n.nodeCallback=W0,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?se:i,s=n.callback,o=s===void 0?function(){}:s;return ru(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,h=i.extra;return new Promise(function(m,_){Promise.all([Uo(r,a),u.iconName?Uo(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var O=Qa(b,2),I=O[0],S=O[1];m([n,ol({icons:{main:I,mask:S},prefix:a,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Es(a);l.length>0&&(r.style=l);var c;return nl(o)&&(c=wt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},q0={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Ss({type:"layer"},function(){fn("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(Vi(s)).join(" ")},children:o}]})}}}},K0={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return Ss({type:"counter",content:n},function(){return fn("beforeDOMElementCreation",{content:n,params:i}),T0({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(Vi(a))}})})}}}},G0={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?lt:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,h=i.styles,m=h===void 0?{}:h;return Ss({type:"text",content:n},function(){return fn("beforeDOMElementCreation",{content:n,params:i}),Jc({content:n,transform:k(k({},lt),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(R.cssPrefix,"-layers-text")].concat(Vi(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(qh){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return R.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Jc({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},Q0=new RegExp('"',"ug"),su=[1105920,1112319];function X0(t){var e=t.replace(Q0,""),n=u0(e,0),i=n>=su[0]&&n<=su[1],r=e.length===2?e[0]===e[1]:!1;return{value:Fo(r?e[0]:e),isSecondary:i||r}}function ou(t,e){var n="".concat(Hb).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=Kn(t.children),o=s.filter(function(Ce){return Ce.getAttribute(Lo)===e})[0],a=Ht.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(jb),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?le:re,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Mi[h][l[2].toLowerCase()]:Vb[h][c],_=X0(f),b=_.value,O=_.isSecondary,I=l[0].startsWith("FontAwesome"),S=rl(m,b),L=S;if(I){var N=_0(b);N.iconName&&N.prefix&&(S=N.iconName,m=N.prefix)}if(S&&!O&&(!o||o.getAttribute(Ja)!==m||o.getAttribute(Za)!==L)){t.setAttribute(n,L),o&&t.removeChild(o);var G=$0(),we=G.extra;we.attributes[Lo]=e,Uo(S,m).then(function(Ce){var Ue=ol(k(k({},G),{},{icons:{main:Ce,mask:sl()},prefix:m,iconName:L,extra:we,watchable:!0})),We=se.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(We,t.firstChild):t.appendChild(We),We.outerHTML=Ue.map(function(ft){return qi(ft)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function J0(t){return Promise.all([ou(t,"::before"),ou(t,"::after")])}function Z0(t){return t.parentNode!==document.head&&!~$b.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Lo)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function au(t){if(!!It)return new Promise(function(e,n){var i=Kn(t.querySelectorAll("*")).filter(Z0).map(J0),r=al.begin("searchPseudoElements");pd(),Promise.all(i).then(function(){r(),jo(),e()}).catch(function(){r(),jo(),n()})})}var e2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=au,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?se:i;R.searchPseudoElements&&au(r)}}},lu=!1,t2={mixout:function(){return{dom:{unwatch:function(){pd(),lu=!0}}}},hooks:function(){return{bootstrap:function(){nu(Ho("mutationObserverCallbacks",{}))},noAuto:function(){F0()},watch:function(n){var i=n.observeMutationsRoot;lu?jo():nu(Ho("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},cu=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},n2={mixout:function(){return{parse:{transform:function(n){return cu(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=cu(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:h};return{tag:"g",attributes:k({},m.outer),children:[{tag:"g",attributes:k({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:k(k({},i.icon.attributes),m.path)}]}]}}}},Js={x:0,y:0,width:"100%",height:"100%"};function uu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function i2(t){return t.tag==="g"?t.children:[t]}var r2={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Is(r.split(" ").map(function(o){return o.trim()})):sl();return s.prefix||(s.prefix=zt()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,h=o.icon,m=n0({transform:l,containerWidth:f,iconWidth:c}),_={tag:"rect",attributes:k(k({},Js),{},{fill:"white"})},b=u.children?{children:u.children.map(uu)}:{},O={tag:"g",attributes:k({},m.inner),children:[uu(k({tag:u.tag,attributes:k(k({},u.attributes),m.path)},b))]},I={tag:"g",attributes:k({},m.outer),children:[O]},S="mask-".concat(a||Fi()),L="clip-".concat(a||Fi()),N={tag:"mask",attributes:k(k({},Js),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,I]},G={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:i2(h)},N]};return i.push(G,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(S,")")},Js)}),{children:i,attributes:r}}}},s2={provides:function(e){var n=!1;Ht.matchMedia&&(n=Ht.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:k(k({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=k(k({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:k(k({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:k(k({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:k(k({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:k(k({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},o2={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},a2=[s0,Y0,q0,K0,G0,e2,t2,n2,r2,s2,o2];b0(a2,{mixoutsTo:$e});$e.noAuto;var gd=$e.config,l2=$e.library;$e.dom;var Gr=$e.parse;$e.findIconDefinition;$e.toHtml;var c2=$e.icon;$e.layer;var u2=$e.text;$e.counter;function fu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ge(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fu(Object(n),!0).forEach(function(i){Re(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fu(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Qr(t){return Qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qr(t)}function Re(t,e,n){return e=v2(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f2(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function h2(t,e){if(t==null)return{};var n=f2(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function Vo(t){return d2(t)||p2(t)||m2(t)||g2()}function d2(t){if(Array.isArray(t))return Yo(t)}function p2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function m2(t,e){if(!!t){if(typeof t=="string")return Yo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yo(t,e)}}function Yo(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function g2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _2(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function v2(t){var e=_2(t,"string");return typeof e=="symbol"?e:String(e)}var y2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_d={exports:{}};(function(t){(function(e){var n=function(I,S,L){if(!c(S)||f(S)||h(S)||m(S)||l(S))return S;var N,G=0,we=0;if(u(S))for(N=[],we=S.length;G<we;G++)N.push(n(I,S[G],L));else{N={};for(var Ce in S)Object.prototype.hasOwnProperty.call(S,Ce)&&(N[I(Ce,L)]=n(I,S[Ce],L))}return N},i=function(I,S){S=S||{};var L=S.separator||"_",N=S.split||/(?=[A-Z])/;return I.split(N).join(L)},r=function(I){return _(I)?I:(I=I.replace(/[\-_\s]+(.)?/g,function(S,L){return L?L.toUpperCase():""}),I.substr(0,1).toLowerCase()+I.substr(1))},s=function(I){var S=r(I);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(I,S){return i(I,S).toLowerCase()},a=Object.prototype.toString,l=function(I){return typeof I=="function"},c=function(I){return I===Object(I)},u=function(I){return a.call(I)=="[object Array]"},f=function(I){return a.call(I)=="[object Date]"},h=function(I){return a.call(I)=="[object RegExp]"},m=function(I){return a.call(I)=="[object Boolean]"},_=function(I){return I=I-0,I===I},b=function(I,S){var L=S&&"process"in S?S.process:S;return typeof L!="function"?I:function(N,G){return L(N,I,G)}},O={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(I,S){return n(b(r,S),I)},decamelizeKeys:function(I,S){return n(b(o,S),I,S)},pascalizeKeys:function(I,S){return n(b(s,S),I)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:e.humps=O})(y2)})(_d);var b2=_d.exports,w2=["class","style"];function C2(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=b2.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function E2(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function cl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return cl(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=E2(u);break;case"style":l.style=C2(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=h2(n,w2);return of(t.tag,Ge(Ge(Ge({},e),{},{class:r.class,style:Ge(Ge({},r.style),o)},r.attrs),a),i)}var vd=!1;try{vd=!0}catch{}function x2(){if(!vd&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function mi(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Re({},t,e):{}}function I2(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Re(e,"fa-".concat(t.size),t.size!==null),Re(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Re(e,"fa-pull-".concat(t.pull),t.pull!==null),Re(e,"fa-swap-opacity",t.swapOpacity),Re(e,"fa-bounce",t.bounce),Re(e,"fa-shake",t.shake),Re(e,"fa-beat",t.beat),Re(e,"fa-fade",t.fade),Re(e,"fa-beat-fade",t.beatFade),Re(e,"fa-flash",t.flash),Re(e,"fa-spin-pulse",t.spinPulse),Re(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function hu(t){if(t&&Qr(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Gr.icon)return Gr.icon(t);if(t===null)return null;if(Qr(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var S2=ua({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=He(function(){return hu(e.icon)}),s=He(function(){return mi("classes",I2(e))}),o=He(function(){return mi("transform",typeof e.transform=="string"?Gr.transform(e.transform):e.transform)}),a=He(function(){return mi("mask",hu(e.mask))}),l=He(function(){return c2(r.value,Ge(Ge(Ge(Ge({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});In(l,function(u){if(!u)return x2("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=He(function(){return l.value?cl(l.value.abstract[0],{},i):null});return function(){return c.value}}});ua({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=gd.familyPrefix,s=He(function(){return["".concat(r,"-layers")].concat(Vo(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return of("div",{class:s.value},i.default?i.default():[])}}});ua({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=gd.familyPrefix,s=He(function(){return mi("classes",[].concat(Vo(e.counter?["".concat(r,"-layers-counter")]:[]),Vo(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=He(function(){return mi("transform",typeof e.transform=="string"?Gr.transform(e.transform):e.transform)}),a=He(function(){var c=u2(e.value.toString(),Ge(Ge({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=He(function(){return cl(a.value,{},i)});return function(){return l.value}}});var T2={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"]},A2={prefix:"fas",iconName:"person-running",icon:[448,512,[127939,"running"],"f70c","M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"]},k2={prefix:"fas",iconName:"money-bills",icon:[640,512,[],"e1f3","M96 96V320c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64H160V256zM224 96c0 35.3-28.7 64-64 64V96h64zM576 256v64H512c0-35.3 28.7-64 64-64zM512 96h64v64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V360c0 66.3 53.7 120 120 120H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V120z"]},N2={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]},P2={prefix:"fas",iconName:"star-half-stroke",icon:[640,512,["star-half-alt"],"f5c0","M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"]},R2={prefix:"fas",iconName:"basket-shopping",icon:[576,512,["shopping-basket"],"f291","M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},O2={prefix:"fas",iconName:"face-frown",icon:[512,512,[9785,"frown"],"f119","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},M2={prefix:"fas",iconName:"arrow-down-a-z",icon:[576,512,["sort-alpha-asc","sort-alpha-down"],"f15d","M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 320c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 416H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 352H352c-17.7 0-32-14.3-32-32zM416 32c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 224H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128C392.8 38.8 403.9 32 416 32zM395.8 176h40.4L416 135.6 395.8 176z"]},D2={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},L2={prefix:"fas",iconName:"tv",icon:[640,512,[63717,"television","tv-alt"],"f26c","M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},F2={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},B2={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},H2={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},z2={prefix:"fas",iconName:"arrow-up-z-a",icon:[576,512,["sort-alpha-up-alt"],"f882","M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 64c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zm96 192c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 262.8 428.1 256 416 256zM395.8 400L416 359.6 436.2 400H395.8z"]};l2.add(D2,L2,A2,N2,P2,R2,T2,k2,H2,F2,O2,B2,M2,z2);Wm(kb).component("font-awesome-icon",S2).mount("#app");
