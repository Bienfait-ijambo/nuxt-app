import{k as T,l as j,m as E,n as m,c as M,a as z,t as D,e as K,o as H}from"./B9w754QG.js";import{u as $}from"./BANG4hUe.js";import{u as q}from"./Bt9fk8HB.js";const P=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function I(n,r){r?r={...P,...r}:r=P;const s=R(r);return s.dispatch(n),s.toString()}const J=Object.freeze(["prototype","__proto__","constructor"]);function R(n){let r="",s=new Map;const t=e=>{r+=e};return{toString(){return r},getContext(){return s},dispatch(e){return n.replacer&&(e=n.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const i=Object.prototype.toString.call(e);let a="";const l=i.length;l<10?a="unknown:["+i+"]":a=i.slice(8,l-1),a=a.toLowerCase();let o=null;if((o=s.get(e))===void 0)s.set(e,s.size);else return this.dispatch("[CIRCULAR:"+o+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")this[a]?this[a](e):n.ignoreUnknown||this.unkown(e,a);else{let u=Object.keys(e);n.unorderedObjects&&(u=u.sort());let f=[];n.respectType!==!1&&!U(e)&&(f=J),n.excludeKeys&&(u=u.filter(c=>!n.excludeKeys(c)),f=f.filter(c=>!n.excludeKeys(c))),t("object:"+(u.length+f.length)+":");const d=c=>{this.dispatch(c),t(":"),n.excludeValues||this.dispatch(e[c]),t(",")};for(const c of u)d(c);for(const c of f)d(c)}},array(e,i){if(i=i===void 0?n.unorderedArrays!==!1:i,t("array:"+e.length+":"),!i||e.length<=1){for(const o of e)this.dispatch(o);return}const a=new Map,l=e.map(o=>{const u=R(n);u.dispatch(o);for(const[f,d]of u.getContext())a.set(f,d);return u.toString()});return s=a,l.sort(),this.array(l,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,i){if(t(i),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),U(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const i=[...e];return this.array(i,n.unorderedSets!==!1)},set(e){t("set:");const i=[...e];return this.array(i,n.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const L="[native code] }",V=L.length;function U(n){return typeof n!="function"?!1:Function.prototype.toString.call(n).slice(-V)===L}var W=Object.defineProperty,G=(n,r,s)=>r in n?W(n,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[r]=s,_=(n,r,s)=>(G(n,typeof r!="symbol"?r+"":r,s),s);class y{constructor(r,s){_(this,"words"),_(this,"sigBytes"),r=this.words=r||[],this.sigBytes=s===void 0?r.length*4:s}toString(r){return(r||Q).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new y([...this.words])}}const Q={stringify(n){const r=[];for(let s=0;s<n.sigBytes;s++){const t=n.words[s>>>2]>>>24-s%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},X={stringify(n){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,i=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,a=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,l=e<<16|i<<8|a;for(let o=0;o<4&&t*8+o*6<n.sigBytes*8;o++)s.push(r.charAt(l>>>6*(3-o)&63))}return s.join("")}},Y={parse(n){const r=n.length,s=[];for(let t=0;t<r;t++)s[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new y(s,r)}},Z={parse(n){return Y.parse(unescape(encodeURIComponent(n)))}};class tt{constructor(){_(this,"_data",new y),_(this,"_nDataBytes",0),_(this,"_minBufferSize",0),_(this,"blockSize",512/32)}reset(){this._data=new y,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=Z.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,i=Math.min(e*4,this._data.sigBytes);if(e){for(let a=0;a<e;a+=this.blockSize)this._doProcessBlock(this._data.words,a);s=this._data.words.splice(0,e),this._data.sigBytes-=i}return new y(s,i)}}class et extends tt{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}var rt=Object.defineProperty,st=(n,r,s)=>r in n?rt(n,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[r]=s,nt=(n,r,s)=>(st(n,r+"",s),s);const N=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],it=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],g=[];class at extends et{constructor(){super(...arguments),nt(this,"_hash",new y([...N]))}reset(){super.reset(),this._hash=new y([...N])}_doProcessBlock(r,s){const t=this._hash.words;let e=t[0],i=t[1],a=t[2],l=t[3],o=t[4],u=t[5],f=t[6],d=t[7];for(let c=0;c<64;c++){if(c<16)g[c]=r[s+c]|0;else{const p=g[c-15],k=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,h=g[c-2],A=(h<<15|h>>>17)^(h<<13|h>>>19)^h>>>10;g[c]=k+g[c-7]+A+g[c-16]}const b=o&u^~o&f,B=e&i^e&a^i&a,S=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),x=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),w=d+x+b+it[c]+g[c],v=S+B;d=f,f=u,u=o,o=l+w|0,l=a,a=i,i=e,e=w+v|0}t[0]=t[0]+e|0,t[1]=t[1]+i|0,t[2]=t[2]+a|0,t[3]=t[3]+l|0,t[4]=t[4]+o|0,t[5]=t[5]+u|0,t[6]=t[6]+f|0,t[7]=t[7]+d|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ot(n){return new at().finalize(n).toString(X)}function ct(n,r={}){const s=typeof n=="string"?n:I(n,r);return ot(s).slice(0,10)}function ut(n,r,s){const[t={},e]=typeof r=="string"?[{},r]:[r,s],i=T(()=>m(n)),a=t.key||ct([e,typeof i.value=="string"?i.value:"",...lt(t)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);const l=a===e?"$f"+a:a;if(!t.baseURL&&typeof i.value=="string"&&i.value[0]==="/"&&i.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:o,lazy:u,default:f,transform:d,pick:c,watch:b,immediate:B,getCachedData:S,deep:x,dedupe:w,...v}=t,p=j({...E,...v,cache:typeof t.cache=="boolean"?void 0:t.cache}),k={server:o,lazy:u,default:f,transform:d,pick:c,immediate:B,getCachedData:S,deep:x,dedupe:w,watch:b===!1?[]:[p,i,...b||[]]};let h;return $(l,()=>{var C;(C=h==null?void 0:h.abort)==null||C.call(h,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),h=typeof AbortController<"u"?new AbortController:{};const F=m(t.timeout);let O;return F&&(O=setTimeout(()=>h.abort(new DOMException("Request aborted due to timeout.","AbortError")),F),h.signal.onabort=()=>clearTimeout(O)),(t.$fetch||globalThis.$fetch)(i.value,{signal:h.signal,...p}).finally(()=>{clearTimeout(O)})},k)}function lt(n){var s;const r=[((s=m(n.method))==null?void 0:s.toUpperCase())||"GET",m(n.baseURL)];for(const t of[n.params||n.query]){const e=m(t);if(!e)continue;const i={};for(const[a,l]of Object.entries(e))i[m(a)]=m(l);r.push(i)}return r}const yt={__name:"test",setup(n){async function r(){var i;let{data:e}=await ut("/api/hello",{method:"POST",body:{some:"json"}},"$E0GG8dcq9Q");console.log("data here : ",(i=e.value)==null?void 0:i.user)}const s=q("counter",()=>0),t=()=>{s.value++,r()};return(e,i)=>(H(),M("div",null,[i[0]||(i[0]=z("div",null,"Returned JSON:",-1)),z("div",null,D(e.data)+" - "+D(K(s)),1),z("button",{onClick:t},"Increment")]))}};export{yt as default};