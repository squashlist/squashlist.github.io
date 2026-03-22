(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ia(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Z={},Tn=[],Ke=()=>{},bu=()=>!1,nr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ra=t=>t.startsWith("onUpdate:"),ge=Object.assign,oa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yd=Object.prototype.hasOwnProperty,Y=(t,e)=>Yd.call(t,e),U=Array.isArray,An=t=>Hs(t)==="[object Map]",sr=t=>Hs(t)==="[object Set]",wl=t=>Hs(t)==="[object Date]",H=t=>typeof t=="function",he=t=>typeof t=="string",pt=t=>typeof t=="symbol",X=t=>t!==null&&typeof t=="object",Cu=t=>(X(t)||H(t))&&H(t.then)&&H(t.catch),Eu=Object.prototype.toString,Hs=t=>Eu.call(t),Qd=t=>Hs(t).slice(8,-1),wu=t=>Hs(t)==="[object Object]",aa=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ls=ia(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ir=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xd=/-\w/g,De=ir(t=>t.replace(Xd,e=>e.slice(1).toUpperCase())),Jd=/\B([A-Z])/g,yn=ir(t=>t.replace(Jd,"-$1").toLowerCase()),rr=ir(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fr=ir(t=>t?`on${rr(t)}`:""),ut=(t,e)=>!Object.is(t,e),gi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Su=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},or=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sl;const $s=()=>Sl||(Sl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function la(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=he(s)?np(s):la(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(he(t)||X(t))return t}const Zd=/;(?![^(]*\))/g,ep=/:([^]+)/,tp=/\/\*[^]*?\*\//g;function np(t){const e={};return t.replace(tp,"").split(Zd).forEach(n=>{if(n){const s=n.split(ep);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Es(t){let e="";if(he(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=Es(t[n]);s&&(e+=s+" ")}else if(X(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ip=ia(sp);function Iu(t){return!!t||t===""}function rp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=js(t[s],e[s]);return n}function js(t,e){if(t===e)return!0;let n=wl(t),s=wl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=pt(t),s=pt(e),n||s)return t===e;if(n=U(t),s=U(e),n||s)return n&&s?rp(t,e):!1;if(n=X(t),s=X(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!js(t[o],e[o]))return!1}}return String(t)===String(e)}function op(t,e){return t.findIndex(n=>js(n,e))}const xu=t=>!!(t&&t.__v_isRef===!0),mt=t=>he(t)?t:t==null?"":U(t)||X(t)&&(t.toString===Eu||!H(t.toString))?xu(t)?mt(t.value):JSON.stringify(t,Tu,2):String(t),Tu=(t,e)=>xu(e)?Tu(t,e.value):An(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Br(s,r)+" =>"]=i,n),{})}:sr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Br(n))}:pt(e)?Br(e):X(e)&&!U(e)&&!wu(e)?String(e):e,Br=(t,e="")=>{var n;return pt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};function ap(t){return t==null?"initial":typeof t=="string"?t===""?" ":t:String(t)}/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class lp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Be,!e&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Be;try{return Be=this,e()}finally{Be=n}}}on(){++this._on===1&&(this.prevScope=Be,Be=this)}off(){this._on>0&&--this._on===0&&(Be=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function cp(){return Be}let se;const Wr=new WeakSet;class Au{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Be&&Be.active&&Be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wr.has(this)&&(Wr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Il(this),Ou(this);const e=se,n=et;se=this,et=!0;try{return this.fn()}finally{Ru(this),se=e,et=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fa(e);this.deps=this.depsTail=void 0,Il(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){co(this)&&this.run()}get dirty(){return co(this)}}let Nu=0,cs,us;function Pu(t,e=!1){if(t.flags|=8,e){t.next=us,us=t;return}t.next=cs,cs=t}function ca(){Nu++}function ua(){if(--Nu>0)return;if(us){let e=us;for(us=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;cs;){let e=cs;for(cs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Ou(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ru(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),fa(s),up(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function co(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ku(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ku(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ws)||(t.globalVersion=ws,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!co(t))))return;t.flags|=2;const e=t.dep,n=se,s=et;se=t,et=!0;try{Ou(t);const i=t.fn(t._value);(e.version===0||ut(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{se=n,et=s,Ru(t),t.flags&=-3}}function fa(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)fa(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function up(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let et=!0;const Mu=[];function xt(){Mu.push(et),et=!1}function Tt(){const t=Mu.pop();et=t===void 0?!0:t}function Il(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=se;se=void 0;try{e()}finally{se=n}}}let ws=0;class fp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ha{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!se||!et||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink=new fp(se,this),se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,Du(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=s)}return n}trigger(e){this.version++,ws++,this.notify(e)}notify(e){ca();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ua()}}}function Du(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Du(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const uo=new WeakMap,cn=Symbol(""),fo=Symbol(""),Ss=Symbol("");function Ie(t,e,n){if(et&&se){let s=uo.get(t);s||uo.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new ha),i.map=s,i.key=n),i.track()}}function Ct(t,e,n,s,i,r){const o=uo.get(t);if(!o){ws++;return}const a=l=>{l&&l.trigger()};if(ca(),e==="clear")o.forEach(a);else{const l=U(t),c=l&&aa(n);if(l&&n==="length"){const u=Number(s);o.forEach((f,h)=>{(h==="length"||h===Ss||!pt(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ss)),e){case"add":l?c&&a(o.get("length")):(a(o.get(cn)),An(t)&&a(o.get(fo)));break;case"delete":l||(a(o.get(cn)),An(t)&&a(o.get(fo)));break;case"set":An(t)&&a(o.get(cn));break}}ua()}function Cn(t){const e=q(t);return e===t?e:(Ie(e,"iterate",Ss),qe(t)?e:e.map(nt))}function ar(t){return Ie(t=q(t),"iterate",Ss),t}function lt(t,e){return At(t)?un(t)?Fn(nt(e)):Fn(e):nt(e)}const hp={__proto__:null,[Symbol.iterator](){return Ur(this,Symbol.iterator,t=>lt(this,t))},concat(...t){return Cn(this).concat(...t.map(e=>U(e)?Cn(e):e))},entries(){return Ur(this,"entries",t=>(t[1]=lt(this,t[1]),t))},every(t,e){return yt(this,"every",t,e,void 0,arguments)},filter(t,e){return yt(this,"filter",t,e,n=>n.map(s=>lt(this,s)),arguments)},find(t,e){return yt(this,"find",t,e,n=>lt(this,n),arguments)},findIndex(t,e){return yt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return yt(this,"findLast",t,e,n=>lt(this,n),arguments)},findLastIndex(t,e){return yt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return yt(this,"forEach",t,e,void 0,arguments)},includes(...t){return zr(this,"includes",t)},indexOf(...t){return zr(this,"indexOf",t)},join(t){return Cn(this).join(t)},lastIndexOf(...t){return zr(this,"lastIndexOf",t)},map(t,e){return yt(this,"map",t,e,void 0,arguments)},pop(){return Zn(this,"pop")},push(...t){return Zn(this,"push",t)},reduce(t,...e){return xl(this,"reduce",t,e)},reduceRight(t,...e){return xl(this,"reduceRight",t,e)},shift(){return Zn(this,"shift")},some(t,e){return yt(this,"some",t,e,void 0,arguments)},splice(...t){return Zn(this,"splice",t)},toReversed(){return Cn(this).toReversed()},toSorted(t){return Cn(this).toSorted(t)},toSpliced(...t){return Cn(this).toSpliced(...t)},unshift(...t){return Zn(this,"unshift",t)},values(){return Ur(this,"values",t=>lt(this,t))}};function Ur(t,e,n){const s=ar(t),i=s[e]();return s!==t&&!qe(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const dp=Array.prototype;function yt(t,e,n,s,i,r){const o=ar(t),a=o!==t&&!qe(t),l=o[e];if(l!==dp[e]){const f=l.apply(t,r);return a?nt(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,lt(t,f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function xl(t,e,n,s){const i=ar(t),r=i!==t&&!qe(t);let o=n,a=!1;i!==t&&(r?(a=s.length===0,o=function(c,u,f){return a&&(a=!1,c=lt(t,c)),n.call(this,c,lt(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=i[e](o,...s);return a?lt(t,l):l}function zr(t,e,n){const s=q(t);Ie(s,"iterate",Ss);const i=s[e](...n);return(i===-1||i===!1)&&ga(n[0])?(n[0]=q(n[0]),s[e](...n)):i}function Zn(t,e,n=[]){xt(),ca();const s=q(t)[e].apply(t,n);return ua(),Tt(),s}const pp=ia("__proto__,__v_isRef,__isVue"),Lu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pt));function mp(t){pt(t)||(t=String(t));const e=q(this);return Ie(e,"has",t),e.hasOwnProperty(t)}class Fu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Ip:zu:r?Uu:Wu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=U(e);if(!i){let l;if(o&&(l=hp[n]))return l;if(n==="hasOwnProperty")return mp}const a=Reflect.get(e,n,Ae(e)?e:s);if((pt(n)?Lu.has(n):pp(n))||(i||Ie(e,"get",n),r))return a;if(Ae(a)){const l=o&&aa(n)?a:a.value;return i&&X(l)?po(l):l}return X(a)?i?po(a):pa(a):a}}class Bu extends Fu{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];const o=U(e)&&aa(n);if(!this._isShallow){const c=At(r);if(!qe(s)&&!At(s)&&(r=q(r),s=q(s)),!o&&Ae(r)&&!Ae(s))return c||(r.value=s),!0}const a=o?Number(n)<e.length:Y(e,n),l=Reflect.set(e,n,s,Ae(e)?e:i);return e===q(i)&&(a?ut(s,r)&&Ct(e,"set",n,s):Ct(e,"add",n,s)),l}deleteProperty(e,n){const s=Y(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Ct(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!pt(n)||!Lu.has(n))&&Ie(e,"has",n),s}ownKeys(e){return Ie(e,"iterate",U(e)?"length":cn),Reflect.ownKeys(e)}}class gp extends Fu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _p=new Bu,yp=new gp,vp=new Bu(!0);const ho=t=>t,li=t=>Reflect.getPrototypeOf(t);function bp(t,e,n){return function(...s){const i=this.__v_raw,r=q(i),o=An(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ho:e?Fn:nt;return!e&&Ie(r,"iterate",l?fo:cn),ge(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function ci(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cp(t,e){const n={get(i){const r=this.__v_raw,o=q(r),a=q(i);t||(ut(i,a)&&Ie(o,"get",i),Ie(o,"get",a));const{has:l}=li(o),c=e?ho:t?Fn:nt;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ie(q(i),"iterate",cn),i.size},has(i){const r=this.__v_raw,o=q(r),a=q(i);return t||(ut(i,a)&&Ie(o,"has",i),Ie(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=q(a),c=e?ho:t?Fn:nt;return!t&&Ie(l,"iterate",cn),a.forEach((u,f)=>i.call(r,c(u),c(f),o))}};return ge(n,t?{add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear")}:{add(i){const r=q(this),o=li(r),a=q(i),l=!e&&!qe(i)&&!At(i)?a:i;return o.has.call(r,l)||ut(i,l)&&o.has.call(r,i)||ut(a,l)&&o.has.call(r,a)||(r.add(l),Ct(r,"add",l,l)),this},set(i,r){!e&&!qe(r)&&!At(r)&&(r=q(r));const o=q(this),{has:a,get:l}=li(o);let c=a.call(o,i);c||(i=q(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?ut(r,u)&&Ct(o,"set",i,r):Ct(o,"add",i,r),this},delete(i){const r=q(this),{has:o,get:a}=li(r);let l=o.call(r,i);l||(i=q(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Ct(r,"delete",i,void 0),c},clear(){const i=q(this),r=i.size!==0,o=i.clear();return r&&Ct(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=bp(i,t,e)}),n}function da(t,e){const n=Cp(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Y(n,i)&&i in s?n:s,i,r)}const Ep={get:da(!1,!1)},wp={get:da(!1,!0)},Sp={get:da(!0,!1)};const Wu=new WeakMap,Uu=new WeakMap,zu=new WeakMap,Ip=new WeakMap;function xp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tp(t){return t.__v_skip||!Object.isExtensible(t)?0:xp(Qd(t))}function pa(t){return At(t)?t:ma(t,!1,_p,Ep,Wu)}function Ap(t){return ma(t,!1,vp,wp,Uu)}function po(t){return ma(t,!0,yp,Sp,zu)}function ma(t,e,n,s,i){if(!X(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Tp(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?s:n);return i.set(t,a),a}function un(t){return At(t)?un(t.__v_raw):!!(t&&t.__v_isReactive)}function At(t){return!!(t&&t.__v_isReadonly)}function qe(t){return!!(t&&t.__v_isShallow)}function ga(t){return t?!!t.__v_raw:!1}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function Np(t){return!Y(t,"__v_skip")&&Object.isExtensible(t)&&Su(t,"__v_skip",!0),t}const nt=t=>X(t)?pa(t):t,Fn=t=>X(t)?po(t):t;function Ae(t){return t?t.__v_isRef===!0:!1}function de(t){return Pp(t,!1)}function Pp(t,e){return Ae(t)?t:new Op(t,e)}class Op{constructor(e,n){this.dep=new ha,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:q(e),this._value=n?e:nt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||qe(e)||At(e);e=s?e:q(e),ut(e,n)&&(this._rawValue=e,this._value=s?e:nt(e),this.dep.trigger())}}function lr(t){return Ae(t)?t.value:t}const Rp={get:(t,e,n)=>e==="__v_raw"?t:lr(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Hu(t){return un(t)?t:new Proxy(t,Rp)}class kp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ha(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ws-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return Pu(this,!0),!0}get value(){const e=this.dep.track();return ku(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Mp(t,e,n=!1){let s,i;return H(t)?s=t:(s=t.get,i=t.set),new kp(s,i,n)}const ui={},wi=new WeakMap;let tn;function Dp(t,e=!1,n=tn){if(n){let s=wi.get(n);s||wi.set(n,s=[]),s.push(t)}}function Lp(t,e,n=Z){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=x=>i?x:qe(x)||i===!1||i===0?Et(x,1):Et(x);let u,f,h,m,E=!1,T=!1;if(Ae(t)?(f=()=>t.value,E=qe(t)):un(t)?(f=()=>c(t),E=!0):U(t)?(T=!0,E=t.some(x=>un(x)||qe(x)),f=()=>t.map(x=>{if(Ae(x))return x.value;if(un(x))return c(x);if(H(x))return l?l(x,2):x()})):H(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){xt();try{h()}finally{Tt()}}const x=tn;tn=u;try{return l?l(t,3,[m]):t(m)}finally{tn=x}}:f=Ke,e&&i){const x=f,L=i===!0?1/0:i;f=()=>Et(x(),L)}const M=cp(),I=()=>{u.stop(),M&&M.active&&oa(M.effects,u)};if(r&&e){const x=e;e=(...L)=>{x(...L),I()}}let _=T?new Array(t.length).fill(ui):ui;const y=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const L=u.run();if(i||E||(T?L.some((Ee,_e)=>ut(Ee,_[_e])):ut(L,_))){h&&h();const Ee=tn;tn=u;try{const _e=[L,_===ui?void 0:T&&_[0]===ui?[]:_,m];_=L,l?l(e,3,_e):e(..._e)}finally{tn=Ee}}}else u.run()};return a&&a(y),u=new Au(f),u.scheduler=o?()=>o(y,!1):y,m=x=>Dp(x,!1,u),h=u.onStop=()=>{const x=wi.get(u);if(x){if(l)l(x,4);else for(const L of x)L();wi.delete(u)}},e?s?y(!0):_=u.run():o?o(y.bind(null,!0),!0):u.run(),I.pause=u.pause.bind(u),I.resume=u.resume.bind(u),I.stop=I,I}function Et(t,e=1/0,n){if(e<=0||!X(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ae(t))Et(t.value,e,n);else if(U(t))for(let s=0;s<t.length;s++)Et(t[s],e,n);else if(sr(t)||An(t))t.forEach(s=>{Et(s,e,n)});else if(wu(t)){for(const s in t)Et(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Et(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vs(t,e,n,s){try{return s?t(...s):t()}catch(i){cr(i,e,n)}}function gt(t,e,n,s){if(H(t)){const i=Vs(t,e,n,s);return i&&Cu(i)&&i.catch(r=>{cr(r,e,n)}),i}if(U(t)){const i=[];for(let r=0;r<t.length;r++)i.push(gt(t[r],e,n,s));return i}}function cr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Z;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){xt(),Vs(r,null,10,[t,l,c]),Tt();return}}Fp(t,n,i,s,o)}function Fp(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Re=[];let at=-1;const Nn=[];let Bt=null,wn=0;const $u=Promise.resolve();let Si=null;function _a(t){const e=Si||$u;return t?e.then(this?t.bind(this):t):e}function Bp(t){let e=at+1,n=Re.length;for(;e<n;){const s=e+n>>>1,i=Re[s],r=Is(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function ya(t){if(!(t.flags&1)){const e=Is(t),n=Re[Re.length-1];!n||!(t.flags&2)&&e>=Is(n)?Re.push(t):Re.splice(Bp(e),0,t),t.flags|=1,ju()}}function ju(){Si||(Si=$u.then(Ku))}function Vu(t){U(t)?Nn.push(...t):Bt&&t.id===-1?Bt.splice(wn+1,0,t):t.flags&1||(Nn.push(t),t.flags|=1),ju()}function Tl(t,e,n=at+1){for(;n<Re.length;n++){const s=Re[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Re.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Gu(t){if(Nn.length){const e=[...new Set(Nn)].sort((n,s)=>Is(n)-Is(s));if(Nn.length=0,Bt){Bt.push(...e);return}for(Bt=e,wn=0;wn<Bt.length;wn++){const n=Bt[wn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bt=null,wn=0}}const Is=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ku(t){const e=Ke;try{for(at=0;at<Re.length;at++){const n=Re[at];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Vs(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;at<Re.length;at++){const n=Re[at];n&&(n.flags&=-2)}at=-1,Re.length=0,Gu(),Si=null,(Re.length||Nn.length)&&Ku()}}let je=null,qu=null;function Ii(t){const e=je;return je=t,qu=t&&t.type.__scopeId||null,e}function Wp(t,e=je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ai(-1);const r=Ii(e);let o;try{o=t(...i)}finally{Ii(r),s._d&&Ai(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Sn(t,e){if(je===null)return t;const n=gr(je),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=Z]=e[i];r&&(H(r)&&(r={mounted:r,updated:r}),r.deep&&Et(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Zt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(xt(),gt(l,n,8,[t.el,a,t,e]),Tt())}}function Up(t,e){if(Te){let n=Te.provides;const s=Te.parent&&Te.parent.provides;s===n&&(n=Te.provides=Object.create(s)),n[t]=e}}function _i(t,e,n=!1){const s=Ef();if(s||Pn){let i=Pn?Pn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s&&s.proxy):e}}const zp=Symbol.for("v-scx"),Hp=()=>_i(zp);function St(t,e,n){return Yu(t,e,n)}function Yu(t,e,n=Z){const{immediate:s,deep:i,flush:r,once:o}=n,a=ge({},n),l=e&&s||!e&&r!=="post";let c;if(Ts){if(r==="sync"){const m=Hp();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Ke,m.resume=Ke,m.pause=Ke,m}}const u=Te;a.call=(m,E,T)=>gt(m,u,E,T);let f=!1;r==="post"?a.scheduler=m=>{Fe(m,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(m,E)=>{E?m():ya(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Lp(t,e,a);return Ts&&(c?c.push(h):l&&h()),h}function $p(t,e,n){const s=this.proxy,i=he(t)?t.includes(".")?Qu(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=Ks(this),a=Yu(i,r.bind(s),n);return o(),a}function Qu(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const jp=Symbol("_vte"),Vp=t=>t.__isTeleport,Gp=Symbol("_leaveCb");function va(t,e){t.shapeFlag&6&&t.component?(t.transition=e,va(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ba(t,e){return H(t)?(()=>ge({name:t.name},e,{setup:t}))():t}function Xu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Al(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const xi=new WeakMap;function fs(t,e,n,s,i=!1){if(U(t)){t.forEach((T,M)=>fs(T,e&&(U(e)?e[M]:e),n,s,i));return}if(hs(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&fs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?gr(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Z?a.refs={}:a.refs,f=a.setupState,h=q(f),m=f===Z?bu:T=>Al(u,T)?!1:Y(h,T),E=(T,M)=>!(M&&Al(u,M));if(c!=null&&c!==l){if(Nl(e),he(c))u[c]=null,m(c)&&(f[c]=null);else if(Ae(c)){const T=e;E(c,T.k)&&(c.value=null),T.k&&(u[T.k]=null)}}if(H(l))Vs(l,a,12,[o,u]);else{const T=he(l),M=Ae(l);if(T||M){const I=()=>{if(t.f){const _=T?m(l)?f[l]:u[l]:E()||!t.k?l.value:u[t.k];if(i)U(_)&&oa(_,r);else if(U(_))_.includes(r)||_.push(r);else if(T)u[l]=[r],m(l)&&(f[l]=u[l]);else{const y=[r];E(l,t.k)&&(l.value=y),t.k&&(u[t.k]=y)}}else T?(u[l]=o,m(l)&&(f[l]=o)):M&&(E(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const _=()=>{I(),xi.delete(t)};_.id=-1,xi.set(t,_),Fe(_,n)}else Nl(t),I()}}}function Nl(t){const e=xi.get(t);e&&(e.flags|=8,xi.delete(t))}$s().requestIdleCallback;$s().cancelIdleCallback;const hs=t=>!!t.type.__asyncLoader,Ju=t=>t.type.__isKeepAlive;function Kp(t,e){Zu(t,"a",e)}function qp(t,e){Zu(t,"da",e)}function Zu(t,e,n=Te){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ur(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ju(i.parent.vnode)&&Yp(s,e,n,i),i=i.parent}}function Yp(t,e,n,s){const i=ur(e,t,s,!0);Ca(()=>{oa(s[e],i)},n)}function ur(t,e,n=Te,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{xt();const a=Ks(n),l=gt(e,n,t,o);return a(),Tt(),l});return s?i.unshift(r):i.push(r),r}}const kt=t=>(e,n=Te)=>{(!Ts||t==="sp")&&ur(t,(...s)=>e(...s),n)},Qp=kt("bm"),Gs=kt("m"),ef=kt("bu"),Xp=kt("u"),tf=kt("bum"),Ca=kt("um"),Jp=kt("sp"),Zp=kt("rtg"),em=kt("rtc");function tm(t,e=Te){ur("ec",t,e)}const nf="components";function fr(t,e){return sm(nf,t,!0,e)||t}const nm=Symbol.for("v-ndc");function sm(t,e,n=!0,s=!1){const i=je||Te;if(i){const r=i.type;if(t===nf){const a=Hm(r,!1);if(a&&(a===e||a===De(e)||a===rr(De(e))))return r}const o=Pl(i[t]||r[t],e)||Pl(i.appContext[t],e);return!o&&s?r:o}}function Pl(t,e){return t&&(t[e]||t[De(e)]||t[rr(De(e))])}function hr(t,e,n,s){let i;const r=n&&n[s],o=U(t);if(o||he(t)){const a=o&&un(t);let l=!1,c=!1;a&&(l=!qe(t),c=At(t),t=ar(t)),i=new Array(t.length);for(let u=0,f=t.length;u<f;u++)i[u]=e(l?c?Fn(nt(t[u])):nt(t[u]):t[u],u,void 0,r&&r[u])}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r&&r[a])}else if(X(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r&&r[l]));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const mo=t=>t?wf(t)?gr(t):mo(t.parent):null,ds=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mo(t.parent),$root:t=>mo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ea(t),$forceUpdate:t=>t.f||(t.f=()=>{ya(t.update)}),$nextTick:t=>t.n||(t.n=_a.bind(t.proxy)),$watch:t=>$p.bind(t)}),Hr=(t,e)=>t!==Z&&!t.__isScriptSetup&&Y(t,e),im={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Hr(s,e))return o[e]=1,s[e];if(i!==Z&&Y(i,e))return o[e]=2,i[e];if(Y(r,e))return o[e]=3,r[e];if(n!==Z&&Y(n,e))return o[e]=4,n[e];go&&(o[e]=0)}}const c=ds[e];let u,f;if(c)return e==="$attrs"&&Ie(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Z&&Y(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Y(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Hr(i,e)?(i[e]=n,!0):s!==Z&&Y(s,e)?(s[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,props:r,type:o}},a){let l;return!!(n[a]||t!==Z&&a[0]!=="$"&&Y(t,a)||Hr(e,a)||Y(r,a)||Y(s,a)||Y(ds,a)||Y(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ol(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let go=!0;function rm(t){const e=Ea(t),n=t.proxy,s=t.ctx;go=!1,e.beforeCreate&&Rl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:E,activated:T,deactivated:M,beforeDestroy:I,beforeUnmount:_,destroyed:y,unmounted:x,render:L,renderTracked:Ee,renderTriggered:_e,errorCaptured:st,serverPrefetch:si,expose:Qt,inheritAttrs:Qn,components:ii,directives:ri,filters:kr}=e;if(c&&om(c,s,null),o)for(const ce in o){const te=o[ce];H(te)&&(s[ce]=te.bind(n))}if(i){const ce=i.call(n,n);X(ce)&&(t.data=pa(ce))}if(go=!0,r)for(const ce in r){const te=r[ce],Xt=H(te)?te.bind(n,n):H(te.get)?te.get.bind(n,n):Ke,oi=!H(te)&&H(te.set)?te.set.bind(n):Ke,Jt=ke({get:Xt,set:oi});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:it=>Jt.value=it})}if(a)for(const ce in a)sf(a[ce],s,n,ce);if(l){const ce=H(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(te=>{Up(te,ce[te])})}u&&Rl(u,t,"c");function Pe(ce,te){U(te)?te.forEach(Xt=>ce(Xt.bind(n))):te&&ce(te.bind(n))}if(Pe(Qp,f),Pe(Gs,h),Pe(ef,m),Pe(Xp,E),Pe(Kp,T),Pe(qp,M),Pe(tm,st),Pe(em,Ee),Pe(Zp,_e),Pe(tf,_),Pe(Ca,x),Pe(Jp,si),U(Qt))if(Qt.length){const ce=t.exposed||(t.exposed={});Qt.forEach(te=>{Object.defineProperty(ce,te,{get:()=>n[te],set:Xt=>n[te]=Xt,enumerable:!0})})}else t.exposed||(t.exposed={});L&&t.render===Ke&&(t.render=L),Qn!=null&&(t.inheritAttrs=Qn),ii&&(t.components=ii),ri&&(t.directives=ri),si&&Xu(t)}function om(t,e,n=Ke){U(t)&&(t=_o(t));for(const s in t){const i=t[s];let r;X(i)?"default"in i?r=_i(i.from||s,i.default,!0):r=_i(i.from||s):r=_i(i),Ae(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Rl(t,e,n){gt(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function sf(t,e,n,s){let i=s.includes(".")?Qu(n,s):()=>n[s];if(he(t)){const r=e[t];H(r)&&St(i,r)}else if(H(t))St(i,t.bind(n));else if(X(t))if(U(t))t.forEach(r=>sf(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&St(i,r,t)}}function Ea(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Ti(l,c,o,!0)),Ti(l,e,o)),X(e)&&r.set(e,l),l}function Ti(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ti(t,r,n,!0),i&&i.forEach(o=>Ti(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=am[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const am={data:kl,props:Ml,emits:Ml,methods:os,computed:os,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:os,directives:os,watch:cm,provide:kl,inject:lm};function kl(t,e){return e?t?function(){return ge(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function lm(t,e){return os(_o(t),_o(e))}function _o(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function os(t,e){return t?ge(Object.create(null),t,e):e}function Ml(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:ge(Object.create(null),Ol(t),Ol(e!=null?e:{})):e}function cm(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const s in e)n[s]=Oe(t[s],e[s]);return n}function rf(){return{app:null,config:{isNativeTag:bu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let um=0;function fm(t,e){return function(s,i=null){H(s)||(s=ge({},s)),i!=null&&!X(i)&&(i=null);const r=rf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:um++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:jm,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(c,...f)):H(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||oe(s,i);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(m,u):t(m,u,h),l=!0,c._container=u,u.__vue_app__=c,gr(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(gt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Pn;Pn=c;try{return u()}finally{Pn=f}}};return c}}let Pn=null;const hm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${De(e)}Modifiers`]||t[`${yn(e)}Modifiers`];function dm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Z;let i=n;const r=e.startsWith("update:"),o=r&&hm(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>he(u)?u.trim():u)),o.number&&(i=n.map(or)));let a,l=s[a=Fr(e)]||s[a=Fr(De(e))];!l&&r&&(l=s[a=Fr(yn(e))]),l&&gt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(c,t,6,i)}}const pm=new WeakMap;function of(t,e,n=!1){const s=n?pm:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!H(t)){const l=c=>{const u=of(c,e,!0);u&&(a=!0,ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(X(t)&&s.set(t,null),null):(U(r)?r.forEach(l=>o[l]=null):ge(o,r),X(t)&&s.set(t,o),o)}function dr(t,e){return!t||!nr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,yn(e))||Y(t,e))}function $r(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:E,inheritAttrs:T}=t,M=Ii(t);let I,_;try{if(n.shapeFlag&4){const x=i||s,L=x;I=ct(c.call(L,x,u,f,m,h,E)),_=a}else{const x=e;I=ct(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),_=e.props?a:mm(a)}}catch(x){ps.length=0,cr(x,t,1),I=oe($t)}let y=I;if(_&&T!==!1){const x=Object.keys(_),{shapeFlag:L}=y;x.length&&L&7&&(r&&x.some(ra)&&(_=gm(_,r)),y=Bn(y,_,!1,!0))}return n.dirs&&(y=Bn(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&va(y,n.transition),I=y,Ii(M),I}const mm=t=>{let e;for(const n in t)(n==="class"||n==="style"||nr(n))&&((e||(e={}))[n]=t[n]);return e},gm=(t,e)=>{const n={};for(const s in t)(!ra(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function _m(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Dl(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(af(o,s,h)&&!dr(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Dl(s,o,c):!0:!!o;return!1}function Dl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(af(e,t,r)&&!dr(n,r))return!0}return!1}function af(t,e,n){const s=t[n],i=e[n];return n==="style"&&X(s)&&X(i)?!js(s,i):s!==i}function ym({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const lf={},cf=()=>Object.create(lf),uf=t=>Object.getPrototypeOf(t)===lf;function vm(t,e,n,s=!1){const i={},r=cf();t.propsDefaults=Object.create(null),ff(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ap(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function bm(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=q(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(dr(t.emitsOptions,h))continue;const m=e[h];if(l)if(Y(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const E=De(h);i[E]=yo(l,a,E,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{ff(t,e,i,r)&&(c=!0);let u;for(const f in a)(!e||!Y(e,f)&&((u=yn(f))===f||!Y(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=yo(l,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!Y(e,f)&&!0)&&(delete r[f],c=!0)}c&&Ct(t.attrs,"set","")}function ff(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ls(l))continue;const c=e[l];let u;i&&Y(i,u=De(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:dr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=q(n),c=a||Z;for(let u=0;u<r.length;u++){const f=r[u];n[f]=yo(i,l,f,c[f],t,!Y(c,f))}}return o}function yo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Y(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&H(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ks(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===yn(n))&&(s=!0))}return s}const Cm=new WeakMap;function hf(t,e,n=!1){const s=n?Cm:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!H(t)){const u=f=>{l=!0;const[h,m]=hf(f,e,!0);ge(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return X(t)&&s.set(t,Tn),Tn;if(U(r))for(let u=0;u<r.length;u++){const f=De(r[u]);Ll(f)&&(o[f]=Z)}else if(r)for(const u in r){const f=De(u);if(Ll(f)){const h=r[u],m=o[f]=U(h)||H(h)?{type:h}:ge({},h),E=m.type;let T=!1,M=!0;if(U(E))for(let I=0;I<E.length;++I){const _=E[I],y=H(_)&&_.name;if(y==="Boolean"){T=!0;break}else y==="String"&&(M=!1)}else T=H(E)&&E.name==="Boolean";m[0]=T,m[1]=M,(T||Y(m,"default"))&&a.push(f)}}const c=[o,a];return X(t)&&s.set(t,c),c}function Ll(t){return t[0]!=="$"&&!ls(t)}const wa=t=>t==="_"||t==="_ctx"||t==="$stable",Sa=t=>U(t)?t.map(ct):[ct(t)],Em=(t,e,n)=>{if(e._n)return e;const s=Wp((...i)=>Sa(e(...i)),n);return s._c=!1,s},df=(t,e,n)=>{const s=t._ctx;for(const i in t){if(wa(i))continue;const r=t[i];if(H(r))e[i]=Em(i,r,s);else if(r!=null){const o=Sa(r);e[i]=()=>o}}},pf=(t,e)=>{const n=Sa(e);t.slots.default=()=>n},mf=(t,e,n)=>{for(const s in e)(n||!wa(s))&&(t[s]=e[s])},wm=(t,e,n)=>{const s=t.slots=cf();if(t.vnode.shapeFlag&32){const i=e._;i?(mf(s,e,n),n&&Su(s,"_",i,!0)):df(e,s)}else e&&pf(t,e)},Sm=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Z;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:mf(i,e,n):(r=!e.$stable,df(e,i)),o=e}else e&&(pf(t,e),o={default:1});if(r)for(const a in i)!wa(a)&&o[a]==null&&delete i[a]};function Im(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&($s().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Fe=Pm;function xm(t){return Tm(t)}function Tm(t,e){Im();const n=$s();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Ke,insertStaticContent:E}=t,T=(d,p,g,w=null,v=null,b=null,O=void 0,P=null,N=!!p.dynamicChildren)=>{if(d===p)return;d&&!es(d,p)&&(w=ai(d),it(d,v,b,!0),d=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:C,ref:B,shapeFlag:R}=p;switch(C){case pr:M(d,p,g,w);break;case $t:I(d,p,g,w);break;case yi:d==null&&_(p,g,w,O);break;case Ce:ii(d,p,g,w,v,b,O,P,N);break;default:R&1?L(d,p,g,w,v,b,O,P,N):R&6?ri(d,p,g,w,v,b,O,P,N):(R&64||R&128)&&C.process(d,p,g,w,v,b,O,P,N,bn)}B!=null&&v?fs(B,d&&d.ref,b,p||d,!p):B==null&&d&&d.ref!=null&&fs(d.ref,null,b,d,!0)},M=(d,p,g,w)=>{if(d==null)s(p.el=a(p.children),g,w);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},I=(d,p,g,w)=>{d==null?s(p.el=l(p.children||""),g,w):p.el=d.el},_=(d,p,g,w)=>{[d.el,d.anchor]=E(d.children,p,g,w,d.el,d.anchor)},y=({el:d,anchor:p},g,w)=>{let v;for(;d&&d!==p;)v=h(d),s(d,g,w),d=v;s(p,g,w)},x=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),i(d),d=g;i(p)},L=(d,p,g,w,v,b,O,P,N)=>{if(p.type==="svg"?O="svg":p.type==="math"&&(O="mathml"),d==null)Ee(p,g,w,v,b,O,P,N);else{const C=d.el&&d.el._isVueCE?d.el:null;try{C&&C._beginPatch(),si(d,p,v,b,O,P,N)}finally{C&&C._endPatch()}}},Ee=(d,p,g,w,v,b,O,P)=>{let N,C;const{props:B,shapeFlag:R,transition:D,dirs:z}=d;if(N=d.el=o(d.type,b,B&&B.is,B),R&8?u(N,d.children):R&16&&st(d.children,N,null,w,v,jr(d,b),O,P),z&&Zt(d,null,w,"created"),_e(N,d,d.scopeId,O,w),B){for(const ne in B)ne!=="value"&&!ls(ne)&&r(N,ne,null,B[ne],b,w);"value"in B&&r(N,"value",null,B.value,b),(C=B.onVnodeBeforeMount)&&ot(C,w,d)}z&&Zt(d,null,w,"beforeMount");const G=Am(v,D);G&&D.beforeEnter(N),s(N,p,g),((C=B&&B.onVnodeMounted)||G||z)&&Fe(()=>{C&&ot(C,w,d),G&&D.enter(N),z&&Zt(d,null,w,"mounted")},v)},_e=(d,p,g,w,v)=>{if(g&&m(d,g),w)for(let b=0;b<w.length;b++)m(d,w[b]);if(v){let b=v.subTree;if(p===b||vf(b.type)&&(b.ssContent===p||b.ssFallback===p)){const O=v.vnode;_e(d,O,O.scopeId,O.slotScopeIds,v.parent)}}},st=(d,p,g,w,v,b,O,P,N=0)=>{for(let C=N;C<d.length;C++){const B=d[C]=P?bt(d[C]):ct(d[C]);T(null,B,p,g,w,v,b,O,P)}},si=(d,p,g,w,v,b,O)=>{const P=p.el=d.el;let{patchFlag:N,dynamicChildren:C,dirs:B}=p;N|=d.patchFlag&16;const R=d.props||Z,D=p.props||Z;let z;if(g&&en(g,!1),(z=D.onVnodeBeforeUpdate)&&ot(z,g,p,d),B&&Zt(p,d,g,"beforeUpdate"),g&&en(g,!0),(R.innerHTML&&D.innerHTML==null||R.textContent&&D.textContent==null)&&u(P,""),C?Qt(d.dynamicChildren,C,P,g,w,jr(p,v),b):O||te(d,p,P,null,g,w,jr(p,v),b,!1),N>0){if(N&16)Qn(P,R,D,g,v);else if(N&2&&R.class!==D.class&&r(P,"class",null,D.class,v),N&4&&r(P,"style",R.style,D.style,v),N&8){const G=p.dynamicProps;for(let ne=0;ne<G.length;ne++){const Q=G[ne],Le=R[Q],we=D[Q];(we!==Le||Q==="value")&&r(P,Q,Le,we,v,g)}}N&1&&d.children!==p.children&&u(P,p.children)}else!O&&C==null&&Qn(P,R,D,g,v);((z=D.onVnodeUpdated)||B)&&Fe(()=>{z&&ot(z,g,p,d),B&&Zt(p,d,g,"updated")},w)},Qt=(d,p,g,w,v,b,O)=>{for(let P=0;P<p.length;P++){const N=d[P],C=p[P],B=N.el&&(N.type===Ce||!es(N,C)||N.shapeFlag&198)?f(N.el):g;T(N,C,B,null,w,v,b,O,!0)}},Qn=(d,p,g,w,v)=>{if(p!==g){if(p!==Z)for(const b in p)!ls(b)&&!(b in g)&&r(d,b,p[b],null,v,w);for(const b in g){if(ls(b))continue;const O=g[b],P=p[b];O!==P&&b!=="value"&&r(d,b,P,O,v,w)}"value"in g&&r(d,"value",p.value,g.value,v)}},ii=(d,p,g,w,v,b,O,P,N)=>{const C=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:R,dynamicChildren:D,slotScopeIds:z}=p;z&&(P=P?P.concat(z):z),d==null?(s(C,g,w),s(B,g,w),st(p.children||[],g,B,v,b,O,P,N)):R>0&&R&64&&D&&d.dynamicChildren&&d.dynamicChildren.length===D.length?(Qt(d.dynamicChildren,D,g,v,b,O,P),(p.key!=null||v&&p===v.subTree)&&gf(d,p,!0)):te(d,p,g,B,v,b,O,P,N)},ri=(d,p,g,w,v,b,O,P,N)=>{p.slotScopeIds=P,d==null?p.shapeFlag&512?v.ctx.activate(p,g,w,O,N):kr(p,g,w,v,b,O,N):_l(d,p,N)},kr=(d,p,g,w,v,b,O)=>{const P=d.component=Fm(d,w,v);if(Ju(d)&&(P.ctx.renderer=bn),Bm(P,!1,O),P.asyncDep){if(v&&v.registerDep(P,Pe,O),!d.el){const N=P.subTree=oe($t);I(null,N,p,g),d.placeholder=N.el}}else Pe(P,d,p,g,v,b,O)},_l=(d,p,g)=>{const w=p.component=d.component;if(_m(d,p,g))if(w.asyncDep&&!w.asyncResolved){ce(w,p,g);return}else w.next=p,w.update();else p.el=d.el,w.vnode=p},Pe=(d,p,g,w,v,b,O)=>{const P=()=>{if(d.isMounted){let{next:R,bu:D,u:z,parent:G,vnode:ne}=d;{const He=_f(d);if(He){R&&(R.el=ne.el,ce(d,R,O)),He.asyncDep.then(()=>{Fe(()=>{d.isUnmounted||C()},v)});return}}let Q=R,Le;en(d,!1),R?(R.el=ne.el,ce(d,R,O)):R=ne,D&&gi(D),(Le=R.props&&R.props.onVnodeBeforeUpdate)&&ot(Le,G,R,ne),en(d,!0);const we=$r(d),Ye=d.subTree;d.subTree=we,T(Ye,we,f(Ye.el),ai(Ye),d,v,b),R.el=we.el,Q===null&&ym(d,we.el),z&&Fe(z,v),(Le=R.props&&R.props.onVnodeUpdated)&&Fe(()=>ot(Le,G,R,ne),v)}else{let R;const{el:D,props:z}=p,{bm:G,m:ne,parent:Q,root:Le,type:we}=d,Ye=hs(p);if(en(d,!1),G&&gi(G),!Ye&&(R=z&&z.onVnodeBeforeMount)&&ot(R,Q,p),en(d,!0),D&&Lr){const He=()=>{d.subTree=$r(d),Lr(D,d.subTree,d,v,null)};Ye&&we.__asyncHydrate?we.__asyncHydrate(D,d,He):He()}else{Le.ce&&Le.ce._hasShadowRoot()&&Le.ce._injectChildStyle(we,d.parent?d.parent.type:void 0);const He=d.subTree=$r(d);T(null,He,g,w,d,v,b),p.el=He.el}if(ne&&Fe(ne,v),!Ye&&(R=z&&z.onVnodeMounted)){const He=p;Fe(()=>ot(R,Q,He),v)}(p.shapeFlag&256||Q&&hs(Q.vnode)&&Q.vnode.shapeFlag&256)&&d.a&&Fe(d.a,v),d.isMounted=!0,p=g=w=null}};d.scope.on();const N=d.effect=new Au(P);d.scope.off();const C=d.update=N.run.bind(N),B=d.job=N.runIfDirty.bind(N);B.i=d,B.id=d.uid,N.scheduler=()=>ya(B),en(d,!0),C()},ce=(d,p,g)=>{p.component=d;const w=d.vnode.props;d.vnode=p,d.next=null,bm(d,p.props,w,g),Sm(d,p.children,g),xt(),Tl(d),Tt()},te=(d,p,g,w,v,b,O,P,N=!1)=>{const C=d&&d.children,B=d?d.shapeFlag:0,R=p.children,{patchFlag:D,shapeFlag:z}=p;if(D>0){if(D&128){oi(C,R,g,w,v,b,O,P,N);return}else if(D&256){Xt(C,R,g,w,v,b,O,P,N);return}}z&8?(B&16&&Xn(C,v,b),R!==C&&u(g,R)):B&16?z&16?oi(C,R,g,w,v,b,O,P,N):Xn(C,v,b,!0):(B&8&&u(g,""),z&16&&st(R,g,w,v,b,O,P,N))},Xt=(d,p,g,w,v,b,O,P,N)=>{d=d||Tn,p=p||Tn;const C=d.length,B=p.length,R=Math.min(C,B);let D;for(D=0;D<R;D++){const z=p[D]=N?bt(p[D]):ct(p[D]);T(d[D],z,g,null,v,b,O,P,N)}C>B?Xn(d,v,b,!0,!1,R):st(p,g,w,v,b,O,P,N,R)},oi=(d,p,g,w,v,b,O,P,N)=>{let C=0;const B=p.length;let R=d.length-1,D=B-1;for(;C<=R&&C<=D;){const z=d[C],G=p[C]=N?bt(p[C]):ct(p[C]);if(es(z,G))T(z,G,g,null,v,b,O,P,N);else break;C++}for(;C<=R&&C<=D;){const z=d[R],G=p[D]=N?bt(p[D]):ct(p[D]);if(es(z,G))T(z,G,g,null,v,b,O,P,N);else break;R--,D--}if(C>R){if(C<=D){const z=D+1,G=z<B?p[z].el:w;for(;C<=D;)T(null,p[C]=N?bt(p[C]):ct(p[C]),g,G,v,b,O,P,N),C++}}else if(C>D)for(;C<=R;)it(d[C],v,b,!0),C++;else{const z=C,G=C,ne=new Map;for(C=G;C<=D;C++){const $e=p[C]=N?bt(p[C]):ct(p[C]);$e.key!=null&&ne.set($e.key,C)}let Q,Le=0;const we=D-G+1;let Ye=!1,He=0;const Jn=new Array(we);for(C=0;C<we;C++)Jn[C]=0;for(C=z;C<=R;C++){const $e=d[C];if(Le>=we){it($e,v,b,!0);continue}let rt;if($e.key!=null)rt=ne.get($e.key);else for(Q=G;Q<=D;Q++)if(Jn[Q-G]===0&&es($e,p[Q])){rt=Q;break}rt===void 0?it($e,v,b,!0):(Jn[rt-G]=C+1,rt>=He?He=rt:Ye=!0,T($e,p[rt],g,null,v,b,O,P,N),Le++)}const bl=Ye?Nm(Jn):Tn;for(Q=bl.length-1,C=we-1;C>=0;C--){const $e=G+C,rt=p[$e],Cl=p[$e+1],El=$e+1<B?Cl.el||yf(Cl):w;Jn[C]===0?T(null,rt,g,El,v,b,O,P,N):Ye&&(Q<0||C!==bl[Q]?Jt(rt,g,El,2):Q--)}}},Jt=(d,p,g,w,v=null)=>{const{el:b,type:O,transition:P,children:N,shapeFlag:C}=d;if(C&6){Jt(d.component.subTree,p,g,w);return}if(C&128){d.suspense.move(p,g,w);return}if(C&64){O.move(d,p,g,bn);return}if(O===Ce){s(b,p,g);for(let R=0;R<N.length;R++)Jt(N[R],p,g,w);s(d.anchor,p,g);return}if(O===yi){y(d,p,g);return}if(w!==2&&C&1&&P)if(w===0)P.beforeEnter(b),s(b,p,g),Fe(()=>P.enter(b),v);else{const{leave:R,delayLeave:D,afterLeave:z}=P,G=()=>{d.ctx.isUnmounted?i(b):s(b,p,g)},ne=()=>{b._isLeaving&&b[Gp](!0),R(b,()=>{G(),z&&z()})};D?D(b,G,ne):ne()}else s(b,p,g)},it=(d,p,g,w=!1,v=!1)=>{const{type:b,props:O,ref:P,children:N,dynamicChildren:C,shapeFlag:B,patchFlag:R,dirs:D,cacheIndex:z}=d;if(R===-2&&(v=!1),P!=null&&(xt(),fs(P,null,g,d,!0),Tt()),z!=null&&(p.renderCache[z]=void 0),B&256){p.ctx.deactivate(d);return}const G=B&1&&D,ne=!hs(d);let Q;if(ne&&(Q=O&&O.onVnodeBeforeUnmount)&&ot(Q,p,d),B&6)qd(d.component,g,w);else{if(B&128){d.suspense.unmount(g,w);return}G&&Zt(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,g,bn,w):C&&!C.hasOnce&&(b!==Ce||R>0&&R&64)?Xn(C,p,g,!1,!0):(b===Ce&&R&384||!v&&B&16)&&Xn(N,p,g),w&&yl(d)}(ne&&(Q=O&&O.onVnodeUnmounted)||G)&&Fe(()=>{Q&&ot(Q,p,d),G&&Zt(d,null,p,"unmounted")},g)},yl=d=>{const{type:p,el:g,anchor:w,transition:v}=d;if(p===Ce){Kd(g,w);return}if(p===yi){x(d);return}const b=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:P}=v,N=()=>O(g,b);P?P(d.el,b,N):N()}else b()},Kd=(d,p)=>{let g;for(;d!==p;)g=h(d),i(d),d=g;i(p)},qd=(d,p,g)=>{const{bum:w,scope:v,job:b,subTree:O,um:P,m:N,a:C}=d;Fl(N),Fl(C),w&&gi(w),v.stop(),b&&(b.flags|=8,it(O,d,p,g)),P&&Fe(P,p),Fe(()=>{d.isUnmounted=!0},p)},Xn=(d,p,g,w=!1,v=!1,b=0)=>{for(let O=b;O<d.length;O++)it(d[O],p,g,w,v)},ai=d=>{if(d.shapeFlag&6)return ai(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),g=p&&p[jp];return g?h(g):p};let Mr=!1;const vl=(d,p,g)=>{let w;d==null?p._vnode&&(it(p._vnode,null,null,!0),w=p._vnode.component):T(p._vnode||null,d,p,null,null,null,g),p._vnode=d,Mr||(Mr=!0,Tl(w),Gu(),Mr=!1)},bn={p:T,um:it,m:Jt,r:yl,mt:kr,mc:st,pc:te,pbc:Qt,n:ai,o:t};let Dr,Lr;return e&&([Dr,Lr]=e(bn)),{render:vl,hydrate:Dr,createApp:fm(vl,Dr)}}function jr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function en({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Am(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gf(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=bt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&gf(o,a)),a.type===pr&&(a.patchFlag===-1&&(a=i[r]=bt(a)),a.el=o.el),a.type===$t&&!a.el&&(a.el=o.el)}}function Nm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function _f(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_f(e)}function Fl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function yf(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?yf(e.subTree):null}const vf=t=>t.__isSuspense;function Pm(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Vu(t)}const Ce=Symbol.for("v-fgt"),pr=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),yi=Symbol.for("v-stc"),ps=[];let Ve=null;function J(t=!1){ps.push(Ve=t?null:[])}function Om(){ps.pop(),Ve=ps[ps.length-1]||null}let xs=1;function Ai(t,e=!1){xs+=t,t<0&&Ve&&e&&(Ve.hasOnce=!0)}function bf(t){return t.dynamicChildren=xs>0?Ve||Tn:null,Om(),xs>0&&Ve&&Ve.push(t),t}function ue(t,e,n,s,i,r){return bf(F(t,e,n,s,i,r,!0))}function mr(t,e,n,s,i){return bf(oe(t,e,n,s,i,!0))}function Ni(t){return t?t.__v_isVNode===!0:!1}function es(t,e){return t.type===e.type&&t.key===e.key}const Cf=({key:t})=>t!=null?t:null,vi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||Ae(t)||H(t)?{i:je,r:t,k:e,f:!!n}:t:null);function F(t,e=null,n=null,s=0,i=null,r=t===Ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cf(e),ref:e&&vi(e),scopeId:qu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return a?(Ia(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),xs>0&&!o&&Ve&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ve.push(l),l}const oe=Rm;function Rm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===nm)&&(t=$t),Ni(t)){const a=Bn(t,e,!0);return n&&Ia(a,n),xs>0&&!r&&Ve&&(a.shapeFlag&6?Ve[Ve.indexOf(t)]=a:Ve.push(a)),a.patchFlag=-2,a}if($m(t)&&(t=t.__vccOpts),e){e=km(e);let{class:a,style:l}=e;a&&!he(a)&&(e.class=Es(a)),X(l)&&(ga(l)&&!U(l)&&(l=ge({},l)),e.style=la(l))}const o=he(t)?1:vf(t)?128:Vp(t)?64:X(t)?4:H(t)?2:0;return F(t,e,n,s,i,o,r,!0)}function km(t){return t?ga(t)||uf(t)?ge({},t):t:null}function Bn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Mm(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Cf(c),ref:e&&e.ref?n&&r?U(r)?r.concat(vi(e)):[r,vi(e)]:vi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ce?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bn(t.ssContent),ssFallback:t.ssFallback&&Bn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&va(u,l.clone(u)),u}function hn(t=" ",e=0){return oe(pr,null,t,e)}function dt(t="",e=!1){return e?(J(),mr($t,null,t)):oe($t,null,t)}function ct(t){return t==null||typeof t=="boolean"?oe($t):U(t)?oe(Ce,null,t.slice()):Ni(t)?bt(t):oe(pr,null,String(t))}function bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bn(t)}function Ia(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ia(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!uf(e)?e._ctx=je:i===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:je},n=32):(e=String(e),s&64?(n=16,e=[hn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Es([e.class,s.class]));else if(i==="style")e.style=la([e.style,s.style]);else if(nr(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ot(t,e,n,s=null){gt(t,e,7,[n,s])}const Dm=rf();let Lm=0;function Fm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Dm,r={uid:Lm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hf(s,i),emitsOptions:of(s,i),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=dm.bind(null,r),t.ce&&t.ce(r),r}let Te=null;const Ef=()=>Te||je;let Pi,vo;{const t=$s(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Pi=e("__VUE_INSTANCE_SETTERS__",n=>Te=n),vo=e("__VUE_SSR_SETTERS__",n=>Ts=n)}const Ks=t=>{const e=Te;return Pi(t),t.scope.on(),()=>{t.scope.off(),Pi(e)}},Bl=()=>{Te&&Te.scope.off(),Pi(null)};function wf(t){return t.vnode.shapeFlag&4}let Ts=!1;function Bm(t,e=!1,n=!1){e&&vo(e);const{props:s,children:i}=t.vnode,r=wf(t);vm(t,s,r,e),wm(t,i,n||e);const o=r?Wm(t,e):void 0;return e&&vo(!1),o}function Wm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,im);const{setup:s}=n;if(s){xt();const i=t.setupContext=s.length>1?zm(t):null,r=Ks(t),o=Vs(s,t,0,[t.props,i]),a=Cu(o);if(Tt(),r(),(a||t.sp)&&!hs(t)&&Xu(t),a){if(o.then(Bl,Bl),e)return o.then(l=>{Wl(t,l,e)}).catch(l=>{cr(l,t,0)});t.asyncDep=o}else Wl(t,o,e)}else Sf(t,e)}function Wl(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:X(e)&&(t.setupState=Hu(e)),Sf(t,n)}let Ul;function Sf(t,e,n){const s=t.type;if(!t.render){if(!e&&Ul&&!s.render){const i=s.template||Ea(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=ge(ge({isCustomElement:r,delimiters:a},o),l);s.render=Ul(i,c)}}t.render=s.render||Ke}{const i=Ks(t);xt();try{rm(t)}finally{Tt(),i()}}}const Um={get(t,e){return Ie(t,"get",""),t[e]}};function zm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Um),slots:t.slots,emit:t.emit,expose:e}}function gr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Hu(Np(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ds)return ds[n](t)},has(e,n){return n in e||n in ds}})):t.proxy}function Hm(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function $m(t){return H(t)&&"__vccOpts"in t}const ke=(t,e)=>Mp(t,e,Ts);function If(t,e,n){try{Ai(-1);const s=arguments.length;return s===2?X(e)&&!U(e)?Ni(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ni(n)&&(n=[n]),oe(t,e,n))}finally{Ai(1)}}const jm="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bo;const zl=typeof window<"u"&&window.trustedTypes;if(zl)try{bo=zl.createPolicy("vue",{createHTML:t=>t})}catch{}const xf=bo?t=>bo.createHTML(t):t=>t,Vm="http://www.w3.org/2000/svg",Gm="http://www.w3.org/1998/Math/MathML",vt=typeof document<"u"?document:null,Hl=vt&&vt.createElement("template"),Km={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?vt.createElementNS(Vm,t):e==="mathml"?vt.createElementNS(Gm,t):n?vt.createElement(t,{is:n}):vt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>vt.createTextNode(t),createComment:t=>vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Hl.innerHTML=xf(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Hl.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qm=Symbol("_vtc");function Ym(t,e,n){const s=t[qm];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Oi=Symbol("_vod"),Tf=Symbol("_vsh"),Qm={name:"show",beforeMount(t,{value:e},{transition:n}){t[Oi]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ts(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),ts(t,!0),s.enter(t)):s.leave(t,()=>{ts(t,!1)}):ts(t,e))},beforeUnmount(t,{value:e}){ts(t,e)}};function ts(t,e){t.style.display=e?t[Oi]:"none",t[Tf]=!e}const Af=Symbol("");function Xm(t){const e=Ef();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Ri(r,i))},s=()=>{const i=t(e.proxy);e.ce?Ri(e.ce,i):Co(e.subTree,i),n(i)};ef(()=>{Vu(s)}),Gs(()=>{St(s,Ke,{flush:"post"});const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),Ca(()=>i.disconnect())})}function Co(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Co(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Ri(t.el,e);else if(t.type===Ce)t.children.forEach(n=>Co(n,e));else if(t.type===yi){let{el:n,anchor:s}=t;for(;n&&(Ri(n,e),n!==s);)n=n.nextSibling}}function Ri(t,e){if(t.nodeType===1){const n=t.style;let s="";for(const i in e){const r=ap(e[i]);n.setProperty(`--${i}`,r),s+=`--${i}: ${r};`}n[Af]=s}}const Jm=/(?:^|;)\s*display\s*:/;function Zm(t,e,n){const s=t.style,i=he(n);let r=!1;if(n&&!i){if(e)if(he(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&bi(s,a,"")}else for(const o in e)n[o]==null&&bi(s,o,"");for(const o in n)o==="display"&&(r=!0),bi(s,o,n[o])}else if(i){if(e!==n){const o=s[Af];o&&(n+=";"+o),s.cssText=n,r=Jm.test(n)}}else e&&t.removeAttribute("style");Oi in t&&(t[Oi]=r?s.display:"",t[Tf]&&(s.display="none"))}const $l=/\s*!important$/;function bi(t,e,n){if(U(n))n.forEach(s=>bi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=eg(t,e);$l.test(n)?t.setProperty(yn(s),n.replace($l,""),"important"):t[s]=n}}const jl=["Webkit","Moz","ms"],Vr={};function eg(t,e){const n=Vr[e];if(n)return n;let s=De(e);if(s!=="filter"&&s in t)return Vr[e]=s;s=rr(s);for(let i=0;i<jl.length;i++){const r=jl[i]+s;if(r in t)return Vr[e]=r}return e}const Vl="http://www.w3.org/1999/xlink";function Gl(t,e,n,s,i,r=ip(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Vl,e.slice(6,e.length)):t.setAttributeNS(Vl,e,n):n==null||r&&!Iu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":pt(n)?String(n):n)}function Kl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?xf(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Iu(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function rn(t,e,n,s){t.addEventListener(e,n,s)}function tg(t,e,n,s){t.removeEventListener(e,n,s)}const ql=Symbol("_vei");function ng(t,e,n,s,i=null){const r=t[ql]||(t[ql]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=sg(e);if(s){const c=r[e]=og(s,i);rn(t,a,c,l)}else o&&(tg(t,a,o,l),r[e]=void 0)}}const Yl=/(?:Once|Passive|Capture)$/;function sg(t){let e;if(Yl.test(t)){e={};let s;for(;s=t.match(Yl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):yn(t.slice(2)),e]}let Gr=0;const ig=Promise.resolve(),rg=()=>Gr||(ig.then(()=>Gr=0),Gr=Date.now());function og(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;gt(ag(s,n.value),e,5,[s])};return n.value=t,n.attached=rg(),n}function ag(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ql=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lg=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Ym(t,s,o):e==="style"?Zm(t,n,s):nr(e)?ra(e)||ng(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cg(t,e,s,o))?(Kl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gl(t,e,s,o,r,e!=="value")):t._isVueCE&&(ug(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!he(s)))?Kl(t,De(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Gl(t,e,s,o))};function cg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ql(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ql(e)&&he(n)?!1:e in t}function ug(t,e){const n=t._def.props;if(!n)return!1;const s=De(e);return Array.isArray(n)?n.some(i=>De(i)===s):Object.keys(n).some(i=>De(i)===s)}const ki=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>gi(e,n):e};function fg(t){t.target.composing=!0}function Xl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const On=Symbol("_assign");function Jl(t,e,n){return e&&(t=t.trim()),n&&(t=or(t)),t}const fi={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[On]=ki(i);const r=s||i.props&&i.props.type==="number";rn(t,e?"change":"input",o=>{o.target.composing||t[On](Jl(t.value,n,r))}),(n||r)&&rn(t,"change",()=>{t.value=Jl(t.value,n,r)}),e||(rn(t,"compositionstart",fg),rn(t,"compositionend",Xl),rn(t,"change",Xl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[On]=ki(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?or(t.value):t.value,l=e==null?"":e;a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},hg={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=sr(e);rn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?or(Mi(o)):Mi(o));t[On](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,_a(()=>{t._assigning=!1})}),t[On]=ki(s)},mounted(t,{value:e}){Zl(t,e)},beforeUpdate(t,e,n){t[On]=ki(n)},updated(t,{value:e}){t._assigning||Zl(t,e)}};function Zl(t,e){const n=t.multiple,s=U(e);if(!(n&&!s&&!sr(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=Mi(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=op(e,a)>-1}else o.selected=e.has(a);else if(js(Mi(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Mi(t){return"_value"in t?t._value:t.value}const dg=["ctrl","shift","alt","meta"],pg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dg.some(n=>t[`${n}Key`]&&!e.includes(n))},mg=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=pg[e[o]];if(a&&a(i,e))return}return t(i,...r)})},gg=ge({patchProp:lg},Km);let ec;function _g(){return ec||(ec=xm(gg))}const yg=(...t)=>{const e=_g().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=bg(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,vg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function vg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function bg(t){return he(t)?document.querySelector(t):t}const Cg="/icon.svg",Eg="/sl-logo.svg",wg=()=>{};/**
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
 */const Nf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const A=function(t,e){if(!t)throw jn(e)},jn=function(t){return new Error("Firebase Database ("+Nf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Pf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[f],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw new Ig;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),f!==64){const E=c<<6&192|f;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ig extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Of=function(t){const e=Pf(t);return xa.encodeByteArray(e,!0)},Di=function(t){return Of(t).replace(/\./g,"")},Eo=function(t){try{return xa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xg(t){return Rf(void 0,t)}function Rf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Tg(n)||(t[n]=Rf(t[n],e[n]));return t}function Tg(t){return t!=="__proto__"}/**
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
 */function Ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ng=()=>Ag().__FIREBASE_DEFAULTS__,Pg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Og=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Eo(t[1]);return e&&JSON.parse(e)},kf=()=>{try{return wg()||Ng()||Pg()||Og()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rg=t=>{var e,n;return(n=(e=kf())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},kg=t=>{const e=Rg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Mf=()=>{var t;return(t=kf())==null?void 0:t.config};/**
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
 */class _r{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Mg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[Di(JSON.stringify(n)),Di(JSON.stringify(o)),a].join(".")}/**
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
 */function Dg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Df(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dg())}function Lg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lf(){return Nf.NODE_ADMIN===!0}function Fg(){try{return typeof indexedDB=="object"}catch{return!1}}function Bg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Wg="FirebaseError";class qs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Wg,Object.setPrototypeOf(this,qs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ff.prototype.create)}}class Ff{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ug(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qs(i,a,s)}}function Ug(t,e){return t.replace(zg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const zg=/\{\$([^}]+)}/g;/**
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
 */function As(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
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
 */const Bf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=As(Eo(r[0])||""),n=As(Eo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Hg=function(t){const e=Bf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$g=function(t){const e=Bf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function tc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Li(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Fi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(nc(r)&&nc(o)){if(!Fi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function nc(t){return t!==null&&typeof t=="object"}/**
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
 */function jg(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Vg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):f<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ta(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Gg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,A(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Vn(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Wf(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kg(t){return(await fetch(t,{credentials:"include"})).ok}class Ns{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nn="[DEFAULT]";/**
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
 */class qg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new _r;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var i;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(i=e==null?void 0:e.optional)!=null?i:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qg(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var o;const s=this.normalizeInstanceIdentifier(n),i=(o=this.onInitCallbacks.get(s))!=null?o:new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Yg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yg(t){return t===nn?void 0:t}function Qg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Xg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Jg={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Zg=ie.INFO,e_={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},t_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=e_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uf{constructor(e){this.name=e,this._logLevel=Zg,this._logHandler=t_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const n_=(t,e)=>e.some(n=>t instanceof n);let sc,ic;function s_(){return sc||(sc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i_(){return ic||(ic=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zf=new WeakMap,wo=new WeakMap,Hf=new WeakMap,Kr=new WeakMap,Aa=new WeakMap;function r_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Wt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zf.set(n,t)}).catch(()=>{}),Aa.set(e,t),e}function o_(t){if(wo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});wo.set(t,e)}let So={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function a_(t){So=t(So)}function l_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qr(this),e,...n);return Hf.set(s,e.sort?e.sort():[e]),Wt(s)}:i_().includes(t)?function(...e){return t.apply(qr(this),e),Wt(zf.get(this))}:function(...e){return Wt(t.apply(qr(this),e))}}function c_(t){return typeof t=="function"?l_(t):(t instanceof IDBTransaction&&o_(t),n_(t,s_())?new Proxy(t,So):t)}function Wt(t){if(t instanceof IDBRequest)return r_(t);if(Kr.has(t))return Kr.get(t);const e=c_(t);return e!==t&&(Kr.set(t,e),Aa.set(e,t)),e}const qr=t=>Aa.get(t);function u_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Wt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Wt(o.result),l.oldVersion,l.newVersion,Wt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const f_=["get","getKey","getAll","getAllKeys","count"],h_=["put","add","delete","clear"],Yr=new Map;function rc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yr.get(e))return Yr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=h_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||f_.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Yr.set(e,r),r}a_(t=>({...t,get:(e,n,s)=>rc(e,n)||t.get(e,n,s),has:(e,n)=>!!rc(e,n)||t.has(e,n)}));/**
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
 */class d_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function p_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Io="@firebase/app",oc="0.14.10";/**
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
 */const Nt=new Uf("@firebase/app"),m_="@firebase/app-compat",g_="@firebase/analytics-compat",__="@firebase/analytics",y_="@firebase/app-check-compat",v_="@firebase/app-check",b_="@firebase/auth",C_="@firebase/auth-compat",E_="@firebase/database",w_="@firebase/data-connect",S_="@firebase/database-compat",I_="@firebase/functions",x_="@firebase/functions-compat",T_="@firebase/installations",A_="@firebase/installations-compat",N_="@firebase/messaging",P_="@firebase/messaging-compat",O_="@firebase/performance",R_="@firebase/performance-compat",k_="@firebase/remote-config",M_="@firebase/remote-config-compat",D_="@firebase/storage",L_="@firebase/storage-compat",F_="@firebase/firestore",B_="@firebase/ai",W_="@firebase/firestore-compat",U_="firebase",z_="12.11.0";/**
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
 */const xo="[DEFAULT]",H_={[Io]:"fire-core",[m_]:"fire-core-compat",[__]:"fire-analytics",[g_]:"fire-analytics-compat",[v_]:"fire-app-check",[y_]:"fire-app-check-compat",[b_]:"fire-auth",[C_]:"fire-auth-compat",[E_]:"fire-rtdb",[w_]:"fire-data-connect",[S_]:"fire-rtdb-compat",[I_]:"fire-fn",[x_]:"fire-fn-compat",[T_]:"fire-iid",[A_]:"fire-iid-compat",[N_]:"fire-fcm",[P_]:"fire-fcm-compat",[O_]:"fire-perf",[R_]:"fire-perf-compat",[k_]:"fire-rc",[M_]:"fire-rc-compat",[D_]:"fire-gcs",[L_]:"fire-gcs-compat",[F_]:"fire-fst",[W_]:"fire-fst-compat",[B_]:"fire-vertex","fire-js":"fire-js",[U_]:"fire-js-all"};/**
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
 */const Bi=new Map,$_=new Map,To=new Map;function ac(t,e){try{t.container.addComponent(e)}catch(n){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wi(t){const e=t.name;if(To.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;To.set(e,t);for(const n of Bi.values())ac(n,t);for(const n of $_.values())ac(n,t);return!0}function j_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function V_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const G_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Ut=new Ff("app","Firebase",G_);/**
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
 */class K_{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
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
 */const q_=z_;function Na(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:xo,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(n||(n=Mf()),!n)throw Ut.create("no-options");const r=Bi.get(i);if(r){if(Fi(n,r.options)&&Fi(s,r.config))return r;throw Ut.create("duplicate-app",{appName:i})}const o=new Xg(i);for(const l of To.values())o.addComponent(l);const a=new K_(n,s,o);return Bi.set(i,a),a}function Y_(t=xo){const e=Bi.get(t);if(!e&&t===xo&&Mf())return Na();if(!e)throw Ut.create("no-app",{appName:t});return e}function Rn(t,e,n){var o;let s=(o=H_[t])!=null?o:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(a.join(" "));return}Wi(new Ns(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Q_="firebase-heartbeat-database",X_=1,Ps="firebase-heartbeat-store";let Qr=null;function $f(){return Qr||(Qr=u_(Q_,X_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ps)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ut.create("idb-open",{originalErrorMessage:t.message})})),Qr}async function J_(t){try{const n=(await $f()).transaction(Ps),s=await n.objectStore(Ps).get(jf(t));return await n.done,s}catch(e){if(e instanceof qs)Nt.warn(e.message);else{const n=Ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(n.message)}}}async function lc(t,e){try{const s=(await $f()).transaction(Ps,"readwrite");await s.objectStore(Ps).put(e,jf(t)),await s.done}catch(n){if(n instanceof qs)Nt.warn(n.message);else{const s=Ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nt.warn(s.message)}}}function jf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Z_=1024,ey=30;class ty{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>ey){const o=iy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cc(),{heartbeatsToSend:s,unsentEntries:i}=ny(this._heartbeatsCache.heartbeats),r=Di(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Nt.warn(n),""}}}function cc(){return new Date().toISOString().substring(0,10)}function ny(t,e=Z_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),uc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class sy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fg()?Bg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await J_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){const i=await this.read();return lc(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!=null?s:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){const i=await this.read();return lc(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!=null?s:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function uc(t){return Di(JSON.stringify({version:2,heartbeats:t})).length}function iy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function ry(t){Wi(new Ns("platform-logger",e=>new d_(e),"PRIVATE")),Wi(new Ns("heartbeat",e=>new ty(e),"PRIVATE")),Rn(Io,oc,t),Rn(Io,oc,"esm2020"),Rn("fire-js","")}ry("");var oy="firebase",ay="12.11.0";/**
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
 */Rn(oy,ay,"app");const fc="@firebase/database",hc="1.1.2";/**
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
 */let Vf="";function ly(t){Vf=t}/**
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
 */class cy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:As(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class uy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Gf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cy(e)}}catch{}return new uy},on=Gf("localStorage"),Ao=Gf("sessionStorage");/**
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
 */const kn=new Uf("@firebase/database"),fy=function(){let t=1;return function(){return t++}}(),Kf=function(t){const e=Gg(t),n=new Vg;n.update(e);const s=n.digest();return xa.encodeByteArray(s)},Ys=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ys.apply(null,s):typeof s=="object"?e+=pe(s):e+=s,e+=" "}return e};let fn=null,dc=!0;const hy=function(t,e){A(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(kn.logLevel=ie.VERBOSE,fn=kn.log.bind(kn),e&&Ao.set("logging_enabled",!0)):typeof t=="function"?fn=t:(fn=null,Ao.remove("logging_enabled"))},xe=function(...t){if(dc===!0&&(dc=!1,fn===null&&Ao.get("logging_enabled")===!0&&hy(!0)),fn){const e=Ys.apply(null,t);fn(e)}},Qs=function(t){return function(...e){xe(t,...e)}},No=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ys(...t);kn.error(e)},Pt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ys(...t)}`;throw kn.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+Ys(...t);kn.warn(e)},dy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},py=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Un="[MIN_NAME]",dn="[MAX_NAME]",Gn=function(t,e){if(t===e)return 0;if(t===Un||e===dn)return-1;if(e===Un||t===dn)return 1;{const n=pc(t),s=pc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},my=function(t,e){return t===e?0:t<e?-1:1},ns=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},Pa=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=pe(e[s]),n+=":",n+=Pa(t[e[s]]);return n+="}",n},Yf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Qf=function(t){A(!qf(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},gy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_y=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yy(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const vy=new RegExp("^-?(0*)\\d{1,10}$"),by=-2147483648,Cy=2147483647,pc=function(t){if(vy.test(t)){const e=Number(t);if(e>=by&&e<=Cy)return e}return null},Kn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ey=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ms=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class wy{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,V_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Sy{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class Mn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mn.OWNER="owner";/**
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
 */const Oa="5",Xf="v",Jf="s",Zf="r",eh="f",th=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,nh="ls",sh="p",Po="ac",ih="websocket",rh="long_polling";/**
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
 */class oh{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=on.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&on.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Iy(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ah(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let s;if(e===ih)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===rh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Iy(t)&&(n.ns=t.namespace);const i=[];return ze(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class xy{constructor(){this.counters_={}}incrementCounter(e,n=1){Mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return xg(this.counters_)}}/**
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
 */const Xr={},Jr={};function Ra(t){const e=t.toString();return Xr[e]||(Xr[e]=new xy),Xr[e]}function Ty(t,e){const n=t.toString();return Jr[n]||(Jr[n]=e()),Jr[n]}/**
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
 */class Ay{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Kn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const mc="start",Ny="close",Py="pLPCommand",Oy="pRTLPCB",lh="id",ch="pw",uh="ser",Ry="cb",ky="seg",My="ts",Dy="d",Ly="dframe",fh=1870,hh=30,Fy=fh-hh,By=25e3,Wy=3e4;class In{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qs(e),this.stats_=Ra(n),this.urlFn=l=>(this.appCheckToken&&(l[Po]=this.appCheckToken),ah(n,rh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ay(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Wy)),py(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ka((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mc)this.id=a,this.password=l;else if(o===Ny)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[mc]="t",s[uh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ry]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Xf]=Oa,this.transportSessionId&&(s[Jf]=this.transportSessionId),this.lastSessionId&&(s[nh]=this.lastSessionId),this.applicationId&&(s[sh]=this.applicationId),this.appCheckToken&&(s[Po]=this.appCheckToken),typeof location<"u"&&location.hostname&&th.test(location.hostname)&&(s[Zf]=eh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){In.forceAllow_=!0}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){return In.forceAllow_?!0:!In.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gy()&&!_y()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Of(n),i=Yf(s,Fy);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ly]="t",s[lh]=e,s[ch]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ka{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fy(),window[Py+this.uniqueCallbackIdentifier]=e,window[Oy+this.uniqueCallbackIdentifier]=n,this.myIFrame=ka.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){xe("frame writing exception"),a.stack&&xe(a.stack),xe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[lh]=this.myID,e[ch]=this.myPW,e[uh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hh+s.length<=fh;){const o=this.pendingSegs.shift();s=s+"&"+ky+i+"="+o.seg+"&"+My+i+"="+o.ts+"&"+Dy+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(By)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Uy=16384,zy=45e3;let Ui=null;typeof MozWebSocket<"u"?Ui=MozWebSocket:typeof WebSocket<"u"&&(Ui=WebSocket);class Qe{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qs(this.connId),this.stats_=Ra(n),this.connURL=Qe.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Xf]=Oa,typeof location<"u"&&location.hostname&&th.test(location.hostname)&&(o[Zf]=eh),n&&(o[Jf]=n),s&&(o[nh]=s),i&&(o[Po]=i),r&&(o[sh]=r),ah(e,ih,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,on.set("previous_websocket_failure",!0);try{let s;Lf(),this.mySock=new Ui(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ui!==null&&!Qe.forceDisallow_}static previouslyFailed(){return on.isInMemoryStorage||on.get("previous_websocket_failure")===!0}markConnectionHealthy(){on.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=As(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Yf(n,Uy);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qe.responsesRequiredToBeHealthy=2;Qe.healthyTimeout=3e4;/**
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
 */class Os{static get ALL_TRANSPORTS(){return[In,Qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Qe&&Qe.isAvailable();let s=n&&!Qe.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Qe];else{const i=this.transports_=[];for(const r of Os.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Os.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Os.globalTransportInitialized_=!1;/**
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
 */const Hy=6e4,$y=5e3,jy=10*1024,Vy=100*1024,Zr="t",gc="d",Gy="s",_c="r",Ky="e",yc="o",vc="a",bc="n",Cc="p",qy="h";class Yy{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qs("c:"+this.id+":"),this.transportManager_=new Os(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ms(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Vy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zr in e){const n=e[Zr];n===vc?this.upgradeIfSecondaryHealthy_():n===_c?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ns("t",e),s=ns("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ns("t",e),s=ns("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ns(Zr,e);if(gc in e){const s=e[gc];if(n===qy){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===bc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Gy?this.onConnectionShutdown_(s):n===_c?this.onReset_(s):n===Ky?No("Server Error: "+s):n===yc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):No("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Oa!==s&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ms(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Hy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ms(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($y))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(on.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class dh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ph{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class zi extends ph{static getInstance(){return new zi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Df()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ec=32,wc=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new ee("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jt(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function mh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Qy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function gh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function _h(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ee(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=V(t),s=V(e);if(n===null)return e;if(n===s)return Me(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function yh(t,e){if(jt(t)!==jt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Je(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(jt(t)>jt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Xy{constructor(e,n){this.errorPrefix_=n,this.parts_=gh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=yr(this.parts_[s]);vh(this)}}function Jy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=yr(e),vh(t)}function Zy(t){const e=t.parts_.pop();t.byteLength_-=yr(e),t.parts_.length>0&&(t.byteLength_-=1)}function vh(t){if(t.byteLength_>wc)throw new Error(t.errorPrefix_+"has a key path longer than "+wc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ec)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ec+") or object contains a cycle "+sn(t))}function sn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ma extends ph{static getInstance(){return new Ma}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ss=1e3,e1=60*5*1e3,Sc=30*1e3,t1=1.3,n1=3e4,s1="server_kill",Ic=3;class It extends dh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=It.nextPersistentConnectionId_++,this.log_=Qs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ss,this.maxReconnectDelay_=e1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Lf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ma.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(pe(r)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new _r,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;It.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mt(e,"w")){const s=Wn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$g(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Hg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):No("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>n1&&(this.reconnectDelay_=ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*t1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+It.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(f){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new Yy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{Ue(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(s1)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ue(f),l())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],tc(this.interruptReasons_)&&(this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Pa(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ic&&(this.reconnectDelay_=Sc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ic&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Vf.replace(/\./g,"-")]=1,Df()?e["framework.cordova"]=1:Lg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zi.getInstance().currentlyOnline();return tc(this.interruptReasons_)&&e}}It.nextPersistentConnectionId_=0;It.nextConnectionId_=0;/**
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
 */class vr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new $(Un,e),i=new $(Un,n);return this.compare(s,i)!==0}minPost(){return $.MIN}}/**
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
 */let hi;class bh extends vr{static get __EMPTY_NODE(){return hi}static set __EMPTY_NODE(e){hi=e}compare(e,n){return Gn(e.name,n.name)}isDefinedOn(e){throw jn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(dn,hi)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,hi)}toString(){return".key"}}const Dn=new bh;/**
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
 */class di{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ve.RED,this.left=i!=null?i:We.EMPTY_NODE,this.right=r!=null?r:We.EMPTY_NODE}copy(e,n,s,i,r){return new ve(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class i1{copy(e,n,s,i,r){return this}insert(e,n,s){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,n=We.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new We(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new di(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new di(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new di(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new di(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new i1;/**
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
 */function r1(t,e){return Gn(t.name,e.name)}function Da(t,e){return Gn(t,e)}/**
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
 */let Oo;function o1(t){Oo=t}const Ch=function(t){return typeof t=="number"?"number:"+Qf(t):"string:"+t},Eh=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mt(e,".sv"),"Priority must be a string or number.")}else A(t===Oo||t.isEmpty(),"priority of unexpected type.");A(t===Oo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let xc;class ye{static set __childrenNodeConstructor(e){xc=e}static get __childrenNodeConstructor(){return xc}constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Eh(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:V(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=V(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(A(s!==".priority"||jt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ch(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Qf(this.value_):e+=this.value_,this.lazyHash_=Kf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return A(i>=0,"Unknown leaf type: "+n),A(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let wh,Sh;function a1(t){wh=t}function l1(t){Sh=t}class c1 extends vr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Gn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(dn,new ye("[PRIORITY-POST]",Sh))}makePost(e,n){const s=wh(e);return new $(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new c1;/**
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
 */const u1=Math.log(2);class f1{constructor(e){const n=r=>parseInt(Math.log(r)/u1,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Hi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let f,h;if(u===0)return null;if(u===1)return f=t[l],h=n?n(f):f,new ve(h,f.node,ve.BLACK,null,null);{const m=parseInt(u/2,10)+l,E=i(l,m),T=i(m+1,c);return f=t[m],h=n?n(f):f,new ve(h,f.node,ve.BLACK,E,T)}},r=function(l){let c=null,u=null,f=t.length;const h=function(E,T){const M=f-E,I=f;f-=E;const _=i(M+1,I),y=t[M],x=n?n(y):y;m(new ve(x,y.node,T,null,_))},m=function(E){c?(c.left=E,c=E):(u=E,c=E)};for(let E=0;E<l.count;++E){const T=l.nextBitIsOne(),M=Math.pow(2,l.count-(E+1));T?h(M,ve.BLACK):(h(M,ve.BLACK),h(M,ve.RED))}return u},o=new f1(t.length),a=r(o);return new We(s||e,a)};/**
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
 */let eo;const En={};class wt{static get Default(){return A(En&&fe,"ChildrenNode.ts has not been loaded"),eo=eo||new wt({".priority":En},{".priority":fe}),eo}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Wn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof We?n:null}hasIndex(e){return Mt(this.indexSet_,e.toString())}addIndex(e,n){A(e!==Dn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator($.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Hi(s,e.getCompare()):a=En;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new wt(u,c)}addToIndexes(e,n){const s=Li(this.indexes_,(i,r)=>{const o=Wn(this.indexSet_,r);if(A(o,"Missing index implementation for "+r),i===En)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator($.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Hi(a,o.getCompare())}else return En;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new $(e.name,a))),l.insert(e,e.node)}});return new wt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Li(this.indexes_,i=>{if(i===En)return i;{const r=n.get(e.name);return r?i.remove(new $(e.name,r)):i}});return new wt(s,this.indexSet_)}}/**
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
 */let is;class W{static get EMPTY_NODE(){return is||(is=new W(new We(Da),null,wt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Eh(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||is}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?is:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new $(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?is:this.priorityNode_;return new W(i,o,r)}}updateChild(e,n){const s=V(e);if(s===null)return n;{A(V(e)!==".priority"||jt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,a)=>{n[o]=a.val(e),s++,r&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ch(this.getPriority().val())+":"),this.forEachChild(fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Kf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new $(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xs?-1:0}withIndex(e){if(e===Dn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(fe),i=n.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dn?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class h1 extends W{constructor(){super(new We(Da),W.EMPTY_NODE,wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Xs=new h1;Object.defineProperties($,{MIN:{value:new $(Un,W.EMPTY_NODE)},MAX:{value:new $(dn,Xs)}});bh.__EMPTY_NODE=W.EMPTY_NODE;ye.__childrenNodeConstructor=W;o1(Xs);l1(Xs);/**
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
 */const d1=!0;function be(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,be(e))}if(!(t instanceof Array)&&d1){const n=[];let s=!1;if(ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=be(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new $(o,l)))}}),n.length===0)return W.EMPTY_NODE;const r=Hi(n,r1,o=>o.name,Da);if(s){const o=Hi(n,fe.getCompare());return new W(r,be(e),new wt({".priority":o},{".priority":fe}))}else return new W(r,be(e),wt.Default)}else{let n=W.EMPTY_NODE;return ze(t,(s,i)=>{if(Mt(t,s)&&s.substring(0,1)!=="."){const r=be(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(be(e))}}a1(be);/**
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
 */class p1 extends vr{constructor(e){super(),this.indexPath_=e,A(!j(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Gn(e.name,n.name):r}makePost(e,n){const s=be(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,s);return new $(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Xs);return new $(dn,e)}toString(){return gh(this.indexPath_,0).join("/")}}/**
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
 */class m1 extends vr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Gn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const s=be(e);return new $(n,s)}toString(){return".value"}}const g1=new m1;/**
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
 */function Ih(t){return{type:"value",snapshotNode:t}}function zn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Rs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ks(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class La{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Rs(n,a)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(zn(n,s)):o.trackChildChange(ks(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Rs(i,r))}),n.isLeafNode()||n.forEachChild(fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ks(i,r,o))}else s.trackChildChange(zn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ms{constructor(e){this.indexedFilter_=new La(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ms.getStartPost_(e),this.endPost_=Ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new $(n,s))||(s=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const r=this;return n.forEachChild(fe,(o,a)=>{r.matches(new $(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class y1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new $(n,s))||(s=W.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,m)=>f(m,h)}else o=this.index_.getCompare();const a=e;A(a.numChildren()===this.limit_,"");const l=new $(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(ks(n,s,f)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Rs(n,f));const T=a.updateImmediateChild(n,W.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(zn(h.name,h.node)),T.updateImmediateChild(h.name,h.node)):T}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Rs(c.name,c.node)),r.trackChildChange(zn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,W.EMPTY_NODE)):e}}/**
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
 */class Fa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Un}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Fa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function v1(t){return t.loadsAllData()?new La(t.getIndex()):t.hasLimit()?new y1(t):new Ms(t)}function Tc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===g1?n="$value":t.index_===Dn?n="$key":(A(t.index_ instanceof p1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=pe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+pe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=pe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ac(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class $i extends dh{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Qs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$i.getListenId_(e,s),a={};this.listens_[o]=a;const l=Tc(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),Wn(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=$i.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Tc(e._queryParams),s=e._path.toString(),i=new _r;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+jg(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=As(a.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class b1{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ji(){return{value:null,children:new Map}}function xh(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=V(e);t.children.has(s)||t.children.set(s,ji());const i=t.children.get(s);e=re(e),xh(i,e,n)}}function Ro(t,e,n){t.value!==null?n(e,t.value):C1(t,(s,i)=>{const r=new ee(e.toString()+"/"+s);Ro(i,r,n)})}function C1(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class E1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&ze(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Nc=10*1e3,w1=30*1e3,S1=5*60*1e3;class I1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new E1(e);const s=Nc+(w1-Nc)*Math.random();ms(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ze(e,(i,r)=>{r>0&&Mt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ms(this.reportStats_.bind(this),Math.floor(Math.random()*2*S1))}}/**
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
 */var Ze;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ze||(Ze={}));function Th(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ba(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wa(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Vi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ze.ACK_USER_WRITE,this.source=Th()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new Vi(K(),n,this.revert)}}else return A(V(this.path)===e,"operationForChild called for unrelated child."),new Vi(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ds{constructor(e,n){this.source=e,this.path=n,this.type=Ze.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Ds(this.source,K()):new Ds(this.source,re(this.path))}}/**
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
 */class pn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ze.OVERWRITE}operationForChild(e){return j(this.path)?new pn(this.source,K(),this.snap.getImmediateChild(e)):new pn(this.source,re(this.path),this.snap)}}/**
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
 */class Ls{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ze.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new pn(this.source,K(),n.value):new Ls(this.source,K(),n)}else return A(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ls(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Vt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class x1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function T1(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_1(o.childName,o.snapshotNode))}),rs(t,i,"child_removed",e,s,n),rs(t,i,"child_added",e,s,n),rs(t,i,"child_moved",r,s,n),rs(t,i,"child_changed",e,s,n),rs(t,i,"value",e,s,n),i}function rs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>N1(t,a,l)),o.forEach(a=>{const l=A1(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function A1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function N1(t,e,n){if(e.childName==null||n.childName==null)throw jn("Should only compare child_ events.");const s=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function br(t,e){return{eventCache:t,serverCache:e}}function gs(t,e,n,s){return br(new Vt(e,n,s),t.serverCache)}function Ah(t,e,n,s){return br(t.eventCache,new Vt(e,n,s))}function Gi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function mn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let to;const P1=()=>(to||(to=new We(my)),to);class ae{static fromObject(e){let n=new ae(null);return ze(e,(s,i)=>{n=n.set(new ee(s),i)}),n}constructor(e,n=P1()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(j(e))return null;{const s=V(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),n);return r!=null?{path:me(new ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=V(e),s=this.children.get(n);return s!==null?s.subtree(re(e)):new ae(null)}}set(e,n){if(j(e))return new ae(n,this.children);{const s=V(e),r=(this.children.get(s)||new ae(null)).set(re(e),n),o=this.children.insert(s,r);return new ae(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=V(e),s=this.children.get(n);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ae(null):new ae(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const n=V(e),s=this.children.get(n);return s?s.get(re(e)):null}}setTree(e,n){if(j(e))return n;{const s=V(e),r=(this.children.get(s)||new ae(null)).setTree(re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ae(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(j(e))return null;{const r=V(e),o=this.children.get(r);return o?o.findOnPath_(re(e),me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,s){if(j(e))return this;{this.value&&s(n,this.value);const i=V(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),me(n,i),s):new ae(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class tt{constructor(e){this.writeTree_=e}static empty(){return new tt(new ae(null))}}function _s(t,e,n){if(j(e))return new tt(new ae(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Me(i,e);return r=r.updateChild(o,n),new tt(t.writeTree_.set(i,r))}else{const i=new ae(n),r=t.writeTree_.setTree(e,i);return new tt(r)}}}function Pc(t,e,n){let s=t;return ze(n,(i,r)=>{s=_s(s,me(e,i),r)}),s}function Oc(t,e){if(j(e))return tt.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new tt(n)}}function ko(t,e){return vn(t,e)!=null}function vn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function Rc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(s,i)=>{e.push(new $(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new $(s,i.value))}),e}function zt(t,e){if(j(e))return t;{const n=vn(t,e);return n!=null?new tt(new ae(n)):new tt(t.writeTree_.subtree(e))}}function Mo(t){return t.writeTree_.isEmpty()}function Hn(t,e){return Nh(K(),t.writeTree_,e)}function Nh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(A(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Nh(me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(me(t,".priority"),s)),n}}/**
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
 */function Cr(t,e){return kh(e,t)}function O1(t,e,n,s,i){A(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=_s(t.visibleWrites,e,n)),t.lastWriteId=s}function R1(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function k1(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&M1(a,s.path)?i=!1:Je(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return D1(t),!0;if(s.snap)t.visibleWrites=Oc(t.visibleWrites,s.path);else{const a=s.children;ze(a,l=>{t.visibleWrites=Oc(t.visibleWrites,me(s.path,l))})}return!0}else return!1}function M1(t,e){if(t.snap)return Je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Je(me(t.path,n),e))return!0;return!1}function D1(t){t.visibleWrites=Ph(t.allWrites,L1,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function L1(t){return t.visible}function Ph(t,e,n){let s=tt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Je(n,o)?(a=Me(n,o),s=_s(s,a,r.snap)):Je(o,n)&&(a=Me(o,n),s=_s(s,K(),r.snap.getChild(a)));else if(r.children){if(Je(n,o))a=Me(n,o),s=Pc(s,a,r.children);else if(Je(o,n))if(a=Me(o,n),j(a))s=Pc(s,K(),r.children);else{const l=Wn(r.children,V(a));if(l){const c=l.getChild(re(a));s=_s(s,K(),c)}}}else throw jn("WriteRecord should have .snap or .children")}}return s}function Oh(t,e,n,s,i){if(!s&&!i){const r=vn(t.visibleWrites,e);if(r!=null)return r;{const o=zt(t.visibleWrites,e);if(Mo(o))return n;if(n==null&&!ko(o,K()))return null;{const a=n||W.EMPTY_NODE;return Hn(o,a)}}}else{const r=zt(t.visibleWrites,e);if(!i&&Mo(r))return n;if(!i&&n==null&&!ko(r,K()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Je(c.path,e)||Je(e,c.path))},a=Ph(t.allWrites,o,e),l=n||W.EMPTY_NODE;return Hn(a,l)}}}function F1(t,e,n){let s=W.EMPTY_NODE;const i=vn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=zt(t.visibleWrites,e);return n.forEachChild(fe,(o,a)=>{const l=Hn(zt(r,new ee(o)),a);s=s.updateImmediateChild(o,l)}),Rc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=zt(t.visibleWrites,e);return Rc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function B1(t,e,n,s,i){A(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=me(e,n);if(ko(t.visibleWrites,r))return null;{const o=zt(t.visibleWrites,r);return Mo(o)?i.getChild(n):Hn(o,i.getChild(n))}}function W1(t,e,n,s){const i=me(e,n),r=vn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=zt(t.visibleWrites,i);return Hn(o,s.getNode().getImmediateChild(n))}else return null}function U1(t,e){return vn(t.visibleWrites,e)}function z1(t,e,n,s,i,r,o){let a;const l=zt(t.visibleWrites,e),c=vn(l,K());if(c!=null)a=c;else if(n!=null)a=Hn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)f(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function H1(){return{visibleWrites:tt.empty(),allWrites:[],lastWriteId:-1}}function Ki(t,e,n,s){return Oh(t.writeTree,t.treePath,e,n,s)}function Ua(t,e){return F1(t.writeTree,t.treePath,e)}function kc(t,e,n,s){return B1(t.writeTree,t.treePath,e,n,s)}function qi(t,e){return U1(t.writeTree,me(t.treePath,e))}function $1(t,e,n,s,i,r){return z1(t.writeTree,t.treePath,e,n,s,i,r)}function za(t,e,n){return W1(t.writeTree,t.treePath,e,n)}function Rh(t,e){return kh(me(t.treePath,e),t.writeTree)}function kh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class j1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ks(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Rs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,zn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ks(s,e.snapshotNode,i.oldSnap));else throw jn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class V1{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Mh=new V1;class Ha{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Vt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return za(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mn(this.viewCache_),r=$1(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function G1(t){return{filter:t}}function K1(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function q1(t,e,n,s,i){const r=new j1;let o,a;if(n.type===Ze.OVERWRITE){const c=n;c.source.fromUser?o=Do(t,e,c.path,c.snap,s,i,r):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=Yi(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Ze.MERGE){const c=n;c.source.fromUser?o=Q1(t,e,c.path,c.children,s,i,r):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Lo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Ze.ACK_USER_WRITE){const c=n;c.revert?o=Z1(t,e,c.path,s,i,r):o=X1(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ze.LISTEN_COMPLETE)o=J1(t,e,n.path,s,r);else throw jn("Unknown operation type: "+n.type);const l=r.getChanges();return Y1(e,o,l),{viewCache:o,changes:l}}function Y1(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Gi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Ih(Gi(e)))}}function Dh(t,e,n,s,i,r){const o=e.eventCache;if(qi(s,n)!=null)return e;{let a,l;if(j(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=mn(e),u=c instanceof W?c:W.EMPTY_NODE,f=Ua(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Ki(s,mn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=V(n);if(c===".priority"){A(jt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=kc(s,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=re(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=kc(s,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(u,h):f=o.getNode().getImmediateChild(c)}else f=za(s,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,r):a=o.getNode()}}return gs(e,a,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function Yi(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=V(n);if(!l.isCompleteForPath(n)&&jt(n)>1)return e;const E=re(n),M=l.getNode().getImmediateChild(m).updateChild(E,s);m===".priority"?c=u.updatePriority(l.getNode(),M):c=u.updateChild(l.getNode(),m,M,E,Mh,null)}const f=Ah(e,c,l.isFullyInitialized()||j(n),u.filtersNodes()),h=new Ha(i,f,r);return Dh(t,f,n,i,h,a)}function Do(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ha(i,e,r);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=gs(e,c,!0,t.filter.filtersNodes());else{const f=V(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=gs(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=re(n),m=a.getNode().getImmediateChild(f);let E;if(j(h))E=s;else{const T=u.getCompleteChild(f);T!=null?mh(h)===".priority"&&T.getChild(_h(h)).isEmpty()?E=T:E=T.updateChild(h,s):E=W.EMPTY_NODE}if(m.equals(E))l=e;else{const T=t.filter.updateChild(a.getNode(),f,E,h,u,o);l=gs(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Mc(t,e){return t.eventCache.isCompleteForChild(e)}function Q1(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=me(n,l);Mc(e,V(u))&&(a=Do(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=me(n,l);Mc(e,V(u))||(a=Do(t,a,u,c,i,r,o))}),a}function Dc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Lo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;j(n)?c=s:c=new ae(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),E=Dc(t,m,h);l=Yi(t,l,new ee(f),E,i,r,o,a)}}),c.children.inorderTraversal((f,h)=>{const m=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!m){const E=e.serverCache.getNode().getImmediateChild(f),T=Dc(t,E,h);l=Yi(t,l,new ee(f),T,i,r,o,a)}}),l}function X1(t,e,n,s,i,r,o){if(qi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(j(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Yi(t,e,n,l.getNode().getChild(n),i,r,a,o);if(j(n)){let c=new ae(null);return l.getNode().forEachChild(Dn,(u,f)=>{c=c.set(new ee(u),f)}),Lo(t,e,n,c,i,r,a,o)}else return e}else{let c=new ae(null);return s.foreach((u,f)=>{const h=me(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Lo(t,e,n,c,i,r,a,o)}}function J1(t,e,n,s,i){const r=e.serverCache,o=Ah(e,r.getNode(),r.isFullyInitialized()||j(n),r.isFiltered());return Dh(t,o,n,s,Mh,i)}function Z1(t,e,n,s,i,r){let o;if(qi(s,n)!=null)return e;{const a=new Ha(s,e,i),l=e.eventCache.getNode();let c;if(j(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ki(s,mn(e));else{const f=e.serverCache.getNode();A(f instanceof W,"serverChildren would be complete if leaf node"),u=Ua(s,f)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=V(n);let f=za(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,re(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,W.EMPTY_NODE,re(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ki(s,mn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||qi(s,K())!=null,gs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class e0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new La(s.getIndex()),r=v1(s);this.processor_=G1(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(W.EMPTY_NODE,a.getNode(),null),u=new Vt(l,o.isFullyInitialized(),i.filtersNodes()),f=new Vt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=br(f,u),this.eventGenerator_=new x1(this.query_)}get query(){return this.query_}}function t0(t){return t.viewCache_.serverCache.getNode()}function n0(t){return Gi(t.viewCache_)}function s0(t,e){const n=mn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function Lc(t){return t.eventRegistrations_.length===0}function i0(t,e){t.eventRegistrations_.push(e)}function Fc(t,e,n){const s=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Bc(t,e,n,s){e.type===Ze.MERGE&&e.source.queryId!==null&&(A(mn(t.viewCache_),"We should always have a full cache before handling merges"),A(Gi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=q1(t.processor_,i,e,n,s);return K1(t.processor_,r.viewCache),A(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Lh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function r0(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(r,o)=>{s.push(zn(r,o))}),n.isFullyInitialized()&&s.push(Ih(n.getNode())),Lh(t,s,n.getNode(),e)}function Lh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return T1(t.eventGenerator_,e,n,i)}/**
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
 */let Qi;class Fh{constructor(){this.views=new Map}}function o0(t){A(!Qi,"__referenceConstructor has already been defined"),Qi=t}function a0(){return A(Qi,"Reference.ts has not been loaded"),Qi}function l0(t){return t.views.size===0}function $a(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return A(r!=null,"SyncTree gave us an op for an invalid query."),Bc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Bc(o,e,n,s));return r}}function Bh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Ki(n,i?s:null),l=!1;a?l=!0:s instanceof W?(a=Ua(n,s),l=!1):(a=W.EMPTY_NODE,l=!1);const c=br(new Vt(a,l,!1),new Vt(s,i,!1));return new e0(e,c)}return o}function c0(t,e,n,s,i,r){const o=Bh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),i0(o,n),r0(o,n)}function u0(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Gt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Fc(c,n,s)),Lc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Fc(l,n,s)),Lc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Gt(t)&&r.push(new(a0())(e._repo,e._path)),{removed:r,events:o}}function Wh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ht(t,e){let n=null;for(const s of t.views.values())n=n||s0(s,e);return n}function Uh(t,e){if(e._queryParams.loadsAllData())return Er(t);{const s=e._queryIdentifier;return t.views.get(s)}}function zh(t,e){return Uh(t,e)!=null}function Gt(t){return Er(t)!=null}function Er(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Xi;function f0(t){A(!Xi,"__referenceConstructor has already been defined"),Xi=t}function h0(){return A(Xi,"Reference.ts has not been loaded"),Xi}let d0=1;class Wc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=H1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hh(t,e,n,s,i){return O1(t.pendingWriteTree_,e,n,s,i),i?Zs(t,new pn(Th(),e,n)):[]}function an(t,e,n=!1){const s=R1(t.pendingWriteTree_,e);if(k1(t.pendingWriteTree_,e)){let r=new ae(null);return s.snap!=null?r=r.set(K(),!0):ze(s.children,o=>{r=r.set(new ee(o),!0)}),Zs(t,new Vi(s.path,r,n))}else return[]}function Js(t,e,n){return Zs(t,new pn(Ba(),e,n))}function p0(t,e,n){const s=ae.fromObject(n);return Zs(t,new Ls(Ba(),e,s))}function m0(t,e){return Zs(t,new Ds(Ba(),e))}function g0(t,e,n){const s=Va(t,n);if(s){const i=Ga(s),r=i.path,o=i.queryId,a=Me(r,e),l=new Ds(Wa(o),a);return Ka(t,r,l)}else return[]}function $h(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||zh(o,e))){const l=u0(o,e,n,s);l0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(r,(h,m)=>Gt(m));if(u&&!f){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=b0(h);for(let E=0;E<m.length;++E){const T=m[E],M=T.query,I=Kh(t,T);t.listenProvider_.startListening(ys(M),Fs(t,M),I.hashFn,I.onComplete)}}}!f&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ys(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(wr(h));t.listenProvider_.stopListening(ys(h),m)}))}C0(t,c)}return a}function jh(t,e,n,s){const i=Va(t,s);if(i!=null){const r=Ga(i),o=r.path,a=r.queryId,l=Me(o,e),c=new pn(Wa(a),l,n);return Ka(t,o,c)}else return[]}function _0(t,e,n,s){const i=Va(t,s);if(i){const r=Ga(i),o=r.path,a=r.queryId,l=Me(o,e),c=ae.fromObject(n),u=new Ls(Wa(a),l,c);return Ka(t,o,u)}else return[]}function y0(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const E=Me(h,i);r=r||Ht(m,E),o=o||Gt(m)});let a=t.syncPointTree_.get(i);a?(o=o||Gt(a),r=r||Ht(a,K())):(a=new Fh,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,E)=>{const T=Ht(E,K());T&&(r=r.updateImmediateChild(m,T))}));const c=zh(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=wr(e);A(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=E0();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=Cr(t.pendingWriteTree_,i);let f=c0(a,e,n,u,r,l);if(!c&&!o&&!s){const h=Uh(a,e);f=f.concat(w0(t,e,h))}return f}function ja(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Me(o,e),c=Ht(a,l);if(c)return c});return Oh(i,e,r,n,!0)}function v0(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=Me(c,n);s=s||Ht(u,f)});let i=t.syncPointTree_.get(n);i?s=s||Ht(i,K()):(i=new Fh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Vt(s,!0,!1):null,a=Cr(t.pendingWriteTree_,e._path),l=Bh(i,e,a,r?o.getNode():W.EMPTY_NODE,r);return n0(l)}function Zs(t,e){return Vh(e,t.syncPointTree_,null,Cr(t.pendingWriteTree_,K()))}function Vh(t,e,n,s){if(j(t.path))return Gh(t,e,n,s);{const i=e.get(K());n==null&&i!=null&&(n=Ht(i,K()));let r=[];const o=V(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Rh(s,o);r=r.concat(Vh(a,l,c,u))}return i&&(r=r.concat($a(i,t,s,n))),r}}function Gh(t,e,n,s){const i=e.get(K());n==null&&i!=null&&(n=Ht(i,K()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Rh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Gh(u,a,l,c)))}),i&&(r=r.concat($a(i,t,s,n))),r}function Kh(t,e){const n=e.query,s=Fs(t,n);return{hashFn:()=>(t0(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?g0(t,n._path,s):m0(t,n._path);{const r=yy(i,n);return $h(t,n,null,r)}}}}function Fs(t,e){const n=wr(e);return t.queryToTagMap.get(n)}function wr(t){return t._path.toString()+"$"+t._queryIdentifier}function Va(t,e){return t.tagToQueryMap.get(e)}function Ga(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function Ka(t,e,n){const s=t.syncPointTree_.get(e);A(s,"Missing sync point for query tag that we're tracking");const i=Cr(t.pendingWriteTree_,e);return $a(s,n,i,null)}function b0(t){return t.fold((e,n,s)=>{if(n&&Gt(n))return[Er(n)];{let i=[];return n&&(i=Wh(n)),ze(s,(r,o)=>{i=i.concat(o)}),i}})}function ys(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(h0())(t._repo,t._path):t}function C0(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=wr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function E0(){return d0++}function w0(t,e,n){const s=e._path,i=Fs(t,e),r=Kh(t,n),o=t.listenProvider_.startListening(ys(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)A(!Gt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!j(c)&&u&&Gt(u))return[Er(u).query];{let h=[];return u&&(h=h.concat(Wh(u).map(m=>m.query))),ze(f,(m,E)=>{h=h.concat(E)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ys(u),Fs(t,u))}}return o}/**
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
 */class qa{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qa(n)}node(){return this.node_}}class Ya{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=me(this.path_,e);return new Ya(this.syncTree_,n)}node(){return ja(this.syncTree_,this.path_)}}const S0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Uc=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return I0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return x0(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},I0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},x0=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&A(!1,"Unexpected increment value: "+s);const i=e.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},T0=function(t,e,n,s){return Qa(e,new Ya(n,t),s)},qh=function(t,e,n){return Qa(t,new qa(e),n)};function Qa(t,e,n){const s=t.getPriority().val(),i=Uc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Uc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,be(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(fe,(a,l)=>{const c=Qa(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Xa{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ja(t,e){let n=e instanceof ee?e:new ee(e),s=t,i=V(n);for(;i!==null;){const r=Wn(s.node.children,i)||{children:{},childCount:0};s=new Xa(i,s,r),n=re(n),i=V(n)}return s}function qn(t){return t.node.value}function Yh(t,e){t.node.value=e,Fo(t)}function Qh(t){return t.node.childCount>0}function A0(t){return qn(t)===void 0&&!Qh(t)}function Sr(t,e){ze(t.node.children,(n,s)=>{e(new Xa(n,t,s))})}function Xh(t,e,n,s){n&&!s&&e(t),Sr(t,i=>{Xh(i,e,!0,s)}),n&&s&&e(t)}function N0(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ei(t){return new ee(t.parent===null?t.name:ei(t.parent)+"/"+t.name)}function Fo(t){t.parent!==null&&P0(t.parent,t.name,t)}function P0(t,e,n){const s=A0(n),i=Mt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Fo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fo(t))}/**
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
 */const O0=/[\[\].#$\/\u0000-\u001F\u007F]/,R0=/[\[\].#$\u0000-\u001F\u007F]/,no=10*1024*1024,Jh=function(t){return typeof t=="string"&&t.length!==0&&!O0.test(t)},Zh=function(t){return typeof t=="string"&&t.length!==0&&!R0.test(t)},k0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zh(t)},M0=function(t,e,n,s){s&&e===void 0||Za(Ta(t,"value"),e,n)},Za=function(t,e,n){const s=n instanceof ee?new Xy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+sn(s));if(typeof e=="function")throw new Error(t+"contains a function "+sn(s)+" with contents = "+e.toString());if(qf(e))throw new Error(t+"contains "+e.toString()+" "+sn(s));if(typeof e=="string"&&e.length>no/3&&yr(e)>no)throw new Error(t+"contains a string greater than "+no+" utf8 bytes "+sn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ze(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Jh(o)))throw new Error(t+" contains an invalid key ("+o+") "+sn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Jy(s,o),Za(t,a,s),Zy(s)}),i&&r)throw new Error(t+' contains ".value" child '+sn(s)+" in addition to actual children.")}},ed=function(t,e,n,s){if(!(s&&n===void 0)&&!Zh(n))throw new Error(Ta(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},D0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ed(t,e,n,s)},L0=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},F0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!k0(n))throw new Error(Ta(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class B0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function td(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!yh(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function _t(t,e,n){td(t,n),W0(t,s=>Je(s,e)||Je(e,s))}function W0(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(U0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function U0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();fn&&xe("event: "+n.toString()),Kn(s)}}}/**
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
 */const z0="repo_interrupt",H0=25;class $0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new B0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ji(),this.transactionQueueTree_=new Xa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function j0(t,e,n){if(t.stats_=Ra(t.repoInfo_),t.forceRestClient_||Ey())t.server_=new $i(t.repoInfo_,(s,i,r,o)=>{zc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new It(t.repoInfo_,e,(s,i,r,o)=>{zc(t,s,i,r,o)},s=>{Hc(t,s)},s=>{G0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ty(t.repoInfo_,()=>new I1(t.stats_,t.server_)),t.infoData_=new b1,t.infoSyncTree_=new Wc({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Js(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),tl(t,"connected",!1),t.serverSyncTree_=new Wc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);_t(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function V0(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function el(t){return S0({timestamp:V0(t)})}function zc(t,e,n,s,i){t.dataUpdateCount++;const r=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Li(n,c=>be(c));o=_0(t.serverSyncTree_,r,l,i)}else{const l=be(n);o=jh(t.serverSyncTree_,r,l,i)}else if(s){const l=Li(n,c=>be(c));o=p0(t.serverSyncTree_,r,l)}else{const l=be(n);o=Js(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=xr(t,r)),_t(t.eventQueue_,a,o)}function Hc(t,e){tl(t,"connected",e),e===!1&&Y0(t)}function G0(t,e){ze(e,(n,s)=>{tl(t,n,s)})}function tl(t,e,n){const s=new ee("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(s,i);const r=Js(t.infoSyncTree_,s,i);_t(t.eventQueue_,s,r)}function nd(t){return t.nextWriteId_++}function K0(t,e,n){const s=v0(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=be(i).withIndex(e._queryParams.getIndex());y0(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Js(t.serverSyncTree_,e._path,r);else{const a=Fs(t.serverSyncTree_,e);o=jh(t.serverSyncTree_,e._path,r,a)}return _t(t.eventQueue_,e._path,o),$h(t.serverSyncTree_,e,n,null,!0),r},i=>(Ir(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function q0(t,e,n,s,i){Ir(t,"set",{path:e.toString(),value:n,priority:s});const r=el(t),o=be(n,s),a=ja(t.serverSyncTree_,e),l=qh(o,a,r),c=nd(t),u=Hh(t.serverSyncTree_,e,l,c,!0);td(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const E=h==="ok";E||Ue("set at "+e+" failed: "+h);const T=an(t.serverSyncTree_,c,!E);_t(t.eventQueue_,e,T),X0(t,i,h,m)});const f=ad(t,e);xr(t,f),_t(t.eventQueue_,f,[])}function Y0(t){Ir(t,"onDisconnectEvents");const e=el(t),n=ji();Ro(t.onDisconnect_,K(),(i,r)=>{const o=T0(i,r,t.serverSyncTree_,e);xh(n,i,o)});let s=[];Ro(n,K(),(i,r)=>{s=s.concat(Js(t.serverSyncTree_,i,r));const o=ad(t,i);xr(t,o)}),t.onDisconnect_=ji(),_t(t.eventQueue_,K(),s)}function Q0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(z0)}function Ir(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xe(n,...e)}function X0(t,e,n,s){e&&Kn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function sd(t,e,n){return ja(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function nl(t,e=t.transactionQueueTree_){if(e||Tr(t,e),qn(e)){const n=rd(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&J0(t,ei(e),n)}else Qh(e)&&Sr(e,n=>{nl(t,n)})}function J0(t,e,n){const s=n.map(c=>c.currentWriteId),i=sd(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];A(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Me(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ir(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(an(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Tr(t,Ja(t.transactionQueueTree_,e)),nl(t,t.transactionQueueTree_),_t(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)Kn(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ue("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}xr(t,e)}},o)}function xr(t,e){const n=id(t,e),s=ei(n),i=rd(t,n);return Z0(t,i,s),s}function Z0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Me(n,l.path);let u=!1,f;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(an(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=H0)u=!0,f="maxretry",i=i.concat(an(t.serverSyncTree_,l.currentWriteId,!0));else{const h=sd(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Za("transaction failed: Data returned ",m,l.path);let E=be(m);typeof m=="object"&&m!=null&&Mt(m,".priority")||(E=E.updatePriority(h.getPriority()));const M=l.currentWriteId,I=el(t),_=qh(E,h,I);l.currentOutputSnapshotRaw=E,l.currentOutputSnapshotResolved=_,l.currentWriteId=nd(t),o.splice(o.indexOf(M),1),i=i.concat(Hh(t.serverSyncTree_,l.path,_,l.currentWriteId,l.applyLocally)),i=i.concat(an(t.serverSyncTree_,M,!0))}else u=!0,f="nodata",i=i.concat(an(t.serverSyncTree_,l.currentWriteId,!0))}_t(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Tr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Kn(s[a]);nl(t,t.transactionQueueTree_)}function id(t,e){let n,s=t.transactionQueueTree_;for(n=V(e);n!==null&&qn(s)===void 0;)s=Ja(s,n),e=re(e),n=V(e);return s}function rd(t,e){const n=[];return od(t,e,n),n.sort((s,i)=>s.order-i.order),n}function od(t,e,n){const s=qn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Sr(e,i=>{od(t,i,n)})}function Tr(t,e){const n=qn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Yh(e,n.length>0?n:void 0)}Sr(e,s=>{Tr(t,s)})}function ad(t,e){const n=ei(id(t,e)),s=Ja(t.transactionQueueTree_,e);return N0(s,i=>{so(t,i)}),so(t,s),Xh(s,i=>{so(t,i)}),n}function so(t,e){const n=qn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(an(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Yh(e,void 0):n.length=r+1,_t(t.eventQueue_,ei(e),i);for(let o=0;o<s.length;o++)Kn(s[o])}}/**
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
 */function ev(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function tv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const $c=function(t,e){const n=nv(t),s=n.namespace;n.domain==="firebase.com"&&Pt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Pt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||dy();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new oh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ee(n.pathString)}},nv=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=ev(t.substring(u,f)));const h=tv(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class sv{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class iv{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class rv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class sl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return j(this._path)?null:mh(this._path)}get ref(){return new Dt(this._repo,this._path)}get _queryIdentifier(){const e=Ac(this._queryParams),n=Pa(e);return n==="{}"?"default":n}get _queryObject(){return Ac(this._queryParams)}isEqual(e){if(e=Vn(e),!(e instanceof sl))return!1;const n=this._repo===e._repo,s=yh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Qy(this._path)}}class Dt extends sl{constructor(e,n){super(e,n,new Fa,!1)}get parent(){const e=_h(this._path);return e===null?null:new Dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Bs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),s=Ws(this.ref,e);return new Bs(this._node.getChild(n),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Bs(i,Ws(this.ref,s),fe)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bo(t,e){return t=Vn(t),t._checkNotDeleted("ref"),e!==void 0?Ws(t._root,e):t._root}function Ws(t,e){return t=Vn(t),V(t._path)===null?D0("child","path",e,!1):ed("child","path",e,!1),new Dt(t._repo,me(t._path,e))}function ld(t,e){t=Vn(t),L0("set",t._path),M0("set",e,t._path,!1);const n=new _r;return q0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function jc(t){t=Vn(t);const e=new rv(()=>{}),n=new il(e);return K0(t._repo,t,n).then(s=>new Bs(s,new Dt(t._repo,t._path),t._queryParams.getIndex()))}class il{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new sv("value",this,new Bs(e.snapshotNode,new Dt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new iv(this,e,n):null}matches(e){return e instanceof il?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}o0(Dt);f0(Dt);/**
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
 */const ov="FIREBASE_DATABASE_EMULATOR_HOST",Wo={};let av=!1;function lv(t,e,n,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Wf(r);t.repoInfo_=new oh(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function cv(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Pt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$c(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[ov]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=$c(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Mn(Mn.OWNER):new Sy(t.name,t.options,e);F0("Invalid Firebase Database URL",o),j(o.path)||Pt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=fv(a,t,u,new wy(t,n));return new hv(f,t)}function uv(t,e){const n=Wo[e];(!n||n[t.key]!==t)&&Pt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Q0(t),delete n[t.key]}function fv(t,e,n,s){let i=Wo[e.name];i||(i={},Wo[e.name]=i);let r=i[t.toURLString()];return r&&Pt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new $0(t,av,n,s),i[t.toURLString()]=r,r}class hv{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(j0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dt(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pt("Cannot call "+e+" on a deleted database.")}}function cd(t=Y_(),e){const n=j_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=kg("database");s&&dv(n,...s)}return n}function dv(t,e,n,s={}){t=Vn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Fi(s,r.repoInfo_.emulatorOptions))return;Pt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Pt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Mn(Mn.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Mg(s.mockUserToken,t.app.options.projectId);o=new Mn(a)}Wf(e)&&Kg(e),lv(r,i,s,o)}/**
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
 */function pv(t){ly(q_),Wi(new Ns("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return cv(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Rn(fc,hc,t),Rn(fc,hc,"esm2020")}It.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};It.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};pv();const ud={apiKey:"AIzaSyAafPKtLoc5BfiqN-j9AGJLlkIcEbJE3rw",authDomain:"squash-list.firebaseapp.com",databaseURL:"https://squash-list-default-rtdb.firebaseio.com",projectId:"squash-list",storageBucket:"squash-list.appspot.com",messagingSenderId:"537914321064",appId:"1:537914321064:web:6df5523c5fc9d1c9b83a9d"};const mv={class:"header"},gv={class:"header-top"},_v={class:"header-controls"},yv=["title","aria-label"],vv=["title","aria-label"],bv={class:"filter-label"},Cv={class:"suggest"},Ev={key:0,class:"form-title"},wv={key:1,class:"error"},Sv={key:2,class:"success"},Iv=["value"],xv=["disabled"],Tv={__name:"Header",props:{categories:{type:Array,default:()=>[]},darkMode:Boolean},emits:["search","paidFilter","toggleDarkMode"],setup(t,{emit:e}){const n=e,s=de("");St(s,_=>n("search",_));const i=de("all"),r={all:"All",free:"Free",paid:"Paid"},o=()=>{i.value==="all"?i.value="free":i.value==="free"?i.value="paid":i.value="all",n("paidFilter",i.value)},a=de(null),l=de(!1),c=de({name:"",url:"",desc:"",category:""}),u=de(null),f=de(!0),h=de(!1),m=de(!1),E=()=>{l.value=!0,c.value={name:"",url:"",desc:"",category:""},f.value=!0,h.value=!1,m.value=!1};St(l,_=>{_&&_a(()=>u.value.focus())}),St(c,_=>{f.value=!(_.name&&_.url)},{deep:!0});const T=Na(ud),M=cd(T),I=()=>{f.value=!0,ld(Bo(M,`/suggest/item-${Math.floor(Date.now()*Math.random())}`),lr(c)).then(()=>m.value=!0).catch(()=>h.value=!0)};return Gs(()=>{let _=0,y=0;a.value.addEventListener("touchstart",x=>{_=x.changedTouches[0].screenX}),a.value.addEventListener("touchend",x=>{y=x.changedTouches[0].screenX,y>_+100&&(l.value=!1)}),document.addEventListener("keydown",x=>{x.code==="Escape"&&(l.value=!1)})}),(_,y)=>{const x=fr("font-awesome-icon");return J(),ue("header",mv,[F("div",gv,[y[9]||(y[9]=F("div",{class:"skip"},[F("a",{class:"sr-only sr-only-focusable",href:"#main"},"Skip to content")],-1)),y[10]||(y[10]=F("div",{class:"logo-wrapper"},[F("img",{src:Eg,class:"logo",alt:"Squashlist logo",width:"172",height:"24"})],-1)),Sn(F("input",{"onUpdate:modelValue":y[0]||(y[0]=L=>s.value=L),type:"search",placeholder:"Search all resources...",class:"search-input","aria-label":"Search resources"},null,512),[[fi,s.value]]),F("div",_v,[F("button",{class:"control-btn",onClick:y[1]||(y[1]=L=>n("toggleDarkMode")),title:t.darkMode?"Switch to light mode":"Switch to dark mode","aria-label":t.darkMode?"Switch to light mode":"Switch to dark mode"},[oe(x,{icon:`fa-solid fa-${t.darkMode?"sun":"moon"}`},null,8,["icon"])],8,yv),F("button",{class:Es(["control-btn",{"filter-active-free":i.value==="free","filter-active-paid":i.value==="paid"}]),onClick:o,title:`Showing: ${r[i.value]} \u2014 click to cycle`,"aria-label":`Filter: ${r[i.value]}`},[oe(x,{icon:"fa-solid fa-money-bills"}),F("span",bv,mt(r[i.value]),1)],10,vv),F("div",Cv,[F("button",{onClick:E},[y[8]||(y[8]=F("span",{class:"tooltip"},"Suggest item",-1)),oe(x,{icon:"fa-solid fa-circle-plus",class:"icon"})])])])]),y[21]||(y[21]=F("h1",{class:"sr-only"},"Squash sites, apps, & resources",-1)),F("div",null,[l.value?(J(),ue("div",{key:0,class:"form-bg",onClick:y[2]||(y[2]=L=>l.value=!1)})):dt("",!0),F("div",{class:Es(["form",{open:l.value}]),ref_key:"formWrapper",ref:a},[l.value?(J(),ue("h2",Ev,[y[12]||(y[12]=F("span",null,"Suggest item",-1)),F("button",{class:"close-icon",onClick:y[3]||(y[3]=L=>l.value=!1)},[oe(x,{icon:"fa-solid fa-xmark"}),y[11]||(y[11]=F("span",{class:"sr-only"},"Close",-1))])])):dt("",!0),h.value?(J(),ue("div",wv,[oe(x,{icon:"fa-solid fa-face-frown",class:"icon"}),y[13]||(y[13]=F("div",null,"Unable to submit",-1))])):m.value?(J(),ue("div",Sv,[oe(x,{icon:"fa-solid fa-face-smile",class:"icon"}),y[14]||(y[14]=F("div",null,"Thanks for making a suggestion!",-1))])):(J(),ue(Ce,{key:3},[l.value?(J(),ue(Ce,{key:0},[y[20]||(y[20]=F("p",null,"Suggest an item to be included in the Squash List",-1)),F("form",{onSubmit:mg(I,["prevent"])},[F("label",null,[y[15]||(y[15]=F("span",null,[hn("Name "),F("span",{class:"required"},"*")],-1)),Sn(F("input",{"onUpdate:modelValue":y[4]||(y[4]=L=>c.value.name=L),type:"text",name:"name",required:"",ref_key:"nameInput",ref:u},null,512),[[fi,c.value.name]])]),F("label",null,[y[16]||(y[16]=F("span",null,[hn("URL "),F("span",{class:"required"},"*")],-1)),Sn(F("input",{"onUpdate:modelValue":y[5]||(y[5]=L=>c.value.url=L),type:"url",name:"url",required:""},null,512),[[fi,c.value.url]])]),F("label",null,[y[18]||(y[18]=F("span",null,"Category",-1)),Sn(F("select",{"onUpdate:modelValue":y[6]||(y[6]=L=>c.value.category=L),name:"category"},[y[17]||(y[17]=F("option",{value:""},"\u2014 Select a category \u2014",-1)),(J(!0),ue(Ce,null,hr(t.categories,L=>(J(),ue("option",{key:L.cat,value:L.cat},mt(L.cat),9,Iv))),128))],512),[[hg,c.value.category]])]),F("label",null,[y[19]||(y[19]=F("span",null,"Description",-1)),Sn(F("input",{"onUpdate:modelValue":y[7]||(y[7]=L=>c.value.desc=L),type:"text",name:"desc"},null,512),[[fi,c.value.desc]])]),F("button",{type:"submit",disabled:f.value},"Submit",8,xv)],32)],64)):dt("",!0)],64))],2)])])}}},Av={class:"footer"},Nv={key:0,class:"visits"},Pv={__name:"Footer",props:{visits:{type:Number,default:0}},setup(t){return(e,n)=>(J(),ue("footer",Av,[n[0]||(n[0]=F("img",{src:"//nuvmo.github.io/media/img/old-dude.jpg",alt:"Nuvmo logo"},null,-1)),n[1]||(n[1]=hn(" a ",-1)),n[2]||(n[2]=F("a",{href:"//nuvmo.github.io",rel:"noopener noreferrer"},"Nuvmo",-1)),n[3]||(n[3]=hn(" project ",-1)),t.visits>0?(J(),ue("span",Nv,"\xB7 "+mt(t.visits.toLocaleString())+" visits",1)):dt("",!0)]))}};const Ov=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Rv=["href"],kv={key:0,class:"new-badge"},Mv={class:"desc"},Dv=30*24*60*60*1e3,Lv={__name:"Item",props:{item:Object},setup(t){Xm(r=>({v368ef678:s.degrees,v943299a8:s.position}));const e=t,n=Math.random()<.5?"-":"",s={degrees:`${n}${Math.random()/1.5}deg`,position:`${n}${Math.random()*3}px`},i=e.item.addedAt?Date.now()-new Date(e.item.addedAt).getTime()<Dv:!1;return(r,o)=>{const a=fr("font-awesome-icon");return J(),ue("a",{href:t.item.url,class:"item",target:"_blank",rel:"noopener noreferrer"},[F("p",null,[hn(mt(t.item.name)+" ",1),lr(i)?(J(),ue("span",kv,"New")):dt("",!0),t.item.paid?(J(),mr(a,{key:1,icon:"fa-solid fa-money-bills",class:"money-icon",title:"Paid service"})):dt("",!0)]),F("p",Mv,mt(t.item.desc),1)],8,Rv)}}},Fv=Ov(Lv,[["__scopeId","data-v-94194ab4"]]),Bv=["id"],Wv={class:"item-count"},Uv=["aria-expanded","aria-label"],zv={class:"items-wrapper"},Hv={__name:"Category",props:{category:Object,searchQuery:{type:String,default:""},paidFilter:{type:String,default:"all"}},setup(t){const e=t,n=de(!1),s=de(!1),i=()=>{n.value=window.innerWidth<=600,s.value=window.innerWidth<=600};Gs(()=>{i(),window.addEventListener("resize",i)}),tf(()=>{window.removeEventListener("resize",i)});const r=ke(()=>{var u;let c=(u=e.category.items)!=null?u:[];if(e.paidFilter==="free"?c=c.filter(f=>!f.paid):e.paidFilter==="paid"&&(c=c.filter(f=>f.paid)),e.searchQuery){const f=e.searchQuery.toLowerCase();c=c.filter(h=>h.name.toLowerCase().includes(f)||h.desc&&h.desc.toLowerCase().includes(f))}return c}),o=de(!0),a=ke(()=>[...r.value].sort((c,u)=>o.value?c.name>u.name?1:-1:c.name<u.name?1:-1)),l=ke(()=>"cat-"+e.category.cat.toLowerCase().replace(/\s+/g,"-"));return(c,u)=>{const f=fr("font-awesome-icon");return a.value.length>0?(J(),ue("div",{key:0,class:"category",id:l.value},[F("h2",null,[oe(f,{icon:`fa-solid fa-${t.category.icon}`,class:"icon"},null,8,["icon"]),F("span",null,mt(t.category.cat),1),F("span",Wv,mt(a.value.length),1),F("button",{class:"sort-btn",onClick:u[0]||(u[0]=h=>o.value=!o.value)},[oe(f,{icon:`fa-solid ${o.value?"fa-arrow-down-a-z":"fa-arrow-up-z-a"}`,title:o.value?"Sort Z to A":"Sort A to Z",class:"icon"},null,8,["icon","title"])]),n.value?(J(),ue("button",{key:0,class:"collapse-btn",onClick:u[1]||(u[1]=h=>s.value=!s.value),"aria-expanded":!s.value,"aria-label":s.value?"Expand category":"Collapse category"},[oe(f,{icon:`fa-solid fa-chevron-${s.value?"down":"up"}`},null,8,["icon"])],8,Uv)):dt("",!0)]),Sn(F("div",zv,[(J(!0),ue(Ce,null,hr(a.value,h=>(J(),mr(Fv,{key:h.url,item:h},null,8,["item"]))),128))],512),[[Qm,!s.value]])],8,Bv)):dt("",!0)}}},$v={key:0,class:"cat-nav","aria-label":"Jump to category"},jv=["onClick"],Vv={__name:"CategoryNav",props:{categories:{type:Array,default:()=>[]}},emits:["scrollTo"],setup(t,{emit:e}){const n=e;return(s,i)=>{const r=fr("font-awesome-icon");return t.categories.length?(J(),ue("nav",$v,[(J(!0),ue(Ce,null,hr(t.categories,(o,a)=>(J(),ue("button",{key:o.cat,class:"cat-chip",onClick:l=>n("scrollTo",a)},[oe(r,{icon:`fa-solid fa-${o.icon}`},null,8,["icon"]),hn(" "+mt(o.cat),1)],8,jv))),128))])):dt("",!0)}}};const Gv={class:"wrapper"},Kv={key:0,class:"loading"},qv={key:1,class:"error"},Yv="*K^3j3YCB80cjijCxNg9JC2AlWyXBZh*zlcbaAilqL2YGx8q9CHcj5dJ$UgFcGooPV*lD5kpkOQswP4zcH$7GB6&ZifR009NFid",Qv={__name:"App",setup(t){const e=Na(ud),n=cd(e),s=Bo(n),i=de([]),r=de(""),o=de(0),a=de(""),l=de("all"),c=window.matchMedia("(prefers-color-scheme: dark)").matches,u=localStorage.getItem("darkMode"),f=de(u!==null?u==="true":c),h=de(null);document.documentElement.setAttribute("data-theme",f.value?"dark":"light"),St(f,_=>{document.documentElement.setAttribute("data-theme",_?"dark":"light"),localStorage.setItem("darkMode",String(_))});const m=_=>{var L,Ee;const y=document.activeElement;["INPUT","TEXTAREA","SELECT"].includes(y==null?void 0:y.tagName)||(_.key==="ArrowRight"?(_.preventDefault(),(L=h.value)==null||L.scrollBy({left:300,behavior:"smooth"})):_.key==="ArrowLeft"&&(_.preventDefault(),(Ee=h.value)==null||Ee.scrollBy({left:-300,behavior:"smooth"})))},E=_=>{const y=h.value;if(!y)return;const x=y.querySelectorAll(".category");x[_]&&(window.innerWidth<=600?x[_].scrollIntoView({behavior:"smooth",block:"start"}):y.scrollTo({left:x[_].offsetLeft,behavior:"smooth"}))};Gs(()=>{T(),document.addEventListener("keydown",m),!({}.VITE_DEV||document.location.search.includes("no-stats"))&&M()});const T=()=>{jc(Ws(s,"categories")).then(_=>{_.exists()&&(i.value=_.val().data)}).catch(_=>{r.value=_})},M=()=>{jc(Ws(s,"visits")).then(_=>{_.exists()&&(o.value=_.val().data,o.value++,I())}).catch(_=>console.log(_))},I=()=>{ld(Bo(n,"/visits/"),{data:lr(o),token:Yv})};return(_,y)=>(J(),ue(Ce,null,[oe(Tv,{categories:i.value,"dark-mode":f.value,onSearch:y[0]||(y[0]=x=>a.value=x),onPaidFilter:y[1]||(y[1]=x=>l.value=x),onToggleDarkMode:y[2]||(y[2]=x=>f.value=!f.value)},null,8,["categories","dark-mode"]),oe(Vv,{categories:i.value,onScrollTo:E},null,8,["categories"]),F("div",Gv,[F("main",{class:"container",id:"main",ref_key:"containerRef",ref:h,tabindex:"-1"},[!i.value.length&&!r.value?(J(),ue("div",Kv,[...y[3]||(y[3]=[F("img",{src:Cg,alt:"loading icon",width:"40"},null,-1),F("span",{class:"sr-only"},"Loading lists...",-1)])])):dt("",!0),r.value?(J(),ue("div",qv,mt(r.value),1)):(J(!0),ue(Ce,{key:2},hr(i.value,(x,L)=>(J(),mr(Hv,{key:L,category:x,"search-query":a.value,"paid-filter":l.value},null,8,["category","search-query","paid-filter"]))),128))],512)]),oe(Pv,{visits:o.value},null,8,["visits"])],64))}};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Xv(t,e,n){return(e=Zv(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Vc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vc(Object(n),!0).forEach(function(s){Xv(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vc(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function Jv(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Zv(t){var e=Jv(t,"string");return typeof e=="symbol"?e:e+""}const Gc=()=>{};let rl={},fd={},hd=null,dd={mark:Gc,measure:Gc};try{typeof window<"u"&&(rl=window),typeof document<"u"&&(fd=document),typeof MutationObserver<"u"&&(hd=MutationObserver),typeof performance<"u"&&(dd=performance)}catch{}const{userAgent:Kc=""}=rl.navigator||{},Kt=rl,le=fd,qc=hd,pi=dd;Kt.document;const Lt=!!le.documentElement&&!!le.head&&typeof le.addEventListener=="function"&&typeof le.createElement=="function",pd=~Kc.indexOf("MSIE")||~Kc.indexOf("Trident/");var eb=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,tb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,md={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},nb={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gd=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ne="classic",Ar="duotone",sb="sharp",ib="sharp-duotone",_d=[Ne,Ar,sb,ib],rb={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ob={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ab=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),lb={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},cb=["fak","fa-kit","fakd","fa-kit-duotone"],Yc={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ub=["kit"],fb={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},hb=["fak","fakd"],db={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Qc={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},mi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],mb=["fak","fa-kit","fakd","fa-kit-duotone"],gb={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_b={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},yb={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Uo={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},vb=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],zo=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...pb,...vb],bb=["solid","regular","light","thin","duotone","brands"],yd=[1,2,3,4,5,6,7,8,9,10],Cb=yd.concat([11,12,13,14,15,16,17,18,19,20]),Eb=[...Object.keys(yb),...bb,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mi.GROUP,mi.SWAP_OPACITY,mi.PRIMARY,mi.SECONDARY].concat(yd.map(t=>"".concat(t,"x"))).concat(Cb.map(t=>"w-".concat(t))),wb={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ot="___FONT_AWESOME___",Ho=16,vd="fa",bd="svg-inline--fa",gn="data-fa-i2svg",$o="data-fa-pseudo-element",Sb="data-fa-pseudo-element-pending",ol="data-prefix",al="data-icon",Xc="fontawesome-i2svg",Ib="async",xb=["HTML","HEAD","STYLE","SCRIPT"],Cd=(()=>{try{return!0}catch{return!1}})();function ti(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ne]}})}const Ed=S({},md);Ed[Ne]=S(S(S(S({},{"fa-duotone":"duotone"}),md[Ne]),Yc.kit),Yc["kit-duotone"]);const Tb=ti(Ed),jo=S({},lb);jo[Ne]=S(S(S(S({},{duotone:"fad"}),jo[Ne]),Qc.kit),Qc["kit-duotone"]);const Jc=ti(jo),Vo=S({},Uo);Vo[Ne]=S(S({},Vo[Ne]),db.kit);const ll=ti(Vo),Go=S({},_b);Go[Ne]=S(S({},Go[Ne]),fb.kit);ti(Go);const Ab=eb,wd="fa-layers-text",Nb=tb,Pb=S({},rb);ti(Pb);const Ob=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],io=nb,Rb=[...ub,...Eb],vs=Kt.FontAwesomeConfig||{};function kb(t){var e=le.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Mb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}le&&typeof le.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,s]=e;const i=Mb(kb(n));i!=null&&(vs[s]=i)});const Sd={styleDefault:"solid",familyDefault:Ne,cssPrefix:vd,replacementClass:bd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vs.familyPrefix&&(vs.cssPrefix=vs.familyPrefix);const $n=S(S({},Sd),vs);$n.autoReplaceSvg||($n.observeMutations=!1);const k={};Object.keys(Sd).forEach(t=>{Object.defineProperty(k,t,{enumerable:!0,set:function(e){$n[t]=e,bs.forEach(n=>n(k))},get:function(){return $n[t]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(t){$n.cssPrefix=t,bs.forEach(e=>e(k))},get:function(){return $n.cssPrefix}});Kt.FontAwesomeConfig=k;const bs=[];function Db(t){return bs.push(t),()=>{bs.splice(bs.indexOf(t),1)}}const Ft=Ho,ft={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lb(t){if(!t||!Lt)return;const e=le.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=le.head.childNodes;let s=null;for(let i=n.length-1;i>-1;i--){const r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=r)}return le.head.insertBefore(e,s),t}const Fb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Us(){let t=12,e="";for(;t-- >0;)e+=Fb[Math.random()*62|0];return e}function Yn(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function cl(t){return t.classList?Yn(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Id(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bb(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Id(t[n]),'" '),"").trim()}function Nr(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ul(t){return t.size!==ft.size||t.x!==ft.x||t.y!==ft.y||t.rotate!==ft.rotate||t.flipX||t.flipY}function Wb(t){let{transform:e,containerWidth:n,iconWidth:s}=t;const i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(s/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Ub(t){let{transform:e,width:n=Ho,height:s=Ho,startCentered:i=!1}=t,r="";return i&&pd?r+="translate(".concat(e.x/Ft-n/2,"em, ").concat(e.y/Ft-s/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/Ft,"em), calc(-50% + ").concat(e.y/Ft,"em)) "):r+="translate(".concat(e.x/Ft,"em, ").concat(e.y/Ft,"em) "),r+="scale(".concat(e.size/Ft*(e.flipX?-1:1),", ").concat(e.size/Ft*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var zb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function xd(){const t=vd,e=bd,n=k.cssPrefix,s=k.replacementClass;let i=zb;if(n!==t||s!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(s))}return i}let Zc=!1;function ro(){k.autoAddCss&&!Zc&&(Lb(xd()),Zc=!0)}var Hb={mixout(){return{dom:{css:xd,insertCss:ro}}},hooks(){return{beforeDOMElementCreation(){ro()},beforeI2svg(){ro()}}}};const Rt=Kt||{};Rt[Ot]||(Rt[Ot]={});Rt[Ot].styles||(Rt[Ot].styles={});Rt[Ot].hooks||(Rt[Ot].hooks={});Rt[Ot].shims||(Rt[Ot].shims=[]);var ht=Rt[Ot];const Td=[],Ad=function(){le.removeEventListener("DOMContentLoaded",Ad),Ji=1,Td.map(t=>t())};let Ji=!1;Lt&&(Ji=(le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(le.readyState),Ji||le.addEventListener("DOMContentLoaded",Ad));function $b(t){!Lt||(Ji?setTimeout(t,0):Td.push(t))}function ni(t){const{tag:e,attributes:n={},children:s=[]}=t;return typeof t=="string"?Id(t):"<".concat(e," ").concat(Bb(n),">").concat(s.map(ni).join(""),"</").concat(e,">")}function eu(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var jb=function(e,n){return function(s,i,r,o){return e.call(n,s,i,r,o)}},oo=function(e,n,s,i){var r=Object.keys(e),o=r.length,a=i!==void 0?jb(n,i):n,l,c,u;for(s===void 0?(l=1,u=e[r[0]]):(l=0,u=s);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function Vb(t){const e=[];let n=0;const s=t.length;for(;n<s;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<s){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ko(t){const e=Vb(t);return e.length===1?e[0].toString(16):null}function Gb(t,e){const n=t.length;let s=t.charCodeAt(e),i;return s>=55296&&s<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(s-55296)*1024+i-56320+65536:s}function tu(t){return Object.keys(t).reduce((e,n)=>{const s=t[n];return!!s.icon?e[s.iconName]=s.icon:e[n]=s,e},{})}function qo(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=n,i=tu(e);typeof ht.hooks.addPack=="function"&&!s?ht.hooks.addPack(t,tu(e)):ht.styles[t]=S(S({},ht.styles[t]||{}),i),t==="fas"&&qo("fa",e)}const{styles:zs,shims:Kb}=ht,Nd=Object.keys(ll),qb=Nd.reduce((t,e)=>(t[e]=Object.keys(ll[e]),t),{});let fl=null,Pd={},Od={},Rd={},kd={},Md={};function Yb(t){return~Rb.indexOf(t)}function Qb(t,e){const n=e.split("-"),s=n[0],i=n.slice(1).join("-");return s===t&&i!==""&&!Yb(i)?i:null}const Dd=()=>{const t=s=>oo(zs,(i,r,o)=>(i[o]=oo(r,s,{}),i),{});Pd=t((s,i,r)=>(i[3]&&(s[i[3]]=r),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{s[a.toString(16)]=r}),s)),Od=t((s,i,r)=>(s[r]=r,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{s[a]=r}),s)),Md=t((s,i,r)=>{const o=i[2];return s[r]=r,o.forEach(a=>{s[a]=r}),s});const e="far"in zs||k.autoFetchSvg,n=oo(Kb,(s,i)=>{const r=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(s.names[r]={prefix:o,iconName:a}),typeof r=="number"&&(s.unicodes[r.toString(16)]={prefix:o,iconName:a}),s},{names:{},unicodes:{}});Rd=n.names,kd=n.unicodes,fl=Pr(k.styleDefault,{family:k.familyDefault})};Db(t=>{fl=Pr(t.styleDefault,{family:k.familyDefault})});Dd();function hl(t,e){return(Pd[t]||{})[e]}function Xb(t,e){return(Od[t]||{})[e]}function ln(t,e){return(Md[t]||{})[e]}function Ld(t){return Rd[t]||{prefix:null,iconName:null}}function Jb(t){const e=kd[t],n=hl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qt(){return fl}const Fd=()=>({prefix:null,iconName:null,rest:[]});function Zb(t){let e=Ne;const n=Nd.reduce((s,i)=>(s[i]="".concat(k.cssPrefix,"-").concat(i),s),{});return _d.forEach(s=>{(t.includes(n[s])||t.some(i=>qb[s].includes(i)))&&(e=s)}),e}function Pr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ne}=e,s=Tb[n][t];if(n===Ar&&!t)return"fad";const i=Jc[n][t]||Jc[n][s],r=t in ht.styles?t:null;return i||r||null}function e2(t){let e=[],n=null;return t.forEach(s=>{const i=Qb(k.cssPrefix,s);i?n=i:s&&e.push(s)}),{iconName:n,rest:e}}function nu(t){return t.sort().filter((e,n,s)=>s.indexOf(e)===n)}function Or(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let s=null;const i=zo.concat(mb),r=nu(t.filter(f=>i.includes(f))),o=nu(t.filter(f=>!zo.includes(f))),a=r.filter(f=>(s=f,!gd.includes(f))),[l=null]=a,c=Zb(r),u=S(S({},e2(o)),{},{prefix:Pr(l,{family:c})});return S(S(S({},u),i2({values:t,family:c,styles:zs,config:k,canonical:u,givenPrefix:s})),t2(n,s,u))}function t2(t,e,n){let{prefix:s,iconName:i}=n;if(t||!s||!i)return{prefix:s,iconName:i};const r=e==="fa"?Ld(i):{},o=ln(s,i);return i=r.iconName||o||i,s=r.prefix||s,s==="far"&&!zs.far&&zs.fas&&!k.autoFetchSvg&&(s="fas"),{prefix:s,iconName:i}}const n2=_d.filter(t=>t!==Ne||t!==Ar),s2=Object.keys(Uo).filter(t=>t!==Ne).map(t=>Object.keys(Uo[t])).flat();function i2(t){const{values:e,family:n,canonical:s,givenPrefix:i="",styles:r={},config:o={}}=t,a=n===Ar,l=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",u=s.prefix==="fad"||s.prefix==="fa-duotone";if(!a&&(l||c||u)&&(s.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),!s.prefix&&n2.includes(n)&&(Object.keys(r).find(h=>s2.includes(h))||o.autoFetchSvg)){const h=ab.get(n).defaultShortPrefixId;s.prefix=h,s.iconName=ln(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||i==="fa")&&(s.prefix=qt()||"fas"),s}class r2{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=S(S({},this.definitions[r]||{}),i[r]),qo(r,i[r]);const o=ll[Ne][r];o&&qo(o,i[r]),Dd()})}reset(){this.definitions={}}_pullDefinitions(e,n){const s=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(s).map(i=>{const{prefix:r,iconName:o,icon:a}=s[i],l=a[2];e[r]||(e[r]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[r][c]=a)}),e[r][o]=a}),e}}let su=[],xn={};const Ln={},o2=Object.keys(Ln);function a2(t,e){let{mixoutsTo:n}=e;return su=t,xn={},Object.keys(Ln).forEach(s=>{o2.indexOf(s)===-1&&delete Ln[s]}),su.forEach(s=>{const i=s.mixout?s.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),s.hooks){const r=s.hooks();Object.keys(r).forEach(o=>{xn[o]||(xn[o]=[]),xn[o].push(r[o])})}s.provides&&s.provides(Ln)}),n}function Yo(t,e){for(var n=arguments.length,s=new Array(n>2?n-2:0),i=2;i<n;i++)s[i-2]=arguments[i];return(xn[t]||[]).forEach(o=>{e=o.apply(null,[e,...s])}),e}function _n(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];(xn[t]||[]).forEach(r=>{r.apply(null,n)})}function Yt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ln[t]?Ln[t].apply(null,e):void 0}function Qo(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||qt();if(!!e)return e=ln(n,e)||e,eu(Bd.definitions,n,e)||eu(ht.styles,n,e)}const Bd=new r2,l2=()=>{k.autoReplaceSvg=!1,k.observeMutations=!1,_n("noAuto")},c2={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Lt?(_n("beforeI2svg",t),Yt("pseudoElements2svg",t),Yt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,$b(()=>{f2({autoReplaceSvgRoot:e}),_n("watch",t)})}},u2={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ln(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Pr(t[0]);return{prefix:n,iconName:ln(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(k.cssPrefix,"-"))>-1||t.match(Ab))){const e=Or(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||qt(),iconName:ln(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=qt();return{prefix:e,iconName:ln(e,t)||t}}}},Ge={noAuto:l2,config:k,dom:c2,parse:u2,library:Bd,findIconDefinition:Qo,toHtml:ni},f2=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=le}=t;(Object.keys(ht.styles).length>0||k.autoFetchSvg)&&Lt&&k.autoReplaceSvg&&Ge.dom.i2svg({node:e})};function Rr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ni(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Lt)return;const n=le.createElement("div");return n.innerHTML=t.html,n.children}}),t}function h2(t){let{children:e,main:n,mask:s,attributes:i,styles:r,transform:o}=t;if(ul(o)&&n.found&&!s.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=Nr(S(S({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function d2(t){let{prefix:e,iconName:n,children:s,attributes:i,symbol:r}=t;const o=r===!0?"".concat(e,"-").concat(k.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},i),{},{id:o}),children:s}]}]}function dl(t){const{icons:{main:e,mask:n},prefix:s,iconName:i,transform:r,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:f=!1}=t,{width:h,height:m}=n.found?n:e,E=hb.includes(s),T=[k.replacementClass,i?"".concat(k.cssPrefix,"-").concat(i):""].filter(L=>u.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(u.classes).join(" ");let M={children:[],attributes:S(S({},u.attributes),{},{"data-prefix":s,"data-icon":i,class:T,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(m)})};const I=E&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/m*16*.0625,"em")}:{};f&&(M.attributes[gn]=""),a&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(c||Us())},children:[a]}),delete M.attributes.title);const _=S(S({},M),{},{prefix:s,iconName:i,main:e,mask:n,maskId:l,transform:r,symbol:o,styles:S(S({},I),u.styles)}),{children:y,attributes:x}=n.found&&e.found?Yt("generateAbstractMask",_)||{children:[],attributes:{}}:Yt("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=y,_.attributes=x,o?d2(_):h2(_)}function iu(t){const{content:e,width:n,height:s,transform:i,title:r,extra:o,watchable:a=!1}=t,l=S(S(S({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});a&&(l[gn]="");const c=S({},o.styles);ul(i)&&(c.transform=Ub({transform:i,startCentered:!0,width:n,height:s}),c["-webkit-transform"]=c.transform);const u=Nr(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function p2(t){const{content:e,title:n,extra:s}=t,i=S(S(S({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")}),r=Nr(s.styles);r.length>0&&(i.style=r);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ao}=ht;function Xo(t){const e=t[0],n=t[1],[s]=t.slice(4);let i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(io.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(io.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(io.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:i}}const m2={found:!1,width:512,height:512};function g2(t,e){!Cd&&!k.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Jo(t,e){let n=e;return e==="fa"&&k.styleDefault!==null&&(e=qt()),new Promise((s,i)=>{if(n==="fa"){const r=Ld(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&ao[e]&&ao[e][t]){const r=ao[e][t];return s(Xo(r))}g2(t,e),s(S(S({},m2),{},{icon:k.showMissingIcons&&t?Yt("missingIconAbstract")||{}:{}}))})}const ru=()=>{},Zo=k.measurePerformance&&pi&&pi.mark&&pi.measure?pi:{mark:ru,measure:ru},as='FA "6.7.2"',_2=t=>(Zo.mark("".concat(as," ").concat(t," begins")),()=>Wd(t)),Wd=t=>{Zo.mark("".concat(as," ").concat(t," ends")),Zo.measure("".concat(as," ").concat(t),"".concat(as," ").concat(t," begins"),"".concat(as," ").concat(t," ends"))};var pl={begin:_2,end:Wd};const Ci=()=>{};function ou(t){return typeof(t.getAttribute?t.getAttribute(gn):null)=="string"}function y2(t){const e=t.getAttribute?t.getAttribute(ol):null,n=t.getAttribute?t.getAttribute(al):null;return e&&n}function v2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(k.replacementClass)}function b2(){return k.autoReplaceSvg===!0?Ei.replace:Ei[k.autoReplaceSvg]||Ei.replace}function C2(t){return le.createElementNS("http://www.w3.org/2000/svg",t)}function E2(t){return le.createElement(t)}function Ud(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?C2:E2}=e;if(typeof t=="string")return le.createTextNode(t);const s=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){s.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){s.appendChild(Ud(r,{ceFn:n}))}),s}function w2(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ei={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ud(n),e)}),e.getAttribute(gn)===null&&k.keepOriginalSource){let n=le.createComment(w2(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~cl(e).indexOf(k.replacementClass))return Ei.replace(t);const s=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((o,a)=>(a===k.replacementClass||a.match(s)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const i=n.map(r=>ni(r)).join(`
`);e.setAttribute(gn,""),e.innerHTML=i}};function au(t){t()}function zd(t,e){const n=typeof e=="function"?e:Ci;if(t.length===0)n();else{let s=au;k.mutateApproach===Ib&&(s=Kt.requestAnimationFrame||au),s(()=>{const i=b2(),r=pl.begin("mutate");t.map(i),r(),n()})}}let ml=!1;function Hd(){ml=!0}function ea(){ml=!1}let Zi=null;function lu(t){if(!qc||!k.observeMutations)return;const{treeCallback:e=Ci,nodeCallback:n=Ci,pseudoElementsCallback:s=Ci,observeMutationsRoot:i=le}=t;Zi=new qc(r=>{if(ml)return;const o=qt();Yn(r).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!ou(a.addedNodes[0])&&(k.searchPseudoElements&&s(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&k.searchPseudoElements&&s(a.target.parentNode),a.type==="attributes"&&ou(a.target)&&~Ob.indexOf(a.attributeName))if(a.attributeName==="class"&&y2(a.target)){const{prefix:l,iconName:c}=Or(cl(a.target));a.target.setAttribute(ol,l||o),c&&a.target.setAttribute(al,c)}else v2(a.target)&&n(a.target)})}),Lt&&Zi.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function S2(){!Zi||Zi.disconnect()}function I2(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((s,i)=>{const r=i.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(s[o]=a.join(":").trim()),s},{})),n}function x2(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"";let i=Or(cl(t));return i.prefix||(i.prefix=qt()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&s.length>0&&(i.iconName=Xb(i.prefix,t.innerText)||hl(i.prefix,Ko(t.innerText))),!i.iconName&&k.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function T2(t){const e=Yn(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),s=t.getAttribute("data-fa-title-id");return k.autoA11y&&(n?e["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(s||Us()):(e["aria-hidden"]="true",e.focusable="false")),e}function A2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ft,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function cu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:s,rest:i}=x2(t),r=T2(t),o=Yo("parseNodeAttributes",{},t);let a=e.styleParser?I2(t):[];return S({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:ft,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:r}},o)}const{styles:N2}=ht;function $d(t){const e=k.autoReplaceSvg==="nest"?cu(t,{styleParser:!1}):cu(t);return~e.extra.classes.indexOf(wd)?Yt("generateLayersText",t,e):Yt("generateSvgReplacementMutation",t,e)}function P2(){return[...cb,...zo]}function uu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Lt)return Promise.resolve();const n=le.documentElement.classList,s=u=>n.add("".concat(Xc,"-").concat(u)),i=u=>n.remove("".concat(Xc,"-").concat(u)),r=k.autoFetchSvg?P2():gd.concat(Object.keys(N2));r.includes("fa")||r.push("fa");const o=[".".concat(wd,":not([").concat(gn,"])")].concat(r.map(u=>".".concat(u,":not([").concat(gn,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Yn(t.querySelectorAll(o))}catch{}if(a.length>0)s("pending"),i("complete");else return Promise.resolve();const l=pl.begin("onTree"),c=a.reduce((u,f)=>{try{const h=$d(f);h&&u.push(h)}catch(h){Cd||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(h=>{zd(h,()=>{s("active"),s("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(h=>{l(),f(h)})})}function O2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$d(t).then(n=>{n&&zd([n],e)})}function R2(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(e||{}).icon?e:Qo(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Qo(i||{})),t(s,S(S({},n),{},{mask:i}))}}const k2=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ft,symbol:s=!1,mask:i=null,maskId:r=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:f,iconName:h,icon:m}=t;return Rr(S({type:"icon"},t),()=>(_n("beforeDOMElementCreation",{iconDefinition:t,params:e}),k.autoA11y&&(o?c["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(a||Us()):(c["aria-hidden"]="true",c.focusable="false")),dl({icons:{main:Xo(m),mask:i?Xo(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:h,transform:S(S({},ft),n),symbol:s,title:o,maskId:r,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var M2={mixout(){return{icon:R2(k2)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=uu,t.nodeCallback=O2,t}}},provides(t){t.i2svg=function(e){const{node:n=le,callback:s=()=>{}}=e;return uu(n,s)},t.generateSvgReplacementMutation=function(e,n){const{iconName:s,title:i,titleId:r,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:f}=n;return new Promise((h,m)=>{Promise.all([Jo(s,o),c.iconName?Jo(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[T,M]=E;h([e,dl({icons:{main:T,mask:M},prefix:o,iconName:s,transform:a,symbol:l,maskId:u,title:i,titleId:r,extra:f,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(e){let{children:n,attributes:s,main:i,transform:r,styles:o}=e;const a=Nr(o);a.length>0&&(s.style=a);let l;return ul(r)&&(l=Yt("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:s}}}},D2={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Rr({type:"layer"},()=>{_n("beforeDOMElementCreation",{assembler:t,params:e});let s=[];return t(i=>{Array.isArray(i)?i.map(r=>{s=s.concat(r.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers"),...n].join(" ")},children:s}]})}}}},L2={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:s=[],attributes:i={},styles:r={}}=e;return Rr({type:"counter",content:t},()=>(_n("beforeDOMElementCreation",{content:t,params:e}),p2({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(k.cssPrefix,"-layers-counter"),...s]}})))}}}},F2={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ft,title:s=null,classes:i=[],attributes:r={},styles:o={}}=e;return Rr({type:"text",content:t},()=>(_n("beforeDOMElementCreation",{content:t,params:e}),iu({content:t,transform:S(S({},ft),n),title:s,extra:{attributes:r,styles:o,classes:["".concat(k.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:s,transform:i,extra:r}=n;let o=null,a=null;if(pd){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return k.autoA11y&&!s&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,iu({content:e.innerHTML,width:o,height:a,transform:i,title:s,extra:r,watchable:!0})])}}};const B2=new RegExp('"',"ug"),fu=[1105920,1112319],hu=S(S(S(S({},{FontAwesome:{normal:"fas",400:"fas"}}),ob),wb),gb),ta=Object.keys(hu).reduce((t,e)=>(t[e.toLowerCase()]=hu[e],t),{}),W2=Object.keys(ta).reduce((t,e)=>{const n=ta[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function U2(t){const e=t.replace(B2,""),n=Gb(e,0),s=n>=fu[0]&&n<=fu[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ko(i?e[0]:e),isSecondary:s||i}}function z2(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),i=isNaN(s)?"normal":s;return(ta[n]||{})[i]||W2[n]}function du(t,e){const n="".concat(Sb).concat(e.replace(":","-"));return new Promise((s,i)=>{if(t.getAttribute(n)!==null)return s();const o=Yn(t.children).filter(h=>h.getAttribute($o)===e)[0],a=Kt.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(Nb),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),s();if(c&&f!=="none"&&f!==""){const h=a.getPropertyValue("content");let m=z2(l,u);const{value:E,isSecondary:T}=U2(h),M=c[0].startsWith("FontAwesome");let I=hl(m,E),_=I;if(M){const y=Jb(E);y.iconName&&y.prefix&&(I=y.iconName,m=y.prefix)}if(I&&!T&&(!o||o.getAttribute(ol)!==m||o.getAttribute(al)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);const y=A2(),{extra:x}=y;x.attributes[$o]=e,Jo(I,m).then(L=>{const Ee=dl(S(S({},y),{},{icons:{main:L,mask:Fd()},prefix:m,iconName:_,extra:x,watchable:!0})),_e=le.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(_e,t.firstChild):t.appendChild(_e),_e.outerHTML=Ee.map(st=>ni(st)).join(`
`),t.removeAttribute(n),s()}).catch(i)}else s()}else s()})}function H2(t){return Promise.all([du(t,"::before"),du(t,"::after")])}function $2(t){return t.parentNode!==document.head&&!~xb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute($o)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function pu(t){if(!!Lt)return new Promise((e,n)=>{const s=Yn(t.querySelectorAll("*")).filter($2).map(H2),i=pl.begin("searchPseudoElements");Hd(),Promise.all(s).then(()=>{i(),ea(),e()}).catch(()=>{i(),ea(),n()})})}var j2={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=pu,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=le}=e;k.searchPseudoElements&&pu(n)}}};let mu=!1;var V2={mixout(){return{dom:{unwatch(){Hd(),mu=!0}}}},hooks(){return{bootstrap(){lu(Yo("mutationObserverCallbacks",{}))},noAuto(){S2()},watch(t){const{observeMutationsRoot:e}=t;mu?ea():lu(Yo("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const gu=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,s)=>{const i=s.toLowerCase().split("-"),r=i[0];let o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var G2={mixout(){return{parse:{transform:t=>gu(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=gu(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:s,containerWidth:i,iconWidth:r}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),c="rotate(".concat(s.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},f={transform:"translate(".concat(r/2*-1," -256)")},h={outer:o,inner:u,path:f};return{tag:"g",attributes:S({},h.outer),children:[{tag:"g",attributes:S({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:S(S({},n.icon.attributes),h.path)}]}]}}}};const lo={x:0,y:0,width:"100%",height:"100%"};function _u(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function K2(t){return t.tag==="g"?t.children:[t]}var q2={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),s=n?Or(n.split(" ").map(i=>i.trim())):Fd();return s.prefix||(s.prefix=qt()),t.mask=s,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:s,main:i,mask:r,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:u,icon:f}=r,h=Wb({transform:a,containerWidth:u,iconWidth:l}),m={tag:"rect",attributes:S(S({},lo),{},{fill:"white"})},E=c.children?{children:c.children.map(_u)}:{},T={tag:"g",attributes:S({},h.inner),children:[_u(S({tag:c.tag,attributes:S(S({},c.attributes),h.path)},E))]},M={tag:"g",attributes:S({},h.outer),children:[T]},I="mask-".concat(o||Us()),_="clip-".concat(o||Us()),y={tag:"mask",attributes:S(S({},lo),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,M]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:K2(f)},y]};return n.push(x,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(I,")")},lo)}),{children:n,attributes:s}}}},Y2={provides(t){let e=!1;Kt.matchMedia&&(e=Kt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:S(S({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=S(S({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:S(S({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:S(S({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:S(S({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:S(S({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Q2={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),s=n===null?!1:n===""?!0:n;return t.symbol=s,t}}}},X2=[Hb,M2,D2,L2,F2,j2,V2,G2,q2,Y2,Q2];a2(X2,{mixoutsTo:Ge});Ge.noAuto;const jd=Ge.config,J2=Ge.library;Ge.dom;const er=Ge.parse;Ge.findIconDefinition;Ge.toHtml;const Z2=Ge.icon;Ge.layer;const eC=Ge.text;Ge.counter;function na(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=Array(e);n<e;n++)s[n]=t[n];return s}function tC(t){if(Array.isArray(t))return na(t)}function Se(t,e,n){return(e=aC(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function Xe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yu(Object(n),!0).forEach(function(s){Se(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yu(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function iC(t,e){if(t==null)return{};var n,s,i=rC(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function rC(t,e){if(t==null)return{};var n={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(e.indexOf(s)!==-1)continue;n[s]=t[s]}return n}function sa(t){return tC(t)||nC(t)||lC(t)||sC()}function oC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function aC(t){var e=oC(t,"string");return typeof e=="symbol"?e:e+""}function tr(t){return tr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tr(t)}function lC(t,e){if(t){if(typeof t=="string")return na(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?na(t,e):void 0}}function Cs(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Se({},t,e):{}}function cC(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-rotate-by",t.rotateBy),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),Se(Se(Se(Se(e,"fa-flash",t.flash),"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse),"fa-width-auto",t.widthAuto));return Object.keys(n).map(function(s){return n[s]?s:null}).filter(function(s){return s})}var uC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vd={exports:{}};(function(t){(function(e){var n=function(I,_,y){if(!c(_)||f(_)||h(_)||m(_)||l(_))return _;var x,L=0,Ee=0;if(u(_))for(x=[],Ee=_.length;L<Ee;L++)x.push(n(I,_[L],y));else{x={};for(var _e in _)Object.prototype.hasOwnProperty.call(_,_e)&&(x[I(_e,y)]=n(I,_[_e],y))}return x},s=function(I,_){_=_||{};var y=_.separator||"_",x=_.split||/(?=[A-Z])/;return I.split(x).join(y)},i=function(I){return E(I)?I:(I=I.replace(/[\-_\s]+(.)?/g,function(_,y){return y?y.toUpperCase():""}),I.substr(0,1).toLowerCase()+I.substr(1))},r=function(I){var _=i(I);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(I,_){return s(I,_).toLowerCase()},a=Object.prototype.toString,l=function(I){return typeof I=="function"},c=function(I){return I===Object(I)},u=function(I){return a.call(I)=="[object Array]"},f=function(I){return a.call(I)=="[object Date]"},h=function(I){return a.call(I)=="[object RegExp]"},m=function(I){return a.call(I)=="[object Boolean]"},E=function(I){return I=I-0,I===I},T=function(I,_){var y=_&&"process"in _?_.process:_;return typeof y!="function"?I:function(x,L){return y(x,I,L)}},M={camelize:i,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(I,_){return n(T(i,_),I)},decamelizeKeys:function(I,_){return n(T(o,_),I,_)},pascalizeKeys:function(I,_){return n(T(r,_),I)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=M:e.humps=M})(uC)})(Vd);var fC=Vd.exports,hC=["class","style"];function dC(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var s=n.indexOf(":"),i=fC.camelize(n.slice(0,s)),r=n.slice(s+1).trim();return e[i]=r,e},{})}function pC(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function gl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var s=(t.children||[]).map(function(l){return gl(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=pC(u);break;case"style":l.style=dC(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=iC(n,hC);return If(t.tag,Xe(Xe(Xe({},e),{},{class:i.class,style:Xe(Xe({},i.style),o)},i.attrs),a),s)}var Gd=!1;try{Gd=!0}catch{}function mC(){if(!Gd&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function vu(t){if(t&&tr(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(er.icon)return er.icon(t);if(t===null)return null;if(tr(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var gC=ba({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,n){var s=n.attrs,i=ke(function(){return vu(e.icon)}),r=ke(function(){return Cs("classes",cC(e))}),o=ke(function(){return Cs("transform",typeof e.transform=="string"?er.transform(e.transform):e.transform)}),a=ke(function(){return Cs("mask",vu(e.mask))}),l=ke(function(){var u=Xe(Xe(Xe(Xe({},r.value),o.value),a.value),{},{symbol:e.symbol,maskId:e.maskId});return u.title=e.title,u.titleId=e.titleId,Z2(i.value,u)});St(l,function(u){if(!u)return mC("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=ke(function(){return l.value?gl(l.value.abstract[0],{},s):null});return function(){return c.value}}});ba({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var s=n.slots,i=jd.familyPrefix,r=ke(function(){return["".concat(i,"-layers")].concat(sa(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return If("div",{class:r.value},s.default?s.default():[])}}});ba({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var s=n.attrs,i=jd.familyPrefix,r=ke(function(){return Cs("classes",[].concat(sa(e.counter?["".concat(i,"-layers-counter")]:[]),sa(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=ke(function(){return Cs("transform",typeof e.transform=="string"?er.transform(e.transform):e.transform)}),a=ke(function(){var c=eC(e.value.toString(),Xe(Xe({},o.value),r.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=ke(function(){return gl(a.value,{},s)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const _C={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"]},yC={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},vC={prefix:"fas",iconName:"person-running",icon:[448,512,[127939,"running"],"f70c","M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288l21.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-21.3 0c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352L32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l69.6 0c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"]},bC={prefix:"fas",iconName:"microphone",icon:[384,512,[],"f130","M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z"]},CC={prefix:"fas",iconName:"money-bills",icon:[640,512,[],"e1f3","M96 96l0 224c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64l-64 0 0-64zM224 96c0 35.3-28.7 64-64 64l0-64 64 0zM576 256l0 64-64 0c0-35.3 28.7-64 64-64zM512 96l64 0 0 64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 360c0 66.3 53.7 120 120 120l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-400 0c-39.8 0-72-32.2-72-72l0-240z"]},EC={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L80 480c-44.2 0-80-35.8-80-80L0 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 272c0 8.8 7.2 16 16 16s16-7.2 16-16L96 96zm64 24l0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L184 96c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16z"]},wC={prefix:"fas",iconName:"star-half-stroke",icon:[576,512,["star-half-alt"],"f5c0","M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3 0 289.2zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"]},SC={prefix:"fas",iconName:"basket-shopping",icon:[576,512,["shopping-basket"],"f291","M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},IC={prefix:"fas",iconName:"face-frown",icon:[512,512,[9785,"frown"],"f119","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},xC={prefix:"fas",iconName:"arrow-down-a-z",icon:[576,512,["sort-alpha-asc","sort-alpha-down"],"f15d","M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7 128 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 320c0-17.7 14.3-32 32-32l128 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 416l50.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 352 352 352c-17.7 0-32-14.3-32-32zM416 32c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 224l-88.4 0-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128C392.8 38.8 403.9 32 416 32zM395.8 176l40.4 0L416 135.6 395.8 176z"]},TC={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},AC={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},NC={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},PC={prefix:"fas",iconName:"tv",icon:[640,512,[63717,"television","tv-alt"],"f26c","M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},OC={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},RC={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},kC={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},MC={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},DC={prefix:"fas",iconName:"arrow-up-z-a",icon:[576,512,["sort-alpha-up-alt"],"f882","M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3 128 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 64c0 17.7 14.3 32 32 32l50.7 0-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.7 0 73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L352 32c-17.7 0-32 14.3-32 32zm96 192c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3 88.4 0 7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 262.8 428.1 256 416 256zM395.8 400L416 359.6 436.2 400l-40.4 0z"]};J2.add(AC,PC,vC,EC,wC,SC,_C,CC,MC,OC,IC,RC,xC,DC,bC,kC,TC,NC,yC);yg(Qv).component("font-awesome-icon",gC).mount("#app");
