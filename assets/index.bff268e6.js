(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))g(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&g(h)}).observe(document,{childList:!0,subtree:!0});function e(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function g(s){if(s.ep)return;s.ep=!0;const c=e(s);fetch(s.href,c)}})();var Le=(()=>{var y=import.meta.url;return function(e){e=e||{};var e=typeof e<"u"?e:{},g,s;e.ready=new Promise(function(n,t){g=n,s=t});var c=Object.assign({},e),h=typeof window=="object",b=typeof importScripts=="function",B=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",_="";function ue(n){return e.locateFile?e.locateFile(n,_):_+n}var X,I,G;if(B){b?_=require("path").dirname(_)+"/":_=__dirname+"/";var k,M,W=()=>{M||(k=require("fs"),M=require("path"))};X=(n,t)=>(W(),n=M.normalize(n),k.readFileSync(n,t?void 0:"utf8")),G=n=>{var t=X(n,!0);return t.buffer||(t=new Uint8Array(t)),t},I=(n,t,r)=>{W(),n=M.normalize(n),k.readFile(n,function(o,f){o?r(o):t(f.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(n){if(!(n instanceof Be))throw n}),process.on("unhandledRejection",function(n){throw n}),e.inspect=function(){return"[Emscripten Module object]"}}else(h||b)&&(b?_=self.location.href:typeof document<"u"&&document.currentScript&&(_=document.currentScript.src),y&&(_=y),_.indexOf("blob:")!==0?_=_.substr(0,_.replace(/[?#].*/,"").lastIndexOf("/")+1):_="",X=n=>{var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},b&&(G=n=>{var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),I=(n,t,r)=>{var o=new XMLHttpRequest;o.open("GET",n,!0),o.responseType="arraybuffer",o.onload=()=>{if(o.status==200||o.status==0&&o.response){t(o.response);return}r()},o.onerror=r,o.send(null)});e.print||console.log.bind(console);var U=e.printErr||console.warn.bind(console);Object.assign(e,c),c=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit;var D;e.wasmBinary&&(D=e.wasmBinary),e.noExitRuntime,typeof WebAssembly!="object"&&H("no native wasm support detected");var F,j=!1,z=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function fe(n,t,r){for(var o=t+r,f=t;n[f]&&!(f>=o);)++f;if(f-t>16&&n.buffer&&z)return z.decode(n.subarray(t,f));for(var u="";t<f;){var i=n[t++];if(!(i&128)){u+=String.fromCharCode(i);continue}var a=n[t++]&63;if((i&224)==192){u+=String.fromCharCode((i&31)<<6|a);continue}var m=n[t++]&63;if((i&240)==224?i=(i&15)<<12|a<<6|m:i=(i&7)<<18|a<<12|m<<6|n[t++]&63,i<65536)u+=String.fromCharCode(i);else{var R=i-65536;u+=String.fromCharCode(55296|R>>10,56320|R&1023)}}return u}function de(n,t){return n?fe(P,n,t):""}function le(n,t,r,o){if(!(o>0))return 0;for(var f=r,u=r+o-1,i=0;i<n.length;++i){var a=n.charCodeAt(i);if(a>=55296&&a<=57343){var m=n.charCodeAt(++i);a=65536+((a&1023)<<10)|m&1023}if(a<=127){if(r>=u)break;t[r++]=a}else if(a<=2047){if(r+1>=u)break;t[r++]=192|a>>6,t[r++]=128|a&63}else if(a<=65535){if(r+2>=u)break;t[r++]=224|a>>12,t[r++]=128|a>>6&63,t[r++]=128|a&63}else{if(r+3>=u)break;t[r++]=240|a>>18,t[r++]=128|a>>12&63,t[r++]=128|a>>6&63,t[r++]=128|a&63}}return t[r]=0,r-f}function me(n,t,r){return le(n,P,t,r)}var V,q,P;function K(n){V=n,e.HEAP8=q=new Int8Array(n),e.HEAP16=new Int16Array(n),e.HEAP32=new Int32Array(n),e.HEAPU8=P=new Uint8Array(n),e.HEAPU16=new Uint16Array(n),e.HEAPU32=new Uint32Array(n),e.HEAPF32=new Float32Array(n),e.HEAPF64=new Float64Array(n)}e.INITIAL_MEMORY;var Y=[],$=[],J=[];function pe(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)ye(e.preRun.shift());N(Y)}function ge(){N($)}function _e(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)ve(e.postRun.shift());N(J)}function ye(n){Y.unshift(n)}function he(n){$.unshift(n)}function ve(n){J.unshift(n)}var A=0,S=null;function Re(n){A++,e.monitorRunDependencies&&e.monitorRunDependencies(A)}function we(n){if(A--,e.monitorRunDependencies&&e.monitorRunDependencies(A),A==0&&S){var t=S;S=null,t()}}function H(n){e.onAbort&&e.onAbort(n),n="Aborted("+n+")",U(n),j=!0,n+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(n);throw s(t),t}var be="data:application/octet-stream;base64,";function Q(n){return n.startsWith(be)}function Z(n){return n.startsWith("file://")}var l;e.locateFile?(l="dds.wasm",Q(l)||(l=ue(l))):l=new URL(""+new URL("dds.28e2ac74.wasm",import.meta.url).href,self.location).toString();function x(n){try{if(n==l&&D)return new Uint8Array(D);if(G)return G(n);throw"both async and sync fetching of the wasm failed"}catch(t){H(t)}}function Ae(){if(!D&&(h||b)){if(typeof fetch=="function"&&!Z(l))return fetch(l,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+l+"'";return n.arrayBuffer()}).catch(function(){return x(l)});if(I)return new Promise(function(n,t){I(l,function(r){n(new Uint8Array(r))},t)})}return Promise.resolve().then(function(){return x(l)})}function Ee(){var n={a:Me};function t(i,a){var m=i.exports;e.asm=m,F=e.asm.c,K(F.buffer),e.asm.m,he(e.asm.d),we()}Re();function r(i){t(i.instance)}function o(i){return Ae().then(function(a){return WebAssembly.instantiate(a,n)}).then(function(a){return a}).then(i,function(a){U("failed to asynchronously prepare wasm: "+a),H(a)})}function f(){return!D&&typeof WebAssembly.instantiateStreaming=="function"&&!Q(l)&&!Z(l)&&!B&&typeof fetch=="function"?fetch(l,{credentials:"same-origin"}).then(function(i){var a=WebAssembly.instantiateStreaming(i,n);return a.then(r,function(m){return U("wasm streaming compile failed: "+m),U("falling back to ArrayBuffer instantiation"),o(r)})}):o(r)}if(e.instantiateWasm)try{var u=e.instantiateWasm(n,t);return u}catch(i){U("Module.instantiateWasm callback failed with error: "+i),s(i)}return f().catch(s),{}}function Be(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function N(n){for(;n.length>0;)n.shift()(e)}function Te(n,t){q.set(n,t)}function Ue(n,t,r){P.copyWithin(n,t,t+r)}function De(){return 2147483648}function Pe(n){try{return F.grow(n-V.byteLength+65535>>>16),K(F.buffer),1}catch{}}function Se(n){var t=P.length;n=n>>>0;var r=De();if(n>r)return!1;let o=(m,R)=>m+(R-m%R)%R;for(var f=1;f<=4;f*=2){var u=t*(1+.2/f);u=Math.min(u,n+100663296);var i=Math.min(r,o(Math.max(n,u),65536)),a=Pe(i);if(a)return!0}return!1}function ee(n){var t=e["_"+n];return t}function Ie(n,t,r,o,f){var u={string:p=>{var T=0;if(p!=null&&p!==0){var ae=(p.length<<2)+1;T=O(ae),me(p,T,ae)}return T},array:p=>{var T=O(p.length);return Te(p,T),T}};function i(p){return t==="string"?de(p):t==="boolean"?Boolean(p):p}var a=ee(n),m=[],R=0;if(o)for(var E=0;E<o.length;E++){var ie=u[r[E]];ie?(R===0&&(R=ne()),m[E]=ie(o[E])):m[E]=o[E]}var C=a.apply(null,m);function Fe(p){return R!==0&&te(R),i(p)}return C=Fe(C),C}function Ge(n,t,r,o){r=r||[];var f=r.every(i=>i==="number"||i==="boolean"),u=t!=="string";return u&&f&&!o?ee(n):function(){return Ie(n,t,r,arguments)}}var Me={b:Ue,a:Se};Ee(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.d).apply(null,arguments)},e._call_load_wrapper=function(){return(e._call_load_wrapper=e.asm.e).apply(null,arguments)},e._create_buffer=function(){return(e._create_buffer=e.asm.f).apply(null,arguments)},e._destroy_buffer=function(){return(e._destroy_buffer=e.asm.g).apply(null,arguments)},e._get_pointer=function(){return(e._get_pointer=e.asm.h).apply(null,arguments)},e._get_size=function(){return(e._get_size=e.asm.i).apply(null,arguments)},e._get_width=function(){return(e._get_width=e.asm.j).apply(null,arguments)},e._get_height=function(){return(e._get_height=e.asm.k).apply(null,arguments)},e._get_depth=function(){return(e._get_depth=e.asm.l).apply(null,arguments)};var ne=e.stackSave=function(){return(ne=e.stackSave=e.asm.n).apply(null,arguments)},te=e.stackRestore=function(){return(te=e.stackRestore=e.asm.o).apply(null,arguments)},O=e.stackAlloc=function(){return(O=e.stackAlloc=e.asm.p).apply(null,arguments)};e.cwrap=Ge;var L;S=function n(){L||re(),L||(S=n)};function re(n){if(A>0||(pe(),A>0))return;function t(){L||(L=!0,e.calledRun=!0,!j&&(ge(),g(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),_e()))}e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),t()},1)):t()}if(e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return re(),e.ready}})();let v,w;const Xe=new Promise(y=>{Le().then(async d=>{w=d,v={alloc:w.cwrap("create_buffer","number",["number"]),load:w.cwrap("call_load_wrapper","",["array","number"]),getPointer:w.cwrap("get_pointer","number",[]),getSize:w.cwrap("get_size","number",[]),getWidth:w.cwrap("get_width","number",[]),getHeight:w.cwrap("get_height","number",[]),getDepth:w.cwrap("get_depth","number",[]),clean:w.cwrap("destroy_buffer","",["number"])},y()})});async function ce(y,d={outputFormat:"url",fixTransparency:!0}){let e=await fetch(y);e=await e.arrayBuffer(),e=new Uint8Array(e);const g=v.alloc(e.length);w.HEAPU8.set(e,g),v.load(g,e.length);const s={width:v.getWidth(),height:v.getHeight(),depth:v.getDepth()};let c=new Uint8Array(w.HEAPU8.buffer,v.getPointer(),v.getSize());s.depth===0&&d.fixTransparency&&(c=c.map((b,B)=>B>0&&B%4===3?255:b));const h=await ke(c,s.width,s.height,v.getSize());return v.clean(g),v.clean(v.getPointer()),h?d.outputFormat==="url"?URL.createObjectURL(h):{blob:h,...s}:!1}async function ke(y,d,e,g){if(!d)return!1;const s=document.createElement("canvas");s.width=d,s.height=e;const c=s.getContext("2d"),h=new ImageData(new Uint8ClampedArray(y.slice(0,g)),d,e);return c.drawImage(await createImageBitmap(h,{imageOrientation:"flipY"}),0,0),new Promise((b,B)=>s.toBlob(b))}let se=!1;const He=document.getElementById("demo");function Ne(){if(se)return;se=!0;const y="https://raw.githubusercontent.com/npedotnet/DDSReader/master/images/";`dds_A1R5G5B5_mipmap.dds
dds_A1R5G5B5.dds
dds_A4R4G4B4.dds
dds_A4R4G4B4_mipmap.dds
dds_A8B8G8R8.dds
dds_A8B8G8R8_mipmap.dds
dds_A8R8G8B8.dds
dds_A8R8G8B8_mipmap.dds
dds_DXT1.dds
dds_DXT1_mipmap.dds
dds_DXT2.dds
dds_DXT2_mipmap.dds
dds_DXT3.dds
dds_DXT3_mipmap.dds
dds_DXT4.dds
dds_DXT4_mipmap.dds
dds_DXT5.dds
dds_DXT5_mipmap.dds
dds_R5G6B5.dds
dds_R5G6B5_mipmap.dds
dds_R8G8B8.dds
dds_R8G8B8_mipmap.dds
dds_X1R5G5B5.dds
dds_X1R5G5B5_mipmap.dds
dds_X4R4G4B4.dds
dds_X4R4G4B4_mipmap.dds
dds_X8B8G8R8.dds
dds_X8B8G8R8_mipmap.dds
dds_X8R8G8B8.dds
dds_X8R8G8B8_mipmap.dds`.split(`
`).forEach(d=>{He.innerHTML+=`<img class="dds-image" source="${y}${d}">`}),Xe.then(async()=>{const d=Array.from(document.getElementsByClassName("dds-image"));for(const e of d)try{e.src=await ce(e.getAttribute("source"))}catch(g){e.classList="unsupported-format",console.log(g)}})}document.getElementById("start").onclick=Ne;const oe=document.getElementById("selector"),Oe=document.getElementById("preview");oe.addEventListener("change",async y=>{Oe.src=await ce(URL.createObjectURL(oe.files[0]))});